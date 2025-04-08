import {default as ImageNext} from "next/image";
import { useRouter } from "next/navigation";

import localFont from "next/font/local";
import UserShowElement from "@/components/userShowElement";
import { Avatar, Badge, Button, Image, image } from "@heroui/react";
import SectionPromo from "@/components/section/promo";
import SectionPost from "@/components/section/post";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const r = useRouter()
  return (<>
    <Head>
      <title>RespondeAI - Correção Inteligente de Gabaritos</title>
      <meta name="description" content="Escaneie e corrija cartões-resposta automaticamente com RespondeAI. Simples, rápido e eficiente!" />
      <meta name="keywords" content="correção automática, cartões-resposta, gabarito digital, scanner de prova, IA educacional" />
      <meta name="author" content="Equipe RespondeAI" />
      <meta property="og:title" content="RespondeAI - Correção Inteligente de Gabaritos" />
      <meta property="og:description" content="Transforme a correção de provas com inteligência artificial. Corrija gabaritos com poucos cliques!" />
      <meta property="og:image" content="/promo/promoinicio.png" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://respondeai.dirrocha.com/" />
      <meta name="twitter:title" content="RespondeAI - Correção Inteligente de Gabaritos" />
      <meta name="twitter:description" content="Escaneie gabaritos e obtenha resultados em segundos com RespondeAI." />
      <meta name="twitter:image" content="/promo/promoinicio.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className={`${geistSans.variable} ${geistMono.variable} grid min-h-screen py-3 pb-20 gap-16 sm:px-10 font-[family-name:var(--font-geist-sans)]`}>
      <div className="flex flex-col max-w-[1000px] smi:px-10 smi:mt-[-40px]">
        <img src="/promo/promo.png" alt="" className="w-[350px] m-auto mdi:w-[300px]" />
        <h1 className="m-auto mt-[10px] text-[7mm] font-semibold text-[#8287eb] smi:text-[6mm]">Correção Automática em Segundos</h1>
        <h1 className="m-auto mt-[0] text-[10mm] font-semibold text-black text-center smi:text-[8mm]">Escaneie gabaritos com facilidade e precisão</h1>
        <span className="m-auto mt-[10px] text-lg font-normal opacity-65 text-black text-justify">
          Com o RespondeAI, você automatiza a correção de provas com rapidez, precisão e praticidade. Dê adeus à contagem manual!
        </span>
        <div className="flex flex-row m-auto mt-8 gap-3">
          <Button color="primary" variant="shadow" className="w-[250px] h-[60px] lgi:w-[190px] lgi:h-[60px]" onClick={() => { r.push('/produto') }}>
            Scanear Gabarito
          </Button>
          <Button color="primary" variant="ghost" className="w-[250px] h-[60px] lgi:w-[190px] lgi:h-[60px]" onClick={() => { r.push('/sobre') }}>
            Gerar Gabarito em Branco
          </Button>
        </div>

        <div className="flex flex-row-reverse gap-8 mt-16 mdi:flex-col">
          <SectionPromo />
        </div>

        <div className="flex flex-row gap-8 mt-3 mdi:flex-col">
          <SectionPost src={"/promo/promoinicio.png"} text={`📄 O RespondeAI foi criado para revolucionar a forma como provas são corrigidas.

💡 Com apenas alguns cliques, você gera e escaneia cartões-resposta, obtendo resultados precisos sem esforço manual.

🚀 Ideal para professores, instituições, cursinhos e qualquer pessoa que deseje automatizar a correção de avaliações.

🔍 Utilize sua câmera ou scanner, envie a imagem do cartão e veja a mágica acontecer.

🛠️ Nosso sistema combina inteligência artificial, análise de imagem e flexibilidade para atender diferentes modelos de gabarito.

🎯 Reduza o tempo gasto, elimine erros e modernize seu processo de correção hoje mesmo com o RespondeAI!`} />
        </div>

        <div className="h-5"></div>
        <h1 className="m-auto ml-0 mt-[10px] text-[7mm] font-semibold text-[#8287eb] smi:text-[6mm]">Criadores do RespondeAI</h1>
        <div className="h-2"></div>
        <div className="flex flex-wrap flex-row gap-3">
          <UserShowElement
            url="https://github.com/marco0antonio0"
            name="Marco Antonio"
            username="marco0antonio0"
            src="https://github.com/marco0antonio0.png?size=100px"
            text="Desenvolvedor fullstack apaixonado por IA, automação e soluções inteligentes voltadas para educação." />
        </div>

        <p className="text-lg text-justify mt-10">
          Criado com a missão de facilitar o processo de correção de provas, o RespondeAI é uma ferramenta poderosa para educadores e instituições. Nossa solução oferece performance, precisão e praticidade, com base em inteligência artificial e visão computacional.
          <br /><br />
          💼 Aumente sua produtividade, reduza custos e traga inovação para a sua sala de aula ou organização.
          <br /><br />
          📌 100% online, pronto para uso e com documentação completa.
          <br /><br />
          🔗 Experimente o RespondeAI e leve a educação para o próximo nível!
        </p>
      </div>
    </div>
  </>);
}
