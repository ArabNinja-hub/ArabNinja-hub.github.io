import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { createPortal } from 'react-dom';
import useScrollLock from '../hooks/useScrollLock';
import { personalInfo, navigationLinks } from '../config/portfolioData';

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const targetRef = useRef(null);
  useScrollLock(open);

  useEffect(() => {
    if (!open) return undefined;
    closeRef.current?.focus();
    const keydown = (event) => {
      if (event.key === 'Escape') { event.preventDefault(); setOpen(false); }
      if (event.key !== 'Tab') return;
      const items = [...dialogRef.current.querySelectorAll('a[href], button:not([disabled])')];
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    const resize = () => { if (window.innerWidth >= 768) setOpen(false); };
    document.addEventListener('keydown', keydown);
    window.addEventListener('resize', resize);
    return () => {
      document.removeEventListener('keydown', keydown);
      window.removeEventListener('resize', resize);
      if (targetRef.current) {
        const target = targetRef.current;
        targetRef.current = null;
        requestAnimationFrame(() => { document.querySelector(target)?.scrollIntoView(); });
      } else if (window.innerWidth < 768) toggleRef.current?.focus({ preventScroll: true });
    };
  }, [open]);

  const navigate = (event, href) => {
    event.preventDefault();
    history.pushState(null, '', href);
    targetRef.current = href;
    setOpen(false);
  };

  return <>
    <header className="site-nav"><div className="nav-inner container">
      <a href="#home" className="nav-brand" aria-label="Ronisher Bwalya — home"><span className="nav-monogram">RB<span>.</span></span><span className="nav-name">Ronisher Bwalya<small>DEVELOPER &amp; ENTREPRENEUR</small></span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{navigationLinks.map(link => <a key={link.href} href={link.href} aria-current={activeSection === link.href.slice(1) ? 'location' : undefined}>{link.name}</a>)}<a className="desktop-github" href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15} /></a></nav>
      <button ref={toggleRef} className="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(true)}><Menu size={21} /><span>Menu</span></button>
    </div></header>
    {open && createPortal(<div className="mobile-overlay" ref={dialogRef} id="mobile-nav" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <div className="mobile-menu-head"><span className="nav-monogram">RB<span>.</span></span><span className="mobile-menu-title">Navigation</span><button ref={closeRef} type="button" className="menu-close" aria-label="Close navigation menu" onClick={() => setOpen(false)}><X size={22} /><span>Close</span></button></div>
      <nav className="mobile-links" aria-label="Mobile navigation links">{navigationLinks.map((link, i) => <a key={link.href} href={link.href} onClick={event => navigate(event, link.href)}><span className="mobile-index">0{i + 1}</span><span>{link.name}</span><span aria-hidden="true">↗</span></a>)}</nav>
      <div className="mobile-menu-footer"><span>RONISHER BWALYA · KITWE, ZAMBIA</span><a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>GitHub profile <ArrowUpRight size={16} /></a></div>
    </div>, document.body)}
  </>;
}
