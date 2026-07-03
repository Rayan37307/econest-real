import React, { useState } from 'react';
import { Send, CheckCircle, FileText, Upload, Briefcase, PlusCircle, ArrowRight } from 'lucide-react';
import { careers } from '../data/careers';
import { ParallaxSection } from '../components/ui/ParallaxSection';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export function Career() {
  const [selectedJob, setSelectedJob] = useState<string>('Senior Project Architect');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeName, setResumeName] = useState<string>('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    portfolioUrl: ''
  });

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    const formElement = document.getElementById('career-application-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setResumeName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', experience: '', portfolioUrl: '' });
      setResumeName('');
    }, 1500);
  };

  return (
    <div className="pt-0" id="career-page-root">
      {/* Page Hero */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=80"
        heightClass="h-[40vh] md:h-[50vh]"
      >
        <div className="text-center space-y-3 animate-fade-in text-white mt-10">
          <span className="block font-mono text-[10px] uppercase tracking-[0.4em] text-brand-gold font-bold">
            Guild Curation
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none font-bold">
            Career Portal
          </h1>
          <p className="font-sans text-xs md:text-sm text-brand-sand/80 max-w-xl mx-auto uppercase tracking-widest font-light">
            Constructing future landmarks alongside elite artisans
          </p>
        </div>
      </ParallaxSection>

      {/* 1. Why Join Us */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="up">
            <span className="block font-mono text-[9px] uppercase tracking-[0.25em] text-brand-primary font-semibold">
              The Guild Covenant
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal font-bold tracking-tight mt-2">
              Building a Culture of Architectural Integrity
            </h2>
            <p className="text-sm text-brand-charcoal leading-relaxed font-normal mt-4">
              At EcoNest, we do not operate a high-volume development pipeline. We curate landmarks. Each project receives years of meticulous conceptual meetings, material research, and precise site inspection. 
            </p>
            <p className="text-xs md:text-sm text-brand-stone leading-relaxed font-light mt-4">
              We look for creators, civil PMs, and concierge executives who find fulfillment in craftsmanship over speed. By working inside our guild, you will gain access to direct supply networks in Europe, state-of-the-art biophilic integration resources, and an environment where perfection is the standard, not an option.
            </p>
          </ScrollReveal>

          {/* Quick Metrics */}
          <ScrollReveal direction="left" delay={200}>
            <div className="grid grid-cols-2 gap-6 bg-brand-sand/20 border border-brand-stone/15 p-8">
              <div>
                <span className="block font-serif text-3xl font-bold text-brand-primary">12-To-1</span>
                <span className="block text-[9px] font-mono uppercase tracking-wider text-brand-stone mt-1">Supervision Ratio</span>
                <p className="text-[10px] text-brand-stone/80 mt-1">One PM oversees a maximum of 12 site workers to maintain precision.</p>
              </div>

              <div>
                <span className="block font-serif text-3xl font-bold text-brand-primary">100%</span>
                <span className="block text-[9px] font-mono uppercase tracking-wider text-brand-stone mt-1">Real Materials</span>
                <p className="text-[10px] text-brand-stone/80 mt-1">Zero synthetic cladding or hollow partition policies applied.</p>
              </div>

              <div>
                <span className="block font-serif text-3xl font-bold text-brand-primary">Gold</span>
                <span className="block text-[9px] font-mono uppercase tracking-wider text-brand-stone mt-1">Health Covenants</span>
                <p className="text-[10px] text-brand-stone/80 mt-1">Full medical coverage and workspace safety parameters for site engineers.</p>
              </div>

              <div>
                <span className="block font-serif text-3xl font-bold text-brand-primary">Weekly</span>
                <span className="block text-[9px] font-mono uppercase tracking-wider text-brand-stone mt-1">Design Labs</span>
                <p className="text-[10px] text-brand-stone/80 mt-1">Dedicated collaborative design and research critique hours.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Openings list */}
      <section className="bg-brand-sand/35 border-y border-brand-stone/15 py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <SectionHeading
              tag="Active Openings"
              title="Curation Enclave Roles"
              subtitle="Review our active vacant positions below. Join our elite guild of architectural and management experts."
              align="center"
            />
          </ScrollReveal>

          {/* Opening Cards Stack */}
          <div className="space-y-6 mt-12 max-w-4xl mx-auto">
            {careers.map((job, idx) => (
              <ScrollReveal key={job.id} direction="up" delay={idx * 150}>
                <div className="bg-white border border-brand-stone/15 p-6 md:p-8 hover:border-brand-primary transition-all duration-300 shadow-sm relative group">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="space-y-3">
                      {/* Meta Tags */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center space-x-1 font-mono text-[8px] uppercase tracking-wider text-brand-gold bg-brand-sand/40 px-2 py-1">
                          <Briefcase size={9} />
                          <span>{job.department}</span>
                        </span>
                        <span className="text-[8px] font-mono uppercase tracking-wider text-brand-stone">
                          {job.location} &bull; {job.type}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-xl font-bold text-brand-charcoal transition-colors group-hover:text-brand-primary">
                        {job.title}
                      </h3>

                      {/* Experience requirement */}
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-brand-stone">
                        Experience Threshold: <span className="font-semibold text-brand-primary">{job.experience}</span>
                      </span>

                      {/* Description */}
                      <p className="text-xs text-brand-stone leading-relaxed font-light pt-1">
                        {job.description}
                      </p>

                      {/* Bulleted Requirements */}
                      <div className="space-y-1.5 pt-3 border-t border-brand-stone/10 mt-3 hidden group-hover:block animate-fade-in">
                        <span className="block text-[8px] font-mono uppercase tracking-widest text-brand-stone font-bold mb-1">Covenant Criteria:</span>
                        {job.requirements.map((req, index) => (
                          <p key={index} className="text-[11px] text-brand-stone leading-relaxed flex items-start">
                            <span className="h-1 w-1 rounded-full bg-brand-gold mt-1.5 mr-2 shrink-0" />
                            {req}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="shrink-0">
                      <Button
                        variant="secondary"
                        onClick={() => handleApply(job.title)}
                        icon={<ArrowRight size={13} />}
                      >
                        Initiate Application
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Application form */}
      <section className="max-w-3xl mx-auto px-4 py-16 md:py-24" id="career-application-form">
        <ScrollReveal direction="up">
          <div className="bg-white p-8 md:p-10 border border-brand-stone/15 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-primary" />
            
            {isSubmitted ? (
              <div className="py-16 text-center space-y-4 animate-fade-in">
                <div className="inline-flex p-4 bg-emerald-50 text-emerald-600 rounded-full mb-2">
                  <CheckCircle size={44} />
                </div>
                <h3 className="font-serif text-2xl text-brand-charcoal font-bold">Proposal Delivered</h3>
                <p className="text-xs text-brand-stone max-w-md mx-auto leading-relaxed">
                  Your professional credentials and dossier have been transmitted safely to our Human Resource division. An coordinator will contact you if your portfolio matches our architectural covenants.
                </p>
                <div className="pt-4">
                  <Button variant="secondary" size="sm" onClick={() => setIsSubmitted(false)}>
                    Review Vacancies
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-brand-stone/10 pb-4">
                  <h3 className="font-serif text-xl md:text-2xl text-brand-charcoal font-bold">
                    Bespoke Guild Application
                  </h3>
                  <p className="text-[10px] text-brand-stone font-light mt-0.5">
                    Proposing for position: <span className="font-semibold text-brand-primary font-sans">{selectedJob}</span>
                  </p>
                </div>

                {/* Selected Job hidden update */}
                <div className="space-y-1.5">
                  <label htmlFor="job-selector" className="block text-[9px] font-mono uppercase tracking-wider text-brand-stone">
                    Desired Role Designation
                  </label>
                  <select
                    id="job-selector"
                    value={selectedJob}
                    onChange={(e) => setSelectedJob(e.target.value)}
                    className="w-full px-4 py-3 bg-brand-cream/35 border border-brand-stone/20 focus:border-brand-primary focus:outline-none text-xs rounded-none appearance-none"
                  >
                    <option>Senior Project Architect</option>
                    <option>Assistant Project Manager (Site Execution)</option>
                    <option>Customer Experience Executive (Concierge)</option>
                    <option>Bespoke Internship (Design / Civil)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="applicant-name" className="block text-[9px] font-mono uppercase tracking-wider text-brand-stone">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="applicant-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Architect Sarah Islam"
                      className="w-full px-4 py-3 bg-brand-cream/35 border border-brand-stone/20 focus:border-brand-primary focus:outline-none text-xs rounded-none"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="applicant-phone" className="block text-[9px] font-mono uppercase tracking-wider text-brand-stone">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="applicant-phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+880 18XXXXXXXX"
                      className="w-full px-4 py-3 bg-brand-cream/35 border border-brand-stone/20 focus:border-brand-primary focus:outline-none text-xs rounded-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="applicant-email" className="block text-[9px] font-mono uppercase tracking-wider text-brand-stone">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="applicant-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@islam.com"
                      className="w-full px-4 py-3 bg-brand-cream/35 border border-brand-stone/20 focus:border-brand-primary focus:outline-none text-xs rounded-none"
                    />
                  </div>

                  {/* Experience */}
                  <div className="space-y-1.5">
                    <label htmlFor="applicant-exp" className="block text-[9px] font-mono uppercase tracking-wider text-brand-stone">
                      Years of Experience *
                    </label>
                    <input
                      type="text"
                      id="applicant-exp"
                      required
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      placeholder="6 Years"
                      className="w-full px-4 py-3 bg-brand-cream/35 border border-brand-stone/20 focus:border-brand-primary focus:outline-none text-xs rounded-none"
                    />
                  </div>
                </div>

                {/* Portfolio URL */}
                <div className="space-y-1.5">
                  <label htmlFor="applicant-portfolio" className="block text-[9px] font-mono uppercase tracking-wider text-brand-stone">
                    Digital Portfolio / LinkedIn URL
                  </label>
                  <input
                    type="url"
                    id="applicant-portfolio"
                    value={formData.portfolioUrl}
                    onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                    placeholder="https://behance.net/sarahislam"
                    className="w-full px-4 py-3 bg-brand-cream/35 border border-brand-stone/20 focus:border-brand-primary focus:outline-none text-xs rounded-none"
                  />
                </div>

                {/* File Upload resume */}
                <div className="space-y-2">
                  <span className="block text-[9px] font-mono uppercase tracking-wider text-brand-stone">
                    Curriculum Vitae / Resume *
                  </span>
                  
                  {/* Drag and Drop style placeholder */}
                  <div className="border border-dashed border-brand-stone/30 bg-brand-cream/15 p-6 text-center space-y-3 relative group hover:border-brand-primary transition-colors">
                    <Upload size={22} className="mx-auto text-brand-stone group-hover:text-brand-primary transition-colors animate-pulse" />
                    
                    <div>
                      <p className="text-xs font-sans text-brand-charcoal font-semibold">
                        {resumeName ? `Active File: ${resumeName}` : 'Select PDF Resume'}
                      </p>
                      <p className="text-[10px] text-brand-stone/80 mt-1">
                        Drag and drop your dossier or click to explore filesystem (Max 10MB)
                      </p>
                    </div>

                    <input
                      type="file"
                      id="applicant-resume-file"
                      required={!resumeName}
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="pt-3">
                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    disabled={isSubmitting}
                    icon={<Send size={12} />}
                  >
                    {isSubmitting ? 'Transmitting Credentials...' : 'Submit Guild Application'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
