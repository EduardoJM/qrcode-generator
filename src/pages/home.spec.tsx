import { render, screen } from "@testing-library/react";
import HomePage from "./home";
import userEvent from "@testing-library/user-event";

describe("HomePage", () => {
  test("should render navbar", () => {
    render(<HomePage />);

    expect(screen.queryByRole("navigation")).toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: "Novo QRCode" }),
    ).toBeInTheDocument();
  });

  test("should render header", () => {
    render(<HomePage />);

    expect(
      screen.queryByText("Crie e Personalize QR Codes em segundos"),
    ).toBeInTheDocument();
    expect(
      screen.queryByText("Gratuíto, sem limite de duração, sem pegadinhas!"),
    ).toBeInTheDocument();
  });

  test("should render tabs", () => {
    render(<HomePage />);

    expect(screen.queryByRole("tablist")).toBeInTheDocument();
    expect(screen.queryAllByRole("tab")).toHaveLength(3);
  });

  test("should first tab active by default", async () => {
    render(<HomePage />);

    expect(
      screen.queryByLabelText("Link do Site / Texto do QRCode"),
    ).toBeInTheDocument();
    expect(
      screen.queryByLabelText("Link do Site / Texto do QRCode"),
    ).toBeVisible();
    expect(screen.queryByTestId("bg-color")).not.toBeInTheDocument();
    expect(screen.queryByTestId("fg-color")).not.toBeInTheDocument();
    expect(screen.queryByTestId("frame-picker")).not.toBeInTheDocument();
  });

  test("should tab content change when click on second tab", async () => {
    render(<HomePage />);

    const tab2 = screen.getAllByRole("tab")[1];
    await userEvent.click(tab2);

    expect(
      screen.queryByLabelText("Link do Site / Texto do QRCode"),
    ).not.toBeInTheDocument();
    expect(screen.queryByTestId("bg-color")).toBeInTheDocument();
    expect(screen.queryByTestId("fg-color")).toBeInTheDocument();
    expect(screen.queryByTestId("bg-color")).toBeVisible();
    expect(screen.queryByTestId("fg-color")).toBeVisible();
    expect(screen.queryByTestId("frame-picker")).not.toBeInTheDocument();
  });

  test("should tab content change when click on third tab", async () => {
    render(<HomePage />);

    const tab3 = screen.getAllByRole("tab")[2];
    await userEvent.click(tab3);

    expect(
      screen.queryByLabelText("Link do Site / Texto do QRCode"),
    ).not.toBeInTheDocument();
    expect(screen.queryByTestId("bg-color")).not.toBeInTheDocument();
    expect(screen.queryByTestId("fg-color")).not.toBeInTheDocument();
    expect(screen.queryByTestId("frame-picker")).toBeInTheDocument();
    expect(screen.queryByTestId("frame-picker")).toBeVisible();
  });

  test("should tab content change back to first tab when click on third tab and on first tab", async () => {
    render(<HomePage />);

    const tab1 = screen.getAllByRole("tab")[0];
    const tab3 = screen.getAllByRole("tab")[2];
    await userEvent.click(tab3);
    await userEvent.click(tab1);

    expect(
      screen.queryByLabelText("Link do Site / Texto do QRCode"),
    ).toBeInTheDocument();
    expect(
      screen.queryByLabelText("Link do Site / Texto do QRCode"),
    ).toBeVisible();
    expect(screen.queryByTestId("bg-color")).not.toBeInTheDocument();
    expect(screen.queryByTestId("fg-color")).not.toBeInTheDocument();
    expect(screen.queryByTestId("frame-picker")).not.toBeInTheDocument();
  });

  test("should render faq", () => {
    render(<HomePage />);

    expect(
      screen.queryByRole("heading", { name: "Perguntas Frequentes" }),
    ).toBeInTheDocument();
  });
});
