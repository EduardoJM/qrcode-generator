import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SketchPicker } from "react-color";
import { useQRCode } from "@/context/qrcode-context";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";

export const ColorPicker = () => {
  const { background, foreground, setBackground, setForeground } = useQRCode();

  return (
    <div className="flex flex-col items-stretch gap-8">
      <div className="flex flex-col items-stretch">
        <Label className="flex flex-col items-stretch">Cor de Fundo</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              type="button"
              variant="outline"
              className="justify-start cursor-pointer"
            >
              <div
                className="size-4 border"
                style={{ backgroundColor: background }}
              ></div>
              {background}
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <SketchPicker
              color={background}
              onChange={(color) => setBackground(color.hex)}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-col items-stretch">
        <Label className="flex flex-col items-stretch">Cor do QRCode</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              type="button"
              variant="outline"
              className="justify-start cursor-pointer"
            >
              <div
                className="size-4 border"
                style={{ backgroundColor: foreground }}
              ></div>
              {foreground}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="bg-[transparent] shadow-none border-0 ring-0 w-auto">
            <SketchPicker
              color={foreground}
              onChange={(color) => setForeground(color.hex)}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
