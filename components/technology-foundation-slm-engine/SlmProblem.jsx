"use client";

import { CloudOff, DollarSign, EyeOff, Unplug, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: <CloudOff className="w-5 h-5 text-rose-500" />,
    title: "Uncontrolled Data Exposure",
    desc: "Enterprise data transmitted to external cloud providers during inference. No guarantees on data retention, access logging, or geographic boundaries.",
    tags: ["GDPR Risk", "Data Sovereignty", "Compliance Violation"],
  },
  {
    icon: <DollarSign className="w-5 h-5 text-rose-500" />,
    title: "Prohibitive Infrastructure Cost",
    desc: "Running 175B+ parameter models requires specialized GPU clusters. Token-based pricing creates unpredictable costs at enterprise scale.",
    tags: ["$10-50/M tokens", "H100 Required"],
  },
  {
    icon: <EyeOff className="w-5 h-5 text-rose-500" />,
    title: "Opaque Reasoning Paths",
    desc: "Black-box inference with no visibility into decision making. Cannot explain or audit how conclusions were reached.",
    tags: ["No Audit Trail", "Regulatory Risk"],
  },
  {
    icon: <Unplug className="w-5 h-5 text-rose-500" />,
    title: "External API Dependency",
    desc: "Business-critical processes dependent on third-party uptime and rate limits. Single point of failure.",
    tags: ["Vendor Lock-in", "Downtime Risk"],
  },
];

export default function SlmProblem() {
  return (
    <section className="py-48 relative" id="problem">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[600px] h-[400px] bg-rose-500/[0.05]" style={{ top: "10%", right: "10%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-rose-500/[0.08] border border-rose-500/[0.15] mb-8 r-up">
            <AlertTriangle className="w-3 h-3 text-rose-500" />
            <span className="text-rose-500 text-[11px] font-light tracking-[0.25em] uppercase">The Problem</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Why Large Models<br />
            <span className="text-gradient-rose">Fail</span> in the Enterprise
          </h2>
          <p className="text-[15px] text-gray-500 font-light max-w-2xl mx-auto mt-6 leading-relaxed r-up">
            Large foundation models excel at general language tasks, but introduce structural risks when deployed in regulated environments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Risk SVG Diagram */}
          <div className="r-left">
            <div className="industry-mock" style={{ boxShadow: "0 25px 80px -20px rgba(244,63,94,0.08)" }}>
              <div className="mock-header">
                <div className="mock-dot r" /><div className="mock-dot y" /><div className="mock-dot g" />
                <span className="text-[9px] text-gray-500 font-mono ml-2">HYPERSCALE LLM RISK PROFILE</span>
              </div>
              <div className="p-6">
                <svg viewBox="0 0 450 380" className="w-full">
                  <g transform="translate(225,180)">
                    <circle r="140" fill="none" stroke="rgba(244,63,94,0.06)" strokeWidth="25" className="pulse-ring"/>
                    <circle r="110" fill="none" stroke="rgba(244,63,94,0.1)" strokeWidth="20" className="pulse-ring" style={{ animationDelay: "0.5s" }}/>
                    <circle r="80" fill="none" stroke="rgba(244,63,94,0.12)" strokeWidth="15" className="pulse-ring" style={{ animationDelay: "1s" }}/>
                    <circle r="50" fill="none" stroke="rgba(244,63,94,0.15)" strokeWidth="10"/>
                    <circle r="30" fill="rgba(244,63,94,0.08)" stroke="rgba(244,63,94,0.3)" strokeWidth="2"/>
                    <text y="-8" textAnchor="middle" fill="#e11d48" fontSize="16" fontWeight="700">175B+</text>
                    <text y="8" textAnchor="middle" fill="#f43f5e" fontSize="8">LLM</text>
                    <text y="18" textAnchor="middle" fill="#9ca3af" fontSize="7">Parameters</text>
                  </g>
                  {[
                    { transform: "translate(225,35)", lines: [[0,20,0,55]], label: ["DATA","EXPOSURE"] },
                    { transform: "translate(370,105)", lines: [[-20,20,-45,40]], label: ["PROHIBITIVE","COST"] },
                    { transform: "translate(370,255)", lines: [[-20,-20,-45,-40]], label: ["API","FRAGILITY"] },
                    { transform: "translate(80,255)", lines: [[20,-20,45,-40]], label: ["OPAQUE","REASONING"] },
                    { transform: "translate(80,105)", lines: [[20,20,45,40]], label: ["GPU","DEPENDENCY"] },
                  ].map((node, i) => (
                    <g key={i} transform={node.transform}>
                      <line x1={node.lines[0][0]} y1={node.lines[0][1]} x2={node.lines[0][2]} y2={node.lines[0][3]} stroke="rgba(244,63,94,0.25)" strokeWidth="1.5" strokeDasharray="4,3"/>
                      <circle r="24" fill="rgba(244,63,94,0.06)" stroke="rgba(244,63,94,0.25)" strokeWidth="1.5"/>
                      <text y="-4" textAnchor="middle" fill="#e11d48" fontSize="7" fontWeight="500">{node.label[0]}</text>
                      <text y="6" textAnchor="middle" fill="#e11d48" fontSize="7" fontWeight="500">{node.label[1]}</text>
                    </g>
                  ))}
                  <g transform="translate(225,355)">
                    <rect x="-110" y="-12" width="220" height="24" rx="12" fill="rgba(244,63,94,0.06)" stroke="rgba(244,63,94,0.2)" strokeWidth="1"/>
                    <text y="4" textAnchor="middle" fill="#e11d48" fontSize="8" fontWeight="500">⚠ STRUCTURALLY INCOMPATIBLE</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Problem Cards */}
          <div className="space-y-4 r-right">
            {problems.map((p, i) => (
              <div key={i} className="card card-rose p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-rose-500/[0.08] flex items-center justify-center flex-shrink-0">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-light text-gray-800 mb-2">{p.title}</h3>
                    <p className="text-[13px] text-gray-500 font-light leading-relaxed mb-3">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((tag, j) => (
                        <span key={j} className="px-2.5 py-1 rounded-full bg-rose-500/[0.06] text-[10px] text-rose-600 border border-rose-500/[0.15]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="p-8 rounded-2xl bg-white/60 border border-black/[0.06] text-center r-up">
          <p className="text-xl text-gray-600 font-light">
            For enterprises, intelligence must be{" "}
            <span className="text-emerald-600 font-normal">deployable</span>,{" "}
            <span className="text-cyan-600 font-normal">governable</span>, and{" "}
            <span className="text-blue-600 font-normal">defensible</span> — not just powerful.
          </p>
        </div>
      </div>
    </section>
  );
}
