import { useState, useRef } from "react";

export default function BeforeAfterComparator() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPosition(Number(e.target.value));
  };

  return (
    <div className="neon-border shadow-neon w-full" data-aos="zoom-in" data-aos-delay="150">
      <div 
        ref={containerRef}
        className="ba h-64 sm:h-80 md:h-[28rem] lg:h-[32rem] relative overflow-hidden rounded-2xl cursor-ew-resize"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        <span className="ba-label left-2 sm:left-3 glass absolute top-2 sm:top-3 z-20 bg-black/50 backdrop-blur-md px-2 py-1 rounded-full text-xs">
          Antes
        </span>
        <span className="ba-label right-2 sm:right-3 glass absolute top-2 sm:top-3 z-20 bg-black/50 backdrop-blur-md px-2 py-1 rounded-full text-xs">
          Depois
        </span>
        
        {/* Imagem "depois" (fundo) - Foto profissional */}
        <img 
          src="https://mocha-cdn.com/01995530-d68b-71c1-bfdf-a712ecb5c545/1758138522545-3c1be482-2427-4ab6-a442-2f9d6e684f3c.png" 
          alt="Foto profissional depois" 
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Imagem "antes" (sobreposta) - Selfie casual */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img 
            src="https://mocha-cdn.com/01995530-d68b-71c1-bfdf-a712ecb5c545/1758138021110-Face-(1).jpeg" 
            alt="Selfie casual antes" 
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: `${100 * (100 / position)}%` }}
            loading="lazy"
          />
        </div>
        
        {/* Divisor */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-cyan to-brand-pink z-10"
          style={{ left: `${position}%` }}
        />
        
        {/* Knob */}
        <div 
          className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black border-2 border-brand-cyan shadow-lg cursor-ew-resize z-10"
          style={{ 
            left: `calc(${position}% - 12px)`,
            boxShadow: '0 0 18px rgba(0,234,255,0.5)'
          }}
        />
        
        {/* Input range invisível */}
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={position}
          onChange={handleChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
          aria-label="Comparador antes e depois"
        />
      </div>
    </div>
  );
}
