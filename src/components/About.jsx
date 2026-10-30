import React from 'react';
import { BookOpen, Lightbulb, Compass, Code, Building, School, Store } from 'lucide-react';
import { personalInfo } from '../config/portfolioData';

export default function About() {
  const focusAreas = [
    {
      icon: Store,
      title: "Small Business Management",
      description: "Addressing manual paper ledgers, informal retail record loss, and customer credit tracking through low-friction web interfaces."
    },
    {
      icon: Building,
      title: "Accommodation Discovery",
      description: "Investigating transparent, direct listing mechanisms for off-campus tertiary student housing in Zambia without middle-agent friction."
    },
    {
      icon: School,
      title: "Education Administration",
      description: "Formulating digital academic mark collation and report pipelines to reduce grade turnaround bottlenecks in African schools."
    }
  ];

  return (
    <section
      id="about"
      className="py-24 bg-dark-900/50 relative border-t border-slate-800/60"
      aria-label="About Ronisher Bwalya"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald" />
            <span>BACKGROUND & PERSPECTIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6">
            Combining academic computer science with independent software entrepreneurship.
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Developing practical software systems rooted in real-world African operational challenges.
          </p>
        </div>

        {/* Editorial Layout: Biography & Core Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Biography Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-dark-900 border border-slate-800/90 shadow-xl shadow-black/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2.5">
                <BookOpen className="w-5 h-5 text-accent-emerald" />
                <span>Biography</span>
              </h3>

              <div className="space-y-4 text-slate-300 leading-relaxed text-base">
                <p>
                  {personalInfo.biography}
                </p>
                <p className="text-slate-400 text-sm">
                  Based in Kitwe, Zambia, my focus is not on abstract prototypes for their own sake, but on testing whether targeted digital products can alleviate tangible friction points for small businesses, tertiary students, and learning institutions.
                </p>
              </div>

              {/* Factual Information Grid */}
              <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono">
                <div className="p-3 rounded-lg bg-dark-950/80 border border-slate-800">
                  <div className="text-slate-500 text-xs">ACADEMIC INSTITUTION</div>
                  <div className="text-slate-200 font-medium mt-0.5">{personalInfo.institution}</div>
                </div>
                <div className="p-3 rounded-lg bg-dark-950/80 border border-slate-800">
                  <div className="text-slate-500 text-xs">LOCATION & BASE</div>
                  <div className="text-slate-200 font-medium mt-0.5">{personalInfo.location}</div>
                </div>
                <div className="p-3 rounded-lg bg-dark-950/80 border border-slate-800">
                  <div className="text-slate-500 text-xs">AGE & TITLE</div>
                  <div className="text-slate-200 font-medium mt-0.5">{personalInfo.age} yrs • {personalInfo.title}</div>
                </div>
                <div className="p-3 rounded-lg bg-dark-950/80 border border-slate-800">
                  <div className="text-slate-500 text-xs">PRIMARY REPOSITORY HUB</div>
                  <div className="text-slate-200 font-medium mt-0.5">github.com/{personalInfo.githubUsername}</div>
                </div>
              </div>
            </div>

            {/* Principles of Engineering */}
            <div className="space-y-4 pt-2">
              <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2 font-mono">
                <Code className="w-4 h-4 text-accent-emerald" />
                <span>Working Principles</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {personalInfo.principles.map((principle, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-dark-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <div className="text-xs font-mono text-emerald-400 mb-1">0{index + 1}.</div>
                    <div className="text-sm font-semibold text-slate-200 mb-1.5">{principle.title}</div>
                    <div className="text-xs text-slate-400 leading-relaxed">{principle.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Problem Domains under Active Investigation */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-dark-900/80 border border-slate-800">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-accent-emerald" />
                <h3 className="text-lg font-bold text-slate-100">
                  Active Problem Domains
                </h3>
              </div>
              <p className="text-xs text-slate-400 mb-6">
                Direct areas of study where software development is applied to regional realities.
              </p>

              <div className="space-y-4">
                {focusAreas.map((area, idx) => {
                  const Icon = area.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-dark-950/80 border border-slate-800/80 hover:border-slate-700 transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-slate-800/70 text-emerald-400 border border-slate-700/60 shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-200 mb-1">
                            {area.title}
                          </div>
                          <div className="text-xs text-slate-400 leading-relaxed">
                            {area.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/80 text-xs font-mono text-slate-400 flex items-center justify-between">
                <span>Methodology</span>
                <span className="text-emerald-400">Research & Build Loops</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
