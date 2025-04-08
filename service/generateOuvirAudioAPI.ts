export async function generateOuvirAudioAPI(texto: string, velocidade: string, voz: string) {
    try {
      const response = await fetch("/api/generate-audio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          modo: "play",
          texto,
          velocidade,
          voz,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Erro ao gerar o áudio. Código: ${response.status}`);
      }
  
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
  
      const audio = new Audio(url);
      audio.play();
  
      return { success: true };
    } catch (error) {
      console.error("Erro ao gerar o áudio:", error);
      return { success: false };
    }
  }
  