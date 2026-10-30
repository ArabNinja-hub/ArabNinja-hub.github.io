import React from 'react';
import { Wrench, CheckCircle, Rocket, Layers, Code, Database, Cpu, Terminal } from 'lucide-react';
import { skills } from '../config/portfolioData';

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-dark-900/40 relative border-t border-slate-800/60"
      aria-label="Technical Skills and Tooling"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-4">
            <Wrench className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Technical Stack & Engineering Tooling
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A factual overview of active production tools and emerging technologies currently being integrated into personal and academic software projects.
          </p>
        </div>

        {/* Two Separate Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Category 1: Currently Working With */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-dark-900 border border-slate-800/90 shadow-xl shadow-black/30">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-mono tracking-wide uppercase">
                    Currently Working With
                  </h3>
                  <p className="text-xs text-slate-400">
                    Active tools and frameworks powering current builds and experiments
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-dark-950 text-slate-400 border border-slate-800">
                {skills.currentlyWorkingWith.length} Technologies
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {skills.currentlyWorkingWith.map((skill) => (
                <div
                  key={skill.name}
                  className="p-3.5 rounded-xl bg-dark-950/80 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60 transition-all group"
                >
                  <div className="text-xs font-mono text-emerald-400/80 mb-0.5">
                    {skill.category}
                  </div>
                  <div className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/60 text-xs text-slate-400 leading-relaxed">
              Applied extensively in client UI construction with React & Vite, backend endpoints via Node.js/Express, and distributed version control on GitHub.
            </div>
          </div>

          {/* Category 2: Developing Experience With */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-dark-900 border border-slate-800/90 shadow-xl shadow-black/30">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-indigo-950/60 text-indigo-400 border border-indigo-800/40">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-mono tracking-wide uppercase">
                    Developing Experience With
                  </h3>
                  <p className="text-xs text-slate-400">
                    Emerging architectural tools under study and iterative adoption
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-dark-950 text-slate-400 border border-slate-800">
                {skills.developingExperienceWith.length} Areas
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.developingExperienceWith.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-xl bg-dark-950/80 border border-slate-800/80 hover:border-indigo-500/30 hover:bg-slate-900/60 transition-all group"
                >
                  <div className="text-xs font-mono text-indigo-400/80 mb-0.5">
                    {skill.category}
                  </div>
                  <div className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/60 text-xs text-slate-400 leading-relaxed">
              Targeted for upcoming database migrations, strictly typed schema definitions, and robust third-party system communications.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
