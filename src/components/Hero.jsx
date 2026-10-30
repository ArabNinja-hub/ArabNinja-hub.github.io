import React from 'react';
import { ArrowDown, ArrowUpRight, Code2, Sparkles, MapPin, GraduationCap } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { personalInfo } from '../config/portfolioData';
import AbstractVisual from './AbstractVisual';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
      aria-label="Introduction & Overview"
    >
      {/* Background Decorative Ambient Glows */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Context Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
              <span className="text-slate-400">Undergraduate •</span>
              <span className="text-slate-200 font-medium">Copperbelt University</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-400">Kitwe, Zambia</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                RONISHER <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400">
                  BWALYA
                </span>
              </h1>

              {/* Sub-headline / Professional Title */}
              <div className="flex items-center gap-2 pt-1">
                <span className="text-lg sm:text-xl md:text-2xl font-semibold text-emerald-400 tracking-wide font-mono">
                  {personalInfo.title}
                </span>
              </div>
            </div>

            {/* Tagline / Mission */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl border-l-2 border-emerald-500/40 pl-4 py-1">
              "{personalInfo.tagline}"
            </p>

            {/* Quick Context Highlights */}
            <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span>Student at Copperbelt University</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Kitwe, Zambia</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-emerald-400" />
                <span>Web Development & Architecture</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent-emerald hover:bg-emerald-400 text-dark-950 font-semibold text-sm transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-0.5"
              >
                <span>Get In Touch</span>
              </a>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-dark-950/80 hover:bg-slate-900 text-slate-300 hover:text-white font-mono text-sm border border-slate-800 hover:border-slate-700 transition-all"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>github/ArabNinja-hub</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Right Column: Abstract Technical Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <AbstractVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
