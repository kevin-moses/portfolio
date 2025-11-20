import './App.css';
import HydraBackground from './components/HydraBackground';
import SitAnimation from './components/SitAnimation';
import SubtitleRotator from './components/SubtitleRotator';
import subtitles from './data/subtitles';

function App() {
  return (
    <main className="hero">
      <HydraBackground />
      <div className="hero__content">
        <div className="hero__copy">
          <p className="hero__eyebrow">Portfolio</p>
          <h1 className="hero__title">Kevin Moses</h1>
          <p className="hero__subtitle">
            <SubtitleRotator words={subtitles} />
          </p>
        </div>
        <SitAnimation />
      </div>
    </main>
  );
}

export default App;

