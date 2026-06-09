import { frames, type QRCodeFrame } from "@/components/qrcode-generator/qrcode";
import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from "react";

export interface QRCodeProps {
  value: string;
  foreground: string;
  background: string;
  frame: QRCodeFrame;
}

export type QRCodeContextValue = Pick<
  QRCodeProps,
  "background" | "foreground" | "frame" | "value"
> & {
  setBackground: Dispatch<SetStateAction<string>>;
  setForeground: Dispatch<SetStateAction<string>>;
  setFrame: Dispatch<SetStateAction<QRCodeFrame>>;
  setValue: Dispatch<SetStateAction<string>>;
};

const QRCodeContext = createContext({} as QRCodeContextValue);

export const QRCodeProvider = ({ children }: PropsWithChildren) => {
  const [value, setValue] = useState("");
  const [background, setBackground] = useState("#ffffff");
  const [foreground, setForeground] = useState("#000000");
  const [frame, setFrame] = useState<QRCodeFrame>(() => frames[0]);

  return (
    <QRCodeContext.Provider
      value={{
        value,
        setValue,
        background,
        setBackground,
        foreground,
        setForeground,
        frame,
        setFrame,
      }}
    >
      {children}
    </QRCodeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useQRCode = () => useContext(QRCodeContext);
