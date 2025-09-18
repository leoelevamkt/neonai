import { useState } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  onLoad?: () => void;
  style?: React.CSSProperties;
}

export default function LazyImage({ 
  src, 
  alt, 
  className = "", 
  loading = "lazy",
  onLoad,
  style 
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div 
        className={`bg-gray-800 flex items-center justify-center ${className}`}
        style={style}
      >
        <span className="text-gray-400 text-sm">Erro ao carregar imagem</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={style}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-brand-cyan border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={loading}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}
