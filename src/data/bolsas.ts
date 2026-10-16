// =====================================================================
//  CATÁLOGO DE BOLSAS
//  ---------------------------------------------------------------------
//  Para ADICIONAR uma bolsa nova: copie um bloco { ... } e cole no fim
//  da lista, mudando o id, o nome, a descrição, o valor e o caminho da foto.
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
  preco: string       // valor exibido no card e nos detalhes
  foto: string        // caminho da imagem em public/bolsas/
}

export const bolsas: Bolsa[] = [
  {
    id: 1,
    nome: "Bolsa Bella",
    descricao: "Formato circular em tom baunilha suave, com textura em espiral e alças de mão e de ombros. Um charme atemporal.",
    detalhes: "Fio de poliéster • Duas alças: de mão e de ombros (corrente) • Fecho botão imantado • Tam. M (33cm) • Tam. G (36cm)",
    preco: "M R$ 290,00 • G R$ 305,00",
    foto: "/bolsas/bolsa-1.jpg",
  },
  {
    id: 2,
    nome: "Bolsa Pérola",
    descricao: "Ponto trançado em tom caramelo com marcantes alças de argola metálica dourada. Contemporânea e cheia de personalidade.",
    detalhes: "Fio de poliéster • Fundo estruturado com tela e forrado • Fecho botão imantado • Tam. aprox. 16 x 10",
    preco: "R$ 310,00",
    foto: "/bolsas/bolsa-2.jpg",
  },
  {
    id: 3,
    nome: "Bolsa Amarílis",
    descricao: "Tom terracota quente com alça de ombros adornada por contas de madeira e fecho lapela. Espírito boho e muito estilo.",
    detalhes: "Fio de poliéster • Alça de ombros em crochê e contas de madeira • Fundo estruturado e forrado • Fecho lapela • Tam. 28cm x 18cm",
    preco: "R$ 325,00",
    foto: "/bolsas/bolsa-3.jpg",
  },
  {
    id: 4,
    nome: "Bolsa Mariah",
    descricao: "Espaçosa e cheia de estilo, com mandala circular e tassel com contas de madeira super charmosos.",
    detalhes: "Fio de poliéster • Fecho botão imantado • Bolso interno • Tam. aprox. 21 x 34 x 16 • 1 ou 2 cores: R$ 295,00 • Até 4 cores: R$ 320,00",
    preco: "A partir de R$ 295,00",
    foto: "/bolsas/bolsa-4.jpg",
  },
  {
    id: 5,
    nome: "Clutch Margô",
    descricao: "Ponto espinha de peixe em delicado verde menta, com alça de mão vazada no próprio fio. Fresca e sofisticada.",
    detalhes: "Fio de poliéster • Fecho boca de lobo • Estrutura em tela e forrada • Tam. aprox. 16 x 29 x 12 • 1 ou 2 cores: R$ 400,00 • Até 4 cores: R$ 420,00",
    preco: "A partir de R$ 400,00",
    foto: "/bolsas/bolsa-5.jpg",
  },
  {
    id: 6,
    nome: "Bolsa Baguete Joly",
    descricao: "Ponto trançado exclusivo mesclando verde musgo, laranja e creme. Um toque boho-chic para dar vida ao seu look.",
    detalhes: "Fio de poliéster • Fecho lapela • Alças de ombros em crochê e correntes • 1 cor: R$ 290,00 • Até 4 cores: R$ 315,00",
    preco: "A partir de R$ 290,00",
    foto: "/bolsas/bolsa-6.jpg",
  },
  {
    id: 7,
    nome: "Bolsa Déia",
    descricao: "Pequena e cheia de movimento, em amarelo com franjas soltas. Um toque alegre e descontraído.",
    detalhes: "Fio de poliéster • Fecho botão imantado • Alça de crochê, corrente ou couro (a escolher) • Alça de crochê: R$ 200,00 • Alça de corrente ou couro: R$ 225,00",
    preco: "A partir de R$ 200,00",
    foto: "/bolsas/bolsa-7.jpg",
  },
  {
    id: 8,
    nome: "Bolsa Boho Denna",
    descricao: "Formato circular em delicado tom rosé antigo, com textura em espiral, alça transversal e tassel. Puro romantismo.",
    detalhes: "Fio de poliéster • Couro sintético Montana • Estruturada em tela e forrada • Fecho zíper e alça regulável • Tassel",
    preco: "R$ 370,00",
    foto: "/bolsas/bolsa-8.jpg",
  },
  {
    id: 9,
    nome: "Bolsa Jess",
    descricao: "Estruturada em azul serenity com trama entrelaçada e fecho metálico dourado. Elegância delicada para looks marcantes.",
    detalhes: "Fio de poliéster • Fio náutico • Fecho tic-tac ou linear • Alças de mão e de ombros (corrente) • Tam. aprox. 23 x 19 x 7",
    preco: "R$ 350,00",
    foto: "/bolsas/bolsa-9.jpg",
  },
  {
    id: 10,
    nome: "Bolsa Liv Pérola",
    descricao: "Modelo saco com amarração e alça principal exuberante toda em pérolas. Pura delicadeza.",
    detalhes: "Fio de polipropileno • Fecho enforcador • Alça de pérolas • Tam. aprox. 15 x 22 x 7",
    preco: "R$ 205,00",
    foto: "/bolsas/bolsa-10.jpg",
  },
  {
    id: 11,
    nome: "Bolsa Luna",
    descricao: "Formato arredondado em tom caramelo com alça de ombros em corrente. Charme e leveza para o dia a dia.",
    detalhes: "Fio náutico • Alça de ombros em corrente • Fecho botão imantado • Tam. aprox. 22 x 16",
    preco: "R$ 220,00",
    foto: "/bolsas/bolsa-11.jpg",
  },
  {
    id: 12,
    nome: "Bolsa Flora",
    descricao: "Rosas em relevo e babados delicados com alça de metal dourada. Uma peça de destaque, cheia de romantismo.",
    detalhes: "Fio de poliéster • Alça de metal • Fecho botão imantado • Forrada • Tam. aprox. 30 x 43 x 13",
    preco: "R$ 410,00",
    foto: "/bolsas/bolsa-12.jpg",
  },
  {
    id: 13,
    nome: "Bolsa Margô",
    descricao: "Fecho da vovó dourado e ponto em zigue-zague em tons de rosa. Clássica, delicada e muito elegante.",
    detalhes: "Fio de poliéster • Fecho da vovó • Alça de ombros em corrente • Estruturada e com forro duplo • Tam. aprox. 19 x 29 x 9 • 1 cor: R$ 435,00 • Até 3 cores: R$ 455,00",
    preco: "A partir de R$ 435,00",
    foto: "/bolsas/bolsa-13.jpg",
  },
]
