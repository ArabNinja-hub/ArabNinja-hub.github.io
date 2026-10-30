import React from 'react';
import { personalInfo } from './config/portfolioData';

const Arrow = () => <span aria-hidden="true">↗</span>;

function SectionLabel({ number, children }) {
  return <div className="section-label"><span>{number} /</span><span>{children}</span></div>;
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header wrap">
        <a className="wordmark" href="#home" aria-label="Ronisher Bwalya, home"><span className="wordmark-symbol">r<span>.</span>b</span><span className="wordmark-name">Ronisher<br />Bwalya</span></a>
        <nav aria-label="Main navigation"><a href="#projects">Projects</a><a href="#about">About</a><a href="#contact">Contact <Arrow /></a></nav>
      </header>

      <main id="main-content">
        <section className="hero wrap" id="home">
          <div className="hero-top"><span>Independent developer <span className="slash">/</span> Zambia</span><span>Portfolio — 2026</span></div>
          <div className="hero-main">
            <div className="hero-heading"><p className="eyebrow"><span className="accent-mark">✳</span> Web developer &amp; technology entrepreneur</p><h1>Ronisher<br /><em>Bwalya</em><span className="period">.</span></h1></div>
            <div className="hero-side"><span className="side-index">01 — INTRODUCTION</span><p>I build practical digital products and explore technology-driven solutions to real-world problems.</p><a className="text-link" href="#projects">Explore selected work <span>↘</span></a></div>
          </div>
          <div className="hero-bottom"><span>Thoughtful ideas.<br />Practical applications.</span><span className="scroll-note">SCROLL TO EXPLORE <span>↓</span></span></div>
        </section>

        <section className="projects-section" id="projects">
          <div className="wrap">
            <SectionLabel number="01">Selected work</SectionLabel>
            <div className="section-intro"><h2>Ideas in<br /><em>progress.</em></h2><p>A selection of projects exploring everyday problems in business, accommodation and education.</p></div>
            <div className="project-list">
              <article className="project project-countup">
                <div className="project-visual countup-visual" aria-label="Abstract typographic artwork for CountUp"><div className="visual-meta"><span>BUSINESS MANAGEMENT</span><span>01 / 03</span></div><div className="countup-art" aria-hidden="true"><span className="count-line">count</span><span className="up-line">up<span className="count-dot">.</span></span><span className="count-plus">+</span></div><div className="visual-bottom"><span>MAKE THE NUMBERS COUNT</span><span>CU—01</span></div></div>
                <div className="project-copy"><div className="project-kicker"><span>01 / BUSINESS</span><span className="status">In development</span></div><h3>CountUp<span>.</span></h3><p>A small-business management application designed to help shop owners manage sales, inventory and customer credit records.</p><a className="text-link" href="https://github.com/ArabNinja-hub/CountUp" target="_blank" rel="noopener noreferrer">View repository <Arrow /></a></div>
              </article>
              <article className="project project-nestiq">
                <div className="project-visual nestiq-visual" aria-label="Abstract architectural artwork for Nestiq"><div className="visual-meta"><span>ACCOMMODATION</span><span>02 / 03</span></div><div className="nestiq-art" aria-hidden="true"><div className="arch arch-one"></div><div className="arch arch-two"></div><span>n.</span></div><div className="visual-bottom"><span>SPACE TO BELONG</span><span>N—02</span></div></div>
                <div className="project-copy"><div className="project-kicker"><span>02 / ACCOMMODATION</span><span className="status">In development</span></div><h3>Nestiq<span>.</span></h3><p>An accommodation marketplace concept designed to connect people looking for accommodation with property providers.</p><span className="project-note">Concept in development <span>↗</span></span></div>
              </article>
              <article className="project project-orqeli">
                <div className="project-visual orqeli-visual" aria-label="Abstract grid artwork for ORQELI"><div className="visual-meta"><span>EDUCATION TECHNOLOGY</span><span>03 / 03</span></div><div className="orqeli-art" aria-hidden="true"><span>O</span><span>R</span><span>Q</span><span>E</span><span>L</span><span>I</span></div><div className="visual-bottom"><span>LEARNING, CONSIDERED</span><span>O—03</span></div></div>
                <div className="project-copy"><div className="project-kicker"><span>03 / EDUCATION</span><span className="status">Research and development</span></div><h3>ORQELI<span>.</span></h3><p>An education technology concept focused on improving school administration and access to academic results.</p><span className="project-note">Research in progress <span>↗</span></span></div>
              </article>
            </div>
            <div className="work-end"><span>MORE TO COME</span><span>Always learning, always building. ↗</span></div>
          </div>
        </section>

        <section className="about-section wrap" id="about">
          <SectionLabel number="02">A little about me</SectionLabel>
          <div className="about-grid"><div><h2>Curious by<br /><em>nature.</em></h2><div className="about-stamp"><span>RB</span><small>INDEPENDENT<br />PERSPECTIVE</small></div></div><div className="about-copy"><p className="about-lead">I’m a Zambian web developer and technology entrepreneur interested in building practical digital products that address real-world problems.</p><p>My work focuses on web development, software architecture and the exploration of technology-driven solutions across education, business management and digital services.</p><p>As a student at Copperbelt University, I combine academic learning with independent product development, research and experimentation.</p><div className="about-location"><span>BASED IN</span><strong>Kitwe, Zambia</strong><span>STUDYING AT</span><strong>Copperbelt University</strong></div></div></div>
        </section>

        <section className="practice-section" id="skills"><div className="wrap"><SectionLabel number="03">Areas of interest</SectionLabel><div className="practice-grid"><div><h2>What I’m<br /><em>working on.</em></h2><p>From the first idea to the systems behind it, I’m interested in how useful things are made.</p></div><div className="practice-list">{['Frontend development', 'Backend development', 'Database design', 'Web application architecture', 'Product development', 'Technology research'].map((item, i) => <div key={item}><span>0{i + 1}</span><h3>{item}</h3><span>↗</span></div>)}</div></div></div></section>

        <section className="contact-section" id="contact"><div className="wrap"><SectionLabel number="04">Get in touch</SectionLabel><div className="contact-grid"><div><p className="eyebrow">HAVE A QUESTION OR AN IDEA?</p><h2>Let’s make<br /><em>contact.</em></h2></div><div className="contact-copy"><p>Interested in the work or want to start a conversation? Find me on GitHub.</p><a className="contact-link" href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer"><span>Visit my GitHub</span><Arrow /></a><span className="contact-handle">@ARABNINJA-HUB</span></div></div><footer><a href="#home" className="footer-brand">r<span>.</span>b</a><p>© {new Date().getFullYear()} Ronisher Bwalya<br /><span>Made with intention in Zambia.</span></p><a href="#home" className="back-top">BACK TO TOP ↑</a></footer></div></section>
      </main>
    </>
  );
}

export default App;
