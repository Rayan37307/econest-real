import { Building, Mail, Phone, MapPin, Clock, ArrowUp, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import { navigationLinks } from '../../data/navigation';
import { Button } from '../ui/Button';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-charcoal text-brand-cream border-t border-white/5 relative overflow-hidden">
      {/* Subtle texture decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_0)] bg-[size:24px_24px]" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Column 1: Brand details */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 bg-brand-primary text-brand-cream">
                <Building size={18} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-[0.2em] uppercase text-white">
                  EcoNest
                </span>
                <span className="text-[8px] font-mono tracking-[0.3em] uppercase text-brand-gold -mt-1">
                  Earthy Luxury
                </span>
              </div>
            </div>
            
            <p className="text-xs text-brand-sand/70 leading-relaxed font-light">
              Pioneering vertical gardens, exposed limestone, and sustainable structural monoliths. Crafting authentic, low-density residences in elite micro-environments.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="#"
                className="p-2 border border-white/10 hover:border-brand-gold text-brand-sand hover:text-brand-gold transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>
              <a
                href="#"
                className="p-2 border border-white/10 hover:border-brand-gold text-brand-sand hover:text-brand-gold transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={14} />
              </a>
              <a
                href="#"
                className="p-2 border border-white/10 hover:border-brand-gold text-brand-sand hover:text-brand-gold transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="#"
                className="p-2 border border-white/10 hover:border-brand-gold text-brand-sand hover:text-brand-gold transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-brand-gold font-semibold mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.hash}
                    className="text-xs text-brand-sand/70 hover:text-white hover:pl-1 transition-all duration-300 flex items-center"
                  >
                    <span className="h-[1px] w-1.5 bg-brand-gold/40 mr-2" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Portfolios & Inquiries */}
          <div>
            <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-brand-gold font-semibold mb-6">
              Portfolios
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#/projects" className="text-xs text-brand-sand/70 hover:text-white transition-colors flex items-center">
                  <span className="h-[1px] w-1.5 bg-brand-gold/40 mr-2" />
                  Residential Villas
                </a>
              </li>
              <li>
                <a href="#/projects" className="text-xs text-brand-sand/70 hover:text-white transition-colors flex items-center">
                  <span className="h-[1px] w-1.5 bg-brand-gold/40 mr-2" />
                  Corporate Plazas
                </a>
              </li>
              <li>
                <a href="#/projects" className="text-xs text-brand-sand/70 hover:text-white transition-colors flex items-center">
                  <span className="h-[1px] w-1.5 bg-brand-gold/40 mr-2" />
                  Mixed-Use Sanctuary
                </a>
              </li>
              <li>
                <a href="#/about" className="text-xs text-brand-sand/70 hover:text-white transition-colors flex items-center">
                  <span className="h-[1px] w-1.5 bg-brand-gold/40 mr-2" />
                  Landowner Cooperation
                </a>
              </li>
              <li>
                <a href="#/csr" className="text-xs text-brand-sand/70 hover:text-white transition-colors flex items-center">
                  <span className="h-[1px] w-1.5 bg-brand-gold/40 mr-2" />
                  Sustainable Initiatives
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="space-y-4">
            <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-brand-gold font-semibold mb-6">
              Headquarters
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start space-x-3">
                <MapPin size={14} className="text-brand-gold shrink-0 mt-0.5" />
                <span className="text-xs text-brand-sand/75 leading-relaxed">
                  Lotus Tower, Level 8, Road 44, Gulshan-2, Dhaka 1212, Bangladesh
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={14} className="text-brand-gold shrink-0" />
                <a href="tel:+8809612345678" className="text-xs font-mono text-brand-sand/75 hover:text-white transition-colors">
                  +880 961 2345678
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={14} className="text-brand-gold shrink-0" />
                <a href="mailto:concierge@econest.com" className="text-xs text-brand-sand/75 hover:text-white transition-colors">
                  concierge@econest.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={14} className="text-brand-gold shrink-0 mt-0.5" />
                <span className="text-xs text-brand-sand/75">
                  Sat - Thu: 9:00 AM - 6:00 PM<br />Friday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright details */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-brand-sand/40">
          <div>
            <p>&copy; {new Date().getFullYear()} EcoNest Real Estate Limited. All rights reserved.</p>
          </div>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 py-1.5 px-3 border border-white/5 hover:border-brand-gold/30 hover:text-white transition-colors group focus:outline-none cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
