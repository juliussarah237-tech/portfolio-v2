// Single proof-of-work card (e.g. "Power BI — Dashboard → Open") with icon,
// description, and external link. Used by <ProofOfWork />.
import { motion } from 'framer-motion';
import { ArrowUpRight, Award } from 'lucide-react';
import { cardHover } from '../../animations/variants';

export default function ProofCard({ icon: Icon, label, description, linkLabel, url, variants }) {
  const isInternalLink = url?.startsWith('#');
  const SafeIcon = Icon || Award;

  return (
    <motion.a
      href={url || '#'}
      target={isInternalLink || !url ? undefined : '_blank'}
      rel={isInternalLink || !url ? undefined : 'noreferrer'}
      variants={variants}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="block rounded-2xl border border-border bg-bg-soft p-7"
    >
      <motion.div variants={cardHover}>
        <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-accent/15 text-accent-soft mb-5">
          <SafeIcon size={22} />
        </div>
        <h3 className="font-display text-base font-semibold text-ink mb-2">{label}</h3>
        <p className="text-sm text-muted leading-relaxed mb-4">{description}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink">
          {linkLabel}
          <ArrowUpRight size={15} />
        </span>
      </motion.div>
    </motion.a>
  );
}