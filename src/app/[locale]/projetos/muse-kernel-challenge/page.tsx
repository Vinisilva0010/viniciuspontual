import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Muse Spark Kernel Challenge — 816B MoE Acceleration on NVIDIA H200",
  description:
    "High-performance CUDA kernels and SGLang runtime serving patch for Meta's 816B Muse Spark MoE on 8x NVIDIA H200 nodes. Benchmarking up to 2.58x speedups and zero-copy Marlin FP4 execution.",
  keywords: [
    "CUDA Kernels",
    "NVIDIA H200",
    "SGLang",
    "Meta Muse Spark",
    "Mixture of Experts",
    "MoE",
    "NVFP4",
    "Marlin Quantization",
    "Speculative Decoding",
    "DFlash",
    "High Performance Computing",
  ],
  authors: [{ name: "Vinicius Pontual" }],
  openGraph: {
    title: "Muse Spark Kernel Challenge // 816B MoE Acceleration on H200",
    description:
      "Low-level kernel engineering for Meta, Paradigm and Andromeda challenge. Up to 2.58x faster decode attention and zero-duplication Marlin MoE serving.",
    type: "article",
    publishedTime: "2026-11-05T00:00:00.000Z",
    authors: ["Vinicius Pontual"],
  },
};

export default function MuseKernelChallengeProjectPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Muse Spark Open Kernel Challenge (Vinisilva0010)",
    applicationCategory: "HighPerformanceComputingApplication",
    operatingSystem: "Linux (Ubuntu / NVIDIA CUDA 12.x)",
    author: {
      "@type": "Person",
      name: "Vinicius Pontual",
      jobTitle: "Smart Contract & Systems Engineer",
    },
    datePublished: "2026-11-05",
    dateModified: "2026-11-09",
    programmingLanguage: "CUDA, C++, Python, Triton",
    runtimePlatform: "NVIDIA H200 (141GB HBM3e), SGLang, PyTorch",
    codeRepository: "https://github.com/Vinisilva0010/muse-kernel-challenge",
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
          <span className="font-black text-black">[ GPU SYSTEMS // 04 ]</span>
          <span>•</span>
          <span>NVIDIA H200 OPTIMIZATION</span>
          <span>•</span>
          <span>816B MOE SERVING RUNTIME</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[1.05] mb-6 text-black">
          Muse Spark Kernel Challenge: 816B MoE Serving &amp; CUDA Acceleration on H200
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-800 font-medium max-w-4xl leading-relaxed mb-6">
          Trabalho de engenharia para o desafio aberto da Meta, Paradigm e Andromeda: acelerando o modelo Muse Spark (816B parâmetros, 256 especialistas, pesos NVFP4) em nós 8x NVIDIA H200 via kernels isolados e patches de runtime no SGLang.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-neutral-200 font-mono text-sm text-neutral-600">
          <div>
            BY <span className="font-black text-black">VINICIUS PONTUAL</span> — TEAM VINISILVA0010
          </div>
          <div>OFFICIAL LEADERBOARD RANK: #456 / 1000+ // APACHE-2.0</div>
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
              [ KERNEL TRACK SPEEDUPS VS STOCK SGLANG BASELINE ]
            </span>
            <span 
              style={{ backgroundColor: "rgba(16, 185, 129, 0.15)", color: "#34d399", borderColor: "#059669" }}
              className="text-xs px-2.5 py-1 border font-bold"
            >
              H200 VERIFIED
            </span>
          </div>

          {/* Grid dos 4 Benchmarks Principais */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 min-w-[700px]">
            <div style={{ backgroundColor: "#121212", borderColor: "#2e2e2e" }} className="border p-4">
              <span style={{ color: "#a3a3a3" }} className="text-[10px] block uppercase font-bold">KERNEL 01</span>
              <strong style={{ color: "#ffffff" }} className="text-sm uppercase block mt-1">ATTENTION DECODE</strong>
              <div style={{ color: "#34d399" }} className="text-2xl font-black mt-2">2.580x</div>
              <p style={{ color: "#d4d4d4" }} className="text-xs mt-1">muse_attention_decode vs FlashAttention-3 FP8</p>
            </div>
            <div style={{ backgroundColor: "#121212", borderColor: "#2e2e2e" }} className="border p-4">
              <span style={{ color: "#a3a3a3" }} className="text-[10px] block uppercase font-bold">KERNEL 02</span>
              <strong style={{ color: "#ffffff" }} className="text-sm uppercase block mt-1">MOE W4A16</strong>
              <div style={{ color: "#34d399" }} className="text-2xl font-black mt-2">2.339x</div>
              <p style={{ color: "#d4d4d4" }} className="text-xs mt-1">muse_moe_w4a16 em 256 especialistas roteados</p>
            </div>
            <div style={{ backgroundColor: "#121212", borderColor: "#2e2e2e" }} className="border p-4">
              <span style={{ color: "#a3a3a3" }} className="text-[10px] block uppercase font-bold">KERNEL 03</span>
              <strong style={{ color: "#ffffff" }} className="text-sm uppercase block mt-1">DECODE LAYER</strong>
              <div style={{ color: "#34d399" }} className="text-2xl font-black mt-2">2.136x</div>
              <p style={{ color: "#d4d4d4" }} className="text-xs mt-1">muse_decode_layer fusão de GEMM e ativação</p>
            </div>
            <div style={{ backgroundColor: "#121212", borderColor: "#059669" }} className="border-2 p-4">
              <span style={{ color: "#34d399" }} className="text-[10px] block uppercase font-bold">KERNEL 04</span>
              <strong style={{ color: "#ffffff" }} className="text-sm uppercase block mt-1">BF16 PROJECTION</strong>
              <div style={{ color: "#34d399" }} className="text-2xl font-black mt-2">1.500x</div>
              <p style={{ color: "#e5e5e5" }} className="text-xs mt-1">muse_bf16_proj QKV, O, pooler e router</p>
            </div>
          </div>
        </div>

        <div className="p-3 bg-neutral-100 font-mono text-xs text-neutral-700 border-t-2 border-black flex flex-wrap justify-between items-center gap-2">
          <span>FIG 1.0: INDEPENDENT KERNEL SPEEDUPS BENCHMARKED ON STANDALONE H200 (141GB HBM3E)</span>
          <span className="font-bold uppercase">[ OFFICIAL CHALLENGE LOGS ]</span>
        </div>
      </div>

      {/* CORPO DO ARTIGO EM 2 COLUNAS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* COLUNA PRINCIPAL DE LEITURA */}
        <article className="lg:col-span-8 space-y-14 text-neutral-900 leading-relaxed text-lg sm:text-xl">
          
          {/* STATS EM LINHA */}
          <div className="flex flex-wrap gap-8 py-6 border-y-2 border-black font-mono">
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Target Hardware</span>
              <strong className="text-2xl font-black text-black">8x NVIDIA H200</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Model Architecture</span>
              <strong className="text-2xl font-black text-black">816B MoE (256 Exp)</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Peak Kernel Gain</span>
              <strong className="text-2xl font-black text-black">2.58x vs SGLang</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Serving Memory Impact</span>
              <strong className="text-2xl font-black text-black">Zero Extra GBs</strong>
            </div>
          </div>

          {/* SEÇÃO 01 */}
          <section id="the-frontier-challenge" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              01. The Frontier Challenge: 816B Parameter MoE on H200
            </h2>
            <p>
              O <strong>Muse Spark Open</strong> representa o estado da arte em modelos Mixture-of-Experts com 816 bilhões de parâmetros totais, 256 especialistas roteados e pesos quantizados em <strong>NVFP4 (W4A16)</strong>. O desafio dividiu-se em duas etapas de alta complexidade:
            </p>
            <ul className="space-y-3 list-disc pl-6 font-medium text-base sm:text-lg">
              <li><strong>Kernel Track (22 Out - 04 Nov 2026):</strong> Otimização de 5 problemas de baixo nível executados isoladamente em uma GPU H200, competindo contra o baseline nativo do framework SGLang.</li>
              <li><strong>Serving Track (10 Nov - 19 Nov 2026):</strong> Criação de um patch para a base de código do SGLang (commit <code className="font-mono text-sm bg-neutral-200 px-1 py-0.5 font-bold">a55ab7d5</code>) em um nó completo com 8 GPUs H200, medindo throughput em conversas multi-turnos de codificação com DFlash speculative decoding nas concorrências 1, 4, 16 e 32.</li>
            </ul>
          </section>

          {/* SEÇÃO 02 */}
          <section id="kernel-track-results" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              02. Kernel Track: Tabela Oficial de Performance
            </h2>
            <p>
              Resultados consolidados no encerramento da primeira fase (classificação 456 entre mais de 1.000 equipes internacionais):
            </p>

            <div className="border-2 border-black overflow-x-auto">
              <table className="w-full text-left font-mono text-xs sm:text-sm">
                <thead className="bg-black text-white uppercase border-b-2 border-black">
                  <tr>
                    <th className="p-3">Kernel Problem</th>
                    <th className="p-3">Speedup vs SGLang</th>
                    <th className="p-3">Estratégia &amp; Fonte</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-300 bg-white">
                  <tr>
                    <td className="p-3 font-bold">muse_attention_decode</td>
                    <td className="p-3 font-black text-emerald-600 text-base">2.580x</td>
                    <td className="p-3 font-mono">vjeux/okc-2026 (Apache-2.0)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">muse_decode_layer</td>
                    <td className="p-3 font-black text-emerald-600 text-base">2.136x</td>
                    <td className="p-3 font-mono">Madhavan113/kerneloptimizer (Apache-2.0)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">muse_moe_w4a16</td>
                    <td className="p-3 font-black text-emerald-600 text-base">2.339x</td>
                    <td className="p-3 font-mono">Madhavan113/kerneloptimizer (Apache-2.0)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">muse_bf16_proj</td>
                    <td className="p-3 font-black text-emerald-600 text-base">1.500x</td>
                    <td className="p-3 font-mono">vjeux/okc-2026 (Apache-2.0)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-base text-neutral-700 mt-4">
              Além dos códigos integrados, desenvolvemos kernels autorais em <strong>Gluon warp-specialized attention verify</strong> atingindo 1.892x de aceleração, bem como harnesses de medição em infraax preservados em <code className="font-bold">EXPERIMENTS.md</code>.
            </p>
          </section>

          {/* SEÇÃO 03 */}
          <section id="serving-track-strategy" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              03. Serving Strategy: Zero-Copy Marlin MoE Engine
            </h2>
            <p>
              Na fase de Serving, os especialistas roteados dominam o tempo de execução acima de 16 conexões simultâneas. O maior desafio era a memória: reempacotar pesos NVFP4 exigiria duplicar os especialistas (cerca de <strong>57 GB extras por GPU</strong>), estourando a VRAM e inviabilizando o KV cache.
            </p>

            <div className="space-y-4 my-8 pl-6 border-l-4 border-black font-mono text-base sm:text-lg">
              <p>
                <strong className="text-black font-black uppercase block">// 01: MoE em Tensores Nativos do Marlin (mk_moe)</strong>
                Nosso kernel lê diretamente os tiles de peso e escalas do Marlin exatamente como armazenados, operando com um anel assíncrono <code className="font-bold">cp.async</code> por warp e split-K determinístico. Roda 1.6x a 2.0x mais rápido que o Marlin padrão sem consumir 1 byte extra de VRAM.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// 02: Projeções BF16 com Tabela Determinística (proj_mk)</strong>
                Projeções QKV, O, pooler e router usam cópias comprimidas sem perdas verificadas bit a bit na carga, consumindo apenas 6.8 GB extras por GPU e garantindo erro numérico inferior a 1.5e-4 em relação aos GEMMs nativos.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// 03: Especulação Híbrida: Prompt-Lookup no DFlash</strong>
                No contexto de programação com agentes autônomos, muito código é repetido. Implementamos busca por sufixo diretamente na GPU: quando o casamento é maior ou igual a 4 tokens, o prompt-lookup substitui a proposta do DFlash sem comunicação com a CPU host, aumentando os tokens aceitos por ciclo.
              </p>
            </div>

            <blockquote className="my-10 py-6 px-8 bg-neutral-100 border-l-8 border-black font-mono text-base sm:text-lg font-bold italic">
              &ldquo;Paridade numérica foi tratada como invariante de primeira classe: cada substituição foi comparada com o L2 relativo do SGLang nativo, garantindo que o modelo nunca alucinasse sob otimizações agressivas.&rdquo;
              <span className="block not-italic font-black text-xs uppercase mt-3 text-neutral-600">
                — Vinicius Pontual, Serving Track Architecture
              </span>
            </blockquote>
          </section>

          {/* SEÇÃO 04 */}
          <section id="rejected-hypotheses" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              04. Hipóteses Rejeitadas por Rigor Métrico
            </h2>
            <p>
              A engenharia de alta performance é guiada por descartar ideias intuitivas que falham em medições reais:
            </p>

            <div className="space-y-3 font-mono text-sm border-t-2 border-black pt-4">
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">01 / Kernels de Atenção Alternativos:</strong> Apresentaram divergência de 3% a 13% em relação ao caminho FA3 FP8 do SGLang, violando a regra de concordância estrita do juiz.
              </div>
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">02 / Shared-Dequant Hot-Expert:</strong> A sobrecarga de sincronização entre SMs superou os ganhos de largura de banda de memória em testes de concorrência 32.
              </div>
              <div className="py-2">
                <strong className="text-black uppercase">03 / Remix de Instruções INT-to-FMA:</strong> Causou stall nas unidades de despacho do H200 em blocos de verificação de 256 tokens.
              </div>
            </div>
          </section>

          {/* SEÇÃO 05 */}
          <section id="specs-and-layout" className="space-y-6 pt-6 border-t-4 border-black">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              05. Especificações do Cluster &amp; Layout dos Patches
            </h2>
            <p className="text-base text-neutral-700">
              Ambiente de execução, dependências e estrutura de arquivos:
            </p>

            <div className="border-2 border-black overflow-x-auto">
              <table className="w-full text-left font-mono text-xs sm:text-sm">
                <thead className="bg-black text-white uppercase border-b-2 border-black">
                  <tr>
                    <th className="p-3">Componente</th>
                    <th className="p-3">Especificação Técnica</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-300 bg-white">
                  <tr>
                    <td className="p-3 font-bold">Arquitetura de GPU</td>
                    <td className="p-3 font-mono">NVIDIA H200 SXM5 (141GB HBM3e, 4.8 TB/s de largura de banda)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Framework Alvo</td>
                    <td className="p-3 font-mono">SGLang (Commit a55ab7d5 / Branch my-patch)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Quantização de Pesos</td>
                    <td className="p-3 font-mono">NVFP4 W4A16 com tiles e escalas de Marlin</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Decodificação Especulativa</td>
                    <td className="p-3 font-mono">DFlash (8 draft tokens) + Hybrid Prompt-Lookup</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="font-mono text-xs sm:text-sm bg-neutral-100 border-2 border-black p-4 space-y-2 mt-4">
              <div><strong>REPOSITÓRIO:</strong> <a href="https://github.com/Vinisilva0010/muse-kernel-challenge" target="_blank" rel="noopener noreferrer" className="underline font-bold">github.com/Vinisilva0010/muse-kernel-challenge</a></div>
              <div><strong>PATCH FULL:</strong> <code className="font-bold">serve/patch_full_hybrid.diff</code></div>
              <div><strong>PREFLIGHT VALIDATION:</strong> <code className="font-bold">bash tools/run_preflight_checks.sh</code></div>
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
                <a href="#the-frontier-challenge" className="block hover:underline text-black">
                  01. Desafio 816B MoE
                </a>
                <a href="#kernel-track-results" className="block hover:underline text-black">
                  02. Tabela de Benchmarks
                </a>
                <a href="#serving-track-strategy" className="block hover:underline text-black">
                  03. Marlin MoE &amp; DFlash
                </a>
                <a href="#rejected-hypotheses" className="block hover:underline text-black">
                  04. Hipóteses Rejeitadas
                </a>
                <a href="#specs-and-layout" className="block hover:underline text-black">
                  05. Especificações &amp; Patches
                </a>
              </nav>
            </div>

            <div className="border-t-2 border-neutral-300 pt-6 space-y-3">
              <span className="text-xs uppercase font-black text-neutral-500 block">
                ENGINEERING RESOURCES
              </span>
              <a
                href="https://github.com/Vinisilva0010/muse-kernel-challenge"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-black !text-white py-3 font-black text-xs uppercase hover:bg-neutral-800 transition-colors"
              >
                Inspect CUDA Code [›]
              </a>
              <Link
                href="/projetos/orquestracao-agentes"
                className="block w-full text-center border-2 border-black py-2.5 font-black text-xs uppercase hover:bg-neutral-100 transition-colors"
              >
                View Agent Orchestrator
              </Link>
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
          
          {/* PROJETO 1: ORQUESTRAÇÃO DE AGENTES */}
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

          {/* PROJETO 2: REVIEW-HARNESS */}
          <article className="space-y-4">
            <Link 
              href="/projetos/review-harness" 
              className="block w-full border-4 border-black group overflow-hidden"
            >
              <div 
                style={{ backgroundColor: "#000000" }} 
                className="relative w-full h-56 flex items-center justify-center font-mono p-4 text-center border-b-2 border-black"
              >
                <span style={{ color: "#ffffff" }} className="text-sm font-black uppercase tracking-wider">
                  [ AI DEVSECOPS // PR GATEKEEPER ]
                </span>
              </div>
            </Link>
            
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase text-neutral-500 font-bold block">
                DEVSECOPS // RUST &amp; GITHUB ACTIONS
              </span>
              <h4 className="text-xl font-black uppercase leading-tight text-black hover:underline">
                <Link href="/projetos/review-harness">
                  review-harness: Automated CI Risk Tiering
                </Link>
              </h4>
            </div>

            <div className="pt-2 border-t-2 border-neutral-200 flex justify-between items-center font-mono text-xs">
              <Link 
                href="/projetos/review-harness" 
                className="font-black uppercase underline hover:text-neutral-600"
              >
                Read Specification ›
              </Link>
              <span className="text-neutral-500 font-bold">OCT 2026</span>
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