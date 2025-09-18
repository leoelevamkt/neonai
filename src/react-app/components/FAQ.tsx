import { useState } from "react";
import { Plus, Minus, Clock, FileImage, Camera, Settings } from "lucide-react";

const faqs = [
  {
    question: "Quanto tempo leva a entrega?",
    answer: "Entre 24 e 48 horas (Pro tem fila prioritária).",
    icon: <Clock className="w-5 h-5" />
  },
  {
    question: "Qual a resolução dos arquivos?",
    answer: "Alta resolução (3000px+ no lado maior), pronta para impressão e redes.",
    icon: <FileImage className="w-5 h-5" />
  },
  {
    question: "Preciso de câmera profissional?",
    answer: "Não. Uma foto nítida com boa luz natural já funciona muito bem.",
    icon: <Camera className="w-5 h-5" />
  },
  {
    question: "Posso pedir ajustes?",
    answer: "Sim, incluímos ajustes conforme o plano selecionado.",
    icon: <Settings className="w-5 h-5" />
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent"></div>
      <div className="absolute top-1/4 left-8 w-56 h-56 bg-brand-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-8 w-64 h-64 bg-brand-pink/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Tire suas dúvidas sobre nosso processo e serviços.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              data-aos="fade-right" 
              data-aos-delay={index * 200}
              data-aos-duration="800"
            >
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/20 via-transparent to-brand-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative glass rounded-2xl overflow-hidden">
                <button
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between group/btn hover:bg-white/5 transition-colors duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-brand-cyan/20 to-blue-400/20 text-brand-cyan group-hover/btn:scale-110 transition-transform duration-300">
                      {faq.icon}
                    </div>
                    <span className="font-semibold text-sm sm:text-base group-hover/btn:text-brand-cyan transition-colors duration-300">
                      {faq.question}
                    </span>
                  </div>
                  
                  <div className="flex-shrink-0 ml-4">
                    <div className="p-1 rounded-full bg-white/10 group-hover/btn:bg-brand-cyan/20 transition-colors duration-300">
                      {openIndex === index ? (
                        <Minus className="w-4 h-4 text-brand-cyan" />
                      ) : (
                        <Plus className="w-4 h-4 text-gray-400 group-hover/btn:text-brand-cyan transition-colors duration-300" />
                      )}
                    </div>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    <div className="pl-12 border-l-2 border-brand-cyan/30">
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
          <p className="text-gray-400 text-sm">
            Ainda tem dúvidas? 
            <a 
              href="#contato" 
              className="text-brand-cyan hover:text-blue-400 transition-colors duration-300 ml-2 font-medium"
            >
              Entre em contato conosco
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
