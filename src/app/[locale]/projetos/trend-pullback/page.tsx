import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "trend-pullback — Quantitative Research & Multi-Period Backtesting Engine in Rust",
  description:
    "Systematic trading research and automated alerting platform written in Rust. Enforces statistical alpha validation across multi-year out-of-sample periods and strict baseline hurdle rates before dispatching signals.",
  keywords: [
    "Quantitative Trading",
    "Backtesting Engine",
    "Rust",
    "Algorithmic Trading",
    "Technical Analysis",
    "Stormer Traps",
    "Paper Trading",
    "Telegram Alerts",
    "Next.js Dashboard",
  ],
  authors: [{ name: "Vinicius Pontual" }],
  openGraph: {
    title: "trend-pullback // Quantitative Trading Research Engine",
    description:
      "A zero-illusion trading engine. Every setup is rigorously backtested across development and validation periods, penalizing realistic fees and requiring proof of edge over random entries.",
    type: "article",
    publishedTime: "2026-11-01T00:00:00.000Z",
    authors: ["Vinicius Pontual"],
  },
};

export default function TrendPullbackProjectPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "trend-pullback",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Linux, Windows (WSL), macOS",
    author: {
      "@type": "Person",
      name: "Vinicius Pontual",
      jobTitle: "Smart Contract & Systems Engineer",
    },
    datePublished: "2026-11-01",
    dateModified: "2026-11-09",
    programmingLanguage: "Rust, TypeScript, Shell",
    runtimePlatform: "Rust 1.98+, Tokio, Next.js, Upstash Redis",
    codeRepository: "https://github.com/Vinisilva0010/trend-pullback",
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
          <span className="font-black text-black">[ QUANT RESEARCH // 02 ]</span>
          <span>•</span>
          <span>SYSTEMATIC BACKTESTING</span>
          <span>•</span>
          <span>BASELINE-HURDLE ALERTS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[1.05] mb-6 text-black">
          trend-pullback: Quantitative Research &amp; Baseline-Hurdled Alert Engine
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-800 font-medium max-w-4xl leading-relaxed mb-6">
          A zero-delusion trading research engine built in Rust. Setups must prove statistical expectancy across multiple historical epochs and defeat randomized baseline benchmarks with fee slippage before publishing a single alert.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-neutral-200 font-mono text-sm text-neutral-600">
          <div>
            BY <span className="font-black text-black">VINICIUS PONTUAL</span> — QUANT SYSTEMS ARCHITECT
          </div>
          <div>DEPLOYED: NOV 2026 // RUST 1.98+ WORKSPACE // TELEGRAM + NEXT.JS</div>
        </div>
      </header>

      {/* DIAGRAMA PRINCIPAL COM CORES FORÇADAS (SEM IMAGEM EXTERNA) */}
      <div className="w-full mb-16 border-4 border-black">
        <div 
          style={{ backgroundColor: "#000000", color: "#ffffff" }}
          className="w-full p-8 sm:p-12 font-mono flex flex-col justify-between overflow-x-auto"
        >
          <div 
            style={{ borderColor: "#262626" }}
            className="flex items-center justify-between border-b pb-4 mb-8"
          >
            <span 
              style={{ color: "#a3a3a3" }}
              className="text-xs uppercase tracking-widest font-bold"
            >
              [ SYSTEMATIC VALIDATION &amp; ALERT STATE MACHINE ]
            </span>
            <span 
              style={{ backgroundColor: "rgba(16, 185, 129, 0.15)", color: "#34d399", borderColor: "#059669" }}
              className="text-xs px-2.5 py-1 border font-bold"
            >
              DUAL-EPOCH EDGE
            </span>
          </div>

          {/* Fluxograma das 4 Etapas do Setup */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 min-w-[700px]">
            <div style={{ backgroundColor: "#121212", borderColor: "#2e2e2e" }} className="border p-4">
              <span style={{ color: "#a3a3a3" }} className="text-[10px] block uppercase font-bold">STAGE 01</span>
              <strong style={{ color: "#ffffff" }} className="text-sm uppercase block mt-1">SINAL (SIGNAL)</strong>
              <p style={{ color: "#d4d4d4" }} className="text-xs mt-2">Trigger price, 2R target, stop loss, and strict expiration deadline.</p>
            </div>
            <div style={{ backgroundColor: "#121212", borderColor: "#2e2e2e" }} className="border p-4">
              <span style={{ color: "#a3a3a3" }} className="text-[10px] block uppercase font-bold">STAGE 02</span>
              <strong style={{ color: "#ffffff" }} className="text-sm uppercase block mt-1">ENTROU (FILL)</strong>
              <p style={{ color: "#d4d4d4" }} className="text-xs mt-2">Trigger crossed. Position allocated into virtual paper book (2% risk cap).</p>
            </div>
            <div style={{ backgroundColor: "#121212", borderColor: "#2e2e2e" }} className="border p-4">
              <span style={{ color: "#a3a3a3" }} className="text-[10px] block uppercase font-bold">STAGE 03</span>
              <strong style={{ color: "#ffffff" }} className="text-sm uppercase block mt-1">SAIU (EXIT)</strong>
              <p style={{ color: "#d4d4d4" }} className="text-xs mt-2">Target hit, stop triggered, or max duration reached (30d daily, 12w weekly).</p>
            </div>
            <div style={{ backgroundColor: "#121212", borderColor: "#059669" }} className="border-2 p-4">
              <span style={{ color: "#34d399" }} className="text-[10px] block uppercase font-bold">STAGE 04</span>
              <strong style={{ color: "#ffffff" }} className="text-sm uppercase block mt-1">VENCEU (EXPIRED)</strong>
              <p style={{ color: "#e5e5e5" }} className="text-xs mt-2">Trigger unreached within deadline. Clean cancellation without risk.</p>
            </div>
          </div>
        </div>

        <div className="p-3 bg-neutral-100 font-mono text-xs text-neutral-700 border-t-2 border-black flex flex-wrap justify-between items-center gap-2">
          <span>FIG 1.0: DETERMINISTIC SIGNAL LIFECYCLE WITH STRICT EXECUTION EXPIRATION</span>
          <span className="font-bold uppercase">[ RESEARCH &amp; EXECUTION ENGINE ]</span>
        </div>
      </div>

      {/* CORPO DO ARTIGO EM 2 COLUNAS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* COLUNA PRINCIPAL DE LEITURA */}
        <article className="lg:col-span-8 space-y-14 text-neutral-900 leading-relaxed text-lg sm:text-xl">
          
          {/* STATS EM LINHA */}
          <div className="flex flex-wrap gap-8 py-6 border-y-2 border-black font-mono">
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Trading Universe</span>
              <strong className="text-2xl font-black text-black">84 US Equities</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Dual-Epoch Filter</span>
              <strong className="text-2xl font-black text-black">Out-of-Sample</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Weekly Expectancy</span>
              <strong className="text-2xl font-black text-black">+0.27R / +0.19R</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Execution Model</span>
              <strong className="text-2xl font-black text-black">100% Paper Only</strong>
            </div>
          </div>

          {/* SEÇÃO 01 */}
          <section id="the-edge-reality" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              01. The Quantitative Reality: The Baseline Hurdle Invariant
            </h2>
            <p>
              Most retail trading strategies rely on overfitting past curves—adjusting technical parameters until historical charts look profitable. In live execution, these models collapse because they fail to account for transaction friction and lack genuine mathematical edge.
            </p>
            <p>
              <strong>trend-pullback</strong> rejects curve-fitting by enforcing the <em>Baseline Hurdle Invariant</em>:
            </p>
            <ul className="space-y-3 list-disc pl-6 font-medium text-base sm:text-lg">
              <li><strong>The Randomized Hurdle:</strong> A strategy is benchmarked against entering on <em>any arbitrary candle</em> using identical stop-loss and profit-target geometry. If the setup does not statistically beat random entries, it is rejected.</li>
              <li><strong>Dual-Epoch Validation:</strong> Performance is split into two disjoint timeframes: Development (up to Oct 2024) and Out-of-Sample Validation (Nov 2024 to present). A setup must be net positive in both.</li>
              <li><strong>Zero Execution Illusion:</strong> No exchange API keys exist in the system. The platform maintains isolated virtual paper books ($2,200 starting capital per book, 2% risk ceiling) to verify execution slippage in real market conditions.</li>
            </ul>
          </section>

          {/* SEÇÃO 02 */}
          <section id="validated-universes" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              02. What Survived the Tests: Statistical Findings
            </h2>
            <p>
              Hundreds of setup variations across 146 equities, ETFs, and major cryptocurrencies were evaluated. Only setups demonstrating robust statistical significance were promoted to alert status:
            </p>

            <div className="border-2 border-black overflow-x-auto">
              <table className="w-full text-left font-mono text-xs sm:text-sm">
                <thead className="bg-black text-white uppercase border-b-2 border-black">
                  <tr>
                    <th className="p-3">Asset Universe</th>
                    <th className="p-3">Setup Pattern</th>
                    <th className="p-3">Performance (Dev / Out-of-Sample)</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-300 bg-white">
                  <tr>
                    <td className="p-3 font-bold">US Equities (84 assets)</td>
                    <td className="p-3">Daily Trap + Trend (8 &amp; 80 EMA)</td>
                    <td className="p-3">+0.15R / +0.15R (Base: +0.07R / -0.06R)</td>
                    <td className="p-3 font-black text-emerald-600 uppercase">ACTIVE ALERTS</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">US Equities (84 assets)</td>
                    <td className="p-3">Weekly Trap (Multi-Week Pullback)</td>
                    <td className="p-3">+0.27R / +0.19R (Base: +0.24R / +0.12R)</td>
                    <td className="p-3 font-black text-emerald-600 uppercase">ACTIVE ALERTS</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Crypto (BTC, ETH, SOL)</td>
                    <td className="p-3">Daily &amp; Weekly Traps</td>
                    <td className="p-3">Exceeded baseline (sample size limited)</td>
                    <td className="p-3 font-black text-amber-600 uppercase">EM OBSERVAÇÃO</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">BR Equities (62 assets)</td>
                    <td className="p-3">All Tested Variations</td>
                    <td className="p-3">0 setups beat baseline after transaction fees</td>
                    <td className="p-3 font-black text-red-600 uppercase">REJECTED (DASH ONLY)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <blockquote className="my-10 py-6 px-8 bg-neutral-100 border-l-8 border-black font-mono text-base sm:text-lg font-bold italic">
              &ldquo;Intraday day-trade setups (15m, 1h), mechanical SMC setups, and Brazilian equities were systematically dropped because none beat the randomized entry baseline. We only follow what math proves.&rdquo;
              <span className="block not-italic font-black text-xs uppercase mt-3 text-neutral-600">
                — Vinicius Pontual, Systematic Research Notes
              </span>
            </blockquote>
          </section>

          {/* SEÇÃO 03 */}
          <section id="alert-lifecycle" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              03. Four-Stage Lifecycle &amp; Portfolio Risk Allocation
            </h2>
            <p>
              Alerts dispatched via Telegram conform to an atomic four-phase state machine that prevents duplicate notifications and enforces precise risk limits:
            </p>

            <div className="space-y-4 my-8 pl-6 border-l-4 border-black font-mono text-base sm:text-lg">
              <p>
                <strong className="text-black font-black uppercase block">// 01: SINAL (Signal Generation)</strong>
                Dispatched immediately when technical triggers align. Sets entry price, target (2R minimum), stop loss, and execution window (16:00 NY close for US equities).
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// 02: ENTROU (Position Allocation)</strong>
                Triggers when price crosses the entry threshold. Evaluates paper book capacity: 2% risk of current balance, maximum of 3 concurrent positions, and maximum 1 new trade per day.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// 03: SAIU (Position Liquidation)</strong>
                Closes the trade when target or stop is reached, or when the time ceiling elapses (30 sessions for daily setups, 12 weeks for weekly setups). Transaction costs are deducted.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// 04: VENCEU (Time Expiration)</strong>
                Trigger was not reached within the specified trading session. The setup is cleanly discarded with zero capital risk.
              </p>
            </div>
          </section>

          {/* SEÇÃO 04 */}
          <section id="architecture-pipeline" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              04. Multi-Crate Architecture &amp; Automated Cron Daemon
            </h2>
            <p>
              The engine is architected as an industrial Cargo workspace managed under Linux/WSL via scheduled automated daemons:
            </p>

            <div className="space-y-3 font-mono text-sm border-t-2 border-black pt-4">
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">01 / tp-core:</strong> Mathematical indicators, Stormer trap algorithms, Smart Money pattern recognition, and trend filters shared across backtests and live monitoring.
              </div>
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">02 / tp-data:</strong> Public data ingestion engines streaming Yahoo Finance equity feeds (15-min delayed) and Binance crypto archives, with Telegram publishing.
              </div>
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">03 / tp-backtest &amp; tp-report:</strong> Day-by-day deterministic portfolio simulation and HTML performance report generator.
              </div>
              <div className="py-2">
                <strong className="text-black uppercase">04 / web/ (Dashboard):</strong> Next.js web application deployed on Vercel backed by Upstash Redis, visualizing live setups, account equity curves, and alert feeds.
              </div>
            </div>
          </section>

          {/* SEÇÃO 05 */}
          <section id="execution-and-specs" className="space-y-6 pt-6 border-t-4 border-black">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              05. Toolchain Specifications &amp; Build Commands
            </h2>
            <p className="text-base text-neutral-700">
              Prerequisites, build scripts, and study commands:
            </p>

            <div className="border-2 border-black overflow-x-auto">
              <table className="w-full text-left font-mono text-xs sm:text-sm">
                <thead className="bg-black text-white uppercase border-b-2 border-black">
                  <tr>
                    <th className="p-3">Component</th>
                    <th className="p-3">Specification / Dependency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-300 bg-white">
                  <tr>
                    <td className="p-3 font-bold">Compiler &amp; Runtime</td>
                    <td className="p-3 font-mono">Rust 1.98.1+ (Tokio, Serde, Rayon)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Daemon Orchestration</td>
                    <td className="p-3 font-mono">WSL Ubuntu / Windows Task Scheduler (Hourly &amp; 21:15 BRT)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Data Providers</td>
                    <td className="p-3 font-mono">Yahoo Finance Public Charts + Binance Public Klines</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Dashboard Frontend</td>
                    <td className="p-3 font-mono">Next.js 15+ / Tailwind CSS / Upstash Redis (Vercel)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="font-mono text-xs sm:text-sm bg-neutral-100 border-2 border-black p-4 space-y-2 mt-4">
              <div><strong>REPOSITORY:</strong> <a href="https://github.com/Vinisilva0010/trend-pullback" target="_blank" rel="noopener noreferrer" className="underline font-bold">github.com/Vinisilva0010/trend-pullback</a></div>
              <div><strong>BUILD:</strong> <code className="font-bold">cargo build --release</code></div>
              <div><strong>RUN BACKTEST STUDIES:</strong> <code className="font-bold">cargo run --release -- market-study --universe</code></div>
              <div><strong>DRY-RUN ALERTS:</strong> <code className="font-bold">./target/release/tp alerts --dry-run</code></div>
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
                <a href="#the-edge-reality" className="block hover:underline text-black">
                  01. Baseline Hurdle Invariant
                </a>
                <a href="#validated-universes" className="block hover:underline text-black">
                  02. Statistical Findings
                </a>
                <a href="#alert-lifecycle" className="block hover:underline text-black">
                  03. Lifecycle &amp; Portfolio Risk
                </a>
                <a href="#architecture-pipeline" className="block hover:underline text-black">
                  04. Architecture &amp; Daemon
                </a>
                <a href="#execution-and-specs" className="block hover:underline text-black">
                  05. Specifications &amp; Commands
                </a>
              </nav>
            </div>

            <div className="border-t-2 border-neutral-300 pt-6 space-y-3">
              <span className="text-xs uppercase font-black text-neutral-500 block">
                ENGINEERING RESOURCES
              </span>
              <a
                href="https://github.com/Vinisilva0010/trend-pullback"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-black !text-white py-3 font-black text-xs uppercase hover:bg-neutral-800 transition-colors"
              >
                Inspect Rust Engine [›]
              </a>
              <Link
                href="/projetos/review-harness"
                className="block w-full text-center border-2 border-black py-2.5 font-black text-xs uppercase hover:bg-neutral-100 transition-colors"
              >
                View review-harness
              </Link>
            </div>
          </div>
        </aside>

      </div>

      {/* RODAPÉ EDITORIAL: 3 PROJETOS RELACIONADOS */}
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
            All Projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* PROJETO 1: REVIEW-HARNESS */}
          <article className="space-y-4">
            <Link 
              href="/projetos/review-harness" 
              className="block w-full border-4 border-black group overflow-hidden"
            >
              <div 
                style={{ backgroundColor: "#000000" }} 
                className="relative w-full h-56 flex items-center justify-center font-mono p-4 text-center border-b-2 border-black"
              >
                <span style={{ color: "#ffffff" }} className="text-sm font-black uppercase tracking-wider">
                  [ AI DEVSECOPS // PR GATEKEEPER ]
                </span>
              </div>
            </Link>
            
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase text-neutral-500 font-bold block">
                DEVSECOPS // RUST &amp; GITHUB ACTIONS
              </span>
              <h4 className="text-xl font-black uppercase leading-tight text-black hover:underline">
                <Link href="/projetos/review-harness">
                  review-harness: Automated CI Risk Tiering
                </Link>
              </h4>
            </div>

            <div className="pt-2 border-t-2 border-neutral-200 flex justify-between items-center font-mono text-xs">
              <Link 
                href="/projetos/review-harness" 
                className="font-black uppercase underline hover:text-neutral-600"
              >
                Read Specification ›
              </Link>
              <span className="text-neutral-500 font-bold">OCT 2026</span>
            </div>
          </article>

          {/* PROJETO 2: FLASH LOAN ARBITRAGE */}
          <article className="space-y-4">
            <Link 
              href="/projetos/arbitragem-flash-loan-solana" 
              className="block w-full border-4 border-black group overflow-hidden"
            >
              <div 
                style={{ backgroundColor: "#000000" }} 
                className="relative w-full h-56 flex items-center justify-center font-mono p-4 text-center border-b-2 border-black"
              >
                <span style={{ color: "#ffffff" }} className="text-sm font-black uppercase tracking-wider">
                  [ SOLANA // ATOMIC FLASH LOAN ARBITRAGE ]
                </span>
              </div>
            </Link>
            
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase text-neutral-500 font-bold block">
                DEFI // ANCHOR &amp; CPIS
              </span>
              <h4 className="text-xl font-black uppercase leading-tight text-black hover:underline">
                <Link href="/projetos/arbitragem-flash-loan-solana">
                  Solana Flash Loan Arbitrage Engine
                </Link>
              </h4>
            </div>

            <div className="pt-2 border-t-2 border-neutral-200 flex justify-between items-center font-mono text-xs">
              <Link 
                href="/projetos/arbitragem-flash-loan-solana" 
                className="font-black uppercase underline hover:text-neutral-600"
              >
                Read Specification ›
              </Link>
              <span className="text-neutral-500 font-bold">APR 2026</span>
            </div>
          </article>

          {/* PROJETO 3: STRATA PROTOCOL */}
          <article className="space-y-4">
            <Link 
              href="/projetos/protocolo-strata-tranches-solana" 
              className="block w-full border-4 border-black group overflow-hidden"
            >
              <div 
                style={{ backgroundColor: "#000000" }} 
                className="relative w-full h-56 flex items-center justify-center font-mono p-4 text-center border-b-2 border-black"
              >
                <span style={{ color: "#ffffff" }} className="text-sm font-black uppercase tracking-wider">
                  [ RWA // STRUCTURED CREDIT ENGINE ]
                </span>
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