"use client";

import {
  GitCommit, ListTree, Network,
  ShieldCheck, CheckCircle, Ban,
  Lock, ScrollText, History, FileCheck,
  Sliders, User, PauseCircle,
} from "lucide-react";

const principles = [
  {
    num: "01", accent: "via-teal-500",
    iconBg: "bg-teal-500/[0.08] border-teal-500/[0.15]", iconColor: "text-teal-500",
    title: "Explainability by Design",
    body: "We design intelligence systems so that explanation is a natural by-product of execution, not an afterthought.",
    itemBg: "bg-teal-500/[0.03] border-teal-500/[0.08]",
    itemColor: "text-teal-500",
    note: "Rather than relying solely on post-hoc explanation tools, our research emphasizes transparent execution paths.",
    layout: "list",
    items: [
      { icon: <GitCommit className="w-4 h-4 text-teal-500" />, text: "Tracing outputs back to source data" },
      { icon: <ListTree   className="w-4 h-4 text-teal-500" />, text: "Recording intermediate reasoning steps" },
      { icon: <Network    className="w-4 h-4 text-teal-500" />, text: "Maintaining visibility across multi-agent workflows" },
    ],
  },
  {
    num: "02", accent: "via-violet-500",
    iconBg: "bg-violet-500/[0.08] border-violet-500/[0.12]", iconColor: "text-violet-500",
    title: "Governed Autonomy",
    body: "Autonomous systems are valuable only when their autonomy is constrained by explicit rules.",
    itemBg: "bg-violet-500/[0.03] border-violet-500/[0.08]",
    itemColor: "text-violet-500",
    note: "Autonomy operates within defined boundaries, rather than outside human control.",
    layout: "list",
    items: [
      { icon: <ShieldCheck  className="w-4 h-4 text-violet-500" />, text: "Enforcing enterprise policies during execution" },
      { icon: <CheckCircle  className="w-4 h-4 text-violet-500" />, text: "Validating agent actions in real time" },
      { icon: <Ban          className="w-4 h-4 text-violet-500" />, text: "Preventing unsafe or non-compliant behavior" },
    ],
  },
  {
    num: "03", accent: "via-blue-500",
    iconBg: "bg-blue-500/[0.08] border-blue-500/[0.12]", iconColor: "text-blue-500",
    title: "Auditability & Accountability",
    body: "Explainability is incomplete without auditability. Systems must support long-term accountability.",
    itemBg: "bg-blue-500/[0.03] border-blue-500/[0.08]",
    itemColor: "text-blue-500",
    note: "Auditability is a first-class system requirement, not an operational add-on.",
    layout: "grid",
    items: [
      { icon: <Lock       className="w-4 h-4 text-blue-500" />, text: "Immutable audit trails" },
      { icon: <ScrollText className="w-4 h-4 text-blue-500" />, text: "Action-level logging" },
      { icon: <History    className="w-4 h-4 text-blue-500" />, text: "Historical reconstruction" },
      { icon: <FileCheck  className="w-4 h-4 text-blue-500" />, text: "Regulatory compliance" },
    ],
  },
  {
    num: "04", accent: "via-amber-500",
    iconBg: "bg-amber-500/[0.08] border-amber-500/[0.12]", iconColor: "text-amber-500",
    title: "Risk-Aware Intelligence",
    body: "Not all decisions carry the same level of risk. Intelligence systems must adapt accordingly.",
    itemBg: "bg-amber-500/[0.03] border-amber-500/[0.08]",
    itemColor: "text-amber-500",
    note: "Graduated autonomy, rather than binary \"human vs AI\" control.",
    layout: "list",
    items: [
      { icon: <Sliders     className="w-4 h-4 text-amber-500" />, text: "Adapt behavior based on risk context" },
      { icon: <User        className="w-4 h-4 text-amber-500" />, text: "Escalate decisions requiring human oversight" },
      { icon: <PauseCircle className="w-4 h-4 text-amber-500" />, text: "Restrict actions under uncertainty" },
    ],
  },
];

export default function RAIPrinciples() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg-teal opacity-10" />
      <div className="orb w-[400px] h-[400px] bg-violet-400/[0.04]" style={{ bottom: "5%", left: "-5%" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-[10px] text-gray-400 tracking-[0.3em] uppercase mb-4 font-mono r-up">Our Approach</p>
          <h2 className="text-4xl md:text-5xl display-section text-gray-800 mb-4 r-up">Four Core Principles</h2>
          <p className="text-gray-500 max-w-xl mx-auto font-light r-up">
            Genovation's responsible AI research is grounded in system-level explainability,
            not just model-level interpretability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {principles.map((p, i) => (
            <div key={i} className="principle-card p-8 r-up">
              {/* Top accent stripe */}
              <div className={`top-accent bg-gradient-to-r from-transparent ${p.accent} to-transparent`} />

              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl ${p.iconBg} border flex items-center justify-center`}>
                  <span className={`text-xl font-light ${p.iconColor}`}>{p.num}</span>
                </div>
                <h3 className="text-lg font-medium text-gray-800">{p.title}</h3>
              </div>

              <p className="text-gray-500 mb-5 font-light text-sm leading-relaxed">{p.body}</p>

              {p.layout === "list" ? (
                <div className="space-y-2 mb-5">
                  {p.items.map((item, j) => (
                    <div key={j} className={`flex items-start gap-3 p-3 rounded-lg ${p.itemBg} border`}>
                      <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                      <span className="text-sm text-gray-500 font-light">{item.text}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {p.items.map((item, j) => (
                    <div key={j} className={`p-3.5 rounded-lg ${p.itemBg} border text-center`}>
                      <div className="flex justify-center mb-1.5">{item.icon}</div>
                      <p className="text-[11px] text-gray-500 font-light">{item.text}</p>
                    </div>
                  ))}
                </div>
              )}

              <p className="text-[11px] text-gray-400 font-light italic">{p.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
