function About() {
  return (
    <section className="section" aria-labelledby="about-title">
      <div className="about-grid">
        <div className="about-copy">
          <div className="section-heading">
            <p className="section-kicker">01 / About</p>
            <h2 id="about-title">Building for people, one detail at a time.</h2>
          </div>
          <p>
            I’m Omkar, a frontend developer who enjoys turning ideas into
            clear, useful digital experiences. I care about clean interfaces,
            accessible interactions, and the craft behind reliable web apps.
          </p>
          <p>
            I’m continually learning and putting that knowledge into practice
            through projects with React, JavaScript, HTML, and CSS.
          </p>
        </div>
        <div className="about-note">
          <strong>What I value</strong>
          <span>
            Thoughtful design. Clear communication. Interfaces that work
            beautifully on every screen.
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;
