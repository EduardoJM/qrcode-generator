import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QRCodeProvider, useQRCode } from "@/context/qrcode-context";
import { QRCodeColorsPicker } from "./qrcode-colors-picker";

const ValueCheck = () => {
  const { background, foreground } = useQRCode();

  return (
    <>
      <span data-testid="bg">{background}</span>
      <span data-testid="fg">{foreground}</span>
    </>
  );
};

describe("QRCodeColorsPicker", () => {
  test("should render a button for each picker", () => {
    render(<QRCodeColorsPicker />, {
      wrapper: ({ children }) => <QRCodeProvider>{children}</QRCodeProvider>,
    });

    expect(screen.queryAllByRole("button")).toHaveLength(2);
    expect(screen.queryByText("Cor de Fundo")).toBeInTheDocument();
    expect(screen.queryByText("Cor do QRCode")).toBeInTheDocument();
    expect(screen.queryByTestId("bg-color")).toBeInTheDocument();
    expect(screen.queryByTestId("fg-color")).toBeInTheDocument();
    expect(screen.queryByTestId("bg-preview")).toBeInTheDocument();
    expect(screen.queryByTestId("fg-preview")).toBeInTheDocument();
  });

  test("should open a popover when click on background button", async () => {
    render(<QRCodeColorsPicker />, {
      wrapper: ({ children }) => <QRCodeProvider>{children}</QRCodeProvider>,
    });

    const button = screen.getByTestId("bg-color");
    await userEvent.click(button);

    expect(screen.queryByRole("dialog")).toBeInTheDocument();
  });

  test("should open a popover when click on foreground button", async () => {
    render(<QRCodeColorsPicker />, {
      wrapper: ({ children }) => <QRCodeProvider>{children}</QRCodeProvider>,
    });

    const button = screen.getByTestId("fg-color");
    await userEvent.click(button);

    expect(screen.queryByRole("dialog")).toBeInTheDocument();
  });

  test("should change background color on change it on popover", async () => {
    render(<QRCodeColorsPicker />, {
      wrapper: ({ children }) => (
        <QRCodeProvider>
          {children}
          <ValueCheck />
        </QRCodeProvider>
      ),
    });

    const button = screen.getByTestId("bg-color");
    await userEvent.click(button);

    const hexInput = screen.getByLabelText("hex");
    await userEvent.clear(hexInput);
    await userEvent.type(hexInput, "2200FF");

    expect(screen.getByTestId("bg")).toHaveTextContent("#2200ff");
  });

  test("should change foreground color on change it on popover", async () => {
    render(<QRCodeColorsPicker />, {
      wrapper: ({ children }) => (
        <QRCodeProvider>
          {children}
          <ValueCheck />
        </QRCodeProvider>
      ),
    });

    const button = screen.getByTestId("fg-color");
    await userEvent.click(button);

    const hexInput = screen.getByLabelText("hex");
    await userEvent.clear(hexInput);
    await userEvent.type(hexInput, "2200FF");

    expect(screen.getByTestId("fg")).toHaveTextContent("#2200ff");
  });
});
