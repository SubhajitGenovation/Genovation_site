"use client";

import { Cpu, Plug, Code, Database, Workflow, ShieldCheck, Infinity } from "lucide-react";

const cards = [
  { Icon: Plug,        bg: "rgba(245,158,11,0.1)",  ic: "text-amber-600",  title: "Any REST / GraphQL API",  body: "Connect to banking, CRMs, ERPs, booking engines, payment gateways — any API." },
  { Icon: Code,        bg: "rgba(59,130,246,0.1)",   ic: "text-blue-600",   title: "Execute Custom Code",     body: "Run Python, JavaScript, SQL in sandboxed environments. Compute, transform, apply logic." },
  { Icon: Database,    bg: "rgba(16,185,129,0.1)",   ic: "text-emerald-600",title: "Query Any Database",      body: "PostgreSQL, MongoDB, Redis, Elasticsearch, vector DBs. Natural language over millions of records." },
  { Icon: Workflow,    bg: "rgba(139,92,246,0.1)",   ic: "text-violet-600", title: "Multi-Step Workflows",    body: "Chain API calls, code execution, and AI reasoning into complex workflows." },
  { Icon: ShieldCheck, bg: "rgba(239,68,68,0.1)",    ic: "text-red-500",    title: "Governed Execution",      body: "Every API call, code execution, and data access is logged, governed, and auditable." },
  { Icon: Infinity,    bg: "rgba(6,182,212,0.1)",    ic: "text-cyan-600",   title: "Infinite Possibilities",  body: "Shopping assistants, booking engines, advisors, search portals — if you can imagine it, build it." },
];

export default function CXCapabilities() {
  return (
    <section className="py-48 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb" style={{ width: 600, height: 500, background: "rgba(245,158,11,0.05)", top: "5%", right: "10%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border mb-8 r-up"
            style={{ background: "rgba(245,158,11,0.08)", borderColor: "rgba(245,158,11,0.15)" }}>
            <Cpu className="w-3 h-3 text-amber-600" />
            <span className="text-amber-600 text-[11px] font-light tracking-[0.25em] uppercase">Full Application Platform</span>
          </div>
          <h2 className="display-section r-up" style={{ fontSize: "clamp(2.5rem,8vw,8rem)" }}>
            Connect to Any API.<br /><span className="text-gradient">Execute Any Code.</span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 r-up">
            Not a chatbot library. A complete application that plugs into your entire tech stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(({ Icon, bg, ic, title, body }) => (
            <div key={title} className="card p-8 r-up">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: bg }}>
                <Icon className={`w-5 h-5 ${ic}`} />
              </div>
              <div className="text-[15px] font-normal text-gray-800 mb-2">{title}</div>
              <p className="text-[13px] text-gray-500 font-light leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
