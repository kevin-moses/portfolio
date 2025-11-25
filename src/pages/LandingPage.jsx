import HydraBackground from '../components/HydraBackground';
import SitAnimation from '../components/SitAnimation';
import SubtitleRotator from '../components/SubtitleRotator';
import ProjectsSection from '../components/ProjectsSection';
import subtitles from '../data/subtitles';

function LandingPage() {
  const scrollToProjects = () => {
    const section = document.getElementById('projects-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="page-shell">
      <HydraBackground />
      <main className="page-shell__content">
        <section className="hero">
          <div className="hero__content">
            <div className="hero__copy">
              <p className="hero__eyebrow">Portfolio</p>
              <h1 className="hero__title">Kevin Moses</h1>
              <p className="hero__subtitle">
                <SubtitleRotator words={subtitles} />
              </p>
              <br />
            </div>
            <SitAnimation />
          </div>
          <button type="button" className="hero__scroll-cue" onClick={scrollToProjects}>
            <span>Project Rooms</span>
            <span aria-hidden="true" className="hero__scroll-arrow">↓</span>
          </button>
        </section>
        <ProjectsSection />
      </main>
    </div>
  );
}

export default LandingPage;

