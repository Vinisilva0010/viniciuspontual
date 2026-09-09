import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SSI Trust Layer — Self-Sovereign Identity & Authorization PDAs on Solana",
  description:
    "Institutional compliance and identity layer for Solana DeFi. Integrates Veramo W3C Verifiable Credentials with ephemeral Authorization PDAs in Anchor to verify KYC off-chain without leaking PII.",
  keywords: [
    "Solana",
    "Self-Sovereign Identity",
    "SSI",
    "Verifiable Credentials",
    "Anchor",
    "Rust",
    "W3C DID",
    "Zero-Knowledge Proofs",
    "Authorization PDA",
    "DeFi Compliance",
  ],
  authors: [{ name: "Vinicius Pontual" }],
  openGraph: {
    title: "SSI Trust Layer // Solana Ephemeral Identity Architecture",
    description:
      "Off-chain W3C cryptographic verification paired with short-lived on-chain Authorization PDAs, preventing PII leakage on the Solana SVM.",
    type: "article",
    publishedTime: "2026-06-12T00:00:00.000Z",
    authors: ["Vinicius Pontual"],
  },
};

export default function SSITrustLayerProjectPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "SSI Trust Layer: Verifiable Credentials & Ephemeral Authorization PDAs on Solana",
    description:
      "A privacy-preserving compliance architecture combining off-chain Veramo W3C Verifiable Credentials with deterministic, single-use Authorization PDAs on Solana Anchor programs.",
    author: {
      "@type": "Person",
      name: "Vinicius Pontual",
      jobTitle: "Founder & Lead Systems Architect",
    },
    datePublished: "2026-06-12",
    dateModified: "2026-09-09",
    programmingLanguage: "TypeScript, Rust",
    runtimePlatform: "Node.js 20+, Solana SVM, Veramo Framework",
    codeRepository: "https://github.com/Vinisilva0010/strata-protocol",
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
          <span className="font-black text-black">[ RESEARCH REPORT // 08 ]</span>
          <span>•</span>
          <span>IDENTITY &amp; COMPLIANCE</span>
          <span>•</span>
          <span>SOLANA ANCHOR &amp; W3C VC</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[1.05] mb-6 text-black">
          SSI Trust Layer: Verifiable Credentials &amp; Ephemeral Authorization PDAs on Solana
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-800 font-medium max-w-4xl leading-relaxed mb-6">
          Resolving the institutional DeFi compliance trilemma by coupling off-chain W3C Verifiable Credential evaluation with deterministic, single-use Solana Authorization PDAs—guaranteeing strict KYC enforcement with zero on-chain PII footprint.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-neutral-200 font-mono text-sm text-neutral-600">
          <div>
            BY <span className="font-black text-black">VINICIUS PONTUAL</span> — SYSTEMS &amp; IDENTITY ARCHITECT
          </div>
          <div>DEPLOYED: JUN 2026 // SPEC: W3C DID:KEY + ANCHOR PDA</div>
        </div>
      </header>

      {/* IMAGEM PRINCIPAL ABERTA */}
      <div className="w-full mb-16 border-4 border-black">
        <div className="relative w-full h-[360px] sm:h-[500px] lg:h-[620px] bg-neutral-950">
          <Image
            src="/projects/ssi.png"
            alt="SSI Trust Layer Architecture: Off-chain Verifiable Credential evaluation to Solana Authorization PDA"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
        <div className="p-3 bg-neutral-100 font-mono text-xs text-neutral-700 border-t-2 border-black flex flex-wrap justify-between items-center gap-2">
          <span>FIG 1.0: USER VC PRESENTATION → VERAMO ENGINE VERIFICATION → EPHEMERAL PDA DERIVATION → ANCHOR SETTLEMENT</span>
          <span className="font-bold uppercase">[ IDENTITY ARCHITECTURE SPECIFICATION ]</span>
        </div>
      </div>

      {/* CORPO DO ARTIGO COM TOC LATERAL STICKY */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* COLUNA PRINCIPAL DE LEITURA */}
        <article className="lg:col-span-8 space-y-14 text-neutral-900 leading-relaxed text-lg sm:text-xl">
          
          {/* STATS EM LINHA */}
          <div className="flex flex-wrap gap-8 py-6 border-y-2 border-black font-mono">
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Identity Standard</span>
              <strong className="text-2xl font-black text-black">W3C DID:KEY</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">On-Chain Footprint</span>
              <strong className="text-2xl font-black text-black">0 Bytes PII</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">PDA Validity TTL</span>
              <strong className="text-2xl font-black text-black">600 Seconds</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Replay Immunity</span>
              <strong className="text-2xl font-black text-black">16-Byte Nonce</strong>
            </div>
          </div>

          {/* SEÇÃO 01 */}
          <section id="the-compliance-trilemma" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              01. The Compliance Trilemma: Institutional Capital vs. Privacy
            </h2>
            <p>
              Institutional structured credit vehicles (such as Brazilian FIDCs, syndicated private credit, and invoice factoring facilities) cannot operate within permissionless DeFi rails without adhering to strict AML, OFAC sanctions screening, and investor accreditation frameworks. Conversely, naive on-chain compliance models introduce severe legal and architectural failure modes:
            </p>
            <ul className="space-y-3 list-disc pl-6 font-medium text-base sm:text-lg">
              <li><strong>The Privacy Violation:</strong> Writing personal identification data (names, tax IDs, passport hashes, jurisdictions) directly to immutable public ledgers violates GDPR, LGPD, and international privacy mandates.</li>
              <li><strong>The SVM Compute Exhaustion:</strong> Full on-chain verification of Zero-Knowledge Proofs (ZKPs) directly within Solana program instructions exhausts massive compute unit (CU) quotas, dramatically driving up transaction costs and risking instruction timeouts during periods of cluster congestion.</li>
              <li><strong>The Centralized Whitelist Trap:</strong> Simple custodial whitelists create single points of failure, administrative key exposure, and rigid vendor lock-in that degrades protocol composability.</li>
            </ul>
          </section>

          {/* SEÇÃO 02 */}
          <section id="hybrid-architecture" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              02. Architectural Solution: Off-Chain Verification &amp; On-Chain Anchoring
            </h2>
            <p>
              The SSI Trust Layer deliberately lives <em>around</em> the Anchor smart contract rather than <em>inside</em> it. The core financial program remains focused entirely on execution logic: tranche allocation, liquidation waterfalls, checked math, and redemption cooldowns.
            </p>
            <p>
              Verification is split across an optimized dual-stage execution boundary:
            </p>

            <div className="space-y-4 my-8 pl-6 border-l-4 border-black font-mono text-base sm:text-lg">
              <p>
                <strong className="text-black font-black uppercase block">// Stage 1: Off-Chain Cryptographic Inspection</strong>
                The investor presents a W3C-compliant Verifiable Credential (VC) packaged as a signed JWT to the dedicated SSI daemon. The Veramo engine verifies signature authenticity, issuer authority, expiration timestamps, and policy claims (KYC status, jurisdiction, first-loss risk acceptance).
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// Stage 2: Ephemeral Authorization PDA Emission</strong>
                Upon successful cryptographic verification, the backend signer executes a single transaction creating a short-lived Program Derived Address (PDA) on Solana containing only operational parameters: the user&apos;s wallet pubkey, authorized tranche tier, a 10-minute UNIX expiration timestamp, and a 16-byte random nonce.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// Stage 3: Atomic Consumption &amp; Automatic Burn</strong>
                The investor submits their deposit transaction referencing the Authorization PDA. The Anchor smart contract validates matching criteria, executes the financial transaction, and immediately closes the PDA account, returning rent lamports and nullifying replay opportunities.
              </p>
            </div>

            <blockquote className="my-10 py-6 px-8 bg-neutral-100 border-l-8 border-black font-mono text-base sm:text-lg font-bold italic">
              “Verifying complex cryptographic identity proofs directly on the SVM is an expensive misallocation of compute units. Evaluating credentials off-chain and anchoring atomic, short-lived authorization tickets on-chain is the only production-viable pattern for institutional DeFi.”
              <span className="block not-italic font-black text-xs uppercase mt-3 text-neutral-600">
                — Vinicius Pontual, Architecture Whitepaper
              </span>
            </blockquote>
          </section>

          {/* SEÇÃO 03 */}
          <section id="verifiable-credentials-spec" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              03. Identity Primitives: W3C DIDs &amp; Granular Tranche Claims
            </h2>
            <p>
              Identity begins with cryptographically derived Decentralized Identifiers (<code className="font-mono text-sm bg-neutral-200 px-1 py-0.5">did:key</code>). Because <code className="font-mono text-sm bg-neutral-200 px-1 py-0.5">did:key</code> identifiers are resolved directly from public keys, the system eliminates external blockchain resolution dependencies during the initial operational lifecycle.
            </p>
            <p>
              Verifiable Credentials encode granular claims tailored specifically to risk-segregated credit tranches:
            </p>

            <div className="border-2 border-black overflow-x-auto">
              <table className="w-full text-left font-mono text-xs sm:text-sm">
                <thead className="bg-black text-white uppercase border-b-2 border-black">
                  <tr>
                    <th className="p-3">Claim Attribute</th>
                    <th className="p-3">Senior Tranche Policy</th>
                    <th className="p-3">Junior Tranche Policy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-300 bg-white">
                  <tr>
                    <td className="p-3 font-bold">kycPassed</td>
                    <td className="p-3 text-emerald-700 font-bold">REQUIRED (true)</td>
                    <td className="p-3 text-emerald-700 font-bold">REQUIRED (true)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">allowedJurisdictions</td>
                    <td className="p-3">BR, US, EU, GB</td>
                    <td className="p-3">BR, US, EU, GB</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">firstLossDisclosureAccepted</td>
                    <td className="p-3 text-neutral-500">OPTIONAL (false)</td>
                    <td className="p-3 text-amber-700 font-bold">MANDATORY (true)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">maxDepositPerTx</td>
                    <td className="p-3 font-mono">$100,000 USD Equiv.</td>
                    <td className="p-3 font-mono">$50,000 USD Equiv.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">credentialExpiry</td>
                    <td className="p-3 font-mono">Max 365 Days</td>
                    <td className="p-3 font-mono">Max 365 Days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SEÇÃO 04 */}
          <section id="anchor-pda-contract" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              04. SVM Smart Contract Mechanics: The Authorization Record
            </h2>
            <p>
              On-chain enforcement is implemented through an immutable Anchor account structure. Account seeds enforce strict uniqueness across investor public keys and entropy nonces:
            </p>

            <div className="font-mono text-xs sm:text-sm bg-neutral-100 text-neutral-900 p-5 border-2 border-black space-y-2 overflow-x-auto">
  <p className="text-neutral-500 font-bold">// Rust Anchor Account Definition</p>
  <p className="text-neutral-800 font-bold">#[account]</p>
  <p><span className="font-bold text-black">pub struct</span> AuthorizationRecord &#123;</p>
  <p className="pl-4"><span className="font-bold text-black">pub</span> wallet: <span className="font-semibold text-neutral-700">Pubkey</span>,</p>
  <p className="pl-4"><span className="font-bold text-black">pub</span> tranche: <span className="font-semibold text-neutral-700">TrancheType</span>, <span className="text-neutral-500">// Senior | Junior</span></p>
  <p className="pl-4"><span className="font-bold text-black">pub</span> expires_at: <span className="font-semibold text-neutral-700">i64</span>, <span className="text-neutral-500">// Unix timestamp</span></p>
  <p className="pl-4"><span className="font-bold text-black">pub</span> nonce: [<span className="font-semibold text-neutral-700">u8</span>; 16], <span className="text-neutral-500">// Replay defense</span></p>
  <p className="pl-4"><span className="font-bold text-black">pub</span> bump: <span className="font-semibold text-neutral-700">u8</span>,</p>
  <p>&#125;</p>
  <p className="text-neutral-500 font-bold pt-2">// Seed derivation constraint</p>
  <p className="font-semibold">seeds = [<span className="font-bold text-black">b&quot;auth&quot;</span>, wallet.key().as_ref(), nonce.as_ref()], bump</p>
