
"use client";

import { useEffect, useRef } from "react";

type NodeDef = { id: string; label: string; x: number; y: number };

const NODES: NodeDef[] = [
  { id: "user", label: "User", x: 0.06, y: 0.5 },
  { id: "agent", label: "Agent", x: 0.28, y: 0.5 },
  { id: "tools", label: "Tools (MCP)", x: 0.52, y: 0.5 },
  { id: "approval", label: "Human approval", x: 0.76, y: 0.5 },
  { id: "done", label: "Resolution", x: 0.96, y: 0.5 },
];

const INK = "#14120f";
const RULE = "#d8d0b8";
const SIGNAL = "#b23a2f";

type Step =
  | { type: "move"; from: number; to: number; duration: number }
  | { type: "pause"; at: number; duration: number; highlight?: boolean };

const STEPS: Step[] = [
  { type: "move", from: 0, to: 1, duration: 900 },
  { type: "move", from: 1, to: 2, duration: 900 },
  { type: "move", from: 2, to: 3, duration: 900 },
  { type: "pause", at: 3, duration: 1500, highlight: true },
  { type: "move", from: 3, to: 4, duration: 900 },
  { type: "pause", at: 4, duration: 1300 },
];

const CYCLE = STEPS.reduce((sum, s) => sum + s.duration, 0);

function stateAt(elapsedMs: number) {
  let t = elapsedMs % CYCLE;
  for (const step of STEPS) {
    if (t < step.duration) return { step, progress: t / step.duration };
    t -= step.duration;
  }
  return { step: STEPS[STEPS.length - 1], progress: 1 };
}

export default function AgentFlowCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;

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

    function pos(n: NodeDef) {
      return { x: n.x * width, y: n.y * height };
    }

    function drawStatic() {
      ctx!.clearRect(0, 0, width, height);
      ctx!.strokeStyle = RULE;
      ctx!.lineWidth = 1.5;
      ctx!.beginPath();
      for (let i = 0; i < NODES.length - 1; i++) {
        const a = pos(NODES[i]);
        const b = pos(NODES[i + 1]);
        ctx!.moveTo(a.x, a.y);
        ctx!.lineTo(b.x, b.y);
      }
      ctx!.stroke();

      NODES.forEach((n) => {
        const p = pos(n);
        const isApproval = n.id === "approval";
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, isApproval ? 8 : 5, 0, Math.PI * 2);
        ctx!.fillStyle = isApproval ? SIGNAL : INK;
        ctx!.fill();

        ctx!.fillStyle = INK;
        ctx!.font = "13px Georgia, serif";
        ctx!.textAlign = "center";
        ctx!.fillText(n.label, p.x, p.y + 26);
      });
    }

    let raf = 0;
    let start = performance.now();

    function draw(now: number) {
      drawStatic();
      const elapsed = now - start;
      const { step, progress } = stateAt(elapsed);

      if (step.type === "move") {
        const a = pos(NODES[step.from]);
        const b = pos(NODES[step.to]);
        const x = a.x + (b.x - a.x) * progress;
        const y = a.y + (b.y - a.y) * progress;
        ctx!.beginPath();
        ctx!.arc(x, y, 4, 0, Math.PI * 2);
        ctx!.fillStyle = INK;
        ctx!.fill();
      } else if (step.highlight) {
        const p = pos(NODES[step.at]);
        const pulse = 10 + Math.sin(progress * Math.PI * 3) * 3;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, pulse, 0, Math.PI * 2);
        ctx!.strokeStyle = SIGNAL;
        ctx!.lineWidth = 2;
        ctx!.stroke();
      }

      raf = requestAnimationFrame(draw);
    }

    if (reduceMotion) {
      drawStatic();
    } else {
      raf = requestAnimationFrame(draw);
    }

    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries[0]?.isIntersecting;
          if (!visible && raf) {
            cancelAnimationFrame(raf);
            raf = 0;
          } else if (visible && !raf && !reduceMotion) {
            start = performance.now();
            raf = requestAnimationFrame(draw);
          }
        },
        { threshold: 0.1 }
      );
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
      aria-label="Diagram: a user message flows through the agent, calls a tool over MCP, pauses for human approval, then resolves."
      style={{ width: "100%", height: "220px", display: "block" }}
    />
  );
}
