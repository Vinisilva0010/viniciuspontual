import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "review-harness — Autonomous PR Review & Security Engine for AI-Generated Code",
  description:
    "Production-grade CI/CD gatekeeper and Rust CLI orchestrating tiered risk analysis, deterministic security scanners (Gitleaks, cargo-audit), and budgeted LLM review for pull requests.",
  keywords: [
    "AI Code Review",
    "DevSecOps",
    "GitHub Actions",
    "Rust",
    "Pull Request Security",
    "Gitleaks",
    "cargo-audit",
    "Gemini API",
    "Claude Code Review",
    "Autonomous Agents",
  ],
  authors: [{ name: "Vinicius Pontual" }],
  openGraph: {
    title: "review-harness // Autonomous PR Review & Security Gatekeeper",
    description:
      "Deterministic CI/CD pipeline preventing AI-generated code bloat from bypassing human audits. Free static checks first, budgeted LLMs on demand.",
    type: "article",
    publishedTime: "2026-10-20T00:00:00.000Z",
    authors: ["Vinicius Pontual"],
  },
};

export default function ReviewHarnessProjectPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "review-harness",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Linux, macOS, GitHub Actions",
    author: {
      "@type": "Person",
      name: "Vinicius Pontual",
      jobTitle: "Smart Contract & Systems Engineer",
    },
    datePublished: "2026-10-20",
    dateModified: "2026-11-09",
    programmingLanguage: "Rust, YAML, TOML",
    runtimePlatform: "GitHub Actions (Ubuntu Latest), Rust 1.98+",
    codeRepository: "https://github.com/Vinisilva0010/review-harness",
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
          <span className="font-black text-black">[ AI DEVSECOPS // 01 ]</span>
          <span>•</span>
          <span>AUTONOMOUS PR GATEKEEPER</span>
          <span>•</span>
          <span>ZERO-TRUST AUDIT PIPELINE</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[1.05] mb-6 text-black">
          review-harness: Automated CI Security &amp; Risk Tiering for AI-Generated Code
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-800 font-medium max-w-4xl leading-relaxed mb-6">
          A zero-overhead, multi-stage gatekeeper for pull requests that balances speed, cost, and security: enforcing test passing, path-based risk categorization, credential leak detection, and strictly scoped LLM audits.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-neutral-200 font-mono text-sm text-neutral-600">
          <div>
            BY <span className="font-black text-black">VINICIUS PONTUAL</span> — SYSTEMS &amp; SECURITY ARCHITECT
          </div>
          <div>RELEASED: OCT 2026 // RUST 1.98+ // GITHUB ACTIONS ENGINE</div>
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
              [ PIPELINE STATE MACHINE &amp; DECISION LIFECYCLE ]
            </span>
            <span 
              style={{ backgroundColor: "rgba(16, 185, 129, 0.15)", color: "#34d399", borderColor: "#059669" }}
              className="text-xs px-2.5 py-1 border font-bold"
            >
              ATOMIC VERDICT
            </span>
          </div>

          {/* Fluxograma com fundo escuro e letras 100% brancas */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 min-w-[700px]">
            <div style={{ backgroundColor: "#121212", borderColor: "#2e2e2e" }} className="border p-4">
              <span style={{ color: "#a3a3a3" }} className="text-[10px] block uppercase font-bold">STAGE 01</span>
              <strong style={{ color: "#ffffff" }} className="text-sm uppercase block mt-1">TEST RUNNER</strong>
              <p style={{ color: "#d4d4d4" }} className="text-xs mt-2">Zero-tolerance: tests must pass. Failure blocks merge immediately.</p>
            </div>
            <div style={{ backgroundColor: "#121212", borderColor: "#2e2e2e" }} className="border p-4">
              <span style={{ color: "#a3a3a3" }} className="text-[10px] block uppercase font-bold">STAGE 02</span>
              <strong style={{ color: "#ffffff" }} className="text-sm uppercase block mt-1">RISK MAPPING</strong>
              <p style={{ color: "#d4d4d4" }} className="text-xs mt-2">Path diff analyzer evaluates touches on auth, secrets, and CI.</p>
            </div>
            <div style={{ backgroundColor: "#121212", borderColor: "#2e2e2e" }} className="border p-4">
              <span style={{ color: "#a3a3a3" }} className="text-[10px] block uppercase font-bold">STAGE 03</span>
              <strong style={{ color: "#ffffff" }} className="text-sm uppercase block mt-1">SECURITY PROBE</strong>
              <p style={{ color: "#d4d4d4" }} className="text-xs mt-2">Gitleaks credential detection &amp; cargo-audit CVE scans.</p>
            </div>
            <div style={{ backgroundColor: "#121212", borderColor: "#2e2e2e" }} className="border p-4">
              <span style={{ color: "#a3a3a3" }} className="text-[10px] block uppercase font-bold">STAGE 04</span>
              <strong style={{ color: "#ffffff" }} className="text-sm uppercase block mt-1">LLM REVIEW</strong>
              <p style={{ color: "#d4d4d4" }} className="text-xs mt-2">Targeted line audits. Strict token cap. Cannot approve PRs.</p>
            </div>
            <div style={{ backgroundColor: "#121212", borderColor: "#059669" }} className="border-2 p-4">
              <span style={{ color: "#34d399" }} className="text-[10px] block uppercase font-bold">FINAL VERDICT</span>
              <strong style={{ color: "#ffffff" }} className="text-sm uppercase block mt-1">CONSOLIDATED</strong>
              <p style={{ color: "#e5e5e5" }} className="text-xs mt-2">Single comment post: PASS, NEEDS HUMAN, or FAIL.</p>
            </div>
          </div>
        </div>

        <div className="p-3 bg-neutral-100 font-mono text-xs text-neutral-700 border-t-2 border-black flex flex-wrap justify-between items-center gap-2">
          <span>FIG 1.0: ORDER OF EXECUTION (DETERMINISTIC ZERO-COST CHECKS PRECEDING HIGH-LATENCY AI)</span>
          <span className="font-bold uppercase">[ DETERMINISTIC EXECUTION PIPELINE ]</span>
        </div>
      </div>

      {/* CORPO DO ARTIGO EM 2 COLUNAS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* COLUNA PRINCIPAL DE LEITURA */}
        <article className="lg:col-span-8 space-y-14 text-neutral-900 leading-relaxed text-lg sm:text-xl">
          
          {/* STATS EM LINHA */}
          <div className="flex flex-wrap gap-8 py-6 border-y-2 border-black font-mono">
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Execution Model</span>
              <strong className="text-2xl font-black text-black">Zero-Trust CI</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Rule Security</span>
              <strong className="text-2xl font-black text-black">Main Branch Only</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Static Scanners</span>
              <strong className="text-2xl font-black text-black">Gitleaks + Audit</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">AI Invariant</span>
              <strong className="text-2xl font-black text-black">Never Approves</strong>
            </div>
          </div>

          {/* SEÇÃO 01 */}
          <section id="the-ai-coding-reality" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              01. The AI Coding Reality: Scalability vs. Security Invariants
            </h2>
            <p>
              Autonomous programming agents (such as Claude Code, Codex, and Cursor) generate software artifacts at a velocity exceeding any engineering team&apos;s manual cognitive bandwidth. Reading every single generated line does not scale; reading nothing introduces critical vulnerabilities into production codebases.
            </p>
            <p>
              Directly inspired by Anthropic&apos;s architectural report <em>&ldquo;How the Claude Code team does code review&rdquo; (October 2026)</em>, <strong>review-harness</strong> implements a tiered inspection pipeline engineered for resource efficiency:
            </p>
            <ul className="space-y-3 list-disc pl-6 font-medium text-base sm:text-lg">
              <li><strong>Zero-Cost Precedence:</strong> Free, deterministic checks (unit tests, static credential scanners, and path diff inspections) execute first. Costly LLM tokens are never consumed on broken or invalid diffs.</li>
              <li><strong>Budget-Bounded AI Invocations:</strong> AI review runs strictly on medium- and high-risk PRs with rigid token budgets and a hard ceiling of 3 iterative rounds per PR.</li>
              <li><strong>Hallucination Pruning:</strong> Findings referencing code coordinates outside the actual pull request diff are discarded in memory before posting to GitHub.</li>
            </ul>
          </section>

          {/* SEÇÃO 02 */}
          <section id="verdict-architecture" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              02. Architectural Pipeline: The 3-State Verdict Matrix
            </h2>
            <p>
              Every inspected pull request converges onto one of three unambiguous outcomes, eliminating ambiguity for human maintainers:
            </p>

            <div className="border-2 border-black overflow-x-auto">
              <table className="w-full text-left font-mono text-xs sm:text-sm">
                <thead className="bg-black text-white uppercase border-b-2 border-black">
                  <tr>
                    <th className="p-3 w-1/4">Verdict</th>
                    <th className="p-3 w-1/2">Execution Meaning</th>
                    <th className="p-3 w-1/4">Action Required</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-300 bg-white">
                  <tr>
                    <td className="p-3 font-black text-emerald-600 uppercase">PASS</td>
                    <td className="p-3">All test suites passed, zero credentials leaked, and only low-risk peripheral files modified.</td>
                    <td className="p-3 font-bold">Merge allowed</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-black text-amber-600 uppercase">NEEDS HUMAN</td>
                    <td className="p-3">All verification tests passed, but the diff touches sensitive areas (auth, payments, secrets, CI rules).</td>
                    <td className="p-3 font-bold">Human peer review required</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-black text-red-600 uppercase">FAIL</td>
                    <td className="p-3">Unit/integration tests failed, CVE detected in dependencies, or plaintext secret identified by Gitleaks.</td>
                    <td className="p-3 font-bold">Blocked from merging</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <blockquote className="my-10 py-6 px-8 bg-neutral-100 border-l-8 border-black font-mono text-base sm:text-lg font-bold italic">
              &ldquo;An AI agent can flag potential architectural defects, but it must never be granted authority to approve a PR. Verification invariants belong to deterministic static checks and human security engineers.&rdquo;
              <span className="block not-italic font-black text-xs uppercase mt-3 text-neutral-600">
                — Vinicius Pontual, review-harness Design Philosophy
              </span>
            </blockquote>
          </section>

          {/* SEÇÃO 03 */}
          <section id="five-stage-pipeline" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              03. Five-Stage Pipeline: Tiered Execution Lifecycle
            </h2>
            <p>
              The engine processes changes in strict serial priority to protect computing budgets and developer time:
            </p>

            <div className="space-y-4 my-8 pl-6 border-l-4 border-black font-mono text-base sm:text-lg">
              <p>
                <strong className="text-black font-black uppercase block">// 01: Test Suite Verification</strong>
                Executes user-defined test commands (<code className="font-bold">cargo test</code>, <code className="font-bold">npm test</code>, <code className="font-bold">pytest</code>). Without clean execution, a PR can never receive a &ldquo;Pass&rdquo; status.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// 02: Path-Based Risk Tiering</strong>
                Evaluates file path glob patterns against user-specified sensitive directories (e.g., authentication modules, payment gateways, CI configs, env files).
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// 03: Static Security Auditing</strong>
                Executes native <code className="font-bold">gitleaks</code> to detect exposed private keys, bearer tokens, and secrets, paired with <code className="font-bold">cargo-audit</code> to flag vulnerable supply chain dependencies.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// 04: Budget-Capped LLM Inspection (Optional)</strong>
                Queries Gemini, Claude, or Groq backends strictly over changed lines of medium/high-risk PRs. Hallucinated line references are automatically stripped.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// 05: Atomic Verdict Comment</strong>
                Publishes a single, structured Markdown status comment directly on the GitHub pull request containing itemized execution breakdowns.
              </p>
            </div>
          </section>

          {/* SEÇÃO 04 */}
          <section id="zero-trust-isolation" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              04. Zero-Trust Security Guarantees &amp; Branch Protection
            </h2>
            <p>
              Traditional CI actions often introduce supply chain risks where untrusted pull requests tamper with evaluation scripts or exfiltrate environment secrets. <strong>review-harness</strong> implements strict isolation defenses:
            </p>

            <div className="space-y-3 font-mono text-sm border-t-2 border-black pt-4">
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">01 / Main Branch Config Invariant:</strong> The configuration file (<code className="font-bold">.review-harness.toml</code>) is read strictly from the target <code className="font-bold">main</code> branch, never from the PR branch. A pull request cannot modify its own verification rules.
              </div>
              <div className="py-2 border-b border-neutral-300">
                <strong className="text-black uppercase">02 / Fork Isolation:</strong> Pull requests opened from third-party forks never receive access to LLM API keys or repository secrets.
              </div>
              <div className="py-2">
                <strong className="text-black uppercase">03 / Minimal Token Scopes:</strong> The GitHub Actions workflow operates strictly under <code className="font-bold">contents: read</code> and <code className="font-bold">pull-requests: write</code> permissions, prohibiting unauthorized repository alterations.
              </div>
            </div>
          </section>

          {/* SEÇÃO 05 */}
          <section id="workflow-configuration" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              05. Workflow &amp; Project Configuration
            </h2>
            <p>
              Integrating the harness into any GitHub repository requires two declarative files:
            </p>

            {/* CÓDIGO CLARO COM FUNDO NÍTIDO */}
            <div className="space-y-4">
              <div className="font-mono text-xs sm:text-sm bg-neutral-100 text-neutral-900 p-5 border-2 border-black space-y-2 overflow-x-auto">
                <p className="text-neutral-500 font-bold">// 1. .github/workflows/review-harness.yml</p>
                <p><span className="font-bold text-black">name:</span> review-harness</p>
                <p><span className="font-bold text-black">on:</span></p>
                <p className="pl-4">pull_request:</p>
                <p className="pl-8">types: [opened, synchronize, reopened]</p>
                <p><span className="font-bold text-black">permissions:</span></p>
                <p className="pl-4">contents: read</p>
                <p className="pl-4">pull-requests: write</p>
                <p><span className="font-bold text-black">jobs:</span></p>
                <p className="pl-4">review:</p>
                <p className="pl-8">runs-on: ubuntu-latest</p>
                <p className="pl-8">steps:</p>
                <p className="pl-12">- uses: actions/checkout@v4</p>
                <p className="pl-16">with:</p>
                <p className="pl-20">fetch-depth: 0</p>
                <p className="pl-20">persist-credentials: false</p>
                <p className="pl-12">- uses: Vinisilva0010/review-harness@main</p>
                <p className="pl-16">with:</p>
                <p className="pl-20">base-sha: &#36;&#123;&#123; github.event.pull_request.base.sha &#125;&#125;</p>
                <p className="pl-20">head-sha: &#36;&#123;&#123; github.event.pull_request.head.sha &#125;&#125;</p>
                <p className="pl-20">pr-number: &#36;&#123;&#123; github.event.pull_request.number &#125;&#125;</p>
              </div>

              <div className="font-mono text-xs sm:text-sm bg-neutral-100 text-neutral-900 p-5 border-2 border-black space-y-2 overflow-x-auto">
                <p className="text-neutral-500 font-bold">// 2. .review-harness.toml (Root of Project)</p>
                <p><span className="font-bold text-black">[verify]</span></p>
                <p>checks = [</p>
                <p className="pl-4">&#123; name = &quot;test&quot;, command = &quot;cargo test --all&quot; &#125;,</p>
                <p>]</p>
                <p className="pt-2"><span className="font-bold text-black">[risk]</span></p>
                <p>high = [&quot;.github/workflows/**&quot;, &quot;**/*auth*/**&quot;, &quot;**/.env*&quot;]</p>
                <p className="pt-2"><span className="font-bold text-black">[review]</span></p>
                <p>provider = &quot;none&quot; <span className="text-neutral-500 font-bold"># Toggle &quot;gemini&quot; / &quot;anthropic&quot; / &quot;openai&quot;</span></p>
              </div>
            </div>
          </section>

          {/* SEÇÃO 06 */}
          <section id="specs-and-cli" className="space-y-6 pt-6 border-t-4 border-black">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              06. Specifications &amp; CLI Toolchain
            </h2>
            <p className="text-base text-neutral-700">
              Technical specifications and local developer tooling:
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
                    <td className="p-3 font-bold">Core Implementation</td>
                    <td className="p-3 font-mono">Rust 1.98.1+ / Tokio Runtime</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Security Scanners</td>
                    <td className="p-3 font-mono">Gitleaks 8.x + cargo-audit (RustSec Advisory Database)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Supported LLM Providers</td>
                    <td className="p-3 font-mono">Google Gemini, Anthropic Claude, OpenAI / Groq</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">CI Platform</td>
                    <td className="p-3 font-mono">GitHub Actions (Ubuntu x86_64 runner)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="font-mono text-xs sm:text-sm bg-neutral-100 border-2 border-black p-4 space-y-2 mt-4">
              <div><strong>REPOSITORY:</strong> <a href="https://github.com/Vinisilva0010/review-harness" target="_blank" rel="noopener noreferrer" className="underline font-bold">github.com/Vinisilva0010/review-harness</a></div>
              <div><strong>CLI INSTALL:</strong> <code className="font-bold">cargo install --git https://github.com/Vinisilva0010/review-harness harness-cli --locked</code></div>
              <div><strong>LOCAL INITIALIZATION:</strong> <code className="font-bold">review-harness init &amp;&amp; review-harness --help</code></div>
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
                <a href="#the-ai-coding-reality" className="block hover:underline text-black">
                  01. AI Code Review Reality
                </a>
                <a href="#verdict-architecture" className="block hover:underline text-black">
                  02. 3-State Verdict Matrix
                </a>
                <a href="#five-stage-pipeline" className="block hover:underline text-black">
                  03. Five-Stage Pipeline
                </a>
                <a href="#zero-trust-isolation" className="block hover:underline text-black">
                  04. Zero-Trust Architecture
                </a>
                <a href="#workflow-configuration" className="block hover:underline text-black">
                  05. Workflow Configuration
                </a>
                <a href="#specs-and-cli" className="block hover:underline text-black">
                  06. Specifications &amp; CLI
                </a>
              </nav>
            </div>

            <div className="border-t-2 border-neutral-300 pt-6 space-y-3">
              <span className="text-xs uppercase font-black text-neutral-500 block">
                ENGINEERING RESOURCES
              </span>
              <a
                href="https://github.com/Vinisilva0010/review-harness"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-black !text-white py-3 font-black text-xs uppercase hover:bg-neutral-800 transition-colors"
              >
                Inspect Rust Repository [›]
              </a>
              <Link
                href="/projetos/protocolo-strata-tranches-solana"
                className="block w-full text-center border-2 border-black py-2.5 font-black text-xs uppercase hover:bg-neutral-100 transition-colors"
              >
                View Strata Protocol
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
          
          {/* PROJETO 1: STRATA PROTOCOL */}
          <article className="space-y-4">
            <Link 
              href="/projetos/protocolo-strata-tranches-solana" 
              className="block w-full border-4 border-black group overflow-hidden"
            >
              <div 
                style={{ backgroundColor: "#000000" }} 
                className="relative w-full h-56 flex items-center justify-center font-mono p-4 text-center border-b-2 border-black"
              >
                <span style={{ color: "#ffffff" }} className="text-sm font-black uppercase tracking-wider">
                  [ RWA // STRUCTURED CREDIT ENGINE ]
                </span>
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

          {/* PROJETO 2: FLASH LOAN ARBITRAGE */}
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

          {/* PROJETO 3: SMARTFLOW */}
          <article className="space-y-4">
            <Link 
              href="/projetos/smartflow-radar-smart-money-solana" 
              className="block w-full border-4 border-black group overflow-hidden"
            >
              <div 
                style={{ backgroundColor: "#000000" }} 
                className="relative w-full h-56 flex items-center justify-center font-mono p-4 text-center border-b-2 border-black"
              >
                <span style={{ color: "#ffffff" }} className="text-sm font-black uppercase tracking-wider">
                  [ ONCHAIN RADAR // SMART MONEY FLOW ]
                </span>
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