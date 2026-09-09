import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Campus Points Protocol — Soulbound Academic Reputation on Solana Token-2022",
  description:
    "Decentralized student incentive and academic reputation infrastructure on Solana utilizing SPL Token-2022 Non-Transferable extensions and atomic CPI burn mechanics.",
  keywords: [
    "Solana",
    "Token-2022",
    "SPL Token",
    "Non-Transferable",
    "Soulbound Tokens",
    "Anchor",
    "Rust",
    "Academic Reputation",
    "Proof of Attendance",
  ],
  authors: [{ name: "Vinicius Pontual" }],
  openGraph: {
    title: "Campus Points // SPL Token-2022 Soulbound Reputation Engine",
    description:
      "Immutable merit binding, daily institutional quota governance, and single-instruction burn redemption on Solana Devnet.",
    type: "article",
    publishedTime: "2026-09-05T00:00:00.000Z",
    authors: ["Vinicius Pontual"],
  },
};

export default function CampusPointsProjectPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Campus Points Protocol: Soulbound Academic Reputation on Solana Token-2022",
    description:
      "A decentralized campus incentive engine utilizing Solana SPL Token-2022 Non-Transferable mint extensions, issuer PDA rate limits, and atomic burn redemptions.",
    author: {
      "@type": "Person",
      name: "Vinicius Pontual",
      jobTitle: "Founder & Smart Contract Engineer",
    },
    datePublished: "2026-09-05",
    dateModified: "2026-09-09",
    programmingLanguage: "Rust, TypeScript",
    runtimePlatform: "Solana SVM (Token-2022)",
    codeRepository: "https://github.com/Vinisilva0010/campus-points",
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
          <span className="font-black text-black">[ RESEARCH REPORT // 03 ]</span>
          <span>•</span>
          <span>SOLANA TOKEN-2022</span>
          <span>•</span>
          <span>DEVNET DEPLOYED</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[1.05] mb-6 text-black">
          Campus Points: Soulbound Academic Merit &amp; Micro-Incentives via Token-2022
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-800 font-medium max-w-4xl leading-relaxed mb-6">
          Eliminating secondary black markets, proxy attendance, and administrative friction in university rewards by enforcing non-transferable token constraints and atomic CPI burn loops directly in SVM bytecode.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-neutral-200 font-mono text-sm text-neutral-600">
          <div>
            BY <span className="font-black text-black">VINICIUS PONTUAL</span> — SMART CONTRACT ENGINEER
          </div>
          <div>DEPLOYED: SEP 05, 2026 // PROGRAM ID: 53sE...o5Bb</div>
        </div>
      </header>

      {/* IMAGEM PRINCIPAL ABERTA */}
      <div className="w-full mb-16 border-4 border-black">
        <div className="relative w-full h-[360px] sm:h-[500px] lg:h-[620px] bg-neutral-950">
          <Image
            src="/projects/academic-reputation.png"
            alt="Campus Points Token-2022 Architecture and Execution Flow"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
        <div className="p-3 bg-neutral-100 font-mono text-xs text-neutral-700 border-t-2 border-black flex flex-wrap justify-between items-center gap-2">
          <span>FIG 1.0: ISSUER QUOTA VALIDATION → SOULBOUND ATA MINTING → CATALOG CPI BURN REDEMPTION</span>
          <span className="font-bold uppercase">[ TOKEN-2022 SPECIFICATION ]</span>
        </div>
      </div>

      {/* CORPO DO ARTIGO EM 2 COLUNAS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* COLUNA PRINCIPAL DE LEITURA */}
        <article className="lg:col-span-8 space-y-14 text-neutral-900 leading-relaxed text-lg sm:text-xl">
          
          {/* STATS EM LINHA */}
          <div className="flex flex-wrap gap-8 py-6 border-y-2 border-black font-mono">
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Standard</span>
              <strong className="text-2xl font-black text-black">SPL Token-2022</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Transferability</span>
              <strong className="text-2xl font-black text-black">Soulbound (0)</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Settlement</span>
              <strong className="text-2xl font-black text-black">Sub-Second SVM</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Redemption State</span>
              <strong className="text-2xl font-black text-black">Atomic CPI Burn</strong>
            </div>
          </div>

          {/* SEÇÃO 01 */}
          <section id="the-problem" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              01. The Problem: Student Disengagement &amp; The Fraudulent Merit Economy
            </h2>
            <p>
              University students navigate intense economic friction. Between tuition, transport, and daily living costs, extracurricular engagement collapses: classroom attendance drops, technical workshops run empty, and peer tutoring stalls. Traditional complementary hour programs fail because paper-based sign-in sheets and centralized portals invite rampant fraud—students sign attendance sheets for absent peers or trade bureaucratic credits.
            </p>
            <p>
              When academic rewards carry real financial utility (cafeteria meals, campus bookstore credits, parking passes), any off-the-shelf database or standard ERC-20/SPL token invites catastrophic failure:
            </p>
            <ul className="space-y-3 list-disc pl-6 font-medium text-base sm:text-lg">
              <li><strong>Informal Arbitrage:</strong> Students who earn points through academic achievement sell balances to disengaged students who want the benefits without the work.</li>
              <li><strong>Double-Spending &amp; Voucher Resale:</strong> Off-chain QR codes and paper vouchers are frequently screenshot, cloned, and claimed multiple times at campus points of sale.</li>
              <li><strong>Rampant Inflation:</strong> Departments distribute points with zero on-chain supply caps or accountability, diluting university sponsor budgets.</li>
            </ul>
          </section>

          {/* SEÇÃO 02 */}
          <section id="token-2022-soulbound" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              02. Native Soulbound Extension: Non-Transferable at Bytecode Level
            </h2>
            <p>
              Campus Points resolves the arbitrage problem at the root. Rather than implementing soft application-layer transfer checks, the protocol instantiates an SPL Token-2022 mint configured with the native <code className="font-mono text-sm bg-neutral-200 px-1.5 py-0.5 font-bold">NonTransferable</code> extension.
            </p>
            <p>
              Once minted to a student’s Associated Token Account (ATA), the tokens are cryptographically locked to that public key. Any transaction attempting an SPL transfer instruction—whether executed via Phantom, CLI, or malicious CPI—is halted by the Solana runtime before state mutation occurs. Merits remain bound to the student who earned them.
            </p>

            <blockquote className="my-10 py-6 px-8 bg-neutral-100 border-l-8 border-black font-mono text-base sm:text-lg font-bold italic">
              “If you attempt to enforce soulbound behavior in Web2 databases or standard SPL contracts, students will find loopholes to sell balances. In Token-2022, transfer rejection is enforced natively by the SVM validator engine. Transferability is simply not a valid state transition.”
              <span className="block not-italic font-black text-xs uppercase mt-3 text-neutral-600">
                — Vinicius Pontual, Architecture Walkthrough
              </span>
            </blockquote>
          </section>

          {/* SEÇÃO 03: VÍDEO DE SUBMISSÃO */}
          <section id="submission-video" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              03. Demonstration: Architecture Walkthrough &amp; Devnet Run
            </h2>
            <p className="text-base text-neutral-700">
              Technical presentation covering the real-world university student crisis, the three core architectural pillars on Solana, issuer mobile workflows, and on-chain burn verification:
            </p>

            {/* CONTAINER DO VÍDEO YOUTUBE */}
            <div className="w-full border-4 border-black bg-black">
              <div className="relative w-full aspect-video">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/FmFlQecLM5A"
                  title="Campus Points Protocol Architecture and Walkthrough"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <div className="p-3 bg-neutral-100 font-mono text-xs text-neutral-700 border-t-2 border-black flex justify-between items-center">
                <span>CAMPUS POINTS PROTOCOL // TECHNICAL DEMONSTRATION &amp; PILOT ROADMAP</span>
                <a
                  href="https://www.youtube.com/watch?v=FmFlQecLM5A"
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
          <section id="pda-architecture" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              04. Smart Contract Mechanics: PDAs &amp; Emission Quotas
            </h2>
            <p>
              To maintain rigid accounting across university faculties, protocol state is isolated into three distinct Program Derived Address (PDA) structures managed by the Anchor program:
            </p>

            <div className="space-y-4 my-8 pl-6 border-l-4 border-black font-mono text-base sm:text-lg">
              <p>
                <strong className="text-black font-black uppercase block">// CampusConfig PDA [seeds: &quot;config&quot;]</strong>
                Holds protocol-wide authority, the Token-2022 Mint address, and master operational state. Only the protocol owner can register new issuers or update catalog items.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// IssuerAccount PDA [seeds: &quot;issuer&quot;, issuer_pubkey]</strong>
                Maintains issuer authority status and enforces a strict daily rate limit (`daily_limit`). Prevents rogue professors or hackathon organizers from hyper-inflating the point economy.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// RewardAccount PDA [seeds: &quot;reward&quot;, reward_id]</strong>
                Stores campus catalog offerings (cafeteria meals, printing credits, athletic tickets) and defines the exact token burn requirement (`cost: u64`).
              </p>
            </div>
          </section>

          {/* SEÇÃO 05 */}
          <section id="cpi-burn" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              05. Atomic Redemption: Deflationary CPI Burn
            </h2>
            <p>
              When a student redempts an item at a campus vendor, the redemption instruction does not transfer tokens to the store. Instead, the smart contract invokes an atomic Cross-Program Invocation (CPI) to the Token-2022 program to execute a permanent <code className="font-bold">burn</code> instruction:
            </p>
            <div className="space-y-3 font-mono text-sm border-t-2 border-black pt-4">
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">01 / Instant Anatomic Settlement:</strong> The student’s balance is burned in the exact transaction that validates the reward ID.
              </div>
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">02 / Zero Double-Spending:</strong> Because tokens are removed from the ledger instantly, vouchers cannot be redeemed twice at different POS terminals.
              </div>
              <div className="py-2">
                <strong className="text-black uppercase">03 / Sub-Second Finality:</strong> With Solana&apos;s 400ms block times, students receive immediate on-screen checkout confirmations at the cafeteria counter.
              </div>
            </div>
          </section>

          {/* SEÇÃO 06 */}
          <section id="deployments-specs" className="space-y-6 pt-6 border-t-4 border-black">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              06. On-Chain Deployments &amp; Verified Accounts
            </h2>
            <p className="text-base text-neutral-700">
              The contract is deployed and actively testable on Solana Devnet:
            </p>

            <div className="border-2 border-black overflow-x-auto">
              <table className="w-full text-left font-mono text-xs sm:text-sm">
                <thead className="bg-black text-white uppercase border-b-2 border-black">
                  <tr>
                    <th className="p-3">Component</th>
                    <th className="p-3">On-Chain Address / Public Key</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-300 bg-white">
                  <tr>
                    <td className="p-3 font-bold">Program ID</td>
                    <td className="p-3 font-mono">53sEPq9sSPaaYHYf3MdjMXjqMPpRBLpxTSyWs7EMo5Bb</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Mint (Token-2022)</td>
                    <td className="p-3 font-mono">CPi3yJBCqL3p6gGSLq1kqPT5RWp1qbT7RgbdveV9ZpPR</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">CampusConfig PDA</td>
                    <td className="p-3 font-mono">2sbQ9ZoZ7mNYP5RRjQXTSzVhdCjzp6NdD46JBtzEJ7t2</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Master Authority</td>
                    <td className="p-3 font-mono">7aSDp11gPbCCew7yMSQKuBLr6pcKfgwRPtp2QgAE89f3</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">SPL Token Program</td>
                    <td className="p-3 font-mono">TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="font-mono text-xs sm:text-sm bg-neutral-100 border-2 border-black p-4 space-y-2 mt-4">
              <div><strong>REPOSITORY:</strong> <a href="https://github.com/Vinisilva0010/campus-points" target="_blank" rel="noopener noreferrer" className="underline font-bold">github.com/Vinisilva0010/campus-points</a></div>
              <div><strong>BUILD COMMANDS:</strong> <code className="font-bold">anchor build &amp;&amp; anchor test</code></div>
              <div><strong>ROADMAP:</strong> Account Abstraction (SAML/Google SSO embedded wallets) &amp; Gasless Paymaster integration</div>
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
                  01. The Student Disengagement Crisis
                </a>
                <a href="#token-2022-soulbound" className="block hover:underline text-black">
                  02. Token-2022 Soulbound Extension
                </a>
                <a href="#submission-video" className="block hover:underline text-black">
                  03. Demonstration Video
                </a>
                <a href="#pda-architecture" className="block hover:underline text-black">
                  04. PDA State &amp; Emission Quotas
                </a>
                <a href="#cpi-burn" className="block hover:underline text-black">
                  05. Deflationary CPI Burn
                </a>
                <a href="#deployments-specs" className="block hover:underline text-black">
                  06. Verified Deployments &amp; Specs
                </a>
              </nav>
            </div>

            <div className="border-t-2 border-neutral-300 pt-6 space-y-3">
              <span className="text-xs uppercase font-black text-neutral-500 block">
                PROJECT ACTIONS
              </span>
              <a
                href="https://github.com/Vinisilva0010/campus-points"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-black !text-white py-3 font-black text-xs uppercase hover:bg-neutral-800 transition-colors"
              >
                Inspect Source on GitHub [›]
              </a>
              <a
                href="https://www.youtube.com/watch?v=FmFlQecLM5A"
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
          
          {/* PROJETO 1: SINAPSE PROTOCOL */}
          <article className="space-y-4">
            <Link 
              href="/projetos/ia-medica-federada-solana" 
              className="block w-full border-4 border-black group overflow-hidden"
            >
              <div className="relative w-full h-56 bg-neutral-950">
                <Image
                  src="/projects/medical-ai.png"
                  alt="Sinapse Protocol Federated AI"
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

          {/* PROJETO 3: RWA AUTOPEÇAS */}
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

        </div>
      </section>
    </div>
  );
}