import { QRCodeSVG } from "qrcode.react";
import type { CSSProperties } from "react";
import { useQRCode } from "@/context/qrcode-context";

export const QRCode = () => {
  const { foreground, background, frame: Frame, value } = useQRCode();

  return (
    <div
      style={
        {
          "--qrcode-foreground": foreground,
          "--qrcode-background": background,
        } as CSSProperties
      }
      className="flex flex-col items-center"
    >
      <div id="qrcode">
        <Frame>
          <QRCodeSVG value={value} bgColor={background} fgColor={foreground} />
        </Frame>
      </div>
    </div>
  );
};
