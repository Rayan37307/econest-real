import * as Icons from 'lucide-react';
import { Project } from '../../types';

interface AmenitiesProps {
  project: Project;
}

export function Amenities({ project }: AmenitiesProps) {
  // Simple helper to fetch the icon by key
  const renderIcon = (iconName: string) => {
    // Cast to any to safely fetch icon dynamically
    const IconComponent = (Icons as any)[iconName] || Icons.HelpCircle;
    return <IconComponent size={24} strokeWidth={1.2} className="text-brand-gold" />;
  };

  return (
    <div className="space-y-8" id="project-amenities-section">
      <div className="border-b border-brand-stone/15 pb-4">
        <h3 className="font-serif text-xl md:text-2xl text-brand-charcoal font-bold tracking-tight">
          Curated Lifestyle Amenities
        </h3>
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-stone mt-1">
          Bespoke services custom tailored for each development
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {project.amenities.map((amenity, index) => (
          <div
            key={index}
            className="p-5 border border-brand-stone/15 bg-white shadow-sm flex items-start space-x-4 hover:border-brand-primary transition-all duration-300"
          >
            {/* Icon Block */}
            <div className="p-3 bg-brand-cream border border-brand-stone/15 text-brand-gold shrink-0">
              {renderIcon(amenity.icon)}
            </div>

            {/* Description */}
            <div className="space-y-1">
              <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-brand-charcoal">
                {amenity.name}
              </h4>
              <p className="text-[11px] text-brand-stone leading-relaxed font-light">
                {amenity.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
