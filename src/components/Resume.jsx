function Resume() {
  return (
    <section className="section" aria-labelledby="resume-title">
      <div className="section-heading">
        <p className="section-kicker">04 / Background</p>
        <h2 id="resume-title">Experience, learning, and what’s next.</h2>
      </div>
      <div className="resume-card">
        <p className="resume-copy">
          <strong>Frontend development</strong>
          I’m building hands-on experience creating responsive web
          applications with React, JavaScript, HTML, and CSS. My resume is
          available on request.
        </p>
        <a className="button" href="#contact">
          Request my resume <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

export default Resume;
