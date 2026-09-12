"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

interface SingleLiquidCardProps {
  code: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

function OptimizedLiquidCard({
  code,
  title,
  description,
  buttonText,
  href,
}: SingleLiquidCardProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rawCtx = canvas.getContext("2d");
    if (!rawCtx) return;

    const ctx: CanvasRenderingContext2D = rawCtx;

    const W = 360;
    const H = 220;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    let mouseX = W / 2;
    let mouseY = H / 2;
    let smoothX = W / 2;
    let smoothY = H / 2;
    let isHovered = false;
    let animId: number;

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * W;
      mouseY = ((e.clientY - rect.top) / rect.height) * H;
      isHovered = true;
    };

    const onPointerLeave = () => {
      isHovered = false;
    };

    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);

    let t = 0;

    function renderLoop() {
      t += 0.03;
      smoothX += (mouseX - smoothX) * 0.08;
      smoothY += (mouseY - smoothY) * 0.08;

      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, W, H);

      const pulse = Math.sin(t * 1.5) * 8;
      const radius = isHovered ? 130 + pulse : 85 + pulse;

      const grad = ctx.createRadialGradient(
        smoothX,
        smoothY,
        10,
        smoothX,
        smoothY,
        radius
      );

      grad.addColorStop(0, "rgba(70, 70, 70, 0.55)");
      grad.addColorStop(0.5, "rgba(35, 35, 35, 0.35)");
      grad.addColorStop(1, "rgba(10, 10, 10, 0)");

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(smoothX, smoothY, radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = isHovered
        ? "rgba(255, 255, 255, 0.18)"
        : "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(
        smoothX,
        smoothY,
        radius * 0.7 + Math.sin(t * 2) * 5,
        0,
        Math.PI * 1.5
      );
      ctx.stroke();

      animId = requestAnimationFrame(renderLoop);
    }

    animId = requestAnimationFrame(renderLoop);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "360px",
        height: "230px",
        borderRadius: "18px",
        overflow: "hidden",
        backgroundColor: "#050505",
        boxShadow:
          "0 14px 40px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.12)",
        margin: "0 auto",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          padding: "20px 22px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "#ffffff",
          pointerEvents: "none",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "monospace",
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "0.08em",
              color: "#a3a3a3",
              textTransform: "uppercase",
              marginBottom: "4px",
            }}
          >
            {code}
          </div>

          <h3
            style={{
              margin: 0,
              fontSize: "20px",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              textTransform: "uppercase",
              textShadow: "0 2px 10px rgba(0,0,0,0.8)",
              pointerEvents: "auto",
            }}
          >
            {title}
          </h3>

          <p
            style={{
              margin: "8px 0 0 0",
              fontSize: "13px",
              lineHeight: "1.4",
              fontWeight: 500,
              color: "#e5e5e5",
              textShadow: "0 1px 4px rgba(0,0,0,0.9)",
              pointerEvents: "auto",
            }}
          >
            {description}
          </p>
        </div>

        <Link
          href={href}
          style={{
            alignSelf: "flex-start",
            padding: "8px 14px",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: "10px",
            background: "rgba(255,255,255,0.08)",
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "12px",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            textDecoration: "none",
            cursor: "pointer",
            pointerEvents: "auto",
            display: "inline-block",
          }}
        >
          {buttonText} [›]
        </Link>
      </div>
    </div>
  );
}

export function AIKnowledgeSection() {
  const t = useTranslations("aiKnowledge");
  const locale = useLocale();

  const cards = [
    {
      code: t("cards.infra.code"),
      title: t("cards.infra.title"),
      description: t("cards.infra.description"),
      href: `/${locale}/projetos/agentes-ia`,
    },
    {
      code: t("cards.arch.code"),
      title: t("cards.arch.title"),
      description: t("cards.arch.description"),
      href: `/${locale}/projetos/agentes-ia/como-usar`,
    },
    {
      code: t("cards.agents.code"),
      title: t("cards.agents.title"),
      description: t("cards.agents.description"),
      href: `/${locale}/projetos/agentes-ia/agentes-uteis`,
    },
  ];

  return (
    <section className="w-full py-16 border-b-2 border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black mb-10 text-center uppercase">
          {t("sectionTitle")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {cards.map((card) => (
            <OptimizedLiquidCard
              key={card.code}
              code={card.code}
              title={card.title}
              description={card.description}
              buttonText={t("exploreButton")}
              href={card.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}