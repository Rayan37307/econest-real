import { ParallaxSection } from '../components/ui/ParallaxSection';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Droplets, Heart, GraduationCap, Leaf } from 'lucide-react';

export function CSR() {
  const initiatives = [
    {
      tag: 'Initiative 01',
      title: 'The Pure Aqueduct Program',
      description: 'At each of our construction sites, we establish high-capacity commercial reverse osmosis plants. While servicing our structural curing needs, these plants are piped outwards to provide unlimited, premium drinking water completely free of cost to local neighborhood residents and workers.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      icon: <Droplets className="text-brand-gold" size={18} />
    },
    {
      tag: 'Initiative 02',
      title: 'Artisanal Clay & Heritage Grants',
      description: 'We believe in preserving Bangladesh’s ancient structural heritage. EcoNest sponsors three annual research grants alongside the Bangladesh University of Engineering and Technology (BUET) to document, study, and integrate traditional terracotta brick-making and low-heat clay cooling methodologies into modern engineering.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
      icon: <GraduationCap className="text-brand-gold" size={18} />
    },
    {
      tag: 'Initiative 03',
      title: 'Worker Micro-Covenants',
      description: 'Human dignity is central to earthy luxury. We provide all on-site artisans and concrete pourers with private housing sectors during development, full monthly medical checks, and weekly dietary supplements, ensuring they share in the absolute luxury they help orchestrate with their bare hands.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
      icon: <Heart className="text-brand-gold" size={18} />
    }
  ];

  return (
    <div className="pt-0" id="csr-page-root">
      {/* Page Hero */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
        heightClass="h-[40vh] md:h-[50vh]"
      >
        <div className="text-center space-y-3 animate-fade-in text-white mt-10">
          <span className="block font-mono text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold">
            Social Covenants
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none font-bold">
            Community Impact
          </h1>
          <p className="font-sans text-xs md:text-sm text-brand-sand/80 max-w-xl mx-auto uppercase tracking-widest font-light">
            Sharing ecological and educational dividends in Bangladesh
          </p>
        </div>
      </ParallaxSection>

      {/* 1. Intro statement */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <ScrollReveal direction="up">
          <SectionHeading
            tag="Corporate Social Responsibility"
            title="Sustainably Rooted Dividends"
            subtitle="We do not look at corporate social responsibility as a regulatory marketing line. It is a biological covenant. We design our properties with conscious boundaries to feed dividends back to the ecosystem."
            align="center"
          />
        </ScrollReveal>

        {/* Dynamic side-by-side sections */}
        <div className="space-y-24 mt-16 max-w-5xl mx-auto">
          {initiatives.map((item, index) => (
            <ScrollReveal key={index} direction="up">
              <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Text column (6 cols) */}
                <div className={`md:col-span-6 space-y-4 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="flex items-center space-x-2">
                    <div className="p-1.5 bg-brand-primary/10 text-brand-primary">
                      {item.icon}
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-gold font-bold">
                      {item.tag}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-charcoal">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-brand-stone leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Image column (6 cols) */}
                <div className={`md:col-span-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="border border-brand-stone/15 p-2 bg-white shadow-md relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale-15 hover:grayscale-0 transition-all duration-[1000ms]"
                    />
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 2. Impact statistics card */}
      <section className="bg-brand-charcoal text-brand-cream border-t border-brand-primary/15 py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold">
                Impact Metrics
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-tight leading-snug">
                "We measure our success not by built volume, but by community resilience."
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <span className="block font-serif text-3xl md:text-4xl font-bold text-brand-gold">1.2M Liters</span>
                  <span className="block text-[8px] font-mono uppercase tracking-wider text-brand-sand/60 mt-1">Pure RO Water Piped</span>
                </div>
                
                <div>
                  <span className="block font-serif text-3xl md:text-4xl font-bold text-brand-gold">12 BUET Scholars</span>
                  <span className="block text-[8px] font-mono uppercase tracking-wider text-brand-sand/60 mt-1">Grants Backed Annually</span>
                </div>

                <div>
                  <span className="block font-serif text-3xl md:text-4xl font-bold text-brand-gold">1,500 Workers</span>
                  <span className="block text-[8px] font-mono uppercase tracking-wider text-brand-sand/60 mt-1">Benefited by Covenants</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
