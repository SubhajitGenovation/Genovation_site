"use client";

import { Lightbulb, Bot, Shield, Database, Lock } from "lucide-react";

const buildCards = [
  { color: "emerald", icon: <Bot className="w-5 h-5 text-emerald-600" />, iconBg: "bg-emerald-500/[0.12]", cardClass: "card-emerald", title: "Agent Governance Layers", body: "Frameworks that control autonomous agent behavior, enforce boundaries, and prevent unintended actions." },
  { color: "cyan",    icon: <Shield className="w-5 h-5 text-cyan-600" />, iconBg: "bg-cyan-500/[0.12]",    cardClass: "card-cyan",    title: "Secure Execution Frameworks", body: "Runtime environments that isolate, monitor, and validate every operation with zero trust assumptions." },
  { color: "violet",  icon: <Database className="w-5 h-5 text-violet-600" />, iconBg: "bg-violet-500/[0.12]", cardClass: "card-violet", title: "Data & Analytics Backbones", body: "End-to-end data infrastructure that maintains sovereignty while enabling intelligence at enterprise scale." },
  { color: "amber",   icon: <Lock className="w-5 h-5 text-amber-600" />, iconBg: "bg-amber-500/[0.12]",  cardClass: "card-amber",   title: "Cryptographic Computation Systems", body: "Infrastructure for trustless analytics where computation happens on encrypted data without exposure." },
];

