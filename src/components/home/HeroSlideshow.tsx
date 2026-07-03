import { useState, useEffect, useCallback } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Compass } from 'lucide-react';
import { Button } from '../ui/Button';

interface Slide {
  id: number;
  image: string;
  tagline: string;
  heading: string;
  subheading: string;
  link: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85',
    tagline: 'Featured Residence',
    heading: 'EcoNest Haven',
    subheading: 'Cantilevered sky-villas showcasing lush private foliage and premium raw concrete craftsmanship in Gulshan-2.',
    link: '#/projects/econest-haven'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=85',
    tagline: 'Timeless Geometry',
    heading: 'The Stone Pavilion',
    subheading: 'Low-density structural masterpiece constructed of hand-laid Portuguese limestone and monolithic columns in Banani.',
    link: '#/projects/the-stone-pavilion'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=85',
    tagline: 'Commercial Biophilia',
    heading: 'Earthy Canopy',
    subheading: 'Corporate towers integrating 3-story pocket forests, high-efficiency solar systems, and clean structural ventilation in Tejgaon.',
    link: '#/projects/earthy-canopy'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=85',
    tagline: 'Urban Integration',
    heading: 'The Terraced Sanctuary',
    subheading: 'An elegant mixture of stone retail colonnades, art galleries, and terrace apartments designed for high community impact.',
    link: '#/projects/the-terraced-sanctuary'
  }
];

export function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const selectSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  // Progress Bar & Auto-rotation
  useEffect(() => {
    const intervalTime = 60; // Tick rate (ms)
    const totalTime = 6000; // 6 seconds duration
    const increment = (intervalTime / totalTime) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-screen bg-brand-charcoal overflow-hidden" id="hero-slideshow-section">
      {/* Slides images container */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Zoom effect on current slide */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-linear ${
              index === currentIndex ? 'scale-105' : 'scale-100'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-transparent to-black/30" />
        </div>
      ))}

      {/* Content overlay */}
      <div className="relative z-20 h-full w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-2xl text-white">
          {/* Tagline */}
          <div className="overflow-hidden mb-3">
            <span className="inline-flex items-center space-x-2 text-brand-gold font-mono text-[10px] tracking-[0.4em] uppercase animate-slide-up">
              <Compass size={11} className="animate-spin-slow" />
              <span>{slides[currentIndex].tagline}</span>
            </span>
          </div>

          {/* Heading */}
          <div className="overflow-hidden mb-4">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] font-bold">
              {slides[currentIndex].heading}
            </h2>
          </div>

          {/* Subheading */}
          <div className="overflow-hidden mb-8">
            <p className="text-sm md:text-base text-brand-sand/85 leading-relaxed font-light">
              {slides[currentIndex].subheading}
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex items-center space-x-4">
            <Button
              variant="gold"
              onClick={() => { window.location.hash = slides[currentIndex].link; }}
              icon={<ArrowUpRight size={14} />}
            >
              Explore Property
            </Button>
            <Button
              variant="outline-white"
              onClick={() => { window.location.hash = '#/projects'; }}
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Navigation Dots & Progress Bars (Bottom Right) */}
      <div className="absolute bottom-10 right-4 sm:right-6 lg:right-8 z-20 flex items-center space-x-4 bg-brand-charcoal/40 backdrop-blur-sm p-3.5 border border-white/5">
        <div className="flex space-x-3">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => selectSlide(index)}
              className="group flex flex-col focus:outline-none cursor-pointer"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className="flex items-center justify-between w-12 text-[9px] font-mono mb-1.5">
                <span className={index === currentIndex ? 'text-brand-gold font-bold' : 'text-white/40'}>
                  0{index + 1}
                </span>
              </div>
              
              {/* Progress timeline bar */}
              <div className="h-[2px] w-12 bg-white/20 relative overflow-hidden">
                <div
                  className="h-full bg-brand-gold absolute top-0 left-0 transition-all duration-[60ms]"
                  style={{
                    width: index === currentIndex ? `${progress}%` : '0%',
                  }}
                />
              </div>
            </button>
          ))}
        </div>

        {/* Arrow Buttons */}
        <div className="flex items-center border-l border-white/10 pl-4 space-x-2">
          <button
            onClick={prevSlide}
            className="p-2 border border-white/10 hover:border-brand-gold text-white hover:text-brand-gold transition-colors focus:outline-none cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 border border-white/10 hover:border-brand-gold text-white hover:text-brand-gold transition-colors focus:outline-none cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
