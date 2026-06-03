import { render, screen } from "@testing-library/react";
import { Faq } from "./faq";

describe("Faq", () => {
  test("should render section title", () => {
    render(<Faq />);

    expect(
      screen.queryByRole("heading", { name: "Perguntas Frequentes" }),
    ).toBeInTheDocument();
  });

  test("should render titles and contents", () => {
    render(<Faq />);

    expect(screen.queryByText(/^Gratuíto$/i)).toBeInTheDocument();
    expect(
      screen.queryByText("Todo o serviço nesse site é gratuíto e sempre será."),
    ).toBeInTheDocument();

    expect(screen.queryByText(/^Tempo de duração$/i)).toBeInTheDocument();
    expect(
      screen.queryByText(
        "Os QR Codes gerados não expiram. Você gera uma vez e pode utilizar a imagem para sempre.",
      ),
    ).toBeInTheDocument();

    expect(screen.queryByText(/^Código aberto$/i)).toBeInTheDocument();
    expect(
      screen.queryByText(
        "O código-fonte desse site é aberto e disponível no GitHub.",
      ),
    ).toBeInTheDocument();
  });
});
