// =====================================================================
//  CONFIGURAÇÕES DA LOJA  —  EDITE SOMENTE AQUI
// =====================================================================

// 1) NÚMERO DO WHATSAPP
//    Coloque com DDI + DDD, apenas números (sem espaço, +, traço ou parêntese).
//    Exemplo: Brasil + 11 + 91234-5678  ->  "5511912345678"
export const WHATSAPP_NUMERO = "5511987226674" // <-- COLE O NÚMERO DA SUA MÃE AQUI

// 2) INSTAGRAM
export const INSTAGRAM_URL = "https://instagram.com/nanacorreaatelie"

// 3) NOME DA MARCA (aparece no topo e no rodapé)
export const NOME_MARCA = "Nana Correa Ateliê"

// =====================================================================
//  Função que monta o link do WhatsApp já com uma mensagem pronta.
//  (Não precisa mexer aqui.)
// =====================================================================
export function linkWhatsApp(mensagem: string): string {
  const texto = encodeURIComponent(mensagem)
  // Enquanto o número não for preenchido, abre o WhatsApp sem destinatário
  // (assim o site não quebra durante os testes).
  if (!WHATSAPP_NUMERO) return `https://wa.me/?text=${texto}`
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${texto}`
}
