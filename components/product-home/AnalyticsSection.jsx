"use client";

import {
  HelpCircle, TrendingUp, Activity, ShoppingCart,
  Check, BarChart2, User, Sparkles, ShieldCheck,
} from "lucide-react";

export default function AnalyticsSection() {
  return (
    <section id="analytics" className="py-32 md:py-48 relative overflow-hidden section-violet">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[500px] h-[400px] bg-violet-500/[0.05]" style={{ bottom: "5%", right: "10%" }} />
      <div className="orb w-[400px] h-[350px] bg-blue-500/[0.04]" style={{ top: "10%", left: "15%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20 pb-10 border-b border-black/[0.06]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6 r-up">
              <span className="text-[11px] text-violet-600 font-mono tracking-[0.2em]">02</span>
              <div className="w-8 h-px bg-violet-500/40" />
              <span className="text-[11px] text-gray-400 font-light tracking-[0.2em] uppercase">Analytics Intelligence</span>
            </div>
            <h2 className="display-section text-5xl md:text-7xl r-up">
              Explain <span className="text-gradient-violet">Why</span><br />Outcomes Changed
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-2 r-up">
            <span className="text-[10px] text-gray-400 font-mono tracking-wider uppercase">Primary Buyers</span>
            <div className="flex flex-wrap gap-2">
              {["CFOs", "Operations", "Sales Leaders"].map((b) => (
                <span key={b} className="px-3 py-1.5 text-[11px] text-gray-500 rounded-full bg-white/60 border border-black/[0.06]">{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left: Terminal */}
          <div className="lg:col-span-7 lg:sticky lg:top-24 order-2 lg:order-1 r-left">
            <div className="terminal">
              <div className="terminal-header">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  </div>
                  <div className="flex items-center gap-2 pl-3 border-l border-black/[0.06]">
                    <div className="w-5 h-5 rounded bg-violet-500 flex items-center justify-center">
                      <BarChart2 className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-xs font-mono text-gray-500">analytics_intelligence</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-gray-400">Q3 FY2024</span>
              </div>

              {/* User Query */}
              <div className="px-5 py-4 border-b border-black/[0.04]">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <User className="w-3.5 h-3.5 text-gray-500" />
                  </div>
                  <div className="px-4 py-2.5 rounded-xl rounded-tl-sm bg-black/[0.03]">
                    <p className="text-xs text-gray-600 font-light">Why did Q3 gross margin decrease by 4.2 percentage points?</p>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-7 h-7 rounded-full bg-violet-500 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 font-light mb-5">
                      Q3 gross margin declined from <span className="font-medium text-gray-800">38.2%</span> to <span className="font-medium text-gray-800">34.0%</span>. Here's the breakdown:
                    </p>

                    {/* SVG Waterfall Chart */}
                    <div className="p-4 rounded-xl bg-white/60 border border-black/[0.06] mb-5">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono text-gray-400 tracking-wider">VARIANCE_DECOMPOSITION</span>
                        <div className="flex items-center gap-4 text-[10px] text-gray-400">
                          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-red-400 inline-block" />Negative</span>
                          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-emerald-400 inline-block" />Positive</span>
                        </div>
                      </div>
                      <svg className="w-full h-28" viewBox="0 0 400 100">
                        <line x1="40" y1="5" x2="40" y2="85" stroke="rgba(0,0,0,0.06)" />
                        <line x1="40" y1="85" x2="380" y2="85" stroke="rgba(0,0,0,0.06)" />
                        <rect x="50" y="10" width="40" height="70" fill="#8b5cf6" rx="4" opacity="0.8" />
                        <text x="70" y="6" textAnchor="middle" fill="#71717a" fontSize="8" fontFamily="Space Mono">38.2%</text>
                        <text x="70" y="96" textAnchor="middle" fill="#a1a1aa" fontSize="8">Q2</text>
                        <rect x="105" y="10" width="40" height="38" fill="#ef4444" rx="4" opacity="0.7" />
                        <text x="125" y="6" textAnchor="middle" fill="#ef4444" fontSize="8" fontFamily="Space Mono">-2.1%</text>
                        <text x="125" y="96" textAnchor="middle" fill="#a1a1aa" fontSize="7">Materials</text>
                        <rect x="160" y="48" width="40" height="22" fill="#ef4444" rx="3" opacity="0.7" />
                        <text x="180" y="44" textAnchor="middle" fill="#ef4444" fontSize="8" fontFamily="Space Mono">-1.3%</text>
                        <text x="180" y="96" textAnchor="middle" fill="#a1a1aa" fontSize="7">Labor</text>
                        <rect x="215" y="70" width="40" height="10" fill="#ef4444" rx="2" opacity="0.7" />
                        <text x="235" y="66" textAnchor="middle" fill="#ef4444" fontSize="8" fontFamily="Space Mono">-0.6%</text>
                        <text x="235" y="96" textAnchor="middle" fill="#a1a1aa" fontSize="7">Logistics</text>
                        <rect x="270" y="78" width="40" height="4" fill="#ef4444" rx="1" opacity="0.7" />
                        <text x="290" y="74" textAnchor="middle" fill="#ef4444" fontSize="8" fontFamily="Space Mono">-0.2%</text>
                        <text x="290" y="96" textAnchor="middle" fill="#a1a1aa" fontSize="7">Mix</text>
                        <rect x="325" y="35" width="40" height="45" fill="#6366f1" rx="4" opacity="0.8" />
                        <text x="345" y="30" textAnchor="middle" fill="#71717a" fontSize="8" fontFamily="Space Mono">34.0%</text>
                        <text x="345" y="96" textAnchor="middle" fill="#a1a1aa" fontSize="8">Q3</text>
                      </svg>
                    </div>

                    {/* Factors */}
                    <div className="space-y-2 mb-5">
                      {[
                        { label: "Raw material costs +15% (steel price surge)", val: "-2.1pp" },
                        { label: "Labor costs +8% (overtime during peak)", val: "-1.3pp" },
                        { label: "Freight & logistics +12%", val: "-0.6pp" },
                      ].map((f, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-red-500/[0.05] border border-red-500/[0.1]">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                          <span className="text-xs text-gray-600 font-light flex-1">{f.label}</span>
                          <span className="text-xs font-mono text-red-500">{f.val}</span>
                        </div>
                      ))}
                    </div>

                    {/* Sources */}
                    <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-black/[0.04]">
                      <span className="text-[9px] font-mono text-gray-400">SOURCES:</span>
                      <span className="px-2 py-1 text-[10px] text-gray-500 bg-black/[0.03] border border-black/[0.04] rounded font-mono">SAP ERP</span>
                      <span className="px-2 py-1 text-[10px] text-gray-500 bg-black/[0.03] border border-black/[0.04] rounded font-mono">Snowflake</span>
                      <span className="px-2 py-1 text-[10px] text-emerald-600 bg-emerald-500/[0.06] border border-emerald-500/[0.12] rounded font-mono flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 inline-block" />Verified
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap gap-2">
                  {["What-if: Steel price -10%", "Compare to competitors", "Q4 forecast"].map((btn) => (
                    <button key={btn} className="px-3 py-1.5 text-[11px] text-violet-600 bg-violet-500/[0.06] rounded-lg border border-violet-500/[0.15] hover:bg-violet-500/[0.12] transition-colors font-light">{btn}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Features */}
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <div className="card-static p-6 r-right">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-red-500/[0.08] flex items-center justify-center">
                  <HelpCircle className="w-4 h-4 text-red-400" />
                </div>
                <span className="text-xs font-mono text-gray-400">THE_CHALLENGE</span>
              </div>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                Dashboards show <em className="text-gray-700">what</em> happened. Spreadsheets show <em className="text-gray-700">where</em>. Very few systems explain <em className="text-violet-600 font-normal">why</em>. Decision-makers spend hours manually analyzing data to understand root causes.
              </p>
            </div>

            <div className="r-right" style={{ animationDelay: "0.1s" }}>
              <div className="text-[10px] font-mono text-gray-400 tracking-[0.2em] uppercase mb-4">CORE_CAPABILITIES</div>
              <div className="space-y-3">
                {[
                  { icon: <TrendingUp className="w-4 h-4 text-violet-500" />, title: "CFO Variance Explanation", desc: "Revenue, cost, and margin analysis with full attribution" },
                  { icon: <Activity className="w-4 h-4 text-violet-500" />, title: "Operations Insights", desc: "Performance diagnosis across production and supply chain" },
                  { icon: <ShoppingCart className="w-4 h-4 text-violet-500" />, title: "Spend Analysis", desc: "Procurement anomaly detection and optimization" },
                ].map((item, i) => (
                  <div key={i} className="card-static p-4 hover:border-violet-500/20 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-violet-500/[0.08] flex items-center justify-center flex-shrink-0">{item.icon}</div>
                      <div>
                        <div className="text-sm font-normal text-gray-800 mb-0.5">{item.title}</div>
                        <div className="text-xs text-gray-400 font-light">{item.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-violet-500/[0.04] border border-violet-500/[0.12] r-right" style={{ animationDelay: "0.2s" }}>
              <div className="text-[10px] font-mono text-violet-600 tracking-[0.2em] uppercase mb-4">WHY_IT_MATTERS</div>
              <div className="space-y-3">
                {["Reduces time spent on manual analysis", "Improves confidence in decisions", "Enables faster, evidence-based action"].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-violet-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-light text-gray-600">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
