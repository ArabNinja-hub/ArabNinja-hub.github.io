import React from 'react';
import { Lock, FileText, ArrowRight, Layers, Sparkles, AlertCircle } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function ProjectCard({ project, onOpenDetails }) {
  const isPublicRepo = project.repository.type === 'public' && project.repository.url;
  const isPrivateRepo = project.repository.type === 'private';
  const isWithheld = project.repository.type === 'withheld';

  return (
    <article
      className="group relative flex flex-col justify-between rounded-2xl bg-dark-900 border border-slate-800/90 hover:border-slate-700/90 shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Ambient hover light */}
      <div 
        className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/5 group-hover:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-500" 
        aria-hidden="true" 
      />

      <div className="p-6 sm:p-8 flex-1">
        {/* Top Badges: Category & Status */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-800/90 text-slate-300 border border-slate-700/60">
            {project.category}
          </span>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-dark-950 border border-slate-800">
            <span
              className={`w-2 h-2 rounded-full ${
                project.status === 'In Development'
                  ? 'bg-amber-400 animate-pulse'
                  : 'bg-cyan-400'
              }`}
            />
            <span className="text-slate-300">{project.status}</span>
          </div>
        </div>

        {/* Project Title */}
        <h3
          id={`project-title-${project.id}`}
          className="text-2xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors mb-3"
        >
          {project.title}
        </h3>

        {/* Short Verified Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-5">
          "{project.description}"
        </p>

        {/* Problem Context Snippet */}
        <div className="mb-6 p-4 rounded-xl bg-dark-950/70 border border-slate-800/80">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-accent-emerald" />
            <span>Problem Addressed</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
            {project.problemContext}
          </p>
        </div>

        {/* Technology Stack Tags */}
        <div className="space-y-2 mb-6">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
            Technology Stack
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.technologyStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/70 text-slate-300 border border-slate-700/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-6 sm:px-8 py-4 bg-dark-950/90 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
        {/* Case Study Details Modal Trigger */}
        <button
          type="button"
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-emerald hover:text-emerald-300 transition-colors focus:outline-none focus:underline"
          aria-haspopup="dialog"
          aria-label={`View detailed specifications for ${project.title}`}
        >
          <span>View Specifications & Case Study</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        {/* Repository State Action */}
        <div className="flex items-center">
          {isPublicRepo && (
            <a
              href={project.repository.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              aria-label={`View ${project.title} GitHub repository (opens in new tab)`}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Public Repo</span>
            </a>
          )}

          {isPrivateRepo && (
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 select-none"
              title="Source code is under proprietary active development"
            >
              <Lock className="w-3.5 h-3.5 text-amber-400/80" />
              <span>Private Repository</span>
            </span>
          )}

          {isWithheld && (
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 select-none"
              title="Documentation pending updates"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400/80" />
              <span>Docs Pending</span>
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
