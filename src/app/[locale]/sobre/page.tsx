import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Vinicius Pontual // Founder of Zanvexis & Systems Engineer",
  description:
    "Software engineer specialized in Solana, Rust, low-latency execution engines, and defensive security architectures. Founder of Zanvexis.",
  openGraph: {
    title: "About // Vinicius Pontual — Systems Engineering & Solana",
    description:
      "High-throughput infrastructure, deterministic smart contracts on Solana, and custom enterprise software.",
    type: "profile",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vinicius Pontual",
    jobTitle: "Founder & Systems Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Zanvexis",
    },
    knowsAbout: [
      "Solana SVM",
      "Rust",
      "Anchor",
      "TypeScript",
      "Python",
      "Trading Bots",
      "RWA",
      "System Security",
      "Bioinformatics",
    ],
    url: "https://zanvexis.com",
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HEADER EDITORIAL / CORE THESIS */}
      <header className="border-b-4 border-black pb-8 mb-12">
        <div className="flex flex-wrap items-center gap-3 font-mono text-sm uppercase tracking-widest text-neutral-600 mb-4">
          <span className="font-black text-black">[ PROFILE // ENGINEERING ]</span>
          <span>•</span>
          <span>SOLANA &amp; SYSTEMS</span>
          <span>•</span>
          <span>ZANVEXIS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[1.05] mb-6 text-black">
          Precision engineering for critical systems and blockchain.
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-800 font-medium max-w-4xl leading-relaxed mb-6">
          Over 3 years dedicated to Solana smart contracts in Rust, automated liquidity bots, defensive security middleware, and custom engineering for operations that cannot tolerate technical failure.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-neutral-200 font-mono text-sm text-neutral-600">
          <div>
            NAME: <span className="font-black text-black">VINICIUS PONTUAL</span> — FOUNDER OF ZANVEXIS
          </div>
          <div>BACKGROUND: COMPUTER SCIENCE // BIOINFORMATICS RESEARCH FOCUS</div>
        </div>
      </header>

      {/* HERO IMAGE */}
      <div className="w-full mb-16 border-4 border-black">
        <div className="relative w-full h-[320px] sm:h-[460px] lg:h-[560px] bg-neutral-950">
          <Image
            src="/profile.jpg"
            alt="Vinicius Pontual - Systems Engineering and Solana Architecture"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
        <div className="p-3 bg-neutral-100 font-mono text-xs text-neutral-700 border-t-2 border-black flex flex-wrap justify-between items-center gap-2">
          <span>ACTIVITY RECORD // PRODUCTION SYSTEMS &amp; DEDICATED DEVELOPMENT</span>
          <span className="font-bold uppercase">[ OPERATIONAL BASE ]</span>
        </div>
      </div>

      {/* MAIN GRID WITH STICKY TOC */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* MAIN CONTENT COLUMN */}
        <article className="lg:col-span-8 space-y-16 text-neutral-900 leading-relaxed text-lg sm:text-xl">
          
          {/* INLINE STATS */}
          <div className="flex flex-wrap gap-8 py-6 border-y-2 border-black font-mono">
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">On-Chain Focus</span>
              <strong className="text-2xl font-black text-black">Solana (Rust/Anchor)</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Automations</span>
              <strong className="text-2xl font-black text-black">Python &amp; Tokio</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Code Validation</span>
              <strong className="text-2xl font-black text-black">Acquired by Firms</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Studio</span>
              <strong className="text-2xl font-black text-black">Zanvexis</strong>
            </div>
          </div>

          {/* SECTION 01: WHERE THE MARKET FAILS */}
          <section id="market-breakdowns" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              01. Where Most Software Development Breaks Down
            </h2>
            <p>
              In both crypto infrastructure and traditional corporate engineering, operational bottlenecks consistently originate from the same architectural shortcuts:
            </p>
            <ul className="space-y-4 list-disc pl-6 font-medium text-base sm:text-lg">
              <li>
                <strong>Prototypes incapable of surviving mainnet:</strong> Demo-grade codebases that pass hackathon presentations but crash under volatile liquidity, network spikes, and Solana compute unit caps.
              </li>
              <li>
                <strong>Security treated as an afterthought:</strong> Protocols without real-time defensive monitoring, where privilege escalation bugs and transaction exploits are only addressed post-incident.
              </li>
              <li>
                <strong>Overloaded internal engineering teams:</strong> Established companies burning high-value developer hours attempting to build bespoke automations, complex data parsers, or low-level security layers outside their primary scope.
              </li>
            </ul>
            <p>
              My engineering practice resolves these gaps directly: delivering deterministic, production-tested software without corporate bureaucracy or fragile abstractions.
            </p>
          </section>

          {/* SECTION 02: TECHNICAL PILLARS */}
          <section id="execution-pillars" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              02. Technical Execution Pillars
            </h2>
            <p>
              Operations are organized across four practical engineering disciplines refined through real-world deployment:
            </p>

            <div className="space-y-6 my-8 pl-6 border-l-4 border-black font-mono text-base sm:text-lg">
              <div>
                <strong className="text-black font-black uppercase block text-lg">// 01. Blockchain &amp; Smart Contracts (Solana)</strong>
                <p className="text-neutral-700 font-sans mt-1">
                  Core development in Rust and Anchor. Constructing deterministic state machines, Real-World Asset (RWA) tokenization pipelines, DePIN networks, and complete dApps paired with responsive TypeScript/Next.js interfaces. Architectures and codebases developed during hackathons have been directly acquired by early-stage teams and commercial enterprises to form their core products.
                </p>
              </div>

              <div className="pt-2">
                <strong className="text-black font-black uppercase block text-lg">// 02. Bots &amp; High-Frequency Execution Engines</strong>
                <p className="text-neutral-700 font-sans mt-1">
                  Architecting and operating internal trading bots alongside bespoke execution systems for select clients. Deep practical expertise in DEX arbitrage routing, atomic flash loan composition executed within a single transaction slot, and low-latency copy-trading engines running over asynchronous Tokio channels.
                </p>
              </div>

              <div className="pt-2">
                <strong className="text-black font-black uppercase block text-lg">// 03. Defensive Security Layers &amp; AI Guardian Agents</strong>
                <p className="text-neutral-700 font-sans mt-1">
                  Engineering background proxy middlewares that audit system interactions. Deploying autonomous AI agents within strict, isolated sandbox perimeters to inspect incoming tool calls, monitor live on-chain transactions, and intercept anomalous inputs before exploits reach production databases or vaults.
                </p>
              </div>

              <div className="pt-2">
                <strong className="text-black font-black uppercase block text-lg">// 04. Dedicated B2B Automation &amp; System Infrastructure</strong>
                <p className="text-neutral-700 font-sans mt-1">
                  Bespoke infrastructure for non-crypto enterprises requiring custom external tooling. Building internal business operations software, corporate admin control planes, complex commercial platforms, and automated data processing pipelines—allowing internal teams to focus entirely on core business execution.
                </p>
              </div>
            </div>

            <blockquote className="my-10 py-6 px-8 bg-neutral-100 border-l-8 border-black font-mono text-base sm:text-lg font-bold italic">
              “I do not build disposable software. Whether an atomic arbitrage contract or a corporate automation backend, the system is designed to perform under stress without deviating from core business invariants.”
              <span className="block not-italic font-black text-xs uppercase mt-3 text-neutral-600">
                — Vinicius Pontual
              </span>
            </blockquote>
          </section>

          {/* SECTION 03: ZANVEXIS & ENGAGEMENT MODELS */}
          <section id="engagement-models" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              03. Zanvexis &amp; Partnership Models
            </h2>
            <p>
              <strong>Zanvexis</strong> is my technology company and operating vehicle for these initiatives. The engagement model is structured to serve technical founders, web3 protocols, and corporate entities flexibly:
            </p>

            <div className="border-2 border-black overflow-x-auto">
              <table className="w-full text-left font-mono text-xs sm:text-sm">
                <thead className="bg-black text-white uppercase border-b-2 border-black">
                  <tr>
                    <th className="p-3">Partner Profile</th>
                    <th className="p-3">Deliverable Scope</th>
                    <th className="p-3">Engagement Structure</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-300 bg-white">
                  <tr>
                    <td className="p-3 font-bold">Crypto Protocols &amp; Teams</td>
                    <td className="p-3">Rust smart contracts, execution bots, dApps, and security layers.</td>
                    <td className="p-3">Milestone-based contract or dedicated technical squad lead.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Founders &amp; Early-Stage Startups</td>
                    <td className="p-3">End-to-end product execution: systems architecture, contracts, and frontend.</td>
                    <td className="p-3">Full MVP build-out or licensing of proven technical modules.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Traditional Enterprises (B2B)</td>
                    <td className="p-3">Internal workflow automation, defensive security proxying, and data pipelines.</td>
                    <td className="p-3">External systems engineering contract without staffing overhead.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Global Engineering Teams</td>
                    <td className="p-3">Specialized Solana engineering, liquidity engines, and low-latency Rust services.</td>
                    <td className="p-3">Remote contracts, technical partnerships, or on-demand freelance sprints.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 04: ACADEMIC HORIZON & RESEARCH */}
          <section id="bioinformatics-research" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              04. Academic Foundation: Computer Science &amp; Bioinformatics
            </h2>
            <p>
              Graduated with a Bachelor&apos;s degree in Computer Science, my research is currently focused toward postgraduate work in <strong>Bioinformatics</strong>. The goal is to advance work at the intersection of large-scale computational biology, machine learning models, and privacy-preserving cryptographic protocols for sensitive biological data.
            </p>
            <p>
              This rigorous research directly influences the software I build: prioritizing statistical validity, precise algorithmic modeling, and strict mathematical guarantees over system integrity.
            </p>
          </section>

          {/* SECTION 05: DOCUMENTED CASE STUDIES */}
          <section id="case-studies" className="space-y-6 pt-6 border-t-4 border-black">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              05. Selected Case Studies &amp; Public Dossiers
            </h2>
            <p className="text-base text-neutral-700">
              A collection of verified technical architectures and software foundations documented for review:
            </p>

            <div className="space-y-4 font-mono text-sm">
              <div className="border-2 border-black p-4 bg-neutral-100">
                <span className="text-xs uppercase text-neutral-500 font-bold block">RWA &amp; CRYPTOGRAPHIC SILICON</span>
                <strong className="text-base text-black block mt-1">AutoOrigem: Industrial Supply Chain Provenance via Solana cNFTs</strong>
                <p className="font-sans text-sm text-neutral-700 mt-2">
                  Phygital anti-counterfeiting platform pairing uncloneable NXP NTAG 424 DNA silicon chips with Metaplex Bubblegum compressed NFTs on Solana.
                </p>
                <Link href="/projetos/autenticacao-rwa-autopecas-solana" className="inline-block mt-3 text-xs font-black underline uppercase">
                  Read Technical Dossier ›
                </Link>
              </div>

              <div className="border-2 border-black p-4 bg-white">
                <span className="text-xs uppercase text-neutral-500 font-bold block">HIGH-FREQUENCY // SOLANA</span>
                <strong className="text-base text-black block mt-1">Low-Latency Asynchronous Copy-Trading Engine in Rust</strong>
                <p className="font-sans text-sm text-neutral-700 mt-2">
                  Zero-lock Tokio pipeline, versioned transaction deserialization, and strict blockhash lifecycle management for on-chain order replication.
                </p>
                <Link href="/projetos/motor-copy-trading-rust-solana" className="inline-block mt-3 text-xs font-black underline uppercase">
                  Read Technical Dossier ›
                </Link>
              </div>

              <div className="border-2 border-black p-4 bg-white">
                <span className="text-xs uppercase text-neutral-500 font-bold block">SECURITY &amp; MIDDLEWARE</span>
                <strong className="text-base text-black block mt-1">Aegis: Autonomous AI Agent Security Sandbox via MCP</strong>
                <p className="font-sans text-sm text-neutral-700 mt-2">
                  Deterministic Rust security proxy intercepting Model Context Protocol tool calls and isolating headless browser execution against prompt injections.
                </p>
                <Link href="/projetos/sandbox-agentes-ia-rust-mcp" className="inline-block mt-3 text-xs font-black underline uppercase">
                  Read Technical Dossier ›
                </Link>
              </div>
            </div>
          </section>
        </article>

        {/* STICKY TOC SIDEBAR */}
        <aside className="lg:col-span-4 sticky top-28 hidden lg:block border-l-4 border-black pl-8 font-mono">
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase font-black tracking-widest text-neutral-500 block mb-3">
                TABLE OF CONTENTS
              </span>
              <nav className="space-y-3 text-sm font-bold">
                <a href="#market-breakdowns" className="block hover:underline text-black">
                  01. Market Breakdowns
                </a>
                <a href="#execution-pillars" className="block hover:underline text-black">
                  02. Execution Pillars
                </a>
                <a href="#engagement-models" className="block hover:underline text-black">
                  03. Engagement &amp; Zanvexis
                </a>
                <a href="#bioinformatics-research" className="block hover:underline text-black">
                  04. Bioinformatics Research
                </a>
                <a href="#case-studies" className="block hover:underline text-black">
                  05. Selected Case Studies
                </a>
              </nav>
            </div>

            <div className="border-t-2 border-neutral-300 pt-6 space-y-3">
              <span className="text-xs uppercase font-black text-neutral-500 block">
                DIRECT ACTIONS
              </span>
              <Link
                href="/contato"
                className="block w-full text-center bg-black !text-white py-3 font-black text-xs uppercase hover:bg-neutral-800 transition-colors"
              >
                Initiate Project Discussion [›]
              </Link>
              <a
                href="https://github.com/Vinisilva0010"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center border-2 border-black py-2.5 font-black text-xs uppercase hover:bg-neutral-100 transition-colors"
              >
                Inspect GitHub Code
              </a>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}