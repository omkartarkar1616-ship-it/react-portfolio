import { lazy, Suspense, useEffect, useRef, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));

function LazySection({ id, label, children }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || isVisible) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div id={id} ref={sectionRef} className="lazy-section" aria-label={label}>
      {isVisible ? (
        <Suspense fallback={<div className="section-loading" aria-hidden="true" />}>
          {children}
        </Suspense>
      ) : (
        <div className="section-loading" aria-hidden="true" />
      )}
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LazySection id="about" label="About me">
          <About />
        </LazySection>
        <LazySection id="projects" label="Selected projects">
          <Projects />
        </LazySection>
        <LazySection id="skills" label="Skills">
          <Skills />
        </LazySection>
        <LazySection id="resume" label="Resume">
          <Resume />
        </LazySection>
        <LazySection id="contact" label="Contact">
          <Contact />
        </LazySection>
      </main>
      <Footer />
    </>
  );
}

export default App;
