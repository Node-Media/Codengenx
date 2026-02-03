import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const hoverStyles = hover
    ? 'hover:shadow-xl hover:scale-[1.02] transition-all duration-300'
    : '';

  return (
    <div
      className={`p-8 rounded-2xl bg-white shadow-sm border border-secondary-100 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
