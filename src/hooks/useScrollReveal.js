// Lightweight hook for scroll-triggered reveal state, for components that
// need raw { ref, isVisible } instead of the full <AnimatedSection> wrapper
// (e.g. custom layouts, staggered lists with per-item logic).
//
// Usage:
//   const { ref, isVisible } = useScrollReveal();
//   <div ref={ref} className={isVisible ? 'opacity-100' : 'opacity-0'} />
import { useInView } from 'react-intersection-observer';

export function useScrollReveal({ threshold = 0.15, triggerOnce = true, rootMargin = '0px' } = {}) {
  const [ref, isVisible, entry] = useInView({ threshold, triggerOnce, rootMargin });

  return { ref, isVisible, entry };
}