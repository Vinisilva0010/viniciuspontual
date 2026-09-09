import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Vinicius Pontual // Systems & Research Dossier",
  description:
    "Privacy policy and data governance practices governing the engineering portfolio and communication channels of Vinicius Pontual and Zanvexis.",
  openGraph: {
    title: "Privacy Policy // Vinicius Pontual & Zanvexis",
    description:
      "Data ingestion invariants, zero third-party tracker policy, and LGPD/GDPR compliance specifications.",
    type: "article",
  },
};

export default function PrivacyPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    description:
      "Privacy policy detailing data governance, server relay mechanics, and legal compliance for Vinicius Pontual's engineering dossier.",
    publisher: {
      "@type": "Organization",
      name: "Zanvexis",
    },
    datePublished: "2026-01-01",
    dateModified: "2026-09-09",
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HEADER EDITORIAL */}
      <header className="border-b-4 border-black pb-8 mb-12">
        <div className="flex flex-wrap items-center gap-3 font-mono text-sm uppercase tracking-widest text-neutral-600 mb-4">
          <span className="font-black text-black">[ LEGAL SPECIFICATION // 01 ]</span>
          <span>•</span>
          <span>DATA GOVERNANCE</span>
          <span>•</span>
          <span>LGPD &amp; GDPR INVARIANTS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[1.05] mb-6 text-black">
          Privacy Policy &amp; Data Governance
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-800 font-medium max-w-4xl leading-relaxed mb-6">
          Architectural declaration regarding the collection, transmission, and retention of telemetry and communication data across this engineering portfolio.
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-neutral-200 font-mono text-sm text-neutral-600">
          <div>
            OPERATOR: <span className="font-black text-black">VINICIUS PONTUAL / ZANVEXIS</span>
          </div>
          <div>LAST AUDITED: SEPTEMBER 2026 // ZERO TRACKER MANIFEST</div>
        </div>
      </header>

      {/* CORPO EM 2 COLUNAS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* COLUNA PRINCIPAL DE LEITURA */}
        <article className="lg:col-span-8 space-y-14 text-neutral-900 leading-relaxed text-lg sm:text-xl">
          
          {/* STATS EM LINHA */}
          <div className="flex flex-wrap gap-8 py-6 border-y-2 border-black font-mono">
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Third-Party Ads</span>
              <strong className="text-2xl font-black text-black">0 (Zero)</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Tracking Cookies</span>
              <strong className="text-2xl font-black text-black">None</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Form Transit</span>
              <strong className="text-2xl font-black text-black">TLS Encrypted</strong>
            </div>
            <div>
              <span className="block text-xs uppercase text-neutral-500 font-bold">Jurisdiction</span>
              <strong className="text-2xl font-black text-black">BR / Global</strong>
            </div>
          </div>

          {/* SEÇÃO 01 */}
          <section id="core-philosophy" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              01. Core Data Invariant: Zero Invalidation
            </h2>
            <p>
              This website serves as an institutional technical monograph and engineering portfolio. It is explicitly designed without commercial adtech networks, behavioral surveillance pixels, or cross-site tracking scripts.
            </p>
            <p>
              We do not monetize visitor attention, sell contact metadata to brokerages, or build profiling graphs based on page dwell time. You inspect the engineering dossiers, review the architecture, and close the session without residual footprint.
            </p>

            <blockquote className="my-10 py-6 px-8 bg-neutral-100 border-l-8 border-black font-mono text-base sm:text-lg font-bold italic">
              “Defensive software engineering begins with data minimization. The most secure data point is the one never collected in the first place.”
            </blockquote>
          </section>

          {/* SEÇÃO 02 */}
          <section id="data-collected" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              02. Information Ingestion &amp; Processing Scope
            </h2>
            <p>
              We categorize ingested data into two strict, isolated categories:
            </p>

            <div className="space-y-4 my-8 pl-6 border-l-4 border-black font-mono text-base sm:text-lg">
              <p>
                <strong className="text-black font-black uppercase block">// A. Voluntarily Submitted Dispatch Data</strong>
                When submitting an inquiry via the Contact Terminal, the user explicitly transmits: Entity/Name, Return Channel (Email, Telegram handle, or Phone), Inquiry Category, and Message Payload. This information is consumed strictly to evaluate and respond to the technical inquiry.
              </p>
              <p className="pt-2">
                <strong className="text-black font-black uppercase block">// B. Serverless Edge Infrastructure Telemetry</strong>
                Hosting infrastructure (such as Vercel Edge networks) processes standard ephemeral HTTP request metadata (IP address, user-agent string, requested URI) exclusively to negotiate TLS handshakes, prevent DDoS attempts, and route traffic safely. These transient logs are not joined with identity vectors.
              </p>
            </div>
          </section>

          {/* SEÇÃO 03 */}
          <section id="transmission-relay" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              03. Form Transmission &amp; Relayer Architecture
            </h2>
            <p>
              When an inquiry is dispatched from the `/contato` route:
            </p>
            <ul className="space-y-4 my-6 list-disc pl-6 font-medium">
              <li>
                <strong>Serverless Action Isolation:</strong> Form inputs are processed via Next.js Server Actions on a server-side runtime, never directly exposed to client browser evaluation.
              </li>
              <li>
                <strong>Telegram Bot Gateway Relay:</strong> Payloads are formatted into a structured administrative notification and routed over HTTPS/TLS to our private Telegram monitoring bot.
              </li>
              <li>
                <strong>No Public Exposure:</strong> Submission payloads are never written to public databases, client-side local storage, or indexable search registries.
              </li>
            </ul>
          </section>

          {/* SEÇÃO 04 */}
          <section id="retention-deletion" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              04. Retention Schedule &amp; Deletion Rights
            </h2>
            <p>
              Inquiries that do not materialize into an active client engagement, engineering partnership, or contract are purged periodically.
            </p>
            <p>
              Pursuant to the Brazilian General Data Protection Law (<strong>LGPD - Lei nº 13.709/2018</strong>) and the European General Data Protection Regulation (<strong>GDPR - Regulation (EU) 2016/679</strong>), you maintain non-negotiable rights over your submitted data:
            </p>

            <div className="border-2 border-black overflow-x-auto">
              <table className="w-full text-left font-mono text-xs sm:text-sm">
                <thead className="bg-black text-white uppercase border-b-2 border-black">
                  <tr>
                    <th className="p-3">Statutory Right</th>
                    <th className="p-3">Scope &amp; Execution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-300 bg-white">
                  <tr>
                    <td className="p-3 font-bold">Right of Access</td>
                    <td className="p-3">Request confirmation and a copy of any communication history stored in our channels.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Right to Erasure</td>
                    <td className="p-3">Demand immediate and complete destruction of your transmitted contact data and conversation logs.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Right to Rectification</td>
                    <td className="p-3">Update or amend outdated entity credentials or operational details.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-base text-neutral-800 pt-2">
              To exercise these statutory rights, transmit an explicit request to <a href="mailto:zanvexistech@gmail.com" className="font-bold underline">zanvexistech@gmail.com</a> with the subject line <code className="font-bold font-mono text-sm bg-neutral-200 px-1 py-0.5">[DATA ERASURE REQUEST]</code>. All verified claims execute within 48 business hours.
            </p>
          </section>

          {/* SEÇÃO 05 */}
          <section id="external-links" className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black pt-4">
              05. External Protocols &amp; Repositories
            </h2>
            <p>
              This website links to external third-party domains, including GitHub (`github.com/Vinisilva0010`), X/Twitter (`x.com/vini77pontual`), Discord, and Solana block explorers.
            </p>
            <p>
              Once you navigate beyond this origin domain, third-party privacy statements and cookie protocols apply. We do not control or accept liability for the data practices of external blockchain indexers or hosting services.
            </p>
          </section>

          {/* SEÇÃO 06 */}
          <section id="contact-governance" className="space-y-6 pt-6 border-t-4 border-black">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black">
              06. Data Controller &amp; Governance Identity
            </h2>
            <div className="font-mono text-xs sm:text-sm bg-neutral-100 border-2 border-black p-4 space-y-2">
              <div><strong>CONTROLLER:</strong> Vinicius Pontual / Zanvexis Technologies</div>
              <div><strong>HEADQUARTERS:</strong> São Paulo, SP — Brazil</div>
              <div><strong>GOVERNANCE EMAIL:</strong> <a href="mailto:zanvexistech@gmail.com" className="underline font-bold">zanvexistech@gmail.com</a></div>
              <div><strong>FRAMEWORKS:</strong> LGPD (Art. 7º, V) // GDPR (Art. 6(1)(b) - Legitimate Interest &amp; Contract Inquiries)</div>
            </div>
          </section>
        </article>

        {/* COLUNA LATERAL STICKY TOC */}
        <aside className="lg:col-span-4 sticky top-28 hidden lg:block border-l-4 border-black pl-8 font-mono">
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase font-black tracking-widest text-neutral-500 block mb-3">
                POLICY SECTIONS
              </span>
              <nav className="space-y-3 text-sm font-bold">
                <a href="#core-philosophy" className="block hover:underline text-black">
                  01. Zero Invalidation Invariant
                </a>
                <a href="#data-collected" className="block hover:underline text-black">
                  02. Information Processing
                </a>
                <a href="#transmission-relay" className="block hover:underline text-black">
                  03. Form &amp; Relayer Mechanics
                </a>
                <a href="#retention-deletion" className="block hover:underline text-black">
                  04. Retention &amp; Deletion Rights
                </a>
                <a href="#external-links" className="block hover:underline text-black">
                  05. External Protocols
                </a>
                <a href="#contact-governance" className="block hover:underline text-black">
                  06. Data Controller Identity
                </a>
              </nav>
            </div>

            <div className="border-t-2 border-neutral-300 pt-6 space-y-3">
              <span className="text-xs uppercase font-black text-neutral-500 block">
                COMMUNICATION
              </span>
              <Link
                href="/contato"
                className="block w-full text-center bg-black !text-white py-3 font-black text-xs uppercase hover:bg-neutral-800 transition-colors"
              >
                Go to Contact Terminal [›]
              </Link>
              <a
                href="mailto:zanvexistech@gmail.com"
                className="block w-full text-center border-2 border-black py-2.5 font-black text-xs uppercase hover:bg-neutral-100 transition-colors"
              >
                Send Direct Email
              </a>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}