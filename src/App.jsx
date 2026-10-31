import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Code2, Database, Layers3, Globe2, Lightbulb, Microscope } from 'lucide-react';
import Navbar from './components/Navbar';
import AbstractVisual from './components/AbstractVisual';
import ProjectModal from './components/ProjectModal';
import { personalInfo, projects } from './config/portfolioData';

const areas = [
  { icon: Code2, title: 'Frontend development', text: 'Responsive interfaces and thoughtful user experiences.' },
  { icon: Globe2, title: 'Backend development', text: 'Application logic, endpoints and connected services.' },
  { icon: Database, title: 'Database design', text: 'Organising data around the needs of a product.' },
  { icon: Layers3, title: 'Web application architecture', text: 'Connecting interfaces, logic and data into useful systems.' },
  { icon: Lightbulb, title: 'Product development', text: 'Exploring ideas and developing them into practical tools.' },
  { icon: Microscope, title: 'Technology research', text: 'Investigating possibilities, limitations and real-world context.' },
];

function SectionHeading({ label, title, description }) {
  return <div className="section-heading"><div className="section-label"><span />{label}</div><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

function ProjectArtwork({ id }) {
  if (id === 'countup') return <div className="project-art art-countup" aria-hidden="true"><div className="art-top"><span>BUSINESS MANAGEMENT</span><span>01 / 03</span></div><div className="countup-mark"><span className="mark-bars"><i /><i /><i /><i /></span><strong>Count<span>Up</span></strong><small>SALES / INVENTORY / CREDIT</small></div><div className="art-bottom"><span>PRODUCT CONCEPT</span><span>↗</span></div></div>;
  if (id === 'nestiq') return <div className="project-art art-nestiq" aria-hidden="true"><div className="art-top"><span>ACCOMMODATION</span><span>02 / 03</span></div><div className="nestiq-mark"><div className="nest-shape"><i /><i /><i /></div><strong>nestiq<span>.</span></strong></div><div className="art-bottom"><span>MARKETPLACE CONCEPT</span><span>↗</span></div></div>;
  return <div className="project-art art-orqeli" aria-hidden="true"><div className="art-top"><span>EDUCATION TECHNOLOGY</span><span>03 / 03</span></div><div className="orqeli-mark"><div className="orq-symbol"><i /><i /><i /><i /></div><strong>ORQELI</strong><small>EDUCATION / SYSTEMS</small></div><div className="art-bottom"><span>RESEARCH CONCEPT</span><span>↗</span></div></div>;
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); }), { rootMargin: '-30% 0px -60% 0px' });
    ['home', 'about', 'projects', 'skills', 'contact'].forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  return <div className="site-shell">
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <Navbar activeSection={activeSection} />
    <main id="main-content">
      <section className="hero" id="home"><div className="container hero-grid">
        <div className="hero-copy"><div className="hero-context"><span className="status-dot" /> INDEPENDENT DEVELOPER <span className="context-divider">/</span> KITWE, ZAMBIA</div><p className="intro-label">Hello, I’m</p><h1><span className="hero-name">Ronisher<br />Bwalya</span><span className="hero-period">.</span></h1><h2>Web Developer <span>&amp;</span><br className="title-break" /> Technology Entrepreneur</h2><p className="hero-description">Building digital products, exploring ideas and turning real-world problems into practical technology solutions.</p><div className="hero-actions"><a className="button button-primary" href="#projects">View projects <ArrowDown size={16} /></a><a className="button button-secondary" href="#contact">Get in touch <ArrowUpRight size={16} /></a></div><div className="hero-footnote"><span>STUDENT AT COPPERBELT UNIVERSITY</span><span>WEB DEVELOPMENT &amp; ARCHITECTURE</span></div></div>
        <div className="hero-visual"><div className="visual-caption"><span>THE WAY I THINK ABOUT SOFTWARE</span><span>01 / SYSTEMS</span></div><AbstractVisual /><p className="visual-note"><span>↳</span> A conceptual view of how the pieces connect.</p></div>
      </div></section>
      <section className="projects section" id="projects"><div className="container"><div className="section-top"><SectionHeading label="SELECTED WORK" title="Projects with a purpose." description="A closer look at ideas I’m developing across business, accommodation and education." /><span className="section-index">01 — 03 / PROJECTS</span></div><div className="project-list">{projects.map((project, i) => <article className={`project-row project-${project.id}`} key={project.id}><ProjectArtwork id={project.id} /><div className="project-info"><div className="project-meta"><span>0{i + 1} / {project.category}</span><span className="project-status"><i />{project.status}</span></div><h3>{project.id === 'orqeli' ? 'ORQELI' : project.title}</h3><p>{project.description}</p><div className="project-tags">{project.technologyStack.slice(0, 3).map(tech => <span key={tech}>{tech}</span>)}</div><div className="project-actions"><button className="project-link" onClick={() => setSelectedProject(project)}>Explore project <ArrowUpRight size={16} /></button>{project.repository.url && <a className="project-repo" href={project.repository.url} target="_blank" rel="noopener noreferrer">GitHub repository <ArrowUpRight size={14} /></a>}</div></div></article>)}</div></div></section>
      <section className="about section" id="about"><div className="container about-grid"><div><SectionHeading label="ABOUT ME" title="Building with context." description="A little about the person behind the projects." /><div className="about-caption"><span>RB / 01</span><span>LEARNING BY BUILDING</span></div></div><div className="about-content"><p className="about-lead">I’m a Zambian web developer and technology entrepreneur interested in building practical digital products that address real-world problems.</p><p>My work focuses on web development, software architecture and the exploration of technology-driven solutions across education, business management and digital services.</p><p>As a student at Copperbelt University, I combine academic learning with independent product development, research and experimentation.</p><div className="about-facts"><div><span>BASED IN</span><strong>Kitwe, Zambia</strong></div><div><span>STUDYING AT</span><strong>Copperbelt University</strong></div></div></div></div></section>
      <section className="skills section" id="skills"><div className="container"><div className="section-top"><SectionHeading label="AREAS OF INTEREST" title="From idea to architecture." description="The disciplines I explore when turning an idea into a working product." /><span className="section-index">06 / WORKING AREAS</span></div><div className="areas-grid">{areas.map(({ icon: Icon, title, text }, i) => <div className="area" key={title}><div className="area-icon"><Icon size={19} strokeWidth={1.5} /></div><div><span className="area-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p></div></div>)}</div><div className="tools-line"><span>WORKING WITH</span><p>HTML <i>/</i> CSS <i>/</i> JavaScript <i>/</i> React <i>/</i> Node.js <i>/</i> Express <i>/</i> Git</p></div></div></section>
      <section className="contact section" id="contact">
        <div className="container contact-inner">
          <div><SectionHeading label="GET IN TOUCH" title="Let’s start a conversation." description="Interested in the work or have an idea to discuss? Get in touch or find me online." /></div>
          <div className="contact-links" aria-label="Contact links">
            <a href="tel:+260962838581" className="contact-action"><span><small>CALL</small><strong>+260 962 838 581</strong></span><ArrowUpRight size={20} aria-hidden="true" /></a>
            <a href="https://wa.me/260962838581" target="_blank" rel="noopener noreferrer" className="contact-action"><span><small>WHATSAPP</small><strong>+260 962 838 581</strong></span><ArrowUpRight size={20} aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/in/ronisher-bwalya-30268a3aa?utm_source=share_via&amp;utm_content=profile&amp;utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="contact-action"><span><small>LINKEDIN</small><strong>Ronisher Bwalya</strong></span><ArrowUpRight size={20} aria-hidden="true" /></a>
            <a href="https://www.facebook.com/share/1Fv1rJi7JZ/" target="_blank" rel="noopener noreferrer" className="contact-action"><span><small>FACEBOOK</small><strong>Facebook profile</strong></span><ArrowUpRight size={20} aria-hidden="true" /></a>
            <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="contact-action"><span><small>GITHUB</small><strong>github.com/ArabNinja-hub</strong></span><ArrowUpRight size={20} aria-hidden="true" /></a>
          </div>
        </div>
      </section>
    </main><footer><div className="container footer-inner"><div><a className="footer-brand" href="#home"><span>RB</span> Ronisher Bwalya</a><p>Web Developer &amp; Technology Entrepreneur</p></div><div className="footer-links"><a href="#projects">Projects</a><a href="#about">About</a><a href="#contact">Contact</a><a href="#home">Back to top ↑</a></div><small>© {new Date().getFullYear()} Ronisher Bwalya · Kitwe, Zambia</small></div></footer>
    {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
  </div>;
}
