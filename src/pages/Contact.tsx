import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Map } from 'lucide-react';
import { ParallaxSection } from '../components/ui/ParallaxSection';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
    }, 1500);
  };

  const contactCards = [
    {
      title: 'Our Secretariat',
      details: 'Lotus Tower, Level 8, Road 44, Gulshan-2, Dhaka 1212, Bangladesh',
      icon: <MapPin size={20} strokeWidth={1.5} />
    },
    {
      title: 'Voice Helpline',
      details: '+880 961 2345678 (Hotline)\n+880 1711 000000 (Concierge)',
      icon: <Phone size={20} strokeWidth={1.5} />
    },
    {
      title: 'Secure Electronic Mail',
      details: 'concierge@econest.com\ninfo@econest.com',
      icon: <Mail size={20} strokeWidth={1.5} />
    },
    {
      title: 'Secretariat Hours',
      details: 'Sat - Thu: 9:00 AM - 6:00 PM\nFriday: Closed',
      icon: <Clock size={20} strokeWidth={1.5} />
    }
  ];

  return (
    <div className="pt-0" id="contact-page-root">
      {/* Page Hero */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
        heightClass="h-[40vh] md:h-[50vh]"
      >
        <div className="text-center space-y-3 animate-fade-in text-white mt-10">
          <span className="block font-mono text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold">
            Bespoke Portals
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none font-bold">
            Get in Touch
          </h1>
          <p className="font-sans text-xs md:text-sm text-brand-sand/80 max-w-xl mx-auto uppercase tracking-widest font-light">
            Private consultations arranged saturation-wide in Bangladesh
          </p>
        </div>
      </ParallaxSection>

      {/* Main Grid */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Info Details Panel (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal direction="up">
              <span className="block font-mono text-[9px] uppercase tracking-[0.25em] text-brand-primary font-semibold mb-3">
                Corporate Directories
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-brand-charcoal font-bold tracking-tight">
                Secretariat & Private Salons
              </h2>
              <p className="text-xs md:text-sm text-brand-stone leading-relaxed font-light mt-4">
                Arrange a private guided tour of our show enclaves or propose a plot-evaluation meeting with our senior investment analysts.
              </p>
            </ScrollReveal>

            {/* Grid of contact card items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              {contactCards.map((card, idx) => (
                <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                  <div className="p-5 border border-brand-stone/15 bg-white shadow-sm flex items-start space-x-4">
                    <div className="p-3 bg-brand-cream border border-brand-stone/15 text-brand-gold shrink-0">
                      {card.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-sans text-xs uppercase tracking-wider font-semibold text-brand-charcoal">
                        {card.title}
                      </h4>
                      <p className="text-[11px] text-brand-stone leading-relaxed whitespace-pre-line font-light">
                        {card.details}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Form Panel (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={200}>
              <div className="bg-white p-8 md:p-10 border border-brand-stone/15 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-primary" />
                
                {isSubmitted ? (
                  <div className="py-16 text-center space-y-4 animate-fade-in">
                    <div className="inline-flex p-4 bg-emerald-50 text-emerald-600 rounded-full mb-2">
                      <CheckCircle size={44} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-2xl text-brand-charcoal font-bold">Transmission Complete</h3>
                    <p className="text-xs text-brand-stone max-w-md mx-auto leading-relaxed">
                      Thank you for initiating contact. Your consultation prospectus has been delivered safely to the Executive Director’s bureau. You will receive an electronic or vocal response within 4 hours.
                    </p>
                    <div className="pt-4">
                      <Button variant="secondary" size="sm" onClick={() => setIsSubmitted(false)}>
                        Send Another Proposal
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-serif text-xl md:text-2xl text-brand-charcoal font-bold mb-1">
                      Consultation Request Form
                    </h3>
                    <p className="text-[10px] text-brand-stone font-light mb-6">
                      Fields marked with * are strictly required to catalog your proposal.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="full-name" className="block text-[9px] font-mono uppercase tracking-wider text-brand-stone">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="full-name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Architect Kabir Ahmed"
                          className="w-full px-4 py-3 bg-brand-cream/35 border border-brand-stone/20 focus:border-brand-primary focus:outline-none text-xs rounded-none transition-colors"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label htmlFor="contact-phone" className="block text-[9px] font-mono uppercase tracking-wider text-brand-stone">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="contact-phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+880 17XXXXXXXX"
                          className="w-full px-4 py-3 bg-brand-cream/35 border border-brand-stone/20 focus:border-brand-primary focus:outline-none text-xs rounded-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="block text-[9px] font-mono uppercase tracking-wider text-brand-stone">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="kabir@ahmedcorp.com"
                        className="w-full px-4 py-3 bg-brand-cream/35 border border-brand-stone/20 focus:border-brand-primary focus:outline-none text-xs rounded-none transition-colors"
                      />
                    </div>

                    {/* Subject / Purpose */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-subject" className="block text-[9px] font-mono uppercase tracking-wider text-brand-stone">
                        Nature of Inquiry
                      </label>
                      <select
                        id="contact-subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-brand-cream/35 border border-brand-stone/20 focus:border-brand-primary focus:outline-none text-xs rounded-none appearance-none cursor-pointer"
                      >
                        <option value="General Inquiry">General Corporate Inquiry</option>
                        <option value="Apartment Inquiry">Purchasing an Elite Residence</option>
                        <option value="Office Inquiry">Corporate Site Office Leasing</option>
                        <option value="Land Joint Venture">Proposing Land Joint Venture</option>
                        <option value="Media Desk">Press & Media Relations</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-message" className="block text-[9px] font-mono uppercase tracking-wider text-brand-stone">
                        Detailed Proposal Message *
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your parcel, corporate criteria, or preferred apartment layout requirements..."
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
                        {isSubmitting ? 'Transmitting...' : 'Transmit Inquiries'}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* 3. Immersive Styled Vector Map Placeholder */}
        <ScrollReveal direction="up" delay={250}>
          <div className="mt-16 md:mt-24">
            <div className="border-b border-brand-stone/15 pb-4 mb-6">
              <h3 className="font-serif text-xl md:text-2xl text-brand-charcoal font-bold tracking-tight flex items-center gap-2">
                <Map size={18} className="text-brand-primary" />
                Secretariat Location Matrix
              </h3>
              <p className="font-mono text-[9px] uppercase tracking-wider text-brand-stone mt-1">
                Located inside the prestigious commercial block of Gulshan-2
              </p>
            </div>
            
            {/* Custom stylized map canvas */}
            <div className="relative h-96 w-full bg-brand-sand border border-brand-stone/25 overflow-hidden flex flex-col items-center justify-center p-8 text-center space-y-4">
              {/* Geometric Grid Overlay */}
              <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#A89F91_1px,transparent_1px),linear-gradient(to_bottom,#A89F91_1px,transparent_1px)] bg-[size:40px_40px]" />
              
              {/* Minimalist Map shapes illustration */}
              <div className="absolute w-[80%] h-[80%] opacity-[0.08] pointer-events-none rounded-full border-[8px] border-brand-charcoal select-none" />
              <div className="absolute w-[40%] h-[40%] opacity-[0.05] pointer-events-none rounded-full border-[20px] border-brand-charcoal select-none" />
              <div className="absolute left-[30%] top-[40%] w-[1px] h-[50%] bg-brand-primary/45 rotate-45 select-none" />
              <div className="absolute right-[20%] top-[10%] w-[1px] h-[80%] bg-brand-primary/45 -rotate-12 select-none" />

              {/* Marker illustration */}
              <div className="relative flex flex-col items-center justify-center animate-bounce z-10">
                <div className="w-12 h-12 rounded-full bg-brand-primary text-brand-cream border-2 border-brand-gold flex items-center justify-center shadow-lg">
                  <MapPin size={22} />
                </div>
                {/* Ping wave */}
                <div className="absolute w-12 h-12 rounded-full border border-brand-primary animate-ping opacity-60" />
              </div>

              {/* Text Card */}
              <div className="bg-white/95 backdrop-blur-md p-6 border border-brand-stone/20 max-w-sm shadow-xl z-10 relative">
                <h4 className="font-serif text-sm font-bold text-brand-charcoal">EcoNest Secretariat</h4>
                <p className="text-[10px] text-brand-stone mt-2 font-sans">
                  Lotus Tower, Level 8, Road 44, Gulshan-2, Dhaka 1212
                </p>
                <a
                  href="https://maps.google.com/?q=Gulshan-2,+Dhaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex font-mono text-[9px] uppercase tracking-wider text-brand-primary border-b border-brand-primary pb-0.5"
                >
                  Retrieve Driving Directions
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
