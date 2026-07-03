import { useState } from 'react';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { SectionHeading } from '../ui/SectionHeading';
import { CarouselArrows } from '../ui/CarouselArrows';
import { ScrollReveal } from '../ui/ScrollReveal';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-brand-charcoal py-20 md:py-28 text-brand-cream relative overflow-hidden" id="testimonials-section">
      {/* Texture overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.01)_1px,transparent_0)] bg-[size:24px_24px]" />
      
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up">
          <SectionHeading
            tag="Satisfied Owners"
            title="Voices of the Sanctuary"
            subtitle="Read about the experiences of our premium homeowners who reside in the living structures built by EcoNest."
            align="center"
            dark
          />
        </ScrollReveal>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto mt-6 relative">
          {/* Quote Icon Background Decor */}
          <div className="absolute -top-10 -left-6 md:-left-16 text-brand-primary/10 select-none pointer-events-none">
            <Quote size={120} strokeWidth={0.5} />
          </div>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full shrink-0 px-4 md:px-8 space-y-8">
                  {/* Star rating */}
                  <div className="flex items-center space-x-1 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} className="text-brand-gold fill-brand-gold" />
                    ))}
                  </div>

                  {/* Quote content */}
                  <p className="font-serif text-lg md:text-2xl leading-relaxed text-brand-sand text-center italic font-light max-w-3xl mx-auto">
                    "{testimonial.quote}"
                  </p>

                  {/* Client avatar and details */}
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-primary/40">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="text-center">
                      <h4 className="font-sans text-xs md:text-sm uppercase tracking-wider font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-brand-gold mt-1">
                        {testimonial.role}, {testimonial.company}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls (Centered below slider) */}
          <div className="flex flex-col items-center justify-center mt-12 space-y-6">
            <CarouselArrows
              onPrev={handlePrev}
              onNext={handleNext}
              dark
            />
            
            {/* Dots */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 transition-all duration-300 rounded-none cursor-pointer ${
                    idx === activeIndex ? 'w-6 bg-brand-gold' : 'w-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
