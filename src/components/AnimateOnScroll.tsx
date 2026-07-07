import { type ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

export function AnimateOnScroll({ children, className = '' }: { children: ReactNode; className?: string }) {
  const { ref, isInView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  );
}
