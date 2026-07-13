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
  // ---- Bolsas 1 a 3: aguardando os nomes oficiais da Nana (nomes provisórios) ----
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
  // ---- Bolsas com nomes oficiais da Nana ----
  {
    id: 4,
    nome: "Bolsa Joly",
    descricao: "Ponto trançado exclusivo mesclando verde musgo, laranja e creme. Um toque boho-chic para dar vida ao seu look.",
    detalhes: "Mix de cores exclusivas • Fecho em aba de material sintético claro com botão dourado • Alça de corrente",
    foto: "/bolsas/bolsa-4.jpg", // POSIÇÃO DA BOLSA 4 -> public/bolsas/bolsa-4.jpg
  },
  {
    id: 5,
    nome: "Bolsa Mariah",
    descricao: "Espaçosa e cheia de estilo em tom vinho marsala, com mandala circular e pingentes de franja (tassel) super charmosos.",
    detalhes: "Tamanho grande (Maxi) • Fio em tom vinho/marsala • Mandala circular trabalhada • Tassel com contas de madeira",
    foto: "/bolsas/bolsa-5.jpg", // POSIÇÃO DA BOLSA 5 -> public/bolsas/bolsa-5.jpg
  },
  {
    id: 6,
    nome: "Bolsa Liv Pérola",
    descricao: "Feita em fio com brilho sutil, destaca-se pela alça principal exuberante toda em maxi pérolas. Pura delicadeza.",
    detalhes: "Modelo saco (bucket) com amarração • Fio metalizado/champagne • Alça de mão de pérolas grandes • Acabamentos refinados",
    foto: "/bolsas/bolsa-6.jpg", // POSIÇÃO DA BOLSA 6 -> public/bolsas/bolsa-6.jpg
  },
  {
    id: 7,
    nome: "Clutch Margô",
    descricao: "Ponto espinha de peixe trabalhado em um delicado verde menta, com alça de mão vazada no próprio fio. Fresca e sofisticada.",
    detalhes: "Fio de malha em verde sálvia • Ponto trançado espinha de peixe • Alça de mão integrada • Formato estruturado",
    foto: "/bolsas/bolsa-7.jpg", // POSIÇÃO DA BOLSA 7 -> public/bolsas/bolsa-7.jpg
  },
  {
    id: 8,
    nome: "Bolsa Bella",
    descricao: "Formato circular em tom baunilha suave, com textura de ponto pipoca em espiral e alça presa por argolas douradas. Um charme atemporal.",
    detalhes: "Fio acetinado baunilha • Ponto pipoca em espiral • Alça de mão com argolas douradas • Pingente de tassel",
    foto: "/bolsas/bolsa-8.jpg", // POSIÇÃO DA BOLSA 8 -> public/bolsas/bolsa-8.jpg
  },
  {
    id: 9,
    nome: "Bolsa Pérola",
    descricao: "Ponto puff volumoso em tom caramelo natural com marcantes alças de argola metálica dourada. Contemporânea e cheia de personalidade.",
    detalhes: "Fio de algodão em tom bege/caramelo • Ponto puff volumoso • Alças de argola dourada • Modelo estruturado",
    foto: "/bolsas/bolsa-9.jpg", // POSIÇÃO DA BOLSA 9 -> public/bolsas/bolsa-9.jpg
  },
  {
    id: 10,
    nome: "Bolsa Amarilla",
    descricao: "Tom terracota quente com alça adornada por esferas de madeira e fecho em couro com botão. Espírito boho e muito estilo.",
    detalhes: "Fio em tom terracota • Contas de madeira na alça • Fecho em couro sintético com botão metálico • Alça transversal",
    foto: "/bolsas/bolsa-10.jpg", // POSIÇÃO DA BOLSA 10 -> public/bolsas/bolsa-10.jpg
  },
  {
    id: 11,
    nome: "Bolsa Déia",
    descricao: "Pequena e cheia de movimento, em amarelo mostarda com franjas soltas e alça de corrente. Um toque alegre e descontraído.",
    detalhes: "Fio em amarelo mostarda • Franjas longas • Alça de corrente dourada • Modelo compacto",
    foto: "/bolsas/bolsa-11.jpg", // POSIÇÃO DA BOLSA 11 -> public/bolsas/bolsa-11.jpg
  },
  {
    id: 12,
    nome: "Bolsa Boho Danna",
    descricao: "Formato circular em delicado tom rosé antigo, com textura em espiral, alça transversal de couro e pingente de tassel. Puro romantismo.",
    detalhes: "Fio em tom rosa seco/malva • Ponto espiral trabalhado • Alça transversal de couro • Tassel com fecho dourado",
    foto: "/bolsas/bolsa-12.jpg", // POSIÇÃO DA BOLSA 12 -> public/bolsas/bolsa-12.jpg
  },
  {
    id: 13,
    nome: "Bolsa Jess",
    descricao: "Estruturada em azul serenity com trama entrelaçada e fecho metálico dourado. Elegância delicada para compor looks marcantes.",
    detalhes: "Fio de malha em azul bebê • Ponto entrelaçado (basketweave) • Fecho metálico dourado • Alça de mão e corrente removível",
    foto: "/bolsas/bolsa-13.jpg", // POSIÇÃO DA BOLSA 13 -> public/bolsas/bolsa-13.jpg
  },
]
