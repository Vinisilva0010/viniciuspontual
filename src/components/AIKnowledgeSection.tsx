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
  const isEn = locale === "en";

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

  const carouselProjects = [
    {
      key: "review_harness",
      slug: "review-harness",
      githubUrl: "https://github.com/Vinisilva0010/review-harness.git",
      category: isEn ? "Agente Autônomo" : "Agente Autônomo",
      title: "review-harness",
      description: isEn
        ? "Coding AI agents write more code than any human can read line by line. Reading everything isn't scalable. Reading nothing is unsafe. This tool automatically audits every pull request so you only focus on code that actually requires human review."
        : "Agentes de IA para programação escrevem mais código do que uma pessoa consegue ler linha por linha. Ler tudo não é escalável. Não ler nada é inseguro. Essa ferramenta verifica automaticamente todas as solicitações de pull request, para que você possa se concentrar apenas nas solicitações que realmente precisam dela.",
    },

    {
      key: "trend_pullback",
      slug: "trend-pullback",
      githubUrl: "https://github.com/Vinisilva0010/trend-pullback",
      category: isEn ? "Quantitative Trading" : "Trading Quantitativo",
      title: "trend-pullback",
      description: isEn
        ? "A quantitative trading research and alert tool. Every setup is backtested on years of historical data before dispatching an alert, ensuring proven edge against baseline entries. Zero live exchange keys: strictly engineered for backtesting and paper trading."
        : "Ferramenta de pesquisa quantitativa e alertas de trading. Cada setup é testado em anos de histórico antes de emitir qualquer sinal, exigindo lucro em múltiplos períodos e superando a baseline de mercado. Sem chaves de exchange: 100% focado em validação e paper trading.",
    },
    {
      key: "agent_orchestration",
      slug: "orquestracao-agentes",
      githubUrl: "https://github.com/Vinisilva0010/agent-orchestrator",
      category: isEn ? "Autonomous Systems" : "Sistemas Autônomos",
      title: isEn ? "Agent Orchestrator" : "Orquestração de Agentes",
      description: isEn
        ? "A self-hosted workspace for human-agent collaboration with strict governance: mandatory human approval for irreversible actions, upfront token budget reservation, and an immutable hash-chained audit log. Phases 1-4 active."
        : "Espaço de trabalho auto-hospedado para colaboração entre humanos e agentes de IA com governança estrita: aprovação humana para ações irreversíveis, pré-reserva de custo de tokens e log de auditoria imutável encadeado por hash. Fases 1 a 4 ativas.",
    },
  ];

  return (
    <section className="w-full py-16 border-b-2 border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black mb-10 text-center uppercase">
          {t("sectionTitle")}
        </h2>

        {/* 3 Cards Líquidos Superiores */}
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

        {/* Carrossel de Projetos */}
        <div className="mt-16 pt-12 border-t-2 border-black/10">
          <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-black mb-8 uppercase">
            {isEn ? "Featured Projects" : "Projetos em Destaque"}
          </h3>

          <div className="flex overflow-x-auto pb-6 pt-2 snap-x snap-mandatory gap-4 -mx-6 px-6 sm:mx-0 sm:px-0">
            {carouselProjects.map((project) => (
              <article
                key={project.key}
                style={{
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  borderColor: "#262626",
                }}
                className="w-[82vw] shrink-0 snap-center border-2 p-5 sm:w-96 sm:p-6 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span
                    style={{ color: "#ffffff", opacity: 0.8 }}
                    className="text-xs font-black uppercase tracking-wider block"
                  >
                    // {project.category}
                  </span>

                  <h3
                    style={{ color: "#ffffff" }}
                    className="text-lg sm:text-2xl font-black leading-tight"
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{ color: "#ffffff", opacity: 0.9 }}
                    className="text-sm sm:text-base font-semibold leading-relaxed"
                  >
                    {project.description}
                  </p>
                </div>

                <div
                  style={{ borderColor: "#262626" }}
                  className="pt-6 mt-4 border-t flex items-center justify-between"
                >
                  <Link
                    href={`/${locale}/projetos/${project.slug}`}
                    style={{ color: "#ffffff" }}
                    className="text-xs sm:text-base font-black uppercase underline decoration-2 hover:opacity-80 transition-opacity"
                  >
                    {isEn ? "Read Case" : "Ver Projeto"}
                  </Link>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    style={{
                      backgroundColor: "#171717",
                      color: "#ffffff",
                      borderColor: "#404040",
                    }}
                    className="p-2 border rounded hover:border-white transition-colors flex items-center justify-center"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ width: "20px", height: "20px", fill: "#ffffff" }}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}