"use client";

import { useState } from "react";

const C = {
  cream: "#fdf9eb",
  red: "#f8274a",
  pink: "#fa95a6",
  blush: "#fcf7f8",
  wine: "#570210",
};

type DemoState = "original" | "clone" | "reported";

const DEMOS: Record<
  DemoState,
  {
    label: string;
    title: string;
    body: string;
    badge: string;
    explorer: string;
  }
> = {
  original: {
    label: "Original",
    title: "Peça autenticada",
    body: "Amortecedor dianteiro · lote 001-A · fabricante verificado. Prova SUN válida. NFT emitido na Solana.",
    badge: "AUTÊNTICO",
    explorer: "https://explorer.solana.com/?cluster=devnet",
  },
  clone: {
    label: "QR / foto",
    title: "Não foi possível verificar",
    body: "Esse código é estático. QR e serial fotocopiado não passam no desafio do chip. Sem prova nova, sem peça.",
    badge: "FALHOU",
    explorer: "",
  },
  reported: {
    label: "Reportada",
    title: "Peça sob alerta",
    body: "Mesmo chip lido em dois lugares no mesmo dia. Histórico on-chain marcado. Não resgatar / não instalar.",
    badge: "ALERTA",
    explorer: "https://explorer.solana.com/?cluster=devnet",
  },
};

