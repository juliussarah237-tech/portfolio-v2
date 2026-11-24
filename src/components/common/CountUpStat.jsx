// Animated number counter — triggers when scrolled into view.
// Usage: <CountUpStat end={12} suffix="+" label="Projects shipped" />
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function CountUpStat({ end, prefix = '', suffix = '', label, duration = 2 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-3xl sm:text-4xl font-semibold text-ink">
        {prefix}
        {inView ? <CountUp end={end} duration={duration} /> : 0}
        {suffix}
      </div>
      {label && <p className="mt-1 text-sm text-muted">{label}</p>}
    </div>
  );
}
