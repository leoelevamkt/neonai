import { Trophy, Users, Clock, Shield } from "lucide-react";

const benefits = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Qualidade profissional",
    description: "Resultados que rivalizam com estúdios tradicionais, mas com a praticidade da tecnologia."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Para todos os perfis",
    description: "Executivos, freelancers, empreendedores — cada profissão tem seu estilo personalizado."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Economia de tempo",
    description: "Sem agendamentos, deslocamentos ou sessões longas. Sua agenda permanece intacta."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Privacidade garantida",
    description: "Seus dados e imagens são protegidos. Processo seguro e confiável do início ao fim."
  }
];

export default function Benefits() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 right-4 w-48 h-48 bg-brand-pink/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-4 w-56 h-56 bg-brand-cyan/8 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Por que escolher a Eleva?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Combinamos tecnologia de ponta com expertise em branding pessoal para entregar resultados excepcionais.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="glass rounded-2xl p-6 sm:p-8 shadow-neon hover:scale-105 transition-all duration-300 group" 
              data-aos="fade-up" 
              data-aos-delay={index * 200}
              data-aos-duration="800"
            >
              <div className="text-brand-cyan mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h4 className="font-display font-bold text-lg sm:text-xl mb-3 text-white">
                {benefit.title}
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
