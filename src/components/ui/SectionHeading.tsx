interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = ''
}: SectionHeadingProps) {
  const alignment = {
    left: 'text-left',
    center: 'text-center mx-auto max-w-3xl',
    right: 'text-right'
  };

  return (
    <div className={`${alignment[align]} ${className} mb-12 md:mb-16`}>
      {tag && (
        <span className={`block font-mono text-[10px] uppercase tracking-[0.3em] mb-3 font-semibold ${dark ? 'text-brand-gold' : 'text-brand-primary'}`}>
          {tag}
        </span>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.15] ${dark ? 'text-brand-cream' : 'text-brand-charcoal'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-sm md:text-base leading-relaxed max-w-2xl font-light ${align === 'center' ? 'mx-auto' : ''} ${dark ? 'text-brand-sand/80' : 'text-brand-stone'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-[1px] w-16 mt-6 bg-brand-primary/40 ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}`} />
    </div>
  );
}
