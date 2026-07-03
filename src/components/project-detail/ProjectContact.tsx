import React, { useState } from 'react';
import { Send, CheckCircle, Calendar, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';

interface ProjectContactProps {
  projectName: string;
}

export function ProjectContact({ projectName }: ProjectContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tier: 'Standard Luxury Unit',
    date: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', tier: 'Standard Luxury Unit', date: '' });
    }, 1200);
  };

  return (
    <div className="bg-white border border-brand-stone/15 p-6 md:p-8 shadow-sm relative overflow-hidden" id="project-specific-contact">
      <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-primary" />
      
      {isSubmitted ? (
        <div className="py-12 text-center space-y-4 animate-fade-in">
          <div className="inline-flex p-3 bg-emerald-50 text-emerald-600 rounded-full mb-1">
            <CheckCircle size={36} strokeWidth={1.5} />
          </div>
          <h4 className="font-serif text-lg text-brand-charcoal font-bold">Appointment Requested</h4>
          <p className="text-xs text-brand-stone leading-relaxed">
            Your viewing proposal for {projectName} has been registered with our Gulshan concierge office. An executive will contact you to confirm the agenda.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-xs font-mono uppercase tracking-wider text-brand-primary underline"
            >
              Modify Proposal
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="border-b border-brand-stone/10 pb-4">
            <h4 className="font-serif text-lg text-brand-charcoal font-bold">
              Schedule Private Showing
            </h4>
            <p className="font-mono text-[8px] uppercase tracking-wider text-brand-stone mt-0.5">
              Tour of {projectName}
            </p>
          </div>

          {/* Name */}
          <div className="space-y-1">
            <label htmlFor="showing-name" className="block text-[8px] font-mono uppercase tracking-wider text-brand-stone">
              Your Full Name
            </label>
            <input
              type="text"
              id="showing-name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Asif Chowdhury"
              className="w-full px-3 py-2.5 bg-brand-cream/35 border border-brand-stone/20 focus:border-brand-primary focus:outline-none text-xs rounded-none transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {/* Phone */}
            <div className="space-y-1">
              <label htmlFor="showing-phone" className="block text-[8px] font-mono uppercase tracking-wider text-brand-stone">
                Phone Number
              </label>
              <input
                type="tel"
                id="showing-phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+880 1711 XXXXXX"
                className="w-full px-3 py-2.5 bg-brand-cream/35 border border-brand-stone/20 focus:border-brand-primary focus:outline-none text-xs rounded-none transition-colors"
              />
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label htmlFor="showing-email" className="block text-[8px] font-mono uppercase tracking-wider text-brand-stone">
                Email Address
              </label>
              <input
                type="email"
                id="showing-email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="asif@chowdhury.com"
                className="w-full px-3 py-2.5 bg-brand-cream/35 border border-brand-stone/20 focus:border-brand-primary focus:outline-none text-xs rounded-none transition-colors"
              />
            </div>
          </div>

          {/* Preferred Unit Tier */}
          <div className="space-y-1">
            <label htmlFor="showing-tier" className="block text-[8px] font-mono uppercase tracking-wider text-brand-stone">
              Target Selection
            </label>
            <select
              id="showing-tier"
              value={formData.tier}
              onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
              className="w-full px-3 py-2.5 bg-brand-cream/35 border border-brand-stone/20 focus:border-brand-primary focus:outline-none text-xs rounded-none appearance-none"
            >
              <option>Standard Luxury Unit</option>
              <option>Spacious Penthouse Villa</option>
              <option>Duplex Wing Layout</option>
              <option>Entire Custom Floor Sanctuary</option>
            </select>
          </div>

          {/* Preferred Date */}
          <div className="space-y-1">
            <label htmlFor="showing-date" className="block text-[8px] font-mono uppercase tracking-wider text-brand-stone">
              Desired Showing Date
            </label>
            <input
              type="date"
              id="showing-date"
              required
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-3 py-2.5 bg-brand-cream/35 border border-brand-stone/20 focus:border-brand-primary focus:outline-none text-xs rounded-none transition-colors"
            />
          </div>

          <div className="pt-3">
            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={isSubmitting}
              icon={<Send size={12} />}
            >
              {isSubmitting ? 'Proposing Agenda...' : 'Propose Appointment'}
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-1.5 text-[9px] font-mono text-brand-stone/70 pt-2 border-t border-brand-stone/10">
            <ShieldCheck size={11} className="text-brand-gold shrink-0" />
            <span>Strict privacy covenants applied.</span>
          </div>
        </form>
      )}
    </div>
  );
}
