"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ListTree, Database, BookOpen, Brain, ShieldCheck, Zap, FileOutput, GitCommit, Repeat, UserCheck, Search } from "lucide-react";

export default function ExplainTrace() {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (typeof document === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".r-up", containerRef.current).forEach((el) => {
      gsap.to(el, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
    });
  }, { scope: containerRef });

  const traceCards = [
    { icon: <Database className="w-5 h-5 text-cyan-600" />, bg: "bg-cyan-500/[0.12]", title: "Input Data Sources", desc: "Every data source accessed is recorded with timestamps, schemas, and extraction metadata.", code: "source: customer_db.transactions\nrecords: 1,247,892\naccessed: 2024-01-15T10:23:01Z", codeColor: "text-cyan-600/70" },
    { icon: <BookOpen className="w-5 h-5 text-cyan-600" />, bg: "bg-cyan-500/[0.12]", title: "Knowledge Artifacts", desc: "Every document, policy, and reference material consulted during reasoning is logged.", code: "artifact: compliance_policy_v3.2\nsections: [4.1, 4.2, 7.3]\nrelevance: 0.94", codeColor: "text-cyan-600/70" },
    { icon: <Brain className="w-5 h-5 text-cyan-600" />, bg: "bg-cyan-500/[0.12]", title: "Reasoning Steps", desc: "Each step in the reasoning chain is captured with inputs, logic, and intermediate conclusions.", code: "step: analyze_variance\ninputs: [q3_actual, q3_forecast]\nconclusion: deviation > threshold", codeColor: "text-cyan-600/70" },
    { icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />, bg: "bg-emerald-500/[0.12]", title: "Policies Applied", desc: "All governance rules, constraints, and compliance checks that were evaluated and enforced.", code: "policy: data_privacy_rule\ncheck: pii_redaction\nresult: PASSED ✓", codeColor: "text-emerald-600/70" },
    { icon: <Zap className="w-5 h-5 text-violet-600" />, bg: "bg-violet-500/[0.12]", title: "Actions Executed", desc: "Every system action, API call, or external interaction performed as part of the operation.", code: "action: send_notification\ntarget: stakeholder_group_a\nstatus: COMPLETED", codeColor: "text-violet-600/70" },
    { icon: <FileOutput className="w-5 h-5 text-emerald-600" />, bg: "bg-emerald-500/[0.12]", title: "Outputs Produced", desc: "Final outputs, recommendations, and deliverables with full provenance linking back to sources.", code: "output: variance_report_q3\nformat: structured_json\nlineage_id: trace_8f2a4b91", codeColor: "text-emerald-600/70" },
  ];

  return (
    <section className="py-48 relative" id="traceSection" ref={containerRef}>
      <div className="absolute inset-0 mesh-bg opacity-15"></div>
      <div className="orb w-[500px] h-[400px] bg-cyan-500/[0.06]" style={{ top: "15%", right: "10%" }}></div>

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/[0.14] border border-cyan-500/[0.2] mb-8 r-up">
            <ListTree className="w-3 h-3 text-cyan-600" />
            <span className="text-cyan-600 text-[11px] font-light tracking-[0.25em] uppercase">Complete Visibility</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">Traceability Across<br /><span className="text-gradient">The Entire Lifecycle</span></h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 r-up">Every intelligence operation executed through Mentis OS produces a complete trace. Nothing occurs outside the trace.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {traceCards.map((card, i) => (
            <div className="card p-8 r-up" key={i}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg ${card.bg} flex items-center justify-center`}>{card.icon}</div>
                <h3 className="text-[15px] text-gray-900 font-light">{card.title}</h3>
              </div>
              <p className="text-[13px] text-gray-500 font-light mb-4">{card.desc}</p>
              <div className={`p-3 rounded-xl bg-black/[0.03] border border-black/[0.06] font-mono text-[10px] ${card.codeColor} leading-relaxed whitespace-pre`}>{card.code}</div>
            </div>
          ))}
        </div>

        {/* Structured Reasoning */}
        <div className="r-up">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-cyan-500/[0.06] via-transparent to-blue-500/[0.04]"></div>
            <div className="absolute -inset-6 rounded-[36px] border border-cyan-500/[0.08]"></div>
            <div className="relative card p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-cyan-500/[0.12] flex items-center justify-center"><GitCommit className="w-7 h-7 text-cyan-600" /></div>
                    <div>
                      <h3 className="text-2xl font-light text-gray-900">Structured Reasoning</h3>
                      <p className="text-[11px] text-cyan-600/60 font-light">Not free-form generation</p>
                    </div>
                  </div>
                  <p className="text-[15px] text-gray-500 font-light leading-relaxed mb-8">Genovation avoids uncontrolled free-form generation for enterprise decisions. Instead, reasoning is task-scoped, constraint-aware, policy-bounded, and logged at each step.</p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Task-Scoped", sub: "Bounded to specific objectives" },
                      { label: "Constraint-Aware", sub: "Respects defined limits" },
                      { label: "Policy-Bounded", sub: "Enforces governance rules" },
                      { label: "Logged Per-Step", sub: "Every decision recorded" },
                    ].map((item, i) => (
                      <div key={i} className="p-4 rounded-xl bg-black/[0.03] border border-cyan-500/[0.1]">
                        <p className="text-[13px] text-cyan-600 font-light mb-1">{item.label}</p>
                        <p className="text-[11px] text-gray-400 font-light">{item.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-8 rounded-2xl bg-black/[0.03] border border-black/[0.06]">
                  <p className="text-[11px] text-gray-400 font-light mb-6 tracking-wider uppercase">This ensures outputs are:</p>
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/[0.12] flex items-center justify-center"><Repeat className="w-6 h-6 text-emerald-600" /></div>
                      <div><p className="text-[15px] text-gray-900 font-light">Reproducible</p><p className="text-[12px] text-gray-400 font-light">Same inputs yield same reasoning path</p></div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-violet-500/[0.12] flex items-center justify-center"><UserCheck className="w-6 h-6 text-violet-600" /></div>
                      <div><p className="text-[15px] text-gray-900 font-light">Attributable</p><p className="text-[12px] text-gray-400 font-light">Every conclusion tied to its sources</p></div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/[0.12] flex items-center justify-center"><Search className="w-6 h-6 text-blue-600" /></div>
                      <div><p className="text-[15px] text-gray-900 font-light">Inspectable</p><p className="text-[12px] text-gray-400 font-light">Full reasoning chain exposed for review</p></div>
                    </div>
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