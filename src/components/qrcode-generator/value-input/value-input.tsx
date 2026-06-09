import { useQRCode } from "@/context/qrcode-context";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { QrCode } from "lucide-react";

export const ValueInput = () => {
  const { value, setValue } = useQRCode();

  return (
    <div>
      <Label htmlFor="value-input">Link do Site / Texto do QRCode</Label>
      <InputGroup>
        <InputGroupAddon>
          <QrCode data-testid="qrcode-icon" />
        </InputGroupAddon>
        <InputGroupInput
          value={value}
          id="value-input"
          onChange={(e) => setValue(e.target.value)}
          autoComplete="off"
          placeholder="URL ou Texto para o QRCode..."
        />
      </InputGroup>
    </div>
  );
};
