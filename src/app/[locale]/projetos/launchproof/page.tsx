import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LaunchProof — On-Chain Bundle Detection & Guarded Swaps for Solana",
  description:
    "Production-grade Solana smart contract and deterministic graph investigator built for the MLH Solana Hackathon (Nov 2026). Enforces 97-byte Ed25519 signed attestations and atomic in-transaction policy assertions on Pump.fun launches.",
  keywords: [
    "Solana",
    "Pump.fun",
    "Anti-Rugpull",
    "Anchor Framework",
    "Ed25519 Instruction",
    "On-Chain Attestation",
    "Sybil Detection",
    "Model Context Protocol",
    "MCP",
    "MLH Hackathon",
  ],
  authors: [{ name: "Vinicius Pontual" }],
  openGraph: {
    title: "LaunchProof // On-Chain Bundled Launch Protection on Solana",
    description:
      "Stops creator sybil bundles before you buy. 2-hop funding graph investigation, 97-byte binary attestation, and atomic in-tx execution gates on Solana.",
    type: "article",
    publishedTime: "2026-11-09T00:00:00.000Z",
    authors: ["Vinicius Pontual"],
  },
};

export default function LaunchProofProjectPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LaunchProof",
    applicationCategory: "SecurityApplication",
    operatingSystem: "Solana SVM, Linux, macOS, Web",
    author: {
      "@type": "Person",
      name: "Vinicius Pontual",
      jobTitle: "Smart Contract & Systems Engineer",
    },
    datePublished: "2026-11-09",
    dateModified: "2026-11-09",
    programmingLanguage: "Rust, TypeScript, Anchor, HTML/CSS",
    runtimePlatform: "Solana SVM (SBPF v0), Axum, Node 22",
    codeRepository: "https://github.com/Vinisilva0010/launchproof",
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
          <span className="font-black text-black">[ SOLANA SECURITY // 05 ]</span>
          <span>•</span>
          <span>MLH HACKATHON 2026</span>
          <span>•</span>
          <span>IN-TRANSACTION GUARDS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[1.05] mb-6 text-black">
          LaunchProof: In-Transaction Sybil Protection &amp; Attestations for Pump.fun
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-800 font-medium max-w-4xl leading-relaxed mb-6">
          Uma suíte de defesa on-chain construída para o MLH Solana Hackathon: investiga a rede de financiamento do criador nos primeiros 150 slots e cancela compras atomicamente dentro da transação se a concentração de fornecimento violar as políticas do comprador ou de agentes autônomos.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-neutral-200 font-mono text-sm text-neutral-600">
          <div>
            BY <span className="font-black text-black">VINICIUS PONTUAL</span> — SOLANA &amp; SYSTEMS ARCHITECT
          </div>
          <div>DEPLOYED: DEVNET BJk5...89W // ANCHOR SBPF v0 // LIVE CLIENT &amp; MCP SERVER</div>
        </div>
      </header>

      {/* DIAGRAMA PRINCIPAL COM CORES FORÇADAS */}
      <div className="w-full mb-16 border-4 border-black">
        <div 
          style={{ backgroundColor: "#000000", color: "#ffffff" }}
          className="w-full p-8 sm:p-12 font-mono flex flex-col justify-between overflow-x-auto"
        >
          <div 
            style={{ borderColor: "#262626" }}
            className="flex items-center justify-between border-b pb-4 mb-8"
          >
            <span 
              style={{ color: "#a3a3a3" }}
              className="text-xs uppercase tracking-widest font-bold"
            >
              [ 3-INSTRUCTION ATOMIC GUARDED TRANSACTION ANATOMY ]
            </span>
            <span 
              style={{ backgroundColor: "rgba(16, 185, 129, 0.15)", color: "#34d399", borderColor: "#059669" }}
              className="text-xs px-2.5 py-1 border font-bold"
            >
              ATOMIC REVERT
            </span>
          </div>

          {/* Fluxograma das 3 Instruções Atômicas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 min-w-[700px]">
            <div style={{ backgroundColor: "#121212", borderColor: "#2e2e2e" }} className="border p-5">
              <span style={{ color: "#a3a3a3" }} className="text-[10px] block uppercase font-bold">INSTRUCTION 01</span>
              <strong style={{ color: "#ffffff" }} className="text-sm uppercase block mt-1">ED25519 PRECOMPILE</strong>
              <p style={{ color: "#d4d4d4" }} className="text-xs mt-2">
                O runtime nativo da Solana valida a assinatura criptográfica do atestador sobre os 97 bytes de evidência antes de qualquer código de programa executar.
              </p>
            </div>
            <div style={{ backgroundColor: "#121212", borderColor: "#059669" }} className="border-2 p-5">
              <span style={{ color: "#34d399" }} className="text-[10px] block uppercase font-bold">INSTRUCTION 02</span>
              <strong style={{ color: "#ffffff" }} className="text-sm uppercase block mt-1">ASSERT_LAUNCH_POLICY</strong>
              <p style={{ color: "#e5e5e5" }} className="text-xs mt-2">
                Nosso programa Anchor compara os dados atestados contra os limites do usuário (max % inicial, max % atual, idade do token). Se violado, aborta tudo.
              </p>
            </div>
            <div style={{ backgroundColor: "#121212", borderColor: "#2e2e2e" }} className="border p-5">
              <span style={{ color: "#a3a3a3" }} className="text-[10px] block uppercase font-bold">INSTRUCTION 03</span>
              <strong style={{ color: "#ffffff" }} className="text-sm uppercase block mt-1">PUMP.FUN BUY</strong>
              <p style={{ color: "#d4d4d4" }} className="text-xs mt-2">
                A compra no bonding curve só ocorre se a instrução anterior tiver sido concluída com sucesso. Zero risco de execução com carteiras comprometidas.
              </p>
            </div>
          </div>
        </div>

        <div className="p-3 bg-neutral-100 font-mono text-xs text-neutral-700 border-t-2 border-black flex flex-wrap justify-between items-center gap-2">
          <span>FIG 1.0: ON-CHAIN GUARD LIFECYCLE (FAILURE AT STAGE 02 CANCELS ENTIRE TRANSACTION WITH ZERO TOKENS BOUGHT)</span>
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
              <span className="block text-xs uppercase text-neutral-500 font-bold">Guard Enforcement</span>
              <strong className="text-2xl font-black text-black">Atomic In-Tx</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Graph Investigation</span>
              <strong className="text-2xl font-black text-black">150 Slots / 2-Hop</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Attestation Size</span>
              <strong className="text-2xl font-black text-black">97 Bytes (Ed25519)</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">AI Agent Control</span>
              <strong className="text-2xl font-black text-black">Model Context Protocol</strong>
            </div>
          </div>

          {/* SEÇÃO 01 */}
          <section id="the-bundled-exploit" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              01. The Bundled Launch Exploit: Sybil Dominance on Pump.fun
            </h2>
            <p>
              O golpe mais prevalente no ecossistema de meme tokens da Solana não é um contrato malicioso ou exploit de reentrância. O criador financia múltiplas carteiras a partir da mesma fonte de SOL, adquire entre 70% e 90% do fornecimento nos primeiros segundos de criação do token e despeja esses ativos assim que investidores orgânicos ou agentes de trading entram no pool.
            </p>
            <p>
              Esse padrão deixa um rastro imutável no ledger da Solana: a mesma origem de SOL e compras concentradas nos mesmos blocos exatos da criação do mint.
            </p>
            <ul className="space-y-3 list-disc pl-6 font-medium text-base sm:text-lg">
              <li><strong>Rastreamento de Origem em 2 Saltos:</strong> O motor analisa de onde veio o capital de cada carteira compradora nos primeiros 150 slots, mapeando a árvore genealógica de financiamento.</li>
              <li><strong>Zero Alucinação de IA:</strong> As evidências são geradas exclusivamente por lógica determinística baseada nas transações brutas de RPC, dispensando LLMs na apuração de fatos.</li>
              <li><strong>Invariante On-Chain:</strong> A verificação não depende de alertas em dashboards web; ela roda dentro da instrução de compra no SVM da Solana.</li>
            </ul>
          </section>

          {/* SEÇÃO 02 */}
          <section id="devnet-proof" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              02. Proof of Execution on Solana Devnet
            </h2>
            <p>
              A robustez do contrato Anchor foi validada com testes empíricos em transações reais na Devnet, comparando lançamentos legítimos contra tentativas agressivas de bundling:
            </p>

            <div className="border-2 border-black overflow-x-auto">
              <table className="w-full text-left font-mono text-xs sm:text-sm">
                <thead className="bg-black text-white uppercase border-b-2 border-black">
                  <tr>
                    <th className="p-3">Interface / Agente</th>
                    <th className="p-3">Cenário de Teste</th>
                    <th className="p-3">Resultado On-Chain</th>
                    <th className="p-3">Assinatura da Transação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-300 bg-white">
                  <tr>
                    <td className="p-3 font-bold">CLI Runner</td>
                    <td className="p-3">Clean Launch (3.36% retido pela rede)</td>
                    <td className="p-3 font-black text-emerald-600 uppercase">EXECUTED</td>
                    <td className="p-3 font-mono">JWVv...xkzH</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">CLI Runner</td>
                    <td className="p-3">Bundled Launch (78.67% retido por 5 carteiras)</td>
                    <td className="p-3 font-black text-red-600 uppercase">CANCELLED (LinkedInitialTooHigh)</td>
                    <td className="p-3 font-mono">4sw6...TFadm</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Web + Phantom</td>
                    <td className="p-3">Clean Launch verificado pelo cliente</td>
                    <td className="p-3 font-black text-emerald-600 uppercase">EXECUTED</td>
                    <td className="p-3 font-mono">4igq...yiyZ</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">AI Agent (MCP)</td>
                    <td className="p-3">Agente via Model Context Protocol (Clean)</td>
                    <td className="p-3 font-black text-emerald-600 uppercase">EXECUTED</td>
                    <td className="p-3 font-mono">4H6r...uFPf</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">AI Agent (MCP)</td>
                    <td className="p-3">Agente induzido a comprar token bundled</td>
                    <td className="p-3 font-black text-red-600 uppercase">BLOCKED BY GUARD</td>
                    <td className="p-3 font-mono">5FtF...T5ZmU</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <blockquote className="my-10 py-6 px-8 bg-neutral-100 border-l-8 border-black font-mono text-base sm:text-lg font-bold italic">
              &ldquo;Mesmo se um agente de IA decidir comprar um token por alucinação ou erro, a transação não passa na Solana. O contrato on-chain rejeita a operação e nenhuma fração de SOL é gasta.&rdquo;
              <span className="block not-italic font-black text-xs uppercase mt-3 text-neutral-600">
                — Vinicius Pontual, LaunchProof Security Guarantees
              </span>
            </blockquote>
          </section>

          {/* SEÇÃO 03 */}
          <section id="attestation-binary-format" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              03. The 97-Byte Signed Binary Attestation Format
            </h2>
            <p>
              Para operar sob os rigorosos limites de Compute Units da Solana, o atestado é codificado em um buffer binário compacto de exatamente 97 bytes em little-endian:
            </p>

            <div className="space-y-4 my-8 pl-6 border-l-4 border-black font-mono text-base sm:text-lg">
              <p>
                <strong className="text-black font-black uppercase block">// Bytes 0..11: LAUNCHPROOF (Magic Header &amp; Version)</strong>
                Assinatura de protocolo e versão do esquema de serialização (v1).
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// Bytes 12..45: Network &amp; Mint Address</strong>
                Identificador de rede (0 para Mainnet, 1 para Devnet) acompanhado dos 32 bytes do endereço público da SPL Token Mint.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// Bytes 45..49: Initial &amp; Current Network Share (BPS)</strong>
                Porcentagem em pontos-base adquirida pela rede do criador no lançamento e porcentagem atualmente em posse.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// Bytes 49..57: Historical Launches &amp; Authority Flags</strong>
                Contador de lançamentos anteriores do criador, curvas de bonding abandonadas (&gt;24h) e flags ativas de autoridade de mint/freeze.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// Bytes 57..97: Timestamp &amp; SHA-256 Evidence Hash</strong>
                Timestamp Unix de emissão com 32 bytes do hash SHA-256 de todas as transações de prova arquivadas no relatório JSON.
              </p>
            </div>
          </section>

          {/* SEÇÃO 04 */}
          <section id="mcp-ai-agents" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              04. Model Context Protocol (MCP) for Autonomous Agents
            </h2>
            <p>
              Agentes autônomos executados sob o protocolo MCP (<code className="font-bold">crates/lp-mcp</code>) comunicam-se via stdio com ferramentas nativas:
            </p>

            <div className="space-y-3 font-mono text-sm border-t-2 border-black pt-4">
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">01 / investigate_token:</strong> Mapeia a genealogia do criador e retorna as evidências estruturadas para o raciocínio do modelo.
              </div>
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">02 / get_attestation:</strong> Recupera a mensagem binária assinada pelo atestador para montagem da instrução Ed25519.
              </div>
              <div className="py-2">
                <strong className="text-black uppercase">03 / guarded_buy:</strong> Constrói a transação de 3 instruções. O agente assina a transação, mas o runtime da Solana barra qualquer desvio das regras do usuário.
              </div>
            </div>
          </section>

          {/* SEÇÃO 05 */}
          <section id="specs-and-components" className="space-y-6 pt-6 border-t-4 border-black">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              05. Componentes &amp; Arquitetura do Workspace
            </h2>
            <p className="text-base text-neutral-700">
              Divisão de crates Rust e programas Anchor:
            </p>

            <div className="border-2 border-black overflow-x-auto">
              <table className="w-full text-left font-mono text-xs sm:text-sm">
                <thead className="bg-black text-white uppercase border-b-2 border-black">
                  <tr>
                    <th className="p-3">Diretório</th>
                    <th className="p-3">Responsabilidade do Módulo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-300 bg-white">
                  <tr>
                    <td className="p-3 font-bold">programs/launchproof</td>
                    <td className="p-3 font-mono">Contrato Anchor on-chain: assert_launch_policy, verificação de limites e init com autoridade de upgrade.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">crates/lp-attest</td>
                    <td className="p-3 font-mono">Formato do atestado binário de 97 bytes e parsing da instrução Ed25519 (zero dependências, compartilhado on/off-chain).</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">crates/lp-investigate</td>
                    <td className="p-3 font-mono">Investigador de lançamentos, varredura de histórico RPC e gerador de relatórios fáticos.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">crates/lp-mcp</td>
                    <td className="p-3 font-mono">Servidor MCP stdio expondo ferramentas de inspeção e compra protegida para LLMs.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">crates/lp-server</td>
                    <td className="p-3 font-mono">API HTTP em Axum com cache PostgreSQL e assinatura Ed25519 em tempo real.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="font-mono text-xs sm:text-sm bg-neutral-100 border-2 border-black p-4 space-y-2 mt-4">
              <div><strong>REPOSITÓRIO:</strong> <a href="https://github.com/Vinisilva0010/launchproof" target="_blank" rel="noopener noreferrer" className="underline font-bold">github.com/Vinisilva0010/launchproof</a></div>
              <div><strong>DEMO LIVE:</strong> <a href="https://launchproof-1.onrender.com" target="_blank" rel="noopener noreferrer" className="underline font-bold">launchproof-1.onrender.com</a></div>
              <div><strong>VÍDEO DE DEMONSTRAÇÃO:</strong> <a href="https://www.youtube.com/watch?v=wjaAJBTsuKk" target="_blank" rel="noopener noreferrer" className="underline font-bold">youtube.com/watch?v=wjaAJBTsuKk</a></div>
              <div><strong>DEVNET PROGRAM:</strong> <code className="font-bold">BjK5qpT8rzR1XLJKtX1MxmXBVD1NM3T19rFV6Vd1r89W</code></div>
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
                <a href="#the-bundled-exploit" className="block hover:underline text-black">
                  01. Exploit de Bundled Launch
                </a>
                <a href="#devnet-proof" className="block hover:underline text-black">
                  02. Provas na Devnet
                </a>
                <a href="#attestation-binary-format" className="block hover:underline text-black">
                  03. Formato do Atestado (97B)
                </a>
                <a href="#mcp-ai-agents" className="block hover:underline text-black">
                  04. Agentes de IA &amp; MCP
                </a>
                <a href="#specs-and-components" className="block hover:underline text-black">
                  05. Componentes &amp; Repositório
                </a>
              </nav>
            </div>

            <div className="border-t-2 border-neutral-300 pt-6 space-y-3">
              <span className="text-xs uppercase font-black text-neutral-500 block">
                ENGINEERING RESOURCES
              </span>
              <a
                href="https://launchproof-1.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-black !text-white py-3 font-black text-xs uppercase hover:bg-neutral-800 transition-colors"
              >
                Launch Web App [›]
              </a>
              <a
                href="https://www.youtube.com/watch?v=wjaAJBTsuKk"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center border-2 border-black py-2.5 font-black text-xs uppercase hover:bg-neutral-100 transition-colors"
              >
                Watch Video Demo
              </a>
            </div>
          </div>
        </aside>

      </div>

      {/* RODAPÉ EDITORIAL: 3 PROJETOS RELACIONADOS */}
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
            All Projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* PROJETO 1: MUSE SPARK KERNEL CHALLENGE */}
          <article className="space-y-4">
            <Link 
              href="/projetos/muse-kernel-challenge" 
              className="block w-full border-4 border-black group overflow-hidden"
            >
              <div 
                style={{ backgroundColor: "#000000" }} 
                className="relative w-full h-56 flex items-center justify-center font-mono p-4 text-center border-b-2 border-black"
              >
                <span style={{ color: "#ffffff" }} className="text-sm font-black uppercase tracking-wider">
                  [ GPU SYSTEMS // NVIDIA H200 ACCELERATION ]
                </span>
              </div>
            </Link>
            
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase text-neutral-500 font-bold block">
                GPU // CUDA &amp; SGLANG
              </span>
              <h4 className="text-xl font-black uppercase leading-tight text-black hover:underline">
                <Link href="/projetos/muse-kernel-challenge">
                  Muse Spark: 816B MoE Serving on H200
                </Link>
              </h4>
            </div>

            <div className="pt-2 border-t-2 border-neutral-200 flex justify-between items-center font-mono text-xs">
              <Link 
                href="/projetos/muse-kernel-challenge" 
                className="font-black uppercase underline hover:text-neutral-600"
              >
                Read Specification ›
              </Link>
              <span className="text-neutral-500 font-bold">NOV 2026</span>
            </div>
          </article>

          {/* PROJETO 2: ORQUESTRAÇÃO DE AGENTES */}
          <article className="space-y-4">
            <Link 
              href="/projetos/orquestracao-agentes" 
              className="block w-full border-4 border-black group overflow-hidden"
            >
              <div 
                style={{ backgroundColor: "#000000" }} 
                className="relative w-full h-56 flex items-center justify-center font-mono p-4 text-center border-b-2 border-black"
              >
                <span style={{ color: "#ffffff" }} className="text-sm font-black uppercase tracking-wider">
                  [ AUTONOMOUS SYSTEMS // GOVERNANCE ]
                </span>
              </div>
            </Link>
            
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase text-neutral-500 font-bold block">
                SYSTEMS // RUST &amp; POSTGRESQL
              </span>
              <h4 className="text-xl font-black uppercase leading-tight text-black hover:underline">
                <Link href="/projetos/orquestracao-agentes">
                  Orquestração de Agentes: Self-Hosted Governance
                </Link>
              </h4>
            </div>

            <div className="pt-2 border-t-2 border-neutral-200 flex justify-between items-center font-mono text-xs">
              <Link 
                href="/projetos/orquestracao-agentes" 
                className="font-black uppercase underline hover:text-neutral-600"
              >
                Read Specification ›
              </Link>
              <span className="text-neutral-500 font-bold">NOV 2026</span>
            </div>
          </article>

          {/* PROJETO 3: TREND-PULLBACK */}
          <article className="space-y-4">
            <Link 
              href="/projetos/trend-pullback" 
              className="block w-full border-4 border-black group overflow-hidden"
            >
              <div 
                style={{ backgroundColor: "#000000" }} 
                className="relative w-full h-56 flex items-center justify-center font-mono p-4 text-center border-b-2 border-black"
              >
                <span style={{ color: "#ffffff" }} className="text-sm font-black uppercase tracking-wider">
                  [ QUANT RESEARCH // SYSTEMATIC BACKTESTING ]
                </span>
              </div>
            </Link>
            
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase text-neutral-500 font-bold block">
                QUANTITATIVE // RUST &amp; TOKIO
              </span>
              <h4 className="text-xl font-black uppercase leading-tight text-black hover:underline">
                <Link href="/projetos/trend-pullback">
                  trend-pullback: Quantitative Research Engine
                </Link>
              </h4>
            </div>

            <div className="pt-2 border-t-2 border-neutral-200 flex justify-between items-center font-mono text-xs">
              <Link 
                href="/projetos/trend-pullback" 
                className="font-black uppercase underline hover:text-neutral-600"
              >
                Read Specification ›
              </Link>
              <span className="text-neutral-500 font-bold">NOV 2026</span>
            </div>
          </article>

        </div>
      </section>
    </div>
  );
}