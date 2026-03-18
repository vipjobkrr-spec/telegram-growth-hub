import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  opacity: number;
  speed: number;
  phase: number;
  drift: number;
  vx: number;
  vy: number;
}

const LINK_DISTANCE = 100;
const REPEL_RADIUS = 120;
const REPEL_FORCE = 8;
const RETURN_SPEED = 0.04;
const FRICTION = 0.92;

export const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);
  const mouse = useRef({ x: -9999, y: -9999 });

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
      particles.current = Array.from({ length: Math.min(count, 120) }, () => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        return {
          x, y, baseX: x, baseY: y,
          size: Math.random() * 1.8 + 0.4,
          opacity: Math.random() * 0.4 + 0.1,
          speed: Math.random() * 0.15 + 0.02,
          phase: Math.random() * Math.PI * 2,
          drift: (Math.random() - 0.5) * 0.3,
          vx: 0, vy: 0,
        };
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY + window.scrollY;
    };

    const onMouseLeave = () => {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    };

    let time = 0;
    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.008;

      const mx = mouse.current.x;
      const my = mouse.current.y;

      for (const p of particles.current) {
        // Repel from cursor
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < REPEL_RADIUS && dist > 0) {
          const force = (1 - dist / REPEL_RADIUS) * REPEL_FORCE;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // Return to base with drift
        const targetX = p.baseX + Math.sin(time + p.phase) * p.drift * 20;
        const targetY = p.baseY + Math.cos(time * 0.7 + p.phase) * p.drift * 12;
        p.vx += (targetX - p.x) * RETURN_SPEED;
        p.vy += (targetY - p.y) * RETURN_SPEED;

        p.vx *= FRICTION;
        p.vy *= FRICTION;
        p.x += p.vx;
        p.y += p.vy;

        const flicker = Math.sin(time * p.speed * 40 + p.phase) * 0.3 + 0.7;
        const alpha = p.opacity * flicker;
        ctx.fillStyle = `rgba(33, 175, 224, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * flicker, 0, Math.PI * 2);
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    init();
    draw();

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    const ro = new ResizeObserver(resize);
    ro.observe(document.documentElement);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
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