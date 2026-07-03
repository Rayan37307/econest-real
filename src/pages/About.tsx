import { ParallaxSection } from '../components/ui/ParallaxSection';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Leaf, Award, Eye, Compass, ShieldAlert } from 'lucide-react';

export function About() {
  const values = [
    {
      title: 'Biophilic Integration',
      description: 'We believe buildings should breathe. Every balcony, pillar, and foyer integrates customized local flora micro-habitats cooled by automated rainwater channels.',
      icon: <Leaf size={24} strokeWidth={1.5} />
    },
    {
      title: 'Material Honesty',
      description: 'Zero paint overlays or cheap laminates. We utilize premium exposed concrete, hand-laid limestone, and solid natural teakwood that age with monumental dignity.',
      icon: <Award size={24} strokeWidth={1.5} />
    },
    {
      title: 'Structural Permanence',
      description: 'Our frameworks are engineered to twice the seismic load standards of standard builds. True luxury begins with complete, unconditional peace of mind.',
      icon: <Compass size={24} strokeWidth={1.5} />
    }
  ];

  const leaders = [
    {
      name: 'S.A. Rahman',
      role: 'Founder & Principal Visionary',
      bio: 'Pioneered sustainable stone architecture in South Asia after graduating from the Tokyo Institute of Technology.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=350&q=80'
    },
    {
      name: 'Architect Tasnim Kamal',
      role: 'Director of Design & Concepts',
      bio: 'Recipient of multiple national awards, specialized in creating high-end biophilic sky-villa layouts.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=350&q=80'
    },
    {
      name: 'Engr. Mahbubul Alam',
      role: 'Head of High-Precision Construction',
      bio: 'Over 25 years of structural civil execution, focusing on architectural concrete finishes and Travertine claddings.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=350&q=80'
    }
  ];

  return (
    <div className="pt-0" id="about-page-root">
      {/* Page Hero */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=80"
        heightClass="h-[40vh] md:h-[50vh]"
      >
        <div className="text-center space-y-3 animate-fade-in text-white mt-10">
          <span className="block font-mono text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold">
            The Brand Legacy
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none font-bold">
            Our Foundation
          </h1>
          <p className="font-sans text-xs md:text-sm text-brand-sand/80 max-w-xl mx-auto uppercase tracking-widest font-light">
            Earthy Luxury Formed From Pure Soil and Architecture
          </p>
        </div>
      </ParallaxSection>

      {/* 1. Brand Story */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Story Text */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="up">
              <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-brand-primary font-semibold">
                An Ecological Genesis
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal font-bold tracking-tight mt-2">
                Honoring the Legacy of the Soil
              </h2>
              <p className="text-sm text-brand-charcoal leading-relaxed font-normal pt-2">
                Founded with a singular mission to reject the cookie-cutter steel-and-glass templates of conventional developers, EcoNest is dedicated to creating timeless living sanctuaries. We believe a residential tower should exist in harmony with the environment, not as an intrusion.
              </p>
              <p className="text-xs md:text-sm text-brand-stone leading-relaxed font-light">
                By pairing Bangladesh’s rich architectural brick legacy with Japanese minimalist raw concrete engineering, our spaces offer an immersive wellness experience. From our specialized double-glazed low-emissivity windows to hand-crafted Italian marble floorings, we craft monuments that grow more beautiful as they weather under the tropical monsoon elementals.
              </p>
            </ScrollReveal>
          </div>

          {/* Side Illustration Image */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" delay={200}>
              <div className="border border-brand-stone/15 p-3 bg-white shadow-xl relative aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
                  alt="Earthy Luxury Detail"
                  className="w-full h-full object-cover grayscale-10 hover:grayscale-0 transition-all duration-[1200ms]"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 2. Core Values Card Deck */}
      <section className="bg-brand-sand/35 border-y border-brand-stone/15 py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <SectionHeading
              tag="The Covenants"
              title="Our Core Philosophies"
              subtitle="Three ironclad architectural pillars that define every design meeting and materials selection."
              align="center"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {values.map((val, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 150}>
                <div className="bg-white p-8 border border-brand-stone/15 shadow-sm space-y-5 hover:border-brand-primary hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Icon block */}
                    <div className="w-12 h-12 flex items-center justify-center bg-brand-cream border border-brand-stone/15 text-brand-gold rounded-none">
                      {val.icon}
                    </div>
                    <h3 className="font-serif text-lg text-brand-charcoal font-bold tracking-tight">
                      {val.title}
                    </h3>
                    <p className="text-xs text-brand-stone leading-relaxed font-light">
                      {val.description}
                    </p>
                  </div>
                  
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-brand-primary font-semibold mt-4">
                    Pillar 0{idx + 1}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Leadership Board */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <ScrollReveal direction="up">
          <SectionHeading
            tag="Aesthetic Leadership"
            title="Sustainably Conscious Minds"
            subtitle="Meet the structural and creative visionaries orchestrating EcoNest's iconic landmarks."
            align="center"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
          {leaders.map((leader, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 150}>
              <div className="border border-brand-stone/15 bg-white p-4 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div className="aspect-[3/4] overflow-hidden border border-brand-stone/10 relative">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                  />
                  <div className="absolute bottom-4 left-4 bg-brand-charcoal text-white font-mono text-[8px] tracking-wider uppercase px-2 py-1">
                    Covenant Leader
                  </div>
                </div>

                <div className="pt-5 space-y-2">
                  <h4 className="font-serif text-base font-bold text-brand-charcoal">{leader.name}</h4>
                  <span className="block text-[9px] font-mono uppercase tracking-widest text-brand-gold">{leader.role}</span>
                  <p className="text-[11px] text-brand-stone font-light leading-relaxed pt-1 border-t border-brand-stone/10 mt-3">
                    {leader.bio}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
