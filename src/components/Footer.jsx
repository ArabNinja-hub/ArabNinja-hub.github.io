import React from 'react';
import { ArrowUp } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { personalInfo, navigationLinks } from '../config/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand & Summary */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-dark-900 border border-slate-800 text-slate-200 font-mono text-sm font-bold">
                RB
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-xs font-mono text-emerald-400">
              {personalInfo.title}
            </p>

            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Building digital products, exploring ideas and turning real-world problems into practical technology solutions across Zambia and beyond.
            </p>

            <div className="text-xs font-mono text-slate-500">
              {personalInfo.location}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Site Navigation
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Public Profiles & Actions */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Verified Profiles
            </div>
            <div className="space-y-2 text-xs sm:text-sm">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <GithubIcon className="w-4 h-4 text-emerald-400" />
                <span>github.com/{personalInfo.githubUsername}</span>
              </a>
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-dark-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 hover:text-white transition-colors"
                aria-label="Back to top of page"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Closing Statement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          <div className="text-center sm:text-right text-slate-400">
            Engineered with React, Vite & Tailwind CSS. Designed for production performance and accessibility.
          </div>
        </div>
      </div>
    </footer>
  );
}
