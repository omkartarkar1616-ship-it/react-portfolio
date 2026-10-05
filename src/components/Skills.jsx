const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Responsive design",
  "Accessibility",
  "Git",
  "GitHub",
  "REST APIs",
  "UI implementation",
];

function Skills() {
  return (
    <section className="section" aria-labelledby="skills-title">
      <div className="section-heading">
        <p className="section-kicker">03 / Toolkit</p>
        <h2 id="skills-title">Tools I use to bring ideas to life.</h2>
      </div>
      <div className="skills-container">
        {skills.map((skill) => (
          <span className="skill" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
