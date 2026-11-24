// Digital product card — brand, price, name, "What it teaches → Who it's for → View product".
// Used by <DigitalProducts /> to render each Selar/Code with JS product.
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cardHover } from '../../animations/variants';

export default function ProductCard({ product, variants }) {
  return (
    <motion.div
      variants={variants}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="rounded-2xl border border-border bg-bg p-8"
    >
      <motion.div variants={cardHover}>
        <div className="flex items-start justify-between gap-4 mb-4">
          <span className="text-xs font-medium text-accent-soft uppercase tracking-wide">
            {product.brand}
          </span>
          {product.price && (
            <span className="text-sm font-semibold text-ink whitespace-nowrap">
              {product.price}
            </span>
          )}
        </div>

        <h3 className="font-display text-xl font-semibold text-ink mb-4">
          {product.name}
        </h3>

        <div className="space-y-3 mb-6">
          <div>
            <span className="text-xs font-semibold text-ink block mb-1">
              What it teaches
            </span>
            <p className="text-sm text-muted leading-relaxed">{product.whatItTeaches}</p>
          </div>
          <div>
            <span className="text-xs font-semibold text-ink block mb-1">
              Who it's for
            </span>
            <p className="text-sm text-muted leading-relaxed">{product.whoItsFor}</p>
          </div>
        </div>

        
          href={product.selarUrl || '#'}
          target={product.selarUrl ? '_blank' : undefined}
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent-soft transition-colors"
        >
          View product
          <ArrowUpRight size={16} />
        </a>
      </motion.div>
    </motion.div>
  );
}