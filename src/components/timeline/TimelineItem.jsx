// Single animated timeline node/step, used by <ExperienceTimeline />.
// Renders the dot-on-a-line marker plus title, period, and description for one step.
import { motion } from 'framer-motion';
import { staggerItem } from '../../animations/variants';

export default function TimelineItem({ title, period, description }) {
  return (
    <motion.div variants={staggerItem} className="relative pl-12">
      {/* Node */}
      <span className="absolute left-0 top-1 h-8 w-8 rounded-full bg-bg border-2 border-accent-soft flex items-center justify-center">
        <span className="h-2.5 w-2.5 rounded-full bg-accent-soft" />
      </span>

      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
          {period && (
            <span className="text-xs text-muted uppercase tracking-wide">{period}</span>
          )}
        </div>
        <p className="mt-2 text-sm text-muted leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}