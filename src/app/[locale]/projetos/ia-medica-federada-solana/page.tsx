import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sinapse Protocol — Trustless Federated Medical AI Coordination on Solana",
  description:
    "Decentralized orchestration for federated learning in healthcare. Uses Anchor on Solana and Arcium MPC to verify diagnostic contributions without exposing raw patient records.",
  keywords: [
    "Federated Learning",
    "Solana",
    "Anchor",
    "Rust",
    "Medical AI",
    "Arcium MPC",
    "Colosseum Eternal",
    "Bioinformatics",
    "MedMNIST",
  ],
  authors: [{ name: "Vinicius Pontual" }],
  openGraph: {
    title: "Sinapse Protocol // Trustless Federated Medical AI on Solana",
    description:
      "On-chain contribution registry, automated reward distribution, and confidential score aggregation for distributed hospital neural networks.",
    type: "article",
    publishedTime: "2026-09-01T00:00:00.000Z",
    authors: ["Vinicius Pontual"],
  },
};

export default function SinapseProjectPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Sinapse Protocol: Trustless Coordination for Federated Medical AI on Solana",
    description:
      "Decentralized coordination and verification architecture combining PyTorch/Flower federated pipelines with Solana Anchor registries and Arcium MPC confidential scoring.",
    author: {
      "@type": "Person",
      name: "Vinicius Pontual",
      jobTitle: "Founder & Systems Architect",
    },
    datePublished: "2026-09-01",
    dateModified: "2026-09-09",
    programmingLanguage: "Rust, Python, TypeScript",
    runtimePlatform: "Solana SVM, Arcium MPC",
    codeRepository: "https://github.com/Vinisilva0010/sinapse-protocol",
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
          <span className="font-black text-black">[ RESEARCH REPORT // 02 ]</span>
          <span>•</span>
          <span>COLOSSEUM ETERNAL</span>
          <span>•</span>
          <span>DEVNET DEPLOYED</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[1.05] mb-6 text-black">
          Sinapse Protocol: Trustless Coordination for Federated Medical AI on Solana
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-800 font-medium max-w-4xl leading-relaxed mb-6">
          A cryptographic coordination layer enabling sovereign healthcare institutions to collectively train shared diagnostic models without leaking raw patient telemetry or relying on trusted central aggregators.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-neutral-200 font-mono text-sm text-neutral-600">
          <div>
            BY <span className="font-black text-black">VINICIUS PONTUAL</span> — FOUNDER &amp; SYSTEMS ARCHITECT
          </div>
          <div>DEPLOYED: SEP 01, 2026 // PROGRAM ID: B5AC...zdUQ</div>
        </div>
      </header>

      {/* IMAGEM PRINCIPAL ABERTA */}
      <div className="w-full mb-16 border-4 border-black">
        <div className="relative w-full h-[360px] sm:h-[500px] lg:h-[620px] bg-neutral-950">
          <Image
            src="/projects/medical-ai.png"
            alt="Sinapse Protocol Architecture and Federated Training Flow"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
        <div className="p-3 bg-neutral-100 font-mono text-xs text-neutral-700 border-t-2 border-black flex flex-wrap justify-between items-center gap-2">
          <span>FIG 1.0: DISTRIBUTED HOSPITALS → FLOWER FEDERATION → SOLANA REGISTRY → ARCIUM MPC</span>
          <span className="font-bold uppercase">[ VERIFICATION ARCHITECTURE ]</span>
        </div>
      </div>

      {/* CORPO DO ARTIGO COM TOC LATERAL STICKY */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* COLUNA PRINCIPAL DE LEITURA */}
        <article className="lg:col-span-8 space-y-14 text-neutral-900 leading-relaxed text-lg sm:text-xl">
          
          {/* STATS EM LINHA */}
          <div className="flex flex-wrap gap-8 py-6 border-y-2 border-black font-mono">
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Federated Accuracy</span>
              <strong className="text-2xl font-black text-black">85.42%</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Baseline Solo Model</span>
              <strong className="text-2xl font-black text-black">83.65%</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Confidential Engine</span>
              <strong className="text-2xl font-black text-black">Arcium MPC</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">SVM Registry</span>
              <strong className="text-2xl font-black text-black">Anchor 0.30.1</strong>
            </div>
          </div>

          {/* SEÇÃO 01 */}
          <section id="the-problem" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              01. The Problem: The Trust Bottleneck in Collaborative Learning
            </h2>
            <p>
              Federated Learning mathematically guarantees that raw clinical training records—such as DICOM scans, patient histories, and electronic health records—never leave the physical perimeter of a participating hospital. Each facility trains a local neural network on its private GPU clusters and only transmits computed gradient weights to a shared coordinator.
            </p>
            <p>
              However, traditional federated systems suffer from an unaddressed game-theoretic flaw: <strong>trust</strong>. In real-world enterprise healthcare:
            </p>
            <ul className="space-y-3 list-disc pl-6 font-medium text-base sm:text-lg">
              <li><strong>Zero Verification:</strong> How does the network mathematically verify that an institution actually consumed compute and real patient data rather than fabricating synthetic noise?</li>
              <li><strong>Model Poisoning &amp; Sabotage:</strong> What prevents a rogue actor or competitor from submitting perturbed weights designed to degrade diagnostic precision?</li>
              <li><strong>Score Leakage:</strong> How can performance-weighted compensation be allocated without exposing individual institutional training metrics to competing hospital consortiums?</li>
            </ul>
            <p>
              These are not machine learning bottlenecks. They are cryptographically verifiable coordination challenges that require an immutable, high-throughput consensus environment.
            </p>
          </section>

          {/* SEÇÃO 02 */}
          <section id="onchain-verification" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              02. Architectural Solution: On-Chain Hash Registration &amp; Anchor Encasement
            </h2>
            <p>
              Sinapse establishes a deterministic audit trail directly on the Solana SVM. The Python-based ML layer executes on local machines using PyTorch and Flower. Upon the culmination of an epoch, the model parameters are serialized, deterministically hashed, and committed to an on-chain Program Derived Address (PDA) managed by an Anchor smart contract:
            </p>

            <div className="space-y-4 my-8 pl-6 border-l-4 border-black font-mono text-base sm:text-lg">
              <p>
                <strong className="text-black font-black uppercase block">// RegisterHospital</strong>
                Initializes a verifiable `HospitalProfile` account. Binds the facility’s Ed25519 identity key and records institutional credentials to state.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// RecordContribution</strong>
                Commits the cryptographic hash of the round’s gradient update to state. Preconditions enforce that the submitting hospital is not flagged as a saboteur.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// FlagSaboteur</strong>
                A hard contract-level constraint. When an adversarial update is detected, the hospital is permanently flagged in SVM state, reverting any subsequent contribution transactions at runtime.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// DistributeReward</strong>
                Automates protocol token disbursements to verified contributors. Prevents double-spending through an internal `rewardedCount` state tracking invariant.
              </p>
            </div>

            <blockquote className="my-10 py-6 px-8 bg-neutral-100 border-l-8 border-black font-mono text-base sm:text-lg font-bold italic">
              “The machine learning logic is not the hard engineering barrier. The difficult engineering problem is coordinating competing organizations that do not trust each other without leaking sensitive clinical data.”
              <span className="block not-italic font-black text-xs uppercase mt-3 text-neutral-600">
                — Vinicius Pontual, Submission Dossier
              </span>
            </blockquote>
          </section>

          {/* SEÇÃO 03: SUBMISSION DEMO VIDEO */}
          <section id="submission-video" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              03. Demonstration: Colosseum Submission Video
            </h2>
            <p className="text-base text-neutral-700">
              Walkthrough demonstrating live round execution across 3 simulated medical nodes, real-time Python-to-Solana bridging via AnchorPy, and devnet state verification:
            </p>

            {/* EMBEDDED YOUTUBE VIDEO CONTAINER */}
            <div className="w-full border-4 border-black bg-black">
              <div className="relative w-full aspect-video">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/uofUG-L7U70"
                  title="Sinapse Protocol Architecture & Demonstration"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <div className="p-3 bg-neutral-100 font-mono text-xs text-neutral-700 border-t-2 border-black flex justify-between items-center">
                <span>COLOSSEUM ETERNAL // HACKATHON DEMONSTRATION RECORDING</span>
                <a
                  href="https://www.youtube.com/watch?v=uofUG-L7U70"
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
          <section id="confidential-mpc" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              04. Multi-Party Computation: Arcium Confidential Scoring
            </h2>
            <p>
              In production federations, publishing individual gradient loss and test set accuracy scores openly enables sophisticated adversaries to reconstruct training set characteristics via inference attacks.
            </p>
            <p>
              Sinapse integrates an off-chain Multi-Party Computation (MPC) cluster powered by <strong>Arcium</strong>. Contribution scores are secret-shared among MPC nodes:
            </p>
            <div className="space-y-3 font-mono text-sm border-t-2 border-black pt-4">
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">01 / Secret Sharing:</strong> Raw scores are split into randomized cryptographic shares before leaving each hospital’s localized environment.
              </div>
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">02 / Secure Circuit Evaluation:</strong> The Arcium nodes compute the collective aggregate without reconstructing or decrypting any individual institution's raw metric.
              </div>
              <div className="py-2">
                <strong className="text-black uppercase">03 / State Injection:</strong> Only the final aggregate evaluation metric is certified and injected back into the public Solana explorer.
              </div>
            </div>
          </section>

          {/* SEÇÃO 05 */}
          <section id="engineering-transparency" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              05. Systems Specification: Real vs. Scoped Implementation
            </h2>
            <p className="text-base text-neutral-800">
              Institutional engineering mandates strict transparency regarding deployment maturity:
            </p>

            <div className="border-2 border-black overflow-x-auto">
              <table className="w-full text-left font-mono text-xs sm:text-sm">
                <thead className="bg-black text-white uppercase border-b-2 border-black">
                  <tr>
                    <th className="p-3">Component</th>
                    <th className="p-3">Current Status</th>
                    <th className="p-3">Engineering Reality</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-300 bg-white">
                  <tr>
                    <td className="p-3 font-bold">Federated Pipeline</td>
                    <td className="p-3 text-emerald-700 font-black">PRODUCTION REAL</td>
                    <td className="p-3">Flower + PyTorch running on MedMNIST. Achieved 85.42% accuracy across 3 simulated nodes.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">On-Chain Registry</td>
                    <td className="p-3 text-emerald-700 font-black">PRODUCTION REAL</td>
                    <td className="p-3">Anchor program live on Devnet. Enforces state RBAC checks and saboteur blocking.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">AnchorPy Bridge</td>
                    <td className="p-3 text-emerald-700 font-black">PRODUCTION REAL</td>
                    <td className="p-3">Python ML scripts serialize real gradient arrays into cryptographic hashes and sign RPC calls.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Arcium MPC Cluster</td>
                    <td className="p-3 text-amber-700 font-black">SCOPED REAL</td>
                    <td className="p-3">Functional on local MPC Docker network. Aggregates contribution scores, not full 50MB model weights.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Clinical Approval</td>
                    <td className="p-3 text-neutral-500 font-black">NOT CLAIMED</td>
                    <td className="p-3">MedMNIST is an academic benchmark. System is a coordination protocol, not a medical device.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SEÇÃO 06 */}
          <section id="verification-methodology" className="space-y-6 pt-6 border-t-4 border-black">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              06. Methodology &amp; Deployment Artifacts
            </h2>
            <p className="text-base text-neutral-700">
              The automated test suite exercises adversarial state injection, confirming that saboteurs are permanently locked out at the bytecode level without requiring centralized administrative intervention:
            </p>

            <div className="font-mono text-xs sm:text-sm bg-neutral-100 border-2 border-black p-4 space-y-2">
              <div><strong>PROGRAM ID:</strong> B5ACaF9VKaz4m5r1ZZuaysztfkf9Ptun4apgARyPzdUQ</div>
              <div><strong>FRAMEWORK:</strong> Anchor 0.30.1 // Rust 1.78+ // PyTorch 2.2</div>
              <div><strong>TEST SUITE:</strong> <code className="bg-neutral-200 px-1 py-0.5 font-bold">anchor test (incl. test_saboteur_blocked)</code></div>
              <div><strong>REPOSITORY:</strong> <a href="https://github.com/Vinisilva0010/sinapse-protocol" target="_blank" rel="noopener noreferrer" className="underline font-bold">github.com/Vinisilva0010/sinapse-protocol</a></div>
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
                  01. The Trust Bottleneck
                </a>
                <a href="#onchain-verification" className="block hover:underline text-black">
                  02. Anchor State Engine
                </a>
                <a href="#submission-video" className="block hover:underline text-black">
                  03. Demonstration Video
                </a>
                <a href="#confidential-mpc" className="block hover:underline text-black">
                  04. Arcium MPC Scoring
                </a>
                <a href="#engineering-transparency" className="block hover:underline text-black">
                  05. Systems Specification
                </a>
                <a href="#verification-methodology" className="block hover:underline text-black">
                  06. Methodology &amp; Artifacts
                </a>
              </nav>
            </div>

            <div className="border-t-2 border-neutral-300 pt-6 space-y-3">
              <span className="text-xs uppercase font-black text-neutral-500 block">
                PROJECT ACTIONS
              </span>
              <a
                href="https://github.com/Vinisilva0010/sinapse-protocol"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-black !text-white py-3 font-black text-xs uppercase hover:bg-neutral-800 transition-colors"
              >
                Inspect GitHub Repository [›]
              </a>
              <a
                href="https://www.youtube.com/watch?v=uofUG-L7U70"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center border-2 border-black py-2.5 font-black text-xs uppercase hover:bg-neutral-100 transition-colors"
              >
                Watch Demo on YouTube
              </a>
            </div>
          </div>
        </aside>

      </div>

      {/* RODAPÉ EDITORIAL: 3 PROJETOS RELACIONADOS COM IMAGEM */}
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