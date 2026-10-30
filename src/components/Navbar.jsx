import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { personalInfo, navigationLinks } from '../config/portfolioData';

export default function Navbar({ activeSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const toggleButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const previousActiveElement = useRef(null);

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle focus containment, ESC key, and focus restoration for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      previousActiveElement.current = document.activeElement;
      document.body.style.overflow = 'hidden';

      // Focus first link in mobile menu after mount
      const timer = setTimeout(() => {
        if (mobileMenuRef.current) {
          const firstFocusable = mobileMenuRef.current.querySelector('a, button, [tabindex]:not([tabindex="-1"])');
          if (firstFocusable) firstFocusable.focus();
        }
      }, 50);

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          setIsMobileMenuOpen(false);
          return;
        }

        if (e.key === 'Tab' && mobileMenuRef.current) {
          const focusableElements = mobileMenuRef.current.querySelectorAll(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements.length === 0) return;

          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (!mobileMenuRef.current.contains(document.activeElement)) {
            e.preventDefault();
            firstElement.focus();
            return;
          }

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
        clearTimeout(timer);
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
        if (previousActiveElement.current && previousActiveElement.current.focus) {
          previousActiveElement.current.focus();
        }
      };
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasScrolled
          ? 'bg-dark-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40'
          : 'bg-dark-950/40 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Monogram */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-100 hover:text-white transition-colors"
            aria-label="Ronisher Bwalya - Back to top"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-dark-900 border border-slate-800 group-hover:border-accent-emerald/50 transition-colors">
              <span className="font-mono text-sm font-semibold text-slate-200 group-hover:text-accent-emerald transition-colors">
                RB
              </span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-accent-emerald ring-2 ring-dark-950" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide text-slate-200">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest hidden sm:inline-block">
                Developer & Entrepreneur
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    isActive
                      ? 'text-accent-emerald bg-slate-900/80 border border-accent-emerald/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/40'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                </a>
              );
            })}

            {/* GitHub External Link */}
            <div className="ml-3 pl-3 border-l border-slate-800 flex items-center">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-all"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" aria-hidden="true" />
                <span className="hidden lg:inline text-xs font-mono">GitHub</span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" aria-hidden="true" />
            </a>
            <button
              ref={toggleButtonRef}
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900/80 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-accent-emerald"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          tabIndex={-1}
          className="fixed inset-0 top-16 sm:top-20 bg-dark-950/95 backdrop-blur-xl z-40 md:hidden flex flex-col justify-between border-t border-slate-800/80 animate-fade-in focus:outline-none"
        >
          <div className="px-6 py-8 space-y-4">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
              Navigation
            </div>
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'text-accent-emerald bg-slate-900 border border-accent-emerald/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="p-6 border-t border-slate-800/80 bg-dark-900/40">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm border border-slate-700 transition-colors"
            >
              <GithubIcon className="w-4 h-4" aria-hidden="true" />
              <span>Visit GitHub @{personalInfo.githubUsername}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />
            </a>
            <div className="mt-4 text-center text-xs font-mono text-slate-500">
              {personalInfo.location}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
