import React, { useState } from 'react';
import { Download, Mail, CheckCircle, FileText } from 'lucide-react';
import { Button } from '../ui/Button';

interface BrochureDownloadProps {
  projectName: string;
}

export function BrochureDownload({ projectName }: BrochureDownloadProps) {
  const [email, setEmail] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setUnlocked(true);
    }, 1000);
  };

  return (
    <div
      className="stone-texture p-8 md:p-12 border border-brand-primary/20 shadow-lg relative overflow-hidden"
      id="brochure-download-cta"
    >
      <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-gold" />
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
        
        {/* Left copy */}
        <div className="space-y-3 max-w-xl">
          <div className="flex items-center space-x-2 text-brand-gold font-mono text-[9px] uppercase tracking-wider">
            <FileText size={12} />
            <span>Digital Brochure</span>
          </div>
          <h3 className="font-serif text-2xl md:text-3xl text-brand-charcoal font-bold tracking-tight">
            Acquire the Architectural Dossier
          </h3>
          <p className="text-xs text-brand-stone leading-relaxed font-light">
            Unlock the complete, high-resolution prospectus booklet for {projectName}, containing comprehensive dimension blueprints, material specs sheets, structural plans, and private lounge rendering booklets.
          </p>
        </div>

        {/* Right download form */}
        <div className="shrink-0 w-full md:w-80">
          {unlocked ? (
            <div className="bg-white/80 backdrop-blur-sm p-6 border border-emerald-500/20 text-center space-y-4 animate-fade-in">
              <div className="p-2 bg-emerald-50 text-emerald-600 inline-flex rounded-full">
                <CheckCircle size={22} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-brand-charcoal">Brochure Unlocked</h4>
                <p className="text-[10px] text-brand-stone mt-1">Your download is ready for acquisition.</p>
              </div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert(`Downloading architectural booklet for ${projectName}...`);
                }}
                className="inline-flex items-center justify-center font-sans font-medium uppercase tracking-wider text-xs px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white w-full transition-colors"
              >
                <Download size={14} className="mr-2" />
                Download PDF Now
              </a>
            </div>
          ) : (
            <form onSubmit={handleUnlock} className="bg-white/90 backdrop-blur-sm p-6 border border-brand-stone/15 space-y-4">
              <div className="space-y-1">
                <label htmlFor="brochure-email" className="block text-[9px] font-mono uppercase tracking-wider text-brand-stone">
                  Enter Corporate Email Address
                </label>
                <input
                  type="email"
                  id="brochure-email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@corporation.com"
                  className="w-full px-3 py-2.5 bg-brand-cream/35 border border-brand-stone/20 focus:border-brand-primary focus:outline-none text-xs rounded-none transition-colors"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                fullWidth
                disabled={submitting}
                icon={<Download size={13} />}
              >
                {submitting ? 'Authenticating...' : 'Unlock Prospectus'}
              </Button>
              
              <span className="block text-center text-[8px] font-mono text-brand-stone/60">
                Secure link will also be dispatched via email.
              </span>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
