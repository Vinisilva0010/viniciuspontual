import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SmartFlow — Automated Smart Money Radar & Wallet Intelligence on Solana",
  description:
    "Automated onchain intelligence engine analyzing Birdeye OHLCV data and Helius RPC feeds to discover, score, and alert insider wallets hours before tokens trend.",
  keywords: [
    "Solana",
    "Smart Money",
    "Birdeye API",
    "Helius RPC",
    "Onchain Analytics",
    "Next.js 14",
    "Supabase",
    "Vercel Cron",
    "Wallet Tracking",
  ],
  authors: [{ name: "Vinicius Pontual" }],
  openGraph: {
    title: "SmartFlow // Solana Automated Smart Money Discovery Engine",
    description:
      "Mathematical wallet scoring, peak detection algorithms, and real-time trade monitoring built for the Birdeye BIP Sprint 4 hackathon.",
    type: "article",
    publishedTime: "2026-02-20T00:00:00.000Z",
    authors: ["Vinicius Pontual"],
  },
};

export default function SmartFlowProjectPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "SmartFlow: Automated Smart Money Discovery for Solana",
    description:
      "A serverless onchain intelligence engine cross-referencing Birdeye OHLCV metrics with Helius transaction logs to rank alpha wallets on Solana.",
    author: {
      "@type": "Person",
      name: "Vinicius Pontual",
      jobTitle: "Founder & Full-Stack Systems Engineer",
    },
    datePublished: "2026-02-20",
    dateModified: "2026-09-09",
    programmingLanguage: "TypeScript, SQL",
    runtimePlatform: "Next.js 14, Supabase Postgres, Vercel Serverless",
    codeRepository: "https://github.com/Vinisilva0010/smartflow",
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
          <span className="font-black text-black">[ RESEARCH REPORT // 05 ]</span>
          <span>•</span>
          <span>BIRDEYE BIP SPRINT 4</span>
          <span>•</span>
          <span>HELIUS RPC ENGINE</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[1.05] mb-6 text-black">
          SmartFlow: Automated Solana Smart Money Discovery &amp; Real-Time Trade Radar
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-800 font-medium max-w-4xl leading-relaxed mb-6">
          Systematically uncovering insider and high-conviction wallets hours prior to public volume peaks by cross-referencing historical OHLCV curves with RPC-level transaction graphs.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-neutral-200 font-mono text-sm text-neutral-600">
          <div>
            BY <span className="font-black text-black">VINICIUS PONTUAL</span> — SYSTEMS &amp; FULL-STACK ARCHITECT
          </div>
          <div>DEPLOYED: FEB 2026 // BIRDEYE × HELIUS DATA ENGINE</div>
        </div>
      </header>

      {/* IMAGEM PRINCIPAL ABERTA */}
      <div className="w-full mb-16 border-4 border-black">
        <div className="relative w-full h-[360px] sm:h-[500px] lg:h-[620px] bg-neutral-950">
          <Image
            src="/projects/smartflow.png"
            alt="SmartFlow Architecture Diagram and Wallet Intelligence Dashboard"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
        <div className="p-3 bg-neutral-100 font-mono text-xs text-neutral-700 border-t-2 border-black flex flex-wrap justify-between items-center gap-2">
          <span>FIG 1.0: CRON DISCOVERY PIPELINE → BIRDEYE OHLCV PEAK DETECTION → HELIUS LOG PARSING → SUPABASE SYNC</span>
          <span className="font-bold uppercase">[ ANALYTICS PIPELINE SPECIFICATION ]</span>
        </div>
      </div>

      {/* CORPO DO ARTIGO COM TOC LATERAL STICKY */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* COLUNA PRINCIPAL DE LEITURA */}
        <article className="lg:col-span-8 space-y-14 text-neutral-900 leading-relaxed text-lg sm:text-xl">
          
          {/* STATS EM LINHA */}
          <div className="flex flex-wrap gap-8 py-6 border-y-2 border-black font-mono">
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Discovery Cadence</span>
              <strong className="text-2xl font-black text-black">Every 2 Hours</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Trade Monitoring</span>
              <strong className="text-2xl font-black text-black">30s Intervals</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Infra Dependency</span>
              <strong className="text-2xl font-black text-black">Zero-Serverless</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Scoring Ceiling</span>
              <strong className="text-2xl font-black text-black">Elite (80+ Pts)</strong>
            </div>
          </div>

          {/* SEÇÃO 01 */}
          <section id="the-problem" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              01. The Problem: The Trending Trap in Decentralized Trading
            </h2>
            <p>
              In fast-moving Solana markets, retail market participants overwhelmingly rely on public trending sections on aggregators like Birdeye, DexScreener, and Photon. By the time a token breaches the trending dashboard, 80% to 90% of its initial upward impulse has already concluded. Retail buyers routinely serve as exit liquidity for early capital allocators.
            </p>
            <p>
              Manual attempts to discover "smart money" suffer from systemic flaws:
            </p>
            <ul className="space-y-3 list-disc pl-6 font-medium text-base sm:text-lg">
              <li><strong>Survivorship Bias:</strong> Social channels manually shill wallet addresses that hit a lucky 50x trade, ignoring dozens of subsequent rug pulls and zeroed balances.</li>
              <li><strong>Volume Curve Blindness:</strong> Identifying who holds a token at its peak does not reveal who actually accumulated hours earlier during zero-volume consolidation.</li>
              <li><strong>Granularity Bottlenecks:</strong> Standard indexers lack the continuous telemetry needed to parse granular transaction histories across thousands of distinct SPL mints.</li>
            </ul>
          </section>

          {/* SEÇÃO 02 */}
          <section id="discovery-engine" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              02. Algorithmic Pipeline: Multi-Stage Peak Detection
            </h2>
            <p>
              SmartFlow replaces qualitative speculation with a programmatic discovery cycle executed via Vercel Cron every 120 minutes:
            </p>

            <div className="space-y-4 my-8 pl-6 border-l-4 border-black font-mono text-base sm:text-lg">
              <p>
                <strong className="text-black font-black uppercase block">// Step 1: Trending Pool Harvesting</strong>
                Polls Birdeye&apos;s <code className="font-bold">/defi/token_trending</code> endpoint to assemble an active candidate pool of newly discovered tokens displaying elevated momentum.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// Step 2: OHLCV Historical Reconstruction</strong>
                Fetches raw candlestick data via <code className="font-bold">/defi/ohlcv</code>. The mathematical engine evaluates the historical price distribution, registers the exact millisecond of the parabolic volume peak, and marks the initial baseline entry price.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// Step 3: Holder Cross-Referencing &amp; Helius RPC Resolution</strong>
                Queries top holders via <code className="font-bold">/defi/v3/token/holder</code>. Because granular per-wallet block execution requires raw RPC traces, SmartFlow routes through Helius (<code className="font-bold">/v0/addresses/&#123;wallet&#125;/transactions</code>) to isolate exact swap executions occurring hours prior to the peak.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// Step 4: Verification &amp; Security Scoring</strong>
                Candidate trades are run against Birdeye&apos;s <code className="font-bold">/defi/token_security</code> endpoint, ensuring alerts filter out honeypots, mutable metadata exploits, and unverified mint authorities.
              </p>
            </div>

            <blockquote className="my-10 py-6 px-8 bg-neutral-100 border-l-8 border-black font-mono text-base sm:text-lg font-bold italic">
              “Most traders buy the narrative after the parabolic green candle forms. SmartFlow reconstructs the tape backwards: we pinpoint the precise volume top, identify who bought during total silence, and rank their statistical consistency over time.”
              <span className="block not-italic font-black text-xs uppercase mt-3 text-neutral-600">
                — Vinicius Pontual, Technical Dossier
              </span>
            </blockquote>
          </section>

          {/* SEÇÃO 03: DEMONSTRAÇÃO NO X */}
          <section id="social-proof" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              03. Public Verification: Announcement &amp; Demo on X
            </h2>
            <p className="text-base text-neutral-700">
              Technical release and live demonstration published on X (formerly Twitter) showcasing the automated discovery cycle, real-time security grading, and UI alert execution:
            </p>

            <div className="border-4 border-black p-6 bg-neutral-100 font-mono space-y-4">
              <div className="flex justify-between items-center border-b-2 border-black pb-3">
                <span className="text-xs uppercase font-black">X DISPATCH // @vini77pontual</span>
                <span className="text-xs bg-black !text-white px-2 py-0.5">STATUS ID: 2053876323127296230</span>
              </div>
              <p className="text-sm sm:text-base font-bold text-neutral-900 leading-normal">
                &ldquo;Automated smart money discovery for Solana. SmartFlow analyzes on-chain data to identify wallets that consistently buy tokens before they appear on trending lists, scores them by historical performance, and delivers real-time alerts.&rdquo;
              </p>
              <div className="pt-2">
                <a
                  href="https://x.com/vini77pontual/status/2053876323127296230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-black !text-white px-4 py-2 font-mono text-xs font-black uppercase hover:bg-neutral-800 transition-colors"
                >
                  View Live Dispatch on X [›]
                </a>
              </div>
            </div>
          </section>

          {/* SEÇÃO 04 */}
          <section id="scoring-model" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              04. Mathematical Scoring Model &amp; Performance Tiers
            </h2>
            <p>
              Rather than maintaining opaque subjective lists, SmartFlow scores wallets deterministically. Points accrue strictly based on verifiable onchain outcomes:
            </p>

            <div className="space-y-3 font-mono text-sm border-t-2 border-black pt-4">
              <div className="py-2 border-b border-neutral-300 flex justify-between">
                <span>Base Points per Validated Early Buy:</span>
                <strong className="text-black font-bold">+10 PTS</strong>
              </div>
              <div className="py-2 border-b border-neutral-300 flex justify-between">
                <span>Pre-Peak Lead Time Exceeding 3 Hours:</span>
                <strong className="text-black font-bold">+5 PTS</strong>
              </div>
              <div className="py-2 border-b border-neutral-300 flex justify-between">
                <span>Realized Return Exceeding +50%:</span>
                <strong className="text-black font-bold">+5 PTS</strong>
              </div>
              <div className="py-2 border-b border-neutral-300 flex justify-between">
                <span>Realized Return Exceeding +100%:</span>
                <strong className="text-black font-bold">+10 PTS</strong>
              </div>
              <div className="py-2 flex justify-between">
                <span>Diversification Multiplier (&gt;3 distinct tokens traded):</span>
                <strong className="text-black font-bold">+10 PTS</strong>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 font-mono text-xs">
              <div className="border-2 border-black p-3 bg-white">
                <span className="text-neutral-500 block uppercase">Weak Tier</span>
                <strong className="text-lg font-black block mt-1">0 - 24 PTS</strong>
              </div>
              <div className="border-2 border-black p-3 bg-white">
                <span className="text-neutral-500 block uppercase">Moderate Tier</span>
                <strong className="text-lg font-black block mt-1">25 - 49 PTS</strong>
              </div>
              <div className="border-2 border-black p-3 bg-white">
                <span className="text-neutral-500 block uppercase">Strong Tier</span>
                <strong className="text-lg font-black block mt-1">50 - 79 PTS</strong>
              </div>
              <div className="border-2 border-black p-3 bg-white">
                <span className="text-neutral-500 block uppercase">Elite Tier</span>
                <strong className="text-lg font-black block mt-1">80+ PTS</strong>
              </div>
            </div>
          </section>

          {/* SEÇÃO 05 */}
          <section id="infrastructure-design" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              05. Zero-Ops Serverless Architecture
            </h2>
            <p>
              SmartFlow avoids heavy, cost-prohibitive background worker infrastructure. The entire protocol runs inside an event-driven Next.js 14 stack:
            </p>
            <ul className="space-y-4 my-6 list-disc pl-6 font-medium">
              <li>
                <strong>Vercel Serverless Cron:</strong> Handled by <code className="font-mono text-sm bg-neutral-200 px-1 py-0.5">/api/cron/discovery</code> using a cryptographically random <code className="font-bold">CRON_SECRET</code> header verification to reject unauthenticated invocations.
              </li>
              <li>
                <strong>Supabase Relational State:</strong> State is structured across normalized tables (<code className="font-bold">smart_wallets</code>, <code className="font-bold">early_buys</code>, <code className="font-bold">wallet_alerts</code>) equipped with high-throughput b-tree indexing for instant leaderboard reads.
              </li>
              <li>
                <strong>Security Guardrails:</strong> Database service keys remain server-side; client interfaces query lightweight edge read replicas protected by row-level access control.
              </li>
            </ul>
          </section>

          {/* SEÇÃO 06 */}
          <section id="database-specs" className="space-y-6 pt-6 border-t-4 border-black">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              06. Schema &amp; Local Verification
            </h2>
            <p className="text-base text-neutral-700">
              Relational architecture deployed on Supabase Postgres:
            </p>

            <div className="border-2 border-black overflow-x-auto">
              <table className="w-full text-left font-mono text-xs sm:text-sm">
                <thead className="bg-black text-white uppercase border-b-2 border-black">
                  <tr>
                    <th className="p-3">Table Identifier</th>
                    <th className="p-3">Primary Key / Index</th>
                    <th className="p-3">Functional Responsibilities</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-300 bg-white">
                  <tr>
                    <td className="p-3 font-bold">smart_wallets</td>
                    <td className="p-3 font-mono">address (TEXT PK)</td>
                    <td className="p-3">Tracks cumulative score, total early buys, avg return %, and active status.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">early_buys</td>
                    <td className="p-3 font-mono">id (BIGSERIAL PK)</td>
                    <td className="p-3">Historical log of entry price, peak price, lead time in hours, and ROI %.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">wallet_alerts</td>
                    <td className="p-3 font-mono">id (BIGSERIAL PK)</td>
                    <td className="p-3">Real-time trade stream records with on-the-fly Birdeye token security ratings.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">trending_tokens</td>
                    <td className="p-3 font-mono">address (TEXT PK)</td>
                    <td className="p-3">Temporary buffer tracking OHLCV historical peaks and candidate tokens.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="font-mono text-xs sm:text-sm bg-neutral-100 border-2 border-black p-4 space-y-2 mt-4">
              <div><strong>API INTEGRATIONS:</strong> Birdeye Data API + Helius RPC Node API</div>
              <div><strong>DATABASE RUNTIME:</strong> Supabase (PostgreSQL 15+)</div>
              <div><strong>MANUAL TRIGGER:</strong> <code className="font-bold">curl -X POST http://localhost:3000/api/discovery/run</code></div>
              <div><strong>SOURCE:</strong> <a href="https://github.com/Vinisilva0010/smartflow" target="_blank" rel="noopener noreferrer" className="underline font-bold">github.com/Vinisilva0010/smartflow</a></div>
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
                  01. The Trending Trap
                </a>
                <a href="#discovery-engine" className="block hover:underline text-black">
                  02. Algorithmic Pipeline
                </a>
                <a href="#social-proof" className="block hover:underline text-black">
                  03. Demonstration on X
                </a>
                <a href="#scoring-model" className="block hover:underline text-black">
                  04. Mathematical Scoring
                </a>
                <a href="#infrastructure-design" className="block hover:underline text-black">
                  05. Zero-Ops Architecture
                </a>
                <a href="#database-specs" className="block hover:underline text-black">
                  06. Schema &amp; Endpoints
                </a>
              </nav>
            </div>

            <div className="border-t-2 border-neutral-300 pt-6 space-y-3">
              <span className="text-xs uppercase font-black text-neutral-500 block">
                PROJECT ACTIONS
              </span>
              <a
                href="https://x.com/vini77pontual/status/2053876323127296230"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-black !text-white py-3 font-black text-xs uppercase hover:bg-neutral-800 transition-colors"
              >
                Inspect Announcement on X [›]
              </a>
              <a
                href="https://github.com/Vinisilva0010/smartflow"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center border-2 border-black py-2.5 font-black text-xs uppercase hover:bg-neutral-100 transition-colors"
              >
                GitHub Source Repository
              </a>
            </div>
          </div>
        </aside>

      </div>

      {/* RODAPÉ EDITORIAL: 3 PROJETOS COM IMAGENS EXATAS */}
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
          
          {/* PROJETO 1: RWA AUTOPEÇAS */}
          <article className="space-y-4">
            <Link 
              href="/projetos/autenticacao-rwa-autopecas-solana" 
              className="block w-full border-4 border-black group overflow-hidden"
            >
              <div className="relative w-full h-56 bg-neutral-950">
                <Image
                  src="/projects/rwa-autoparts.png"
                  alt="RWA Automotive Parts Authentication"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase text-neutral-500 font-bold block">
                RWA // SUPPLY CHAIN INTEGRITY
              </span>
              <h4 className="text-xl font-black uppercase leading-tight text-black hover:underline">
                <Link href="/projetos/autenticacao-rwa-autopecas-solana">
                  RWA Automotive Parts Authentication Engine
                </Link>
              </h4>
            </div>

            <div className="pt-2 border-t-2 border-neutral-200 flex justify-between items-center font-mono text-xs">
              <Link 
                href="/projetos/autenticacao-rwa-autopecas-solana" 
                className="font-black uppercase underline hover:text-neutral-600"
              >
                Read Specification ›
              </Link>
              <span className="text-neutral-500 font-bold">MAY 2026</span>
            </div>
          </article>

          {/* PROJETO 2: STRATA PROTOCOL */}
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

          {/* PROJETO 3: OCTOPUS CROWD */}
          <article className="space-y-4">
            <Link 
              href="/projetos/octopus-crowd-previsoes-esportivas" 
              className="block w-full border-4 border-black group overflow-hidden"
            >
              <div className="relative w-full h-56 bg-neutral-950">
                <Image
                  src="/projects/octopus-crowd.png"
                  alt="Octopus Crowd Prediction Engine"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase text-neutral-500 font-bold block">
                ORACLES // LIVE SSE PREDICTIONS
              </span>
              <h4 className="text-xl font-black uppercase leading-tight text-black hover:underline">
                <Link href="/projetos/octopus-crowd-previsoes-esportivas">
                  Octopus Crowd: Provable Sports Micro-Challenges
                </Link>
              </h4>
            </div>

            <div className="pt-2 border-t-2 border-neutral-200 flex justify-between items-center font-mono text-xs">
              <Link 
                href="/projetos/octopus-crowd-previsoes-esportivas" 
                className="font-black uppercase underline hover:text-neutral-600"
              >
                Read Specification ›
              </Link>
              <span className="text-neutral-500 font-bold">JUL 2026</span>
            </div>
          </article>

        </div>
      </section>
    </div>
  );
}