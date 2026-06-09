import { useQRCode } from "@/context/qrcode-context";
import { ColorPicker } from "@/components/color-picker";

export const QRCodeColorsPicker = () => {
  const { background, foreground, setBackground, setForeground } = useQRCode();

  return (
    <div className="flex flex-col items-stretch gap-8">
      <ColorPicker
        label="Cor de Fundo"
        testIdPrefix="bg"
        color={background}
        onChange={(color) => setBackground(color)}
      />
      <ColorPicker
        label="Cor do QRCode"
        testIdPrefix="fg"
        color={foreground}
        onChange={(color) => setForeground(color)}
      />
    </div>
  );
};
