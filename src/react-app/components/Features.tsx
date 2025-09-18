import { Sparkles, Camera, Palette, Clock } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "IA Avançada",
    description: "Algoritmos de última geração que analisam e aprimoram cada detalhe da sua foto com precisão profissional."
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Iluminação de Estúdio",
    description: "Simulamos iluminação profissional, corrigindo sombras e criando o ambiente perfeito para retratos corporativos."
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Correção de Cores",
    description: "Ajuste automático de tons de pele, saturação e contraste para um resultado natural e impactante."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Processamento Rápido",
    description: "Tecnologia otimizada que entrega resultados profissionais em questão de horas, não dias."
  }
];

export default function Features() {
  return (
    <section id="recursos" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Tecnologia que transforma
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Nossa IA especializada em retratos profissionais utiliza as mais avançadas técnicas de processamento de imagem.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass rounded-2xl p-6 sm:p-8 shadow-neon hover:scale-105 transition-all duration-300 group" 
              data-aos="fade-right" 
              data-aos-delay={index * 200}
              data-aos-duration="800"
            >
              <div className="text-brand-cyan mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="font-display font-bold text-lg sm:text-xl mb-3 text-white">
                {feature.title}
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
