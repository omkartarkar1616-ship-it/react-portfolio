const projects = [
  {
    title: "E-commerce experience",
    description:
      "A responsive storefront concept focused on simple product discovery and a smooth browsing experience.",
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    title: "Task manager",
    description:
      "A lightweight productivity app concept for organizing daily tasks and keeping important work in view.",
    technologies: ["React", "LocalStorage", "CSS"],
  },
  {
    title: "Weather dashboard",
    description:
      "A weather app concept that presents useful conditions in a clear layout across desktop and mobile.",
    technologies: ["React", "API", "Responsive UI"],
  },
];

function Projects() {
  return (
    <section className="section" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="section-kicker">02 / Selected work</p>
        <h2 id="projects-title">A few things I’ve been working on.</h2>
        <p>
          A selection of frontend projects exploring useful ideas, clear
          interfaces, and practical web technologies.
        </p>
      </div>
      <div className="projects-container">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className={`project-visual project-visual-${index + 1}`} aria-hidden="true">
              {index === 0 && (
                <div className="store-preview">
                  <div className="preview-topbar">
                    <span className="preview-brand">FORM &amp; FIELD</span>
                    <span>Shop&nbsp;&nbsp; About&nbsp;&nbsp; Bag (0)</span>
                  </div>
                  <div className="store-content">
                    <div>
                      <span className="preview-caption">MADE FOR EVERY DAY</span>
                      <strong>Less, but<br />better.</strong>
                      <span className="preview-cta">Discover the collection ↗</span>
                    </div>
                    <div className="product-shape">
                      <span />
                    </div>
                  </div>
                </div>
              )}
              {index === 1 && (
                <div className="tasks-preview">
                  <div className="tasks-heading">
                    <span>Today</span>
                    <span className="tasks-date">MON, OCT 05</span>
                  </div>
                  <div className="task-row"><span className="task-check">✓</span><span>Review project notes</span></div>
                  <div className="task-row"><span className="task-check task-check-empty" /><span>Update portfolio</span><span className="task-priority">HIGH</span></div>
                  <div className="task-row"><span className="task-check task-check-empty" /><span>Plan the week</span></div>
                </div>
              )}
              {index === 2 && (
                <div className="weather-preview">
                  <div className="weather-place">
                    <span>GOOD AFTERNOON</span>
                    <strong>Mumbai, India</strong>
                  </div>
                  <div className="weather-reading">
                    <span className="weather-sun">☀</span>
                    <strong>28<span>°</span></strong>
                    <span>Mostly sunny</span>
                  </div>
                  <div className="weather-details"><span>Feels like <b>30°</b></span><span>Humidity <b>64%</b></span></div>
                </div>
              )}
            </div>
            <div className="project-topline">
              <span>PROJECT 0{index + 1}</span>
              <span className="project-icon" aria-hidden="true">
                ↗
              </span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech" aria-label="Technologies">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
