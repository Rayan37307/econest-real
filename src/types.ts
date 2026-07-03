export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'Residential' | 'Commercial' | 'Mixed-Use';
  status: 'Ongoing' | 'Completed' | 'Upcoming';
  location: string;
  city: string;
  description: string;
  details: string;
  landArea: string;
  totalUnits: string;
  unitSizes: string;
  launchDate: string;
  handoverDate: string;
  heroImage: string;
  gallery: string[];
  videoUrl: string; // YouTube or mock embed url
  amenities: {
    name: string;
    description: string;
    icon: string; // Name of Lucide icon
  }[];
  features: string[];
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface CareerOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string; // "Full-time", "Contract", etc.
  experience: string;
  description: string;
  requirements: string[];
}

export interface PressRelease {
  id: string;
  title: string;
  source: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  link: string;
}
