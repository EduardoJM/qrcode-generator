import type { QRCodeFrame } from "./types";

export const ScanMeBottom: QRCodeFrame = ({ children }) => {
  return (
    <div className="flex flex-col items-stretch">
      <div
        className="border-8 rounded-t-lg p-1"
        style={{
          background: "var(--qrcode-background)",
          borderColor: "var(--qrcode-foreground)",
        }}
      >
        {children}
      </div>
      <div
        className="text-center rounded-b-lg py-1 font-medium"
        style={{
          backgroundColor: "var(--qrcode-foreground)",
          color: "var(--qrcode-background)",
        }}
      >
        SCAN-ME
      </div>
    </div>
  );
};
