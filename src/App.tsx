import { QRCode } from "./components/qrcode";
import { FramesPicker } from "./components/frames-picker";
import { QRCodeProvider } from "./context/qrcode-context";
import { ValueInput } from "./components/value-input";
import { ColorPicker } from "./components/color-picker";
import { DownloadButton } from "./components/download-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Frame, Palette, QrCode } from "lucide-react";
import { CopyButton } from "./components/copy-button";

function App() {
  return (
    <main className="bg-primary flex flex-col items-stretch">
      <header className="py-10">
        <h1 className="text-center text-5xl font-bold text-white mb-4">
          Crie e Personalize QR Codes
          <br />
          em segundos
        </h1>
        <h2 className="text-center text-white text-2xl">
          Gratuíto, sem limite de duração, sem pegadinhas!
        </h2>
      </header>

      <div className="px-80">
        <div className="bg-background rounded-lg shadow-lg p-5 mb-10">
          <QRCodeProvider>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-stretch border-r pr-5">
                <Tabs defaultValue="url">
                  <TabsList variant="line" className="w-full">
                    <TabsTrigger value="url" className="text-xl">
                      <QrCode className="size-5" />
                      Dados do QRCode
                    </TabsTrigger>
                    <TabsTrigger value="color" className="text-xl">
                      <Palette className="size-5" />
                      Cores
                    </TabsTrigger>
                    <TabsTrigger value="frame" className="text-xl">
                      <Frame className="size-5" />
                      Moldura
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="url" className="py-5">
                    <ValueInput />
                  </TabsContent>
                  <TabsContent value="color" className="py-5">
                    <ColorPicker />
                  </TabsContent>
                  <TabsContent value="frame" className="py-5">
                    <FramesPicker />
                  </TabsContent>
                </Tabs>
              </div>

              <div className="flex flex-col items-stretch">
                <QRCode />

                <div className="flex flex-row items-center justify-center gap-2 mt-10">
                  <CopyButton />
                  <DownloadButton />
                </div>
              </div>
            </div>
          </QRCodeProvider>
        </div>
      </div>
    </main>
  );
}

export default App;
