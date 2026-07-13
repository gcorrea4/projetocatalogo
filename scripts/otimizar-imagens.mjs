// =====================================================================
//  OTIMIZADOR DE FOTOS DAS BOLSAS
//  ---------------------------------------------------------------------
//  Reduz o peso das imagens em public/bolsas/ sem perda visível:
//   - redimensiona para no máximo 1080px de largura/altura
//   - recomprime em JPEG de boa qualidade
//
//  COMO USAR (no terminal, dentro da pasta do projeto):
//     npm run otimizar
//
//  Rode sempre que adicionar fotos novas grandes (ex: direto do celular).
//  As fotos já pequenas são puladas automaticamente.
// =====================================================================

import { readdir, readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PASTA = join(__dirname, '..', 'public', 'bolsas')

const LARGURA_MAX = 1080   // largura/altura máxima em pixels
const QUALIDADE = 80       // qualidade do JPEG (0-100)
const PULAR_ABAIXO_DE = 250 * 1024 // não mexe em fotos com menos de 250 KB

const kb = (bytes) => Math.round(bytes / 1024)

const arquivos = (await readdir(PASTA)).filter((n) => /\.jpe?g$/i.test(n))

let totalAntes = 0
let totalDepois = 0

for (const nome of arquivos) {
  const caminho = join(PASTA, nome)
  const original = await readFile(caminho)
  totalAntes += original.length

  if (original.length < PULAR_ABAIXO_DE) {
    totalDepois += original.length
    console.log(`• ${nome.padEnd(16)} ${kb(original.length)} KB  (já pequena, pulada)`)
    continue
  }

  try {
    const otimizada = await sharp(original, { failOn: 'none' }) // tolera JPEGs fora do padrão
      .rotate() // respeita a orientação da foto (EXIF)
      .resize({ width: LARGURA_MAX, height: LARGURA_MAX, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: QUALIDADE, mozjpeg: true })
      .toBuffer()

    // Só grava se realmente ficou menor
    if (otimizada.length < original.length) {
      await writeFile(caminho, otimizada)
      totalDepois += otimizada.length
      console.log(`✓ ${nome.padEnd(16)} ${kb(original.length)} KB -> ${kb(otimizada.length)} KB`)
    } else {
      totalDepois += original.length
      console.log(`• ${nome.padEnd(16)} ${kb(original.length)} KB  (já otimizada)`)
    }
  } catch (erro) {
    // Se uma foto der problema, mantém a original e segue com as outras
    totalDepois += original.length
    console.log(`✗ ${nome.padEnd(16)} ${kb(original.length)} KB  (erro, mantida original: ${erro.message})`)
  }
}

console.log('\n============================================')
console.log(`TOTAL: ${kb(totalAntes)} KB -> ${kb(totalDepois)} KB`)
console.log(`Economia: ${kb(totalAntes - totalDepois)} KB (${Math.round((1 - totalDepois / totalAntes) * 100)}%)`)
console.log('============================================')
