import { render, screen } from "@testing-library/react";
import { useQRCode, QRCodeProvider } from "@/context/qrcode-context";
import { ValueInput } from "./value-input";
import userEvent from "@testing-library/user-event";

const ValueCheck = () => {
  const { value } = useQRCode();

  return <span data-testid="value">{value}</span>;
};

describe("ValueInput", () => {
  test("should render a input labeled", () => {
    render(<ValueInput />, {
      wrapper: ({ children }) => <QRCodeProvider>{children}</QRCodeProvider>,
    });

    expect(
      screen.queryByLabelText("Link do Site / Texto do QRCode"),
    ).toBeInTheDocument();
  });

  test("should render a icon", () => {
    render(<ValueInput />, {
      wrapper: ({ children }) => <QRCodeProvider>{children}</QRCodeProvider>,
    });

    expect(screen.queryByTestId("qrcode-icon")).toBeInTheDocument();
  });

  test("should focus the input when click on the icon", async () => {
    render(<ValueInput />, {
      wrapper: ({ children }) => <QRCodeProvider>{children}</QRCodeProvider>,
    });

    const icon = screen.getByTestId("qrcode-icon");
    await userEvent.click(icon);

    expect(
      screen.queryByLabelText("Link do Site / Texto do QRCode"),
    ).toHaveFocus();
  });

  test("should change value on context", async () => {
    render(<ValueInput />, {
      wrapper: ({ children }) => (
        <QRCodeProvider>
          {children}
          <ValueCheck />
        </QRCodeProvider>
      ),
    });
    const inputText = "my any text here";

    const input = screen.getByLabelText("Link do Site / Texto do QRCode");
    await userEvent.type(input, inputText);

    expect(screen.getByTestId("value").textContent).toEqual(inputText);
  });
});
