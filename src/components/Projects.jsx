import React, { useState } from 'react';
import { FolderGit2, Info } from 'lucide-react';
import { projects } from '../config/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 relative border-t border-slate-800/60"
      aria-label="Software Projects and Initiatives"
    >
      {/* Background Subtle Gradient */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-4">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>FEATURED SOFTWARE WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Software projects grounded in operational reality.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Explore ongoing system architectures, technical hypotheses, and production roadmaps across retail management, student accommodation, and educational record keeping.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-dark-900/80 px-4 py-2.5 rounded-xl border border-slate-800 shrink-0">
            <Info className="w-4 h-4 text-accent-emerald" />
            <span>Select any card for architectural specifications</span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

