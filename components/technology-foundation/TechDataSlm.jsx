"use client";

import { Database, ArrowDownToLine, Repeat, Brain } from "lucide-react";

export default function TechDataSlm() {
  return (
    <section className="py-48 relative section-bg-warm" id="dataSlm">
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div className="orb w-[500px] h-[400px] bg-cyan-500/[0.04]" style={{ top: "10%", right: "5%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Data Backbone */}
          <div className="r-left">
            <div className="section-badge bg-cyan-500/[0.06] border border-cyan-500/[0.12] mb-8 inline-flex">
              <Database className="w-3 h-3 text-cyan-500" />
              <span className="text-cyan-700 text-[10px] font-medium tracking-[0.3em] uppercase font-mono">Data Infrastructure</span>
            </div>
            <h2 className="display-section text-4xl md:text-5xl mb-6">
              Enterprise Data & <span className="text-gradient-cyan">Processing Backbone</span>
            </h2>
            <p className="text-[15px] text-gray-500 font-light mb-8 leading-relaxed">
              Intelligence is only as good as the data pipeline behind it.
            </p>

            {/* Pipeline Monitor Mock */}
            <div className="industry-mock mb-6" style={{ boxShadow: "var(--shadow-cyan)" }}>
              <div className="mock-header">
                <div className="mock-dot r" /><div className="mock-dot y" /><div className="mock-dot g" />
                <span className="text-[9px] text-gray-500 font-mono ml-2">data-backbone — pipeline monitor</span>
              </div>
              <div className="p-5 font-mono">
                <div className="space-y-3">
                  {[
                    { icon: <ArrowDownToLine className="w-3.5 h-3.5 text-cyan-500" />, title: "Ingestion Pipeline", sub: "12.4k events/sec · structured + unstructured" },
                    { icon: <Repeat className="w-3.5 h-3.5 text-cyan-500" />, title: "ETL Transform", sub: "Streaming + batch · schema enforcement" },
                    { icon: <Database className="w-3.5 h-3.5 text-cyan-500" />, title: "Intelligence Layer", sub: "Vector store · graph DB · queryable by agents" },
                  ].map((stage, i) => (
                    <div key={i}>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-cyan-500/[0.03] border border-cyan-500/[0.08]">
                        <div className="w-7 h-7 rounded bg-cyan-500/[0.1] flex items-center justify-center">{stage.icon}</div>
                        <div className="flex-1">
                          <div className="text-[10px] text-gray-700">{stage.title}</div>
                          <div className="text-[8px] text-gray-400">{stage.sub}</div>
                        </div>
                        <span className="text-[8px] text-emerald-600">● LIVE</span>
                      </div>
                      {i < 2 && (
                        <div className="flex justify-center">
                          <div className="w-px h-4 pipe-flow" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  {[
                    { val: "2.1M", label: "docs indexed" },
                    { val: "< 40ms", label: "query latency" },
                    { val: "99.99%", label: "pipeline uptime" },
                  ].map((s, i) => (
                    <div key={i} className="p-2 rounded-lg bg-gray-50">
                      <div className="text-[12px] text-cyan-600 font-medium">{s.val}</div>
                      <div className="text-[8px] text-gray-400">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SLM Engine */}
          <div className="r-right">
            <div className="section-badge bg-amber-500/[0.06] border border-amber-500/[0.12] mb-8 inline-flex">
              <Brain className="w-3 h-3 text-amber-500" />
              <span className="text-amber-700 text-[10px] font-medium tracking-[0.3em] uppercase font-mono">Model Architecture</span>
            </div>
            <h2 className="display-section text-4xl md:text-5xl mb-6">
              Efficient Small Language <span className="text-gradient-amber">Model Engine</span>
            </h2>
            <p className="text-[15px] text-gray-500 font-light mb-8 leading-relaxed">
              Efficient SLMs optimized for enterprise tasks — not hyperscale general-purpose models.
            </p>

            {/* Model Benchmarks Mock */}
            <div className="industry-mock mb-6">
              <div className="mock-header">
                <div className="mock-dot r" /><div className="mock-dot y" /><div className="mock-dot g" />
                <span className="text-[9px] text-gray-500 font-mono ml-2">slm-engine — model benchmarks</span>
              </div>
              <div className="p-5 font-mono">
                <div className="text-[9px] text-gray-400 mb-3 tracking-wider">ENTERPRISE TASK ACCURACY</div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-[9px] mb-1">
                      <span className="text-amber-600 font-medium">Genovation SLM (3B)</span>
                      <span className="text-gray-700">94.2%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-gray-100 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500" style={{ width: "94.2%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[9px] mb-1">
                      <span className="text-gray-400">GPT-3.5 Turbo (175B)</span>
                      <span className="text-gray-500">91.8%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-gray-100 overflow-hidden">
                      <div className="h-full rounded-full bg-gray-300" style={{ width: "91.8%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[9px] mb-1">
                      <span className="text-gray-400">Generic SLM (7B)</span>
                      <span className="text-gray-500">82.1%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-gray-100 overflow-hidden">
                      <div className="h-full rounded-full bg-gray-200" style={{ width: "82.1%" }} />
                    </div>
                  </div>
                </div>
                <div className="term-separator mt-4 mb-3" />
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-amber-500/[0.04] border border-amber-500/[0.08]">
                    <div className="text-[8px] text-gray-400 mb-1">INFRASTRUCTURE</div>
                    <div className="text-[11px] text-amber-600 font-medium">58× smaller</div>
                    <div className="text-[8px] text-gray-400">vs GPT-3.5 equivalent</div>
                  </div>
                  <div className="p-3 rounded-lg bg-amber-500/[0.04] border border-amber-500/[0.08]">
                    <div className="text-[8px] text-gray-400 mb-1">COST / 1M TOKENS</div>
                    <div className="text-[11px] text-amber-600 font-medium">$0.02</div>
                    <div className="text-[8px] text-gray-400">on-premise, no API fees</div>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <span className="term-badge bg-amber-500/[0.08] text-amber-700">On-Prem Ready</span>
                  <span className="term-badge bg-emerald-500/[0.08] text-emerald-700">Air-Gap OK</span>
                  <span className="term-badge bg-violet-500/[0.08] text-violet-700">Domain Tuned</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
