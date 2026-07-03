import { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Pages
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Career } from './pages/Career';
import { CSR } from './pages/CSR';
import { PressRoom } from './pages/PressRoom';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');
  const [key, setKey] = useState(0); // Triggers entering transitions on route shifts

  // Route Synchronization
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
      setKey((prev) => prev + 1);
      
      // Scroll smoothly to top on route switch
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Set initial fallback if empty
    if (!window.location.hash) {
      window.location.hash = '#/';
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Simple Router Switcher
  const renderView = () => {
    const hash = currentHash;

    if (hash === '#/' || hash === '#') {
      return <Home />;
    }
    if (hash === '#/projects') {
      return <Projects />;
    }
    if (hash.startsWith('#/projects/')) {
      const slug = hash.replace('#/projects/', '');
      return <ProjectDetail slug={slug} />;
    }
    if (hash === '#/about') {
      return <About />;
    }
    if (hash === '#/contact') {
      return <Contact />;
    }
    if (hash === '#/career') {
      return <Career />;
    }
    if (hash === '#/csr') {
      return <CSR />;
    }
    if (hash === '#/press-room') {
      return <PressRoom />;
    }

    // Default 404 Fallback page
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-cream py-32 px-4 text-center">
        <div className="space-y-4 max-w-md">
          <span className="block text-[10px] font-mono uppercase tracking-[0.3em] text-brand-gold font-bold">Error 404</span>
          <h1 className="font-serif text-3xl font-bold text-brand-charcoal">Covenant Untracked</h1>
          <p className="text-xs text-brand-stone leading-relaxed">
            The page you seek has either weathered beyond our archives or resides in a future development phase.
          </p>
          <div className="pt-2">
            <a
              href="#/"
              className="inline-flex items-center justify-center font-sans font-medium uppercase tracking-wider text-xs px-6 py-3.5 bg-brand-primary text-white hover:bg-brand-primary-dark transition-all duration-300"
            >
              Return to Sanctuary
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal flex flex-col justify-between selection:bg-brand-primary selection:text-white overflow-x-hidden">
      {/* 1. Header Sticky Nav */}
      <Header currentHash={currentHash} />

      {/* 2. Main Page Render viewport with elegant entering transition */}
      <main key={key} className="flex-grow animate-fade-in relative z-10 pt-0">
        {renderView()}
      </main>

      {/* 3. Global Footer */}
      <Footer />
    </div>
  );
}
