import { useEffect, useRef, useState } from 'react';
import HydraBackground from '../components/HydraBackground';
import SitAnimation from '../components/SitAnimation';
import SubtitleRotator from '../components/SubtitleRotator';
import ProjectsSection from '../components/ProjectsSection';
import subtitles from '../data/subtitles';

function LandingPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const contactRef = useRef(null);

  const scrollToProjects = () => {
    const section = document.getElementById('projects-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    if (!isContactOpen) return undefined;
    const handleClick = (e) => {
      if (contactRef.current && !contactRef.current.contains(e.target)) {
        setIsContactOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isContactOpen]);

  return (
    <div className="page-shell">
      <HydraBackground />
      <main className="page-shell__content">
        <section className="hero">
          <div className="hero__content">
            <div className="hero__copy">
              <p className="hero__subtitle">
                <span className="hero__subtitle-line">
                  Kevin Moses is a <SubtitleRotator words={subtitles} />
                </span>
                <span className="hero__subtitle-line">
                  born and based in Brooklyn, New York.
                </span>
              </p>
            </div>
            <SitAnimation />
          </div>
          <div className="hero__actions">
            <button type="button" className="hero__action-btn" onClick={scrollToProjects}>
              <span>Projects</span>
              <span aria-hidden="true" className="hero__action-arrow">↓</span>
            </button>
            <div className="hero__contact" ref={contactRef}>
              <button
                type="button"
                className="hero__action-btn"
                onClick={() => setIsContactOpen((v) => !v)}
                aria-expanded={isContactOpen}
                aria-haspopup="true"
              >
                <span>Contact</span>
                <span aria-hidden="true" className="hero__action-arrow">@</span>
              </button>
              {isContactOpen && (
                <div className="hero__contact-menu" role="menu">
                  <div className="hero__contact-row">
                    <span className="hero__contact-label">email:</span>
                    <a href="mailto:kevinmoses107@gmail.com">kevinmoses107@gmail.com</a>
                  </div>
                  <div className="hero__contact-row">
                    <span className="hero__contact-label">linkedin:</span>
                    <a
                      href="https://www.linkedin.com/in/kevin-moses-444a7018b/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      https://www.linkedin.com/in/kevin-moses-444a7018b/
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        <ProjectsSection />
      </main>
    </div>
  );
}

export default LandingPage;

