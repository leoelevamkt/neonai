import { useState } from "react";
import { Send, MessageCircle, Mail, User, Briefcase, Link, FileText, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profession: '',
    photoLink: '',
    description: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const emailContent = `
        Novo pedido de ensaio profissional:
        
        Nome: ${formData.name}
        Email: ${formData.email}
        Profissão: ${formData.profession}
        Link da foto: ${formData.photoLink}
        Descrição: ${formData.description}
      `;

      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'api-key': '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'
        },
        body: JSON.stringify({
          sender: {
            name: 'Eleva Marketing',
            email: 'leonardonicolau858@gmail.com'
          },
          to: [{
            email: 'leonardosnicolau@gmail.com',
            name: 'Leonardo Nicolau'
          }],
          subject: `Novo pedido de ensaio - ${formData.name}`,
          textContent: emailContent,
          htmlContent: emailContent.replace(/\n/g, '<br>')
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', profession: '', photoLink: '', description: '' });
      } else {
        throw new Error('Erro ao enviar email');
      }
    } catch (error) {
      console.error('Erro:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-4 w-48 h-48 bg-brand-cyan/6 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-4 w-56 h-56 bg-brand-pink/6 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent mb-4">
            Pronto para transformar sua imagem?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Leva menos de 2 minutos para enviar. Retornamos em até 24h com sua transformação.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-stretch">
          <div className="group relative rounded-2xl overflow-hidden" data-aos="fade-right">
            {/* Animated border */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan via-blue-400 to-brand-pink opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-[2px] bg-gray-900/95 rounded-2xl backdrop-blur-sm"></div>
            
            <div className="relative z-10 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-brand-cyan to-blue-400 text-white">
                  <Send className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold mb-1">Solicite seu ensaio</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Processo rápido e seguro</p>
                </div>
              </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative group">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-cyan transition-colors" />
                    <input
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-cyan focus:bg-white/10 outline-none transition-all duration-300"
                      type="text"
                      name="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="relative group">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-cyan transition-colors" />
                    <input
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-cyan focus:bg-white/10 outline-none transition-all duration-300"
                      type="email"
                      name="email"
                      placeholder="Seu email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="relative group">
                  <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-cyan transition-colors" />
                  <input
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-cyan focus:bg-white/10 outline-none transition-all duration-300"
                    type="text"
                    name="profession"
                    placeholder="Profissão (ex.: médica, advogado, dev)"
                    value={formData.profession}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="relative group">
                  <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-brand-cyan transition-colors" />
                  <input
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-cyan focus:bg-white/10 outline-none transition-all duration-300"
                    type="url"
                    name="photoLink"
                    placeholder="Link da sua foto (Drive, iCloud, etc.)"
                    value={formData.photoLink}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="relative group">
                  <FileText className="absolute left-3 top-4 w-5 h-5 text-gray-400 group-focus-within:text-brand-cyan transition-colors" />
                  <textarea
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-cyan focus:bg-white/10 outline-none transition-all duration-300 resize-none"
                    rows={4}
                    name="description"
                    placeholder="Estilo desejado e uso (LinkedIn, site, currículo)..."
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="group/btn relative overflow-hidden flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-cyan to-blue-400 text-black font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-brand-cyan/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        <span>Enviar pedido</span>
                      </>
                    )}
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                  </button>
                  <a 
                    href="https://wa.me/555193294265?text=Olá%20Eleva%20Marketing%2C%20quero%20meu%20ensaio!" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 text-center text-sm sm:text-base transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              
              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 mt-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Pedido enviado com sucesso! Entraremos em contato em até 24h.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">Erro ao enviar. Tente novamente ou entre em contato via WhatsApp.</span>
                </div>
              )}

              <p className="text-xs text-gray-400 mt-4 p-3 rounded-lg bg-white/5 border border-white/10">
                  🔒 Respeitamos sua privacidade. Usamos suas fotos apenas para a produção do ensaio, salvo autorização para portfólio.
                </p>
              </form>
            </div>
          </div>
          
          <div className="group relative rounded-2xl overflow-hidden" data-aos="fade-left">
            {/* Animated border */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-pink via-purple-400 to-brand-cyan opacity-50 blur-sm group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="absolute inset-[2px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516575150278-77136aed6920?auto=format&fit=crop&w=800&q=70" 
                alt="Estúdio virtual" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Floating elements */}
              <div className="absolute bottom-4 left-4 glass px-3 py-1 rounded-full">
                <span className="text-xs font-medium">✨ IA Avançada</span>
              </div>
              <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full">
                <span className="text-xs font-medium">⚡ 24h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
