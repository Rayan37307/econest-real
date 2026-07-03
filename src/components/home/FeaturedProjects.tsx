import { useState } from 'react';
import { ArrowRight, MapPin, Tag } from 'lucide-react';
import { projects } from '../../data/projects';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
import { CarouselArrows } from '../ui/CarouselArrows';
import { ScrollReveal } from '../ui/ScrollReveal';

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % featured.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + featured.length) % featured.length);
  };

  return (
    <section className="bg-brand-sand/40 py-20 md:py-28 overflow-hidden" id="featured-projects-section">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            tag="The Portfolio"
            title="Featured Landmarks"
            subtitle="Explore our limited collection of organic concrete, stone, and biophilic residential and corporate masterpieces."
            align="left"
            className="mb-0! md:mb-0! max-w-2xl"
          />
          <CarouselArrows
            onPrev={prevSlide}
            onNext={nextSlide}
            className="mt-6 md:mt-0"
          />
        </div>

        {/* Carousel viewport */}
        <div className="relative mt-4">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {featured.map((project) => (
              <div
                key={project.id}
                className="w-full shrink-0 px-1 md:px-3 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Image panel */}
                <div className="lg:col-span-7 overflow-hidden relative group aspect-[16/10]">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  {/* Overlay tags */}
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className="bg-brand-charcoal text-brand-cream font-mono text-[9px] tracking-wider uppercase px-2.5 py-1.5 font-medium">
                      {project.category}
                    </span>
                    <span className="bg-brand-gold text-brand-cream font-mono text-[9px] tracking-wider uppercase px-2.5 py-1.5 font-medium">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Details panel */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="flex items-center space-x-2 text-brand-stone font-mono text-[10px] uppercase tracking-widest">
                    <MapPin size={11} className="text-brand-gold" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="font-serif text-3xl md:text-4xl tracking-tight text-brand-charcoal font-bold">
                    {project.title}
                  </h3>

                  <p className="text-brand-primary font-serif italic text-base">
                    "{project.tagline}"
                  </p>

                  <p className="text-xs md:text-sm text-brand-stone leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Quick specs preview */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-brand-stone/15">
                    <div>
                      <span className="block text-[9px] font-mono uppercase tracking-wider text-brand-stone">Land Size</span>
                      <span className="text-xs font-semibold text-brand-charcoal font-sans">{project.landArea}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] font-mono uppercase tracking-wider text-brand-stone">Exclusive Units</span>
                      <span className="text-xs font-semibold text-brand-charcoal font-sans">{project.totalUnits}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      variant="primary"
                      onClick={() => { window.location.hash = `#/projects/${project.slug}`; }}
                      icon={<ArrowRight size={14} />}
                    >
                      Property Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel dots indicators */}
          <div className="flex items-center justify-center space-x-2 mt-12">
            {featured.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 transition-all duration-300 rounded-none cursor-pointer ${
                  idx === activeIndex ? 'w-8 bg-brand-primary' : 'w-2 bg-brand-stone/40 hover:bg-brand-primary/55'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
