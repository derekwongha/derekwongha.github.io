function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Derek Wong · Developer portfolio</p>
          <h1 id="hero-title">Full-Stack Web Developer <span>Digital Solutions Professional</span></h1>
          <p className="hero-lead">
            A career-transitioning developer combining recent React, Django and MySQL project experience with more than 20 years in systems management, technical operations, process improvement and stakeholder coordination.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#projects">View Projects</a>
            <a className="button button--secondary" href="/resume/Derek_Wong_Resume_August_2026_public.pdf" target="_blank" rel="noreferrer">Download Resume</a>
            <a className="text-link" href="#contact">Contact Me</a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Development focus">
          <p>Career snapshot</p>
          <strong>Full-stack diploma completed</strong>
          <strong>Four published projects</strong>
          <strong>20+ years of technical operations</strong>
          <span>React · Django · MySQL</span>
          <small>Open to junior, contract, project-based and permanent opportunities.</small>
        </div>
      </div>
    </section>
  )
}

export default Hero
