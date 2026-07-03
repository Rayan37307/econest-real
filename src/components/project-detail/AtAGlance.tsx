import { Project } from '../../types';
import { Ruler, Home, Grid, Calendar, Compass, Milestone } from 'lucide-react';

interface AtAGlanceProps {
  project: Project;
}

export function AtAGlance({ project }: AtAGlanceProps) {
  const specItems = [
    { label: 'Neighborhood', value: project.location, icon: <Milestone size={16} /> },
    { label: 'Property Class', value: project.category, icon: <Home size={16} /> },
    { label: 'Unit Layout Sizes', value: project.unitSizes, icon: <Grid size={16} /> },
    { label: 'Site Footprint Size', value: project.landArea, icon: <Ruler size={16} /> },
    { label: 'Initial Launch', value: project.launchDate, icon: <Calendar size={16} /> },
    { label: 'Project Status / Handover', value: `${project.status} (${project.handoverDate})`, icon: <Compass size={16} /> }
  ];

  return (
    <div className="bg-white border border-brand-stone/15 shadow-sm overflow-hidden" id="project-at-a-glance">
      {/* Table Header */}
      <div className="bg-brand-sand/30 px-6 py-4.5 border-b border-brand-stone/15">
        <h3 className="font-serif text-lg text-brand-charcoal font-bold tracking-tight">
          Structural Architectural Parameters
        </h3>
        <p className="font-mono text-[9px] uppercase tracking-wider text-brand-stone mt-0.5">
          At a Glance Specifications
        </p>
      </div>

      {/* Grid of specifications */}
      <div className="divide-y divide-brand-stone/10 font-sans">
        {specItems.map((spec, index) => (
          <div key={index} className="flex items-center justify-between px-6 py-4 hover:bg-brand-sand/10 transition-colors">
            <div className="flex items-center space-x-3 text-brand-stone">
              <div className="text-brand-primary shrink-0">
                {spec.icon}
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold">
                {spec.label}
              </span>
            </div>
            
            <div className="text-right">
              <span className="text-xs md:text-sm font-medium text-brand-charcoal">
                {spec.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
