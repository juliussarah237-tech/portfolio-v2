// 08 — Proof of Work: instead of claiming a skill ("I know Power BI"), link
// straight to evidence of it (dashboard, notebook, queries, repos, credentials).
//
// NOTE: proof cards are inlined here for now. Once
// src/components/proofofwork/ProofCard.jsx is built, this file should
// import and use it instead of the inline JSX below.
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  BarChart3,
  Code2,
  Database,
  Github,
  Award,
  Briefcase,
  ArrowUpRight,
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { staggerContainer, staggerItem, cardHover } from '../../animations/variants';
import { proofOfWork } from '../../data/proofOfWork';

// Maps the `icon` string stored in data/proofOfWork.js to the actual lucide component
const iconMap = {
  BarChart3,
  Code2,
  Database,
  Github,
  Award,
  Briefcase,
};

export default function ProofOfWork() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="proof-of-work" className="section-padding">
      <div className="section-container">
        <SectionHeading
          eyebrow="Proof of Work"
          title="Not a claim. Evidence."
          subtitle={'Instead of saying "I know Power BI" — here it is.'}
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {proofOfWork.map((item) => {
            const Icon = iconMap[item.icon] || Award;
            const isInternalLink = item.url?.startsWith('#');

            return (
              <motion.a
                key={item.id}
                href={item.url || '#'}
                target={isInternalLink || !item.url ? undefined : '_blank'}
                rel={isInternalLink || !item.url ? undefined : 'noreferrer'}
                variants={staggerItem}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="block rounded-2xl border border-border bg-bg-soft p-7"
              >
                <motion.div variants={cardHover}>
                  <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-accent/15 text-accent-soft mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-base font-semibold text-ink mb-2">
                    {item.label}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                    {item.linkLabel}
                    <ArrowUpRight size={15} />
                  </span>
                </motion.div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}