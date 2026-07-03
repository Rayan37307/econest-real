import { useRef, useEffect, useState } from 'react';
import { stats } from '../../data/stats';
import { useCountUp } from '../../hooks/useCountUp';
import { ScrollReveal } from '../ui/ScrollReveal';

export function StatsCounter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-brand-cream border-y border-brand-stone/15 py-16 md:py-24"
      id="stats-counter-section"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={100}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-brand-stone/20">
            {stats.map((stat, index) => {
              // Call useCountUp for each individual stat, passing target value
              const animatedValue = useCountUp(stat.value, 2000, isInView);
              
              return (
                <div
                  key={stat.id}
                  className={`flex flex-col items-center justify-center ${index > 1 ? 'pt-8 lg:pt-0' : ''} ${index === 1 ? 'pt-0' : ''} ${index > 0 ? 'lg:pt-0' : ''}`}
                >
                  <div className="flex items-baseline justify-center text-brand-primary">
                    <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                      {animatedValue}
                    </span>
                    {stat.suffix && (
                      <span className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-brand-gold ml-0.5">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <span className="mt-2 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-brand-stone font-medium">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
