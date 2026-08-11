# Nana Correa Ateliê — Catálogo de Bolsas 👜

Site de catálogo (vitrine) para as bolsas artesanais em **crochê moderno** da Nana Correa Ateliê.
O objetivo é simples: a cliente entra, vê as peças com foto, nome e descrição, e fala com a
artesã pelo **WhatsApp**. Sem login, sem carrinho, sem burocracia — cada bolsa é uma **peça única**
e o valor é **sob consulta**.

🔗 Instagram: [@nanacorreaatelie](https://instagram.com/nanacorreaatelie)

---

## ✨ Funcionalidades

- Vitrine responsiva das bolsas (1 coluna no celular → 3 no computador)
- Modal de detalhes ao clicar em cada peça
- Botão de **WhatsApp** com mensagem já preenchida ("Tenho interesse na bolsa X…")
- Selo **"Peça Única"** e etiqueta **"Valor sob consulta"**
- Menu responsivo com atalho pro Instagram
- Placeholder automático ("Foto em breve") enquanto uma foto não é adicionada

---

## 🛠️ Tecnologias

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) (build e servidor de desenvolvimento)
- [Tailwind CSS v4](https://tailwindcss.com/) (estilos)
- [lucide-react](https://lucide.dev/) (ícones)
- [sharp](https://sharp.pixelplumbing.com/) (otimização das fotos)

---

## 🚀 Como rodar o projeto

Pré-requisito: ter o [Node.js](https://nodejs.org/) instalado (versão 20 ou superior).

```bash
# 1. Instalar as dependências (só na primeira vez)
npm install

# 2. Rodar o site em modo desenvolvimento
npm run dev
```

Depois abra o endereço que aparecer no terminal (normalmente **http://localhost:5173**).

### Scripts disponíveis

| Comando | O que faz |
|---|---|
| `npm run dev` | Sobe o site localmente com recarregamento automático |
| `npm run build` | Gera a versão de produção na pasta `dist/` |
| `npm run preview` | Testa localmente a versão de produção já gerada |
| `npm run lint` | Verifica erros de código |
| `npm run otimizar` | Reduz o peso das fotos em `public/bolsas/` (veja abaixo) |

---

## 📁 Estrutura do projeto

```
projetocatalogo/
├── public/
│   └── bolsas/               ← FOTOS das bolsas (bolsa-1.jpg, bolsa-2.jpg, ...)
│       └── placeholder.svg   ← imagem "Foto em breve" (não apagar)
├── scripts/
│   └── otimizar-imagens.mjs  ← script que deixa as fotos leves
├── src/
│   ├── config.ts             ← WhatsApp, Instagram e nome da marca
│   ├── global.css            ← fontes, cores e estilos base
│   ├── data/
│   │   └── bolsas.ts          ← LISTA das bolsas (nome, descrição, foto)
│   └── pages/
│       └── LojaBolsas.tsx     ← a página do catálogo
├── index.html
└── package.json
```

Os dois arquivos que você mais vai mexer são **`src/data/bolsas.ts`** (as bolsas) e
**`src/config.ts`** (WhatsApp e Instagram).

---

## 🧷 Como manter o site

### Trocar o número de WhatsApp

Abra `src/config.ts` e preencha o número com DDI + DDD, só números:

```ts
export const WHATSAPP_NUMERO = "5511912345678" // Brasil(55) + DDD(11) + número
```

### Adicionar uma bolsa nova

1. Salve a foto em `public/bolsas/` seguindo a numeração (ex: `bolsa-14.jpg`).
2. Abra `src/data/bolsas.ts`, copie um bloco `{ ... }` e cole no fim da lista, ajustando:

```ts
{
  id: 14,
  nome: "Nome da bolsa",
  descricao: "Descrição curta que aparece no card.",
  detalhes: "Material • Tipo de alça • Tamanho",
  foto: "/bolsas/bolsa-14.jpg",
},
```

> 💡 Enquanto a foto não existir na pasta, o card mostra "Foto em breve" automaticamente.

### Otimizar as fotos (deixar o site rápido)

Fotos vindas do celular costumam ser pesadas (vários MB) e deixam o site lento.
Depois de adicionar fotos novas, rode:

```bash
npm run otimizar
```

O script redimensiona e comprime só as fotos grandes (pula as que já estão leves),
sem perda visível de qualidade.

### Mudar o nome da marca

Também em `src/config.ts`:

```ts
export const NOME_MARCA = "Nana Correa Ateliê"
```

---

## 🌐 Publicar na internet

O site é estático, então pode ser publicado de graça na [Vercel](https://vercel.com/) ou
[Netlify](https://www.netlify.com/):

1. Rode `npm run build` (gera a pasta `dist/`).
2. Suba o projeto para o serviço escolhido — o comando de build é `npm run build` e a
   pasta de publicação é `dist`.

---

Feito com carinho para a Nana Correa Ateliê. 💛
