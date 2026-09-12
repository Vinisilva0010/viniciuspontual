"use client";

import { useEffect, useRef } from "react";

const INK = "#14120f";
const RULE = "#d8d0b8";
const SIGNAL = "#b23a2f";

const AGENTS = ["Code review", "Bug triage", "Deps update", "On-call", "PR summary", "Docs sync"];

export default function AgentsGridCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0, height = 0;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width; height = rect.height;
      canvas!.width = width * dpr; canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const CYCLE_PER = 1400;

    function draw(now: number) {
      ctx!.clearRect(0, 0, width, height);
      const cols = 3;
      const rows = 2;
      const gap = 12;
      const cellW = (width - gap * (cols + 1)) / cols;
      const cellH = (height - gap * (rows + 1)) / rows;
      const active = Math.floor(now / CYCLE_PER) % AGENTS.length;
      const localT = (now % CYCLE_PER) / CYCLE_PER;

      AGENTS.forEach((label, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = gap + col * (cellW + gap);
        const y = gap + row * (cellH + gap);
        const isActive = i === active;

        ctx!.strokeStyle = isActive ? SIGNAL : RULE;
        ctx!.lineWidth = isActive ? 2 : 1;
        ctx!.strokeRect(x, y, cellW, cellH);

        if (isActive) {
          const alpha = Math.sin(localT * Math.PI) * 0.15;
          ctx!.fillStyle = `rgba(178, 58, 47, ${alpha})`;
          ctx!.fillRect(x, y, cellW, cellH);
        }

        ctx!.fillStyle = INK;
        ctx!.font = "600 14px Georgia, serif";
        ctx!.textAlign = "center";
        ctx!.textBaseline = "middle";
        ctx!.fillText(label, x + cellW / 2, y + cellH / 2);
      });

      raf = requestAnimationFrame(draw);
    }

    let raf = 0;
    if (reduceMotion) draw(0);
    else raf = requestAnimationFrame(draw);

    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver((entries) => {
        const visible = entries[0]?.isIntersecting;
        if (!visible && raf) { cancelAnimationFrame(raf); raf = 0; }
        else if (visible && !raf && !reduceMotion) raf = requestAnimationFrame(draw);
      }, { threshold: 0.1 });
      observer.observe(canvas);
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (raf) cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="Six agent types cycle: code review, bug triage, dependency updates, on-call, PR summaries, docs sync."
      style={{ width: "100%", height: "220px", display: "block" }}
    />
  );
}