import { VideoShowreel } from '../components/home/VideoShowreel';
import { HeroSlideshow } from '../components/home/HeroSlideshow';
import { StatsCounter } from '../components/home/StatsCounter';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { CTABanner } from '../components/home/CTABanner';
import { Testimonials } from '../components/home/Testimonials';
import { ContactSection } from '../components/home/ContactSection';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export function Home() {
  return (
    <div className="space-y-0" id="homepage-root">
      {/* 1. Video Showreel Section */}
      <VideoShowreel />

      {/* 2. Hero Slideshow Section */}
      <HeroSlideshow />

      {/* 3. Stats Counter Section */}
      <StatsCounter />

      {/* 4. Featured Projects Section */}
      <ScrollReveal direction="up">
        <FeaturedProjects />
      </ScrollReveal>

      {/* 5. CTA Landowner Partnership Section */}
      <ScrollReveal direction="up">
        <CTABanner />
      </ScrollReveal>

      {/* 6. Testimonials Slider Section */}
      <ScrollReveal direction="up">
        <Testimonials />
      </ScrollReveal>

      {/* 7. Contact Section */}
      <ScrollReveal direction="up">
        <ContactSection />
      </ScrollReveal>
    </div>
  );
}
