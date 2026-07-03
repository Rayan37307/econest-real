import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
import { ScrollReveal } from '../ui/ScrollReveal';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Apartment Purchase',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', interest: 'Apartment Purchase', message: '' });
    }, 1500);
  };

  return (
    <section className="bg-brand-cream py-20 md:py-28 relative" id="contact-section">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Info Text Column (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal direction="up">
              <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-brand-primary font-semibold mb-3">
                Bespoke Consultation
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.15] text-brand-charcoal font-bold">
                Begin Your <span className="text-brand-primary italic font-normal">Sanctuary</span> Journey
              </h2>
              <p className="text-xs md:text-sm text-brand-stone leading-relaxed font-light mt-4">
                Whether you seek to procure an exclusive vertical sky-villa, lease executive grade sustainable offices, or propose a landowner partnership, our dedicated concierge team is at your complete disposal.
              </p>
            </ScrollReveal>

            {/* Quick Contact Cards */}
            <ScrollReveal direction="up" delay={200}>
              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-4 p-4 border border-brand-stone/15 bg-brand-sand/15">
                  <div className="p-2.5 bg-brand-primary/10 text-brand-primary shrink-0">
                    <Calendar size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-brand-charcoal">Private Showings</h4>
                    <p className="text-[11px] text-brand-stone leading-relaxed mt-1">
                      Arrange an exclusive private architectural guided tour of EcoNest Haven or our Banani show unit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 border border-brand-stone/15 bg-brand-sand/15">
                  <div className="p-2.5 bg-brand-primary/10 text-brand-primary shrink-0">
                    <Mail size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-brand-charcoal">Concierge Email</h4>
                    <a href="mailto:concierge@econest.com" className="text-[11px] text-brand-primary hover:text-brand-primary-dark transition-colors block mt-1">
                      concierge@econest.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 border border-brand-stone/15 bg-brand-sand/15">
                  <div className="p-2.5 bg-brand-primary/10 text-brand-primary shrink-0">
                    <Phone size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-brand-charcoal">Hotline Core</h4>
                    <a href="tel:+8809612345678" className="text-[11px] font-mono text-brand-primary hover:text-brand-primary-dark transition-colors block mt-1">
                      +880 961 2345678
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={250}>
              <div className="bg-white p-8 md:p-10 border border-brand-stone/15 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-primary" />
                
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4 animate-fade-in">
                    <div className="inline-flex p-4 bg-emerald-50 text-emerald-600 rounded-full mb-2">
                      <CheckCircle size={44} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-2xl text-brand-charcoal font-bold">Inquiry Transmitted</h3>
                    <p className="text-xs text-brand-stone max-w-md mx-auto leading-relaxed">
                      Thank you for contacting EcoNest. Our Elite Concierge Executive has been notified of your interest and will reach out to you personally within the next 4 working hours.
                    </p>
                    <div className="pt-4">
                      <Button variant="secondary" size="sm" onClick={() => setIsSubmitted(false)}>
                        Send Another Query
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-serif text-xl md:text-2xl text-brand-charcoal font-bold mb-2">
                      Bespoke Inquiry Form
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="block text-[9px] font-mono uppercase tracking-wider text-brand-stone">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="S.A. Rahman"
                          className="w-full px-4 py-3 bg-brand-cream/35 border border-brand-stone/20 focus:border-brand-primary focus:outline-none text-xs rounded-none transition-colors"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="block text-[9px] font-mono uppercase tracking-wider text-brand-stone">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+880 1712 XXXXXX"
                          className="w-full px-4 py-3 bg-brand-cream/35 border border-brand-stone/20 focus:border-brand-primary focus:outline-none text-xs rounded-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-[9px] font-mono uppercase tracking-wider text-brand-stone">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahman@domain.com"
                        className="w-full px-4 py-3 bg-brand-cream/35 border border-brand-stone/20 focus:border-brand-primary focus:outline-none text-xs rounded-none transition-colors"
                      />
                    </div>

                    {/* Nature of Interest */}
                    <div className="space-y-1.5">
                      <label htmlFor="interest" className="block text-[9px] font-mono uppercase tracking-wider text-brand-stone">
                        Nature of Interest
                      </label>
                      <select
                        id="interest"
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-3 bg-brand-cream/35 border border-brand-stone/20 focus:border-brand-primary focus:outline-none text-xs rounded-none transition-colors appearance-none"
                      >
                        <option>Apartment Purchase</option>
                        <option>Corporate Office Lease</option>
                        <option>Commercial Space Purchase</option>
                        <option>Landowner Joint Venture Proposal</option>
                        <option>Bespoke General Inquiry</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="block text-[9px] font-mono uppercase tracking-wider text-brand-stone">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Kindly describe your plot, requirements, or desired layout details..."
                        className="w-full px-4 py-3 bg-brand-cream/35 border border-brand-stone/20 focus:border-brand-primary focus:outline-none text-xs rounded-none transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        fullWidth
                        disabled={isSubmitting}
                        icon={<Send size={13} />}
                      >
                        {isSubmitting ? 'Transmitting Inquiries...' : 'Transmit Inquiry'}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
