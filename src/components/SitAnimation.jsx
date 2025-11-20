import { useEffect, useState } from 'react';
import sitFrame0 from '../../assets/sit_0.png';
import sitFrame1 from '../../assets/sit_1.png';

const FRAMES = [sitFrame0, sitFrame1];
const FRAME_DURATION_MS = 700;

function SitAnimation() {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % FRAMES.length);
    }, FRAME_DURATION_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={FRAMES[frameIndex]}
      alt="Pixel art avatar animation"
      className="hero__image"
      width="364"
      height="262"
    />
  );
}

export default SitAnimation;

