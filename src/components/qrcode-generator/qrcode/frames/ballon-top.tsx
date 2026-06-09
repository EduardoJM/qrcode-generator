import type { QRCodeFrame } from "./types";

export const BallonTop: QRCodeFrame = ({ children }) => {
  return (
    <div className="flex flex-col items-stretch">
      <div
        className="text-center rounded-lg mb-4 py-1 font-medium relative"
        style={{
          backgroundColor: "var(--qrcode-foreground)",
          color: "var(--qrcode-background)",
        }}
      >
        <div
          className="absolute left-[70%] -bottom-1.5 w-4 h-4 rotate-45"
          style={{ backgroundColor: "var(--qrcode-foreground)" }}
        ></div>
        SCAN-ME
      </div>
      <div
        className="border-8 rounded-lg p-1"
        style={{
          background: "var(--qrcode-background)",
          borderColor: "var(--qrcode-foreground)",
        }}
      >
        {children}
      </div>
    </div>
  );
};
