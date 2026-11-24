// Flagship Customer Churn Analysis case study, rendered inside <DataAnalytics />.
// Shows tools used, dashboard screenshot, key findings, business recommendations, GitHub link.
// This is the section that proves the "Turning raw data into decisions" pipeline in practice.
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem } from '../../animations/variants';

const tools = ['Python', 'Pandas', 'SQL', 'Machine Learning', 'Power BI'];

// TODO: replace with your real findings and recommendations from the project
const findings = [
  'Placeholder — e.g. customers on month-to-month contracts churn at a significantly higher rate than annual-contract customers.',
  'Placeholder — e.g. tenure under 6 months is the strongest single predictor of churn in the dataset.',
  'Placeholder — e.g. customers without add-on services (tech support, online security) churn more often.',
];

const recommendations = [
  'Placeholder — e.g. incentivize month-to-month customers to move to longer contracts with a loyalty discount.',
  'Placeholder — e.g. introduce a proactive outreach flow for customers in their first 6 months.',
  'Placeholder — e.g. bundle tech support into entry-tier plans to reduce early churn.',
];

export default function ChurnCaseStudy() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={staggerContainer(0.12)}
      className="mt-16 rounded-2xl border border-border bg-bg overflow-hidden"
    >
      {/* Header */}
      <motion.div variants={fadeUp} className="p-8 sm:p-10 border-b border-border">
        <span className="inline-block text-xs font-medium tracking-wide text-accent-soft uppercase mb-3">
          Flagship Project
        </span>
        <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink mb-4">
          Customer Churn Analysis
        </h3>
        <p className="text-muted text-sm sm:text-base leading-relaxed max-w-2xl">
          An end-to-end analysis identifying why customers leave and what the business
          can do about it — from raw, messy data through to a dashboard and a set of
          concrete recommendations.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="text-xs font-medium px-3 py-1.5 rounded-full bg-accent/10 text-accent-soft border border-accent/20"
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Dashboard screenshot */}
      <motion.div variants={fadeUp} className="px-8 sm:px-10 pt-8">
        <div className="rounded-xl border border-border bg-bg-soft aspect-video flex items-center justify-center text-muted text-sm">
          {/* TODO: replace with real dashboard screenshot */}
          {/* <img src="/src/assets/images/dashboards/churn-dashboard.jpg" alt="Customer Churn Power BI dashboard" className="rounded-xl w-full h-full object-cover" /> */}
          Power BI dashboard screenshot goes here
        </div>
      </motion.div>

      {/* Findings + Recommendations */}
      <div className="p-8 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div variants={staggerItem}>
          <h4 className="font-display text-lg font-semibold text-ink mb-4">
            Key Findings
          </h4>
          <ul className="space-y-3">
            {findings.map((f, i) => (
              <li key={i} className="text-sm text-muted leading-relaxed flex gap-3">
                <span className="text-accent-soft">•</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={staggerItem}>
          <h4 className="font-display text-lg font-semibold text-ink mb-4">
            Business Recommendations
          </h4>
          <ul className="space-y-3">
            {recommendations.map((r, i) => (
              <li key={i} className="text-sm text-muted leading-relaxed flex gap-3">
                <span className="text-accent-soft">•</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* GitHub link */}
      <motion.div variants={fadeUp} className="px-8 sm:px-10 pb-8 sm:pb-10">
        
          href="" /* TODO: add GitHub repo URL */
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent-soft transition-colors"
        >
          <Github size={18} />
          View full analysis on GitHub
          <ExternalLink size={14} />
        </a>
      </motion.div>
    </motion.div>
  );
}