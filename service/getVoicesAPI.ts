export async function getVoicesAPI() {
    try {
      const response = await fetch("/api/listar-vozes");
      const data = await response.json();
  
      if (!data || !Array.isArray(data.voices)) {
        throw new Error("A API não retornou um objeto válido de vozes.");
      }
  
      return { voices: data.voices };
    } catch (error) {
      console.error("Erro ao buscar vozes:", error);
      return { voices: [] };
    }
  }
  