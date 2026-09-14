"use client";

import { useEffect, useRef } from "react";

export default function ProcessWave() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let visible = true;
    let width = 0;
    let height = 0;
    let phase = 0;
    let last = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      ["#00bbdf", "#0866ff", "#7138ff", "#f52c9c", "#ff965e"].forEach((color, i) => gradient.addColorStop(i / 4, color));
      ctx.strokeStyle = gradient;
      ctx.fillStyle = gradient;
      for (let line = 0; line < 28; line++) {
        ctx.beginPath();
        ctx.lineWidth = line % 6 === 0 ? 1.4 : 0.7;
        ctx.globalAlpha = line % 6 === 0 ? 0.65 : 0.3;
        for (let x = 0; x <= width; x += 5) {
          const u = x / width;
          const y = height * (0.28 + 0.17 * u) +
            Math.sin(u * Math.PI * 3.2 + phase + line * 0.11) * height * 0.095 +
            Math.cos(u * Math.PI * 1.8 - phase * 0.6) * line * 2.4;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
          if (line % 4 === 0 && x % 35 === 0) ctx.fillRect(x, y + 14, 1.7, 1.7);
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    };
    const tick = (time: number) => {
      if (last) phase += Math.min(time - last, 50) * 0.00022;
      last = time;
      draw();
      frame = requestAnimationFrame(tick);
    };
    const sync = () => {
      cancelAnimationFrame(frame);
      last = 0;
      draw();
      if (visible && !motion.matches && !document.hidden) frame = requestAnimationFrame(tick);
    };
    const resize = new ResizeObserver(() => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sync();
    });
    resize.observe(canvas);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    observer.observe(canvas);
    motion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      observer.disconnect();
      motion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return <canvas ref={ref} className="process-wave-canvas" aria-hidden="true" />;
}
