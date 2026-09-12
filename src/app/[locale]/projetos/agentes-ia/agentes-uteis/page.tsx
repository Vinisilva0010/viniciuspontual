import type { Metadata } from "next";
import AgentsGridCanvas from "./AgentsGridCanvas";

export const metadata: Metadata = {
  title: "Agents that give your dev team its time back",
  description:
    "Six agents I build for engineering teams: code review, bug triage, dependency updates, on-call triage, PR summaries, docs sync. What each one does, when it's worth it, and where the risks are.",
};

const AGENTS = [
  {
    name: "Code review",
    what: "Reads every pull request, flags obvious bugs, suggests improvements, checks the diff against the team's style guide. Adds inline comments like a human reviewer would.",
    worth: "When code review is the bottleneck slowing releases down. Small teams where senior engineers spend half their day reviewing juniors.",
    risk: "Should not block merges on its own. Its comments are suggestions, not gates. A human still approves.",
  },
  {
    name: "Bug triage",
    what: "Reads new issues from GitHub, Linear or Jira. Labels by area, assigns severity, checks for duplicates, pings the right person on Slack.",
    worth: "Any team drowning in issue backlog. The agent turns a 200-issue queue into a triaged, sorted one overnight.",
    risk: "Wrong severity on a real incident is worse than no triage. Confidence threshold: if the agent isn't sure, it flags for human review instead of guessing.",
  },
  {
    name: "Dependency updates",
    what: "Watches package.json, requirements.txt, Cargo.toml. Opens PRs for security patches. Runs the test suite. Summarizes what changed and what broke.",
    worth: "Dependabot exists but is dumb. This one reads changelogs, groups related updates, and doesn't spam PRs.",
    risk: "Never auto-merges. Every PR needs human approval, because a supply-chain attack via a bad dependency is the exact scenario this agent could accelerate if trusted blindly.",
  },
  {
    name: "On-call triage",
    what: "First responder for alerts. Reads the alert, checks recent deploys, looks at logs, tries known runbooks. Pages a human only when it can't resolve or when the alert matches a serious pattern.",
    worth: "Small teams without a dedicated on-call rotation. Cuts pages by 60-80% for teams with noisy alerts.",
    risk: "Silencing a real incident is the failure mode. Every silenced alert gets a human review the next morning, no exceptions.",
  },
  {
    name: "PR summaries",
    what: "Reads a large PR and writes a plain-language summary at the top: what changed, why, what to test, what to watch out for in review.",
    worth: "Teams where PRs regularly hit 500+ line diffs and reviewers skim instead of reviewing. Saves hours per week per reviewer.",
    risk: "Low. The worst case is a bad summary, and the reviewer still reads the code.",
  },
  {
    name: "Docs sync",
    what: "Watches the codebase. When public API changes, updates the docs. When examples break, flags them. When a new feature ships without docs, opens a doc PR.",
    worth: "Teams where docs are always out of date because updating docs is the last thing anyone wants to do.",
    risk: "Auto-generated docs read like auto-generated docs. Agent writes a draft, human polishes. Never publishes without a human pass.",
  },
];

export default function AgentesUteisPage() {
  return (
    <main style={{ background: "#fdf9eb", color: "#14120f" }} className="min-h-screen">
      <div className="mx-auto max-w-[680px] px-6 py-16">
        <p className="font-mono text-sm mb-3" style={{ color: "#6b6552" }}>
          Agents for engineering teams
        </p>
        <h1 className="font-serif text-4xl leading-tight mb-6">
          Agents that give your dev team its time back.
        </h1>

        <div className="my-10">
          <AgentsGridCanvas />
        </div>

        <p className="font-serif text-lg leading-relaxed mb-4">
          These are the agents I build for teams that want their engineers
          writing code, not doing the work around the code. Each one
          replaces a specific piece of busywork, not the engineer.
        </p>
        <p className="font-serif text-lg leading-relaxed">
          Every one of them runs on the same architecture as the toolkit:
          state graph, tools over MCP, human approval before any
          irreversible action.
        </p>

        {AGENTS.map((a, i) => (
          <section key={a.name} className="mt-14">
            <p className="font-mono text-xs mb-2" style={{ color: "#6b6552" }}>
              {String(i + 1).padStart(2, "0")}
            </p>
            <h2 className="font-serif text-2xl mb-4">{a.name}</h2>

            <p className="font-mono text-xs uppercase mb-2" style={{ color: "#6b6552" }}>
              What it does
            </p>
            <p className="font-serif text-lg leading-relaxed mb-4">{a.what}</p>

            <p className="font-mono text-xs uppercase mb-2" style={{ color: "#6b6552" }}>
              When it's worth it
            </p>
            <p className="font-serif text-lg leading-relaxed mb-4">{a.worth}</p>

            <p className="font-mono text-xs uppercase mb-2" style={{ color: "#b23a2f" }}>
              Where it fails
            </p>
            <p className="font-serif text-lg leading-relaxed">{a.risk}</p>
          </section>
        ))}

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