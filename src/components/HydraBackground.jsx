import { useEffect, useRef } from 'react';

const HYDRA_OPTIONS = {
  detectAudio: false,
  autoLoop: true,
  makeGlobal: false,
};

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

      hydraInstance = new Hydra({
        ...HYDRA_OPTIONS,
        canvas: canvasRef.current,
      });

      const h = hydraInstance.synth;

      h.osc(1, 1, 1.8)
        .modulateRotate(h.noise(40, 2), 2)
        .kaleid(17)
        .rotate((Math.PI / 180) * 45, 0.5)
        .pixelate(80, 20)
        .modulateRotate(
          h.voronoi(4, 2.5),
          () => Math.sin(performance.now() * 0.001),
        )
        .brightness(-0.6)
        .out(h.o0);
    }

    initHydra();

    return () => {
      isMounted = false;
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

