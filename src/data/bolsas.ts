// =====================================================================
//  CATÁLOGO DE BOLSAS
//  ---------------------------------------------------------------------
//  Para ADICIONAR uma bolsa nova: copie um bloco { ... } e cole no fim
//  da lista, mudando o id, o nome, a descrição e o caminho da foto.
//
//  FOTOS: salve as imagens dentro da pasta  public/bolsas/
//         e aponte o caminho no campo "foto" (começa sempre com /bolsas/).
//         Enquanto a foto não existir, aparece um espaço com "Foto em breve".
// =====================================================================

export type Bolsa = {
  id: number
  nome: string
  descricao: string   // texto curto que aparece no card
  detalhes: string    // material / alça / tamanho (aparece nos detalhes)
  foto: string        // caminho da imagem em public/bolsas/
}

export const bolsas: Bolsa[] = [
  {
    id: 1,
    nome: "Bolsa Lua Negra",
    descricao: "Design circular moderno em preto clássico com alça em corrente. A elegância perfeita para qualquer ocasião.",
    detalhes: "Fio de malha premium preto • Alça longa de corrente • Fecho prático • Ideal para saídas noturnas",
    foto: "/bolsas/bolsa-1.jpg", // POSIÇÃO DA BOLSA 1 -> public/bolsas/bolsa-1.jpg
  },
  {
    id: 2,
    nome: "Bolsa Estruturada Geométrica",
    descricao: "Sofisticação pura com alças metálicas retangulares e redondas que trazem um toque contemporâneo ao visual.",
    detalhes: "Disponível em tons terrosos e marinho • Alça de mão metálica dourada • Ponto denso e estruturado",
    foto: "/bolsas/bolsa-2.jpg", // POSIÇÃO DA BOLSA 2 -> public/bolsas/bolsa-2.jpg
  },
  {
    id: 3,
    nome: "Mini Bag Elegance",
    descricao: "Bolsa estruturada com fecho dourado frontal e alça de mão trabalhada no próprio fio. Um luxo versátil.",
    detalhes: "Ponto trançado fechado • Fecho metálico dourado • Alça de mão robusta • Acompanha alça de corrente",
    foto: "/bolsas/bolsa-3.jpg", // POSIÇÃO DA BOLSA 3 -> public/bolsas/bolsa-3.jpg
  },
  {
    id: 4,
    nome: "Bolsa Tiracolo Mosaico",
    descricao: "Ponto trançado exclusivo mesclando tons terrosos, verde e creme. Um toque boho-chic para dar vida ao seu look.",
    detalhes: "Mix de cores exclusivas • Fecho em aba de material sintético claro com botão dourado • Alça de corrente",
    foto: "/bolsas/bolsa-4.jpg", // POSIÇÃO DA BOLSA 4 -> public/bolsas/bolsa-4.jpg
  },
  {
    id: 5,
    nome: "Maxi Bolsa Marsala",
    descricao: "Espaçosa e cheia de estilo. Conta com detalhes em esferas de madeira e pingentes de franja (tassel) super charmosos",
    detalhes: "Tamanho grande (Maxi) • Fio em tom vinho/marsala • Detalhe rústico em madeira e franjas • Excelente espaço interno",
    foto: "/bolsas/bolsa-5.jpg", // POSIÇÃO DA BOLSA 5 -> public/bolsas/bolsa-5.jpg
  },
  {
    id: 6,
    nome: "Bolsa Bucket Champagne",
    descricao: "Feita em fio com brilho sutil, destaca-se pela alça principal exuberante toda em maxi pérolas. Pura delicadeza.",
    detalhes: "Modelo saco (bucket) com amarração • Fio metalizado/champagne • Alça de mão de pérolas grandes • Acabamentos refinados",
    foto: "/bolsas/bolsa-6.jpg", // POSIÇÃO DA BOLSA 6 -> public/bolsas/bolsa-6.jpg
  },
]
