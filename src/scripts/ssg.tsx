// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from "react";
import fs from "node:fs";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";

const vite = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});

const pages = [
  {
    path: "@/App.tsx",
    dest: "dist/index.html",
    title: "Gerador de QRCode",
    url: "/",
    changefreq: "daily",
    priority: 0.9,
  },
];

async function render(template: string, path: string, title: string) {
  const { default: AppComponent } = await vite.ssrLoadModule(path);
  const html = renderToString(<AppComponent />);
  return template
    .replace("<!--ssg-outlet-->", html)
    .replace(/<title>.*<\/title>/, `<title>${title}</title>`)
    .replace(
      /<meta property="og:title" content=".*" \/>/,
      `<meta property="og:title" content="${title}" />`,
    );
}

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: vite.config.env.VITE_HOME_URL });
  const xml = await streamToPromise(Readable.from(pages).pipe(stream)).then(
    (data) => data.toString(),
  );
  fs.writeFileSync("dist/sitemap.xml", xml);
}

async function main() {
  await generateSitemap();

  const templateHtml = fs.readFileSync("dist/index.html").toString();
  for (const { path, dest, title } of pages) {
    const pageHtml = await render(templateHtml, path, title);

    fs.writeFileSync(dest, pageHtml);
  }
  await vite.close();
}

main();
