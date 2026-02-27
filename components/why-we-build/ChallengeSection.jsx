"use client";
import { AlertTriangle } from "lucide-react";

const cards = [
  { num: "1", color: "blue", title: "Sovereignty Requirements", desc: "Critical environments demand that sensitive data never leaves the enterprise perimeter — no third-party clouds, no external inference APIs, no vendor-controlled infrastructure. Most AI architectures cannot meet this bar." },
  { num: "2", color: "amber", title: "Economic Constraints", desc: "Modern AI stacks assume hyperscaler infrastructure, specialized GPUs, and escalating inference costs. Most mid-sized enterprises cannot justify these economics for production workloads." },
  { num: "3", color: "violet", title: "Accountability Demands", desc: "In industries governed by compliance, audit, and accountability requirements, every AI decision must be traceable, explainable, and defensible. Black-box intelligence is liability." },
];

const topBranches = [
  { left: "14%", title: "Data Leaves Perimeter", desc: "Cloud APIs expose sensitive data" },
  { left: "36%", title: "GPU Cost Spiral", desc: "LLM inference at scale is prohibitive" },
  { left: "58%", title: "No Decision Trace", desc: "Black-box outputs fail audit" },
];

const bottomBranches = [
  { left: "14%", title: "Vendor Lock-In", desc: "Dependence on external providers" },
  { left: "36%", title: "No Air-Gap Option", desc: "Cloud-first can't serve defense" },
  { left: "58%", title: "Regulation Gap", desc: "Compliance needs unmet" },
];

export default function ChallengeSection() {
  return (
    <section className="py-32 relative" id="problem">
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div className="orb w-[500px] h-[500px] bg-amber-500/[0.03]" style={{ top: "10%", left: "30%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/[0.08] border border-amber-500/[0.15] mb-6 r-up">
            <AlertTriangle className="w-3 h-3 text-amber-600" />
            <span className="text-amber-600 text-[10px] font-mono tracking-[0.2em] uppercase">The Challenge</span>
          </div>
          <h2 className="display-section text-4xl md:text-5xl lg:text-6xl mb-4 r-up">
            Agentic AI in Critical<br /><span className="text-gradient-warm">Environments Is Hard</span>
          </h2>
          <p className="text-lg text-gray-500 font-light r-up">Three structural challenges make enterprise deployment exceptionally difficult</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c) => (
            <div key={c.num} className="card p-8 r-up">
              <div className={`w-16 h-16 rounded-2xl bg-${c.color}-500/[0.1] border border-${c.color}-500/[0.2] flex items-center justify-center mb-6`}>
                <span className={`text-3xl font-light text-${c.color}-600`}>{c.num}</span>
              </div>
              <h3 className="text-xl font-light text-gray-800 mb-3">{c.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-light">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-black/[0.03] border border-black/[0.06] text-center r-up">
          <p className="text-gray-600 font-light">
            The industries that need intelligence most — financial services, defense, healthcare, manufacturing, and government — face the{" "}
            <span className="text-gray-800 font-medium">highest barriers to deploying it</span>.
          </p>
        </div>

        {/* Fishbone Diagram */}
        <div className="mt-16 r-up">
          <div className="fishbone hidden md:block" style={{ height: "320px" }}>
            <div className="fishbone-spine" />
            <div className="fishbone-effect">
              <span>AI Stalls in<br />Critical Sectors</span>
            </div>
            {topBranches.map((b) => (
              <div key={b.title} className="fb-branch top" style={{ left: b.left }}>
                <div className="fb-node"><h5>{b.title}</h5><p>{b.desc}</p></div>
                <div className="fb-line" />
              </div>
            ))}
            {bottomBranches.map((b) => (
              <div key={b.title} className="fb-branch bottom" style={{ left: b.left }}>
                <div className="fb-line" />
                <div className="fb-node"><h5>{b.title}</h5><p>{b.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
