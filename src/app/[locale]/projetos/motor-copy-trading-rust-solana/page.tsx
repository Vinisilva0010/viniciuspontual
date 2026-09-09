import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solana HFT Copy Trading Engine — Low-Latency Asynchronous Execution in Rust",
  description:
    "Production-grade asynchronous copy-trading engine built with Rust, Tokio, and Solana SVM primitives. Sub-second target wallet log ingestion, versioned transaction assembly, and blockhash lifecycle management.",
  keywords: [
    "Solana",
    "Rust",
    "Tokio",
    "HFT",
    "Copy Trading",
    "Versioned Transactions",
    "Yellowstone gRPC",
    "Jito MEV",
    "Low Latency",
  ],
  authors: [{ name: "Vinicius Pontual" }],
  openGraph: {
    title: "Solana HFT Copy Trading Engine // Rust Low-Latency Systems",
    description:
      "Event-driven Solana copy-trading architecture decoupling WebSocket/gRPC ingestion from transaction execution pipelines via non-blocking channels.",
    type: "article",
    publishedTime: "2026-03-10T00:00:00.000Z",
    authors: ["Vinicius Pontual"],
  },
};

export default function HftCopyTradingProjectPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Solana HFT Copy Trading Engine",
    applicationCategory: "TradingApplication",
    operatingSystem: "Linux, macOS, Solana SVM",
    author: {
      "@type": "Person",
      name: "Vinicius Pontual",
      jobTitle: "Systems & Low-Latency Engineer",
    },
    datePublished: "2026-03-10",
    dateModified: "2026-09-09",
    programmingLanguage: "Rust",
    codeRepository: "https://github.com/Vinisilva0010/solana-hft-copybot",
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
          <span className="font-black text-black">[ HIGH-FREQUENCY SYSTEMS // 10 ]</span>
          <span>•</span>
          <span>RUST &amp; TOKIO RUNTIME</span>
          <span>•</span>
          <span>SOLANA MAINNET-BETA</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[1.05] mb-6 text-black">
          Low-Latency Solana Copy-Trading Engine in Rust
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-800 font-medium max-w-4xl leading-relaxed mb-6">
          An event-driven, asynchronous execution pipeline parsing real-time transaction logs, managing strict blockhash lifecycles, and dispatching atomic versioned transactions ahead of network state updates.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-neutral-200 font-mono text-sm text-neutral-600">
          <div>
            BY <span className="font-black text-black">VINICIUS PONTUAL</span> — SYSTEMS &amp; INFRASTRUCTURE ARCHITECT
          </div>
          <div>DEPLOYED: MAR 2026 // STACK: RUST + TOKIO MPSC CHANNELS</div>
        </div>
      </header>

      {/* IMAGEM PRINCIPAL ABERTA */}
      <div className="w-full mb-16 border-4 border-black">
        <div className="relative w-full h-[360px] sm:h-[500px] lg:h-[620px] bg-neutral-950">
          <Image
            src="/projects/hft-copybot.png"
            alt="Solana HFT Copy Trading Engine Architecture"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
        <div className="p-3 bg-neutral-100 font-mono text-xs text-neutral-700 border-t-2 border-black flex flex-wrap justify-between items-center gap-2">
          <span>FIG 1.0: INGESTION PIPELINE → CLASSIFIER / EXTRACTOR → STRATEGY &amp; SIZING → EXECUTOR DISPATCH</span>
          <span className="font-bold uppercase">[ HIGH-THROUGHPUT EXECUTION SPEC ]</span>
        </div>
      </div>

      {/* CORPO DO ARTIGO EM 2 COLUNAS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* COLUNA PRINCIPAL DE LEITURA */}
        <article className="lg:col-span-8 space-y-14 text-neutral-900 leading-relaxed text-lg sm:text-xl">
          
          {/* STATS EM LINHA */}
          <div className="flex flex-wrap gap-8 py-6 border-y-2 border-black font-mono">
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Execution Stack</span>
              <strong className="text-2xl font-black text-black">Rust (Tokio)</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Transaction Type</span>
              <strong className="text-2xl font-black text-black">Versioned V0</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Channel Pattern</span>
              <strong className="text-2xl font-black text-black">Async MPSC</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Observability</span>
              <strong className="text-2xl font-black text-black">Async SQLite</strong>
            </div>
          </div>

          {/* SEÇÃO 01 */}
          <section id="the-latency-challenge" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              01. The Solana Latency Challenge: Beyond Web2 Webhooks
            </h2>
            <p>
              Replicating decentralized trades on Solana demands engineering around strict network realities: 400ms block intervals, localized fee markets, and aggressive validator turbine packet shredding. Naive copy-trading implementations built on interpreted languages (such as Python or Node.js) suffer from fatal execution bottlenecks:
            </p>
            <ul className="space-y-3 list-disc pl-6 font-medium text-base sm:text-lg">
              <li><strong>Garbage Collection Pauses:</strong> Runtime GC sweeps induce unpredictable 50ms to 200ms latency spikes, causing follower orders to execute after slippage thresholds are breached.</li>
              <li><strong>I/O Thread Blocking:</strong> Concurrently polling balances, evaluating logs, and signing transactions in a single thread pool stalls the entire pipeline when RPC nodes backpressure.</li>
              <li><strong>Blockhash Expiration Drift:</strong> Transactions constructed with stale blockhashes revert on submission, burning network fees and missing entry windows during high-volatility events.</li>
            </ul>
          </section>

          {/* SEÇÃO 02 */}
          <section id="pipeline-architecture" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              02. Decoupled Pipeline Architecture: Zero-Lock Tokio Channels
            </h2>
            <p>
              The engine eliminates thread contention by isolating each phase into autonomous Tokio tasks linked by multi-producer, single-consumer (`mpsc`) message-passing channels:
            </p>

            <div className="space-y-4 my-8 pl-6 border-l-4 border-black font-mono text-base sm:text-lg">
              <p>
                <strong className="text-black font-black uppercase block">// Ingestion Stage</strong>
                Maintains a persistent, low-overhead WebSocket stream listening to raw transaction logs of specified target wallets. The network layer is decoupled and architected for plug-and-play migration to Yellowstone gRPC / Geyser plugin streams.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// Classifier &amp; Extractor</strong>
                Consumes raw payloads from the ingestion channel, deserializes the instruction buffer, and extracts structured swap intents (Buy vs. Sell), mathematical amounts, and route coordinates directly from the DEX contract accounts.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// Strategy &amp; Risk Guard</strong>
                Applies strict whitelist filtering, maximum slippage boundaries (e.g. 150 BPS), and dynamic position sizing limits (<code className="font-bold">min_position_sol</code> to <code className="font-bold">max_position_sol</code>) before an order is dispatched.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// Transaction Executor</strong>
                Constructs Solana Versioned Transactions (`VersionedTransaction`), optimizes Compute Budget allocations, and guarantees execution viability by checking the cluster&apos;s <code className="font-bold">last_valid_block_height</code>.
              </p>
            </div>

            <blockquote className="my-10 py-6 px-8 bg-neutral-100 border-l-8 border-black font-mono text-base sm:text-lg font-bold italic">
              “In high-frequency decentralized trading, synchronous architectures are dead on arrival. The transaction parsing loop must never wait on network I/O or signature compilation.”
              <span className="block not-italic font-black text-xs uppercase mt-3 text-neutral-600">
                — Vinicius Pontual, Core Engine Notes
              </span>
            </blockquote>
          </section>

          {/* SEÇÃO 03 */}
          <section id="code-implementation" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              03. Rust Implementation: Non-Blocking Pipeline Dispatch
            </h2>
            <p>
              Core execution pattern illustrating the lock-free transaction dispatch loop:
            </p>

            {/* CÓDIGO NÍTIDO COM FUNDO CLARO */}
            <div className="font-mono text-xs sm:text-sm bg-neutral-100 text-neutral-900 p-5 border-2 border-black space-y-2 overflow-x-auto">
              <p className="text-neutral-500 font-bold">// Tokio Task Channel Orchestration</p>
              <p><span className="font-bold text-black">pub async fn</span> run_pipeline(config: Config) -&gt; Result&lt;()&gt; &#123;</p>
              <p className="pl-4"><span className="font-bold text-black">let</span> (tx_ingest, <span className="font-bold text-black">mut</span> rx_ingest) = mpsc::channel::&lt;RawLogPayload&gt;(1024);</p>
              <p className="pl-4"><span className="font-bold text-black">let</span> (tx_exec, <span className="font-bold text-black">mut</span> rx_exec) = mpsc::channel::&lt;TradeIntent&gt;(256);</p>
              <p className="pl-4 pt-2 text-neutral-500 font-bold">// Spawn Ingestion Worker</p>
              <p className="pl-4">tokio::spawn(<span className="font-bold text-black">async move</span> &#123; ingestion::listen_websocket(config.ws_url, tx_ingest).<span className="font-bold text-black">await</span> &#125;);</p>
              <p className="pl-4 pt-2 text-neutral-500 font-bold">// Spawn Intent Classifier</p>
              <p className="pl-4">tokio::spawn(<span className="font-bold text-black">async move</span> &#123;</p>
              <p className="pl-8"><span className="font-bold text-black">while let</span> Some(raw) = rx_ingest.recv().<span className="font-bold text-black">await</span> &#123;</p>
              <p className="pl-12"><span className="font-bold text-black">if let</span> Ok(intent) = classifier::parse_swap_intent(&amp;raw) &#123;</p>
              <p className="pl-16"><span className="font-bold text-black">let _</span> = tx_exec.send(intent).<span className="font-bold text-black">await</span>;</p>
              <p className="pl-12">&#125;</p>
              <p className="pl-8">&#125;</p>
              <p className="pl-4">&#125;);</p>
              <p className="pl-4 pt-2 text-neutral-500 font-bold">// Spawn Executor &amp; Blockhash Manager</p>
              <p className="pl-4">executor::run_trade_worker(rx_exec, config.rpc_client).<span className="font-bold text-black">await</span></p>
              <p>&#125;</p>
            </div>
          </section>

          {/* SEÇÃO 04 */}
          <section id="blockhash-and-execution" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              04. Blockhash Strategy &amp; Multi-Relay Routing
            </h2>
            <p>
              To eliminate transaction failure rates during cluster congestion, the executor bypasses standard synchronous blockhash queries:
            </p>

            <div className="space-y-3 font-mono text-sm border-t-2 border-black pt-4">
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">01 / Background Blockhash Poller:</strong> A dedicated thread polls and caches the cluster&apos;s latest blockhash every 500ms, ensuring execution routines read from memory with zero RPC network delay.
              </div>
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">02 / Versioned Transactions (V0):</strong> Leverages Address Lookup Tables (ALTs) to compress account keys, reducing transaction byte payloads and saving compute units.
              </div>
              <div className="py-2">
                <strong className="text-black uppercase">03 / Multi-Relay Interface:</strong> The transport layer abstracts standard RPC nodes and private MEV relays (such as Jito and bloXroute), enabling sub-bundle tip submission to bypass validator mempool front-running.
              </div>
            </div>
          </section>

          {/* SEÇÃO 05 */}
          <section id="telemetry-dashboard" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              05. Asynchronous Telemetry &amp; Telegram Control Interface
            </h2>
            <p>
              Monitoring performance must never degrade the critical execution path. Observability is maintained via:
            </p>
            <ul className="space-y-4 my-6 list-disc pl-6 font-medium">
              <li>
                <strong>Asynchronous SQLite Engine:</strong> Metrics (execution latency, slippage variance, transaction signatures) are flushed to a local SQLite database via asynchronous worker pools, keeping the memory-critical trading engine unimpeded.
              </li>
              <li>
                <strong>Telegram Dashboard Interface:</strong> Exposes real-time remote commands (<code className="font-bold">/status</code>, <code className="font-bold">/lasttrades</code>) guarded by administrative chat ID validation, providing uptime metrics, log queue depth, and capital throughput without SSH exposure.
              </li>
            </ul>
          </section>

          {/* SEÇÃO 06 */}
          <section id="specs-and-configuration" className="space-y-6 pt-6 border-t-4 border-black">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              06. Specifications &amp; Environment Topology
            </h2>
            <p className="text-base text-neutral-700">
              The engine operates under tiered configuration files, strictly segregating paper simulation from live mainnet capital:
            </p>

            <div className="border-2 border-black overflow-x-auto">
              <table className="w-full text-left font-mono text-xs sm:text-sm">
                <thead className="bg-black text-white uppercase border-b-2 border-black">
                  <tr>
                    <th className="p-3">Parameter</th>
                    <th className="p-3">Development / Simulation</th>
                    <th className="p-3">Production Mainnet</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-300 bg-white">
                  <tr>
                    <td className="p-3 font-bold">Execution Mode</td>
                    <td className="p-3 font-mono text-neutral-600">Simulated (Mock Order)</td>
                    <td className="p-3 font-mono text-emerald-700 font-bold">Live On-Chain (Real Capital)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Max Slippage BPS</td>
                    <td className="p-3 font-mono">150 BPS (1.5%)</td>
                    <td className="p-3 font-mono">Configurable per pair</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Position Sizing</td>
                    <td className="p-3 font-mono">0.01 SOL - 0.05 SOL</td>
                    <td className="p-3 font-mono">Dynamic % of target trade</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Keypair Storage</td>
                    <td className="p-3 font-mono">storage/wallets/dev-wallet.json</td>
                    <td className="p-3 font-mono">Encrypted filesystem keypair</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="font-mono text-xs sm:text-sm bg-neutral-100 border-2 border-black p-4 space-y-2 mt-4">
              <div><strong>SIMULATION RUN:</strong> <code className="font-bold">cargo run</code></div>
              <div><strong>PRODUCTION RUN:</strong> <code className="font-bold">RUN_ENV=production cargo run --release</code></div>
              <div><strong>REPOSITORY:</strong> <a href="https://github.com/Vinisilva0010/solana-hft-copybot" target="_blank" rel="noopener noreferrer" className="underline font-bold">github.com/Vinisilva0010/solana-hft-copybot</a></div>
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
                <a href="#the-latency-challenge" className="block hover:underline text-black">
                  01. Solana Latency Challenge
                </a>
                <a href="#pipeline-architecture" className="block hover:underline text-black">
                  02. Tokio Pipeline Architecture
                </a>
                <a href="#code-implementation" className="block hover:underline text-black">
                  03. Rust Implementation
                </a>
                <a href="#blockhash-and-execution" className="block hover:underline text-black">
                  04. Blockhash &amp; Multi-Relay
                </a>
                <a href="#telemetry-dashboard" className="block hover:underline text-black">
                  05. Telemetry &amp; Telegram
                </a>
                <a href="#specs-and-configuration" className="block hover:underline text-black">
                  06. Specifications &amp; Config
                </a>
              </nav>
            </div>

            <div className="border-t-2 border-neutral-300 pt-6 space-y-3">
              <span className="text-xs uppercase font-black text-neutral-500 block">
                ENGINEERING RESOURCES
              </span>
              <a
                href="https://github.com/Vinisilva0010/solana-hft-copybot"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-black !text-white py-3 font-black text-xs uppercase hover:bg-neutral-800 transition-colors"
              >
                Inspect Rust Source [›]
              </a>
              <Link
                href="/projetos/smartflow-radar-smart-money-solana"
                className="block w-full text-center border-2 border-black py-2.5 font-black text-xs uppercase hover:bg-neutral-100 transition-colors"
              >
                View Smart Money Radar
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