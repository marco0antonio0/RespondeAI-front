import localFont from "next/font/local";
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
        <title>Perguntas Frequentes e Curiosidades - RespondeAI</title>
        <meta
          name="description"
          content="Encontre respostas para perguntas frequentes e curiosidades sobre o RespondeAI, a solução inteligente de correção automática de gabaritos."
        />
        <meta
          name="keywords"
          content="FAQ, perguntas frequentes, curiosidades, RespondeAI, correção automática, gabarito digital, inteligência artificial"
        />
        <meta name="author" content="RespondeAI Team" />


        <meta property="og:title" content="RespondeAI - Correção Inteligente de Gabaritos" />
        <meta property="og:description" content="Transforme a correção de provas com inteligência artificial. Corrija gabaritos com poucos cliques!" />
        <meta property="og:image" content="https://metasnap.dirrocha.com/screenshot?url=https%3A%2F%2Frespondeai.dirrocha.com" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://respondeai.dirrocha.com/" />

        <meta name="twitter:title" content="RespondeAI - Correção Inteligente de Gabaritos" />
        <meta name="twitter:description" content="Escaneie gabaritos e obtenha resultados em segundos com RespondeAI." />
        <meta name="twitter:image" content="https://metasnap.dirrocha.com/screenshot?url=https%3A%2F%2Frespondeai.dirrocha.com/curiosidades" /> 
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col max-w-[1000px] mx-auto px-4">
      <div className="w-full h-[250px] bg-[#F0E9DC] flex items-center justify-center rounded-3xl mt-5 mb-5 smi:rounded-lg">
        <img
            alt="RespondeAI hero image"
            src="/promo/promocuriosidades.png"
            className="w-full h-full object-contain"
        />
        </div>

        <h1 className="text-[10mm] font-bold text-center text-[#8287eb]">
          Perguntas Frequentes e Curiosidades sobre o RespondeAI
        </h1>
        
        {/* Seção de Perguntas Frequentes */}
        <section className="mt-10">
          <h2 className="text-[7mm] font-semibold text-black">
            Perguntas Frequentes
          </h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-blue-700">
                Como o RespondeAI corrige os gabaritos?
              </h3>
              <p className="mt-2 text-lg text-gray-700">
                O RespondeAI utiliza técnicas de visão computacional e inteligência
                artificial para identificar os preenchimentos nos cartões-resposta e 
                efetua a correção automaticamente.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-700">
                Quais tipos de imagens são aceitas?
              </h3>
              <p className="mt-2 text-lg text-gray-700">
                São aceitas imagens em formatos JPEG, PNG e outros, capturadas com 
                scanner ou dispositivos móveis, desde que a qualidade seja suficiente 
                para a detecção dos campos marcados.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-700">
                Preciso fazer ajustes no cartão de respostas?
              </h3>
              <p className="mt-2 text-lg text-gray-700">
                Não. O sistema foi projetado para funcionar com diversos layouts, mas 
                recomenda-se que o cartão seja impresso com boa qualidade e sem sombras.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-700">
                O RespondeAI pode ser integrado a outros sistemas?
              </h3>
              <p className="mt-2 text-lg text-gray-700">
                Sim, nossa API permite a integração com plataformas educacionais e 
                sistemas de gerenciamento para automatizar o fluxo de correção.
              </p>
            </div>
          </div>
        </section>
        
        {/* Seção de Curiosidades */}
        <section className="mt-14">
          <h2 className="text-[7mm] font-semibold text-black">
            Curiosidades sobre o RespondeAI
          </h2>
          <ul className="mt-6 list-disc list-inside space-y-4 text-lg text-gray-700">
            <li>
              O RespondeAI foi desenvolvido para simplificar a correção de provas,
              eliminando a necessidade de revisão manual.
            </li>
            <li>
              Utilizamos algoritmos avançados de processamento de imagem para 
              identificar campos marcados com alta precisão.
            </li>
            <li>
              O sistema é constantemente aprimorado para lidar com diferentes modelos
              de cartões-resposta.
            </li>
            <li>
              Nossa tecnologia reduz significativamente o tempo de correção, 
              permitindo que educadores se concentrem no ensino.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