export default function Page() {
  const [state, setState] = useState<DemoState>("original");
  const demo = DEMOS[state];
  const ok = state === "original";
  const fail = state === "clone";

  return (
    <div style={{ background: C.cream, color: C.wine, minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,500;6..72,600&family=IBM+Plex+Sans:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        html, body { margin: 0; }
        a { color: inherit; }
        .wrap { max-width: 1120px; margin: 0 auto; padding: 0 24px; }
        .btn {
          display: inline-flex; align-items: center; gap: 8px;
          border: 0; cursor: pointer; text-decoration: none;
          font-family: "IBM Plex Sans", sans-serif; font-weight: 600;
          font-size: 14px; letter-spacing: 0.02em;
        }
        .btn-main { background: ${C.wine}; color: ${C.cream}; padding: 14px 22px; }
        .btn-ghost { background: transparent; color: ${C.wine}; padding: 14px 18px; border: 1px solid ${C.wine}33; }
        .chip {
          border: 1px solid ${C.wine}22; background: ${C.blush};
          font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 6px 10px; font-family: "IBM Plex Sans", sans-serif;
        }
        .tab {
          border: 1px solid ${C.wine}22; background: transparent; color: ${C.wine};
          padding: 10px 14px; cursor: pointer;
          font-family: "IBM Plex Sans", sans-serif; font-size: 13px; font-weight: 500;
        }
        .tab.on { background: ${C.wine}; color: ${C.cream}; border-color: ${C.wine}; }
        .grid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 48px; align-items: center; }
        @media (max-width: 860px) {
          .grid { grid-template-columns: 1fr; gap: 28px; }
          .hero-img { min-height: 280px !important; }
        }
      `}</style>

      <header
        style={{
          borderBottom: `1px solid ${C.wine}14`,
          position: "sticky",
          top: 0,
          background: C.cream,
          zIndex: 10,
        }}
      >
        <div
          className="wrap"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
          }}
        >
          <a href="#topo" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <img src="/autoorigem/logo.svg" alt="AutoOrigem" width={28} height={28} />
            <strong style={{ fontFamily: "IBM Plex Sans, sans-serif", fontSize: 14, letterSpacing: "0.12em" }}>
              AUTOORIGEM
            </strong>
          </a>
          <nav style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <a className="btn btn-ghost" href="#demo">
              Testar verificação
            </a>
            <a className="btn btn-ghost" href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main id="topo">
        <section className="wrap" style={{ padding: "72px 24px 32px" }}>
          <div className="grid">
            <div>
              <span className="chip">Peça física · prova on-chain</span>
              <h1
                style={{
                  fontFamily: "Newsreader, serif",
                  fontSize: "clamp(40px, 6vw, 68px)",
                  lineHeight: 0.95,
                  fontWeight: 500,
                  margin: "18px 0 16px",
                }}
              >
                A peça é original
                <br />
                ou é fotocópia.
              </h1>
              <p
                style={{
                  fontFamily: "IBM Plex Sans, sans-serif",
                  fontSize: 17,
                  lineHeight: 1.5,
                  maxWidth: 460,
                  margin: "0 0 28px",
                  opacity: 0.86,
                }}
              >
                Chip inclonável na autopeça. Tap no celular, sem app. Histórico público na Solana.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a className="btn btn-main" href="#demo">
                  Verificar uma peça
                </a>
                <a className="btn btn-ghost" href="#como">
                  Como funciona
                </a>
              </div>
            </div>

            <div
              className="hero-img"
              style={{
                background: C.blush,
                border: `1px solid ${C.wine}14`,
                minHeight: 420,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                src="/autoorigem/hero-peca.jpg"
                alt="Etiqueta na peça"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: 420 }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 16,
                  bottom: 16,
                  background: C.cream,
                  color: C.wine,
                  padding: "8px 10px",
                  fontFamily: "IBM Plex Sans, sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.08em",
                }}
              >
                NTAG 424 DNA · SUN
              </div>
            </div>
          </div>
        </section>

        <section id="como" className="wrap" style={{ padding: "28px 24px 8px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
            }}
          >
            {[
              ["01", "Cola na linha", "Etiqueta no ponto de embalagem. Cada unidade ganha uma chave."],
              ["02", "Emite o passaporte", "cNFT na Solana no mesmo instante. Fabricante, lote, peça."],
              ["03", "Tap no celular", "Browser abre sozinho. Autêntico, falso ou alerta."],
            ].map(([n, t, d]) => (
              <div key={n} style={{ borderTop: `2px solid ${C.wine}`, paddingTop: 16 }}>
                <div style={{ fontFamily: "IBM Plex Sans, sans-serif", fontSize: 12, opacity: 0.5 }}>{n}</div>
                <h3 style={{ fontFamily: "Newsreader, serif", fontSize: 26, margin: "8px 0" }}>{t}</h3>
                <p style={{ fontFamily: "IBM Plex Sans, sans-serif", fontSize: 14, lineHeight: 1.45, opacity: 0.8, margin: 0 }}>
                  {d}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="demo" className="wrap" style={{ padding: "64px 24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 16, flexWrap: "wrap" }}>
            <div>
              <span className="chip">Demo </span>
              <h2 style={{ fontFamily: "Newsreader, serif", fontSize: 42, margin: "12px 0 0" }}>
                Três toques. Três verdades.
              </h2>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              {(Object.keys(DEMOS) as DemoState[]).map((key) => (
                <button key={key} className={`tab ${state === key ? "on" : ""}`} onClick={() => setState(key)}>
                  {DEMOS[key].label}
                </button>
              ))}
            </div>
          </div>

          <div
            style={{
              marginTop: 24,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
              background: C.blush,
              border: `1px solid ${C.wine}14`,
              padding: 20,
            }}
          >
            <div style={{ background: "#111", minHeight: 280, position: "relative", overflow: "hidden" }}>
              <img
                src="/autoorigem/tap.jpg"
                alt="Celular encostando na peça"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: 280, opacity: 0.88 }}
              />
            </div>

            <div
              style={{
                background: ok ? C.cream : fail ? C.wine : "#3a0810",
                color: ok ? C.wine : C.cream,
                padding: 28,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 280,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "IBM Plex Sans, sans-serif",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    color: ok ? C.red : C.pink,
                    marginBottom: 10,
                  }}
                >
                  {demo.badge}
                </div>
                <h3 style={{ fontFamily: "Newsreader, serif", fontSize: 32, margin: "0 0 10px" }}>{demo.title}</h3>
                <p style={{ fontFamily: "IBM Plex Sans, sans-serif", fontSize: 15, lineHeight: 1.5, margin: 0, opacity: 0.9 }}>
                  {demo.body}
                </p>
              </div>
              {demo.explorer ? (
                <a
                  href={demo.explorer}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    marginTop: 20,
                    fontFamily: "IBM Plex Sans, sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    color: ok ? C.wine : C.cream,
                  }}
                >
                  Ver mint na Solana →
                </a>
              ) : (
                <span style={{ marginTop: 20, fontFamily: "IBM Plex Sans, sans-serif", fontSize: 13, opacity: 0.7 }}>
                  Sem mint. Não é chip.
                </span>
              )}
            </div>
          </div>
          <p style={{ fontFamily: "IBM Plex Sans, sans-serif", fontSize: 13, opacity: 0.55, marginTop: 12 }}>
            No vídeo: tap real na etiqueta. Aqui: o juiz simula o mesmo resultado sem ter o hardware.
          </p>
        </section>

        <section className="wrap" style={{ padding: "8px 24px 80px" }}>
          <div style={{ borderTop: `1px solid ${C.wine}22`, paddingTop: 28, maxWidth: 640 }}>
            <h2 style={{ fontFamily: "Newsreader, serif", fontSize: 32, margin: "0 0 12px" }}>Por que Solana</h2>
            <p style={{ fontFamily: "IBM Plex Sans, sans-serif", fontSize: 16, lineHeight: 1.55, margin: 0, opacity: 0.85 }}>
              Uma peça de reposição não aguenta taxa de mint cara. Compressed NFT deixa o passaporte digital caber no preço
              da autopeça. QR é foto. O chip gera prova nova a cada leitura.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}