export default function PlatformFoundations() {
  return (
    <section id="overview" className="py-48 relative">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[600px] h-[400px] bg-cyan-500/[0.05]" style={{ top: "10%", left: "5%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/[0.08] border border-cyan-500/[0.15] mb-8 r-up">
            <Lightbulb className="w-3 h-3 text-cyan-600" />
            <span className="text-cyan-600 text-[11px] font-light tracking-[0.25em] uppercase">Why Foundations Matter</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Control First,<br /><span className="text-gradient">Intelligence Second</span>
          </h2>
          <p className="text-[16px] text-gray-500 font-light max-w-3xl mx-auto mt-6 leading-relaxed r-up">
            Most AI vendors begin with a model and add controls later. Genovation begins with control, governance,
            and security — and builds intelligence on top.
          </p>
        </div>

        {/* Comparison */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Typical */}
            <div className="card p-8 r-left">
              <div className="text-center mb-6">
                <span className="px-4 py-1.5 rounded-full bg-gray-500/[0.08] text-gray-500 text-[11px] font-mono tracking-wider">TYPICAL_APPROACH</span>
              </div>
              <svg className="w-full h-[320px]" viewBox="0 0 300 320">
                <g transform="translate(150,55)">
                  <rect x="-95" y="-35" width="190" height="70" rx="12" fill="rgba(139,92,246,0.08)" stroke="rgba(139,92,246,0.3)" strokeWidth="1.5"/>
                  <text x="0" y="-8" textAnchor="middle" fill="#7c3aed" fontSize="13" fontWeight="500">AI Model</text>
                  <text x="0" y="10" textAnchor="middle" fill="#7c3aed" fontSize="9" opacity="0.6">"The Product"</text>
                </g>
                <line x1="150" y1="90" x2="150" y2="120" stroke="#d1d5db" strokeWidth="1.5"/>
                <text x="168" y="110" fill="#9ca3af" fontSize="8">later…</text>
                <g transform="translate(150,155)">
                  <rect x="-75" y="-28" width="150" height="56" rx="10" fill="rgba(0,0,0,0.02)" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="4,2"/>
                  <text x="0" y="-3" textAnchor="middle" fill="#9ca3af" fontSize="11">+ Controls</text>
                  <text x="0" y="12" textAnchor="middle" fill="#d1d5db" fontSize="8">Bolted on</text>
                </g>
                <line x1="150" y1="183" x2="150" y2="210" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="4,2"/>
                <text x="168" y="200" fill="#d1d5db" fontSize="8">maybe…</text>
                <g transform="translate(150,245)">
                  <rect x="-60" y="-22" width="120" height="44" rx="8" fill="rgba(0,0,0,0.01)" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="6,3"/>
                  <text x="0" y="-2" textAnchor="middle" fill="#d1d5db" fontSize="10">+ Security (?)</text>
                  <text x="0" y="12" textAnchor="middle" fill="#e5e7eb" fontSize="8">Afterthought</text>
                </g>
                <text x="150" y="305" textAnchor="middle" fill="#f43f5e" fontSize="9">⚠ Gaps emerge under scrutiny</text>
              </svg>
            </div>

            {/* Genovation */}
            <div className="card p-8 r-right" style={{ borderColor: "rgba(16,185,129,0.2)" }}>
              <div className="text-center mb-6">
                <span className="px-4 py-1.5 rounded-full bg-emerald-500/[0.1] text-emerald-600 text-[11px] font-mono tracking-wider">GENOVATION_APPROACH</span>
              </div>
              <svg className="w-full h-[320px]" viewBox="0 0 300 320">
                {[
                  { y: 280, color: "#e11d48", fill: "rgba(244,63,94,0.06)", stroke: "rgba(244,63,94,0.3)", w: 200, label: "Cryptographic Security", sub: "Foundation" },
                  { y: 210, color: "#d97706", fill: "rgba(245,158,11,0.06)", stroke: "rgba(245,158,11,0.3)", w: 170, label: "Data Backbone", sub: "Sovereign Processing" },
                  { y: 143, color: "#7c3aed", fill: "rgba(139,92,246,0.06)", stroke: "rgba(139,92,246,0.3)", w: 160, label: "Governance Layer", sub: "Policy Enforcement" },
                  { y: 76,  color: "#0891b2", fill: "rgba(6,182,212,0.06)",   stroke: "rgba(6,182,212,0.3)",   w: 140, label: "Mentis OS", sub: "Orchestration" },
                ].map((item, i) => (
                  <g key={i} transform={`translate(150,${item.y})`}>
                    <rect x={-item.w/2} y="-22" width={item.w} height="44" rx="10" fill={item.fill} stroke={item.stroke} strokeWidth="1.5"/>
                    <text x="0" y="-2" textAnchor="middle" fill={item.color} fontSize="10" fontWeight="500">{item.label}</text>
                    <text x="0" y="12" textAnchor="middle" fill={item.color} fontSize="8" opacity="0.7">{item.sub}</text>
                  </g>
                ))}
                {[255, 188, 121, 54].map((y1, i) => (
                  <line key={i} x1="150" y1={y1} x2="150" y2={y1 - 23} stroke="#10b981" strokeWidth="1.5"/>
                ))}
                <g transform="translate(150,18)">
                  <rect x="-55" y="-14" width="110" height="28" rx="8" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.35)" strokeWidth="1.5"/>
                  <text x="0" y="5" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="500">Intelligence</text>
                </g>
                <text x="150" y="315" textAnchor="middle" fill="#059669" fontSize="9">✓ Built to withstand scrutiny</text>
              </svg>
            </div>
          </div>
        </div>

        {/* What We Build */}
        <div className="max-w-4xl mx-auto">
          <h3 className="display-inter text-2xl md:text-3xl text-gray-800 text-center mb-10 r-up">
            Foundational Systems Most Organizations Don't Build
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            {buildCards.map((c, i) => (
              <div key={i} className={`card ${c.cardClass} p-6 r-up`}>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl ${c.iconBg} flex items-center justify-center flex-shrink-0`}>
                    {c.icon}
                  </div>
                  <div>
                    <h4 className="text-[15px] font-medium text-gray-800 mb-1.5">{c.title}</h4>
                    <p className="text-[13px] text-gray-500 font-light leading-relaxed">{c.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[14px] text-gray-400 font-light mt-10 r-up">
            These are not visible to end users. They are what makes <span className="text-emerald-600">deployment possible</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
