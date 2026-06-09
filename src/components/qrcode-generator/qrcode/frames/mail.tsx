import type { QRCodeFrame } from "./types";

export const Mail: QRCodeFrame = ({ children }) => {
  return (
    <div className="flex flex-col items-stretch relative">
      <div className="px-5 pb-10">
        <div
          className="pb-16 mx-3 p-4"
          style={{
            background: "var(--qrcode-background)",
            borderColor: "var(--qrcode-foreground)",
          }}
        >
          {children}
        </div>
      </div>

      <div className="absolute bottom-0 w-full">
        <svg
          viewBox="-3 0 58 53"
          style={{
            width: "98%",
            height: "auto",
            aspectRatio: 1,
          }}
        >
          <path d="m 47.686296,19.547806 v 7.488432 l -15.954065,7.947319 -4.44469,-2.565735 c -0.177522,-0.13111 -0.391068,-0.20247 -0.609782,-0.205672 -0.01459,-3.95e-4 -0.02936,-2.14e-4 -0.04393,0 -0.0024,3.5e-5 -0.0048,-5.1e-5 -0.0072,0 -0.216007,0.0046 -0.42707,0.07572 -0.602547,0.205155 L 21.49981,35.029549 5.4144871,27.282735 5.5364431,19.567443 c -1.459581,0.413138 -4.2586546,3.640647 -4.2586546,4.807976 v 13.707173 0.22531 11.700577 c 0,1.099076 0.8847825,1.983859 1.9838586,1.983859 H 50.066025 c 1.099076,0 1.983858,-0.884783 1.983858,-1.983859 V 38.082592 c 0,-0.09351 -0.0083,-0.184924 -0.02067,-0.274918 V 24.375419 c 0,-1.190351 -2.91005,-4.521478 -4.342888,-4.827613 z" />
        </svg>
      </div>

      <div
        className="text-center flex items-center justify-center absolute bottom-5 h-13 left-5 right-5 rounded-b-lg py-1 font-medium"
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
