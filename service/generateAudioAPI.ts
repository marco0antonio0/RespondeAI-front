export async function generateAudioAPI(texto: string, velocidade: string, voz: string) {
    try {
      const response = await fetch("/api/generate-audio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          modo: "download",
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
  
      const a = document.createElement("a");
      a.href = url;
      a.download = "audio_gerado.mp3";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
  
      return { success: true };
    } catch (error) {
      console.error("Erro ao gerar o áudio:", error);
      return { success: false };
    }
  }
  