</div>

            <p className="text-base text-neutral-800">
              During the invocation of <code className="font-bold">deposit</code>, the smart contract executes three non-negotiable checks before processing capital:
            </p>
            <div className="space-y-3 font-mono text-sm border-t-2 border-black pt-4">
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">01 / Wallet Alignment:</strong> Asserts that <code className="font-bold">auth.wallet == ctx.accounts.user.key()</code>. Front-running the transaction with a different signing key triggers an immediate revert.
              </div>
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">02 / Cluster Clock Expiration:</strong> Compares <code className="font-bold">auth.expires_at</code> against <code className="font-bold">Clock::get()?.unix_timestamp</code>, enforcing the 600-second maximum lifespan.
              </div>
              <div className="py-2">
                <strong className="text-black uppercase">03 / Target Tranche Binding:</strong> Confirms that <code className="font-bold">auth.tranche == vault.allowed_tranche</code>, halting any attempt to route Senior-only KYC authorizations into the higher-risk Junior pool.
              </div>
            </div>
          </section>

          {/* SEÇÃO 05 */}
          <section id="security-threat-model" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              05. Adversarial Threat Model &amp; Attack Surface Mitigation
            </h2>
            <p>
              Identity infrastructure operating in financial contexts presents high-value attack surfaces. The architecture implements rigorous countermeasures:
            </p>

            <ul className="space-y-4 my-6 list-disc pl-6 font-medium">
              <li>
                <strong>Replay Attack Prevention:</strong> Once a deposit executes, the Anchor instruction closes the <code className="font-bold">AuthorizationRecord</code> account and transfers its lamports back to the backend relayer. Because the account is destroyed, re-submitting the transaction with identical seeds fails at the account deserialization stage.
              </li>
              <li>
                <strong>Issuer Key Isolation:</strong> In production environments, the Issuer signing key resides in Hardware Security Modules (AWS KMS / HashiCorp Vault) protected by strict IAM boundaries, preventing raw private key exposure in standard server environments.
              </li>
              <li>
                <strong>Strict Environment Partitioning:</strong> DIDs generated for Solana Devnet are hard-coded into separate verification policies from Mainnet-Beta. A credential issued in a staging environment fails cryptographic signature checks if submitted to production.
              </li>
              <li>
                <strong>Wallet Enumeration Defense:</strong> The verification API applies strict IP-level rate limiting (maximum 10 attempts per 15 minutes) and requires signed wallet authentication headers before revealing credential issuance status, neutralizing scraping vectors.
              </li>
            </ul>
          </section>

          {/* SEÇÃO 06 */}
          <section id="maturity-roadmap" className="space-y-6 pt-6 border-t-4 border-black">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              06. Architecture Roadmap: Towards Native Zero-Knowledge Verification
            </h2>
            <p className="text-base text-neutral-700">
              The SSI Trust Layer follows a phased engineering progression towards trustless zero-knowledge proofs:
            </p>

            <div className="space-y-3 font-mono text-xs sm:text-sm font-bold">
              <div className="border border-black p-4 bg-neutral-100">
                <span className="text-black block font-black uppercase">// Phase 01: Veramo MVP &amp; Authorization PDAs (Current)</span>
                Modular Veramo agent configuration with SQLite/Postgres keystores, W3C JWT credential issuance, ephemeral Authorization PDA derivation, and Anchor integration testing.
              </div>
              <div className="border border-black p-4 bg-white">
                <span className="text-black block font-black uppercase">// Phase 02: Automated KYC Integration &amp; Real-Time Sanctions</span>
                Direct webhook ingestion from tier-1 compliance providers (Sumsub / Persona), automatic credential minting, and dynamic revocation checks utilizing the W3C <code className="font-bold">StatusList2021</code> specification.
              </div>
              <div className="border border-black p-4 bg-white">
                <span className="text-black block font-black uppercase">// Phase 03: Circom &amp; SnarkJS Selective Disclosure</span>
                Migrating from JWT claim inspection to zero-knowledge circuits compiled via Circom. Investors generate client-side zk-SNARK proofs demonstrating compliance without revealing underlying claim values even to the verification backend.
              </div>
            </div>

            <div className="font-mono text-xs sm:text-sm bg-neutral-100 border-2 border-black p-4 space-y-2 mt-6">
              <div><strong>REPOSITORY:</strong> <a href="https://github.com/Vinisilva0010/strata-protocol" target="_blank" rel="noopener noreferrer" className="underline font-bold">github.com/Vinisilva0010/strata-protocol</a></div>
              <div><strong>STACK:</strong> Veramo Framework 5.x // Anchor 0.30.1 // Node.js 20+ // Solana web3.js</div>
              <div><strong>COMMERCIAL APPLICATIONS:</strong> Institutional DeFi Onboarding SDK // Independent Verification Daemon // Solana KYC Issuer Registry</div>
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
                <a href="#the-compliance-trilemma" className="block hover:underline text-black">
                  01. The Compliance Trilemma
                </a>
                <a href="#hybrid-architecture" className="block hover:underline text-black">
                  02. Hybrid SSI Architecture
                </a>
                <a href="#verifiable-credentials-spec" className="block hover:underline text-black">
                  03. W3C DIDs &amp; Claim Policies
                </a>
                <a href="#anchor-pda-contract" className="block hover:underline text-black">
                  04. Anchor PDA Contract
                </a>
                <a href="#security-threat-model" className="block hover:underline text-black">
                  05. Threat Model &amp; Mitigations
                </a>
                <a href="#maturity-roadmap" className="block hover:underline text-black">
                  06. ZK Roadmap &amp; Commercialization
                </a>
              </nav>
            </div>

            <div className="border-t-2 border-neutral-300 pt-6 space-y-3">
              <span className="text-xs uppercase font-black text-neutral-500 block">
                PROJECT ACTIONS
              </span>
              <a
                href="https://github.com/Vinisilva0010/strata-protocol"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-black !text-white py-3 font-black text-xs uppercase hover:bg-neutral-800 transition-colors"
              >
                Inspect Source Code [›]
              </a>
              <Link
                href="/contato"
                className="block w-full text-center border-2 border-black py-2.5 font-black text-xs uppercase hover:bg-neutral-100 transition-colors"
              >
                Inquire Compliance SDK
              </Link>
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
          
          {/* PROJETO 1: STRATA PROTOCOL */}
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

          {/* PROJETO 2: RWA AUTOPEÇAS */}
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