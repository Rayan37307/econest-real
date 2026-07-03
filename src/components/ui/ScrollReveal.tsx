import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number; // In ms
  duration?: number; // In ms
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  threshold?: number;
  className?: string;
  triggerOnce?: boolean;
  key?: any;
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 800,
  direction = 'up',
  threshold = 0.1,
  className = '',
  triggerOnce = true
}: ScrollRevealProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsIntersecting(false);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, triggerOnce]);

  const getTransitionStyles = () => {
    const delaySec = `${delay / 1000}s`;
    const durSec = `${duration / 1000}s`;
    
    let transform = 'translateY(0)';
    let initialTransform = 'translateY(0)';

    switch (direction) {
      case 'up':
        initialTransform = 'translateY(35px)';
        break;
      case 'down':
        initialTransform = 'translateY(-35px)';
        break;
      case 'left':
        initialTransform = 'translateX(35px)';
        break;
      case 'right':
        initialTransform = 'translateX(-35px)';
        break;
      case 'fade':
      default:
        initialTransform = 'none';
        break;
    }

    return {
      opacity: isIntersecting ? 1 : 0,
      transform: isIntersecting ? transform : initialTransform,
      transition: `opacity ${durSec} cubic-bezier(0.16, 1, 0.3, 1) ${delaySec}, transform ${durSec} cubic-bezier(0.16, 1, 0.3, 1) ${delaySec}`,
    };
  };

  return (
    <div
      ref={ref}
      style={getTransitionStyles()}
      className={className}
    >
      {children}
    </div>
  );
}
