function Contact() {
  return (
    <section className="section contact-section" aria-labelledby="contact-title">
      <div className="contact-panel">
        <div>
          <p className="section-kicker">05 / Contact</p>
          <h2 id="contact-title">Have a good one in mind?</h2>
          <p>
            I’m interested in new opportunities and thoughtful collaborations.
          </p>
          <p className="contact-email">
            <a href="mailto:omkartarkar1616@gmail.com">
              omkartarkar1616@gmail.com
            </a>
          </p>
        </div>
        <a
          className="button"
          href="mailto:omkartarkar1616@gmail.com?subject=Portfolio%20enquiry"
        >
          Say hello <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
