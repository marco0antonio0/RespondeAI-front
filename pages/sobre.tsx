import localFont from "next/font/local";
import UserShowElement from "@/components/userShowElement";
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

export default function Sobre() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid min-h-screen py-3 pb-20 gap-16 sm:px-10 font-[family-name:var(--font-geist-sans)]`}
    >
      <Head>
        <title>Sobre o RespondeAI - Nossa História</title>
        <meta
          name="description"
          content="Conheça a história do RespondeAI e como revolucionamos a correção automática de gabaritos com inteligência artificial."
        />
        <meta
          name="keywords"
          content="história, sobre nós, RespondeAI, correção automática, gabarito digital, inteligência artificial"
        />
        <meta name="author" content="RespondeAI Team" />

        <meta property="og:title" content="RespondeAI - Correção Inteligente de Gabaritos" />
        <meta property="og:description" content="Transforme a correção de provas com inteligência artificial. Corrija gabaritos com poucos cliques!" />
        <meta property="og:image" content="https://metasnap.dirrocha.com/screenshot?url=https%3A%2F%2Frespondeai.dirrocha.com" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://respondeai.dirrocha.com/" />

        <meta name="twitter:title" content="RespondeAI - Correção Inteligente de Gabaritos" />
        <meta name="twitter:description" content="Escaneie gabaritos e obtenha resultados em segundos com RespondeAI." />
        <meta name="twitter:image" content="https://metasnap.dirrocha.com/screenshot?url=https%3A%2F%2Frespondeai.dirrocha.com/sobre" /> 
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col max-w-[1000px] smi:px-10">
        <h1 className="m-auto mt-[10px] mb-[0] text-[7mm] font-semibold text-[#8287eb] smi:text-[6mm]">
          Visão Geral do RespondeAI
        </h1>
        <h1 className="m-auto mt-[0] text-[10mm] font-semibold text-black text-center smi:text-[8mm]">
          Corrija gabaritos com precisão e agilidade
        </h1>
        <div className="w-full h-[250px] bg-[#F0E9DC] flex items-center justify-center rounded-3xl mt-5 mb-5 smi:rounded-lg">
        <img
            alt="RespondeAI hero image"
            src="/promo/promosobre.png"
            className="w-full h-full object-contain"
        />
        </div>
        <span className="m-auto mt-[10px] text-lg font-normal opacity-65 text-black text-justify">
          Com o RespondeAI, você escaneia, envia e corrige automaticamente seus
          cartões-resposta, economizando tempo e eliminando erros manuais. Nossa
          tecnologia utiliza inteligência artificial e visão computacional para
          entregar resultados rápidos e precisos.
        </span>
        <p className="text-lg text-justify">
          Desde o início, nosso objetivo foi simplificar o processo de correção
          de provas, liberando professores e instituições para focar no ensino.
          Com apenas alguns cliques, o RespondeAI processa as imagens dos
          cartões-resposta e retorna resultados de forma automática e confiável.
          Nossa plataforma integra tecnologia de ponta para reduzir tempo de
          correção e aumentar a precisão, contribuindo para uma educação mais
          moderna e eficiente.
        </p>
        <div className="h-5"></div>
        {/* <h1 className="m-auto ml-0 mt-[10px] text-[7mm] font-semibold text-[#8287eb] smi:text-[6mm]">
          Criadores do RespondeAI
        </h1>
        <div className="h-2"></div> */}
        {/* <div className="flex flex-wrap flex-row gap-3">
          <UserShowElement
            url="https://github.com/marco0antonio0"
            name="Marco Antonio"
            username="marco0antonio0"
            src="https://github.com/marco0antonio0.png?size=100px"
            text="Desenvolvedor fullstack apaixonado por IA e automação. Marco contribuiu para tornar a correção de provas um processo digital e eficiente."
          />
          <UserShowElement
            url="https://github.com/EliasPacheco"
            name="Elias Pacheco"
            username="EliasPacheco"
            src="https://github.com/EliasPacheco.png?size=100px"
            text="Engenheiro de software focado em criar soluções inteligentes para o setor educacional, unindo tecnologia e inovação."
          />
        </div> */}
        <p className="text-lg text-justify mt-10">
          No RespondeAI, acreditamos que a inovação deve simplificar e transformar.
          Ao automatizar a correção de gabaritos, oferecemos precisão e
          eficiência, permitindo que educadores concentrem-se no que realmente
          importa: o ensino. Junte-se a nós nessa revolução e veja como sua
          rotina pode ser otimizada com tecnologia de ponta!
        </p>
      </div>
    </div>
  );
}
