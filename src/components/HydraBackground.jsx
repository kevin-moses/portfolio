import { useEffect, useRef } from 'react';

function HydraBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let hydraInstance;
    let isMounted = true;

    async function initHydra() {
      const { default: Hydra } = await import('hydra-synth');
      if (!isMounted || !canvasRef.current) {
        return;
      }

      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      hydraInstance = new Hydra({
        detectAudio: false,
        autoLoop: true,
        makeGlobal: false,
        canvas,
      });

      const s = hydraInstance.synth;

      s.speed = 0.67;

      s.voronoi(2, 0.5, 0.2).shift(0.5)
        .modulatePixelate(s.voronoi(1, 0.067), 12, 7)
        .scale(() => 1 + (Math.sin(s.time * 2.5) * 0.02)).rotate()
        .diff(s.voronoi(4).shift(0.67))
        .diff(s.osc(2, 0.15, 1.1).rotate())
        .brightness(0.67).contrast(1.5).saturate(1.5)
        .out(s.o0);
    }

    initHydra();

    function handleResize() {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }

    window.addEventListener('resize', handleResize);

    return () => {
      isMounted = false;
      window.removeEventListener('resize', handleResize);
      hydraInstance = null;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hydra-background"
      aria-hidden="true"
    />
  );
}

export default HydraBackground;

