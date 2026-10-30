import React, { useState } from 'react';
import { MapPin, GraduationCap, Copy, Check, ExternalLink, MessageSquare, Terminal } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { personalInfo } from '../config/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.githubUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy URL', err);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative border-t border-slate-800/60"
      aria-label="Contact Information and Channels"
    >
      {/* Background Glow */}
      <div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>COMMUNICATION & CHANNELS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Connecting & Collaborating
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Interested in practical software solutions, product architecture, or collaboration on open technology initiatives.
          </p>
        </div>

        {/* Contact Channel Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Primary Channel: GitHub Profile Card */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-dark-900 border border-slate-800/90 shadow-xl shadow-black/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-white border border-slate-700">
                    <GithubIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                      Primary Public Channel
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      GitHub Platform
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                  Verified
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                GitHub is my primary public channel for technical collaboration, code reviews, issue discussions, and repository updates. You can inspect public repositories, follow development commits, and open issues or discussions for direct project dialogue.
              </p>

              {/* URL Display & Copy */}
              <div className="p-3.5 rounded-xl bg-dark-950 border border-slate-800 font-mono text-xs sm:text-sm text-slate-300 flex items-center justify-between gap-3 mb-6">
                <span className="truncate text-slate-400">
                  {personalInfo.githubUrl}
                </span>
                <button
                  type="button"
                  onClick={handleCopyUrl}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-accent-emerald"
                  aria-label="Copy GitHub profile URL to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-accent-emerald" />
                      <span className="text-accent-emerald">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Visit GitHub Button */}
            <div className="pt-2">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-accent-emerald hover:bg-emerald-400 text-dark-950 font-semibold text-sm transition-all shadow-lg shadow-emerald-950/50 hover:shadow-emerald-900/40"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Visit GitHub Profile @{personalInfo.githubUsername}</span>
                <ExternalLink className="w-4 h-4 opacity-70" />
              </a>
            </div>
          </div>

          {/* Secondary Details: Academic & Regional Presence */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-dark-900/80 border border-slate-800">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-800/80 text-emerald-400 border border-slate-700/80 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-slate-500 mb-1">
                    Geographic Base
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">
                    {personalInfo.location}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Centrally situated in Zambia's industrial and technological hub, combining university study with regional product experimentation.
                  </p>
                </div>
              </div>
            </div>

            {/* University Card */}
            <div className="p-6 rounded-2xl bg-dark-900/80 border border-slate-800">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-800/80 text-emerald-400 border border-slate-700/80 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-slate-500 mb-1">
                    Academic Base
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">
                    {personalInfo.institution}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Currently studying at Copperbelt University while independently developing web applications and exploring practical technology solutions in business management, accommodation and education.
                  </p>
                </div>
              </div>
            </div>

            {/* Inquiries Note Card */}
            <div className="p-5 rounded-2xl bg-dark-950 border border-slate-800/80 text-xs font-mono text-slate-400 leading-relaxed flex items-center gap-3">
              <Terminal className="w-5 h-5 text-accent-emerald shrink-0" />
              <span>
                Verified public contact is conducted via GitHub repositories and public discussion boards.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
