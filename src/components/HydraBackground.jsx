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

      h.osc(0.4, 0.7, 0.9)
        .modulateRotate(h.noise(80, 4), 2)
        .kaleid(17)
        .rotate((Math.PI / 180) * 45, 0.5)
        .pixelate(80, 40)
        .modulateRotate(
          h.voronoi(3, 1),
          () => Math.sin(performance.now() * 0.001),
        )
        .colorama([0.005,0.33,0.66,1.0, 0.05, 0.01].fast(0.125))
        .brightness(-0.2)
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

