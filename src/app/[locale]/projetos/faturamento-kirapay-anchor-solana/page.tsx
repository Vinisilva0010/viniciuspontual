import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "InvoiceChain — Cross-Chain Freelance Invoicing & Solana Anchor State Settlement",
  description:
    "Decentralized billing infrastructure bridging KIRAPAY multi-chain payment rails with deterministic Solana Anchor smart contract invoice lifecycle verification.",
  keywords: [
    "Solana",
    "Anchor",
    "Rust",
    "KIRAPAY",
    "Cross-Chain Payments",
    "USDC",
    "Invoicing Protocol",
    "Next.js 16",
    "Freelance Finance",
  ],
  authors: [{ name: "Vinicius Pontual" }],
  openGraph: {
    title: "InvoiceChain // Solana & KIRAPAY Cross-Chain Invoicing",
    description:
      "Automated cross-chain payment links, Base-to-Solana state synchronization, and tamper-proof escrow invoice accounting in SVM bytecode.",
    type: "article",
    publishedTime: "2026-01-15T00:00:00.000Z",
    authors: ["Vinicius Pontual"],
  },
};

export default function InvoiceChainProjectPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "InvoiceChain: Cross-Chain Invoicing Settled via Solana Anchor",
    description:
      "A cross-chain invoicing protocol pairing KIRAPAY checkout links with an Anchor state registry on Solana Devnet.",
    author: {
      "@type": "Person",
      name: "Vinicius Pontual",
      jobTitle: "Founder & Lead Smart Contract Engineer",
    },
    datePublished: "2026-01-15",
    dateModified: "2026-09-09",
    programmingLanguage: "Rust, TypeScript",
    runtimePlatform: "Solana SVM, Next.js 16, KIRAPAY Gateway",
    codeRepository: "https://github.com/Vinisilva0010/invoicechain",
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
          <span className="font-black text-black">[ RESEARCH REPORT // 06 ]</span>
          <span>•</span>
          <span>CROSS-CHAIN BILLING</span>
          <span>•</span>
          <span>DEVNET DEPLOYED</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[1.05] mb-6 text-black">
          InvoiceChain: Decentralized Multi-Chain Billing &amp; Anchor State Settlement
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-800 font-medium max-w-4xl leading-relaxed mb-6">
          Bridging frictionless cross-chain client checkouts with non-custodial Solana Anchor state tracking, settling USDC receivables without manual reconciliation or payment tracking drift.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-neutral-200 font-mono text-sm text-neutral-600">
          <div>
            BY <span className="font-black text-black">VINICIUS PONTUAL</span> — SMART CONTRACT &amp; FULL-STACK ARCHITECT
          </div>
          <div>DEPLOYED: JAN 2026 // PROGRAM ID: 4wy5...ypSu7</div>
        </div>
      </header>

      {/* IMAGEM PRINCIPAL ABERTA */}
      <div className="w-full mb-16 border-4 border-black">
        <div className="relative w-full h-[360px] sm:h-[500px] lg:h-[620px] bg-neutral-950">
          <Image
            src="/projects/kirapay-invoicing.png"
            alt="InvoiceChain Cross-Chain Settlement Flow"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
        <div className="p-3 bg-neutral-100 font-mono text-xs text-neutral-700 border-t-2 border-black flex flex-wrap justify-between items-center gap-2">
          <span>FIG 1.0: INVOICE PDA INITIALIZATION → KIRAPAY CROSS-CHAIN ROUTER → WEBHOOK VERIFICATION → ON-CHAIN SETTLEMENT</span>
          <span className="font-bold uppercase">[ CROSS-CHAIN SPECIFICATION ]</span>
        </div>
      </div>

      {/* CORPO DO ARTIGO EM 2 COLUNAS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* COLUNA PRINCIPAL DE LEITURA */}
        <article className="lg:col-span-8 space-y-14 text-neutral-900 leading-relaxed text-lg sm:text-xl">
          
          {/* STATS EM LINHA */}
          <div className="flex flex-wrap gap-8 py-6 border-y-2 border-black font-mono">
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Smart Contract</span>
              <strong className="text-2xl font-black text-black">Anchor / Rust</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Payment Gateway</span>
              <strong className="text-2xl font-black text-black">KIRAPAY API</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Settlement Asset</span>
              <strong className="text-2xl font-black text-black">USDC on Base</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">State Verification</span>
              <strong className="text-2xl font-black text-black">Solana SVM</strong>
            </div>
          </div>

          {/* SEÇÃO 01 */}
          <section id="the-problem" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              01. The Problem: The Web3 Freelance Billing Friction
            </h2>
            <p>
              Independent software engineers, auditors, and digital creators operating globally face constant hurdles when attempting to get paid in stablecoins. While traditional invoicing solutions require banking rails with heavy FX conversions and chargeback risks, crypto-native invoicing tools force clients into rigid token constraints:
            </p>
            <ul className="space-y-3 list-disc pl-6 font-medium text-base sm:text-lg">
              <li><strong>Ecosystem Fragmentation:</strong> A freelancer billing on Solana often deals with clients whose treasury resides strictly on Ethereum, Arbitrum, or Base, causing days of friction over manual bridging.</li>
              <li><strong>Reconciliation Hell:</strong> Clients send irregular tokens or round up amounts incorrectly, leaving developers to manually parse block explorers to prove an invoice was settled.</li>
              <li><strong>Centralized Custody Risk:</strong> Legacy invoicing platforms hold user balances in proprietary database ledgers, introducing single-point-of-failure counterparty risk.</li>
            </ul>
          </section>

          {/* SEÇÃO 02 */}
          <section id="how-it-works" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              02. Architectural Solution: Multi-Chain Routing &amp; SVM Settlement
            </h2>
            <p>
              InvoiceChain pairs multi-chain payment routers with an Anchor smart contract state machine on Solana. The settlement lifecycle proceeds deterministically:
            </p>

            <div className="space-y-4 my-8 pl-6 border-l-4 border-black font-mono text-base sm:text-lg">
              <p>
                <strong className="text-black font-black uppercase block">// Step 1: Invoice Initialization</strong>
                The freelancer connects a Phantom wallet and initializes an on-chain Invoice account on Solana, defining the counterparty, invoice ID, and requested amount in USD value.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// Step 2: Payment Link Generation</strong>
                The Next.js 16 backend invokes KIRAPAY via <code className="font-bold">POST /api/link/generate</code>, establishing a multi-chain checkout link tagged with the Solana invoice ID.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// Step 3: Multi-Chain Liquidity Ingestion</strong>
                The client accesses the checkout link and pays with any arbitrary token (ETH, USDT, DAI) across supported EVM networks. KIRAPAY handles cross-chain swaps and routes settled USDC directly to the receiver&apos;s Base address.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// Step 4: Cryptographic Webhook &amp; State Mutation</strong>
                Upon transaction finality, KIRAPAY dispatches a cryptographically verified <code className="font-bold">transaction.succeeded</code> webhook. The backend relayer executes the Anchor instruction <code className="font-bold">mark_paid</code>, locking the invoice state on Solana permanently.
              </p>
            </div>

            <blockquote className="my-10 py-6 px-8 bg-neutral-100 border-l-8 border-black font-mono text-base sm:text-lg font-bold italic">
              “Freelancers should not care which chain their client’s treasury is locked in. The client pays with whatever token they have; the contractor gets USDC, and the final state is verified immutably in Solana bytecode.”
              <span className="block not-italic font-black text-xs uppercase mt-3 text-neutral-600">
                — Vinicius Pontual, Project Architecture
              </span>
            </blockquote>
          </section>

          {/* SEÇÃO 03: DEMO NO X */}
          <section id="social-proof" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              03. Public Verification: Announcement &amp; Demo on X
            </h2>
            <p className="text-base text-neutral-700">
              Technical demonstration published on X documenting the end-to-end payment loop, cross-chain checkout execution, and instant Solana state synchronization:
            </p>

            <div className="border-4 border-black p-6 bg-neutral-100 font-mono space-y-4">
              <div className="flex justify-between items-center border-b-2 border-black pb-3">
                <span className="text-xs uppercase font-black">X DISPATCH // @vini77pontual</span>
                <span className="text-xs bg-black !text-white px-2 py-0.5">STATUS ID: 2052971276923281908</span>
              </div>
              <p className="text-sm sm:text-base font-bold text-neutral-900 leading-normal">
                &ldquo;On-chain invoice system for freelancers. Create a payment link, share with your client, get paid in USDC via KIRAPAY — payment confirmed on Solana.&rdquo;
              </p>
              <div className="pt-2">
                <a
                  href="https://x.com/vini77pontual/status/2052971276923281908"
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
          <section id="smart-contract" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              04. Smart Contract Mechanics: Anchor Account Constraints
            </h2>
            <p>
              State guarantees are enforced through deterministic account derivations:
            </p>

            <div className="space-y-3 font-mono text-sm border-t-2 border-black pt-4">
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">01 / Deterministic Seeds:</strong> Invoices are stored at <code className="font-bold">[&quot;invoice&quot;, authority.key(), invoice_id]</code>, preventing account collisions across different contractors.
              </div>
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">02 / Relayer Key Segregation:</strong> The <code className="font-bold">mark_paid</code> instruction is strictly restricted to the authorized relayer keypair, preventing malicious actors from artificially settling unfulfilled invoices.
              </div>
              <div className="py-2">
                <strong className="text-black uppercase">03 / State Immobility:</strong> Once set to paid, the status flag cannot be reversed, overwritten, or re-initialized, creating a permanent audit trail.
              </div>
            </div>
          </section>

          {/* SEÇÃO 05 */}
          <section id="security-verification" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              05. Webhook Security &amp; Replay Prevention
            </h2>
            <p>
              Because payment settlement spans two distinct networks (Base and Solana), the relayer infrastructure enforces defensive boundaries:
            </p>
            <ul className="space-y-4 my-6 list-disc pl-6 font-medium">
              <li>
                <strong>HMAC Signature Verification:</strong> Inbound webhooks from KIRAPAY require strict SHA-256 signature verification matching the <code className="font-mono text-sm bg-neutral-200 px-1 py-0.5">WEBHOOK_SECRET</code>. Spoofed HTTP requests are rejected before hitting the database.
              </li>
              <li>
                <strong>Idempotent Event Ingestion:</strong> In the event of webhook retries, the backend checks on-chain state via Solana RPC before constructing the transaction, eliminating redundant network fees and transaction reversions.
              </li>
              <li>
                <strong>Key Isolation:</strong> The backend signing key (<code className="font-bold">BACKEND_WALLET_PRIVATE_KEY</code>) is held entirely in serverless runtime memory and never exposed to the client bundle.
              </li>
            </ul>
          </section>

          {/* SEÇÃO 06 */}
          <section id="deployments-specs" className="space-y-6 pt-6 border-t-4 border-black">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              06. Specifications &amp; Deployments
            </h2>
            <p className="text-base text-neutral-700">
              On-chain program and deployment configuration:
            </p>

            <div className="border-2 border-black overflow-x-auto">
              <table className="w-full text-left font-mono text-xs sm:text-sm">
                <thead className="bg-black text-white uppercase border-b-2 border-black">
                  <tr>
                    <th className="p-3">Parameter</th>
                    <th className="p-3">Value / Address</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-300 bg-white">
                  <tr>
                    <td className="p-3 font-bold">Solana Program ID</td>
                    <td className="p-3 font-mono">4wy52jbYZop2pWWBtBmVZKUMFMrj86qrork9StcypSu7</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Target Network</td>
                    <td className="p-3 font-mono">Solana Devnet (Settlement) / Base (Receivables)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Frontend Framework</td>
                    <td className="p-3 font-mono">Next.js 16 App Router + TypeScript + Tailwind CSS</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Gateway Integration</td>
                    <td className="p-3 font-mono">KIRAPAY Merchant API (POST /api/link/generate)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="font-mono text-xs sm:text-sm bg-neutral-100 border-2 border-black p-4 space-y-2 mt-4">
              <div><strong>REPOSITORY:</strong> <a href="https://github.com/Vinisilva0010/invoicechain" target="_blank" rel="noopener noreferrer" className="underline font-bold">github.com/Vinisilva0010/invoicechain</a></div>
              <div><strong>BUILD COMMANDS:</strong> <code className="font-bold">anchor build &amp;&amp; anchor deploy --provider.cluster devnet</code></div>
              <div><strong>GATEWAY URL:</strong> <code className="font-bold">https://api.kira-pay.com</code></div>
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
                  01. Web3 Billing Friction
                </a>
                <a href="#how-it-works" className="block hover:underline text-black">
                  02. Cross-Chain Settlement
                </a>
                <a href="#social-proof" className="block hover:underline text-black">
                  03. Demonstration on X
                </a>
                <a href="#smart-contract" className="block hover:underline text-black">
                  04. Anchor Mechanics
                </a>
                <a href="#security-verification" className="block hover:underline text-black">
                  05. Webhook Security
                </a>
                <a href="#deployments-specs" className="block hover:underline text-black">
                  06. Specifications
                </a>
              </nav>
            </div>

            <div className="border-t-2 border-neutral-300 pt-6 space-y-3">
              <span className="text-xs uppercase font-black text-neutral-500 block">
                PROJECT ACTIONS
              </span>
              <a
                href="https://x.com/vini77pontual/status/2052971276923281908"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-black !text-white py-3 font-black text-xs uppercase hover:bg-neutral-800 transition-colors"
              >
                Inspect Announcement on X [›]
              </a>
              <a
                href="https://github.com/Vinisilva0010/invoicechain"
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

      {/* RODAPÉ EDITORIAL: 3 PROJETOS COM NOMES DE IMAGENS EXATOS */}
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
          
          {/* PROJETO 1: SMARTFLOW */}
          <article className="space-y-4">
            <Link 
              href="/projetos/smartflow-radar-smart-money-solana" 
              className="block w-full border-4 border-black group overflow-hidden"
            >
              <div className="relative w-full h-56 bg-neutral-950">
                <Image
                  src="/projects/smartflow.png"
                  alt="SmartFlow Radar"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase text-neutral-500 font-bold block">
                ANALYTICS // ONCHAIN RADAR
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