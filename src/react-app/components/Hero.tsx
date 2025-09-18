import BeforeAfterComparator from "./BeforeAfterComparator";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-20 sm:pt-24 md:pt-28">
      <div className="absolute -top-20 -left-24 w-[20rem] sm:w-[30rem] h-[20rem] sm:h-[30rem] rounded-full blur-3xl bg-brand-cyan/20"></div>
      <div className="absolute -bottom-24 -right-24 w-[24rem] sm:w-[34rem] h-[24rem] sm:h-[34rem] rounded-full blur-3xl bg-brand-pink/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs sm:text-sm mb-4" data-aos="fade-up">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="hidden sm:inline">Fotos profissionais com IA — rápido, acessível e premium</span>
            <span className="sm:hidden">Fotos profissionais com IA</span>
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] bg-gradient-to-r from-brand-cyan via-blue-400 to-brand-pink bg-clip-text text-transparent" data-aos="fade-up" data-aos-delay="50">
            Sua foto comum em retrato de estúdio — sem estúdio
          </h1>
          
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-4 sm:mt-6 max-w-xl" data-aos="fade-up" data-aos-delay="120">
            Resultados editoriais em alta resolução, com direção de arte e iluminação realistas. Perfeito para LinkedIn, sites, currículos e branding pessoal.
          </p>
          
          <ul className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6 text-xs sm:text-sm text-gray-300" data-aos="fade-up" data-aos-delay="160">
            <li className="glass px-2 sm:px-3 py-1 rounded-full">Entrega em 24h</li>
            <li className="glass px-2 sm:px-3 py-1 rounded-full">Estilos por profissão</li>
            <li className="glass px-2 sm:px-3 py-1 rounded-full">Alta resolução</li>
            <li className="glass px-2 sm:px-3 py-1 rounded-full">Ajustes inclusos</li>
          </ul>
          
          <div className="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-8" data-aos="fade-up" data-aos-delay="200">
            <a href="#contato" className="px-6 sm:px-7 py-3 rounded-full btn-neon font-semibold text-center">Quero meu ensaio</a>
            <a href="#recursos" className="px-6 sm:px-7 py-3 rounded-full btn-ghost hover:border-white/40 text-center">Ver recursos</a>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mt-4 sm:mt-6 text-xs sm:text-sm text-gray-400" data-aos="fade-up" data-aos-delay="240">
            <div className="flex -space-x-2">
              <img className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-black" src="https://i.pravatar.cc/40?img=5" alt="Cliente"/>
              <img className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-black" src="https://i.pravatar.cc/40?img=15" alt="Cliente"/>
              <img className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-black" src="https://i.pravatar.cc/40?img=25" alt="Cliente"/>
            </div>
            <span className="leading-relaxed">Mais de 5.000 profissionais atendidos • Nota média 4.9/5</span>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <BeforeAfterComparator />
        </div>
      </div>
    </section>
  );
}
