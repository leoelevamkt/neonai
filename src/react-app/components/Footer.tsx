export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Coluna 1 - Sobre */}
          <div>
            <div className="mb-4">
              <img 
                src="https://mocha-cdn.com/01995530-d68b-71c1-bfdf-a712ecb5c545/download-(1).png" 
                alt="Eleva Marketing Logo" 
                className="w-11 h-11"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformamos sua presença digital com fotos profissionais geradas por IA e estratégias de marketing eficazes.
            </p>
          </div>
          
          {/* Coluna 2 - Serviços */}
          <div>
            <h4 className="text-white font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors">
                  Fotos Profissionais com IA
                </a>
              </li>
              <li>
                <a href="https://wa.me/555193294265?text=Olá%2C%20quero%20criar%20um%20site%20profissional!" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-cyan transition-colors">
                  Criação de Sites
                </a>
              </li>
              <li>
                <a href="https://wa.me/555193294265?text=Olá%2C%20quero%20saber%20sobre%20tráfego%20pago!" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-cyan transition-colors">
                  Tráfego Pago
                </a>
              </li>
              <li>
                <a href="https://wa.me/555193294265?text=Olá%2C%20quero%20saber%20sobre%20marketing%20digital!" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-cyan transition-colors">
                  Marketing Digital
                </a>
              </li>
            </ul>
          </div>
          
          {/* Coluna 3 - Contato */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📧 contato@elevamarketing.com</li>
              <li>📱 (55) 9 1929-4265</li>
              <li>🌍 Atendemos todo o Brasil</li>
              <li className="pt-2">
                <a 
                  href="https://wa.me/555193294265?text=Olá%20Eleva%20Marketing%2C%20quero%20saber%20mais!" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 hover:bg-green-700 text-white text-xs font-medium transition-colors"
                >
                  💬 Falar no WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2025 Eleva Marketing — Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Fotos profissionais com IA • Criação de sites • Tráfego pago • Marketing digital
          </p>
        </div>
      </div>
    </footer>
  );
}
