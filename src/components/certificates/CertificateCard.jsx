// Certificate thumbnail card — provider, course, year. Click calls onClick,
// which the parent uses to open the full credential in a Modal.
// Used by <Certifications /> in the certificate wall grid.
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { cardHover } from '../../animations/variants';

export default function CertificateCard({ certificate, onClick, variants }) {
  return (
    <motion.button
      variants={variants}
      initial="rest"
      whileHover="hover"
      animate="rest"
      onClick={onClick}
      className="text-left rounded-2xl border border-border bg-bg-soft overflow-hidden"
    >
      <motion.div variants={cardHover}>
        <div className="aspect-[4/3] bg-bg flex items-center justify-center text-muted border-b border-border">
          {/* TODO: swap for <img src={certificate.image} /> once scans/photos are added */}
          <Award size={32} className="text-accent-soft/60" />
        </div>
        <div className="p-5">
          <h3 className="font-display text-base font-semibold text-ink mb-1">
            {certificate.title}
          </h3>
          <p className="text-sm text-muted">{certificate.provider}</p>
          {certificate.year && (
            <p className="text-xs text-muted mt-1">{certificate.year}</p>
          )}
        </div>
      </motion.div>
    </motion.button>
  );
}