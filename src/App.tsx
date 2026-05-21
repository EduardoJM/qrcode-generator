import { QRCode } from "./components/qrcode";
import { FramesPicker } from "./components/frames-picker";
import { QRCodeProvider } from "./context/qrcode-context";
import { ValueInput } from "./components/value-input";
import { ColorPicker } from "./components/color-picker";

function App() {
  return (
    <>
      <QRCodeProvider>
        <div className="grid grid-cols-2 gap-4 my-10">
          <div className="flex flex-col items-stretch">
            <ValueInput />

            <ColorPicker />

            <FramesPicker />
          </div>

          <QRCode />
        </div>
      </QRCodeProvider>
    </>
  );
}

export default App;
