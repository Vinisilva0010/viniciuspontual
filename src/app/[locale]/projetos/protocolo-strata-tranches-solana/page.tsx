import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "STRATA Protocol — On-Chain FIDC Tranche Isolation on Solana",
  description:
    "Smart contract architecture in Rust/Anchor routing onchain capital into Brazilian structured credit via deterministic senior/junior tranche isolation.",
};

export default function StrataProjectPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "STRATA Protocol: Institutional Tranche Isolation on Solana SVM",
    description:
      "A Solana vault architecture routing capital into Brazilian structured credit with immutable waterfall accounting in Anchor.",
    author: {
      "@type": "Person",
      name: "Vinicius Pontual",
    },
    datePublished: "2026-05-15",
    programmingLanguage: "Rust",
    runtimePlatform: "Solana SVM",
    codeRepository: "https://github.com/Vinisilva0010/frenzy-protocol",
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HEADER EDITORIAL / TÍTULO GIGANTE */}
      <header className="border-b-4 border-black pb-8 mb-12">
        <div className="flex flex-wrap items-center gap-3 font-mono text-sm uppercase tracking-widest text-neutral-600 mb-4">
          <span className="font-black text-black">[ RESEARCH REPORT // 01 ]</span>
          <span>•</span>
          <span>SOLANA ECOSYSTEM</span>
          <span>•</span>
          <span>DEVNET DEPLOYED</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[1.05] mb-6 text-black">
          STRATA Protocol: Routing Onchain Capital into Brazilian Structured Credit
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-800 font-medium max-w-4xl leading-relaxed mb-6">
          Institutional-grade senior and junior tranche segregation enforced directly at the SVM bytecode level with zero reliance on offchain custody intermediaries.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-neutral-200 font-mono text-sm text-neutral-600">
          <div>
            BY <span className="font-black text-black">VINICIUS PONTUAL</span> — FOUNDER &amp; LEAD ENGINEER
          </div>
          <div>PUBLISHED: MAY 15, 2026 // UPDATED: SEP 2026</div>
        </div>
      </header>

      {/* IMAGEM PRINCIPAL (ABERTA E NÍTIDA) */}
      <div className="w-full mb-16 border-4 border-black">
        <div className="relative w-full h-[360px] sm:h-[500px] lg:h-[620px] bg-neutral-900">
          <Image
            src="/projects/strata.png"
            alt="STRATA Protocol Architecture Diagram"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="p-3 bg-neutral-100 font-mono text-xs text-neutral-700 border-t-2 border-black flex justify-between items-center">
          <span>FIG 1.0: ONCHAIN TRANCHE WATERFALL &amp; SOLANA CLUSTER CLOCK COOLDOWN</span>
          <span className="font-bold uppercase">[ SYSTEM SPECIFICATION ]</span>
        </div>
      </div>

      {/* CORPO DO ARTIGO: 2 COLUNAS (TEXTO CORRIDO + ÍNDICE LATERAL STICKY) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* COLUNA PRINCIPAL DE LEITURA (SEM CARDS, LEITURA FLUIDA) */}
        <article className="lg:col-span-8 space-y-14 text-neutral-900 leading-relaxed text-lg sm:text-xl">
          
          {/* STATS RÁPIDOS EM LINHA */}
          <div className="flex flex-wrap gap-8 py-6 border-y-2 border-black font-mono">
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">TAM do Mercado</span>
              <strong className="text-2xl font-black text-black">R$ 830B+</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Divisão Sênior / Jr</span>
              <strong className="text-2xl font-black text-black">90% / 10%</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Cooldown Resgate</span>
              <strong className="text-2xl font-black text-black">24H Minimum</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Smart Contract</span>
              <strong className="text-2xl font-black text-black">Anchor / Rust</strong>
            </div>
          </div>

          {/* SEÇÃO 01 */}
          <section id="the-problem" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              The Access Gap in Brazilian Structured Credit
            </h2>
            <p>
              Brazilian structured credit—encompassing FIDCs, corporate invoice discounting, and payroll-backed debt—represents one of the most resilient fixed-income yield generators globally. Yields pegged to CDI plus credit spreads historically outperform speculative DeFi yield farms while remaining tethered to verified real-world cash flows.
            </p>
            <p>
              The fundamental problem is isolation. These instruments are guarded by legacy banking rails, high minimum ticket barriers (frequently exceeding six figures), and complex months-long operational onboarding. Global onchain liquidity cannot enter. Retail investors and decentralized treasuries are excluded from emerging market credit opportunities.
            </p>
          </section>

          {/* SEÇÃO 02 */}
          <section id="tranche-engine" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              Deterministic Waterfall Mechanics: 90/10 Isolation
            </h2>
            <p>
              STRATA recreates the institutional senior/subordinated mechanics of real-world credit vehicles directly inside Solana programs. When allocators deposit capital, the vault enforces a deterministic split:
            </p>
            
            <div className="space-y-4 my-8 pl-6 border-l-4 border-black font-mono text-base sm:text-lg">
              <p>
                <strong className="text-black font-black uppercase block">// Senior Tranche (90% Allocated)</strong>
                Capital-preservation focus. Senior shares retain absolute first priority over all yields and capital returns until its defined target yield is satisfied. Protected against defaults by the subordinate buffer.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// Junior Tranche (10% Allocated)</strong>
                First-loss absorption layer. Takes on 100% of underlying defaults or payment shortfalls. In compensation for bearing default risk, the junior pool captures all residual upside above senior targets.
              </p>
            </div>

            <p>
              Critically, this priority sequence is hard-coded into the SVM bytecode. No vault administrator, operator, or multisig has permission to tune yield parameters or reallocate shares during runtime.
            </p>

            <blockquote className="my-10 py-6 px-8 bg-neutral-100 border-l-8 border-black font-mono text-base sm:text-lg font-bold italic">
              “Institutional credit requires deterministic execution. If an operator can intervene to alter default waterfall priorities after capital is committed, it is not an institutional protocol—it is an arbitrary custody vehicle.”
              <span className="block not-italic font-black text-xs uppercase mt-3 text-neutral-600">
                — Vinicius Pontual, Lead Engineer
              </span>
            </blockquote>
          </section>

          {/* SEÇÃO 03 */}
          <section id="architecture" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              SVM Architecture: Vault PDAs &amp; Bank-Run Immunity
            </h2>
            <p>
              Traditional DeFi lending markets rely on pooled liquidity pools susceptible to contagion. STRATA uses isolated architecture:
            </p>
            <ul className="space-y-4 my-6 list-disc pl-6 font-medium">
              <li>
                <strong>Isolated Vault PDAs:</strong> Every credit strategy is deployed as a distinct Program Derived Address. A loss event in one vault cannot drain liquidity from another.
              </li>
              <li>
                <strong>Clock-Enforced Cooldowns:</strong> The program queries <code className="font-mono text-sm bg-neutral-200 px-1.5 py-0.5 font-bold">Clock::get()</code> to lock vault redemptions behind a mandatory 24-hour window. This completely mitigates flash-loan bank-run vectors and matches real-world D+30 liquidation periods.
              </li>
              <li>
                <strong>Solana Blinks Integration:</strong> Deposit actions are exported as composable Solana Actions, enabling depositors on platforms like X to commit capital directly via wallet signatures without leaving their feed.
              </li>
            </ul>
          </section>

          {/* SEÇÃO 04 */}
          <section id="security" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              Security Guarantees &amp; Invariant Verification
            </h2>
            <p>
              Yield protocols fail when arithmetic assumptions drift. STRATA’s smart contracts enforce strict invariants:
            </p>
            <div className="space-y-3 font-mono text-sm border-t-2 border-black pt-4">
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">01 / Checked Math:</strong> All share allocations utilize Rust’s checked arithmetic. Overflows and underflows trigger an immediate SVM revert.
              </div>
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">02 / Segregated RBAC:</strong> The Yield Admin key responsible for yield injection has zero permission to toggle the Emergency Admin Kill Switch.
              </div>
              <div className="py-2">
                <strong className="text-black uppercase">03 / CPI Reentrancy Defense:</strong> Cross-Program Invocations are strictly bound to accounts verified via Anchor’s <code className="font-bold">has_one</code> seeds.
              </div>
            </div>
          </section>

          {/* SEÇÃO 05 */}
          <section id="methodology" className="space-y-6 pt-6 border-t-4 border-black">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              Methodology &amp; Deployment Specifications
            </h2>
            <p className="text-base text-neutral-700">
              The protocol test suite was executed against local and devnet validator clusters using the Anchor Framework and Rust 1.78+. The smart contract state is publicly inspectable:
            </p>

            <div className="font-mono text-xs sm:text-sm bg-neutral-100 border-2 border-black p-4 space-y-2">
              <div><strong>PROGRAM ID:</strong> BLafEMNRKAimMcisFEpUg8oZuCKSSNaujdQf7moNpFyx</div>
              <div><strong>LIVE DEMO:</strong> <a href="https://strata.zanvexis.com" target="_blank" rel="noopener noreferrer" className="underline font-bold">strata.zanvexis.com</a></div>
              <div><strong>REPOSITORY:</strong> <a href="https://github.com/Vinisilva0010/frenzy-protocol" target="_blank" rel="noopener noreferrer" className="underline font-bold">github.com/Vinisilva0010/frenzy-protocol</a></div>
            </div>
          </section>
        </article>

        {/* COLUNA LATERAL STICKY COM O ÍNDICE (ACOMPANHA A ROLAGEM) */}
        <aside className="lg:col-span-4 sticky top-28 hidden lg:block border-l-4 border-black pl-8 font-mono">
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase font-black tracking-widest text-neutral-500 block mb-3">
                TABLE OF CONTENTS
              </span>
              <nav className="space-y-3 text-sm font-bold">
                <a href="#the-problem" className="block hover:underline text-black">
                  01. The Problem
                </a>
                <a href="#tranche-engine" className="block hover:underline text-black">
                  02. 90/10 Tranche Mechanics
                </a>
                <a href="#architecture" className="block hover:underline text-black">
                  03. SVM Vault Architecture
                </a>
                <a href="#security" className="block hover:underline text-black">
                  04. Security &amp; Invariants
                </a>
                <a href="#methodology" className="block hover:underline text-black">
                  05. Methodology &amp; Specs
                </a>
              </nav>
            </div>

            <div className="border-t-2 border-neutral-300 pt-6 space-y-3">
              <span className="text-xs uppercase font-black text-neutral-500 block">
                PROJECT ACTIONS
              </span>
              <a
                href="https://strata.zanvexis.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-black !text-white py-3 font-black text-xs uppercase hover:bg-neutral-800 transition-colors"
              >
                Launch Protocol [›]
              </a>
              <a
                href="https://github.com/Vinisilva0010/frenzy-protocol"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center border-2 border-black py-2.5 font-black text-xs uppercase hover:bg-neutral-100 transition-colors"
              >
                GitHub Source
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
                RWA // SUPPLY CHAIN &amp; SOLANA
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

          {/* PROJETO 2: SMARTFLOW */}
          <article className="space-y-4">
            <Link 
              href="/projetos/smartflow-radar-smart-money-solana" 
              className="block w-full border-4 border-black group overflow-hidden"
            >
              <div className="relative w-full h-56 bg-neutral-950">
                <Image
                  src="/projects/smartflow.png"
                  alt="SmartFlow Smart Money Tracking"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase text-neutral-500 font-bold block">
                ANALYTICS // ONCHAIN FLOWS
              </span>
              <h4 className="text-xl font-black uppercase leading-tight text-black hover:underline">
                <Link href="/projetos/smartflow-radar-smart-money-solana">
                  SmartFlow: Solana Smart Money Flow Radar
                </Link>
              </h4>
            </div>

            <div className="pt-2 border-t-2 border-neutral-200 flex justify-between items-center font-mono text-xs">
              <Link 
                href="/projetos/smartflow-radar-smart-money-solana" 
                className="font-black uppercase underline hover:text-neutral-600"
              >
                Read Specification ›
              </Link>
              <span className="text-neutral-500 font-bold">FEB 2026</span>
            </div>
          </article>

          {/* PROJETO 3: KIRAPAY / INVOICECHAIN */}
          <article className="space-y-4">
            <Link 
              href="/projetos/faturamento-kirapay-anchor-solana" 
              className="block w-full border-4 border-black group overflow-hidden"
            >
              <div className="relative w-full h-56 bg-neutral-950">
                <Image
                  src="/projects/kirapay-invoicing.png"
                  alt="Kirapay Invoicing Protocol"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase text-neutral-500 font-bold block">
                PAYMENTS // ANCHOR INVOICING
              </span>
              <h4 className="text-xl font-black uppercase leading-tight text-black hover:underline">
                <Link href="/projetos/faturamento-kirapay-anchor-solana">
                  Kirapay: Decentralized Invoicing Engine
                </Link>
              </h4>
            </div>

            <div className="pt-2 border-t-2 border-neutral-200 flex justify-between items-center font-mono text-xs">
              <Link 
                href="/projetos/faturamento-kirapay-anchor-solana" 
                className="font-black uppercase underline hover:text-neutral-600"
              >
                Read Specification ›
              </Link>
              <span className="text-neutral-500 font-bold">JAN 2026</span>
            </div>
          </article>

        </div>
      </section>
    </div>
  );
}