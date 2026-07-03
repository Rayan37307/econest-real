import React, { useState, useEffect } from 'react';
import { ArrowLeft, Video, Sparkles, Shield, MapPin, Building2 } from 'lucide-react';
import { projects } from '../data/projects';
import { AtAGlance } from '../components/project-detail/AtAGlance';
import { ProjectGallery } from '../components/project-detail/ProjectGallery';
import { Amenities } from '../components/project-detail/Amenities';
import { BrochureDownload } from '../components/project-detail/BrochureDownload';
import { ProjectContact } from '../components/project-detail/ProjectContact';
import { ParallaxSection } from '../components/ui/ParallaxSection';
import { Button } from '../components/ui/Button';
import { ScrollReveal } from '../components/ui/ScrollReveal';

interface ProjectDetailProps {
  slug: string;
}

export function ProjectDetail({ slug }: ProjectDetailProps) {
  const project = projects.find((p) => p.slug === slug);

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-cream py-20 px-4" id="project-not-found">
        <div className="max-w-md text-center space-y-6">
          <div className="inline-flex p-4 bg-brand-primary/10 text-brand-primary">
            <Building2 size={36} strokeWidth={1.5} />
          </div>
          <h2 className="font-serif text-3xl font-bold text-brand-charcoal">Sanctuary Untracked</h2>
          <p className="text-xs text-brand-stone leading-relaxed">
            The requested project path does not match our current indices. It may be private or scheduled for a future launch phase.
          </p>
          <div className="pt-2">
            <Button variant="primary" onClick={() => { window.location.hash = '#/projects'; }}>
              Return to Portfolio
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-0" id={`project-detail-${project.slug}`}>
      {/* 1. Project Hero Parallax */}
      <ParallaxSection
        imageUrl={project.heroImage}
        heightClass="h-[55vh] md:h-[70vh]"
      >
        <div className="text-center space-y-4 animate-fade-in text-white mt-12 max-w-4xl px-4">
          <button
            onClick={() => { window.location.hash = '#/projects'; }}
            className="inline-flex items-center space-x-2 font-mono text-[9px] uppercase tracking-wider text-brand-gold hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft size={12} />
            <span>Portfolio Registry</span>
          </button>
          
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none font-bold">
            {project.title}
          </h1>
          
          <p className="font-serif text-sm sm:text-base md:text-lg italic text-brand-sand font-light max-w-2xl mx-auto">
            "{project.tagline}"
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-[10px] font-mono tracking-[0.25em] uppercase text-white/70">
            <MapPin size={11} className="text-brand-gold" />
            <span>{project.location}</span>
          </div>
        </div>
      </ParallaxSection>

      {/* 2. Main Content Grid (At a Glance + Details + Form) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Main Content Pane (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Story Description Block */}
            <ScrollReveal direction="up">
              <div className="space-y-6">
                <span className="block font-mono text-[9px] uppercase tracking-[0.25em] text-brand-primary font-semibold">
                  Architectural Intent
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-brand-charcoal font-bold tracking-tight">
                  Design Statement & Material Curation
                </h2>
                
                <p className="text-sm text-brand-charcoal leading-relaxed font-normal">
                  {project.description}
                </p>
                <p className="text-xs md:text-sm text-brand-stone leading-relaxed font-light">
                  {project.details}
                </p>
              </div>
            </ScrollReveal>

            {/* At a Glance Specs (Visible on Mobile/Tablet inside main stack) */}
            <ScrollReveal direction="up">
              <AtAGlance project={project} />
            </ScrollReveal>

            {/* Photo Gallery Grid */}
            <ScrollReveal direction="up">
              <ProjectGallery images={project.gallery} title={project.title} />
            </ScrollReveal>

            {/* Video Walkthrough Block */}
            {project.videoUrl && (
              <ScrollReveal direction="up">
                <div className="space-y-6">
                  <div className="border-b border-brand-stone/15 pb-4">
                    <h3 className="font-serif text-xl md:text-2xl text-brand-charcoal font-bold tracking-tight flex items-center gap-2">
                      <Video size={18} className="text-brand-primary" />
                      Virtual Architectural Walkthrough
                    </h3>
                    <p className="font-mono text-[9px] uppercase tracking-wider text-brand-stone mt-1">
                      Cinema Grade rendering and floorplan visualization
                    </p>
                  </div>
                  
                  {/* Video wrapper */}
                  <div className="relative aspect-video w-full bg-brand-charcoal border border-brand-stone/15 overflow-hidden">
                    <iframe
                      src={project.videoUrl}
                      title={`${project.title} Video Walkthrough`}
                      className="absolute inset-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Amenities Section */}
            <ScrollReveal direction="up">
              <Amenities project={project} />
            </ScrollReveal>

            {/* Features Bullet List */}
            <ScrollReveal direction="up">
              <div className="p-6 md:p-8 bg-brand-sand/15 border border-brand-stone/15 space-y-6">
                <h4 className="font-serif text-base font-bold text-brand-charcoal uppercase tracking-wider">
                  Technical Building Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-brand-stone">
                      <div className="p-1 bg-brand-primary/10 text-brand-primary rounded-full shrink-0 mt-0.5">
                        <Sparkles size={11} />
                      </div>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Brochure Download CTA */}
            <ScrollReveal direction="up">
              <BrochureDownload projectName={project.title} />
            </ScrollReveal>
          </div>

          {/* Right Inquiry Panel Sidebar (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
            <ScrollReveal direction="left" delay={150}>
              <ProjectContact projectName={project.title} />
            </ScrollReveal>
            
            {/* Direct Phone Concierge Accent */}
            <ScrollReveal direction="left" delay={250}>
              <div className="border border-brand-stone/15 p-6 bg-brand-cream text-center space-y-4">
                <Shield size={20} className="text-brand-gold mx-auto" />
                <div className="space-y-1">
                  <span className="block text-[8px] font-mono uppercase tracking-widest text-brand-stone">Private Concierge Desk</span>
                  <a href="tel:+8809612345678" className="block text-sm font-mono font-semibold text-brand-charcoal hover:text-brand-primary transition-colors">
                    +880 961 2345678
                  </a>
                  <p className="text-[10px] text-brand-stone font-light">Dispatched only to validated high-net-worth proposals.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>
    </div>
  );
}
