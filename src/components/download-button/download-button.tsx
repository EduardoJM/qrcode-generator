import { Button } from "../ui/button";
import { toPng } from "html-to-image";

export const DownloadButton = () => {
  const handleDownload = async () => {
    const dataUrl = await toPng(document.getElementById("qrcode"), {});

    const link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <Button type="button" onClick={handleDownload}>
      Baixar
    </Button>
  );
};
