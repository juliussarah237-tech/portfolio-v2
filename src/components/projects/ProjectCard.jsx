// Animated project card (lifts on hover) — thumbnail, category, title, tools.
// Used by <WebDevelopment /> in the project gallery grid. Clicking calls onClick,
// which the parent uses to open the ProjectCaseStudyPanel for this project.
import { motion } from 'framer-motion';
import { cardHover } from '../../animations/variants';

export default function ProjectCard({ project, onClick, variants }) {
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
        <div className="aspect-video bg-bg flex items-center justify-center text-muted text-sm border-b border-border">
          {/* TODO: swap for <img src={project.thumbnail} /> once screenshots are added */}
          {project.title} screenshot
        </div>
        <div className="p-6">
          <span className="text-xs font-medium text-accent-soft uppercase tracking-wide">
            {project.category}
          </span>
          <h3 className="font-display text-lg font-semibold text-ink mt-2 mb-3">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent-soft"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.button>
  );
}