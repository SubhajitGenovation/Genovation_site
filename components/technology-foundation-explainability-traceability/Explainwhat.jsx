"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Lightbulb, HelpCircle, GitBranch, Workflow, Database, BookOpen, Brain, Scale, Zap, FileOutput, ClipboardCheck, FileCheck, Search, FileText, Users } from "lucide-react";

export default function ExplainWhat() {
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

  const threeCards = [
    {
      color: "emerald",
      icon: <HelpCircle className="w-8 h-8 text-emerald-600" />,
      label: "WHAT",
      sublabel: "Decision Identification",
      desc: "Precisely what decision, recommendation, or action was taken by the system.",
      dots: ["Clear decision statement", "Output classification", "Confidence indicators"],
      dotColor: "bg-emerald-500",
    },
    {
      color: "cyan",
      icon: <GitBranch className="w-8 h-8 text-cyan-600" />,
      label: "WHY",
      sublabel: "Reasoning Transparency",
      desc: "The complete chain of reasoning that led to the decision, with every factor exposed.",
      dots: ["Data sources referenced", "Logic path documentation", "Constraint considerations"],
      dotColor: "bg-cyan-500",
    },
    {
      color: "blue",
      icon: <Workflow className="w-8 h-8 text-blue-600" />,
      label: "HOW",
      sublabel: "Execution Verification",
      desc: "The exact sequence of operations and actions taken to implement the decision.",
      dots: ["Step-by-step execution log", "Policy checkpoints passed", "System interactions recorded"],
      dotColor: "bg-blue-500",
    },
  ];

  const lineageNodes = [
    { icon: <Database className="w-6 h-6 text-emerald-600" />, bg: "bg-emerald-500/[0.12]", label: "Input Data", sub: "Sources logged" },
    { connector: true, from: "emerald", to: "cyan" },
    { icon: <BookOpen className="w-6 h-6 text-cyan-600" />, bg: "bg-cyan-500/[0.12]", label: "Knowledge", sub: "Artifacts accessed" },
    { connector: true, from: "cyan", to: "emerald" },
    { icon: <Brain className="w-6 h-6 text-emerald-600" />, bg: "bg-emerald-500/[0.15]", label: "Reasoning", sub: "Steps performed", border: true },
    { connector: true, from: "emerald", to: "blue" },
    { icon: <Scale className="w-6 h-6 text-blue-600" />, bg: "bg-blue-500/[0.12]", label: "Policy", sub: "Rules applied" },
    { connector: true, from: "blue", to: "violet" },
    { icon: <Zap className="w-6 h-6 text-violet-600" />, bg: "bg-violet-500/[0.12]", label: "Action", sub: "Executed" },
    { connector: true, from: "violet", to: "emerald" },
    { icon: <FileOutput className="w-6 h-6 text-emerald-600" />, bg: "bg-emerald-500/[0.12]", label: "Output", sub: "Produced" },
    { connector: true, from: "emerald", to: "amber" },
    { icon: <ClipboardCheck className="w-6 h-6 text-amber-600" />, bg: "bg-amber-500/[0.12]", label: "Audit Log", sub: "Immutable", border: "amber" },
  ];

  return (
    <section className="py-48 relative" id="whatSection" ref={containerRef}>
      <div className="absolute inset-0 mesh-bg opacity-15"></div>
      <div className="orb w-[600px] h-[400px] bg-emerald-500/[0.06]" style={{ top: "5%", left: "20%" }}></div>
      <div className="orb w-[400px] h-[300px] bg-cyan-500/[0.05]" style={{ bottom: "15%", right: "10%" }}></div>

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2] mb-8 r-up">
            <Lightbulb className="w-3 h-3 text-emerald-600" />
            <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">Core Capabilities</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">What Explainability<br /><span className="text-gradient">Means in Practice</span></h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 r-up">In Genovation systems, explainability answers three fundamental questions with precision. Each is recorded and verifiable.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {threeCards.map((card, i) => (
            <div className="r-up" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="relative">
                <div className={`absolute -inset-3 rounded-[28px] bg-gradient-to-br from-${card.color}-500/[0.08] to-${card.color}-400/[0.02]`}></div>
                <div className={`absolute -inset-3 rounded-[28px] border border-${card.color}-500/[0.1]`}></div>
                <div className="relative card p-10 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-${card.color}-500/[0.12] flex items-center justify-center mb-6`}>{card.icon}</div>
                  <h3 className="text-3xl font-light text-gray-900 mb-2">{card.label}</h3>
                  <p className={`text-${card.color}-600 text-[13px] font-light mb-4`}>{card.sublabel}</p>
                  <p className="text-[15px] text-gray-500 font-light leading-relaxed mb-6">{card.desc}</p>
                  <div className="space-y-3">
                    {card.dots.map((d, j) => (
                      <div key={j} className="flex items-center gap-3 text-[13px] text-gray-500">
                        <div className={`w-1.5 h-1.5 rounded-full ${card.dotColor}`}></div><span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decision Lineage */}
        <div className="r-scale">
          <div className="industry-mock" style={{ boxShadow: "0 25px 80px -20px rgba(16,185,129,0.1)" }}>
            <div className="mock-header">
              <div className="mock-dot r"></div><div className="mock-dot y"></div><div className="mock-dot g"></div>
              <span className="text-[9px] text-gray-500 font-mono ml-2">DECISION LINEAGE — AUDIT-READY</span>
              <div className="ml-auto flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-[8px] text-emerald-600 font-mono">VERIFIABLE</span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="text-center flex-1 min-w-[80px]">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/[0.12] flex items-center justify-center mx-auto mb-2"><Database className="w-6 h-6 text-emerald-600" /></div>
                  <div className="text-[11px] text-gray-600 font-light">Input Data</div>
                  <div className="text-[9px] text-gray-400 font-mono">Sources logged</div>
                </div>
                <div className="flex-shrink-0 w-8 h-px bg-gradient-to-r from-emerald-400/40 to-cyan-400/40"></div>
                <div className="text-center flex-1 min-w-[80px]">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/[0.12] flex items-center justify-center mx-auto mb-2"><BookOpen className="w-6 h-6 text-cyan-600" /></div>
                  <div className="text-[11px] text-gray-600 font-light">Knowledge</div>
                  <div className="text-[9px] text-gray-400 font-mono">Artifacts accessed</div>
                </div>
                <div className="flex-shrink-0 w-8 h-px bg-gradient-to-r from-cyan-400/40 to-emerald-400/40"></div>
                <div className="text-center flex-1 min-w-[80px]">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/[0.15] flex items-center justify-center mx-auto mb-2 border border-emerald-500/20"><Brain className="w-6 h-6 text-emerald-600" /></div>
                  <div className="text-[11px] text-gray-600 font-light">Reasoning</div>
                  <div className="text-[9px] text-gray-400 font-mono">Steps performed</div>
                </div>
                <div className="flex-shrink-0 w-8 h-px bg-gradient-to-r from-emerald-400/40 to-blue-400/40"></div>
                <div className="text-center flex-1 min-w-[80px]">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/[0.12] flex items-center justify-center mx-auto mb-2"><Scale className="w-6 h-6 text-blue-600" /></div>
                  <div className="text-[11px] text-gray-600 font-light">Policy</div>
                  <div className="text-[9px] text-gray-400 font-mono">Rules applied</div>
                </div>
                <div className="flex-shrink-0 w-8 h-px bg-gradient-to-r from-blue-400/40 to-violet-400/40"></div>
                <div className="text-center flex-1 min-w-[80px]">
                  <div className="w-14 h-14 rounded-2xl bg-violet-500/[0.12] flex items-center justify-center mx-auto mb-2"><Zap className="w-6 h-6 text-violet-600" /></div>
                  <div className="text-[11px] text-gray-600 font-light">Action</div>
                  <div className="text-[9px] text-gray-400 font-mono">Executed</div>
                </div>
                <div className="flex-shrink-0 w-8 h-px bg-gradient-to-r from-violet-400/40 to-emerald-400/40"></div>
                <div className="text-center flex-1 min-w-[80px]">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/[0.12] flex items-center justify-center mx-auto mb-2"><FileOutput className="w-6 h-6 text-emerald-600" /></div>
                  <div className="text-[11px] text-gray-600 font-light">Output</div>
                  <div className="text-[9px] text-gray-400 font-mono">Produced</div>
                </div>
                <div className="flex-shrink-0 w-8 h-px bg-gradient-to-r from-emerald-400/40 to-amber-400/40"></div>
                <div className="text-center flex-1 min-w-[80px]">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/[0.12] flex items-center justify-center mx-auto mb-2 border border-amber-500/20"><ClipboardCheck className="w-6 h-6 text-amber-600" /></div>
                  <div className="text-[11px] text-gray-700 font-light">Audit Log</div>
                  <div className="text-[9px] text-gray-400 font-mono">Immutable</div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mt-8 pt-6 border-t border-black/[0.06]">
                <div className="text-center"><FileCheck className="w-5 h-5 text-emerald-600 mx-auto mb-2" /><p className="text-[11px] text-gray-500 font-light">Audit & Compliance</p></div>
                <div className="text-center"><Search className="w-5 h-5 text-cyan-600 mx-auto mb-2" /><p className="text-[11px] text-gray-500 font-light">Post-Incident Analysis</p></div>
                <div className="text-center"><FileText className="w-5 h-5 text-blue-600 mx-auto mb-2" /><p className="text-[11px] text-gray-500 font-light">Regulatory Disclosure</p></div>
                <div className="text-center"><Users className="w-5 h-5 text-violet-600 mx-auto mb-2" /><p className="text-[11px] text-gray-500 font-light">Internal Accountability</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}