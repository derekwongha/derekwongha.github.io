function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Derek Wong · Developer portfolio</p>
          <h1 id="hero-title">Full-Stack Web Developer</h1>
          <p className="hero-lead">
            I build practical, user-focused web applications while transitioning into a career in full-stack development. My portfolio brings together React interfaces, Django APIs, relational data, and clearly documented project decisions.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#projects">View Projects</a>
            <a className="button button--secondary" href="https://github.com/derekwongha" target="_blank" rel="noreferrer">View GitHub</a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Development focus">
          <p>Development focus</p>
          <strong>Accessible interfaces</strong>
          <strong>Reliable APIs</strong>
          <strong>Clear data workflows</strong>
          <span>React · Django · MySQL</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
