function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="eyebrow">Portfolio / 2026</p>
        <h1 id="hero-title">
          Omkar
          <br />
          Tarkar<span>.</span>
        </h1>
        <p className="hero-role">Frontend developer &amp; creative problem solver</p>
        <p className="hero-copy">
          I create thoughtful, responsive web experiences with modern frontend
          tools and a focus on the details that make products feel great.
        </p>
        <div className="hero-actions">
          <a className="button" href="#projects">
            Explore my work <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="#contact">
            Get in touch <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <aside className="hero-card" aria-label="Portfolio introduction">
        <span className="card-index">Frontend / 01</span>
        <span className="monogram" aria-hidden="true">
          OT
        </span>
        <span className="card-location">
          <span className="status-dot" aria-hidden="true" />
          React · Web interface
        </span>
      </aside>
    </section>
  );
}

export default Hero;
