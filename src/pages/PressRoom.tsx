import React, { useState } from 'react';
import { Newspaper, Calendar, ArrowRight, X, Sparkles, Quote, BookOpen } from 'lucide-react';
import { pressReleases } from '../data/press';
import { ParallaxSection } from '../components/ui/ParallaxSection';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export function PressRoom() {
  const [activePress, setActivePress] = useState<typeof pressReleases[0] | null>(null);

  const publications = [
    { name: 'Architectural Digest', label: 'AD Feature', year: '2026' },
    { name: 'The Daily Star', label: 'Business Focus', year: '2026' },
    { name: 'Financial Express', label: 'Cover Story', year: '2025' },
    { name: 'Dhaka Tribune', label: 'Real Estate Landmark', year: '2025' },
    { name: 'The Business Standard', label: 'Sustainability Leader', year: '2025' },
    { name: 'Global Architecture Review', label: 'Regional Winner', year: '2024' }
  ];

  return (
    <div className="pt-0" id="press-room-page-root">
      {/* Page Hero */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"
        heightClass="h-[40vh] md:h-[50vh]"
      >
        <div className="text-center space-y-3 animate-fade-in text-white mt-10">
          <span className="block font-mono text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold">
            Editorial Desks
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none font-bold">
            Press Room
          </h1>
          <p className="font-sans text-xs md:text-sm text-brand-sand/80 max-w-xl mx-auto uppercase tracking-widest font-light">
            Insights, announcements, and coverage from global publications
          </p>
        </div>
      </ParallaxSection>

      {/* 1. Main Press Releases Grid */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <ScrollReveal direction="up">
          <SectionHeading
            tag="Corporate Dispatch"
            title="The Chronicle & Publications"
            subtitle="Explore our formal releases regarding project break-grounds, design laureates, and sustainable materials procurements."
            align="center"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {pressReleases.map((release, idx) => (
            <ScrollReveal key={release.id} direction="up" delay={idx * 150}>
              <div className="bg-white border border-brand-stone/15 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group">
                <div className="space-y-4">
                  {/* Photo cover */}
                  <div className="aspect-[16/10] overflow-hidden border-b border-brand-stone/10">
                    <img
                      src={release.image}
                      alt={release.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    />
                  </div>

                  {/* Text block */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-2 text-[9px] font-mono uppercase tracking-wider text-brand-stone">
                      <Newspaper size={11} className="text-brand-gold" />
                      <span>{release.source}</span>
                      <span>&bull;</span>
                      <Calendar size={11} />
                      <span>{release.date}</span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-brand-charcoal transition-colors group-hover:text-brand-primary">
                      {release.title}
                    </h3>

                    <p className="text-xs text-brand-stone leading-relaxed font-light line-clamp-3">
                      {release.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-4">
                  <Button
                    variant="text"
                    onClick={() => setActivePress(release)}
                    icon={<ArrowRight size={13} />}
                  >
                    Read Release
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 2. Media Coverage Logos Grid */}
      <section className="bg-brand-sand/35 border-y border-brand-stone/15 py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <span className="block text-center font-mono text-[9px] uppercase tracking-[0.25em] text-brand-stone font-bold mb-8">
              Press Curation Index
            </span>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center">
            {publications.map((pub, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                <div className="bg-white p-5 border border-brand-stone/15 text-center shadow-xs flex flex-col justify-center h-28 group hover:border-brand-primary transition-all duration-300">
                  <span className="block font-serif text-xs font-bold text-brand-charcoal leading-none group-hover:text-brand-primary transition-colors">
                    {pub.name}
                  </span>
                  <span className="block text-[8px] font-mono uppercase tracking-wider text-brand-gold mt-2">
                    {pub.label}
                  </span>
                  <span className="block text-[7px] font-mono text-brand-stone/60 mt-0.5">
                    Est. {pub.year}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Release Lightbox Popup Modal */}
      {activePress && (
        <div
          className="fixed inset-0 z-50 bg-brand-charcoal/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={() => setActivePress(null)}
        >
          <div
            className="bg-brand-cream max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative border border-brand-stone/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Border Decor */}
            <div className="absolute top-0 left-0 w-full h-[4px] bg-brand-primary" />
            
            {/* Close Button */}
            <button
              onClick={() => setActivePress(null)}
              className="absolute top-4 right-4 p-2 bg-brand-charcoal/5 hover:bg-brand-charcoal/10 border border-brand-stone/15 text-brand-charcoal transition-colors focus:outline-none cursor-pointer z-10"
              aria-label="Close Release"
            >
              <X size={16} />
            </button>

            {/* Content layout */}
            <div className="p-8 space-y-6">
              {/* Meta */}
              <div className="flex items-center space-x-2 text-[9px] font-mono uppercase tracking-wider text-brand-stone border-b border-brand-stone/15 pb-4">
                <BookOpen size={11} className="text-brand-gold" />
                <span className="font-bold text-brand-primary">{activePress.source}</span>
                <span>&bull;</span>
                <span>Released: {activePress.date}</span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-2xl md:text-3xl text-brand-charcoal font-bold tracking-tight">
                {activePress.title}
              </h2>

              {/* Quote illustration */}
              <div className="p-4 bg-brand-sand/20 border-l-2 border-brand-gold flex gap-3 text-xs text-brand-stone italic leading-relaxed">
                <Quote size={18} className="shrink-0 text-brand-gold/30" />
                <span>"{activePress.excerpt}"</span>
              </div>

              {/* Image banner */}
              <div className="aspect-[16/9] w-full overflow-hidden border border-brand-stone/10">
                <img
                  src={activePress.image}
                  alt={activePress.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Body Content paragraph */}
              <p className="text-xs md:text-sm text-brand-charcoal leading-relaxed font-light whitespace-pre-line pt-2">
                {activePress.content}
              </p>

              {/* Footer */}
              <div className="pt-6 border-t border-brand-stone/15 text-center">
                <Button variant="secondary" size="sm" onClick={() => setActivePress(null)}>
                  Close Dispatch Article
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
