import type { QRCodeFrame } from "./types";

export const ScanMeTop: QRCodeFrame = ({ children }) => {
  return (
    <div className="flex flex-col items-stretch">
      <div
        className="text-center rounded-t-lg py-1 font-medium"
        style={{
          backgroundColor: "var(--qrcode-foreground)",
          color: "var(--qrcode-background)",
        }}
      >
        SCAN-ME
      </div>
      <div
        className="border-8 rounded-b-lg p-1"
        style={{ borderColor: "var(--qrcode-foreground)" }}
      >
        {children}
      </div>
    </div>
  );
};
