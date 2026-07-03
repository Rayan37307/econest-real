import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'charcoal' | 'outline-white' | 'text';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children?: ReactNode;
  className?: string;
  onClick?: (e: any) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  id?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium uppercase tracking-wider transition-all duration-300 rounded-none focus:outline-none cursor-pointer';
  
  const variants = {
    primary: 'bg-brand-primary text-brand-cream hover:bg-brand-primary-dark',
    secondary: 'border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-cream',
    gold: 'bg-brand-gold text-brand-cream hover:bg-opacity-90 shadow-sm shadow-brand-gold/20',
    charcoal: 'bg-brand-charcoal text-brand-cream hover:bg-neutral-800',
    'outline-white': 'border border-white/40 text-white hover:bg-white hover:text-brand-charcoal hover:border-white',
    text: 'text-brand-primary hover:text-brand-primary-dark px-0 py-1 border-b border-brand-primary/30 hover:border-brand-primary'
  };

  const sizes = {
    sm: 'text-[11px] px-4 py-2',
    md: 'text-xs px-6 py-3.5',
    lg: 'text-xs px-8 py-4.5 font-semibold'
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-2 inline-flex">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2 inline-flex">{icon}</span>}
    </button>
  );
}
