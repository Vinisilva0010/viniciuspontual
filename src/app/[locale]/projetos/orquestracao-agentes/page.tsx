import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Orquestração de Agentes — Self-Hosted Human-in-the-Loop AI Workspace in Rust",
  description:
    "Self-hosted multi-service workspace for autonomous AI agents and human teams. Enforces encrypted gateway key vaults, pre-reserved token budgets, irreversible action gates, and hash-chained audit trails.",
  keywords: [
    "AI Agent Orchestration",
    "Human in the Loop",
    "Rust",
    "DevSecOps",
    "Next.js",
    "PostgreSQL",
    "Docker Sandbox",
    "Security Invariants",
    "Audit Logging",
    "Token Budgeting",
  ],
  authors: [{ name: "Vinicius Pontual" }],
  openGraph: {
    title: "Orquestração de Agentes // Zero-Trust Human-AI Collaboration Workspace",
    description:
      "A security-first agent execution runtime. Provider keys never leak, budget limits cannot be breached, and irreversible actions require cryptographic human approval.",
    type: "article",
    publishedTime: "2026-11-05T00:00:00.000Z",
    authors: ["Vinicius Pontual"],
  },
};

export default function AgentOrchestrationProjectPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Orquestração de Agentes",
    applicationCategory: "SecurityApplication",
    operatingSystem: "Linux (WSL2 / Ubuntu), Docker Compose",
    author: {
      "@type": "Person",
      name: "Vinicius Pontual",
      jobTitle: "Smart Contract & Systems Engineer",
    },
    datePublished: "2026-11-05",
    dateModified: "2026-11-09",
    programmingLanguage: "Rust, TypeScript, Python, SQL",
    runtimePlatform: "Rust 1.98+, PostgreSQL 16, Docker Compose, Next.js",
    codeRepository: "https://github.com/Vinisilva0010/agent-orchestrator",
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
          <span className="font-black text-black">[ AUTONOMOUS SYSTEMS // 03 ]</span>
          <span>•</span>
          <span>ZERO-TRUST AGENT RUNTIME</span>
          <span>•</span>
          <span>CRYPTOGRAPHIC GOVERNANCE</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[1.05] mb-6 text-black">
          Orquestração de Agentes: Self-Hosted Human-in-the-Loop Governance
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-800 font-medium max-w-4xl leading-relaxed mb-6">
          Um espaço de trabalho auto-hospedado projetado para colaboração simbiótica entre humanos e agentes de IA, estabelecendo fronteiras de segurança intransponíveis para custos, segredos e operações críticas.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-neutral-200 font-mono text-sm text-neutral-600">
          <div>
            BY <span className="font-black text-black">VINICIUS PONTUAL</span> — DISTRIBUTED SYSTEMS &amp; SECURITY ARCHITECT
          </div>
          <div>STATUS: FASES 1-4 CONCLUÍDAS // RUST + POSTGRESQL + DOCKER + NEXT.JS</div>
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
              [ MULTI-SERVICE ZERO-TRUST DEFENSE TOPOLOGY ]
            </span>
            <span 
              style={{ backgroundColor: "rgba(16, 185, 129, 0.15)", color: "#34d399", borderColor: "#059669" }}
              className="text-xs px-2.5 py-1 border font-bold"
            >
              LEAST PRIVILEGE INVARIANTS
            </span>
          </div>

          {/* Fluxograma das Camadas de Serviço */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 min-w-[750px]">
            <div style={{ backgroundColor: "#121212", borderColor: "#2e2e2e" }} className="border p-4">
              <span style={{ color: "#a3a3a3" }} className="text-[10px] block uppercase font-bold">SERVICE 01</span>
              <strong style={{ color: "#ffffff" }} className="text-sm uppercase block mt-1">GATEWAY VAULT</strong>
              <p style={{ color: "#d4d4d4" }} className="text-xs mt-2">Cofre de chaves de provedor. Reserva prévia de custos de token.</p>
            </div>
            <div style={{ backgroundColor: "#121212", borderColor: "#2e2e2e" }} className="border p-4">
              <span style={{ color: "#a3a3a3" }} className="text-[10px] block uppercase font-bold">SERVICE 02</span>
              <strong style={{ color: "#ffffff" }} className="text-sm uppercase block mt-1">CORE SERVER</strong>
              <p style={{ color: "#d4d4d4" }} className="text-xs mt-2">Controle RBAC, sessões criptográficas e API HTTP para a web.</p>
            </div>
            <div style={{ backgroundColor: "#121212", borderColor: "#2e2e2e" }} className="border p-4">
              <span style={{ color: "#a3a3a3" }} className="text-[10px] block uppercase font-bold">SERVICE 03</span>
              <strong style={{ color: "#ffffff" }} className="text-sm uppercase block mt-1">ENGINE WORKER</strong>
              <p style={{ color: "#d4d4d4" }} className="text-xs mt-2">Execução do loop de agente, interrupção de ações irreversíveis.</p>
            </div>
            <div style={{ backgroundColor: "#121212", borderColor: "#2e2e2e" }} className="border p-4">
              <span style={{ color: "#a3a3a3" }} className="text-[10px] block uppercase font-bold">SERVICE 04</span>
              <strong style={{ color: "#ffffff" }} className="text-sm uppercase block mt-1">PYTHON SANDBOX</strong>
              <p style={{ color: "#d4d4d4" }} className="text-xs mt-2">Container isolado: sem rede, filesystem read-only, limites de CPU/RAM.</p>
            </div>
            <div style={{ backgroundColor: "#121212", borderColor: "#059669" }} className="border-2 p-4">
              <span style={{ color: "#34d399" }} className="text-[10px] block uppercase font-bold">DATABASE</span>
              <strong style={{ color: "#ffffff" }} className="text-sm uppercase block mt-1">HASH-CHAINED LOG</strong>
              <p style={{ color: "#e5e5e5" }} className="text-xs mt-2">Log de auditoria append-only imutável via triggers SQL.</p>
            </div>
          </div>
        </div>

        <div className="p-3 bg-neutral-100 font-mono text-xs text-neutral-700 border-t-2 border-black flex flex-wrap justify-between items-center gap-2">
          <span>FIG 1.0: DISTRIBUTED PROCESS ISOLATION BOUNDARIES (GATEWAY, SERVER, ENGINE, SANDBOX, DB)</span>
          <span className="font-bold uppercase">[ SECURITY ARCHITECTURE ]</span>
        </div>
      </div>

      {/* CORPO DO ARTIGO EM 2 COLUNAS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* COLUNA PRINCIPAL DE LEITURA */}
        <article className="lg:col-span-8 space-y-14 text-neutral-900 leading-relaxed text-lg sm:text-xl">
          
          {/* STATS EM LINHA */}
          <div className="flex flex-wrap gap-8 py-6 border-y-2 border-black font-mono">
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Key Vault Isolation</span>
              <strong className="text-2xl font-black text-black">Zero-Leak Gateway</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Budget Guard</span>
              <strong className="text-2xl font-black text-black">Pre-Reserved Caps</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Action Invariant</span>
              <strong className="text-2xl font-black text-black">Human Approval</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Audit Immutability</span>
              <strong className="text-2xl font-black text-black">Hash-Chained Log</strong>
            </div>
          </div>

          {/* SEÇÃO 01 */}
          <section id="the-autonomy-dilemma" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              01. The Autonomy Dilemma: Governance &amp; Security Invariants
            </h2>
            <p>
              Delegar tarefas de engenharia e operações a agentes de IA sem limites determinísticos expõe organizações a riscos severos: vazamento acidental de chaves de API, estouro descontrolado de orçamentos de LLMs e execução inadvertida de comandos destrutivos em ambientes de produção.
            </p>
            <p>
              O projeto <strong>Orquestração de Agentes</strong> foi desenvolvido para solucionar essa assimetria por meio de cinco garantias invioláveis construídas no nível da infraestrutura:
            </p>
            <ul className="space-y-3 list-disc pl-6 font-medium text-base sm:text-lg">
              <li><strong>Isolamento Criptográfico de Chaves:</strong> Chaves de provedores de IA (Anthropic, OpenAI, Gemini) residem unicamente no cofre do Gateway. O servidor web, o mecanismo de execução e o sandbox nunca têm acesso a nenhuma chave mestra ou de provedor, recusando-se a inicializar caso detectem segredos em seu ambiente.</li>
              <li><strong>Pré-Reserva Estrita de Orçamento:</strong> Gastos nunca ultrapassam tetos estabelecidos por espaço de trabalho, por agente e por tarefa individual. Cada chamada de modelo pré-reserva seu custo máximo antes da execução. Se o saldo for insuficiente, a tarefa é congelada e aguarda liberação administrativa.</li>
              <li><strong>Pausas Obrigatórias para Ações Irreversíveis:</strong> Ferramentas marcadas pelo desenvolvedor como de alto impacto (ex: exclusão de banco de dados, emissão de ordens, envio de e-mails em massa) suspendem a execução do agente até que um operador humano aprove ou rejeite a operação.</li>
            </ul>
          </section>

          {/* SEÇÃO 02 */}
          <section id="service-topology" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              02. Architectural Multi-Service Topology
            </h2>
            <p>
              A plataforma é particionada em processos Rust independentes com permissões SQL granulares no PostgreSQL:
            </p>

            <div className="border-2 border-black overflow-x-auto">
              <table className="w-full text-left font-mono text-xs sm:text-sm">
                <thead className="bg-black text-white uppercase border-b-2 border-black">
                  <tr>
                    <th className="p-3">Serviço</th>
                    <th className="p-3">Porta</th>
                    <th className="p-3">Responsabilidade de Segurança</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-300 bg-white">
                  <tr>
                    <td className="p-3 font-bold">gateway</td>
                    <td className="p-3 font-mono">8081</td>
                    <td className="p-3">Cofre encriptado de chaves, limites de uso e proxy de despacho para provedores de fronteira.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">server</td>
                    <td className="p-3 font-mono">8090</td>
                    <td className="p-3">Gerenciamento de contas, sessões __Host-cookie, RBAC e aplicação de migrações SQL.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">engine worker</td>
                    <td className="p-3 font-mono">—</td>
                    <td className="p-3">Execução de passos dos agentes, mediação de ferramentas e interrupção por aprovação.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">sandbox</td>
                    <td className="p-3 font-mono">8095</td>
                    <td className="p-3">Container isolado para execução de scripts Python com limites rígidos de memória, CPU e sem rede.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">web</td>
                    <td className="p-3 font-mono">3000</td>
                    <td className="p-3">Interface em Next.js com Content Security Policy estrita (nonce por requisição).</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <blockquote className="my-10 py-6 px-8 bg-neutral-100 border-l-8 border-black font-mono text-base sm:text-lg font-bold italic">
              &ldquo;O que acontecerá no mundo real é definido pelos engenheiros na especificação da ferramenta, nunca pela alucinação do modelo de linguagem. Princípio do menor privilégio aplicado a cada linha de código.&rdquo;
              <span className="block not-italic font-black text-xs uppercase mt-3 text-neutral-600">
                — Vinicius Pontual, Modelo de Ameaças &amp; Governança
              </span>
            </blockquote>
          </section>

          {/* SEÇÃO 03 */}
          <section id="budget-and-governance" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              03. Financial Guardrails &amp; Immutable Audit Trail
            </h2>
            <p>
              A governança financeira e a transparência operacional são tratadas como invariantes matemáticas:
            </p>

            <div className="space-y-4 my-8 pl-6 border-l-4 border-black font-mono text-base sm:text-lg">
              <p>
                <strong className="text-black font-black uppercase block">// 01: Pré-Alocação de Saldo Máximo</strong>
                Diferente de sistemas que contabilizam tokens após a resposta, o Gateway bloqueia previamente o custo do pior cenário (teto máximo de tokens de saída). Se o modelo devolver menos tokens, a diferença é creditada instantaneamente.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// 02: Triggers de Auditoria Encadeados por Hash</strong>
                Toda e qualquer mutação no PostgreSQL (criação de usuários, alteração de orçamentos, aprovações, execuções) dispara triggers que gravam em uma tabela append-only. Cada linha computa o hash criptográfico do registro anterior, impossibilitando adulteração retroativa.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// 03: Identificação Nominal de Operador</strong>
                Nenhuma alteração é anônima. Cada aprovação ou alteração de permissão armazena o hash de identidade e a assinatura do operador responsável.
              </p>
            </div>
          </section>

          {/* SEÇÃO 04 */}
          <section id="docker-sandbox" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              04. Python Sandbox &amp; Provedor Mock para Testes E2E
            </h2>
            <p>
              Para assegurar que agentes não possam explorar o sistema operacional host, ferramentas analíticas de código executam dentro de um micro-sandbox Docker:
            </p>

            <div className="space-y-3 font-mono text-sm border-t-2 border-black pt-4">
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">01 / Isolamento de Rede Zero:</strong> O container Python opera com <code className="font-bold">--network none</code>, impedindo exfiltração de dados ou conexões com servidores externos de comando e controle.
              </div>
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">02 / Filesystem Read-Only:</strong> O sistema de arquivos interno é montado em modo somente-leitura com limites rígidos de RAM, processos simultâneos e timeout por execução.
              </div>
              <div className="py-2">
                <strong className="text-black uppercase">03 / Provedor Mock E2E:</strong> Para validação sem custos de tokens, o ambiente inclui um provedor mock determinístico capaz de simular respostas, loops orçamentários e disparar aprovações interativas para o painel web.
              </div>
            </div>
          </section>

          {/* SEÇÃO 05 */}
          <section id="dev-setup-specs" className="space-y-6 pt-6 border-t-4 border-black">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              05. Especificações &amp; Comandos Operacionais
            </h2>
            <p className="text-base text-neutral-700">
              Ferramentas de linha de comando e suítes de verificação de segurança:
            </p>

            <div className="border-2 border-black overflow-x-auto">
              <table className="w-full text-left font-mono text-xs sm:text-sm">
                <thead className="bg-black text-white uppercase border-b-2 border-black">
                  <tr>
                    <th className="p-3">Comando CLI</th>
                    <th className="p-3">Propósito Operacional</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-300 bg-white">
                  <tr>
                    <td className="p-3 font-bold">server migrate</td>
                    <td className="p-3 font-mono">Aplica migrações SQL e estabelece as senhas das roles de serviço.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">server create-admin EMAIL &quot;NOME&quot;</td>
                    <td className="p-3 font-mono">Cria o primeiro administrador do workspace (senha via stdin).</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">engine worker</td>
                    <td className="p-3 font-mono">Inicializa o processador de tarefas, mediações de aprovação e cancelamentos.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">scripts/attack-suite.sh</td>
                    <td className="p-3 font-mono">Valida que todos os cenários documentados em ATTACKS.md permanecem bloqueados.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="font-mono text-xs sm:text-sm bg-neutral-100 border-2 border-black p-4 space-y-2 mt-4">
              <div><strong>REPOSITÓRIO:</strong> <a href="https://github.com/Vinisilva0010/agent-orchestrator" target="_blank" rel="noopener noreferrer" className="underline font-bold">github.com/Vinisilva0010/agent-orchestrator</a></div>
              <div><strong>TEST STACK E2E:</strong> <code className="font-bold">docker compose -f compose.dev.yaml up -d &amp;&amp; scripts/e2e-stack.sh start</code></div>
              <div><strong>SUÍTE DE ATAQUES:</strong> <code className="font-bold">bash scripts/attack-suite.sh &amp;&amp; cargo test --workspace</code></div>
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
                <a href="#the-autonomy-dilemma" className="block hover:underline text-black">
                  01. Governança &amp; Invariantes
                </a>
                <a href="#service-topology" className="block hover:underline text-black">
                  02. Topologia Multi-Serviço
                </a>
                <a href="#budget-and-governance" className="block hover:underline text-black">
                  03. Orçamento &amp; Log Imutável
                </a>
                <a href="#docker-sandbox" className="block hover:underline text-black">
                  04. Sandbox &amp; Provedor Mock
                </a>
                <a href="#dev-setup-specs" className="block hover:underline text-black">
                  05. Especificações &amp; Comandos
                </a>
              </nav>
            </div>

            <div className="border-t-2 border-neutral-300 pt-6 space-y-3">
              <span className="text-xs uppercase font-black text-neutral-500 block">
                ENGINEERING RESOURCES
              </span>
              <a
                href="https://github.com/Vinisilva0010/agent-orchestrator"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-black !text-white py-3 font-black text-xs uppercase hover:bg-neutral-800 transition-colors"
              >
                Inspect Rust Runtime [›]
              </a>
              <Link
                href="/projetos/trend-pullback"
                className="block w-full text-center border-2 border-black py-2.5 font-black text-xs uppercase hover:bg-neutral-100 transition-colors"
              >
                View trend-pullback
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
          
          {/* PROJETO 1: TREND-PULLBACK */}
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

          {/* PROJETO 3: FLASH LOAN ARBITRAGE */}
          <article className="space-y-4">
            <Link 
              href="/projetos/arbitragem-flash-loan-solana" 
              className="block w-full border-4 border-black group overflow-hidden"
            >
              <div 
                style={{ backgroundColor: "#000000" }} 
                className="relative w-full h-56 flex items-center justify-center font-mono p-4 text-center border-b-2 border-black"
              >
                <span style={{ color: "#ffffff" }} className="text-sm font-black uppercase tracking-wider">
                  [ SOLANA // ATOMIC FLASH LOAN ARBITRAGE ]
                </span>
              </div>
            </Link>
            
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase text-neutral-500 font-bold block">
                DEFI // ANCHOR &amp; CPIS
              </span>
              <h4 className="text-xl font-black uppercase leading-tight text-black hover:underline">
                <Link href="/projetos/arbitragem-flash-loan-solana">
                  Solana Flash Loan Arbitrage Engine
                </Link>
              </h4>
            </div>

            <div className="pt-2 border-t-2 border-neutral-200 flex justify-between items-center font-mono text-xs">
              <Link 
                href="/projetos/arbitragem-flash-loan-solana" 
                className="font-black uppercase underline hover:text-neutral-600"
              >
                Read Specification ›
              </Link>
              <span className="text-neutral-500 font-bold">APR 2026</span>
            </div>
          </article>

        </div>
      </section>
    </div>
  );
}