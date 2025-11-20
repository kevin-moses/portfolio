import { useEffect, useState } from 'react';

const DISPLAY_MS = 3000;
const STRIKE_MS = 1000;
const FADE_MS = 400;

function SubtitleRotator({ words }) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState('show');

  useEffect(() => {
    setPhase('show');

    const strikeTimer = setTimeout(() => setPhase('strike'), DISPLAY_MS);
    const fadeTimer = setTimeout(() => setPhase('fade'), DISPLAY_MS + STRIKE_MS);
    const nextTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, DISPLAY_MS + STRIKE_MS + FADE_MS);

    return () => {
      clearTimeout(strikeTimer);
      clearTimeout(fadeTimer);
      clearTimeout(nextTimer);
    };
  }, [index, words.length]);

  const classNames = [
    'subtitle-word',
    phase === 'strike' ? 'subtitle-word--strike' : '',
    phase === 'fade' ? 'subtitle-word--fade' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classNames} aria-live="polite" aria-atomic="true">
      {words[index]}
    </span>
  );
}

export default SubtitleRotator;

