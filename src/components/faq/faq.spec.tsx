import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Faq } from "./faq";

describe("Faq", () => {
  test("should render section title", () => {
    render(<Faq />);

    expect(
      screen.queryByRole("heading", { name: "Perguntas Frequentes" }),
    ).toBeInTheDocument();
  });

  test("should render titles", () => {
    render(<Faq />);

    expect(screen.queryByText("É gratuíto?")).toBeInTheDocument();
    expect(
      screen.queryByText("Os QRCode's expiram depois de algum tempo?"),
    ).toBeInTheDocument();
  });

  test("should not render contents by default", () => {
    render(<Faq />);

    const content = screen.getByLabelText("É gratuíto?");
    expect(content).toBeInTheDocument();
    expect(content).not.toBeVisible();
  });

  test("should show contents when click on label", async () => {
    render(<Faq />);

    const heading = screen.getByText("É gratuíto?");
    const content = screen.getByLabelText("É gratuíto?");

    await userEvent.click(heading);

    expect(content).toBeVisible();
  });
});
