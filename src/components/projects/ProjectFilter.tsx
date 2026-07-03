import { Search, SlidersHorizontal } from 'lucide-react';

interface ProjectFilterProps {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  activeLocation: string;
  setActiveLocation: (loc: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  categories: string[];
  locations: string[];
}

export function ProjectFilter({
  activeCategory,
  setActiveCategory,
  activeLocation,
  setActiveLocation,
  searchQuery,
  setSearchQuery,
  categories,
  locations
}: ProjectFilterProps) {
  return (
    <div className="bg-white border border-brand-stone/15 p-6 mb-12 shadow-sm" id="project-filters">
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
        
        {/* Category Filters (Left) */}
        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
          <span className="hidden sm:inline font-mono text-[9px] uppercase tracking-wider text-brand-stone mr-2">
            Filter Portfolio:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-[10px] uppercase tracking-widest font-sans border transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-brand-primary border-brand-primary text-white font-semibold'
                  : 'bg-transparent border-brand-stone/20 text-brand-stone hover:border-brand-primary hover:text-brand-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search & Location Filter (Right) */}
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-stone/70" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title or street..."
              className="w-full pl-9 pr-4 py-2.5 bg-brand-cream/35 border border-brand-stone/20 focus:border-brand-primary focus:outline-none text-xs rounded-none"
            />
          </div>

          {/* Location Dropdown */}
          <div className="relative w-full sm:w-48">
            <select
              value={activeLocation}
              onChange={(e) => setActiveLocation(e.target.value)}
              className="w-full px-4 py-2.5 bg-brand-cream/35 border border-brand-stone/20 focus:border-brand-primary focus:outline-none text-xs rounded-none appearance-none cursor-pointer"
            >
              <option value="All">All Neighborhoods</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-brand-stone">
              <SlidersHorizontal size={12} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
