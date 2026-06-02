import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faq = () => {
  return (
    <div className="py-20">
      <div className="px-2 md:px-8 xl:px-80">
        <h2 className="text-3xl text-center font-bold mb-8" id="faq">
          Perguntas Frequentes
        </h2>

        <div className="2xl:px-80">
          <Accordion type="single" collapsible>
            <AccordionItem value="faq-1">
              <AccordionTrigger className="text-2xl font-medium">
                É gratuíto?
              </AccordionTrigger>
              <AccordionContent className="text-xl">
                Sim. Todo o serviço nesse site é gratuíto e sempre será.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2">
              <AccordionTrigger className="text-2xl font-medium">
                Os QRCode's expiram depois de algum tempo?
              </AccordionTrigger>
              <AccordionContent className="text-xl">
                Não. Os QR Codes são gerados diretamente com o link inserido e,
                por isso, não expiram. Os sites que geram QR Codes que expiram
                criam um link intermediário para te convencer a pagar por algum
                serviço.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
