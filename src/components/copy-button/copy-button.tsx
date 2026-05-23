import { Copy } from "lucide-react";
import { Button } from "../ui/button";
import { toPng } from "html-to-image";

function dataURLtoBlob(dataURL: string) {
  const byteString = atob(dataURL.split(",")[1]);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const intArray = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
    intArray[i] = byteString.charCodeAt(i);
  }

  return new Blob([arrayBuffer], { type: "image/png" });
}

export const CopyButton = () => {
  const handleCopy = async () => {
    const dataUrl = await toPng(document.getElementById("qrcode"), {});

    navigator.clipboard.write([
      new ClipboardItem({
        "image/png": dataURLtoBlob(dataUrl),
      }),
    ]);
  };

  return (
    <Button type="button" size="lg" onClick={handleCopy}>
      <Copy />
      Copiar
    </Button>
  );
};
