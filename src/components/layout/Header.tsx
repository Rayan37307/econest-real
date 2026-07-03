import { useState, useEffect } from 'react';
import { Menu, X, Phone, Building, ArrowUpRight } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { navigationLinks } from '../../data/navigation';
import { Button } from '../ui/Button';

interface HeaderProps {
  currentHash: string;
}

export function Header({ currentHash }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 60;

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [currentHash]);

  // Is active helper
  const isActive = (hash: string) => {
    if (hash === '#/') {
      return currentHash === '#/' || currentHash === '';
    }
    return currentHash.startsWith(hash);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm border-b border-brand-stone/10 py-3 md:py-4'
            : 'bg-transparent py-5 md:py-7'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#/"
              className="flex items-center space-x-2.5 group focus:outline-none"
              id="header-logo"
            >
              <div className={`p-2 transition-colors duration-300 ${isScrolled ? 'bg-brand-primary text-brand-cream' : 'bg-white/10 text-white backdrop-blur-sm'}`}>
                <Building size={20} strokeWidth={1.5} className="group-hover:rotate-6 transition-transform duration-300" />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-serif text-lg md:text-xl font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${
                    isScrolled ? 'text-brand-charcoal' : 'text-white'
                  }`}
                >
                  EcoNest
                </span>
                <span
                  className={`text-[8px] font-mono tracking-[0.3em] uppercase -mt-1 transition-colors duration-300 ${
                    isScrolled ? 'text-brand-stone' : 'text-brand-sand/70'
                  }`}
                >
                  Earthy Luxury
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8" id="desktop-nav">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.hash}
                  className={`font-sans text-[11px] uppercase tracking-[0.2em] transition-all duration-300 border-b border-transparent py-1 ${
                    isActive(link.hash)
                      ? isScrolled
                        ? 'text-brand-primary border-brand-primary font-semibold'
                        : 'text-white border-white font-semibold'
                      : isScrolled
                      ? 'text-brand-charcoal/75 hover:text-brand-primary hover:border-brand-primary/30'
                      : 'text-white/80 hover:text-white hover:border-white/30'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA & Actions */}
            <div className="hidden sm:flex items-center space-x-4">
              <a
                href="tel:+8809612345678"
                className={`hidden lg:flex items-center space-x-2 font-mono text-[10px] tracking-wider uppercase transition-colors ${
                  isScrolled ? 'text-brand-stone hover:text-brand-primary' : 'text-brand-sand/80 hover:text-white'
                }`}
              >
                <Phone size={12} strokeWidth={1.5} />
                <span>+880 961 2345678</span>
              </a>
              <Button
                variant={isScrolled ? 'primary' : 'outline-white'}
                size="sm"
                onClick={() => { window.location.hash = '#/contact'; }}
                icon={<ArrowUpRight size={13} />}
                id="header-cta"
              >
                Inquire
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center space-x-3">
              <a
                href="tel:+8809612345678"
                className={`flex sm:hidden p-2 transition-colors ${
                  isScrolled ? 'text-brand-charcoal' : 'text-white'
                }`}
                aria-label="Call Us"
              >
                <Phone size={16} strokeWidth={1.5} />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 transition-colors focus:outline-none cursor-pointer ${
                  isScrolled ? 'text-brand-charcoal hover:text-brand-primary' : 'text-white hover:text-brand-sand'
                }`}
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
                id="mobile-menu-toggle"
              >
                {isOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-out Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-brand-charcoal/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-[380px] bg-brand-cream shadow-2xl p-6 flex flex-col justify-between transition-transform duration-500 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="mt-14">
            {/* Mobile Nav Links */}
            <nav className="flex flex-col space-y-5" id="mobile-nav">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.hash}
                  className={`font-sans text-xs uppercase tracking-[0.25em] border-b border-brand-stone/10 py-3 flex items-center justify-between ${
                    isActive(link.hash)
                      ? 'text-brand-primary font-semibold'
                      : 'text-brand-charcoal hover:text-brand-primary'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={14} className="opacity-40" />
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile Footer Area */}
          <div className="border-t border-brand-stone/20 pt-6 space-y-4">
            <div className="space-y-1">
              <span className="block font-mono text-[9px] uppercase tracking-wider text-brand-stone">General inquiries</span>
              <a href="mailto:info@econest.com" className="block text-xs font-sans text-brand-charcoal hover:text-brand-primary">
                info@econest.com
              </a>
              <a href="tel:+8809612345678" className="block text-xs font-mono text-brand-charcoal hover:text-brand-primary">
                +880 961 2345678
              </a>
            </div>
            <div className="pt-2">
              <Button
                variant="primary"
                size="sm"
                fullWidth
                onClick={() => {
                  setIsOpen(false);
                  window.location.hash = '#/contact';
                }}
              >
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
