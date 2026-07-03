import { ReactNode } from 'react';

interface ParallaxSectionProps {
  imageUrl: string;
  heightClass?: string;
  overlayOpacity?: string; // e.g. "bg-black/40"
  children?: ReactNode;
  className?: string;
}

export function ParallaxSection({
  imageUrl,
  heightClass = 'h-[50vh] md:h-[60vh]',
  overlayOpacity = 'bg-black/35',
  children,
  className = ''
}: ParallaxSectionProps) {
  return (
    <div
      className={`relative w-full ${heightClass} overflow-hidden bg-cover bg-center md:bg-fixed ${className}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayOpacity} mix-blend-multiply`} />
      
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_0)] bg-[size:16px_16px]" />
      
      {/* Content */}
      <div className="relative h-full w-full flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
