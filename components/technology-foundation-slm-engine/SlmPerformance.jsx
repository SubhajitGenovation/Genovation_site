"use client";

import { Gauge, Cpu, Timer, Wallet, Layers } from "lucide-react";

const enableCards = [
  { icon: <Cpu className="w-6 h-6 text-emerald-600" />, title: "Commodity GPUs", desc: "Deploy on standard enterprise hardware — A10, RTX 4090, or even CPU", tag: "No H100 Required" },
  { icon: <Timer className="w-6 h-6 text-emerald-600" />, title: "Deterministic Latency", desc: "Predictable response times at scale. P99 latency under 100ms", tag: "50ms Average" },
  { icon: <Wallet className="w-6 h-6 text-emerald-600" />, title: "Stable Costs", desc: "Fixed infrastructure cost regardless of volume", tag: "10-30x Cheaper" },
  { icon: <Layers className="w-6 h-6 text-emerald-600" />, title: "Multi-Agent Scale", desc: "Run dozens of concurrent agents for true orchestration", tag: "100+ Concurrent" },
];

export default function SlmPerformance() {
  return (
    <section className="py-48 relative" id="performance">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[600px] h-[400px] bg-emerald-500/[0.06]" style={{ top: "5%", left: "20%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2] mb-8 r-up">
            <Gauge className="w-3 h-3 text-emerald-600" />
            <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">Efficiency</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Performance<br /><span className="text-gradient">Without Excess</span>
          </h2>
          <p className="text-[15px] text-gray-500 font-light max-w-2xl mx-auto mt-6 leading-relaxed r-up">
            Genovation SLMs achieve near GPT-3.5-level capability for enterprise intelligence workloads — at a fraction of the cost and complexity.
          </p>
        </div>

        {/* Comparison Mock */}
        <div className="r-scale mb-16">
          <div className="industry-mock" style={{ boxShadow: "0 30px 80px -20px rgba(16,185,129,0.1)" }}>
            <div className="mock-header">
              <div className="mock-dot r" /><div className="mock-dot y" /><div className="mock-dot g" />
              <span className="text-[9px] text-gray-500 font-mono ml-2">PERFORMANCE & COST COMPARISON</span>
            </div>
            <div className="p-8">
              <svg viewBox="0 0 900 350" className="w-full">
                <text x="450" y="20" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="600" fontFamily="'Space Mono',monospace">HYPERSCALE LLM vs GENOVATION SLM</text>

                {/* Left: Hyperscale */}
                <g transform="translate(225,175)">
                  <text x="0" y="-120" textAnchor="middle" fill="#6b7280" fontSize="11" fontWeight="400">HYPERSCALE LLM</text>
                  <text x="0" y="-105" textAnchor="middle" fill="#9ca3af" fontSize="9">(GPT-4 / Claude / Gemini)</text>
                  <circle r="90" fill="rgba(244,63,94,0.03)" stroke="rgba(244,63,94,0.12)" strokeWidth="1"/>
                  <circle r="70" fill="rgba(244,63,94,0.05)" stroke="rgba(244,63,94,0.15)" strokeWidth="1"/>
                  <circle r="50" fill="rgba(244,63,94,0.07)" stroke="rgba(244,63,94,0.2)" strokeWidth="1.5"/>
                  <circle r="35" fill="rgba(244,63,94,0.1)" stroke="rgba(244,63,94,0.3)" strokeWidth="2"/>
                  <text y="-8" textAnchor="middle" fill="#e11d48" fontSize="20" fontWeight="700">175B+</text>
                  <text y="10" textAnchor="middle" fill="#9ca3af" fontSize="9">Parameters</text>
                  <g transform="translate(0,115)">
                    <rect x="-95" y="0" width="190" height="60" rx="8" fill="rgba(244,63,94,0.04)" stroke="rgba(244,63,94,0.1)" strokeWidth="1"/>
                    <g transform="translate(-65,22)">
                      <text fill="#e11d48" fontSize="10" fontWeight="600">$15-60</text>
                      <text y="12" fill="#9ca3af" fontSize="7">/1M tokens</text>
                    </g>
                    <g transform="translate(0,22)">
                      <text fill="#e11d48" fontSize="10" fontWeight="600">8x H100</text>
                      <text y="12" fill="#9ca3af" fontSize="7">Required</text>
                    </g>
                    <g transform="translate(65,22)">
                      <text fill="#e11d48" fontSize="10" fontWeight="600">500ms+</text>
                      <text y="12" fill="#9ca3af" fontSize="7">Latency</text>
                    </g>
                  </g>
                </g>

                {/* Center */}
                <g transform="translate(450,175)">
                  <rect x="-50" y="-30" width="100" height="60" rx="12" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.25)" strokeWidth="2"/>
                  <text y="-8" textAnchor="middle" fill="#059669" fontSize="20" fontWeight="700">10x</text>
                  <text y="8" textAnchor="middle" fill="#059669" fontSize="8" fontWeight="500">MORE</text>
                  <text y="18" textAnchor="middle" fill="#059669" fontSize="8" fontWeight="500">EFFICIENT</text>
                  <line x1="-75" y1="0" x2="-55" y2="0" stroke="rgba(16,185,129,0.4)" strokeWidth="2"/>
                  <line x1="55" y1="0" x2="75" y2="0" stroke="rgba(16,185,129,0.4)" strokeWidth="2"/>
                  <polygon points="80,0 73,-4 73,4" fill="#10b981"/>
                </g>

                {/* Right: Genovation SLM */}
                <g transform="translate(675,175)">
                  <text x="0" y="-120" textAnchor="middle" fill="#059669" fontSize="11" fontWeight="400">GENOVATION SLM</text>
                  <text x="0" y="-105" textAnchor="middle" fill="#9ca3af" fontSize="9">Enterprise-Optimized</text>
                  <circle r="55" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.3)" strokeWidth="2"/>
                  <circle r="40" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.4)" strokeWidth="2"/>
                  <text y="-4" textAnchor="middle" fill="#059669" fontSize="20" fontWeight="700">~7B</text>
                  <text y="12" textAnchor="middle" fill="#9ca3af" fontSize="9">Parameters</text>
                  <g transform="translate(0,115)">
                    <rect x="-95" y="0" width="190" height="60" rx="8" fill="rgba(16,185,129,0.05)" stroke="rgba(16,185,129,0.15)" strokeWidth="1"/>
                    <g transform="translate(-65,22)">
                      <text fill="#059669" fontSize="10" fontWeight="600">$0.50-2</text>
                      <text y="12" fill="#9ca3af" fontSize="7">/1M tokens</text>
                    </g>
                    <g transform="translate(0,22)">
                      <text fill="#059669" fontSize="10" fontWeight="600">1x A10</text>
                      <text y="12" fill="#9ca3af" fontSize="7">Sufficient</text>
                    </g>
                    <g transform="translate(65,22)">
                      <text fill="#059669" fontSize="10" fontWeight="600">50ms</text>
                      <text y="12" fill="#9ca3af" fontSize="7">Latency</text>
                    </g>
                  </g>
                </g>

                <text x="450" y="340" textAnchor="middle" fill="#9ca3af" fontSize="9">
                  CAPABILITY: GPT-3.5 level for enterprise tasks · COST: 10-30x lower · LATENCY: 10x faster · DEPLOYMENT: Fully sovereign
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Enable Cards */}
        <div className="grid md:grid-cols-4 gap-4">
          {enableCards.map((c, i) => (
            <div key={i} className="card card-emerald p-7 text-center r-up">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/[0.08] flex items-center justify-center mx-auto mb-4">{c.icon}</div>
              <h4 className="text-[15px] font-light text-gray-800 mb-2">{c.title}</h4>
              <p className="text-[13px] text-gray-500 font-light leading-relaxed mb-3">{c.desc}</p>
              <div className="text-[10px] text-emerald-600 font-mono">{c.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
