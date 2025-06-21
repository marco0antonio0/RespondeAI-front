import { useRouter } from "next/navigation";
import localFont from "next/font/local";
import UserShowElement from "@/components/userShowElement";
import {  Button,Dropdown,DropdownItem,DropdownMenu,DropdownTrigger,Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner, useDisclosure, } from "@heroui/react";
import SectionPromo from "@/components/section/promo";
import SectionPost from "@/components/section/post";
import Head from "next/head";
import { useRef, useState } from "react";

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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [erroMensagem, setErroMensagem] = useState<string | null>("");
  const [files, setFiles] = useState<File[]>([]);
  const [notas, setNotas] = useState<{ [key: string]: string }>({});
  const [respostas, setRespostas] = useState<{ [key: string]: string }>({});
  const [detectedAnswers, setDetectedAnswers] = useState<{ [key: string]: { [key: string]: string } }>({});
  const [loading, setLoading] = useState(false);
  const [questoes, setQuestoes] = useState<number[]>([1]);
  const [correcaoRealizada, setCorrecaoRealizada] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const gerarCartao = async (quantidade: string) => {
    try {
      const response = await fetch(`https://api.respondeai.dirrocha.com/gerar-cartao?quantidade=${quantidade}&marcar=false`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `cartao-${quantidade}-questoes.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Erro ao gerar cartão:", error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      const newFiles = Array.from(fileList);
      setFiles(prev => [...prev, ...newFiles]);
      setNotas({});
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      setFiles(prev => [...prev, ...Array.from(e.dataTransfer.files)]);
      setNotas({});
      setDetectedAnswers({});
      setCorrecaoRealizada(false);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    setErroMensagem(null)
    e.preventDefault();
  };

  const handleRespostaChange = (questao: string, opcao: string) => {
    setErroMensagem(null)
    setRespostas(prev => ({ ...prev, [questao]: opcao.toUpperCase() }));
  };

  const adicionarQuestao = () => {
    setErroMensagem(null)
    setQuestoes(prev => [...prev, prev.length + 1]);
  };

  const removerQuestao = (num: number) => {
    setErroMensagem(null)
    const novaOrdem = questoes.filter(q => q !== num);
    setQuestoes(novaOrdem.map((_, index) => index + 1));

    setRespostas(prev => {
      const novo: { [key: string]: string } = {};
      novaOrdem.forEach((_, index) => {
        const antigaChave = (index >= num - 1) ? `${index + 2}` : `${index + 1}`;
        if (prev[antigaChave]) {
          novo[`${index + 1}`] = prev[antigaChave];
        }
      });
      return novo;
    });
  };

  const realizarCorrecao = async () => {
    if (files.length === 0 || Object.keys(respostas).length === 0) {
      setErroMensagem("Adicione pelo menos uma imagem e preencha o gabarito.");
      return;
    }else{
      setErroMensagem(null)
    }
    setLoading(true);
    setCorrecaoRealizada(true);
    const toBase64 = (file: File): Promise<string> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
      });
    };

    const novasNotas: { [key: string]: string } = {};
    const novasRespostas: { [key: string]: { [key: string]: string } } = {};

    for (const file of files) {
      try {
        const base64 = await toBase64(file);
        const payload = {
          gabarito: respostas,
          imagem_base64: base64,
        };

        const res = await fetch("https://api.respondeai.dirrocha.com/corrigir", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await res.json();

        if (data.acertos !== undefined && data.respostas_detectadas) {
          const totalDetectadas = Object.keys(data.respostas_detectadas).length;
          novasNotas[file.name] = `${data.acertos}/${totalDetectadas}`;
          novasRespostas[file.name] = data.respostas_detectadas;
        } else {
          novasNotas[file.name] = "Erro ao corrigir";
        }
      } catch (error) {
        console.error("Erro na correção:", error);
        novasNotas[file.name] = "Erro na API";
      }
    }

    setNotas(novasNotas);
    setDetectedAnswers(novasRespostas);
    setLoading(false);
  };
  const pageUrl = "https://respondeai.dirrocha.com/curiosidades";
  const previewImageUrl = `https://metasnap.dirrocha.com/screenshot?url=${encodeURIComponent(pageUrl)}`;

  return (<>
      <Head>
      <title>RespondeAI - Correção Inteligente de Gabaritos</title>
      <meta name="description" content="Escaneie e corrija cartões-resposta automaticamente com RespondeAI. Simples, rápido e eficiente!" />
      <meta name="keywords" content="correção automática, cartões-resposta, gabarito digital, scanner de prova, IA educacional" />
      <meta name="author" content="Equipe RespondeAI" />

      <meta property="og:title" content="RespondeAI - Correção Inteligente de Gabaritos" />
      <meta property="og:description" content="Transforme a correção de provas com inteligência artificial. Corrija gabaritos com poucos cliques!" />
      <meta property="og:image" content="https://metasnap.dirrocha.com/screenshot?url=https%3A%2F%2Frespondeai.dirrocha.com" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://respondeai.dirrocha.com/" />

      <meta name="twitter:title" content="RespondeAI - Correção Inteligente de Gabaritos" />
      <meta name="twitter:description" content="Escaneie gabaritos e obtenha resultados em segundos com RespondeAI." />
      <meta name="twitter:image" content="https://metasnap.dirrocha.com/screenshot?url=https%3A%2F%2Frespondeai.dirrocha.com" /> 
      <meta name="twitter:card" content="summary_large_image" />

      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className={`${geistSans.variable} ${geistMono.variable} grid min-h-screen py-3 pb-20 gap-16 sm:px-0 font-[family-name:var(--font-geist-sans)]`}>
      <div className="flex flex-col max-w-[1000px] mx-3 smi:mt-[-40px]">
        <img src="/promo/promo.png" alt="" className="w-[350px] m-auto mdi:w-[300px]" />
        <h1 className="m-auto mt-[10px] text-[7mm] font-semibold text-[#8287eb] smi:text-[6mm]">Correção Automática em Segundos</h1>
        <h1 className="m-auto mt-[0] text-[10mm] font-semibold text-black text-center smi:text-[8mm]">Escaneie gabaritos com facilidade e precisão</h1>
        <span className="m-auto mt-[10px] text-lg font-normal opacity-65 text-black text-justify">
          Com o RespondeAI, você automatiza a correção de provas com rapidez, precisão e praticidade. Dê adeus à contagem manual!
        </span>
        <div className="flex flex-row m-auto mt-8 gap-3">
        <Button color="primary" variant="shadow" className="w-[250px] h-[60px] lgi:w-[190px] lgi:h-[60px]" onClick={onOpen}>
          Scanear Gabarito
        </Button>
        <Dropdown>
          <DropdownTrigger>
            <Button color="primary" variant="ghost" className="w-[250px] h-[60px] lgi:w-[190px] lgi:h-[60px]">Gerar Gabarito</Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Gerar Gabarito" onAction={(key) => gerarCartao(key as string)}>
            <DropdownItem key="10">Gerar Gabarito 10 questões</DropdownItem>
            <DropdownItem key="20">Gerar Gabarito 20 questões</DropdownItem>
            <DropdownItem key="30">Gerar Gabarito 30 questões</DropdownItem>
          </DropdownMenu>
        </Dropdown>
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
        {/* <h1 className="m-auto ml-0 mt-[10px] text-[7mm] font-semibold text-[#8287eb] smi:text-[6mm]">Criadores do RespondeAI</h1>
        <div className="h-2"></div> */}
        {/* <div className="flex flex-wrap flex-row gap-3">
          <UserShowElement
            url="https://github.com/marco0antonio0"
            name="Marco Antonio"
            username="marco0antonio0"
            src="https://github.com/marco0antonio0.png?size=100px"
            text="Desenvolvedor fullstack apaixonado por IA, automação e soluções inteligentes voltadas para educação." />
        </div> */}

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
      <Modal isOpen={isOpen} placement={"center"} onOpenChange={onOpenChange} size="5xl" scrollBehavior="inside" className="flex flex-col">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-blue-600">Correção de Cartão-Resposta</ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-4">
                  <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    className="w-full h-[200px] flex flex-col border-2 border-dashed border-blue-400 p-4 rounded-xl text-center text-blue-500 hover:bg-blue-50 cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <p className="m-auto">Arraste os arquivos aqui ou clique para selecionar</p>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  {files.length > 0 && (
                    <div className="flex flex-col gap-4">
                      {files.map((file, index) => {
                        const respostasDetectadas = detectedAnswers[file.name];
                        const hasRespostas = respostasDetectadas && Object.keys(respostasDetectadas).length > 0;
                        return (
                          <div key={index} className="flex flex-col gap-2 border p-2 rounded-md">
                            <div className="flex items-center gap-4">
                              <img src={URL.createObjectURL(file)} alt="preview" className="w-12 h-12 object-cover rounded" />
                              <div className="flex flex-col">
                                <span className="text-sm text-blue-600 font-medium">{file.name}</span>
                                <span className="text-sm text-blue-800">Nota: {notas[file.name] || "---"}</span>
                              </div>
                              <Button className="ml-auto" size="sm" color="danger" variant="flat" onClick={() => setFiles(files.filter((_, i) => i !== index))}>✕</Button>
                            </div>
                            {correcaoRealizada && (
                              hasRespostas ? (
                                <div className="text-sm text-gray-700">
                                  <strong>Respostas detectadas:</strong>
                                  <ul className="list-disc list-inside">
                                    {Object.entries(detectedAnswers[file.name]).map(([q, alt]) => (
                                      <li key={q}>Questão {q}: {alt}</li>
                                    ))}
                                  </ul>
                                </div>
                              ) : (
                                <div className="text-sm text-red-600">Falha ao detectar campos.</div>
                              )
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {files.length > 0 && (
                    <div className="flex flex-col gap-2 mt-4">
                      <h2 className="text-lg font-semibold text-blue-600">Informe o gabarito:</h2>
                      {questoes.map((_, index) => {
                        const num = index + 1;
                        return (
                          <div key={num} className="flex flex-col gap-1">
                            <div className="flex items-center justify-between">
                              <label className="text-sm font-medium text-blue-600">Questão {num}</label>
                              <Button size="sm" color="danger" variant="light" onClick={() => removerQuestao(num)}>Remover</Button>
                            </div>
                            <div className="flex gap-2">
                              {"ABCDE".split("").map((opcao) => (
                                <Button
                                  key={opcao}
                                  size="sm"
                                  variant={respostas[num] === opcao ? "solid" : "bordered"}
                                  color={respostas[num] === opcao ? "primary" : "default"}
                                  onClick={() => handleRespostaChange(String(num), opcao)}
                                >
                                  {opcao}
                                </Button>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                      <Button onClick={adicionarQuestao} color="primary" variant="light" size="md">
                        + Adicionar Questão
                      </Button>
                    </div>
                  )}

                  {loading && (
                    <div className="flex items-center gap-2 text-blue-600">
                      <Spinner size="sm" /> Corrigindo...
                    </div>
                  )}
                </div>
                {erroMensagem && (
                    <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-2 rounded mb-4">
                      {erroMensagem}
                    </div>
                  )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>Fechar</Button>
                <Button color="primary" onClick={realizarCorrecao}>Realizar Correção</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>


  </>);
}



