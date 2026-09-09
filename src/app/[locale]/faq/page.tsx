import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — Technical & Operational Inquiries // Vinicius Pontual & Zanvexis",
  description:
    "Frequently asked questions regarding Solana development, custom trading bots, AI security middleware, enterprise systems, and Zanvexis engagement models.",
  openGraph: {
    title: "FAQ // Vinicius Pontual & Zanvexis Engineering",
    description:
      "Operational frameworks, smart contract deliverables, bot architectures, and engagement specifications.",
    type: "website",
  },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What primary technologies and frameworks do you build with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Core production work centers on Rust and Anchor for Solana smart contracts, Go (Golang) and PostgreSQL for high-throughput enterprise backends, Python and Tokio for asynchronous automations and bots, and Next.js with TypeScript for responsive web interfaces.",
        },
      },
      {
        "@type": "Question",
        name: "Can I commission a custom flash loan or arbitrage bot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Custom high-frequency execution engines, DEX arbitrage bots, and single-slot atomic flash loan smart contracts (integrating MarginFi, Raydium, and Orca) are developed under strict milestone-based contracts.",
        },
      },
      {
        "@type": "Question",
        name: "How does Zanvexis assist non-crypto enterprises (B2B)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zanvexis provides dedicated external engineering for companies that need custom business systems, workflow automations, security layers, or data pipelines without overloading their internal development staff.",
        },
      },
      {
        "@type": "Question",
        name: "Can our team license or acquire codebases from your hackathon projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Proven architectural modules and complete smart contract codebases developed during hackathons (such as RWA authentication or DePIN systems) can be licensed or acquired under tailored commercial agreements.",
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HEADER EDITORIAL */}
      <header className="border-b-4 border-black pb-8 mb-12">
        <div className="flex flex-wrap items-center gap-3 font-mono text-sm uppercase tracking-widest text-neutral-600 mb-4">
          <span className="font-black text-black">[ INQUIRY SPECIFICATION // FAQ ]</span>
          <span>•</span>
          <span>OPERATIONAL FRAMEWORKS</span>
          <span>•</span>
          <span>ZANVEXIS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[1.05] mb-6 text-black">
          Frequently Asked Questions &amp; Operating Invariants
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-800 font-medium max-w-4xl leading-relaxed mb-6">
          Direct technical answers on Solana smart contracts, trading engine capabilities, AI security middleware, enterprise systems, and partnership models.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-neutral-200 font-mono text-sm text-neutral-600">
          <div>
            AUTHORITY: <span className="font-black text-black">VINICIUS PONTUAL // ZANVEXIS</span>
          </div>
          <div>UPDATED: SEPTEMBER 2026 // DIRECT ENGINEERING SCOPE</div>
        </div>
      </header>

      {/* GRID DE 2 COLUNAS: FAQ PRINCIPAL & TOC LATERAL */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* COLUNA PRINCIPAL DE FAQ */}
        <article className="lg:col-span-8 space-y-16 text-neutral-900 leading-relaxed text-lg sm:text-xl">
          
          {/* STATS RÁPIDOS */}
          <div className="flex flex-wrap gap-8 py-6 border-y-2 border-black font-mono">
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Smart Contract Stack</span>
              <strong className="text-2xl font-black text-black">Rust / Anchor</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Execution Engines</span>
              <strong className="text-2xl font-black text-black">Low-Latency</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">B2B Delivery</span>
              <strong className="text-2xl font-black text-black">Zanvexis</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">IP Licensing</span>
              <strong className="text-2xl font-black text-black">Available</strong>
            </div>
          </div>

          {/* SEÇÃO 01: BLOCKCHAIN & SOLANA */}
          <section id="solana-smart-contracts" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              01. Solana &amp; Blockchain Development
            </h2>

            <div className="space-y-8 font-mono text-base">
              <div className="border-2 border-black p-6 bg-white space-y-3">
                <h3 className="text-lg font-black uppercase text-black">
                  What kind of smart contracts do you develop on Solana?
                </h3>
                <p className="font-sans text-neutral-800 text-base leading-relaxed">
                  I architect deterministic on-chain programs using Rust and Anchor. Work includes custom Program Derived Address (PDA) state machines, Real-World Asset (RWA) physical tokenization engines, Metaplex Bubblegum state compression (cNFTs) for industrial tracking, and confidential computing interfaces (such as Arcium MPC). Every contract is built with strict boundary checks, explicit error definitions, and unit/integration test suites.
                </p>
              </div>

              <div className="border-2 border-black p-6 bg-white space-y-3">
                <h3 className="text-lg font-black uppercase text-black">
                  Can you deliver full dApps from scratch?
                </h3>
                <p className="font-sans text-neutral-800 text-base leading-relaxed">
                  Yes. I deliver complete end-to-end decentralized applications. This spans low-level Rust contracts, backend relayers, indexer listeners via Helius or Geyser RPCs, and responsive brutalist web interfaces built with Next.js, TypeScript, and Three.js for clean user experiences.
                </p>
              </div>
            </div>
          </section>

          {/* SEÇÃO 02: BOTS & ALTA FREQUÊNCIA */}
          <section id="bots-arbitrage" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              02. Trading Engines, Flash Loans &amp; Bots
            </h2>

            <div className="space-y-8 font-mono text-base">
              <div className="border-2 border-black p-6 bg-white space-y-3">
                <h3 className="text-lg font-black uppercase text-black">
                  Can I hire you to build a custom arbitrage or flash loan bot?
                </h3>
                <p className="font-sans text-neutral-800 text-base leading-relaxed">
                  Yes. I build custom arbitrage software and atomic flash loan execution contracts. I have engineered systems executing uncollateralized borrows and multi-DEX routing (MarginFi + Raydium + Orca) within a single transaction slot, ensuring invariant safety where the transaction reverts automatically if net profit is negative.
                </p>
              </div>

              <div className="border-2 border-black p-6 bg-white space-y-3">
                <h3 className="text-lg font-black uppercase text-black">
                  What is the architecture behind your copy-trading systems?
                </h3>
                <p className="font-sans text-neutral-800 text-base leading-relaxed">
                  Engines are built in asynchronous Rust using Tokio. Ingestion pipelines listen continuously to target wallet logs, feed raw data into lock-free <code className="font-bold">mpsc</code> channels, construct Versioned Transactions (V0), and dynamically manage blockhash expiration against cluster height to guarantee sub-second execution without garbage collection pauses.
                </p>
              </div>
            </div>
          </section>

          {/* SEÇÃO 03: SEGURANÇA & IA */}
          <section id="security-middleware" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              03. Defensive Security &amp; Autonomous AI Sandboxes
            </h2>

            <div className="space-y-8 font-mono text-base">
              <div className="border-2 border-black p-6 bg-white space-y-3">
                <h3 className="text-lg font-black uppercase text-black">
                  How do you protect systems from LLM hallucinations or agent exploits?
                </h3>
                <p className="font-sans text-neutral-800 text-base leading-relaxed">
                  I construct deterministic security proxies (such as Aegis) in Rust. Autonomous AI agents never get direct access to system sockets or browser handles. Instead, their tool calls are intercepted over the Model Context Protocol (MCP), parsed through strict Serde type validators, verified against declarative domain whitelists, and executed inside resource-capped headless browser sandboxes.
                </p>
              </div>

              <div className="border-2 border-black p-6 bg-white space-y-3">
                <h3 className="text-lg font-black uppercase text-black">
                  Do you perform security reviews and smart contract audits?
                </h3>
                <p className="font-sans text-neutral-800 text-base leading-relaxed">
                  Yes. I audit Solana programs and backend architectures for re-entrancy, account substitution, missing signer checks, integer overflow vulnerabilities, and unsafe deserialization pathways.
                </p>
              </div>
            </div>
          </section>

          {/* SEÇÃO 04: SERVIÇOS B2B & ZANVEXIS */}
          <section id="b2b-enterprise" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              04. Zanvexis &amp; Enterprise B2B Systems
            </h2>

            <div className="space-y-8 font-mono text-base">
              <div className="border-2 border-black p-6 bg-white space-y-3">
                <h3 className="text-lg font-black uppercase text-black">
                  My company is not in web3. Can Zanvexis still help us?
                </h3>
                <p className="font-sans text-neutral-800 text-base leading-relaxed">
                  Yes. Zanvexis frequently serves traditional companies requiring custom backends, workflow automation, corporate portals, and data analysis pipelines. This allows businesses to solve complex technical problems through an external engineering contractor without taking focus away from their internal developers.
                </p>
              </div>

              <div className="border-2 border-black p-6 bg-white space-y-3">
                <h3 className="text-lg font-black uppercase text-black">
                  What backend architecture do you deploy for enterprise systems?
                </h3>
                <p className="font-sans text-neutral-800 text-base leading-relaxed">
                  We deploy our Enterprise Core Backend built in Go (Golang) and PostgreSQL. It features compiled type-safe SQL queries via <code className="font-bold">sqlc</code>, high-performance connection pooling via <code className="font-bold">pgx/v5</code>, multi-tenant organizational isolation, and write-only immutable audit trails designed for compliance.
                </p>
              </div>
            </div>
          </section>

          {/* SEÇÃO 05: MODELOS DE CONTRATAÇÃO & LICENCIAMENTO */}
          <section id="engagement-contracts" className="space-y-6 pt-6 border-t-4 border-black">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              05. Engagement Models &amp; IP Licensing
            </h2>

            <div className="space-y-8 font-mono text-base">
              <div className="border-2 border-black p-6 bg-white space-y-3">
                <h3 className="text-lg font-black uppercase text-black">
                  Can we purchase or license code from your hackathon projects?
                </h3>
                <p className="font-sans text-neutral-800 text-base leading-relaxed">
                  Yes. Early-stage startups and established companies have previously acquired core modules and architectural logic from my hackathon builds (such as RWA tracking or DePIN systems). Licensing or direct IP acquisition can be negotiated to accelerate your time-to-market.
                </p>
              </div>

              <div className="border-2 border-black p-6 bg-white space-y-3">
                <h3 className="text-lg font-black uppercase text-black">
                  What engagement formats are available?
                </h3>
                <p className="font-sans text-neutral-800 text-base leading-relaxed">
                  Work is delivered through milestone-based fixed contracts, dedicated technical lead engagements for funded teams, or short-term specialized freelance sprints for international teams needing Solana or Rust low-latency expertise.
                </p>
              </div>
            </div>
          </section>
        </article>

        {/* COLUNA LATERAL STICKY TOC */}
        <aside className="lg:col-span-4 sticky top-28 hidden lg:block border-l-4 border-black pl-8 font-mono">
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase font-black tracking-widest text-neutral-500 block mb-3">
                FAQ CATEGORIES
              </span>
              <nav className="space-y-3 text-sm font-bold">
                <a href="#solana-smart-contracts" className="block hover:underline text-black">
                  01. Solana &amp; Smart Contracts
                </a>
                <a href="#bots-arbitrage" className="block hover:underline text-black">
                  02. Trading &amp; Flash Loans
                </a>
                <a href="#security-middleware" className="block hover:underline text-black">
                  03. AI Security &amp; Sandboxes
                </a>
                <a href="#b2b-enterprise" className="block hover:underline text-black">
                  04. Zanvexis B2B Systems
                </a>
                <a href="#engagement-contracts" className="block hover:underline text-black">
                  05. Licensing &amp; Contracts
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
              <Link
                href="/sobre"
                className="block w-full text-center border-2 border-black py-2.5 font-black text-xs uppercase hover:bg-neutral-100 transition-colors"
              >
                Read Engineer Profile
              </Link>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}