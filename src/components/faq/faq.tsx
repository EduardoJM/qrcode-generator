import { Clock, GitGraph, Wallet } from "lucide-react";
import type { ReactNode } from "react";

const FaqItem = ({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="size-25 mb-4 bg-primary text-primary-foreground flex items-center justify-center rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-center">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
};

export const Faq = () => {
  return (
    <div className="py-20">
      <div className="px-2 md:px-8 lg:px-40 2xl:px-80">
        <h2 className="text-3xl text-center font-bold my-15" id="faq">
          Perguntas Frequentes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <FaqItem
            icon={<Wallet className="size-15" />}
            title="Gratuíto"
            description="Todo o serviço nesse site é gratuíto e sempre será."
          />

          <FaqItem
            icon={<Clock className="size-15" />}
            title="Tempo de duração"
            description="Os QR Codes gerados não expiram. Você gera uma vez e pode utilizar a imagem para sempre."
          />

          <FaqItem
            icon={<GitGraph className="size-15" />}
            title="Código aberto"
            description="O código-fonte desse site é aberto e disponível no GitHub."
          />
        </div>
      </div>
    </div>
  );
};
