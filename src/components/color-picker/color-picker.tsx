import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SketchPicker } from "react-color";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export interface ColorPickerProps {
  label: string;
  color: string;
  testIdPrefix: string;
  onChange: (color: string) => void;
}

export const ColorPicker = ({
  label,
  color,
  onChange,
  testIdPrefix,
}: ColorPickerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-stretch">
      <Label
        className="flex flex-col items-stretch"
        onClick={() => setIsOpen(true)}
      >
        {label}
      </Label>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="outline"
            className="justify-start cursor-pointer"
            data-testid={`${testIdPrefix}-color`}
          >
            <div
              className="size-4 border"
              data-testid={`${testIdPrefix}-preview`}
              style={{ backgroundColor: color }}
            ></div>
            {color}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="bg-[transparent] shadow-none border-0 ring-0 w-auto">
          <SketchPicker
            color={color}
            onChange={(color) => onChange(color.hex)}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
