import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }


    // 🔒 Verifica se a chamada vem do próprio servidor Next.js
    const host = req.headers.host || "";
    const referer = req.headers.referer || "";
  
    if (!referer.includes(host)) {
      return res.status(403).json({ error: "Acesso negado" });
    }
    
  try {
    const { texto, velocidade, voz } = req.body;

    if (!texto || !velocidade || !voz) {
      return res.status(400).json({ error: "Parâmetros inválidos" });
    }

    const response = await fetch("https://api-genaudio.dirrocha.com/gerar-audio", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ modo: "play", texto, velocidade, voz }),
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Erro ao gerar o áudio" });
    }

    const audioBuffer = await response.arrayBuffer();
    res.setHeader("Content-Type", "audio/mpeg");
    res.status(200).send(Buffer.from(audioBuffer));

  } catch (error) {
    console.error("Erro ao processar requisição:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}
