import { ArrowRight, Compass, ShieldCheck, Users, TrendingUp } from 'lucide-react';
import { Button } from '../ui/Button';
import { ScrollReveal } from '../ui/ScrollReveal';

export function CTABanner() {
  return (
    <section className="relative bg-brand-charcoal py-24 md:py-28 text-brand-cream overflow-hidden" id="cta-banner-section">
      {/* Stone texture effect background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_0)] bg-[size:20px_20px]" />
      
      {/* Decorative blurred circles for elegant lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-brand-gold/5 blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Pitch intro */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="up">
              <span className="inline-flex items-center space-x-2 text-brand-gold font-mono text-[10px] tracking-[0.3em] uppercase mb-1">
                <Compass size={12} className="animate-spin-slow" />
                <span>Landowner Partnerships</span>
              </span>
              
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
                Turn Your Prime Plots Into Sustainable <span className="text-brand-gold italic font-normal">Possibilities</span>
              </h2>
              
              <p className="text-sm md:text-base text-brand-sand/80 leading-relaxed font-light pt-2 max-w-2xl">
                EcoNest partners with land owners to design joint-venture landmarks that set historic standards for sustainability and earthy architecture. We honor the legacy of your soil by constructing a monument of lasting ecological value and prestige.
              </p>
            </ScrollReveal>

            {/* Partnerships perks list */}
            <ScrollReveal direction="up" delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                <div className="space-y-2">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 text-brand-gold rounded-none">
                    <ShieldCheck size={18} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-white">Ethical Covenants</h4>
                  <p className="text-[11px] text-brand-sand/60 leading-relaxed">Fully transparent legal structures with ironclad safety margins.</p>
                </div>
                
                <div className="space-y-2">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 text-brand-gold rounded-none">
                    <Users size={18} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-white">Awarded Crafts</h4>
                  <p className="text-[11px] text-brand-sand/60 leading-relaxed">Renowned architects shaping beautiful structures from concrete and stone.</p>
                </div>

                <div className="space-y-2">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 text-brand-gold rounded-none">
                    <TrendingUp size={18} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-white">Elite Valuation</h4>
                  <p className="text-[11px] text-brand-sand/60 leading-relaxed">Unrivaled brand equity driving premium resale values in top neighborhoods.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Call to action card */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" delay={300}>
              <div className="stone-texture p-8 md:p-10 border border-brand-primary/20 shadow-2xl relative">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-gold" />
                
                <h3 className="font-serif text-2xl text-brand-charcoal font-bold mb-4">
                  Request a Plot Evaluation
                </h3>
                <p className="text-xs text-brand-stone leading-relaxed mb-6">
                  Are you an owner of a parcel of land sizing 10 Kathas or more in Gulshan, Banani, Baridhara, Dhanmondi, or Purbachal? Let's discuss its high-end potential.
                </p>

                <div className="space-y-4">
                  <Button
                    variant="gold"
                    fullWidth
                    onClick={() => { window.location.hash = '#/contact'; }}
                    icon={<ArrowRight size={14} />}
                  >
                    Partner With Us
                  </Button>
                  <Button
                    variant="secondary"
                    fullWidth
                    onClick={() => { window.location.hash = '#/about'; }}
                  >
                    Our Design Philosophy
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
