import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-6" id="project-gallery-section">
      <div className="border-b border-brand-stone/15 pb-4">
        <h3 className="font-serif text-xl md:text-2xl text-brand-charcoal font-bold tracking-tight">
          Visual Architectural Gallery
        </h3>
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-stone mt-1">
          Hand-crafted spaces captured under natural light elements
        </p>
      </div>

      {/* Grid of gallery images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => openLightbox(idx)}
            className="group relative aspect-[4/3] overflow-hidden border border-brand-stone/10 shadow-sm cursor-pointer"
          >
            {/* Image */}
            <img
              src={img}
              alt={`${title} view ${idx + 1}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-[1000ms] group-hover:scale-105"
            />
            
            {/* Hover overlay with zoom icon */}
            <div className="absolute inset-0 bg-brand-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="p-3 bg-brand-cream/15 backdrop-blur-md border border-white/20 text-white rounded-none">
                <ZoomIn size={16} />
              </div>
            </div>
            
            <div className="absolute bottom-3 left-3 bg-brand-charcoal/60 backdrop-blur-xs px-2 py-1 text-[8px] font-mono text-brand-cream uppercase tracking-widest">
              Capture 0{idx + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 md:p-8 select-none animate-fade-in"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-none border border-white/15 transition-colors focus:outline-none cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X size={20} />
          </button>

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-8 p-3 bg-white/10 hover:bg-white/20 text-white rounded-none border border-white/15 transition-colors focus:outline-none cursor-pointer z-10"
            aria-label="Previous Image"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Main active image container */}
          <div className="relative max-w-5xl max-h-[75vh] flex items-center justify-center">
            <img
              src={images[lightboxIndex]}
              alt={`${title} portfolio active`}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[75vh] object-contain border border-white/10"
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-8 p-3 bg-white/10 hover:bg-white/20 text-white rounded-none border border-white/15 transition-colors focus:outline-none cursor-pointer z-10"
            aria-label="Next Image"
          >
            <ChevronRight size={20} />
          </button>

          {/* Footer details */}
          <div className="absolute bottom-6 text-center space-y-1">
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold font-sans">
              {title}
            </h4>
            <span className="block text-[10px] font-mono text-brand-gold uppercase tracking-widest">
              Image {lightboxIndex + 1} of {images.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
