import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  phase: number;
  drift: number;
}

export const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    const init = () => {
      resize();
      const count = Math.floor((canvas.width * canvas.height) / 18000);
      particles.current = Array.from({ length: Math.min(count, 120) }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.8 + 0.4,
        opacity: Math.random() * 0.4 + 0.1,
        speed: Math.random() * 0.15 + 0.02,
        phase: Math.random() * Math.PI * 2,
        drift: (Math.random() - 0.5) * 0.3,
      }));
    };

    let time = 0;
    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.008;

      for (const p of particles.current) {
        const flicker = Math.sin(time * p.speed * 40 + p.phase) * 0.3 + 0.7;
        const alpha = p.opacity * flicker;
        // Primary color: hsl(199, 74%, 51%) ≈ rgb(33, 175, 224)
        ctx.fillStyle = `rgba(33, 175, 224, ${alpha})`;
        ctx.beginPath();
        ctx.arc(
          p.x + Math.sin(time + p.phase) * p.drift * 20,
          p.y + Math.cos(time * 0.7 + p.phase) * p.drift * 12,
          p.size * flicker,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    init();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(document.documentElement);

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
};
