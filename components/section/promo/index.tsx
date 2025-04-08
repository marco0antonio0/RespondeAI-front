import { Image } from "@heroui/react";

export default function SectionPromo() {
  return (
    <>
      <div className="w-[50%] mdi:w-[100%]">
        <h1 className="m-auto mt-[10px] text-[7mm] font-semibold text-[#8287eb] smi:text-[6mm]">
          Corrija gabaritos com inteligência em segundos
        </h1>
        <p className="text-lg text-justify">
          Com o RespondeAI, transformar cartões-resposta em resultados precisos nunca foi tão fácil. Nosso sistema automatizado
          permite que você escaneie, envie e receba a correção com poucos cliques, reduzindo erros e economizando tempo.
        </p>
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex flex-row items-center">
            <div className="min-w-[55px] min-h-[55px] w-[55px] h-[55px] rounded-xl bg-[url('/icons/icon_check.png')] bg-cover bg-center"></div>
            <div className="flex flex-col ml-3">
              <h1 className="text-lg text-justify font-medium">Resultados precisos e automáticos</h1>
              <span>Evite correções manuais com nosso sistema inteligente e confiável.</span>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="min-w-[55px] min-h-[55px] w-[55px] h-[55px] rounded-xl bg-[url('/icons/icon_speed.png')] bg-cover bg-center"></div>
            <div className="flex flex-col ml-3">
              <h1 className="text-lg text-justify font-medium">Rápido e prático</h1>
              <span>Obtenha o resultado das provas em segundos após o envio da imagem.</span>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="min-w-[55px] min-h-[55px] w-[55px] h-[55px] rounded-xl bg-[url('/icons/icon_audio.png')] bg-cover bg-center"></div>
            <div className="flex flex-col ml-3">
              <h1 className="text-lg text-justify font-medium">Suporte a múltiplos formatos</h1>
              <span>Compatível com diferentes modelos de gabarito e múltiplos cartões por folha.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto">
        <Image
          isBlurred
          alt="Demonstração da plataforma de correção de gabaritos"
          src="/promo/Work_7.jpg"
          className="w-auto h-[350px] m-auto mr-0 lgi:h-[450px]"
        />
      </div>
    </>
  );
}