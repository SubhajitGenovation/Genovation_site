"use client";

import { Workflow, GitBranch, ArrowRightLeft } from "lucide-react";

function SystemDiagram() {
  return (
    <svg viewBox="0 0 360 300" className="w-full">
      <defs>
        <pattern id="miniGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(20,184,166,0.04)" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="360" height="300" fill="url(#miniGrid)" rx="12"/>
      <text x="180" y="22" textAnchor="middle" fill="#9ca3af" fontSize="8" letterSpacing="0.1em" fontFamily="Space Mono, monospace">
        SYSTEM-LEVEL EXPLAINABILITY
      </text>

      {/* Data Layer */}
      <g transform="translate(25,42)">
        <rect x="0" y="0" width="310" height="65" rx="10" fill="rgba(6,182,212,0.04)" stroke="rgba(6,182,212,0.15)"/>
        <text x="18" y="22" fill="#0891b2" fontSize="9.5" fontWeight="500">Data Layer</text>
        <text x="18" y="38" fill="#9ca3af" fontSize="7.5">Provenance · Lineage · Transformation</text>
        <g transform="translate(240,12)">
          <rect x="0" y="0" width="50" height="30" rx="5" fill="white" stroke="rgba(6,182,212,0.15)"/>
          <rect x="8"  y="7" width="8" height="16" rx="2" fill="rgba(6,182,212,0.25)"/>
          <rect x="19" y="7" width="8" height="16" rx="2" fill="rgba(6,182,212,0.15)"/>
          <rect x="30" y="7" width="8" height="16" rx="2" fill="rgba(6,182,212,0.1)"/>
        </g>
      </g>

      {/* Connector 1 */}
      <line x1="180" y1="107" x2="180" y2="125" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5" strokeDasharray="4 4"/>
      <circle cx="180" cy="116" r="3.5" fill="#8b5cf6"/>

      {/* Reasoning Layer */}
      <g transform="translate(25,130)">
        <rect x="0" y="0" width="310" height="65" rx="10" fill="rgba(139,92,246,0.04)" stroke="rgba(139,92,246,0.15)"/>
        <text x="18" y="22" fill="#7c3aed" fontSize="9.5" fontWeight="500">Reasoning Layer</text>
        <text x="18" y="38" fill="#9ca3af" fontSize="7.5">Multi-Agent · Decision Paths · Validation</text>
        <g transform="translate(240,10)">
          <circle cx="12" cy="20" r="10" fill="rgba(139,92,246,0.06)" stroke="rgba(139,92,246,0.18)"/>
          <circle cx="36" cy="12" r="7"  fill="rgba(139,92,246,0.04)" stroke="rgba(139,92,246,0.12)"/>
          <circle cx="36" cy="30" r="7"  fill="rgba(139,92,246,0.04)" stroke="rgba(139,92,246,0.12)"/>
          <line x1="21" y1="16" x2="29" y2="13" stroke="rgba(139,92,246,0.2)" strokeWidth="1"/>
          <line x1="21" y1="24" x2="29" y2="28" stroke="rgba(139,92,246,0.2)" strokeWidth="1"/>
        </g>
      </g>

      {/* Connector 2 */}
      <line x1="180" y1="195" x2="180" y2="213" stroke="rgba(20,184,166,0.2)" strokeWidth="1.5" strokeDasharray="4 4"/>
      <circle cx="180" cy="204" r="3.5" fill="#14b8a6"/>

      {/* Execution Layer */}
      <g transform="translate(25,218)">
        <rect x="0" y="0" width="310" height="65" rx="10" fill="rgba(20,184,166,0.04)" stroke="rgba(20,184,166,0.15)"/>
        <text x="18" y="22" fill="#0d9488" fontSize="9.5" fontWeight="500">Execution Layer</text>
        <text x="18" y="38" fill="#9ca3af" fontSize="7.5">Actions · Audit Logs · Policy Enforcement</text>
        <g transform="translate(240,10)">
          <rect x="0" y="0" width="50" height="38" rx="5" fill="white" stroke="rgba(20,184,166,0.15)"/>
          <path d="M 15 19 L 25 19 M 25 11 L 25 27 L 35 19 Z"
            fill="none" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </g>
    </svg>
  );
}

const features = [
  { icon: <Workflow        className="w-5 h-5 text-cyan-500" />,   bg: "bg-cyan-500/[0.08]",   title: "Explainability across data pipelines",           sub: "From ingestion to output" },
  { icon: <GitBranch       className="w-5 h-5 text-violet-500" />, bg: "bg-violet-500/[0.08]", title: "Reasoning across multiple agents",               sub: "Coordinated decision-making" },
  { icon: <ArrowRightLeft  className="w-5 h-5 text-teal-500" />,   bg: "bg-teal-500/[0.08]",   title: "Interaction between intelligence and execution", sub: "Theory to action" },
];

export default function RAIBeyondModel() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg-teal opacity-15" />
      <div className="orb w-[350px] h-[350px] bg-cyan-400/[0.04]" style={{ bottom: "5%", left: "-3%" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div className="r-left">
            <p className="text-[10px] text-gray-400 tracking-[0.3em] uppercase mb-4 font-mono">
              System-Level Thinking
            </p>
            <h2 className="text-4xl md:text-5xl display-section text-gray-800 mb-6">
              Beyond Model<br />Interpretability
            </h2>
            <p className="text-lg text-gray-500 font-light leading-relaxed mb-5">
              Many discussions around explainable AI focus narrowly on model internals.
              Genovation's research goes further.
            </p>
            <p className="text-gray-400 mb-8 font-light text-sm leading-relaxed">
              In enterprise environments,{" "}
              <span className="text-gray-800 font-medium">the system makes decisions—not just the model.</span>{" "}
              Our research addresses the full complexity of deployed intelligence.
            </p>
            <div className="space-y-3">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/60 border border-black/[0.06]">
                  <div className={`w-10 h-10 rounded-lg ${f.bg} flex items-center justify-center flex-shrink-0`}>
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium text-sm">{f.title}</p>
                    <p className="text-xs text-gray-400 font-light">{f.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: diagram */}
          <div className="r-right">
            <div className="card-no-hover p-6">
              <SystemDiagram />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
