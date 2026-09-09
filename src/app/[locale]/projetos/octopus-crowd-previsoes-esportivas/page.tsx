import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Octopus Crowd — Real-Time Sports Predictions & Oracle Merkle Proofs on Solana",
  description:
    "Skill-based fan prediction protocol utilizing TxLINE sports oracle SSE streams, Solana identity layer, and cryptographic Merkle proof verification.",
  keywords: [
    "Solana",
    "TxLINE Oracle",
    "Merkle Proofs",
    "Next.js 16",
    "Sports Prediction",
    "Server-Sent Events",
    "Neon Postgres",
    "Fan Engagement",
    "World Cup 2026",
  ],
  authors: [{ name: "Vinicius Pontual" }],
  openGraph: {
    title: "Octopus Crowd // Solana & TxLINE Live Prediction Engine",
    description:
      "Zero-stake fan engagement architecture turning live World Cup telemetry into cryptographically settled micro-challenges without regulatory sports betting liability.",
    type: "article",
    publishedTime: "2026-07-18T00:00:00.000Z",
    authors: ["Vinicius Pontual"],
  },
};

export default function OctopusCrowdProjectPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Octopus Crowd: Real-Time Sports Predictions via TxLINE Oracles and Solana Identity",
    description:
      "A real-time predictive fan protocol consuming TxLINE live SSE telemetry and settling challenges via on-chain Merkle proofs on Solana.",
    author: {
      "@type": "Person",
      name: "Vinicius Pontual",
      jobTitle: "Founder & Full-Stack Systems Engineer",
    },
    datePublished: "2026-07-18",
    dateModified: "2026-09-09",
    programmingLanguage: "TypeScript, Rust, SQL",
    runtimePlatform: "Solana Devnet, Node.js 22, Vercel, Neon Postgres",
    codeRepository: "https://github.com/Vinisilva0010/octopus-crowd",
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HEADER EDITORIAL / TÍTULO */}
      <header className="border-b-4 border-black pb-8 mb-12">
        <div className="flex flex-wrap items-center gap-3 font-mono text-sm uppercase tracking-widest text-neutral-600 mb-4">
          <span className="font-black text-black">[ RESEARCH REPORT // 04 ]</span>
          <span>•</span>
          <span>TXLINE ORACLES &amp; SOLANA</span>
          <span>•</span>
          <span>CONSUMER &amp; FAN EXPERIENCES</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[1.05] mb-6 text-black">
          Octopus Crowd: Real-Time World Cup Prediction Engine via Oracle Merkle Proofs
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-800 font-medium max-w-4xl leading-relaxed mb-6">
          Transforming passive second-screen sports consumption into provably fair micro-challenges settled on live telemetry streams, bypassing regulatory gambling traps through a zero-stake reputation model.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-neutral-200 font-mono text-sm text-neutral-600">
          <div>
            BY <span className="font-black text-black">VINICIUS PONTUAL</span> — SYSTEMS &amp; FULL-STACK ARCHITECT
          </div>
          <div>DEPLOYED: JUL 18, 2026 // TXLINE × SOLANA HACKATHON</div>
        </div>
      </header>

      {/* IMAGEM PRINCIPAL ABERTA */}
      <div className="w-full mb-16 border-4 border-black">
        <div className="relative w-full h-[360px] sm:h-[500px] lg:h-[620px] bg-neutral-950">
          <Image
            src="/projects/octopus-crowd.png"
            alt="Octopus Crowd Match Room Architecture and Real-Time Event Pipeline"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
        <div className="p-3 bg-neutral-100 font-mono text-xs text-neutral-700 border-t-2 border-black flex flex-wrap justify-between items-center gap-2">
          <span>FIG 1.0: LIVE TXLINE SSE STREAM → INGESTION WORKER → NEON POSTGRES → MERKLE SETTLEMENT</span>
          <span className="font-bold uppercase">[ ORACLE &amp; IDENTITY SPECIFICATION ]</span>
        </div>
      </div>

      {/* CORPO DO ARTIGO COM TOC LATERAL STICKY */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* COLUNA PRINCIPAL DE LEITURA */}
        <article className="lg:col-span-8 space-y-14 text-neutral-900 leading-relaxed text-lg sm:text-xl">
          
          {/* STATS EM LINHA */}
          <div className="flex flex-wrap gap-8 py-6 border-y-2 border-black font-mono">
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Latency Pipeline</span>
              <strong className="text-2xl font-black text-black">Sub-Second SSE</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Settlement Layer</span>
              <strong className="text-2xl font-black text-black">Merkle Oracle</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Capital At Risk</span>
              <strong className="text-2xl font-black text-black">$0 (Identity Only)</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Infra Overhead</span>
              <strong className="text-2xl font-black text-black">Serverless Node</strong>
            </div>
          </div>

          {/* SEÇÃO 01 */}
          <section id="the-problem" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              01. The Problem: Passive Second Screens &amp; Gambling Grey Zones
            </h2>
            <p>
              During major sporting events like the World Cup, over 80% of spectators consume the match with a mobile device in hand. However, current fan interaction remains completely passive: refreshing static scores on live-ticker apps, doomscrolling social timelines, and waiting for highlights.
            </p>
            <p>
              Existing Web3 solutions uniformly converge into the same pattern: <strong>sportsbooks</strong>. They demand that users deposit collateral, calculate odds spreads, and risk capital on binary outcomes. This creates two immediate systemic barriers:
            </p>
            <ul className="space-y-3 list-disc pl-6 font-medium text-base sm:text-lg">
              <li><strong>Regulatory Exclusion:</strong> Sportsbooks face aggressive geo-blocking, compliance red tape, and strict state licensing frameworks, excluding the majority of global retail fans.</li>
              <li><strong>High-Friction Onboarding:</strong> Forcing a user to purchase, bridge, and risk tokens just to engage with a live soccer match destroys consumer retention and viral loop mechanics.</li>
              <li><strong>Oracle Opacity:</strong> Centralized betting apps compute resolutions internally in private databases. Bettors must take match resolutions on pure faith without cryptographic proofs.</li>
            </ul>
          </section>

          {/* SEÇÃO 02 */}
          <section id="positioning" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              02. Strategic Positioning: Skill &amp; Cryptographic Proof vs. Betting
            </h2>
            <p>
              Octopus Crowd deliberately dissociates sports prediction from financial wagering. It operates strictly as a real-time, skill-based intuition game:
            </p>

            <div className="space-y-4 my-8 pl-6 border-l-4 border-black font-mono text-base sm:text-lg">
              <p>
                <strong className="text-black font-black uppercase block">// Non-Custodial Identity Layer</strong>
                The connected Solana wallet acts solely as an Ed25519 identity anchor. It signs session tokens and links global leaderboard streaks. It never deposits, holds, or risks user funds.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// Mathematical Verification (TxLINE Merkle Proofs)</strong>
                Resolutions are not asserted by an opaque server. Each resolved challenge fetches an immutable Merkle inclusion proof directly from TxLINE’s on-chain oracle endpoints, allowing any participant or auditor to verify that the underlying event occurred.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// The CrowdBrain Reputation Engine</strong>
                Instead of compiling a single numerical score, the engine computes specialized categorical reputation indices (Next Goal Accuracy, Cards, Corner Readings), establishing a verifiable record of fan intuition.
              </p>
            </div>

            <blockquote className="my-10 py-6 px-8 bg-neutral-100 border-l-8 border-black font-mono text-base sm:text-lg font-bold italic">
              “Octopus Crowd is not a sportsbook in disguise. It is a real-time engagement layer for sports media brands built on live, cryptographically verifiable telemetry.”
              <span className="block not-italic font-black text-xs uppercase mt-3 text-neutral-600">
                — Vinicius Pontual, Project Demonstration
              </span>
            </blockquote>
          </section>

          {/* SEÇÃO 03: VÍDEO DE DEMONSTRAÇÃO */}
          <section id="submission-video" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              03. Demonstration: Match Room &amp; Real-Time Execution
            </h2>
            <p className="text-base text-neutral-700">
              Live run illustrating real match telemetry consumption, automatic challenge initiation, instantaneous zero-intervention resolution, and Merkle verification:
            </p>

            {/* CONTAINER DO VÍDEO YOUTUBE */}
            <div className="w-full border-4 border-black bg-black">
              <div className="relative w-full aspect-video">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/t_7N52-kmdQ"
                  title="Octopus Crowd Architecture and Demonstration"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <div className="p-3 bg-neutral-100 font-mono text-xs text-neutral-700 border-t-2 border-black flex justify-between items-center">
                <span>TXLINE × SOLANA WORLD CUP HACKATHON // TECHNICAL SUBMISSION</span>
                <a
                  href="https://www.youtube.com/watch?v=t_7N52-kmdQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline uppercase"
                >
                  Direct YouTube Link [›]
                </a>
              </div>
            </div>
          </section>

          {/* SEÇÃO 04 */}
          <section id="architecture-pipeline" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              04. Pipeline Architecture: Ephemeral Ingestion &amp; Edge Sync
            </h2>
            <p>
              To maintain high throughput without incurring continuous infrastructure server costs, the pipeline decouples data consumption from frontend presentation:
            </p>

            <ul className="space-y-4 my-6 list-disc pl-6 font-medium">
              <li>
                <strong>TxLINE Live SSE Consumers:</strong> A dedicated Node 22 worker binds to TxLINE&apos;s Server-Sent Events stream (<code className="font-mono text-sm bg-neutral-200 px-1 py-0.5">/api/scores/stream</code>). It consumes event deltas including kickoffs, periodic ticks, yellow/red bookings, and confirmed goals.
              </li>
              <li>
                <strong>Ephemeral GitHub Actions Workers:</strong> Rather than paying for an always-on VPS, worker instances are orchestrated via GitHub Actions workflows triggered during active match schedules.
              </li>
              <li>
                <strong>Neon Serverless Postgres:</strong> Raw events are written immediately to Neon Postgres connection pools. When a goal event triggers, the worker resolves open challenges in an atomic SQL transaction and dispatches the next micro-challenge simultaneously.
              </li>
              <li>
                <strong>Next.js 16 Edge API Routes:</strong> Frontend clients consume normalized challenge state through lightweight API routes authenticated via Solana wallet signatures.
              </li>
            </ul>
          </section>

          {/* SEÇÃO 05 */}
          <section id="integrity-security" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              05. Front-Running Defense &amp; API Integrity
            </h2>
            <p>
              Micro-prediction games face exploitation from latency arbitrage and client-side clock tampering. Octopus Crowd enforces defensive guarantees:
            </p>
            <div className="space-y-3 font-mono text-sm border-t-2 border-black pt-4">
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">01 / Oracle Server Timestamp Locking:</strong> Prediction windows are validated strictly against the TxLINE server-emitted timestamp. Client system clocks are completely disregarded, eliminating local clock manipulation attacks.
              </div>
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">02 / Secret Token Isolation:</strong> Long-lived TxLINE authentication bearer tokens reside exclusively within backend environment variables; client web bundles never touch or expose upstream credentials.
              </div>
              <div className="py-2">
                <strong className="text-black uppercase">03 / Atomic Wallet Idempotency:</strong> Submissions enforce a unique constraint index on `(wallet_address, challenge_id)`. Race conditions designed to place divergent predictions across multiple tabs are dropped by Postgres unique constraints.
              </div>
            </div>
          </section>

          {/* SEÇÃO 06 */}
          <section id="tech-specs" className="space-y-6 pt-6 border-t-4 border-black">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              06. Specifications &amp; Live Deployment Endpoints
            </h2>
            <p className="text-base text-neutral-700">
              Technical artifacts and core dependencies utilized in the live build:
            </p>

            <div className="border-2 border-black overflow-x-auto">
              <table className="w-full text-left font-mono text-xs sm:text-sm">
                <thead className="bg-black text-white uppercase border-b-2 border-black">
                  <tr>
                    <th className="p-3">Component</th>
                    <th className="p-3">Specification / Endpoint</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-300 bg-white">
                  <tr>
                    <td className="p-3 font-bold">Telemetry Provider</td>
                    <td className="p-3 font-mono">TxLINE Live Oracle (Scores &amp; Odds SSE)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Proof Endpoint</td>
                    <td className="p-3 font-mono">GET /api/scores/stat-validation (Merkle Proof)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Runtime Stack</td>
                    <td className="p-3 font-mono">Next.js 16 App Router, Turbopack, Tailwind CSS 4</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Database Architecture</td>
                    <td className="p-3 font-mono">Neon Serverless Postgres (@neondatabase/serverless)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Test Coverage</td>
                    <td className="p-3 font-mono">Vitest unit suite validated on real goal payloads</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="font-mono text-xs sm:text-sm bg-neutral-100 border-2 border-black p-4 space-y-2 mt-4">
              <div><strong>REPOSITORY:</strong> <a href="https://github.com/Vinisilva0010/octopus-crowd" target="_blank" rel="noopener noreferrer" className="underline font-bold">github.com/Vinisilva0010/octopus-crowd</a></div>
              <div><strong>ENGINE TEST RUN:</strong> <code className="font-bold">pnpm --filter core exec vitest run</code></div>
              <div><strong>DEPLOYMENT PROFILE:</strong> Vercel (Web / Edge API) + GitHub Actions Scheduled Ingestion Worker</div>
            </div>
          </section>
        </article>

        {/* COLUNA LATERAL STICKY TOC */}
        <aside className="lg:col-span-4 sticky top-28 hidden lg:block border-l-4 border-black pl-8 font-mono">
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase font-black tracking-widest text-neutral-500 block mb-3">
                TABLE OF CONTENTS
              </span>
              <nav className="space-y-3 text-sm font-bold">
                <a href="#the-problem" className="block hover:underline text-black">
                  01. The Second-Screen Problem
                </a>
                <a href="#positioning" className="block hover:underline text-black">
                  02. Zero-Stake Positioning
                </a>
                <a href="#submission-video" className="block hover:underline text-black">
                  03. Demonstration Video
                </a>
                <a href="#architecture-pipeline" className="block hover:underline text-black">
                  04. Data Pipeline &amp; Ingestion
                </a>
                <a href="#integrity-security" className="block hover:underline text-black">
                  05. Front-Running Defense
                </a>
                <a href="#tech-specs" className="block hover:underline text-black">
                  06. Specifications &amp; Endpoints
                </a>
              </nav>
            </div>

            <div className="border-t-2 border-neutral-300 pt-6 space-y-3">
              <span className="text-xs uppercase font-black text-neutral-500 block">
                PROJECT ACTIONS
              </span>
              <a
                href="https://github.com/Vinisilva0010/octopus-crowd"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-black !text-white py-3 font-black text-xs uppercase hover:bg-neutral-800 transition-colors"
              >
                Inspect Source on GitHub [›]
              </a>
              <a
                href="https://www.youtube.com/watch?v=t_7N52-kmdQ"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center border-2 border-black py-2.5 font-black text-xs uppercase hover:bg-neutral-100 transition-colors"
              >
                Watch YouTube Demonstration
              </a>
            </div>
          </div>
        </aside>

      </div>

      {/* RODAPÉ EDITORIAL: 3 PROJETOS COM IMAGEM */}
      <section className="mt-24 pt-16 border-t-8 border-black">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 font-bold block mb-2">
              // ENGINEERING DOSSIERS
            </span>
            <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-black">
              Explore More Projects
            </h3>
          </div>
          <Link
            href="/"
            className="font-mono text-sm font-bold uppercase underline underline-offset-8 mt-4 sm:mt-0 hover:text-neutral-600"
          >
            All 13 Projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* PROJETO 1: CAMPUS POINTS */}
          <article className="space-y-4">
            <Link 
              href="/projetos/reputacao-academica-token-2022" 
              className="block w-full border-4 border-black group overflow-hidden"
            >
              <div className="relative w-full h-56 bg-neutral-950">
                <Image
                  src="/projects/academic-reputation.png"
                  alt="Campus Points Token-2022 Protocol"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase text-neutral-500 font-bold block">
                REPUTATION // TOKEN-2022 SOULBOUND
              </span>
              <h4 className="text-xl font-black uppercase leading-tight text-black hover:underline">
                <Link href="/projetos/reputacao-academica-token-2022">
                  Campus Points: Soulbound Merit on Solana
                </Link>
              </h4>
            </div>

            <div className="pt-2 border-t-2 border-neutral-200 flex justify-between items-center font-mono text-xs">
              <Link 
                href="/projetos/reputacao-academica-token-2022" 
                className="font-black uppercase underline hover:text-neutral-600"
              >
                Read Specification ›
              </Link>
              <span className="text-neutral-500 font-bold">SEP 2026</span>
            </div>
          </article>

          {/* PROJETO 2: SINAPSE PROTOCOL */}
          <article className="space-y-4">
            <Link 
              href="/projetos/ia-medica-federada-solana" 
              className="block w-full border-4 border-black group overflow-hidden"
            >
              <div className="relative w-full h-56 bg-neutral-950">
                <Image
                  src="/projects/medical-ai.png"
                  alt="Sinapse Protocol Medical AI"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase text-neutral-500 font-bold block">
                FEDERATED AI // ARCIUM MPC &amp; ANCHOR
              </span>
              <h4 className="text-xl font-black uppercase leading-tight text-black hover:underline">
                <Link href="/projetos/ia-medica-federada-solana">
                  Sinapse: Trustless Medical AI on Solana
                </Link>
              </h4>
            </div>

            <div className="pt-2 border-t-2 border-neutral-200 flex justify-between items-center font-mono text-xs">
              <Link 
                href="/projetos/ia-medica-federada-solana" 
                className="font-black uppercase underline hover:text-neutral-600"
              >
                Read Specification ›
              </Link>
              <span className="text-neutral-500 font-bold">SEP 2026</span>
            </div>
          </article>

          {/* PROJETO 3: STRATA PROTOCOL */}
          <article className="space-y-4">
            <Link 
              href="/projetos/protocolo-strata-tranches-solana" 
              className="block w-full border-4 border-black group overflow-hidden"
            >
              <div className="relative w-full h-56 bg-neutral-950">
                <Image
                  src="/projects/strata.png"
                  alt="STRATA Protocol Structured Credit"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase text-neutral-500 font-bold block">
                RWA // STRUCTURED CREDIT &amp; FIDC
              </span>
              <h4 className="text-xl font-black uppercase leading-tight text-black hover:underline">
                <Link href="/projetos/protocolo-strata-tranches-solana">
                  STRATA: FIDC Tranche Isolation on Solana
                </Link>
              </h4>
            </div>

            <div className="pt-2 border-t-2 border-neutral-200 flex justify-between items-center font-mono text-xs">
              <Link 
                href="/projetos/protocolo-strata-tranches-solana" 
                className="font-black uppercase underline hover:text-neutral-600"
              >
                Read Specification ›
              </Link>
              <span className="text-neutral-500 font-bold">MAY 2026</span>
            </div>
          </article>

        </div>
      </section>
    </div>
  );
}