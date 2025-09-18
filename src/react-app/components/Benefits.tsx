import { Camera, Palette, Zap, HeadphonesIcon } from "lucide-react";

const benefits = [
  {
    title: "Estética de estúdio",
    description: "Iluminação, fundo e correção dignos de editorial.",
    icon: <Camera className="w-8 h-8" />,
    gradient: "from-blue-400 to-cyan-400"
  },
  {
    title: "Personalização real",
    description: "Estilos alinhados à sua profissão e marca pessoal.",
    icon: <Palette className="w-8 h-8" />,
    gradient: "from-purple-400 to-pink-400"
  },
  {
    title: "Rápido e acessível",
    description: "Sem agenda de estúdio, sem custos de produção.",
    icon: <Zap className="w-8 h-8" />,
    gradient: "from-yellow-400 to-orange-400"
  },
  {
    title: "Suporte humano",
    description: "Ajustes finos e orientação por especialistas.",
    icon: <HeadphonesIcon className="w-8 h-8" />,
    gradient: "from-emerald-400 to-teal-400"
  }
];

export default function Benefits() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/3 left-16 w-64 h-64 bg-brand-cyan/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-16 w-72 h-72 bg-brand-pink/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent mb-4">
            Por que a Eleva Marketing?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Qualidade premium, processo eficiente e resultados que impressionam.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-1"
              data-aos="fade-right" 
              data-aos-delay={index * 200}
              data-aos-duration="800"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative glass rounded-2xl p-6 sm:p-8 shadow-neon h-full">
                <div className="flex flex-col items-start">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${benefit.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                  
                  <h4 className="font-display font-bold text-base sm:text-lg mb-3 text-white group-hover:text-brand-cyan transition-colors duration-300">
                    {benefit.title}
                  </h4>
                  
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base group-hover:text-gray-200 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
                
                {/* Hover line effect */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-cyan to-brand-pink scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
