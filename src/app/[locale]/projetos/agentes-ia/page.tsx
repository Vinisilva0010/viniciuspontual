import type { Metadata } from "next";
import AgentFlowCanvas from "./AgentFlowCanvas";

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  const url = "https://viniciuspontual.zanvexis.com/" + params.locale + "/projetos/agentes-ia";
  const title = "AI Agent Orchestration at Scale — From 1 to 50+ Agents";
  const description =
    "How I design, build and deploy multi-agent systems: from small businesses running 2 or 3 agents to enterprises coordinating dozens, all with human oversight, per-tool least privilege, and infrastructure that costs almost nothing to run.";
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article", images: ["/projects/ia.jpg"] },
    twitter: { card: "summary_large_image", title, description, images: ["/projects/ia.jpg"] },
  };
}

const SECTIONS = [
  { id: "how-i-work", label: "How I approach agent orchestration" },
  { id: "small", label: "Small teams: 2 to 5 agents" },
  { id: "large", label: "Enterprises: dozens of coordinated agents" },
  { id: "security", label: "Security is not optional" },
  { id: "cost", label: "Keeping infrastructure cost near zero" },
  { id: "proof", label: "Proof: triagem-atendimento" },
];

export default function AgentesIAPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "AI Agent Orchestration at Scale",
    description:
      "Multi-agent system design and delivery: architecture, human-in-the-loop control, per-tool least privilege, and near-zero infrastructure cost.",
    author: { "@type": "Person", name: "Vinicius Pontual" },
    image: "https://viniciuspontual.zanvexis.com/projects/ia.jpg",
  };

  return (
    <main style={{ background: "#fdf9eb", color: "#14120f" }} className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-[680px] px-6 py-16">
        <p className="font-mono text-sm mb-3" style={{ color: "#6b6552" }}>
          AI agent orchestration
        </p>
        <h1 className="font-serif text-4xl leading-tight mb-6">
          Multi-agent systems that hold up under real usage.
        </h1>

        <div className="my-10">
          <AgentFlowCanvas />
        </div>

       

        <nav aria-label="Table of contents" className="my-12 border-t border-b py-6" style={{ borderColor: "#d8d0b8" }}>
          <ul className="space-y-2">
            {SECTIONS.map((s, i) => (
              <li key={s.id} className="font-serif">
                <a href={"#" + s.id} className="hover:underline">
                  {i + 1}. {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="how-i-work" className="mb-14">
          <h2 className="font-serif text-2xl mb-4">How I approach agent orchestration</h2>
          <p className="font-serif text-lg leading-relaxed mb-4">
            Every agent I build follows the same three rules, whether it&apos;s
            one agent or a coordinated fleet.
          </p>
          <p className="font-serif text-lg leading-relaxed mb-4">
            First: agents run on an explicit state graph, not a single large
            prompt. Each decision, tool call and return is a node. The state
            is checkpointed at every step so sessions can pause and resume
            exactly where they left off. This is what makes an agent
            debuggable and auditable, instead of a black box.
          </p>
          <p className="font-serif text-lg leading-relaxed mb-4">
            Second: tools live behind a Model Context Protocol server, not
            hardcoded inside the agent. Same tools serve any framework, any
            model, any client. Redeploying a tool doesn&apos;t touch the
            orchestration.
          </p>
          <p className="font-serif text-lg leading-relaxed">
            Third: every irreversible action has a hard pause enforced by the
            graph itself, waiting for a human decision. This isn&apos;t a
            prompt asking the model to be careful. It&apos;s execution that
            genuinely stops, at the exact node where damage would otherwise
            happen.
          </p>
        </section>

        <section id="small" className="mb-14">
          <h2 className="font-serif text-2xl mb-4">Small teams: 2 to 5 agents</h2>
          <p className="font-serif text-lg leading-relaxed mb-4">
            A small business usually wants a support triage agent, a
            qualification agent, and something automating a repetitive
            back-office task. Three specialized agents, each with a tight
            set of tools connected to what the business already runs on
            (spreadsheet, CRM, shared inbox).
          </p>
          <p className="font-serif text-lg leading-relaxed">
            My approach: build each agent as an independent unit that can be
            deployed and monitored on its own. Free-tier infrastructure
            covers real usage for most small deployments, so ongoing cost is
            close to nothing. The client gets a system they can operate
            without a dedicated team.
          </p>
        </section>

        <section id="large" className="mb-14">
          <h2 className="font-serif text-2xl mb-4">Enterprises: dozens of coordinated agents</h2>
          <p className="font-serif text-lg leading-relaxed mb-4">
            At larger scale the interesting problem changes. It stops being
            about any single agent and starts being about how they coordinate:
            handoffs, shared context, avoiding two agents doing the same
            work, avoiding an agent triggering another in an infinite loop.
          </p>
          <p className="font-serif text-lg leading-relaxed mb-4">
            My approach: a supervisor agent routes work to specialized
            worker agents, each with a scoped MCP server exposing only the
            tools that worker actually needs. State is centralized so
            handoffs preserve context. Recursion limits and idempotency keys
            prevent the two most common failure modes of multi-agent systems.
          </p>
          <p className="font-serif text-lg leading-relaxed">
            Scaling from three agents to fifty doesn&apos;t require a
            rewrite. The spine is the same. What changes is the number of
            worker nodes, the routing logic in the supervisor, and the
            monitoring surface.
          </p>
        </section>

        <section id="security" className="mb-14">
          <h2 className="font-serif text-2xl mb-4">Security is not optional</h2>
          <p className="font-serif text-lg leading-relaxed mb-4">
            An agent with tool access is a piece of software that takes
            actions in your systems on behalf of a language model that can be
            manipulated. Treating that casually is how companies end up in
            security incident reports.
          </p>
          <p className="font-serif text-lg leading-relaxed">
            Every tool I ship goes through a least-privilege review before it
            leaves my machine, and every agent is tested against an automated
            red-team suite: role-override attempts, secret exfiltration,
            escalation abuse, requests to generate destructive code. The
            tests run against the real model, not a mock, and use
            deterministic assertions so they don&apos;t depend on any paid
            judge model to run.
          </p>
        </section>

        <section id="cost" className="mb-14">
          <h2 className="font-serif text-2xl mb-4">Keeping infrastructure cost near zero</h2>
          <p className="font-serif text-lg leading-relaxed mb-4">
            The default assumption around AI is that it&apos;s expensive.
            That&apos;s only true if you build it wrong.
          </p>
          <p className="font-serif text-lg leading-relaxed">
            My tool servers run on Cloudflare Workers, which covers 100,000
            requests per day on the free tier. Model calls default to
            provider free tiers, with a straightforward path to a paid key
            when the client wants to scale. Nothing in my architecture
            requires a subscription or a credit card to start. This matters:
            it&apos;s the difference between a client saying yes and a
            client saying &quot;let me think about the budget.&quot;
          </p>
        </section>

        <section id="proof" className="mb-14">
          <h2 className="font-serif text-2xl mb-4">Proof: triagem-atendimento</h2>
          <p className="font-serif text-lg leading-relaxed mb-4">
            The <em>triagem-atendimento</em> project is the concrete
            reference: a customer support agent with three tools (order
            status, refund policy, human escalation), built with LangGraph
            for orchestration, MCP for tools, and a hard human-approval
            pause before any escalation goes through.
          </p>
          <p className="font-serif text-lg leading-relaxed mb-4">
            It runs end-to-end: agent in Python, tools deployed to
            Cloudflare Workers in production, a FastAPI HTTP layer, a
            Next.js interface, and an automated security suite passing
            against the real model. The full source is public.
          </p>
          <p className="font-serif text-lg leading-relaxed">
            This is my starting point for any new client project. What
            changes per client are the tools (their systems, not mocked),
            the domain of the agent, and the approval routing (Slack,
            WhatsApp, email, dashboard). The architecture stays.
          </p>
        </section>

        <div className="pt-6 border-t" style={{ borderColor: "#d8d0b8" }}>
          
            <a href="https://github.com/Vinisilva0010/agent-toolkit"
            className="font-mono text-sm underline"
          >
            View the source code on GitHub
          </a>
        </div>
      </div>
    </main>
  );
}