import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'econest-haven',
    title: 'EcoNest Haven',
    tagline: 'Earthy luxury sky-villas with cantilevered green sanctuaries',
    category: 'Residential',
    status: 'Completed',
    location: 'Gulshan 2, Dhaka',
    city: 'Dhaka',
    description: 'A masterwork of sustainable luxury, EcoNest Haven merges raw concrete, natural limestone, and lush vertical gardens. Designed for discerning owners who seek an organic retreat in the heart of the city.',
    details: 'EcoNest Haven represents a paradigm shift in urban architecture. By utilizing specialized self-watering planter systems on every terrace, rainwater harvesting, and solar energy arrays, we have created an ecosystem that cools itself naturally and provides a stunning, living facade that changes color with the seasons.',
    landArea: '1.5 Bigha',
    totalUnits: '18 Exclusive Apartments',
    unitSizes: '4,200 sq.ft. to 5,800 sq.ft.',
    launchDate: 'January 2024',
    handoverDate: 'December 2025',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder embed link
    amenities: [
      { name: 'Sky Sanctuary Pool', description: 'Infinite edge pool overlooking the skyline, finished with hand-cut basalt tiles.', icon: 'Droplets' },
      { name: 'Organic Wellness Spa', description: 'Private sauna, steam chamber, and therapy rooms using all-natural materials.', icon: 'Activity' },
      { name: 'Botanical Glasshouse Lounge', description: 'Temperature-controlled conservatory for social gatherings surrounded by rare flora.', icon: 'Leaf' },
      { name: 'Smart Home Automation', description: 'Integrated IoT lighting, climate, and automated planters managed via custom app.', icon: 'Cpu' }
    ],
    features: [
      'Gold-Standard Green Building Certification',
      'Double-Glazed Low-E Thermal Windows',
      'Triple-Filter Water Softening & Reverse Osmosis Plant',
      '24/7 Multi-Tier Biometric Security & Concierge',
      '100% Power Backup with Soundproof Generators'
    ],
    featured: true
  },
  {
    id: '2',
    slug: 'the-stone-pavilion',
    title: 'The Stone Pavilion',
    tagline: 'Monolithic raw concrete and premium limestone architecture',
    category: 'Residential',
    status: 'Ongoing',
    location: 'Banani Road 11, Dhaka',
    city: 'Dhaka',
    description: 'Inspired by Japanese brutalism and Bengali heritage, The Stone Pavilion is a low-density residence crafted entirely with premium hand-laid limestone and exposed architectural concrete.',
    details: 'This project is designed for those who appreciate the poetry of raw, authentic materials. Featuring soaring 14-foot double-height ceilings, private internal courtyards, and deep structural overhangs, the building is a timeless fortress of tranquility against the energetic pace of Dhaka.',
    landArea: '1.2 Bigha',
    totalUnits: '12 Luxury Duplexes',
    unitSizes: '5,500 sq.ft. to 7,200 sq.ft.',
    launchDate: 'June 2025',
    handoverDate: 'June 2027',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    amenities: [
      { name: 'Private Zen Courtyards', description: 'Internal open-sky micro-gardens featuring dry gravel gardens and local mosses.', icon: 'Compass' },
      { name: 'Private Elevator Access', description: 'Biometric elevators opening directly into individual foyer spaces.', icon: 'ArrowUp' },
      { name: 'The Stone Library & Cigar Lounge', description: 'Rich timber paneling, soundproofing, and a climate-controlled walk-in humidor.', icon: 'BookOpen' },
      { name: 'Premium Gymnasium', description: 'Fully equipped fitness center with views of the natural bamboo wall barriers.', icon: 'Dumbbell' }
    ],
    features: [
      'Imported Portuguese Travertine Facade Cladding',
      'Solid Teakwood Entrance Doors and Premium Joinery',
      'Advanced Acoustic Floor Underlay for Decibel Reduction',
      'Underground Rainwater Basin for Landscape Irrigation',
      'Fully Furnished Kitchens with Premium European Fittings'
    ],
    featured: true
  },
  {
    id: '3',
    slug: 'earthy-canopy',
    title: 'Earthy Canopy',
    tagline: 'Sustainable high-rise commercial space with open-air office forests',
    category: 'Commercial',
    status: 'Upcoming',
    location: 'Tejgaon I/A, Dhaka',
    city: 'Dhaka',
    description: 'Redefining corporate environments with multi-story pocket parks and open-air breathing plazas, Earthy Canopy is the next generation of biophilic commercial design.',
    details: 'Corporate productivity is inherently tied to nature. Earthy Canopy integrates 3-story high open-air gardens scattered throughout the high-rise structure, allowing employees to access raw sunlight, fresh breeze, and lush environments without leaving the building.',
    landArea: '3.0 Bigha',
    totalUnits: '45 Corporate Suites',
    unitSizes: '2,500 sq.ft. to 12,000 sq.ft.',
    launchDate: 'September 2026',
    handoverDate: 'December 2029',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    amenities: [
      { name: 'Double-Height Corporate Plazas', description: 'Impressive arrival lobby featuring a 30-foot indoor waterfall and moss wall.', icon: 'Sparkles' },
      { name: 'Sky-Plaza Cafeterias', description: 'Gourmet eateries situated within the hanging biophilic sky lounges.', icon: 'Coffee' },
      { name: 'Executive Heliport & Lounge', description: 'Fully integrated rooftop heliport with direct access to private VIP boardrooms.', icon: 'Navigation' },
      { name: 'Central Air Purification', description: 'Commercial MERV 13 filtration system cycling fresh air every 15 minutes.', icon: 'Wind' }
    ],
    features: [
      'LEED Platinum Commercial Certification Target',
      'State-of-the-Art Solar Panel Glazed Facade System',
      'Integrated High-Speed Destination-Control Elevator Core',
      'Electric Vehicle (EV) Rapid Charging Stations',
      'Dedicated Post-Disaster Control Center & Shelter'
    ],
    featured: false
  },
  {
    id: '4',
    slug: 'the-terraced-sanctuary',
    title: 'The Terraced Sanctuary',
    tagline: 'An elegant mixture of retail colonnades and luxury apartments',
    category: 'Mixed-Use',
    status: 'Ongoing',
    location: 'Sector 4, Purbachal, Dhaka',
    city: 'Purbachal',
    description: 'A grand architectural statement in Dhaka’s modern expansion, merging upscale stone retail plazas with elevated custom residential towers of sand-toned masonry.',
    details: 'The Terraced Sanctuary forms a complete lifestyle hub. The lower three floors offer stone-framed boutique shopping colonnades, art cafes, and organic grocers, while the upper floors rise in terraced structures containing exquisite luxury flats featuring expansive landscape views.',
    landArea: '2.5 Bigha',
    totalUnits: '30 Premium Apartments & 20 Retail Units',
    unitSizes: '3,100 sq.ft. to 4,500 sq.ft.',
    launchDate: 'November 2024',
    handoverDate: 'October 2027',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    amenities: [
      { name: 'Pedestrian Galleria', description: 'Open-air stone arched walkway with water fountains and designer landscaping.', icon: 'Compass' },
      { name: 'Resident Club House', description: 'Private multi-purpose function hall, billiard room, and screen theater.', icon: 'Home' },
      { name: 'Infinity Deck Spa', description: 'Elevated community deck featuring open-air yoga spaces and reflexology paths.', icon: 'Smile' },
      { name: 'E-Commerce Delivery Hub', description: 'Automated smart package lockers and secure refrigerated storage rooms.', icon: 'CheckCircle' }
    ],
    features: [
      'Earthy Textured Brickwork and Natural Limestone Finishes',
      'Fully Separated Residential and Commercial Parking/Entrance Cores',
      'Advanced Seismic Load Structural Reinforcements',
      'Greywater Reclamation Plant for Building Maintenance',
      'High-Speed Fibre Optic Connectivity throughout the Complex'
    ],
    featured: true
  }
];
