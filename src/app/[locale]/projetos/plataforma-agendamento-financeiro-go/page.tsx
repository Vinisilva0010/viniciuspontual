import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enterprise Core Backend — High-Throughput Modular Architecture in Go & PostgreSQL",
  description:
    "Production-grade backend foundation for multi-tenant business systems. Built with Go 1.22+, pgx/v5, sqlc, and strict modular boundaries for authentication, RBAC, organizations, and immutable audit logs.",
  keywords: [
    "Go",
    "Golang",
    "PostgreSQL",
    "pgx/v5",
    "sqlc",
    "RBAC",
    "Multi-Tenant",
    "Enterprise Architecture",
    "Backend Foundation",
    "Audit Logs",
  ],
  authors: [{ name: "Vinicius Pontual" }],
  openGraph: {
    title: "Enterprise Core Backend // Go 1.22+ & PostgreSQL Modular Backbone",
    description:
      "A reusable, high-performance foundation solving multi-tenant authentication, organizational hierarchies, and immutable audit trails for enterprise applications.",
    type: "article",
    publishedTime: "2026-02-10T00:00:00.000Z",
    authors: ["Vinicius Pontual"],
  },
};

export default function EnterpriseCoreGoProjectPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Enterprise Core Backend",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Linux, macOS, Docker",
    author: {
      "@type": "Person",
      name: "Vinicius Pontual",
      jobTitle: "Lead Systems & Backend Architect",
    },
    datePublished: "2026-02-10",
    dateModified: "2026-09-09",
    programmingLanguage: "Go, SQL",
    codeRepository: "https://github.com/Vinisilva0010/enterprise-core-backend",
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
          <span className="font-black text-black">[ BACKEND INFRASTRUCTURE // 13 ]</span>
          <span>•</span>
          <span>GO 1.22+ &amp; POSTGRESQL 15+</span>
          <span>•</span>
          <span>ENTERPRISE FOUNDATION</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[1.05] mb-6 text-black">
          Enterprise Core Backend: High-Throughput Modular Architecture in Go
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-800 font-medium max-w-4xl leading-relaxed mb-6">
          A reusable, production-ready system backbone resolving authentication, multi-tenant organizational hierarchies, fine-grained RBAC, and immutable audit logging—engineered to eliminate architectural churn across business systems.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-neutral-200 font-mono text-sm text-neutral-600">
          <div>
            BY <span className="font-black text-black">VINICIUS PONTUAL</span> — SYSTEMS &amp; BACKEND ARCHITECT
          </div>
          <div>DEPLOYED: FEB 2026 // STACK: GO + PGX/V5 + SQLC + GO-CHI</div>
        </div>
      </header>

      {/* IMAGEM PRINCIPAL ABERTA */}
      <div className="w-full mb-16 border-4 border-black">
        <div className="relative w-full h-[360px] sm:h-[500px] lg:h-[620px] bg-neutral-950">
          <Image
            src="/projects/enterprise-core-go.png"
            alt="Enterprise Core Backend Architecture Diagram in Go"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
        <div className="p-3 bg-neutral-100 font-mono text-xs text-neutral-700 border-t-2 border-black flex flex-wrap justify-between items-center gap-2">
          <span>FIG 1.0: APPLICATION ENTRYPOINT (CMD/API) → PLATFORM LAYER → MODULAR DOMAIN BOUNDARIES → SQLC POSTGRES ENGINE</span>
          <span className="font-bold uppercase">[ MODULAR ARCHITECTURE SPECIFICATION ]</span>
        </div>
      </div>

      {/* CORPO DO ARTIGO EM 2 COLUNAS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* COLUNA PRINCIPAL DE LEITURA */}
        <article className="lg:col-span-8 space-y-14 text-neutral-900 leading-relaxed text-lg sm:text-xl">
          
          {/* STATS EM LINHA */}
          <div className="flex flex-wrap gap-8 py-6 border-y-2 border-black font-mono">
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Runtime Engine</span>
              <strong className="text-2xl font-black text-black">Go 1.22+</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Database Driver</span>
              <strong className="text-2xl font-black text-black">pgx/v5 Pool</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Query Safety</span>
              <strong className="text-2xl font-black text-black">sqlc (Compiled)</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Routing Latency</span>
              <strong className="text-2xl font-black text-black">&lt; 1.0ms (chi)</strong>
            </div>
          </div>

          {/* SEÇÃO 01 */}
          <section id="the-enterprise-problem" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              01. The Problem: The Perpetual Re-Invention of Business Plumbing
            </h2>
            <p>
              Every non-trivial business application—whether an ERP, a multi-branch clinic management platform, a supply chain dashboard, or a restaurant back-office system—requires the exact same foundational primitives before any domain-specific features can be written:
            </p>
            <ul className="space-y-3 list-disc pl-6 font-medium text-base sm:text-lg">
              <li><strong>Scattered Identity &amp; Session Management:</strong> Engineers routinely hack together ad-hoc JWT or session handlers that lack cryptographically secure token invalidation, password reset flows, or refresh mechanics.</li>
              <li><strong>Brittle Multi-Tenancy:</strong> Organization and branch segregation is frequently treated as an afterthought, leading to catastrophic cross-tenant data leaks when queries miss filtering parameters.</li>
              <li><strong>ORM Bloat &amp; N+1 Overhead:</strong> Heavy object-relational mapping frameworks obscure database execution, introduce runtime reflection overhead, and generate slow, unoptimized SQL queries under high concurrent loads.</li>
              <li><strong>Missing Compliance Audits:</strong> Traceability is omitted or added as an ad-hoc logging statement, leaving critical financial mutations and privilege escalations without an immutable audit trail.</li>
            </ul>
          </section>

          {/* SEÇÃO 02 */}
          <section id="core-architecture" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              02. Architectural Solution: Strict Modular Boundaries in Go
            </h2>
            <p>
              The Enterprise Core Backend operates as a cohesive, reusable foundation designed to sit underneath any commercial SaaS or business software. Rather than a monolithic codebase or an over-abstracted microservices swarm, the repository enforces strict module separation inside <code className="font-mono text-sm bg-neutral-200 px-1 py-0.5 font-bold">internal/modules/</code>:
            </p>

            <div className="space-y-4 my-8 pl-6 border-l-4 border-black font-mono text-base sm:text-lg">
              <p>
                <strong className="text-black font-black uppercase block">// internal/modules/auth</strong>
                Handles user session lifecycles, cryptographically secure password hashing (Argon2id/bcrypt), JWT claim validation, and hardened password recovery state machines.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// internal/modules/org</strong>
                Models multi-tenant hierarchies: Parent Organizations (Holdings), Operating Companies, and decentralized physical Units/Branches.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// internal/modules/rbac</strong>
                Enforces fine-grained, contextual Role-Based Access Control, separating administrative platform oversight from operational tenant permissions.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// internal/modules/audit</strong>
                Captures immutable, structured security events (who performed what action, on which resource, at what timestamp, from which IP) directly into append-only PostgreSQL tables.
              </p>
            </div>

            <blockquote className="my-10 py-6 px-8 bg-neutral-100 border-l-8 border-black font-mono text-base sm:text-lg font-bold italic">
              “Building enterprise systems is not about reinventing authentication or tenant tables for every client. It is about building a rock-solid, type-safe backbone once so every subsequent business module builds on a validated foundation.”
              <span className="block not-italic font-black text-xs uppercase mt-3 text-neutral-600">
                — Vinicius Pontual, Architecture Whitepaper
              </span>
            </blockquote>
          </section>

          {/* SEÇÃO 03 */}
          <section id="type-safe-sqlc" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              03. Database Strategy: pgx/v5 Connection Pooling &amp; Compiled SQL via sqlc
            </h2>
            <p>
              To maintain high throughput and predictable execution, this backend replaces runtime ORMs with pure, compiled SQL. Raw SQL queries are written in <code className="font-mono text-sm bg-neutral-200 px-1 py-0.5">migrations/</code> and compiled by <code className="font-bold">sqlc</code> into idiomatic, fully type-safe Go structs:
            </p>

            {/* CÓDIGO NÍTIDO COM FUNDO CLARO */}
            <div className="font-mono text-xs sm:text-sm bg-neutral-100 text-neutral-900 p-5 border-2 border-black space-y-2 overflow-x-auto">
              <p className="text-neutral-500 font-bold">// Example sqlc Compiled Query in Go</p>
              <p><span className="font-bold text-black">func</span> (q *Queries) InsertAuditEvent(ctx context.Context, arg InsertAuditEventParams) (AuditLog, error) &#123;</p>
              <p className="pl-4">row := q.db.QueryRow(ctx, insertAuditEvent,</p>
              <p className="pl-8">arg.OrganizationID,</p>
              <p className="pl-8">arg.UserID,</p>
              <p className="pl-8">arg.Action,</p>
              <p className="pl-8">arg.Resource,</p>
              <p className="pl-8">arg.Payload,</p>
              <p className="pl-8">arg.IPAddress,</p>
              <p className="pl-4">)</p>
              <p className="pl-4"><span className="font-bold text-black">var</span> i AuditLog</p>
              <p className="pl-4">err := row.Scan(&amp;i.ID, &amp;i.OrganizationID, &amp;i.UserID, &amp;i.Action, &amp;i.CreatedAt)</p>
              <p className="pl-4"><span className="font-bold text-black">return</span> i, err</p>
              <p>&#125;</p>
            </div>

            <p className="text-base text-neutral-800">
              Database connection pooling is handled by <code className="font-bold">pgxpool</code>, configuring maximum connection lifespans, idle thresholds, and health checks to sustain high request concurrency without exhausting PostgreSQL socket limits.
            </p>
          </section>

          {/* SEÇÃO 04 */}
          <section id="directory-structure" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              04. Codebase Organization: The Internal Package Pattern
            </h2>
            <p>
              The repository follows standard Go software engineering conventions to enforce compilation boundaries and prevent package circularity:
            </p>

            <div className="font-mono text-xs sm:text-sm bg-neutral-100 text-neutral-900 p-5 border-2 border-black space-y-1 overflow-x-auto">
              <p className="font-bold">.</p>
              <p>├── <span className="font-bold">cmd/api/</span>                  <span className="text-neutral-500">// Main application entrypoint (HTTP server bootstrap)</span></p>
              <p>├── <span className="font-bold">internal/</span></p>
              <p>│   ├── <span className="font-bold">platform/</span>             <span className="text-neutral-500">// Shared infrastructure (config, db, logger, server)</span></p>
              <p>│   └── <span className="font-bold">modules/</span>              <span className="text-neutral-500">// Autonomous business domains</span></p>
              <p>│       ├── <span className="font-bold">auth/</span>             <span className="text-neutral-500">// Password hashing, JWT issuance &amp; verification</span></p>
              <p>│       ├── <span className="font-bold">users/</span>            <span className="text-neutral-500">// User account lifecycles and profiles</span></p>
              <p>│       ├── <span className="font-bold">org/</span>              <span className="text-neutral-500">// Tenant companies, holdings, and locations</span></p>
              <p>│       ├── <span className="font-bold">rbac/</span>             <span className="text-neutral-500">// Roles, permissions, and policy evaluation</span></p>
              <p>│       └── <span className="font-bold">audit/</span>            <span className="text-neutral-500">// Append-only security audit trail</span></p>
              <p>├── <span className="font-bold">migrations/</span>               <span className="text-neutral-500">// Raw SQL migration files (golang-migrate)</span></p>
              <p>└── <span className="font-bold">sqlc.yaml</span>                 <span className="text-neutral-500">// Code generation configuration</span></p>
            </div>
          </section>

          {/* SEÇÃO 05 */}
          <section id="security-invariants" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              05. Security Invariants &amp; Operational Defense
            </h2>
            <p>
              The core implements defensive standards out of the box:
            </p>

            <ul className="space-y-4 my-6 list-disc pl-6 font-medium">
              <li>
                <strong>Multi-Tenant Data Isolation:</strong> Every database query touching organizational state enforces strict tenant foreign key constraints (<code className="font-bold">WHERE org_id = $1</code>), validated via HTTP middleware before execution reaching the repository layer.
              </li>
              <li>
                <strong>Structured Contextual Logging:</strong> Implements Go&apos;s standard <code className="font-bold">log/slog</code> library, attaching request IDs, tenant IDs, and execution durations to all system logs for centralized ingestion.
              </li>
              <li>
                <strong>Immutable Audit Logging:</strong> Audit records are write-only. No application role or service account possesses SQL update or delete privileges over the audit ledger.
              </li>
              <li>
                <strong>Lightweight HTTP Layer:</strong> Uses <code className="font-bold">go-chi/chi/v5</code> for sub-millisecond route matching with zero memory allocations, avoiding framework-level lock-in.
              </li>
            </ul>
          </section>

          {/* SEÇÃO 06 */}
          <section id="specs-and-setup" className="space-y-6 pt-6 border-t-4 border-black">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              06. Specifications &amp; Development Workflow
            </h2>
            <p className="text-base text-neutral-700">
              System dependencies and toolchain prerequisites:
            </p>

            <div className="border-2 border-black overflow-x-auto">
              <table className="w-full text-left font-mono text-xs sm:text-sm">
                <thead className="bg-black text-white uppercase border-b-2 border-black">
                  <tr>
                    <th className="p-3">Layer</th>
                    <th className="p-3">Component / Library</th>
                    <th className="p-3">Technical Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-300 bg-white">
                  <tr>
                    <td className="p-3 font-bold">Runtime</td>
                    <td className="p-3 font-mono">Go 1.22+</td>
                    <td className="p-3">High-concurrency compiled backend binary with minimal memory footprint.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Persistence</td>
                    <td className="p-3 font-mono">PostgreSQL 15+</td>
                    <td className="p-3">ACID-compliant relational database with JSONB support for audit payloads.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">DB Driver / Pool</td>
                    <td className="p-3 font-mono">jackc/pgx/v5</td>
                    <td className="p-3">High-performance PostgreSQL driver and connection pooling.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Code Generation</td>
                    <td className="p-3 font-mono">sqlc</td>
                    <td className="p-3">Compiles raw SQL into safe, idiomatic Go code with zero runtime reflection.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">HTTP Router</td>
                    <td className="p-3 font-mono">go-chi/chi/v5</td>
                    <td className="p-3">Composable, lightweight HTTP routing with standard library compatibility.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="font-mono text-xs sm:text-sm bg-neutral-100 border-2 border-black p-4 space-y-2 mt-4">
              <div><strong>REPOSITORY:</strong> <a href="https://github.com/Vinisilva0010/enterprise-core-backend" target="_blank" rel="noopener noreferrer" className="underline font-bold">github.com/Vinisilva0010/enterprise-core-backend</a></div>
              <div><strong>MIGRATIONS:</strong> Managed via <code className="font-bold">golang-migrate</code> in <code className="font-bold">migrations/</code></div>
              <div><strong>CODEGEN RUN:</strong> <code className="font-bold">sqlc generate</code></div>
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
                <a href="#the-enterprise-problem" className="block hover:underline text-black">
                  01. The Enterprise Problem
                </a>
                <a href="#core-architecture" className="block hover:underline text-black">
                  02. Modular Architecture
                </a>
                <a href="#type-safe-sqlc" className="block hover:underline text-black">
                  03. pgx/v5 &amp; sqlc Strategy
                </a>
                <a href="#directory-structure" className="block hover:underline text-black">
                  04. Codebase Organization
                </a>
                <a href="#security-invariants" className="block hover:underline text-black">
                  05. Security Invariants
                </a>
                <a href="#specs-and-setup" className="block hover:underline text-black">
                  06. Specifications &amp; Setup
                </a>
              </nav>
            </div>

            <div className="border-t-2 border-neutral-300 pt-6 space-y-3">
              <span className="text-xs uppercase font-black text-neutral-500 block">
                ENGINEERING RESOURCES
              </span>
              <a
                href="https://github.com/Vinisilva0010/enterprise-core-backend"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-black !text-white py-3 font-black text-xs uppercase hover:bg-neutral-800 transition-colors"
              >
                Inspect Go Code [›]
              </a>
              <Link
                href="/projetos/sandbox-agentes-ia-rust-mcp"
                className="block w-full text-center border-2 border-black py-2.5 font-black text-xs uppercase hover:bg-neutral-100 transition-colors"
              >
                View Rust Security Middleware
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
          
          {/* PROJETO 1: AGENT SANDBOX */}
          <article className="space-y-4">
            <Link 
              href="/projetos/sandbox-agentes-ia-rust-mcp" 
              className="block w-full border-4 border-black group overflow-hidden"
            >
              <div className="relative w-full h-56 bg-neutral-950">
                <Image
                  src="/projects/agent-sandbox.png"
                  alt="Aegis Agent Sandbox in Rust"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase text-neutral-500 font-bold block">
                SYSTEMS // RUST &amp; MCP
              </span>
              <h4 className="text-xl font-black uppercase leading-tight text-black hover:underline">
                <Link href="/projetos/sandbox-agentes-ia-rust-mcp">
                  Aegis: Agent Security Sandbox in Rust
                </Link>
              </h4>
            </div>

            <div className="pt-2 border-t-2 border-neutral-200 flex justify-between items-center font-mono text-xs">
              <Link 
                href="/projetos/sandbox-agentes-ia-rust-mcp" 
                className="font-black uppercase underline hover:text-neutral-600"
              >
                Read Specification ›
              </Link>
              <span className="text-neutral-500 font-bold">MAR 2026</span>
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

          {/* PROJETO 3: ACCESS CONTROL SDK */}
          <article className="space-y-4">
            <Link 
              href="/projetos/solana-access-control-sdk" 
              className="block w-full border-4 border-black group overflow-hidden"
            >
              <div className="relative w-full h-56 bg-neutral-950">
                <Image
                  src="/projects/ssi.png"
                  alt="Solana Access Control SDK"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase text-neutral-500 font-bold block">
                DEVELOPER TOOLING // RUST &amp; ANCHOR
              </span>
              <h4 className="text-xl font-black uppercase leading-tight text-black hover:underline">
                <Link href="/projetos/solana-access-control-sdk">
                  Solana Dual Access Control SDK
                </Link>
              </h4>
            </div>

            <div className="pt-2 border-t-2 border-neutral-200 flex justify-between items-center font-mono text-xs">
              <Link 
                href="/projetos/solana-access-control-sdk" 
                className="font-black uppercase underline hover:text-neutral-600"
              >
                Read Specification ›
              </Link>
              <span className="text-neutral-500 font-bold">JUN 2026</span>
            </div>
          </article>

        </div>
      </section>
    </div>
  );
}