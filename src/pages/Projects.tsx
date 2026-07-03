import { useState, useMemo } from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectFilter } from '../components/projects/ProjectFilter';
import { ParallaxSection } from '../components/ui/ParallaxSection';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeLocation, setActiveLocation] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories and locations
  const categories = useMemo(() => {
    return ['All', 'Residential', 'Commercial', 'Mixed-Use'];
  }, []);

  const locations = useMemo(() => {
    // Unique locations extracted from active projects data
    return Array.from(new Set(projects.map((p) => p.city)));
  }, []);

  // Filter projects based on multiple factors
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchCategory = activeCategory === 'All' || project.category === activeCategory;
      const matchLocation = activeLocation === 'All' || project.city === activeLocation;
      
      const searchLower = searchQuery.toLowerCase();
      const matchSearch =
        project.title.toLowerCase().includes(searchLower) ||
        project.location.toLowerCase().includes(searchLower) ||
        project.tagline.toLowerCase().includes(searchLower);

      return matchCategory && matchLocation && matchSearch;
    });
  }, [activeCategory, activeLocation, searchQuery]);

  return (
    <div className="pt-0" id="projects-page-root">
      {/* Page Hero Banner */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80"
        heightClass="h-[40vh] md:h-[50vh]"
      >
        <div className="text-center space-y-3 animate-fade-in text-white mt-10">
          <span className="block font-mono text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold">
            Architectural Holdings
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none font-bold">
            The Portfolio
          </h1>
          <p className="font-sans text-xs md:text-sm text-brand-sand/80 max-w-xl mx-auto uppercase tracking-widest font-light">
            Earthy Luxury Monuments Redefining Dhaka's Skyline
          </p>
        </div>
      </ParallaxSection>

      {/* Main Content Area */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <ScrollReveal direction="up">
          <SectionHeading
            tag="Curation Index"
            title="Sustainably Sculpted Enclaves"
            subtitle="Explore our fully realized and ongoing luxury properties. Filter by building category or elite neighborhood location to find your private sanctuary."
            align="center"
          />
        </ScrollReveal>

        {/* Filter component */}
        <ScrollReveal direction="up" delay={150}>
          <ProjectFilter
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            activeLocation={activeLocation}
            setActiveLocation={setActiveLocation}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            categories={categories}
            locations={locations}
          />
        </ScrollReveal>

        {/* Projects Listing Grid */}
        <ScrollReveal direction="up" delay={250}>
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-brand-stone/30 p-8">
              <p className="font-serif text-lg text-brand-charcoal font-medium">No Sanctuaries Match Your Criteria</p>
              <p className="text-xs text-brand-stone mt-2">Try resetting your category or neighborhood filters, or clear search queries.</p>
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setActiveLocation('All');
                  setSearchQuery('');
                }}
                className="mt-6 inline-flex font-mono text-[10px] uppercase tracking-wider text-brand-primary border-b border-brand-primary pb-0.5"
              >
                Reset Filters
              </button>
            </div>
          )}
        </ScrollReveal>
      </div>
    </div>
  );
}
