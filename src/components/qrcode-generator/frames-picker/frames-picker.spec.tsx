import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QRCodeProvider, useQRCode } from "@/context/qrcode-context";
import { FramesPicker } from "./frames-picker";
import { frames } from "@/components/qrcode-generator/qrcode";

const ValueCheck = () => {
  const { frame } = useQRCode();

  return <span data-testid="value">{frame.name}</span>;
};

describe("FramesPicker", () => {
  test("should render a button for each frame", () => {
    render(<FramesPicker />, {
      wrapper: ({ children }) => <QRCodeProvider>{children}</QRCodeProvider>,
    });

    expect(screen.queryAllByRole("button")).toHaveLength(frames.length);
  });

  test("should change frame value when a button is clicked", async () => {
    render(<FramesPicker />, {
      wrapper: ({ children }) => (
        <QRCodeProvider>
          {children}
          <ValueCheck />
        </QRCodeProvider>
      ),
    });

    const buttons = screen.getAllByRole("button");

    for (let i = 0; i < buttons.length; i += 1) {
      const fr = frames[i];
      const button = buttons[i];

      await userEvent.click(button);

      expect(screen.getByTestId("value").textContent).toEqual(fr.name);
    }
  });
});
