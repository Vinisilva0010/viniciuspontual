import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solana Dual Access Control & PDA Auth SDK — Rust & TypeScript Devkit",
  description:
    "Developer SDK providing composable dual access control, off-chain signature gating, and single-use Authorization PDA verification for Solana Anchor programs.",
  keywords: [
    "Solana SDK",
    "Anchor Framework",
    "Rust",
    "TypeScript",
    "Access Control",
    "PDA Authorization",
    "DeFi Security",
    "Smart Contract Tooling",
  ],
  authors: [{ name: "Vinicius Pontual" }],
  openGraph: {
    title: "Solana Dual Access Control & PDA Auth SDK // Developer Tooling",
    description:
      "Dual-layer permissioning engine binding off-chain authorization pipelines with single-instruction PDA consumption macros on Solana.",
    type: "article",
    publishedTime: "2026-06-25T00:00:00.000Z",
    authors: ["Vinicius Pontual"],
  },
};

export default function SolanaAccessControlSdkPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Solana Dual Access Control SDK",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Solana SVM, Node.js, Rust Toolchain",
    author: {
      "@type": "Person",
      name: "Vinicius Pontual",
      jobTitle: "Systems & Security Engineer",
    },
    datePublished: "2026-06-25",
    dateModified: "2026-09-09",
    programmingLanguage: "Rust, TypeScript",
    codeRepository: "https://github.com/Vinisilva0010/solana-access-control-sdk",
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HEADER EDITORIAL */}
      <header className="border-b-4 border-black pb-8 mb-12">
        <div className="flex flex-wrap items-center gap-3 font-mono text-sm uppercase tracking-widest text-neutral-600 mb-4">
          <span className="font-black text-black">[ DEVELOPER TOOLKIT // 09 ]</span>
          <span>•</span>
          <span>RUST CRATE &amp; NPM PACKAGE</span>
          <span>•</span>
          <span>ANCHOR 0.30+</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[1.05] mb-6 text-black">
          Dual Access Control &amp; Ephemeral PDA Authorization SDK for Solana
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-800 font-medium max-w-4xl leading-relaxed mb-6">
          A production-grade permissioning primitive decoupling off-chain compliance logic from on-chain state execution via single-use authorization tickets and declarative Anchor verification macros.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-neutral-200 font-mono text-sm text-neutral-600">
          <div>
            BY <span className="font-black text-black">VINICIUS PONTUAL</span> — SYSTEMS &amp; SECURITY ENGINEER
          </div>
          <div>RELEASED: JUN 2026 // PACKAGES: @zanvexis/solana-auth + strata-auth-core</div>
        </div>
      </header>

      {/* IMAGEM PRINCIPAL ABERTA */}
      <div className="w-full mb-16 border-4 border-black">
        <div className="relative w-full h-[360px] sm:h-[500px] lg:h-[620px] bg-neutral-950">
          <Image
            src="/projects/access-control-sdk.png"
            alt="Solana Dual Access Control & PDA Auth SDK Architecture"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
        <div className="p-3 bg-neutral-100 font-mono text-xs text-neutral-700 border-t-2 border-black flex flex-wrap justify-between items-center gap-2">
          <span>FIG 1.0: CLIENT SIGNATURE → OFF-CHAIN DAEMON VALIDATION → EPHEMERAL PDA EMISSION → ATOMIC ANCHOR BURN</span>
          <span className="font-bold uppercase">[ ACCESS CONTROL PROTOCOL SPEC ]</span>
        </div>
      </div>

      {/* CORPO DO ARTIGO EM 2 COLUNAS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* COLUNA PRINCIPAL DE LEITURA */}
        <article className="lg:col-span-8 space-y-14 text-neutral-900 leading-relaxed text-lg sm:text-xl">
          
          {/* STATS EM LINHA */}
          <div className="flex flex-wrap gap-8 py-6 border-y-2 border-black font-mono">
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Client Target</span>
              <strong className="text-2xl font-black text-black">TypeScript 5+</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">On-Chain Target</span>
              <strong className="text-2xl font-black text-black">Rust / Anchor</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Compute Overhead</span>
              <strong className="text-2xl font-black text-black">&lt; 4,200 CUs</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Lifecycle Cost</span>
              <strong className="text-2xl font-black text-black">0 Rent (Closed)</strong>
            </div>
          </div>

          {/* SEÇÃO 01 */}
          <section id="the-developer-problem" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              01. The Problem: Fragile Permissioning in Solana Programs
            </h2>
            <p>
              Developers building permissioned protocols (RWAs, compliance vaults, institutional OTC desks) inevitably construct brittle authorization architectures. Standard implementations repeatedly hit one of two failure modes:
            </p>
            <ul className="space-y-3 list-disc pl-6 font-medium text-base sm:text-lg">
              <li><strong>Monolithic On-Chain Whitelists:</strong> Storing arrays of approved wallets inside state accounts creates severe scalability ceilings, locks expensive rent on-chain, and demands continuous maintenance transactions whenever users revoke or renew status.</li>
              <li><strong>Raw Backend Signatures:</strong> Passing off-chain Ed25519 signatures into instructions requires expensive signature verification instructions (Ed25519Program pre-compiles) inside the transaction, driving up compute unit consumption and making atomic multi-transaction bundling complex.</li>
            </ul>
          </section>

          {/* SEÇÃO 02 */}
          <section id="dual-access-pattern" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              02. The Solution: Dual-Layer Authorization Abstraction
            </h2>
            <p>
              This SDK introduces a clean boundary that decouples the policy verification engine from smart contract state transition.
            </p>
            
            <div className="space-y-4 my-8 pl-6 border-l-4 border-black font-mono text-base sm:text-lg">
              <p>
                <strong className="text-black font-black uppercase block">// Layer 1 — Off-Chain Verification Daemon (Node.js/TypeScript)</strong>
                Evaluates arbitrary access policies (KYC state, geofencing, trade volume ceilings, multi-sig approvals). When valid, signs and dispatches an initialization transaction that derives an ephemeral Program Derived Address (PDA).
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// Layer 2 — Declarative Anchor Guard (Rust Crate)</strong>
                A lightweight macro in the smart contract that checks PDA seeds, verifies the cluster clock expiry, and consumes the authorization account in the same instruction, refunding rent lamports back to the relayer.
              </p>
            </div>

            <blockquote className="my-10 py-6 px-8 bg-neutral-100 border-l-8 border-black font-mono text-base sm:text-lg font-bold italic">
              “Access control should never contaminate your core financial math. The contract shouldn&apos;t know what a KYC vendor is. It only needs to know whether an atomic authorization ticket exists, is unexpired, matches the caller, and closes cleanly.”
              <span className="block not-italic font-black text-xs uppercase mt-3 text-neutral-600">
                — Vinicius Pontual, SDK Design Invariants
              </span>
            </blockquote>
          </section>

          {/* SEÇÃO 03 */}
          <section id="code-implementation" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              03. Implementation: Rust Anchor Macro &amp; Struct
            </h2>
            <p>
              The on-chain component is distributed as a lightweight Rust crate (`strata-auth-core`) that injects deterministic account validation constraints:
            </p>

            {/* CÓDIGO NÍTIDO COM FUNDO CLARO */}
            <div className="font-mono text-xs sm:text-sm bg-neutral-100 text-neutral-900 p-5 border-2 border-black space-y-2 overflow-x-auto">
              <p className="text-neutral-500 font-bold">// Rust Anchor Account Definition &amp; Constraints</p>
              <p className="text-neutral-800 font-bold">#[account]</p>
              <p><span className="font-bold text-black">pub struct</span> AuthorizationRecord &#123;</p>
              <p className="pl-4"><span className="font-bold text-black">pub</span> wallet: <span className="font-semibold text-neutral-700">Pubkey</span>,</p>
              <p className="pl-4"><span className="font-bold text-black">pub</span> scope: <span className="font-semibold text-neutral-700">AuthScope</span>, <span className="text-neutral-500">// Custom Permission Enum</span></p>
              <p className="pl-4"><span className="font-bold text-black">pub</span> expires_at: <span className="font-semibold text-neutral-700">i64</span>, <span className="text-neutral-500">// Solana Clock Unix Timestamp</span></p>
              <p className="pl-4"><span className="font-bold text-black">pub</span> nonce: [<span className="font-semibold text-neutral-700">u8</span>; 16], <span className="text-neutral-500">// Single-use anti-replay buffer</span></p>
              <p className="pl-4"><span className="font-bold text-black">pub</span> bump: <span className="font-semibold text-neutral-700">u8</span>,</p>
              <p>&#125;</p>
              <p className="text-neutral-500 font-bold pt-2">// Anchor Accounts Guard</p>
              <p><span className="font-bold text-black">#[derive(Accounts)]</span></p>
              <p><span className="font-bold text-black">pub struct</span> GuardedInstruction&lt;&apos;info&gt; &#123;</p>
              <p className="pl-4 text-neutral-700">#[account(</p>
              <p className="pl-8 text-neutral-700">mut,</p>
              <p className="pl-8 text-neutral-700">close = relayer,</p>
              <p className="pl-8 text-neutral-700">seeds = [b&quot;auth&quot;, user.key().as_ref(), authorization.nonce.as_ref()],</p>
              <p className="pl-8 text-neutral-700">bump = authorization.bump,</p>
              <p className="pl-8 text-neutral-700">has_one = wallet</p>
              <p className="pl-4 text-neutral-700">)]</p>
              <p className="pl-4"><span className="font-bold text-black">pub</span> authorization: <span className="font-semibold text-neutral-700">Account&lt;&apos;info, AuthorizationRecord&gt;</span>,</p>
              <p className="pl-4">#[account(mut)]</p>
              <p className="pl-4"><span className="font-bold text-black">pub</span> user: <span className="font-semibold text-neutral-700">Signer&lt;&apos;info&gt;</span>,</p>
              <p className="pl-4"><span className="font-bold text-black">pub</span> relayer: <span className="font-semibold text-neutral-700">SystemAccount&lt;&apos;info&gt;</span>,</p>
              <p>&#125;</p>
            </div>
          </section>

          {/* SEÇÃO 04 */}
          <section id="typescript-client" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              04. TypeScript Client API: 3-Line Integration
            </h2>
            <p>
              On the backend service, developers interact with the `@zanvexis/solana-auth` client package to generate and commit single-use tickets:
            </p>

            {/* CÓDIGO TS COM FUNDO CLARO */}
            <div className="font-mono text-xs sm:text-sm bg-neutral-100 text-neutral-900 p-5 border-2 border-black space-y-2 overflow-x-auto">
              <p className="text-neutral-500 font-bold">// TypeScript Backend Relayer Dispatch</p>
              <p><span className="font-bold text-black">import</span> &#123; AuthTicketClient &#125; <span className="font-bold text-black">from</span> <span className="text-neutral-700 font-semibold">&apos;@zanvexis/solana-auth&apos;</span>;</p>
              <p className="pt-2"><span className="font-bold text-black">const</span> client = <span className="font-bold text-black">new</span> AuthTicketClient(connection, relayerKeypair, PROGRAM_ID);</p>
              <p className="pt-2"><span className="text-neutral-500 font-bold">// 1. Generate and submit single-use PDA</span></p>
              <p><span className="font-bold text-black">const</span> ticket = <span className="font-bold text-black">await</span> client.issueTicket(&#123;</p>
              <p className="pl-4">userWallet: userPubkey,</p>
              <p className="pl-4">scope: <span className="text-neutral-700 font-semibold">&apos;senior_tranche_deposit&apos;</span>,</p>
              <p className="pl-4">ttlSeconds: 600, <span className="text-neutral-500">// 10 minute timeout</span></p>
              <p>&#125;);</p>
              <p className="pt-2"><span className="text-neutral-500 font-bold">// 2. Return auth accounts bundle directly to frontend</span></p>
              <p>res.json(&#123; authPda: ticket.pda, nonce: ticket.nonce &#125;);</p>
            </div>
          </section>

          {/* SEÇÃO 05 */}
          <section id="security-invariants" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              05. Security Invariants &amp; Exploit Mitigations
            </h2>
            <p>
              The SDK closes the common attack vectors that affect naive permissioning architectures:
            </p>

            <div className="space-y-3 font-mono text-sm border-t-2 border-black pt-4">
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">01 / Atomic Account Closure:</strong> By mandating <code className="font-bold">close = relayer</code> on instruction completion, the PDA is wiped from state within the exact slot it was consumed. Replay attacks are mathematically impossible.
              </div>
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">02 / Unpredictable PDA Seeds:</strong> Using a 16-byte cryptographically secure random nonce inside the derivation seeds prevents attackers from predicting or squatting on authorization account addresses.
              </div>
              <div className="py-2">
                <strong className="text-black uppercase">03 / Compute Unit Budget Optimization:</strong> Verifying an existing PDA consumes less than 4,200 Compute Units, compared to over 20,000 CUs when evaluating raw Ed25519 signature precompiles inside instruction blocks.
              </div>
            </div>
          </section>

          {/* SEÇÃO 06 */}
          <section id="specs-and-packages" className="space-y-6 pt-6 border-t-4 border-black">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              06. Package Manifest &amp; Compatibility Matrix
            </h2>
            <p className="text-base text-neutral-700">
              Artifacts and distribution specs for smart contract and client integration:
            </p>

            <div className="border-2 border-black overflow-x-auto">
              <table className="w-full text-left font-mono text-xs sm:text-sm">
                <thead className="bg-black text-white uppercase border-b-2 border-black">
                  <tr>
                    <th className="p-3">Package / Crate</th>
                    <th className="p-3">Runtime</th>
                    <th className="p-3">Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-300 bg-white">
                  <tr>
                    <td className="p-3 font-bold">@zanvexis/solana-auth</td>
                    <td className="p-3 font-mono">Node.js 18+ / Bun</td>
                    <td className="p-3">TypeScript client, nonce generation, and relayer submission driver.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">strata-auth-core</td>
                    <td className="p-3 font-mono">Rust / Solana SVM</td>
                    <td className="p-3">Anchor account validation macros, seed builders, and clock guards.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="font-mono text-xs sm:text-sm bg-neutral-100 border-2 border-black p-4 space-y-2 mt-4">
              <div><strong>GITHUB:</strong> <a href="https://github.com/Vinisilva0010/solana-access-control-sdk" target="_blank" rel="noopener noreferrer" className="underline font-bold">github.com/Vinisilva0010/solana-access-control-sdk</a></div>
              <div><strong>COMPATIBILITY:</strong> Solana CLI 1.18+ // Anchor 0.30.1 // Rust 1.75+</div>
              <div><strong>LICENSE:</strong> MIT / Apache 2.0 Dual License</div>
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
                <a href="#the-developer-problem" className="block hover:underline text-black">
                  01. Solana Permissioning Problem
                </a>
                <a href="#dual-access-pattern" className="block hover:underline text-black">
                  02. Dual Access Pattern
                </a>
                <a href="#code-implementation" className="block hover:underline text-black">
                  03. Rust Anchor Contract Macro
                </a>
                <a href="#typescript-client" className="block hover:underline text-black">
                  04. TypeScript Client API
                </a>
                <a href="#security-invariants" className="block hover:underline text-black">
                  05. Security Invariants
                </a>
                <a href="#specs-and-packages" className="block hover:underline text-black">
                  06. Package Manifest &amp; Specs
                </a>
              </nav>
            </div>

            <div className="border-t-2 border-neutral-300 pt-6 space-y-3">
              <span className="text-xs uppercase font-black text-neutral-500 block">
                DEVELOPER RESOURCES
              </span>
              <a
                href="https://github.com/Vinisilva0010/solana-access-control-sdk"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-black !text-white py-3 font-black text-xs uppercase hover:bg-neutral-800 transition-colors"
              >
                View Repository on GitHub [›]
              </a>
              <Link
                href="/projetos/camada-identidade-ssi-solana"
                className="block w-full text-center border-2 border-black py-2.5 font-black text-xs uppercase hover:bg-neutral-100 transition-colors"
              >
                Read SSI Architecture Spec
              </Link>
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
          
          {/* PROJETO 1: SSI TRUST LAYER */}
          <article className="space-y-4">
            <Link 
              href="/projetos/camada-identidade-ssi-solana" 
              className="block w-full border-4 border-black group overflow-hidden"
            >
              <div className="relative w-full h-56 bg-neutral-950">
                <Image
                  src="/projects/ssi.png"
                  alt="SSI Trust Layer Architecture"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase text-neutral-500 font-bold block">
                IDENTITY // W3C VERIFIABLE CREDENTIALS
              </span>
              <h4 className="text-xl font-black uppercase leading-tight text-black hover:underline">
                <Link href="/projetos/camada-identidade-ssi-solana">
                  SSI Trust Layer: Decentralized Identity
                </Link>
              </h4>
            </div>

            <div className="pt-2 border-t-2 border-neutral-200 flex justify-between items-center font-mono text-xs">
              <Link 
                href="/projetos/camada-identidade-ssi-solana" 
                className="font-black uppercase underline hover:text-neutral-600"
              >
                Read Specification ›
              </Link>
              <span className="text-neutral-500 font-bold">JUN 2026</span>
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

          {/* PROJETO 3: SMARTFLOW */}
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

        </div>
      </section>
    </div>
  );
}