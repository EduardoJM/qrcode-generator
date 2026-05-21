import type { QRCodeFrame } from "./types";

export const NoFrame: QRCodeFrame = ({ children }) => {
  return <>{children}</>;
};
