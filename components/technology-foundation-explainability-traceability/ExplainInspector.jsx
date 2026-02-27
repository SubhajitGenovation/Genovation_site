"use client";
import { useRef, Fragment } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Monitor, Lock, Download, Share2, FileInput, Info, GitBranch, ShieldCheck } from "lucide-react";

export default function ExplainInspector() {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (typeof document === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".r-up", containerRef.current).forEach((el) => {
      gsap.to(el, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
    });
    gsap.utils.toArray(".r-scale", containerRef.current).forEach((el) => {
      gsap.to(el, { scale: 1, opacity: 1, duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
    });
  }, { scope: containerRef });

  const sidebarSteps = [
    { num: "1", color: "emerald", label: "Input Received", time: "10:23:01.234", active: true },
    { num: "2", color: "cyan", label: "Data Source Access", time: "10:23:01.456" },
    { num: "3", color: "cyan", label: "Knowledge Retrieval", time: "10:23:02.012" },
    { num: "4", color: "emerald", label: "Reasoning: Parse", time: "10:23:02.345" },
    { num: "5", color: "emerald", label: "Reasoning: Analyze", time: "10:23:03.567" },
    { num: "6", color: "emerald", label: "Reasoning: Decide", time: "10:23:04.891" },
    { num: "7", color: "blue", label: "Policy Check", time: "10:23:05.123", badge: "✓" },
    { num: "8", color: "violet", label: "Action Executed", time: "10:23:05.456" },
    { num: "9", color: "emerald", label: "Output Generated", time: "10:23:06.789" },
  ];

  return (
    <section className="py-48 relative" id="inspectorSection" ref={containerRef}>
      <div className="absolute inset-0 mesh-bg opacity-15"></div>
      <div className="orb w-[600px] h-[400px] bg-violet-500/[0.05]" style={{ top: "10%", right: "20%" }}></div>

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-500/[0.14] border border-violet-500/[0.2] mb-8 r-up">
            <Monitor className="w-3 h-3 text-violet-600/80" />
            <span className="text-violet-600/80 text-[11px] font-light tracking-[0.25em] uppercase">Interface</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">Trace <span className="text-gradient">Inspector</span></h2>
          <p className="text-lg text-gray-500 font-light max-w-xl mx-auto mt-6 r-up">Investigate any decision with complete visibility into the reasoning process, data sources, and execution path.</p>
        </div>

        <div className="r-scale">
          <div className="industry-mock" style={{ boxShadow: "0 40px 120px -30px rgba(16,185,129,0.1)" }}>
            <div className="mock-header">
              <div className="mock-dot r"></div><div className="mock-dot y"></div><div className="mock-dot g"></div>
              <span className="text-[9px] text-gray-500 font-mono ml-2 flex items-center gap-2">
                <Lock className="w-3 h-3 text-emerald-600" />trace.genovation.ai/inspect/8f2a4b91
              </span>
            </div>
            <div className="flex" style={{ minHeight: "520px" }}>
              {/* Sidebar */}
              <div className="w-64 flex-shrink-0 border-r border-black/[0.06] p-4" style={{ background: "rgba(0,0,0,0.015)" }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] text-gray-600 font-light">Trace Timeline</span>
                  <span className="text-[10px] text-emerald-600 font-mono">12 steps</span>
                </div>
                <div className="space-y-1">
                  {sidebarSteps.map((step) => (
                    <div key={step.num} className={`p-3 rounded-lg ${step.active ? "bg-emerald-500/[0.08] border border-emerald-500/[0.15]" : "hover:bg-black/[0.03]"} transition-colors`}>
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`w-5 h-5 rounded bg-${step.color}-500/20 flex items-center justify-center`}>
                          <span className={`text-[9px] text-${step.color}-600 font-bold`}>{step.num}</span>
                        </div>
                        <span className={`text-[11px] ${step.active ? "text-gray-700" : "text-gray-500"} font-light`}>{step.label}</span>
                        {step.badge && <span className="ml-auto text-[9px] text-emerald-600">{step.badge}</span>}
                      </div>
                      <p className="text-[9px] text-gray-400 font-mono pl-7">{step.time}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-light text-gray-900">Step 1: Input Received</h2>
                    <p className="text-[10px] text-gray-400 font-mono">Trace ID: 8f2a4b91-c3e4-4a5b-9d2f-1e8a7b6c5d4e</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 rounded-lg border border-black/[0.08] text-gray-500 text-[10px] font-light flex items-center gap-1.5"><Download className="w-3 h-3" />Export</button>
                    <button className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-[10px] font-light flex items-center gap-1.5"><Share2 className="w-3 h-3" />Share</button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3"><FileInput className="w-4 h-4 text-emerald-600" /><span className="text-[11px] text-gray-500 font-light">Input Data</span></div>
                    <div className="p-4 rounded-xl bg-black/[0.03] border border-black/[0.06]">
                      <pre className="text-[10px] text-gray-500 font-mono leading-relaxed">{`{
  `}<span className="text-emerald-600">{"{"}</span>{`
  `}<span className="text-cyan-600">"query"</span>{`: `}<span className="text-blue-600">"Analyze Q3 revenue variance"</span>{`,
  `}<span className="text-cyan-600">"context"</span>{`: `}<span className="text-emerald-600">{"{"}</span>{`
    `}<span className="text-cyan-600">"department"</span>{`: `}<span className="text-blue-600">"Finance"</span>{`,
    `}<span className="text-cyan-600">"period"</span>{`: `}<span className="text-blue-600">"2024-Q3"</span>{`,
    `}<span className="text-cyan-600">"threshold"</span>{`: `}<span className="text-violet-600">0.05</span>{`
  `}<span className="text-emerald-600">{"}"}</span>{`,
  `}<span className="text-cyan-600">"user_id"</span>{`: `}<span className="text-blue-600">"analyst_jsmith"</span>{`
`}<span className="text-emerald-600">{"}"}</span></pre>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3"><Info className="w-4 h-4 text-cyan-600" /><span className="text-[11px] text-gray-500 font-light">Step Metadata</span></div>
                    <div className="p-4 rounded-xl bg-black/[0.03] border border-black/[0.06] space-y-3">
                      {[
                        ["Step Type", "INPUT_RECEIVED"],
                        ["Duration", "0.234ms"],
                        ["Agent", "orchestrator_main"],
                        ["Policy Check", "PASSED", "text-emerald-600"],
                        ["Hash", "a3f2b1c4...", "text-gray-400 font-mono text-[10px]"],
                      ].map(([k, v, cls], i) => (
                        <div key={i} className="flex justify-between">
                          <span className="text-[10px] text-gray-400">{k}</span>
                          <span className={`text-[11px] ${cls || "text-gray-700"} font-light`}>{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Reasoning Chain */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3"><GitBranch className="w-4 h-4 text-violet-600" /><span className="text-[11px] text-gray-500 font-light">Reasoning Chain</span></div>
                  <div className="p-4 rounded-xl bg-black/[0.03] border border-black/[0.06]">
                    <div className="flex items-center gap-3">
                      {[
                        { num: "1", color: "emerald", label: "Input" },
                        { num: "2-3", color: "cyan", label: "Data" },
                        { num: "4-6", color: "emerald", label: "Reason" },
                        { num: "7", color: "blue", label: "Policy" },
                        { num: "8", color: "violet", label: "Action" },
                        { num: "9", color: "emerald", label: "Output" },
                      ].map((item, i, arr) => (
                        <Fragment key={item.num}>
                          <div className="flex items-center gap-2">
                            <div className={`w-8 h-8 rounded-lg bg-${item.color}-500/15 flex items-center justify-center`}>
                              <span className={`text-[10px] text-${item.color}-600 font-bold`}>{item.num}</span>
                            </div>
                            <span className="text-[11px] text-gray-500">{item.label}</span>
                          </div>
                          {i < arr.length - 1 && <div key={`sep-${i}`} className="flex-1 h-px bg-black/[0.06]"></div>}
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Verification */}
                <div className="p-4 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/[0.15]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/[0.15] flex items-center justify-center"><ShieldCheck className="w-5 h-5 text-emerald-600" /></div>
                    <div className="flex-1">
                      <p className="text-[13px] text-gray-900 font-light">Trace Verified</p>
                      <p className="text-[10px] text-gray-400 font-light">Cryptographic signature valid · All policy checks passed · Complete lineage available</p>
                    </div>
                    <span className="px-3 py-1.5 rounded-lg bg-emerald-500/15 text-emerald-600 text-[10px] font-light">✓ Audit Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}