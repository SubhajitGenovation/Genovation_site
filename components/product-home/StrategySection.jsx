"use client";

import {
  EyeOff, Globe, Target, Lightbulb, Check,
  Compass, AlertTriangle, Rocket, FileText,
} from "lucide-react";

export default function StrategySection() {
  return (
    <section id="strategy" className="py-32 md:py-48 relative overflow-hidden section-emerald">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[600px] h-[500px] bg-emerald-500/[0.05]" style={{ top: "5%", right: "10%" }} />
      <div className="orb w-[400px] h-[350px] bg-cyan-500/[0.04]" style={{ bottom: "10%", left: "20%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20 pb-10 border-b border-black/[0.06]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6 r-up">
              <span className="text-[11px] text-emerald-600 font-mono tracking-[0.2em]">03</span>
              <div className="w-8 h-px bg-emerald-500/40" />
              <span className="text-[11px] text-gray-400 font-light tracking-[0.2em] uppercase">Strategy Intelligence</span>
            </div>
            <h2 className="display-section text-5xl md:text-7xl r-up">
              Continuous Intelligence<br />for <span className="text-gradient-emerald">Leadership</span>
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-2 r-up">
            <span className="text-[10px] text-gray-400 font-mono tracking-wider uppercase">Primary Buyers</span>
            <div className="flex flex-wrap gap-2">
              {["Strategy Teams", "CXOs", "Innovation"].map((b) => (
                <span key={b} className="px-3 py-1.5 text-[11px] text-gray-500 rounded-full bg-white/60 border border-black/[0.06]">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left: Features */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-static p-6 r-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-red-500/[0.08] flex items-center justify-center">
                  <EyeOff className="w-4 h-4 text-red-400" />
                </div>
                <span className="text-xs font-mono text-gray-400">THE_CHALLENGE</span>
              </div>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                Strategic decisions are based on fragmented external signals — market reports, competitor news, analyst opinions. Critical patterns get missed in the noise.
              </p>
            </div>

            <div className="r-left" style={{ animationDelay: "0.1s" }}>
              <div className="text-[10px] font-mono text-gray-400 tracking-[0.2em] uppercase mb-4">CORE_CAPABILITIES</div>
              <div className="space-y-3">
                {[
                  { icon: <Globe className="w-4 h-4 text-emerald-500" />, title: "Market Intelligence Synthesis", desc: "Aggregate and analyze signals from thousands of sources" },
                  { icon: <Target className="w-4 h-4 text-emerald-500" />, title: "Competitor Tracking", desc: "Real-time monitoring of competitive moves and signals" },
                  { icon: <Lightbulb className="w-4 h-4 text-emerald-500" />, title: "Innovation & Tech Scouting", desc: "Identify emerging technologies and market opportunities" },
                ].map((item, i) => (
                  <div key={i} className="card-static p-4 hover:border-emerald-500/20 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/[0.08] flex items-center justify-center flex-shrink-0">{item.icon}</div>
                      <div>
                        <div className="text-sm font-normal text-gray-800 mb-0.5">{item.title}</div>
                        <div className="text-xs text-gray-400 font-light">{item.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-emerald-500/[0.04] border border-emerald-500/[0.12] r-left" style={{ animationDelay: "0.2s" }}>
              <div className="text-[10px] font-mono text-emerald-600 tracking-[0.2em] uppercase mb-4">WHY_IT_MATTERS</div>
              <div className="space-y-3">
                {["Reduces strategic blind spots", "Enables proactive decision-making", "Structures unstructured external information"].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-light text-gray-600">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Terminal */}
          <div className="lg:col-span-7 lg:sticky lg:top-24 r-right">
            <div className="terminal">
              <div className="terminal-header">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  </div>
                  <div className="flex items-center gap-2 pl-3 border-l border-black/[0.06]">
                    <div className="w-5 h-5 rounded bg-emerald-500 flex items-center justify-center">
                      <Compass className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-xs font-mono text-gray-500">strategy_intelligence</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 soft-pulse" />
                  <span className="text-[10px] font-mono text-emerald-500">MONITORING</span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-normal text-gray-800">Market Signal Radar</span>
                  <span className="text-[10px] font-mono text-gray-400">7d • 847 signals</span>
                </div>

                {/* Radar + Signal Types */}
                <div className="flex gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <svg className="w-32 h-32" viewBox="0 0 120 120">
                      <defs>
                        <radialGradient id="rGrad" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0.12" />
                          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="sweepG">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                          <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
                        </linearGradient>
                      </defs>
                      <circle cx="60" cy="60" r="50" fill="url(#rGrad)" />
                      <circle cx="60" cy="60" r="45" fill="none" stroke="rgba(16,185,129,0.12)" strokeWidth="1" />
                      <circle cx="60" cy="60" r="30" fill="none" stroke="rgba(16,185,129,0.12)" strokeWidth="1" />
                      <circle cx="60" cy="60" r="15" fill="none" stroke="rgba(16,185,129,0.12)" strokeWidth="1" />
                      <line x1="60" y1="10" x2="60" y2="110" stroke="rgba(16,185,129,0.08)" />
                      <line x1="10" y1="60" x2="110" y2="60" stroke="rgba(16,185,129,0.08)" />
                      <g className="rot-slow" style={{ transformOrigin: "60px 60px" }}>
                        <line x1="60" y1="60" x2="105" y2="60" stroke="url(#sweepG)" strokeWidth="2" />
                      </g>
                      <circle cx="40" cy="30" r="5" fill="#f59e0b" />
                      <circle cx="80" cy="45" r="4" fill="#3b82f6" />
                      <circle cx="70" cy="70" r="4" fill="#10b981" />
                      <circle cx="38" cy="68" r="3" fill="#8b5cf6" />
                      <circle cx="60" cy="60" r="4" fill="#10b981" />
                      <circle cx="60" cy="60" r="1.5" fill="white" />
                    </svg>
                  </div>
                  <div className="flex-1 space-y-2.5">
                    <div className="text-[10px] font-mono text-gray-400 tracking-wider mb-3">SIGNAL_TYPES</div>
                    {[
                      { color: "bg-amber-500", label: "Funding Events", count: "12" },
                      { color: "bg-blue-500", label: "Product Launches", count: "8" },
                      { color: "bg-emerald-500", label: "Market Shifts", count: "23" },
                      { color: "bg-violet-500", label: "Partnerships", count: "6" },
                    ].map((s, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs">
                        <span className={`w-2 h-2 rounded-full ${s.color}`} />
                        <span className="text-gray-500 font-light flex-1">{s.label}</span>
                        <span className="font-mono text-gray-400">{s.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Priority Signals */}
                <div className="text-[10px] font-mono text-gray-400 tracking-wider mb-3">PRIORITY_SIGNALS</div>
                <div className="space-y-2 mb-5">
                  <div className="p-4 rounded-xl bg-amber-500/[0.05] border border-amber-500/[0.12] cursor-pointer hover:border-amber-500/25 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-normal text-gray-800">Competitor A raised $120M Series D</span>
                          <span className="px-1.5 py-0.5 text-[9px] font-mono text-white bg-amber-500 rounded">HIGH</span>
                        </div>
                        <p className="text-[11px] text-gray-400 font-light">Valuation of $2.4B, 3x increase. Plans to expand into enterprise.</p>
                        <span className="text-[9px] text-gray-400 font-mono">TechCrunch • 2h ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-blue-500/[0.05] border border-blue-500/[0.12]">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                        <Rocket className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-normal text-gray-800 mb-1">New entrant launches competing product</div>
                        <p className="text-[11px] text-gray-400 font-light">Startup XYZ launched enterprise solution with aggressive pricing.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full p-3.5 bg-emerald-500 hover:bg-emerald-600 rounded-xl text-white text-xs font-light flex items-center justify-center gap-2 transition-colors">
                  <FileText className="w-4 h-4" />Generate Weekly Intelligence Brief
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
