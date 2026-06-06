import type { CSSProperties } from "react";
import { frames } from "../qrcode";
import { Button } from "../ui/button";
import { useQRCode } from "@/context/qrcode-context";

export const FramesPicker = () => {
  const { frame, setFrame } = useQRCode();

  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4"
      data-testid="frame-picker"
      style={
        {
          "--qrcode-foreground": "#000000",
          "--qrcode-background": "#ffffff",
        } as CSSProperties
      }
    >
      {frames.map((Frame, index) => (
        <Button
          variant={Frame === frame ? "default" : "ghost"}
          className="cursor-pointer h-[unset]"
          type="button"
          key={index}
          onClick={() => setFrame(() => Frame)}
        >
          <div className="flex flex-col items-center scale-[0.5]">
            <div className="w-[200px] h-[240px] p-1 flex flex-col items-center">
              <Frame>
                <div className="w-[168px] aspect-1/1 bg-[#ccc]"></div>
              </Frame>
            </div>
          </div>
        </Button>
      ))}
    </div>
  );
};
