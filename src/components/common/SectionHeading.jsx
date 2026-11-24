// Consistent animated heading + optional eyebrow label + subtitle,
// used at the top of every major section (What I Do, Data Analytics, etc.)
import AnimatedSection from './AnimatedSection';

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <AnimatedSection className={`max-w-2xl mb-14 ${alignment}`}>
      {eyebrow && (
        <span className="inline-block text-sm font-medium tracking-wide text-accent-soft uppercase mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
