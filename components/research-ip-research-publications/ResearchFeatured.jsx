"use client";

import { ScrollText, FileText, Database, Brain, Zap, ArrowRight } from "lucide-react";

const focusAreas = [
  { dot: "from-emerald-400 to-cyan-400",   text: "Explainable decision pipelines" },
  { dot: "from-cyan-400 to-blue-400",      text: "Auditability in multi-agent systems" },
  { dot: "from-blue-400 to-violet-400",    text: "Governance-first AI architecture" },
];

const industries = ["Financial Services", "Aerospace & Defense", "Healthcare", "Government"];

export default function ResearchFeatured() {
  return (
    <section className="py-48 relative" id="featured">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[600px] h-[500px] bg-blue-500/[0.05]" style={{ top: "15%", left: "25%" }} />

      <div className="relative max-w-5xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/[0.1] border border-blue-500/[0.2] mb-8 r-up">
            <ScrollText className="w-3 h-3 text-blue-600" />
            <span className="text-blue-600 text-[11px] font-light tracking-[0.25em] uppercase">Published Work</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Featured<br /><span className="text-gradient">Research</span>
          </h2>
        </div>

        <div className="r-scale">
          <div className="paper-card p-12" style={{ boxShadow: "0 40px 100px -30px rgba(59,130,246,0.08)" }}>
            {/* Header */}
            <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/[0.1] flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-blue-600 tracking-wider uppercase">Research Paper</span>
                  <p className="text-sm text-gray-500 font-light">Enterprise AI Governance</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/[0.08] border border-emerald-400/[0.15]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm text-emerald-600 font-light">Published / Under Review</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-3xl lg:text-4xl text-gray-900 mb-8 leading-snug font-light tracking-tight italic">
              "Explainability and Transparency in Designing Responsible AI Applications for the Enterprise"
            </h3>

            {/* Content block with left gradient line */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 border border-black/[0.06] mb-8">
              <div className="absolute top-0 left-8 w-[3px] h-full bg-gradient-to-b from-emerald-400/40 via-cyan-400/40 to-blue-400/40 rounded-full" />
              <h4 className="text-[11px] font-medium text-gray-700 uppercase tracking-[0.2em] mb-4 ml-6">What This Paper Addresses</h4>
              <p className="text-gray-500 font-light leading-relaxed mb-8 ml-6">
                This work explores architectural patterns and system-level mechanisms required to design AI applications that can be audited, explained, and governed in enterprise settings. Rather than focusing on model interpretability alone, the research tackles the{" "}
                <span className="text-gray-900 font-medium">full stack</span> of enterprise AI deployment.
              </p>
              <div className="grid md:grid-cols-3 gap-4 ml-6">
                {[
                  { icon: <Database className="w-5 h-5 text-emerald-600" />, bg: "bg-emerald-500/[0.05]", border: "border-emerald-400/[0.1]", iconBg: "bg-emerald-500/[0.12]", title: "text-emerald-700", label: "Data Layer", sub: "Traceability across data provenance, transformation, and lineage" },
                  { icon: <Brain className="w-5 h-5 text-cyan-600" />,     bg: "bg-cyan-500/[0.05]",    border: "border-cyan-400/[0.1]",    iconBg: "bg-cyan-500/[0.12]",    title: "text-cyan-700",    label: "Reasoning Layer", sub: "Continuous validation of agent behavior and decision paths" },
                  { icon: <Zap className="w-5 h-5 text-blue-600" />,       bg: "bg-blue-500/[0.05]",    border: "border-blue-400/[0.1]",    iconBg: "bg-blue-500/[0.12]",    title: "text-blue-700",    label: "Action Layer", sub: "Alignment between AI outputs and enterprise policies" },
                ].map((layer, i) => (
                  <div key={i} className={`p-5 rounded-xl ${layer.bg} border ${layer.border}`}>
                    <div className={`w-10 h-10 rounded-lg ${layer.iconBg} flex items-center justify-center mb-3`}>{layer.icon}</div>
                    <h5 className={`${layer.title} font-medium mb-2 text-sm`}>{layer.label}</h5>
                    <p className="text-xs text-gray-500 font-light">{layer.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-[11px] font-medium text-gray-500 uppercase tracking-[0.2em] mb-4">Focus Areas</h4>
                <div className="space-y-3">
                  {focusAreas.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${f.dot}`} />
                      <span className="text-gray-700 font-light">{f.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-[11px] font-medium text-gray-500 uppercase tracking-[0.2em] mb-4">Industry Relevance</h4>
                <div className="flex flex-wrap gap-2">
                  {industries.map((ind, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-white/60 border border-black/[0.06] text-gray-600 text-sm font-light">{ind}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-6 border-t border-black/[0.06] flex items-center justify-between flex-wrap gap-4">
              <span className="text-sm text-gray-500 font-light">Detailed citation available upon request</span>
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500/[0.08] border border-blue-400/[0.15] text-blue-600 hover:border-blue-500/30 transition-all text-sm font-light">
                Request Citation
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
