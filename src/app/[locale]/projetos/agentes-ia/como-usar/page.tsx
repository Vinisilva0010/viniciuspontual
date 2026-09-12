import type { Metadata } from "next";
import AdaptationCanvas from "./AdaptationCanvas";

export const metadata: Metadata = {
  title: "Using the agent-toolkit — what to edit per client",
  description:
    "The four files that change when adapting the toolkit to a new client. Everything else stays.",
};

export default function ComoUsarPage() {
  return (
    <main style={{ background: "#fdf9eb", color: "#14120f" }} className="min-h-screen">
      <div className="mx-auto max-w-[680px] px-6 py-16">
        <p className="font-mono text-sm mb-3" style={{ color: "#6b6552" }}>
          Using the toolkit
        </p>
        <h1 className="font-serif text-4xl leading-tight mb-6">
          Four files change per client. Everything else stays.
        </h1>

        <div className="my-10">
          <AdaptationCanvas />
        </div>

        <p className="font-serif text-lg leading-relaxed mb-4">
          The toolkit ships with a working example: an agent that handles
          customer support triage. It runs end-to-end. When I bring it into
          a new project, I don&apos;t rebuild anything. I edit four files.
        </p>

        <h2 className="font-serif text-2xl mt-14 mb-4">1. Tools</h2>
        <p className="font-mono text-xs mb-3" style={{ color: "#6b6552" }}>
          templates/mcp-triagem-atendimento/src/index.ts
        </p>
        <p className="font-serif text-lg leading-relaxed mb-4">
          The example ships with three mocked tools: check order status,
          check refund policy, escalate to a human. I replace them with the
          real ones: query the client&apos;s CRM, hit their API, write to
          their database.
        </p>
        <p className="font-serif text-lg leading-relaxed">
          Rule: any tool that changes state returns a ticket ID and lets the
          graph pause for approval. The tool itself never executes the
          destructive action directly.
        </p>

        <h2 className="font-serif text-2xl mt-14 mb-4">2. Model</h2>
        <p className="font-mono text-xs mb-3" style={{ color: "#6b6552" }}>
          templates/triagem-atendimento/src/triagem_atendimento/graph.py
        </p>
        <p className="font-serif text-lg leading-relaxed">
          One line: the model constructor. Gemini by default because the
          free tier is enough to test. Swap for Claude, GPT, or anything
          LangChain supports when the client has a preference or a paid key.
        </p>

        <h2 className="font-serif text-2xl mt-14 mb-4">3. Approval routing</h2>
        <p className="font-mono text-xs mb-3" style={{ color: "#6b6552" }}>
          templates/triagem-atendimento/src/triagem_atendimento/graph.py
        </p>
        <p className="font-serif text-lg leading-relaxed">
          The graph pauses at the approval node. Where the approve/reject
          decision comes from is the client&apos;s call: a button in the web
          UI, a Slack message with two buttons, a WhatsApp reply, an email
          link. All of them just resume the graph via the /approve endpoint.
        </p>

        <h2 className="font-serif text-2xl mt-14 mb-4">4. Instructions</h2>
        <p className="font-mono text-xs mb-3" style={{ color: "#6b6552" }}>
          templates/triagem-atendimento/src/triagem_atendimento/graph.py
        </p>
        <p className="font-serif text-lg leading-relaxed">
          A system prompt at the top of the graph state: the agent&apos;s
          role, tone, what it can and can&apos;t do, when to escalate. This
          is where the client&apos;s domain knowledge lives.
        </p>

        <h2 className="font-serif text-2xl mt-14 mb-4">Running it</h2>
        <pre className="font-mono text-xs bg-white border p-4 overflow-x-auto mb-4" style={{ borderColor: "#d8d0b8" }}>
{`# backend
cd templates/triagem-web/api
uv sync
uv run uvicorn api.main:app --port 8000

# frontend (another terminal)
cd templates/triagem-web/web
npm install
npm run dev`}
        </pre>
        <p className="font-serif text-lg leading-relaxed">
          Frontend opens at localhost:3000. Backend on 8000. The MCP server
          for tools is already deployed on Cloudflare Workers, so nothing
          else needs to run.
        </p>

        <h2 className="font-serif text-2xl mt-14 mb-4">Before shipping</h2>
        <p className="font-serif text-lg leading-relaxed">
          The security checklist in the repo lists what to verify per tool
          (data scope, side effects, credentials). The Promptfoo suite runs
          against the real agent with deterministic assertions, so it
          doesn&apos;t need a paid judge model. Both are part of every
          delivery.
        </p>

        <div className="mt-14 pt-6 border-t" style={{ borderColor: "#d8d0b8" }}>
          
            <a href="https://github.com/Vinisilva0010/agent-toolkit"
            className="font-mono text-sm underline"
          >
            Source on GitHub
          </a>
        </div>
      </div>
    </main>
  );
}