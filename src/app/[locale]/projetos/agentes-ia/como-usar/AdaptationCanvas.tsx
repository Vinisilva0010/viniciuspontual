"use client";

import { useEffect, useRef } from "react";

const INK = "#14120f";
const RULE = "#d8d0b8";
const SIGNAL = "#b23a2f";
const BG = "#fdf9eb";

const BLOCKS = [
  { label: "Tools", detail: "your CRM, API, database" },
  { label: "Model", detail: "Gemini, Claude, GPT..." },
  { label: "Approval", detail: "Slack, email, dashboard" },
  { label: "Instructions", detail: "role, tone, boundaries" },
];

export default function AdaptationCanvas() {
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
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const CYCLE = 8000;

    function draw(now: number) {
      ctx!.clearRect(0, 0, width, height);

      const cellW = width / BLOCKS.length;
      const cellH = 90;
      const y = (height - cellH) / 2;
      const active = Math.floor((now % CYCLE) / (CYCLE / BLOCKS.length));
      const progress = ((now % (CYCLE / BLOCKS.length)) / (CYCLE / BLOCKS.length));

      BLOCKS.forEach((b, i) => {
        const x = i * cellW + 12;
        const w = cellW - 24;
        const isActive = i === active;

        ctx!.strokeStyle = isActive ? SIGNAL : RULE;
        ctx!.lineWidth = isActive ? 2 : 1;
        ctx!.strokeRect(x, y, w, cellH);

        if (isActive) {
          ctx!.fillStyle = SIGNAL + "12";
          ctx!.fillRect(x, y, w, cellH);
          const sweep = w * Math.min(progress * 1.5, 1);
          ctx!.fillStyle = SIGNAL + "20";
          ctx!.fillRect(x, y, sweep, cellH);
        }

        ctx!.fillStyle = INK;
        ctx!.font = "600 15px Georgia, serif";
        ctx!.textAlign = "center";
        ctx!.fillText(b.label, x + w / 2, y + 34);

        ctx!.fillStyle = "#6b6552";
        ctx!.font = "12px Georgia, serif";
        wrapText(ctx!, b.detail, x + w / 2, y + 56, w - 16, 15);
      });

      raf = requestAnimationFrame(draw);
    }

    function wrapText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxW: number, lineH: number) {
      const words = text.split(" ");
      let line = "";
      let cy = y;
      for (const w of words) {
        const test = line ? line + " " + w : w;
        if (ctx.measureText(test).width > maxW && line) {
          ctx.fillText(line, x, cy);
          line = w;
          cy += lineH;
        } else {
          line = test;
        }
      }
      if (line) ctx.fillText(line, x, cy);
    }

    let raf = 0;
    if (reduceMotion) {
      draw(0);
    } else {
      raf = requestAnimationFrame(draw);
    }

    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver((entries) => {
        const visible = entries[0]?.isIntersecting;
        if (!visible && raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        } else if (visible && !raf && !reduceMotion) {
          raf = requestAnimationFrame(draw);
        }
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
      aria-label="Four adaptation points cycle one by one: tools, model, approval routing, and instructions."
      style={{ width: "100%", height: "180px", display: "block", background: BG }}
    />
  );
}