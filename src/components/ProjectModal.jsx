import React, { useEffect, useRef } from 'react';
import { X, Lock, FileText, CheckCircle2, FlaskConical, Cpu, AlertTriangle, ExternalLink, ArrowRight } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Focus trap and ESC key handling
  useEffect(() => {
    if (!project) return;

    // Save previous active element to restore focus when closing
    const previousActiveElement = document.activeElement;

    // Focus close button initially
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    // Lock body scroll
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Trap Tab key inside modal
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      if (previousActiveElement && previousActiveElement.focus) {
        previousActiveElement.focus();
      }
    };
  }, [project, onClose]);

  if (!project) return null;

  const isPublic = project.repository.type === 'public' && project.repository.url;
  const isPrivate = project.repository.type === 'private';
  const isWithheld = project.repository.type === 'withheld';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-dark-900 border border-slate-700/80 shadow-2xl shadow-black text-slate-100 focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-6 sm:px-8 border-b border-slate-800 bg-dark-950/95 backdrop-blur-md">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700/60">
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-dark-900 border border-slate-800 text-slate-300">
              <span
                className={`w-2 h-2 rounded-full ${
                  project.status === 'In Development' ? 'bg-amber-400' : 'bg-cyan-400'
                }`}
              />
              <span>{project.status}</span>
            </span>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-emerald"
            aria-label="Close project details modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Title & Tagline */}
          <div>
            <h2 id="modal-project-title" className="text-3xl font-extrabold text-white tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-slate-300 text-base leading-relaxed italic border-l-2 border-emerald-500 pl-3">
              "{project.description}"
            </p>
          </div>

          {/* Section: Problem Context */}
          <div className="space-y-3 p-5 rounded-xl bg-dark-950/70 border border-slate-800/80">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-accent-emerald" />
              <span>Real-World Problem Context</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.problemContext}
            </p>
          </div>

          {/* Section: Research Hypothesis */}
          <div className="space-y-3 p-5 rounded-xl bg-emerald-950/20 border border-emerald-800/40">
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <FlaskConical className="w-4 h-4 text-emerald-400" />
              <span>Research Hypothesis Under Exploration</span>
            </h3>
            <blockquote className="text-sm text-slate-200 leading-relaxed font-mono">
              "{project.researchHypothesis}"
            </blockquote>
          </div>

          {/* Section: Current Implementation */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-accent-emerald" />
              <span>Current Implementation State</span>
            </h3>
            <div className="p-4 rounded-xl bg-dark-950/90 border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed">
              {project.currentImplementation}
            </div>
          </div>

          {/* Section: Technology Stack */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Architectural & Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologyStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-800/90 text-slate-200 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Section: Planned Functionality Roadmap */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Planned Capabilities & Architecture Milestones
            </h3>
            <ul className="space-y-2.5">
              {project.plannedFunctionality.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: Repository Status */}
          <div className="p-5 rounded-xl bg-dark-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase text-slate-400 mb-1">
                Source Code Availability
              </div>
              <div className="text-sm font-semibold text-white">
                {isPublic && 'Public Open Source Repository'}
                {isPrivate && 'Private Repository (Proprietary Development)'}
                {isWithheld && 'Documentation & Architectural Finalization Phase'}
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {isPublic && 'Hosted on GitHub under ArabNinja-hub organization.'}
                {isPrivate && 'Local development build. Not currently accessible via public link.'}
                {isWithheld && 'Public repository link intentionally withheld until documentation is updated.'}
              </p>
            </div>

            <div>
              {isPublic && (
                <a
                  href={project.repository.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent-emerald hover:bg-emerald-400 text-dark-950 font-semibold text-xs transition-colors shadow-md shadow-emerald-950/40"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {isPrivate && (
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-dark-900 border border-amber-900/40 text-amber-300 text-xs font-mono">
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Private Codebase</span>
                </span>
              )}

              {isWithheld && (
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-dark-900 border border-cyan-900/40 text-cyan-300 text-xs font-mono">
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Specs In Progress</span>
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:px-8 bg-dark-950 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
