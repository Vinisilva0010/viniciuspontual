import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AutoOrigem — Phygital Anti-Counterfeiting & Solana Compressed NFT Passports",
  description:
    "Industrial supply chain authentication engine binding uncloneable NXP NTAG 424 DNA cryptographic NFC chips to Metaplex Bubblegum compressed NFTs on Solana.",
  keywords: [
    "Solana",
    "RWA",
    "Phygital",
    "Metaplex Bubblegum",
    "Compressed NFTs",
    "Anchor",
    "Rust",
    "NFC NTAG 424 DNA",
    "Supply Chain Security",
    "Anti-Counterfeiting",
  ],
  authors: [{ name: "Vinicius Pontual" }],
  openGraph: {
    title: "AutoOrigem // Solana Phygital RWA Authentication Engine",
    description:
      "Deterministic physical-to-digital twin architecture fighting industrial counterfeiting with AES-128 dynamic SUN proofs and on-chain state trees.",
    type: "article",
    publishedTime: "2026-05-10T00:00:00.000Z",
    authors: ["Vinicius Pontual"],
  },
};

export default function AutoOrigemProjectPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "AutoOrigem: Industrial Phygital Authentication via Solana Compressed NFTs",
    description:
      "A zero-knowledge physical verification and digital passport architecture combining NXP NTAG 424 DNA cryptographic hardware with Metaplex Bubblegum state compression on Solana.",
    author: {
      "@type": "Person",
      name: "Vinicius Pontual",
      jobTitle: "Founder & Lead Systems Architect",
    },
    datePublished: "2026-05-10",
    dateModified: "2026-09-09",
    programmingLanguage: "Rust, TypeScript, Python",
    runtimePlatform: "Solana SVM, Metaplex Bubblegum, NXP SUN NFC Hardware",
    codeRepository: "https://github.com/Vinisilva0010/auto-origem",
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
          <span className="font-black text-black">[ RESEARCH REPORT // 07 ]</span>
          <span>•</span>
          <span>COLOSSEUM WORLD&apos;S FAIR</span>
          <span>•</span>
          <span>PHYGITAL RWA INFRASTRUCTURE</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[1.05] mb-6 text-black">
          AutoOrigem: Uncloneable Phygital Hardware &amp; Solana Compressed NFT Passports
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-800 font-medium max-w-4xl leading-relaxed mb-6">
          Binding cryptographic NXP silicon tags directly to Solana State Compression Merkle trees, delivering zero-app consumer verification and tamper-evident provenance across industrial supply chains.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-neutral-200 font-mono text-sm text-neutral-600">
          <div>
            BY <span className="font-black text-black">VINICIUS PONTUAL</span> — SYSTEMS &amp; HARDWARE ARCHITECT
          </div>
          <div>DEPLOYED: MAY 2026 // ANCHOR + METAPLEX BUBBLEGUM</div>
        </div>
      </header>

      {/* IMAGEM PRINCIPAL ABERTA */}
      <div className="w-full mb-16 border-4 border-black">
        <div className="relative w-full h-[360px] sm:h-[500px] lg:h-[620px] bg-neutral-950">
          <Image
            src="/projects/rwa-autoparts.png"
            alt="AutoOrigem Dual Identity Architecture: Cryptographic NFC to Solana cNFT"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
        <div className="p-3 bg-neutral-100 font-mono text-xs text-neutral-700 border-t-2 border-black flex flex-wrap justify-between items-center gap-2">
          <span>FIG 1.0: NXP NTAG 424 DNA CHIP → DYNAMIC SUN AES-128 AUTHENTICATION → METAPLEX BUBBLEGUM CNFT</span>
          <span className="font-bold uppercase">[ HARDWARE &amp; SVM INTEGRATION SPECIFICATION ]</span>
        </div>
      </div>

      {/* CORPO DO ARTIGO COM TOC LATERAL STICKY */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* COLUNA PRINCIPAL DE LEITURA */}
        <article className="lg:col-span-8 space-y-14 text-neutral-900 leading-relaxed text-lg sm:text-xl">
          
          {/* STATS EM LINHA */}
          <div className="flex flex-wrap gap-8 py-6 border-y-2 border-black font-mono">
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Counterfeiting Loss</span>
              <strong className="text-2xl font-black text-black">R$ 514B/yr</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Physical Security</span>
              <strong className="text-2xl font-black text-black">NTAG 424 DNA</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Minting Cost (1M)</span>
              <strong className="text-2xl font-black text-black">~$5.00 Total</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Verification Flow</span>
              <strong className="text-2xl font-black text-black">Zero-App WebTap</strong>
            </div>
          </div>

          {/* SEÇÃO 01 */}
          <section id="the-counterfeiting-crisis" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              01. The Industrial Crisis: The R$ 514B Failure of Legacy Serial Numbers
            </h2>
            <p>
              In 2025, the Brazilian economy registered a historic loss of over R$ 514 billion directly attributed to smuggling and industrial counterfeiting. Automotive spare parts accounted for R$ 13 billion of this total. Unlike counterfeit consumer apparel, forged automotive components—such as structural bearings, hydraulic shock absorbers, brake pads, and high-intensity headlights—pose immediate bodily harm risks. A compromised bearing failure at highway velocities results in fatal vehicular collisions.
            </p>
            <p>
              Every legacy defensive layer currently deployed across commercial retail has failed completely:
            </p>
            <ul className="space-y-3 list-disc pl-6 font-medium text-base sm:text-lg">
              <li><strong>Optical QR Codes &amp; Barcodes:</strong> Trivially duplicated. Counterfeiters photograph a genuine box in a showroom, print high-resolution replicas onto thousands of illicit packages, and pass basic optical checks.</li>
              <li><strong>Holographic Security Seals:</strong> Industrial print shops produce visually indistinguishable counterfeit holograms at fraction-of-a-cent marginal costs.</li>
              <li><strong>Siloed Enterprise Databases:</strong> Centralized serial validation portals invite database manipulation and lack transparent, public interoperability for downstream mechanics and insurers.</li>
            </ul>
          </section>

          {/* SEÇÃO 02 */}
          <section id="cryptographic-silicon" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              02. The Hardware Foundation: NXP NTAG 424 DNA &amp; Dynamic SUN
            </h2>
            <p>
              AutoOrigem eliminates cloneability at the physical boundary. Each physical component is tagged during packaging with an <strong>NXP NTAG 424 DNA</strong> cryptographic adhesive label.
            </p>
            <p>
              Unlike conventional NFC tags that broadcast static string identifiers, the NTAG 424 DNA utilizes native <strong>Secure Unique NFC (SUN)</strong> technology powered by onboard AES-128 cryptographic coprocessors:
            </p>

            <div className="space-y-4 my-8 pl-6 border-l-4 border-black font-mono text-base sm:text-lg">
              <p>
                <strong className="text-black font-black uppercase block">// Inviolable Silicon Key Isolation</strong>
                The AES-128 master secret key is injected into hardware security storage during factory provisioning. The key is physically locked and mathematically impossible to extract via eavesdropping or power analysis.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// Ephemeral Ciphertext Generation (Zero-Replay)</strong>
                On every smartphone tap, the tag increments an internal hardware counter and generates a dynamic, one-time cryptographic signature (CMAC). A recorded URL string cannot be intercepted and re-used on a fake part because the server rejects already-consumed counter states.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// Tamper-Evident Physical Construction</strong>
                Available with anti-metal insulation and tamper-evident frangible silicon tracks. If an adversary attempts to peel the sticker off a genuine caliper to affix it to a counterfeit, the microscopic antenna antenna traces tear, permanently bricking the chip.
              </p>
            </div>

            <blockquote className="my-10 py-6 px-8 bg-neutral-100 border-l-8 border-black font-mono text-base sm:text-lg font-bold italic">
              “Static identifiers are useless against industrial piracy. A physical asset requires an uncloneable hardware root of trust that computes a fresh cryptographic proof for every interaction without revealing its internal secret.”
              <span className="block not-italic font-black text-xs uppercase mt-3 text-neutral-600">
                — Vinicius Pontual, Hardware Integration Dossier
              </span>
            </blockquote>
          </section>

          {/* SEÇÃO 03 */}
          <section id="solana-compression" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              03. The Solana Advantage: State Compression &amp; Metaplex Bubblegum
            </h2>
            <p>
              Tagging millions of physical items requires near-zero minting overhead. On Ethereum or Layer 2 rollups, minting 1,000,000 separate digital certificates costs tens of thousands of dollars in rent and calldata, completely destroying unit economics for replacement parts retailing under R$ 50.
            </p>
            <p>
              AutoOrigem leverages <strong>Solana State Compression via Metaplex Bubblegum</strong>:
            </p>
            <div className="space-y-3 font-mono text-sm border-t-2 border-black pt-4">
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">01 / Concurrent Merkle Trees:</strong> Instead of reserving expensive on-chain account space for each NFT, millions of digital passports are hashed into compact Merkle tree leaves stored in validator ledger state.
              </div>
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">02 / Sub-Cent Minting Economics:</strong> Minting a digital twin passport costs a fraction of a fraction of a cent (~$5.00 total for 1,000,000 units), unlocking enterprise industrial scale.
              </div>
              <div className="py-2">
                <strong className="text-black uppercase">03 / Composable Ownership:</strong> Despite compression, every digital passport retains standard transferability, enabling secondary marketplace tracking and ownership handoffs during vehicle repairs.
              </div>
            </div>
          </section>

          {/* SEÇÃO 04 */}
          <section id="end-to-end-flow" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              04. The Complete Lifecycle: From Factory Floor to Vehicle Resale
            </h2>
            <p>
              The architecture guarantees friction-free end-to-end validation across every node in the distribution chain:
            </p>

            <ul className="space-y-4 my-6 list-disc pl-6 font-medium">
              <li>
                <strong>Factory Provisioning:</strong> As parts clear the assembly line, a high-speed USB NFC reader flashes the NTAG 424 DNA tag with a secret key and commits product metadata (SKU, batch, production date, specs) to the factory&apos;s local daemon.
              </li>
              <li>
                <strong>Simultaneous cNFT Issuance:</strong> The backend issues a compressed NFT passport via Metaplex Bubblegum signed by the manufacturer&apos;s verified Anchor PDA.
              </li>
              <li>
                <strong>Zero-App Consumer Verification:</strong> A retail customer, garage mechanic, or insurance adjuster taps the part with an unmodified iPhone or Android phone. The browser launches directly to a validation route, verifies the dynamic AES-128 CMAC, and verifies the on-chain cNFT state.
              </li>
              <li>
                <strong>Secondary Market Provenance:</strong> When an authentic used component is transferred to another chassis or vehicle owner, the cNFT is transferred on-chain, preserving an unalterable lifecycle audit log.
              </li>
            </ul>
          </section>

          {/* SEÇÃO 05 */}
          <section id="anchor-smart-contracts" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              05. Smart Contract Architecture &amp; Program Authority
            </h2>
            <p>
              Built using the Anchor Framework on Solana, the on-chain architecture isolates identity and governance into deterministic Program Derived Addresses (PDAs):
            </p>
            <div className="space-y-3 font-mono text-sm border-t-2 border-black pt-4">
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">Manufacturer PDA [seeds: &quot;manufacturer&quot;, pubkey]:</strong> Encapsulates institutional credentials, authorized factory signer keypairs, and master verification status.
              </div>
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">Batch Integrity Anchoring:</strong> Commits periodic cryptographic batch hashes directly to SVM state, proving historical records have not been altered retroactively.
              </div>
              <div className="py-2">
                <strong className="text-black uppercase">Decentralized Fraud Signaling:</strong> Integrates an incentive token rewarding repair shops and mechanics who report invalid dynamic signatures, triangulating counterfeit distribution hubs.
              </div>
            </div>
          </section>

          {/* SEÇÃO 06 */}
          <section id="methodology-hardware-specs" className="space-y-6 pt-6 border-t-4 border-black">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              06. Hardware Specifications &amp; Technical Stack
            </h2>
            <p className="text-base text-neutral-700">
              System components verified for production line deployment:
            </p>

            <div className="border-2 border-black overflow-x-auto">
              <table className="w-full text-left font-mono text-xs sm:text-sm">
                <thead className="bg-black text-white uppercase border-b-2 border-black">
                  <tr>
                    <th className="p-3">Layer</th>
                    <th className="p-3">Technology Component</th>
                    <th className="p-3">Technical Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-300 bg-white">
                  <tr>
                    <td className="p-3 font-bold">Physical Tag</td>
                    <td className="p-3 font-mono">NXP NTAG 424 DNA (Anti-Metal / Tamper)</td>
                    <td className="p-3">Hardware AES-128 coprocessor, Secure Unique NFC dynamic URL generation.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">SVM State Layer</td>
                    <td className="p-3 font-mono">Anchor Framework + Metaplex Bubblegum</td>
                    <td className="p-3">State compression Merkle trees, compressed NFT issuance, Manufacturer PDAs.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Verification Engine</td>
                    <td className="p-3 font-mono">Next.js 14 + Node.js Crypto Engine</td>
                    <td className="p-3">Server-side CMAC validation, dynamic counter checks, zero-app client routing.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Line Provisioning</td>
                    <td className="p-3 font-mono">Python / Node.js + USB ACR122U Reader</td>
                    <td className="p-3">Automated tag key injection, batch packaging sync, and on-chain mint triggers.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="font-mono text-xs sm:text-sm bg-neutral-100 border-2 border-black p-4 space-y-2 mt-4">
              <div><strong>REPOSITORY:</strong> <a href="https://github.com/Vinisilva0010/auto-origem" target="_blank" rel="noopener noreferrer" className="underline font-bold">github.com/Vinisilva0010/auto-origem</a></div>
              <div><strong>DEPLOYMENT TARGET:</strong> Solana Devnet &amp; Mainnet-Beta (State Compression)</div>
              <div><strong>ECOSYSTEM EXPANSION:</strong> Automotive Parts → Alcoholic Spirits (R$ 89.5B) → Luxury Apparel (R$ 55B) → Agro-Chemicals (R$ 20.5B)</div>
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
                <a href="#the-counterfeiting-crisis" className="block hover:underline text-black">
                  01. The Counterfeiting Crisis
                </a>
                <a href="#cryptographic-silicon" className="block hover:underline text-black">
                  02. NTAG 424 DNA Silicon
                </a>
                <a href="#solana-compression" className="block hover:underline text-black">
                  03. Metaplex Bubblegum cNFTs
                </a>
                <a href="#end-to-end-flow" className="block hover:underline text-black">
                  04. End-to-End Lifecycle
                </a>
                <a href="#anchor-smart-contracts" className="block hover:underline text-black">
                  05. Anchor State Architecture
                </a>
                <a href="#methodology-hardware-specs" className="block hover:underline text-black">
                  06. Hardware &amp; Stack Specs
                </a>
              </nav>
            </div>

            <div className="border-t-2 border-neutral-300 pt-6 space-y-3">
              <span className="text-xs uppercase font-black text-neutral-500 block">
                PROJECT ACTIONS
              </span>
              <a
                href="https://github.com/Vinisilva0010/auto-origem"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-black !text-white py-3 font-black text-xs uppercase hover:bg-neutral-800 transition-colors"
              >
                Inspect Source on GitHub [›]
              </a>
              <Link
                href="/contato"
                className="block w-full text-center border-2 border-black py-2.5 font-black text-xs uppercase hover:bg-neutral-100 transition-colors"
              >
                Request Hardware Demo
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

          {/* PROJETO 2: OCTOPUS CROWD */}
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

          {/* PROJETO 3: INVOICECHAIN */}
          <article className="space-y-4">
            <Link 
              href="/projetos/faturamento-kirapay-anchor-solana" 
              className="block w-full border-4 border-black group overflow-hidden"
            >
              <div className="relative w-full h-56 bg-neutral-950">
                <Image
                  src="/projects/kirapay-invoicing.png"
                  alt="InvoiceChain Kirapay Protocol"
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
                  InvoiceChain: Cross-Chain Settlement on Solana
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