import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toPng } from "html-to-image";

export const DownloadButton = () => {
  const handleDownload = async () => {
    const el = document.getElementById("qrcode");
    if (!el) {
      return;
    }

    const dataUrl = await toPng(el, {});

    const link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <Button type="button" size="lg" onClick={handleDownload}>
      <Download />
      Baixar
    </Button>
  );
};
