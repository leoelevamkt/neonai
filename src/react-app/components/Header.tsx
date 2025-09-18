import { useState } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-40 border-b border-white/10 bg-black/60 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img 
            src="https://mocha-cdn.com/01995530-d68b-71c1-bfdf-a712ecb5c545/download-(1).png" 
            alt="Logo" 
            className="h-12 sm:h-16 w-auto"
          />
        </a>
        
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-sm">
          <a href="#recursos" className="hover:text-brand-cyan transition-colors">Recursos</a>
          <a href="#processo" className="hover:text-brand-cyan transition-colors">Processo</a>
          <a href="#planos" className="hover:text-brand-cyan transition-colors">Planos</a>
          <a href="#faq" className="hover:text-brand-cyan transition-colors">FAQ</a>
          <a href="#contato" className="px-4 py-2 rounded-full btn-neon">Começar</a>
        </nav>
        
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/15 hover:border-white/30"
        >
          <span className="sr-only">Abrir menu</span>
          <Menu className="w-6 h-6" />
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur">
          <div className="px-4 sm:px-6 py-4 flex flex-col gap-4 text-sm">
            <a href="#recursos" onClick={() => setMobileMenuOpen(false)}>Recursos</a>
            <a href="#processo" onClick={() => setMobileMenuOpen(false)}>Processo</a>
            <a href="#planos" onClick={() => setMobileMenuOpen(false)}>Planos</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <a href="#contato" className="mt-2 px-4 py-2 rounded-full btn-neon text-center" onClick={() => setMobileMenuOpen(false)}>
              Começar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
