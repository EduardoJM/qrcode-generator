import { QrCode } from "lucide-react";

export const NavBar = () => {
  return (
    <nav className="bg-primary text-primary-foreground">
      <div className="px-2 md:px-8 xl:px-40 2xl:px-80 py-5 flex flex-row items-center gap-5">
        <div className="hidden sm:block">
          <QrCode className="size-8" />
        </div>
        <ul className="flex-1 flex flex-col items-stretch sm:flex-row sm:items-center justify-end gap-5">
          <li>
            <a
              className="block text-center sm:text-left text-lg font-medium"
              href="#"
            >
              Início
            </a>
          </li>
          <li>
            <a
              className="block text-center sm:text-left text-lg font-medium"
              href="#gerar-qrcode"
            >
              Novo QRCode
            </a>
          </li>
          <li>
            <a
              className="block text-center sm:text-left text-lg font-medium"
              href="#faq"
            >
              Perguntas Frequentes
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
