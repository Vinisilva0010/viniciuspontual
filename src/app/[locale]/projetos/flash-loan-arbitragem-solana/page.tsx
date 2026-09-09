import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solana Flash Loan Arbitrage Engine — Low-Level CPI Routing in Anchor",
  description:
    "Production-grade Solana smart contract executing atomic flash loan arbitrage across MarginFi V2, Raydium AMM V4, and Orca Whirlpool within a single transaction slot.",
  keywords: [
    "Solana",
    "Flash Loan",
    "Arbitrage",
    "Anchor",
    "Rust",
    "MarginFi",
    "Raydium AMM",
    "Orca Whirlpool",
    "Cross-Program Invocation",
    "DeFi",
  ],
  authors: [{ name: "Vinicius Pontual" }],
  openGraph: {
    title: "Solana Flash Loan Arbitrage Engine // Atomic Multi-DEX Routing",
    description:
      "Low-level CPI orchestration using manual discriminators and strict on-chain slippage invariants across Solana liquidity pools.",
    type: "article",
    publishedTime: "2026-04-15T00:00:00.000Z",
    authors: ["Vinicius Pontual"],
  },
};

export default function FlashLoanArbitrageProjectPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Solana Flash Loan Arbitrage Engine",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Solana SVM, Linux, macOS",
    author: {
      "@type": "Person",
      name: "Vinicius Pontual",
      jobTitle: "Smart Contract & Systems Engineer",
    },
    datePublished: "2026-04-15",
    dateModified: "2026-09-09",
    programmingLanguage: "Rust, TypeScript",
    runtimePlatform: "Solana SVM (Anchor 0.32+)",
    codeRepository: "https://github.com/Vinisilva0010/bot-flash-loan",
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
          <span className="font-black text-black">[ DEFI SYSTEMS // 12 ]</span>
          <span>•</span>
          <span>SOLANA ANCHOR &amp; CPIS</span>
          <span>•</span>
          <span>ATOMIC COMPOSITION</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[1.05] mb-6 text-black">
          Atomic Solana Flash Loan Arbitrage Engine
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-800 font-medium max-w-4xl leading-relaxed mb-6">
          A production-grade smart contract orchestrating uncollateralized borrows and multi-DEX routing across MarginFi V2, Raydium AMM V4, and Orca Whirlpool, enforcing zero-risk profit invariants in SVM bytecode.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-neutral-200 font-mono text-sm text-neutral-600">
          <div>
            BY <span className="font-black text-black">VINICIUS PONTUAL</span> — SMART CONTRACT ARCHITECT
          </div>
          <div>DEPLOYED: APR 2026 // ANCHOR 0.32+ // MARGINFI + RAYDIUM + ORCA</div>
        </div>
      </header>

      {/* IMAGEM PRINCIPAL ABERTA */}
      <div className="w-full mb-16 border-4 border-black">
        <div className="relative w-full h-[360px] sm:h-[500px] lg:h-[620px] bg-neutral-950">
          <Image
            src="/projects/flashloan-arbitrage.png"
            alt="Solana Flash Loan Arbitrage Engine Routing Diagram"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
        <div className="p-3 bg-neutral-100 font-mono text-xs text-neutral-700 border-t-2 border-black flex flex-wrap justify-between items-center gap-2">
          <span>FIG 1.0: MARGINFI V2 BORROW → RAYDIUM V4 (USDC→SOL) → ORCA WHIRLPOOL (SOL→USDC) → ATOMIC REPAY</span>
          <span className="font-bold uppercase">[ TRANSACTION EXECUTION LIFECYCLE ]</span>
        </div>
      </div>

      {/* CORPO DO ARTIGO EM 2 COLUNAS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* COLUNA PRINCIPAL DE LEITURA */}
        <article className="lg:col-span-8 space-y-14 text-neutral-900 leading-relaxed text-lg sm:text-xl">
          
          {/* STATS EM LINHA */}
          <div className="flex flex-wrap gap-8 py-6 border-y-2 border-black font-mono">
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Execution Slot</span>
              <strong className="text-2xl font-black text-black">1 Atomic Tx</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Lending Engine</span>
              <strong className="text-2xl font-black text-black">MarginFi V2</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">DEX Protocols</span>
              <strong className="text-2xl font-black text-black">Raydium + Orca</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">CPI Overhead</span>
              <strong className="text-2xl font-black text-black">Zero SDK Bloat</strong>
            </div>
          </div>

          {/* SEÇÃO 01 */}
          <section id="the-arbitrage-reality" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              01. The Solana Arbitrage Reality: Execution Invariants
            </h2>
            <p>
              In high-throughput decentralized finance, cross-venue price discrepancies between Constant Product Market Makers (such as Raydium AMM V4) and Concentrated Liquidity Market Makers (such as Orca Whirlpool) evaporate in fractions of a second. Off-chain bot operators attempting multi-leg swaps face critical hazards:
            </p>
            <ul className="space-y-3 list-disc pl-6 font-medium text-base sm:text-lg">
              <li><strong>Execution Disconnection:</strong> Submitting separate transactions for borrowing, trading leg A, and trading leg B exposes capital to partial execution risk—if leg B fails or reverts due to front-running, the operator is left holding an exposed directional asset.</li>
              <li><strong>Capital Inefficiency:</strong> Holding static inventory across dozens of DEX pools requires millions in idle collateral, severely restricting yield potential.</li>
              <li><strong>SDK Compute Bloat:</strong> Off-the-shelf TypeScript client libraries introduce megabytes of unnecessary serialization metadata, pushing transaction instructions past Solana&apos;s strict Compute Unit and MTU packet boundaries.</li>
            </ul>
          </section>

          {/* SEÇÃO 02 */}
          <section id="atomic-lifecycle" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              02. Architectural Pipeline: The 6-Instruction Atomic Loop
            </h2>
            <p>
              The smart contract (<code className="font-mono text-sm bg-neutral-200 px-1 py-0.5 font-bold">flash_loan_bot</code>) enforces a completely atomic transaction loop composed of six interdependent instructions dispatched in a single payload:
            </p>

            <div className="space-y-4 my-8 pl-6 border-l-4 border-black font-mono text-base sm:text-lg">
              <p>
                <strong className="text-black font-black uppercase block">// 01 &amp; 02: MarginFi Scope &amp; Borrow</strong>
                Opens the flash loan context inside MarginFi V2 and borrows uncollateralized USDC into the program&apos;s ephemeral token account.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// 03: Raydium AMM V4 Proxy (USDC → SOL)</strong>
                Executes the first swap leg. Explicitly routes token balances through Raydium&apos;s liquidity pool and OpenBook/Serum order books, measuring on-chain balance deltas.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// 04: Orca Whirlpool Proxy (SOL → USDC)</strong>
                Executes the return swap leg through Orca&apos;s concentrated liquidity ticks, converting SOL back to USDC at the favorable arbitrage spread.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// 05 &amp; 06: MarginFi Repay &amp; Finalize</strong>
                Returns borrowed USDC principal plus protocol origination fees to MarginFi. The program verifies net profit; if the final balance is insufficient, the entire transaction reverts atomically with zero capital loss.
              </p>
            </div>

            <blockquote className="my-10 py-6 px-8 bg-neutral-100 border-l-8 border-black font-mono text-base sm:text-lg font-bold italic">
              “Arbitrage safety cannot rely on client-side simulation. Profit invariants, slippage thresholds, and debt repayment must be evaluated inside the program bytecode before closing the flash loan scope.”
              <span className="block not-italic font-black text-xs uppercase mt-3 text-neutral-600">
                — Vinicius Pontual, Technical Architecture
              </span>
            </blockquote>
          </section>

          {/* SEÇÃO 03 */}
          <section id="low-level-cpi" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              03. Low-Level CPIs: Bypassing Bloated SDK Dependencies
            </h2>
            <p>
              To maintain extreme performance and eliminate dependency drift, the contract constructs raw <code className="font-mono text-sm bg-neutral-200 px-1 py-0.5">Instruction</code> objects directly and invokes target programs via <code className="font-mono text-sm bg-neutral-200 px-1 py-0.5 font-bold">invoke</code>, utilizing pre-computed 8-byte sighashes:
            </p>

            {/* CÓDIGO NÍTIDO COM FUNDO CLARO */}
            <div className="font-mono text-xs sm:text-sm bg-neutral-100 text-neutral-900 p-5 border-2 border-black space-y-2 overflow-x-auto">
              <p className="text-neutral-500 font-bold">// Low-Level Raydium &amp; MarginFi CPI Dispatch</p>
              <p><span className="font-bold text-black">pub fn</span> proxy_raydium_swap&lt;&apos;info&gt;(</p>
              <p className="pl-4">raydium_program: &amp;AccountInfo&lt;&apos;info&gt;,</p>
              <p className="pl-4">accounts: &amp;[AccountInfo&lt;&apos;info&gt;],</p>
              <p className="pl-4">amount_in: <span className="font-semibold text-neutral-700">u64</span>,</p>
              <p className="pl-4">min_amount_out: <span className="font-semibold text-neutral-700">u64</span>,</p>
              <p>) -&gt; Result&lt;()&gt; &#123;</p>
              <p className="pl-4 text-neutral-500 font-bold">// 1. Construct Raydium Swap Instruction Data manually</p>
              <p className="pl-4"><span className="font-bold text-black">let mut</span> data = Vec::with_capacity(17);</p>
              <p className="pl-4">data.push(9); <span className="text-neutral-500 font-bold">// Raydium Swap Discriminator</span></p>
              <p className="pl-4">data.extend_from_slice(&amp;amount_in.to_le_bytes());</p>
              <p className="pl-4">data.extend_from_slice(&amp;min_amount_out.to_le_bytes());</p>
              <p className="pl-4 pt-2 text-neutral-500 font-bold">// 2. Execute invoke without external crate bloat</p>
              <p className="pl-4"><span className="font-bold text-black">let</span> ix = Instruction &#123;</p>
              <p className="pl-8">program_id: *raydium_program.key,</p>
              <p className="pl-8">accounts: accounts.iter().map(|a| a.to_account_metas()).collect(),</p>
              <p className="pl-8">data,</p>
              <p className="pl-4">&#125;;</p>
              <p className="pl-4">invoke(&amp;ix, accounts)?;</p>
              <p className="pl-4"><span className="font-bold text-black">Ok</span>(())</p>
              <p>&#125;</p>
            </div>
          </section>

          {/* SEÇÃO 04 */}
          <section id="onchain-risk-guards" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              04. On-Chain Risk Controls &amp; Invariant Verification
            </h2>
            <p>
              The smart contract implements mathematical defenses protecting against adverse market movements:
            </p>

            <div className="space-y-3 font-mono text-sm border-t-2 border-black pt-4">
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">01 / Dynamic Balance Delta Checks:</strong> Evaluates exact SPL Token balance differentials before and after each swap leg, rejecting transactions if <code className="font-bold">received &lt; amount_out_min</code>.
              </div>
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">02 / Non-Negative Profit Invariant:</strong> Asserts that post-arbitrage USDC balances strictly exceed the borrowed principal plus loan origination fees, returning explicit <code className="font-bold">NegativeProfit</code> errors upon deviation.
              </div>
              <div className="py-2">
                <strong className="text-black uppercase">03 / Checked Arithmetic Enforcement:</strong> Every math calculation uses Rust&apos;s checked operators (<code className="font-bold">checked_add</code>, <code className="font-bold">checked_sub</code>), mitigating integer overflow exploits at runtime.
              </div>
            </div>
          </section>

          {/* SEÇÃO 05 */}
          <section id="localnet-simulation" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              05. Forked Mainnet Simulation Environment
            </h2>
            <p>
              Testing multi-DEX flash loans on public testnets is often futile due to stale prices and depleted mock liquidity. The engine includes a local test validator infrastructure:
            </p>
            <ul className="space-y-4 my-6 list-disc pl-6 font-medium">
              <li>
                <strong>Decompiled Mainnet Binaries:</strong> Loads pre-compiled binary dumps of Raydium V4 (<code className="font-mono text-sm bg-neutral-200 px-1 py-0.5">raydium_v4.so</code>), Orca Whirlpools (<code className="font-mono text-sm bg-neutral-200 px-1 py-0.5">orca_whirlpool.so</code>), and Solend directly into the local validator.
              </li>
              <li>
                <strong>Automated Account Discovery:</strong> TypeScript discovery scripts query live Mainnet-Beta RPCs to capture current pool states, tick arrays, and MarginFi bank states into structured JSON schemas under <code className="font-bold">accounts/</code>.
              </li>
            </ul>
          </section>

          {/* SEÇÃO 06 */}
          <section id="specs-and-setup" className="space-y-6 pt-6 border-t-4 border-black">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              06. Specifications &amp; Build Pipeline
            </h2>
            <p className="text-base text-neutral-700">
              Toolchain and execution environment prerequisites:
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
                    <td className="p-3 font-bold">Compiler &amp; Framework</td>
                    <td className="p-3 font-mono">Rust 1.79+ / Anchor Framework 0.32+</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Lending Provider</td>
                    <td className="p-3 font-mono">MarginFi V2 Flash Loan Module</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">DEX Protocols</td>
                    <td className="p-3 font-mono">Raydium AMM V4 (OpenBook) + Orca Whirlpool</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Local Test Harness</td>
                    <td className="p-3 font-mono">solana-test-validator with forked .so binaries</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="font-mono text-xs sm:text-sm bg-neutral-100 border-2 border-black p-4 space-y-2 mt-4">
              <div><strong>REPOSITORY:</strong> <a href="https://github.com/Vinisilva0010/bot-flash-loan" target="_blank" rel="noopener noreferrer" className="underline font-bold">github.com/Vinisilva0010/bot-flash-loan</a></div>
              <div><strong>BUILD:</strong> <code className="font-bold">anchor build</code></div>
              <div><strong>LOCAL SIMULATION:</strong> <code className="font-bold">bash start-validator.sh &amp;&amp; anchor test --skip-local-validator</code></div>
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
                <a href="#the-arbitrage-reality" className="block hover:underline text-black">
                  01. Solana Arbitrage Reality
                </a>
                <a href="#atomic-lifecycle" className="block hover:underline text-black">
                  02. 6-Instruction Atomic Loop
                </a>
                <a href="#low-level-cpi" className="block hover:underline text-black">
                  03. Low-Level CPI Calls
                </a>
                <a href="#onchain-risk-guards" className="block hover:underline text-black">
                  04. On-Chain Risk Guards
                </a>
                <a href="#localnet-simulation" className="block hover:underline text-black">
                  05. Localnet Simulation
                </a>
                <a href="#specs-and-setup" className="block hover:underline text-black">
                  06. Specifications &amp; Build
                </a>
              </nav>
            </div>

            <div className="border-t-2 border-neutral-300 pt-6 space-y-3">
              <span className="text-xs uppercase font-black text-neutral-500 block">
                ENGINEERING RESOURCES
              </span>
              <a
                href="https://github.com/Vinisilva0010/bot-flash-loan"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-black !text-white py-3 font-black text-xs uppercase hover:bg-neutral-800 transition-colors"
              >
                Inspect Rust Contract [›]
              </a>
              <Link
                href="/projetos/motor-copy-trading-rust-solana"
                className="block w-full text-center border-2 border-black py-2.5 font-black text-xs uppercase hover:bg-neutral-100 transition-colors"
              >
                View HFT Copy Engine
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

          {/* PROJETO 2: HFT COPY TRADING ENGINE */}
          <article className="space-y-4">
            <Link 
              href="/projetos/motor-copy-trading-rust-solana" 
              className="block w-full border-4 border-black group overflow-hidden"
            >
              <div className="relative w-full h-56 bg-neutral-950">
                <Image
                  src="/projects/hft-copybot.png"
                  alt="Solana HFT Copy Trading Engine"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase text-neutral-500 font-bold block">
                HIGH-FREQUENCY // RUST &amp; TOKIO
              </span>
              <h4 className="text-xl font-black uppercase leading-tight text-black hover:underline">
                <Link href="/projetos/motor-copy-trading-rust-solana">
                  Solana Low-Latency Copy Trading Engine
                </Link>
              </h4>
            </div>

            <div className="pt-2 border-t-2 border-neutral-200 flex justify-between items-center font-mono text-xs">
              <Link 
                href="/projetos/motor-copy-trading-rust-solana" 
                className="font-black uppercase underline hover:text-neutral-600"
              >
                Read Specification ›
              </Link>
              <span className="text-neutral-500 font-bold">MAR 2026</span>
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