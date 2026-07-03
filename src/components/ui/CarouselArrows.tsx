import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselArrowsProps {
  onPrev: () => void;
  onNext: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
  dark?: boolean;
  className?: string;
}

export function CarouselArrows({
  onPrev,
  onNext,
  prevDisabled = false,
  nextDisabled = false,
  dark = false,
  className = ''
}: CarouselArrowsProps) {
  const btnStyles = `p-3 rounded-none border transition-all duration-300 flex items-center justify-center cursor-pointer ${
    dark
      ? 'border-white/20 text-white hover:bg-white hover:text-brand-charcoal disabled:opacity-30'
      : 'border-brand-primary/20 text-brand-primary hover:bg-brand-primary hover:text-brand-cream disabled:opacity-30'
  }`;

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <button
        onClick={onPrev}
        disabled={prevDisabled}
        className={btnStyles}
        aria-label="Previous slide"
      >
        <ChevronLeft size={18} strokeWidth={1.5} />
      </button>
      <button
        onClick={onNext}
        disabled={nextDisabled}
        className={btnStyles}
        aria-label="Next slide"
      >
        <ChevronRight size={18} strokeWidth={1.5} />
      </button>
    </div>
  );
}
