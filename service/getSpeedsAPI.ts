export async function getSpeedsAPI() {
    try {
      const response = await fetch("/api/listar-velocidades");
      const data = await response.json();
  
      if (!data || !Array.isArray(data.speeds)) {
        throw new Error("A API não retornou um array válido de velocidades.");
      }
  
      return { speeds: data.speeds };
    } catch (error) {
      console.error("Erro ao buscar velocidades:", error);
      return { speeds: [] };
    }
  }
  