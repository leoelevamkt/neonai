import { Check, Star, Sparkles, Zap, Users } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Para atualizar seu perfil com impacto.",
    price: "149",
    icon: <Sparkles className="w-8 h-8" />,
    gradient: "from-emerald-400 to-cyan-400",
    features: [
      "3 fotos finalizadas",
      "1 estilo",
      "Ajustes básicos",
      "Entrega em 24–48h"
    ],
    cta: "Começar",
    popular: false
  },
  {
    name: "Pro",
    description: "Portfólio completo e presença digital forte.",
    price: "299",
    icon: <Zap className="w-8 h-8" />,
    gradient: "from-blue-400 to-purple-400",
    features: [
      "8 fotos finalizadas",
      "2 estilos",
      "Correções finas",
      "Entrega prioritária (24h)"
    ],
    cta: "Selecionar Pro",
    popular: true
  },
  {
    name: "Empresas",
    description: "Times padronizados, com identidade unificada.",
    price: "Sob consulta",
    icon: <Users className="w-8 h-8" />,
    gradient: "from-orange-400 to-pink-400",
    features: [
      "Lotes de colaboradores",
      "Guia de estilo corporativo",
      "Integração e SLA"
    ],
    cta: "Solicitar proposta",
    popular: false
  }
];

export default function Plans() {
  return (
    <section id="planos" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-4 w-48 h-48 bg-brand-cyan/6 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-4 w-56 h-56 bg-brand-pink/6 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-6">
            <Star className="w-4 h-4 text-brand-cyan" />
            <span>Escolha seu plano ideal</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Planos
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Transparência e resultado. Escolha o ideal para você.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                plan.popular ? 'md:scale-[1.05] shadow-2xl shadow-brand-cyan/20' : ''
              }`}
              data-aos="fade-right" 
              data-aos-delay={index * 250}
              data-aos-duration="900"
            >
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan via-blue-400 to-brand-pink opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-[2px] bg-gray-900/95 rounded-2xl backdrop-blur-sm"></div>
              
              <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-gradient-to-r from-brand-cyan to-blue-400 text-black text-xs font-bold uppercase tracking-wider shadow-lg">
                      <Star className="w-3 h-3" />
                      Mais popular
                    </div>
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${plan.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1">{plan.name}</h3>
                    <p className="text-gray-400 text-sm sm:text-base">{plan.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-semibold text-brand-cyan">R$</span>
                    <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-3 text-sm text-gray-300 mb-8 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <Check className="w-4 h-4 text-emerald-400" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contato" 
                  className={`group/btn relative overflow-hidden px-6 py-3 rounded-full font-semibold text-sm sm:text-base text-center transition-all duration-300 ${
                    plan.name === 'Empresas' 
                      ? 'border border-white/20 hover:border-white/40 hover:bg-white/5' 
                      : 'bg-gradient-to-r from-brand-cyan to-blue-400 text-black hover:shadow-lg hover:shadow-brand-cyan/25'
                  }`}
                >
                  <span className="relative z-10">{plan.cta}</span>
                  {plan.name !== 'Empresas' && (
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center text-xs sm:text-sm text-gray-400 mt-8" data-aos="fade-up" data-aos-delay="300">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Garantia de satisfação: ajustes inclusos conforme o plano</span>
          </div>
        </div>
      </div>
    </section>
  );
}
