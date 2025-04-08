import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const response = await fetch("https://api-genaudio.dirrocha.com/listar-velocidades");
    const data = await response.json();

    if (!data || !Array.isArray(data.velocidades)) {
      throw new Error("A API não retornou um array válido de velocidades.");
    }

    res.status(200).json({ speeds: data.velocidades });
  } catch (error) {
    console.error("Erro ao buscar velocidades:", error);
    res.status(500).json({ speeds: [] });
  }
}
