// Expanded case-study content shown inside the shared <Modal> when a project
// is selected in <WebDevelopment />. Problem → Design → Development → Result,
// plus live site / repo links.
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCaseStudyPanel({ project }) {
  if (!project) return null;

  return (
    <div>
      <span className="text-xs font-medium text-accent-soft uppercase tracking-wide">
        {project.category}
      </span>
      <h3 className="font-display text-2xl font-semibold text-ink mt-2 mb-6">
        {project.title}
      </h3>

      <div className="space-y-5">
        <div>
          <h4 className="text-sm font-semibold text-ink mb-1">Problem</h4>
          <p className="text-sm text-muted leading-relaxed">{project.problem}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-ink mb-1">Design</h4>
          <p className="text-sm text-muted leading-relaxed">{project.design}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-ink mb-1">Development</h4>
          <p className="text-sm text-muted leading-relaxed">{project.development}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-ink mb-1">Result</h4>
          <p className="text-sm text-muted leading-relaxed">{project.result}</p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        {project.liveUrl && (
          
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent-soft transition-colors"
          >
            <ExternalLink size={16} /> Live site
          </a>
        )}
        {project.repoUrl && (
          
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent-soft transition-colors"
          >
            <Github size={16} /> Repository
          </a>
        )}
      </div>
    </div>
  );
}