import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NavBar } from "./navbar";

describe("NavBar", () => {
  test("should render a navigation", () => {
    render(<NavBar />);

    expect(screen.queryByRole("navigation")).toBeInTheDocument();
  });

  test("should render a home anchor link", () => {
    render(<NavBar />);

    expect(screen.queryByRole("link", { name: "Início" })).toBeInTheDocument();
  });

  test("should change anchor to # when click on home", async () => {
    render(<NavBar />);

    const link = screen.getByRole("link", { name: "Início" });
    await userEvent.click(link);

    expect(location.hash).toEqual("");
  });

  test("should render a new qrcode anchor link", () => {
    render(<NavBar />);

    expect(
      screen.queryByRole("link", { name: "Novo QRCode" }),
    ).toBeInTheDocument();
  });

  test("should change anchor to #gerar-qrcode when click on new qrcode", async () => {
    render(<NavBar />);

    const link = screen.getByRole("link", { name: "Novo QRCode" });
    await userEvent.click(link);

    expect(location.hash).toEqual("#gerar-qrcode");
  });

  test("should render a faq anchor link", () => {
    render(<NavBar />);

    expect(
      screen.queryByRole("link", { name: "Perguntas Frequentes" }),
    ).toBeInTheDocument();
  });

  test("should change anchor to #faq when click on faq", async () => {
    render(<NavBar />);

    const link = screen.getByRole("link", { name: "Perguntas Frequentes" });
    await userEvent.click(link);

    expect(location.hash).toEqual("#faq");
  });
});
