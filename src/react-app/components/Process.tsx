import { useEffect, useState, useRef } from "react";
import { Upload, Bot, Rocket, CheckCircle } from "lucide-react";

const processSteps = [
  {
    id: 1,
    icon: <Upload className="w-8 h-8" />,
    title: "Envie sua foto",
    description: "Uma foto nítida, com boa luz. Pode ser do celular mesmo.",
    details: "Formatos: JPG, PNG • Resolução mínima: 1024x1024 • Rosto bem visível"
  },
  {
    id: 2,
    icon: <Bot className="w-8 h-8" />,
    title: "Nossa IA processa",
    description: "Direção de arte, iluminação e acabamento de estúdio.",
    details: "Análise facial • Correção de luz • Aplicação de estilo profissional"
  },
  {
    id: 3,
    icon: <Rocket className="w-8 h-8" />,
    title: "Receba em até 24h",
    description: "Alta resolução, pronta para LinkedIn, site e impressão.",
    details: "Formato: JPG/PNG • Resolução: até 4K • Múltiplas variações"
  }
];

export default function Process() {
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    stepRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleSteps(prev => new Set([...prev, index]));
            }
          },
          { 
            threshold: 0.6,
            rootMargin: '-20% 0px -20% 0px'
          }
        );
        
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const getStepStatus = (index: number) => {
    if (visibleSteps.has(index)) return 'active';
    if (Array.from(visibleSteps).some(i => Number(i) > index)) return 'completed';
    return 'pending';
  };

  return (
    <section id="processo" className="py-20 sm:py-28 relative overflow-hidden" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-cyan/3 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-pink/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent mb-6">
            Como funciona
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Do upload à entrega: um processo simples e automatizado
          </p>
        </div>
        
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                ref={el => { stepRefs.current[index] = el; }}
                className="text-center"
              >
                {/* Step number */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`transform transition-all duration-1000 scale-100 opacity-100`}
                    style={{ transitionDelay: `${index * 300}ms` }}
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full font-display font-bold text-xl transition-all duration-500 shadow-lg ${
                      getStepStatus(index) === 'active'
                        ? 'bg-gradient-to-r from-brand-cyan to-blue-500 text-white scale-110 animate-pulse shadow-cyan-500/50'
                        : getStepStatus(index) === 'completed'
                        ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white shadow-emerald-500/50'
                        : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white border border-gray-500'
                    }`}>
                      {step.id}
                    </div>
                  </div>
                </div>

                {/* Step content */}
                <div
                  className={`transform transition-all duration-1000 ${
                    getStepStatus(index) === 'pending' 
                      ? 'translate-y-8 opacity-0' 
                      : 'translate-y-0 opacity-100'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="glass rounded-2xl p-6 sm:p-8 shadow-neon hover:scale-105 transition-all duration-300 group">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className={`p-4 rounded-xl transition-all duration-500 ${
                        getStepStatus(index) === 'active' 
                          ? 'bg-gradient-to-r from-brand-cyan to-blue-500 text-white scale-110 animate-pulse' 
                          : getStepStatus(index) === 'completed'
                          ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white'
                          : 'bg-gray-700 text-gray-400'
                      }`}>
                        {getStepStatus(index) === 'completed' ? <CheckCircle className="w-8 h-8" /> : step.icon}
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-gray-300 text-base sm:text-lg mb-3">
                          {step.description}
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {step.details}
                        </p>
                      </div>
                    </div>
                    
                    {/* Progress indicator */}
                    <div className="mt-4">
                      <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-1000 rounded-full ${
                            getStepStatus(index) === 'active' 
                              ? 'bg-gradient-to-r from-brand-cyan to-blue-500 animate-pulse' 
                              : getStepStatus(index) === 'completed'
                              ? 'bg-gradient-to-r from-emerald-400 to-teal-500'
                              : 'bg-gray-600'
                          }`}
                          style={{
                            width: getStepStatus(index) === 'pending' ? '0%' : '100%',
                            transitionDelay: `${index * 300}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
              <div className="w-full h-full bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600 rounded-full opacity-30"></div>
              <div 
                className="absolute top-0 w-full bg-gradient-to-b from-brand-cyan via-blue-500 to-brand-pink rounded-full transition-all duration-1000 ease-out"
                style={{
                  height: `${Math.min((Math.max(...Array.from(visibleSteps).map(i => Number(i))) + 1) * 33.33, 100)}%`
                }}
              ></div>
            </div>
            
            {/* Process Steps */}
            <div className="space-y-32">
              {processSteps.map((step, index) => (
                <div
                  key={step.id}
                  ref={el => { stepRefs.current[index] = el; }}
                  className="relative flex items-center"
                >
                  {/* Left side content (odd steps) */}
                  {index % 2 === 0 && (
                    <div className="w-5/12 pr-12 text-right">
                      <div
                        className={`transform transition-all duration-1000 ${
                          getStepStatus(index) === 'pending' 
                            ? 'translate-x-8 opacity-0' 
                            : 'translate-x-0 opacity-100'
                        }`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                      >
                        <div className="glass rounded-2xl p-8 shadow-neon hover:scale-105 transition-all duration-300 group">
                          <div className="flex items-center justify-end gap-4 mb-4">
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors duration-300">
                                {step.title}
                              </h3>
                              <p className="text-gray-300 text-lg mb-3">
                                {step.description}
                              </p>
                              <p className="text-gray-400 text-sm leading-relaxed">
                                {step.details}
                              </p>
                            </div>
                            <div className={`p-4 rounded-xl transition-all duration-500 ${
                              getStepStatus(index) === 'active' 
                                ? 'bg-gradient-to-r from-brand-cyan to-blue-500 text-white scale-110 animate-pulse' 
                                : getStepStatus(index) === 'completed'
                                ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white'
                                : 'bg-gray-700 text-gray-400'
                            }`}>
                              {getStepStatus(index) === 'completed' ? <CheckCircle className="w-8 h-8" /> : step.icon}
                            </div>
                          </div>
                          
                          {/* Progress indicator */}
                          <div className="mt-4">
                            <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                              <div
                                className={`h-full transition-all duration-1000 rounded-full ${
                                  getStepStatus(index) === 'active' 
                                    ? 'bg-gradient-to-r from-brand-cyan to-blue-500 animate-pulse' 
                                    : getStepStatus(index) === 'completed'
                                    ? 'bg-gradient-to-r from-emerald-400 to-teal-500'
                                    : 'bg-gray-600'
                                }`}
                                style={{
                                  width: getStepStatus(index) === 'pending' ? '0%' : '100%',
                                  transitionDelay: `${index * 300}ms`
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className={`w-6 h-6 rounded-full border-4 transition-all duration-500 ${
                        getStepStatus(index) === 'active'
                          ? 'bg-brand-cyan border-brand-cyan scale-150 animate-pulse shadow-lg shadow-cyan-500/50'
                          : getStepStatus(index) === 'completed'
                          ? 'bg-emerald-400 border-emerald-400 scale-125'
                          : 'bg-gray-600 border-gray-600'
                      }`}
                    ></div>
                  </div>
                  
                  {/* Step number */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 z-20 ${
                    index % 2 === 0 ? '-translate-x-20' : 'translate-x-20'
                  }`}>
                    <div
                      className={`transform transition-all duration-1000 scale-100 opacity-100`}
                      style={{ transitionDelay: `${index * 300}ms` }}
                    >
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full font-display font-bold text-xl transition-all duration-500 shadow-lg ${
                        getStepStatus(index) === 'active'
                          ? 'bg-gradient-to-r from-brand-cyan to-blue-500 text-white scale-110 animate-pulse shadow-cyan-500/50'
                          : getStepStatus(index) === 'completed'
                          ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white shadow-emerald-500/50'
                          : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white border border-gray-500'
                      }`}>
                        {step.id}
                      </div>
                    </div>
                  </div>
                  
                  {/* Right side content (even steps) */}
                  {index % 2 === 1 && (
                    <div className="w-5/12 pl-12 text-left ml-auto">
                      <div
                        className={`transform transition-all duration-1000 ${
                          getStepStatus(index) === 'pending' 
                            ? '-translate-x-8 opacity-0' 
                            : 'translate-x-0 opacity-100'
                        }`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                      >
                        <div className="glass rounded-2xl p-8 shadow-neon hover:scale-105 transition-all duration-300 group">
                          <div className="flex items-center gap-4 mb-4">
                            <div className={`p-4 rounded-xl transition-all duration-500 ${
                              getStepStatus(index) === 'active' 
                                ? 'bg-gradient-to-r from-brand-cyan to-blue-500 text-white scale-110 animate-pulse' 
                                : getStepStatus(index) === 'completed'
                                ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white'
                                : 'bg-gray-700 text-gray-400'
                            }`}>
                              {getStepStatus(index) === 'completed' ? <CheckCircle className="w-8 h-8" /> : step.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors duration-300">
                                {step.title}
                              </h3>
                              <p className="text-gray-300 text-lg mb-3">
                                {step.description}
                              </p>
                              <p className="text-gray-400 text-sm leading-relaxed">
                                {step.details}
                              </p>
                            </div>
                          </div>
                          
                          {/* Progress indicator */}
                          <div className="mt-4">
                            <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                              <div
                                className={`h-full transition-all duration-1000 rounded-full ${
                                  getStepStatus(index) === 'active' 
                                    ? 'bg-gradient-to-r from-brand-cyan to-blue-500 animate-pulse' 
                                    : getStepStatus(index) === 'completed'
                                    ? 'bg-gradient-to-r from-emerald-400 to-teal-500'
                                    : 'bg-gray-600'
                                }`}
                                style={{
                                  width: getStepStatus(index) === 'pending' ? '0%' : '100%',
                                  transitionDelay: `${index * 300}ms`
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16 sm:mt-20">
          <div className="glass rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-brand-cyan to-brand-pink bg-clip-text text-transparent">
              Pronto para começar?
            </h3>
            <p className="text-gray-300 mb-6">
              Transforme sua foto comum em um retrato profissional hoje mesmo
            </p>
            <a 
              href="#contato" 
              className="inline-block px-8 py-4 rounded-full btn-neon font-semibold text-lg hover:scale-105 transition-transform duration-300"
            >
              Iniciar meu ensaio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
