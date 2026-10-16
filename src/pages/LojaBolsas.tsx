import { useState, useEffect, useRef } from 'react'

// Dispara evento pro Google Analytics
function trackEvent(action: string, params?: Record<string, string>) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', action, params)
  }
}
import { Menu, X, Sparkles, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import { bolsas, type Bolsa } from '../data/bolsas'
import { NOME_MARCA, INSTAGRAM_URL, linkWhatsApp } from '../config'
import HeroImg2 from '../img/hero2.jpg'

const PLACEHOLDER = '/bolsas/placeholder.svg'

// Categorias disponíveis — adicione mais conforme o catálogo crescer
// const CATEGORIAS = ['Todas', 'Dia a Dia', 'Festa', 'Maxi'] as const
// type Categoria = typeof CATEGORIAS[number]

// Mapeamento de bolsa → categoria (edite conforme necessário)
// const CATEGORIA_POR_ID: Record<number, Categoria> = {
//   1: 'Festa',
//   2: 'Dia a Dia',
//   3: 'Festa',
//   4: 'Dia a Dia',
//   5: 'Maxi',
//   6: 'Festa',
// }

function Instagram({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

// Hook para scroll reveal suave sem biblioteca externa
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

// Card individual com animação de scroll reveal
function BolsaCard({ bolsa, onClick, index }: { bolsa: Bolsa; onClick: () => void; index: number }) {
  const { ref, visible } = useScrollReveal()

  return (
    <article
      ref={ref}
      className="group cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.55s ease ${index * 80}ms, transform 0.55s ease ${index * 80}ms`,
      }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden bg-[#EFE7DD] aspect-[4/5] mb-4">
        <img
          src={bolsa.foto}
          alt={bolsa.nome}
          loading="lazy"
          onError={(e) => { e.currentTarget.src = PLACEHOLDER }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        <span className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 text-[#8A6D3B] text-[11px] font-medium uppercase tracking-wider px-3 py-1 rounded-full">
          <Sparkles size={12} /> Peça Única
        </span>
        <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <span className="bg-white text-[#4A3F35] px-6 py-2 text-sm font-medium uppercase tracking-wider">
            Ver detalhes
          </span>
        </div>
      </div>
      <div className="text-center">
        <h4 className="font-serif text-lg text-[#4A3F35] mb-1">{bolsa.nome}</h4>
        <p className="text-sm text-[#7A6E60] mb-2 px-2">{bolsa.descricao}</p>
        <p className="text-[#C19A6B] text-sm font-medium uppercase tracking-wide">
          {bolsa.preco}
        </p>
      </div>
    </article>
  )
}

// Modal completo com navegação entre bolsas
function Modal({
  bolsa,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  bolsa: Bolsa
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  hasPrev: boolean
  hasNext: boolean
}) {
  // Fechar com ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && hasPrev) onPrev()
      if (e.key === 'ArrowRight' && hasNext) onNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose, onPrev, onNext, hasPrev, hasNext])

  // Travar scroll do body enquanto modal estiver aberto
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF7F2] max-w-3xl w-full max-h-[92vh] overflow-y-auto grid md:grid-cols-2"
        style={{ borderRadius: '2px' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Foto */}
        <div className="relative bg-[#EFE7DD] aspect-square md:aspect-auto">
          <img
            src={bolsa.foto}
            alt={bolsa.nome}
            onError={(e) => { e.currentTarget.src = PLACEHOLDER }}
            className="w-full h-full object-cover"
          />
          {/* Navegação entre bolsas */}
          <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none">
            <button
              className={`pointer-events-auto w-9 h-9 rounded-full bg-white/85 flex items-center justify-center shadow hover:bg-white transition-all ${!hasPrev ? 'opacity-0 pointer-events-none' : ''}`}
              onClick={(e) => { e.stopPropagation(); onPrev() }}
              aria-label="Bolsa anterior"
            >
              <ChevronLeft size={20} className="text-[#4A3F35]" />
            </button>
            <button
              className={`pointer-events-auto w-9 h-9 rounded-full bg-white/85 flex items-center justify-center shadow hover:bg-white transition-all ${!hasNext ? 'opacity-0 pointer-events-none' : ''}`}
              onClick={(e) => { e.stopPropagation(); onNext() }}
              aria-label="Próxima bolsa"
            >
              <ChevronRight size={20} className="text-[#4A3F35]" />
            </button>
          </div>
        </div>

        {/* Texto */}
        <div className="p-6 md:p-8 relative flex flex-col">
          <button
            className="absolute top-4 right-4 text-[#7A6E60] hover:text-[#4A3F35] transition-colors"
            onClick={onClose}
            aria-label="Fechar"
          >
            <X size={24} />
          </button>

          <span className="flex items-center gap-1 text-[#8A6D3B] text-[11px] font-medium uppercase tracking-wider mb-3">
            <Sparkles size={12} /> Peça Única
          </span>
          <h3 className="font-serif text-2xl mb-3">{bolsa.nome}</h3>
          <p className="text-[#5C5043] leading-relaxed mb-4">{bolsa.descricao}</p>

          {/* Detalhes como lista legível */}
          <ul className="text-sm text-[#7A6E60] mb-6 space-y-1">
            {bolsa.detalhes.split('•').map((d, i) => d.trim() && (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#C19A6B] mt-0.5">—</span>
                {d.trim()}
              </li>
            ))}
          </ul>

          <p className="text-[#C19A6B] font-medium uppercase tracking-wide mb-6 text-sm">
            {bolsa.preco}
          </p>

          <a
            href={linkWhatsApp(`Olá! Tenho interesse na bolsa "${bolsa.nome}". Poderia me passar mais informações?`)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('whatsapp_click', { bolsa: bolsa.nome, origem: 'modal' })}
            className="mt-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 font-medium hover:bg-[#1da851] transition-colors text-sm uppercase tracking-wide"
          >
            <MessageCircle size={20} /> Tenho interesse
          </a>
        </div>
      </div>
    </div>
  )
}

export function LojaBolsas() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [bolsaSelecionadaId, setBolsaSelecionadaId] = useState<number | null>(null)

  // Filtros ocultos por enquanto — descomentar quando o catálogo crescer
  // const [categoriaAtiva, setCategoriaAtiva] = useState<Categoria>('Todas')
  const bolsasFiltradas = bolsas

  // Navegação do modal (dentro das bolsas filtradas)
  const indexAtual = bolsasFiltradas.findIndex((b) => b.id === bolsaSelecionadaId)
  const bolsaSelecionada = indexAtual >= 0 ? bolsasFiltradas[indexAtual] : null

  const abrirModal = (id: number) => setBolsaSelecionadaId(id)
  const fecharModal = () => setBolsaSelecionadaId(null)
  const irParaAnterior = () => {
    if (indexAtual > 0) setBolsaSelecionadaId(bolsasFiltradas[indexAtual - 1].id)
  }
  const irParaProxima = () => {
    if (indexAtual < bolsasFiltradas.length - 1) setBolsaSelecionadaId(bolsasFiltradas[indexAtual + 1].id)
  }

  return (
    <main className="min-h-screen bg-[#FAF7F2] font-sans text-[#4A3F35]">

      {/* ===================== NAVBAR ===================== */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-sm border-b border-[#E7DDCE]">
        <div className="flex justify-between items-center px-[6%] py-4 max-w-[1400px] mx-auto">
          <h1 className="font-serif text-xl md:text-2xl font-semibold tracking-wide">
            {NOME_MARCA}<span className="text-[#C19A6B]">.</span>
          </h1>
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide">
            <a href="#inicio" className="hover:text-[#C19A6B] transition-colors">INÍCIO</a>
            <a href="#colecao" className="hover:text-[#C19A6B] transition-colors">COLEÇÃO</a>
            <a href="#sobre" className="hover:text-[#C19A6B] transition-colors">SOBRE</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
              className="hover:text-[#C19A6B] transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </nav>
          <button className="md:hidden p-1" onClick={() => setMenuAberto((v) => !v)} aria-label="Abrir menu">
            {menuAberto ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
        {menuAberto && (
          <nav className="md:hidden flex flex-col gap-1 px-[6%] pb-4 text-sm tracking-wide border-t border-[#E7DDCE] bg-[#FAF7F2]">
            <a href="#inicio" onClick={() => setMenuAberto(false)} className="py-2 hover:text-[#C19A6B]">INÍCIO</a>
            <a href="#colecao" onClick={() => setMenuAberto(false)} className="py-2 hover:text-[#C19A6B]">COLEÇÃO</a>
            <a href="#sobre" onClick={() => setMenuAberto(false)} className="py-2 hover:text-[#C19A6B]">SOBRE</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="py-2 flex items-center gap-2 hover:text-[#C19A6B]">
              <Instagram size={18} /> Instagram
            </a>
          </nav>
        )}
      </header>

      {/* ===================== HERO ===================== */}
      <section
        id="inicio"
        className="relative w-full h-[70vh] md:h-[82vh] flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(74,63,53,0.35), rgba(74,63,53,0.55)), url(${HeroImg2})`,
          backgroundColor: '#C7B299',
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
        }}
      >
        <div className="text-white max-w-2xl animate-fade-in">
          <p className="uppercase tracking-[0.35em] text-xs md:text-sm mb-4 text-[#F2E4CE]">
            Crochê moderno • Feito à mão
          </p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6">
            Adquira um produto de qualidade e beleza
          </h2>
          <p className="text-sm md:text-base mb-8 text-[#F4ECDF]">
            Bolsas artesanais e exclusivas, criadas peça por peça com muito carinho.
          </p>
          <a
            href="#colecao"
            className="inline-block bg-white text-[#4A3F35] px-8 py-3 uppercase tracking-widest text-sm font-medium hover:bg-[#C19A6B] hover:text-white transition-all duration-300"
          >
            Ver Coleção
          </a>
        </div>
      </section>

      {/* ===================== COLEÇÃO ===================== */}
      <section id="colecao" className="py-16 md:py-20 px-[6%] max-w-[1400px] mx-auto">
        <div className="text-center mb-10">
          <h3 className="font-serif text-3xl mb-3">Nossas Peças</h3>
          <div className="w-16 h-[2px] bg-[#C19A6B] mx-auto mb-4" />
          <p className="text-sm text-[#7A6E60] max-w-md mx-auto">
            Cada bolsa é única. Escolha a sua favorita e fale com a gente pelo WhatsApp.
          </p>
        </div>

        {/* Filtros de categoria — ocultos por enquanto, descomentar quando o catálogo crescer */}
        {/* <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIAS.map((cat) => (
            <button key={cat} onClick={() => setCategoriaAtiva(cat)}
              className={`px-5 py-2 text-xs uppercase tracking-widest font-medium border transition-all duration-200 ${
                categoriaAtiva === cat
                  ? 'bg-[#4A3F35] text-white border-[#4A3F35]'
                  : 'bg-transparent text-[#7A6E60] border-[#D4C5B0] hover:border-[#4A3F35] hover:text-[#4A3F35]'
              }`}>{cat}</button>
          ))}
        </div> */}

        {/* Grid de bolsas */}
        {bolsasFiltradas.length === 0 ? (
          <p className="text-center text-[#7A6E60] py-16">Nenhuma peça nessa categoria ainda.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bolsasFiltradas.map((bolsa, i) => (
              <BolsaCard
                key={bolsa.id}
                bolsa={bolsa}
                index={i}
                onClick={() => abrirModal(bolsa.id)}
              />
            ))}
          </div>
        )}
      </section>

      {/* ===================== SOBRE ===================== */}
      <section id="sobre" className="bg-[#F1E9DD] py-16 md:py-20 px-[6%]">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-serif text-3xl mb-3">Sobre o Ateliê</h3>
          <div className="w-16 h-[2px] bg-[#C19A6B] mx-auto mb-6" />
          <p className="text-[#5C5043] leading-relaxed mb-4">
            O {NOME_MARCA} nasceu do amor pelo trabalho manual. Cada bolsa é feita
            em crochê moderno, com fios selecionados e acabamentos cuidadosos — pérolas,
            argolas de madeira e correntes douradas que dão personalidade a cada peça.
          </p>
          <p className="text-[#5C5043] leading-relaxed mb-8">
            Por serem feitas à mão, todas as bolsas são exclusivas: não existem duas iguais.
            Você leva uma peça verdadeiramente sua.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#8A6D3B] hover:text-[#C19A6B] transition-colors"
          >
            <Instagram size={20} /> @nanacorreaatelie
          </a>
        </div>
      </section>

      {/* ===================== RODAPÉ ===================== */}
      <footer className="bg-[#3D342B] text-[#C9BCA9] py-12 text-center text-sm">
        <h2 className="font-serif text-white text-xl tracking-wide mb-4">
          {NOME_MARCA}<span className="text-[#C19A6B]">.</span>
        </h2>
        <div className="flex items-center justify-center gap-6 mb-5">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
            className="hover:text-white transition-colors" aria-label="Instagram">
            <Instagram size={22} />
          </a>
          <a href={linkWhatsApp('Olá! Vim pelo site e gostaria de saber mais sobre as bolsas.')}
            target="_blank" rel="noopener noreferrer"
            className="hover:text-white transition-colors" aria-label="WhatsApp">
            <MessageCircle size={22} />
          </a>
        </div>
        <p>Feito à mão, com carinho • {new Date().getFullYear()}</p>
      </footer>

      {/* ===================== MODAL ===================== */}
      {bolsaSelecionada && (
        <Modal
          bolsa={bolsaSelecionada}
          onClose={fecharModal}
          onPrev={irParaAnterior}
          onNext={irParaProxima}
          hasPrev={indexAtual > 0}
          hasNext={indexAtual < bolsasFiltradas.length - 1}
        />
      )}

      {/* ===================== BOTÃO FLUTUANTE WHATSAPP ===================== */}
      <a
        href={linkWhatsApp('Olá! Vim pelo site e gostaria de saber mais sobre as bolsas.')}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-30 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform"
        onClick={() => trackEvent('whatsapp_click', { origem: 'botao_flutuante' })}
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </main>
  )
}
