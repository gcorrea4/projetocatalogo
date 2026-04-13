import { ShoppingBag, Star, Menu } from 'lucide-react'; // Instale os ícones: npm install lucide-react

export function LojaBolsas() {
  const bolsas = [
    { id: 1, nome: "Bolsa de Couro Clássica", preco: "R$ 299,90", img: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=600&auto=format&fit=crop" },
    { id: 2, nome: "Bolsa Transversal Elegance", preco: "R$ 189,90", img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=600&auto=format&fit=crop" },
    { id: 3, nome: "Mochila Urbana Premium", preco: "R$ 249,50", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=600&auto=format&fit=crop" },
    { id: 4, nome: "Bolsa Tote Minimalista", preco: "R$ 319,00", img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=600&auto=format&fit=crop" },
  ];

  return (
    <main className="min-h-screen bg-[#FAFAFA] font-sans text-[#333]">
      
      {/* NAVBAR */}
      <header className="flex justify-between items-center px-[5%] py-5 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button className="md:hidden"><Menu size={24} /></button>
          <h1 className="text-2xl font-serif font-bold tracking-widest uppercase">Ateliê<span className="text-amber-700">.</span></h1>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          <a href="#" className="hover:text-amber-700 transition-colors">INÍCIO</a>
          <a href="#" className="hover:text-amber-700 transition-colors">COLEÇÕES</a>
          <a href="#" className="hover:text-amber-700 transition-colors">SOBRE NÓS</a>
        </nav>
        <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ShoppingBag size={24} />
          <span className="absolute top-0 right-0 bg-amber-700 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
        </button>
      </header>

      {/* HERO SECTION (BANNER) */}
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1614179689702-355944cd0918?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="text-white max-w-2xl animate-fade-in">
          <p className="uppercase tracking-[0.3em] text-sm md:text-base mb-4 font-semibold text-amber-300">Nova Coleção Outono/Inverno</p>
          <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">A elegância que acompanha você.</h2>
          <button className="bg-white text-black px-8 py-3 rounded-none uppercase tracking-widest text-sm font-bold hover:bg-amber-700 hover:text-white transition-all duration-300">
            Ver Coleção Completa
          </button>
        </div>
      </section>

      {/* DESTAQUES (PRODUTOS) */}
      <section className="py-20 px-[5%] max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-serif mb-3">Mais Vendidas</h3>
          <div className="w-16 h-[2px] bg-amber-700 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bolsas.map((bolsa) => (
            <div key={bolsa.id} className="group cursor-pointer">
              {/* Imagem do Produto */}
              <div className="relative overflow-hidden bg-gray-100 aspect-[4/5] mb-4">
                <img 
                  src={bolsa.img} 
                  alt={bolsa.nome} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                {/* Botão que aparece no hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <button className="bg-white text-black px-6 py-2 text-sm font-bold uppercase tracking-wider hover:bg-amber-700 hover:text-white transition-colors">
                    Adicionar
                  </button>
                </div>
              </div>
              
              {/* Informações */}
              <div className="text-center">
                <div className="flex justify-center text-amber-500 mb-2">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                <h4 className="text-sm font-medium uppercase tracking-wide text-gray-800 mb-1">{bolsa.nome}</h4>
                <p className="text-amber-800 font-semibold">{bolsa.preco}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER BÁSICO */}
      <footer className="bg-[#1A1A1A] text-gray-400 py-12 text-center text-sm">
        <h2 className="text-white text-xl font-serif tracking-widest uppercase mb-4">Ateliê<span className="text-amber-700">.</span></h2>
        <p>Feito com ❤️ por um filho orgulhoso.</p>
        <p className="mt-2">© 2026 Todos os direitos reservados.</p>
      </footer>

    </main>
  );
}