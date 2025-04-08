import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const response = await fetch("https://api-genaudio.dirrocha.com/listar-vozes");
    const data = await response.json();

    if (!data || typeof data.vozes !== "object") {
      throw new Error("A API não retornou um objeto válido de vozes.");
    }

    const voiceNames = Object.keys(data.vozes);

    res.status(200).json({ voices: voiceNames });
  } catch (error) {
    console.error("Erro ao buscar vozes:", error);
    res.status(500).json({ voices: [] });
  }
}
