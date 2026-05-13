import { useEffect, useMemo, useState } from 'react';

const DISPLAY_MS = 3000;
const FADE_MS = 600;

function SubtitleRotator({ words }) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState('show');

  const maxLength = useMemo(
    () => Math.max(...words.map((w) => w.length)),
    [words],
  );

  useEffect(() => {
    setPhase('show');

    const fadeTimer = setTimeout(() => setPhase('fade'), DISPLAY_MS);
    const nextTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, DISPLAY_MS + FADE_MS);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(nextTimer);
    };
  }, [index, words.length]);

  const classNames = [
    'subtitle-word',
    phase === 'fade' ? 'subtitle-word--fade' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span
      className={classNames}
      style={{ minWidth: `${maxLength}ch` }}
      aria-live="polite"
      aria-atomic="true"
    >
      {words[index]}
    </span>
  );
}

export default SubtitleRotator;
