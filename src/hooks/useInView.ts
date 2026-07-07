import { useEffect, useRef, useState } from 'react';

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          o.unobserve(el);
        }
      },
      { threshold: 0.1, ...options }
    );
    o.observe(el);
    return () => o.disconnect();
  }, []);

  return { ref, isInView };
}
