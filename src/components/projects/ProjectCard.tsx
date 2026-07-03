import { MapPin, ArrowRight } from 'lucide-react';
import { Project } from '../../types';
import { Button } from '../ui/Button';

interface ProjectCardProps {
  project: Project;
  key?: any;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="group bg-white border border-brand-stone/15 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
      id={`project-card-${project.id}`}
    >
      {/* Top Image block */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={project.heroImage}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Badges Overlay */}
        <div className="absolute top-4 left-4 flex space-x-2">
          <span className="bg-brand-charcoal text-white font-mono text-[8px] tracking-wider uppercase px-2 py-1 font-medium">
            {project.category}
          </span>
          <span className="bg-brand-gold text-white font-mono text-[8px] tracking-wider uppercase px-2 py-1 font-medium">
            {project.status}
          </span>
        </div>
      </div>

      {/* Main text block */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div className="space-y-3">
          {/* Location */}
          <div className="flex items-center space-x-1.5 text-[9px] font-mono tracking-widest text-brand-stone uppercase">
            <MapPin size={11} className="text-brand-gold shrink-0" />
            <span>{project.location}</span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl md:text-2xl font-bold tracking-tight text-brand-charcoal transition-colors group-hover:text-brand-primary">
            {project.title}
          </h3>

          {/* Tagline */}
          <p className="text-brand-primary font-serif italic text-xs leading-relaxed">
            "{project.tagline}"
          </p>

          {/* Intro text */}
          <p className="text-xs text-brand-stone font-light leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Action triggers */}
        <div className="pt-6 border-t border-brand-stone/10 mt-6 flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="block text-[8px] font-mono uppercase tracking-wider text-brand-stone">Exclusive Units</span>
            <span className="text-xs font-semibold text-brand-charcoal">{project.totalUnits}</span>
          </div>
          
          <Button
            variant="text"
            onClick={() => { window.location.hash = `#/projects/${project.slug}`; }}
            icon={<ArrowRight size={13} />}
          >
            Explore
          </Button>
        </div>
      </div>
    </div>
  );
}
