"use client";

import { useState } from "react";
import { Database, HardDrive, Cog, Brain, Send, ArrowRight, ArrowDown, CheckCircle } from "lucide-react";

const stages = [
  {
    id: "sources", color: "violet",
    border: "border-violet-500/[0.2] hover:border-violet-500/[0.4]", bg: "bg-violet-500/[0.03] hover:bg-violet-500/[0.06]",
    iconBg: "bg-violet-500/[0.12]", icon: <HardDrive className="w-5 h-5 text-violet-600" />, label: "DATA SOURCES", labelColor: "text-violet-600",
    items: [["bg-violet-500/[0.06] border-violet-500/[0.1]","text-violet-700","Real-time Streams"],["bg-violet-500/[0.06] border-violet-500/[0.1]","text-violet-700","Batch Files"],["bg-violet-500/[0.06] border-violet-500/[0.1]","text-violet-700","Databases"],["bg-violet-500/[0.06] border-violet-500/[0.1]","text-violet-700","Unstructured Docs"]],
    arrowColor: "text-violet-400",
  },
  {
    id: "processing", color: "cyan",
    border: "border-cyan-500/[0.2] hover:border-cyan-500/[0.4]", bg: "bg-cyan-500/[0.03] hover:bg-cyan-500/[0.06]",
    iconBg: "bg-cyan-500/[0.12]", icon: <Cog className="w-5 h-5 text-cyan-600" />, label: "PROCESSING", labelColor: "text-cyan-600",
    items: [["bg-cyan-500/[0.06] border-cyan-500/[0.1]","text-cyan-700","Ingestion Layer"],["bg-cyan-500/[0.06] border-cyan-500/[0.1]","text-cyan-700","ETL Pipelines"],["bg-cyan-500/[0.06] border-cyan-500/[0.1]","text-cyan-700","Transformation"],["bg-cyan-500/[0.06] border-cyan-500/[0.1]","text-cyan-700","Quality Validation"]],
    arrowColor: "text-cyan-400",
  },
  {
    id: "intelligence", color: "amber",
    border: "border-amber-500/[0.2] hover:border-amber-500/[0.4]", bg: "bg-amber-500/[0.03] hover:bg-amber-500/[0.06]",
    iconBg: "bg-amber-500/[0.12]", icon: <Brain className="w-5 h-5 text-amber-600" />, label: "INTELLIGENCE", labelColor: "text-amber-600",
    items: [["bg-amber-500/[0.06] border-amber-500/[0.1]","text-amber-700","Analytics Engine"],["bg-amber-500/[0.06] border-amber-500/[0.1]","text-amber-700","Cross-System Query"],["bg-amber-500/[0.06] border-amber-500/[0.1]","text-amber-700","Agent Reasoning"],["bg-amber-500/[0.06] border-amber-500/[0.1]","text-amber-700","Decision Support"]],
    arrowColor: "text-amber-400",
  },
  {
    id: "output", color: "emerald",
    border: "border-emerald-500/[0.25] hover:border-emerald-500/[0.4]", bg: "bg-emerald-500/[0.03] hover:bg-emerald-500/[0.06]",
    iconBg: "bg-emerald-500/[0.12]", icon: <Send className="w-5 h-5 text-emerald-600" />, label: "OUTPUT", labelColor: "text-emerald-600",
    items: [["bg-emerald-500/[0.06] border-emerald-500/[0.1]","text-emerald-700","Insights & Reports"],["bg-emerald-500/[0.06] border-emerald-500/[0.1]","text-emerald-700","Agent Actions"],["bg-emerald-500/[0.06] border-emerald-500/[0.1]","text-emerald-700","API Responses"],["bg-emerald-500/[0.06] border-emerald-500/[0.1]","text-emerald-700","Audit Logs"]],
    arrowColor: "text-emerald-400", isLast: true,
  },
];

const detailData = {
  sources: {
    title: "Data Sources", color: "violet",
    body: "The backbone ingests data from diverse enterprise sources while maintaining sovereignty and applying access controls from the first moment of ingestion.",
    items: [
      { title: "Real-time Streams", body: "Event streams, IoT data, transaction feeds with sub-second latency." },
      { title: "Batch Files", body: "Scheduled file drops, data exports, periodic synchronizations." },
      { title: "Databases", body: "SQL, NoSQL, data warehouses with change data capture." },
      { title: "Unstructured Documents", body: "PDFs, emails, contracts with semantic extraction." },
    ],
  },
  processing: {
    title: "Processing Layer", color: "cyan",
    body: "Data is transformed, validated, and enriched through governed pipelines that ensure quality and compliance at every step.",
    items: [
      { title: "Ingestion Layer", body: "Unified ingestion with schema validation and access control tagging." },
      { title: "ETL Pipelines", body: "Extract, transform, load workflows with lineage tracking." },
      { title: "Transformation", body: "Normalization, enrichment, and feature engineering." },
      { title: "Quality Validation", body: "Automated quality checks, anomaly detection, data profiling." },
    ],
  },
  intelligence: {
    title: "Intelligence Layer", color: "amber",
    body: "Analytics-ready data layers that power agent reasoning, cross-system queries, and decision intelligence.",
    items: [
      { title: "Analytics Engine", body: "Statistical analysis, ML inference, pattern recognition." },
      { title: "Cross-System Query", body: "Federated queries across data sources with access enforcement." },
      { title: "Agent Reasoning", body: "Data retrieval and analysis for Mentis OS agents." },
      { title: "Decision Support", body: "Context assembly for human and automated decisions." },
    ],
  },
  output: {
    title: "Output Layer", color: "emerald",
    body: "Governed outputs delivered to users, systems, and agents — all with complete audit trails.",
    items: [
      { title: "Insights & Reports", body: "Dashboards, reports, and visualizations for human consumption." },
      { title: "Agent Actions", body: "Approved operations executed by Mentis OS agents." },
      { title: "API Responses", body: "Programmatic access for integrated systems." },
      { title: "Audit Logs", body: "Immutable records of all data access and transformations." },
    ],
  },
};

const colorMap = {
  violet:  { card: "bg-violet-500/[0.04] border-violet-500/[0.12]", title: "text-violet-700" },
  cyan:    { card: "bg-cyan-500/[0.04] border-cyan-500/[0.12]",     title: "text-cyan-700" },
  amber:   { card: "bg-amber-500/[0.04] border-amber-500/[0.12]",   title: "text-amber-700" },
  emerald: { card: "bg-emerald-500/[0.04] border-emerald-500/[0.12]",title: "text-emerald-700" },
};

export default function PlatformDataBackbone() {
  const [activeStage, setActiveStage] = useState(null);

  const handleStage = (id) => {
    setActiveStage(activeStage === id ? null : id);
  };

  return (
    <section id="backbone" className="py-48 relative">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[500px] h-[400px] bg-amber-500/[0.04]" style={{ top: "10%", left: "10%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/[0.08] border border-amber-500/[0.15] mb-8 r-up">
            <Database className="w-3 h-3 text-amber-600" />
            <span className="text-amber-600 text-[11px] font-light tracking-[0.25em] uppercase">Data Infrastructure</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Enterprise <span className="text-gradient-amber">Data Backbone</span>
          </h2>
          <p className="text-[16px] text-gray-500 font-light max-w-3xl mx-auto mt-6 leading-relaxed r-up">
            Enterprise intelligence depends on data — but raw data pipelines alone are insufficient. Our backbone transforms data into intelligence-ready layers.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Animated flow line */}
          <div className="relative mb-4 r-up hidden lg:block h-[3px]">
            <div className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(90deg,rgba(139,92,246,0.2),rgba(6,182,212,0.2),rgba(245,158,11,0.2),rgba(16,185,129,0.2))" }} />
            <div className="absolute inset-0 rounded-full pipe-flow" style={{ opacity: 0.5 }} />
          </div>

          {/* Pipeline stages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 r-up">
            {stages.map((s) => (
              <div key={s.id} className="pipeline-stage cursor-pointer" onClick={() => handleStage(s.id)}>
                <div className={`rounded-2xl p-5 border ${s.border} ${s.bg} transition-all h-full`}>
                  <div className="text-center mb-4">
                    <div className={`w-10 h-10 rounded-xl ${s.iconBg} flex items-center justify-center mx-auto mb-2.5`}>{s.icon}</div>
                    <h4 className={`text-[12px] font-mono ${s.labelColor} tracking-wider`}>{s.label}</h4>
                  </div>
                  <div className="space-y-2">
                    {s.items.map(([bg, tc, label], j) => (
                      <div key={j} className={`px-3 py-2 rounded-lg ${bg} border text-center`}>
                        <span className={`text-[12px] ${tc} font-light`}>{label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="hidden lg:flex justify-end mt-3">
                    {s.isLast
                      ? <CheckCircle className={`w-4 h-4 ${s.arrowColor}`} />
                      : <ArrowRight className={`w-4 h-4 ${s.arrowColor}`} />}
                  </div>
                  <div className="flex lg:hidden justify-center mt-3">
                    {s.isLast
                      ? <CheckCircle className={`w-4 h-4 ${s.arrowColor}`} />
                      : <ArrowDown className={`w-4 h-4 ${s.arrowColor}`} />}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[11px] text-gray-400 font-light tracking-wider mt-5">CLICK ANY STAGE TO LEARN MORE</p>

          {/* Detail panel */}
          {activeStage && (() => {
            const d = detailData[activeStage];
            const c = colorMap[d.color];
            return (
              <div className="mt-6 card p-8 !rounded-2xl">
                <h4 className="text-lg font-medium text-gray-800 mb-3">{d.title}</h4>
                <p className="text-[14px] text-gray-500 font-light leading-relaxed mb-5">{d.body}</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {d.items.map((item, i) => (
                    <div key={i} className={`p-4 rounded-xl ${c.card} border`}>
                      <h5 className={`text-[13px] font-medium ${c.title} mb-1`}>{item.title}</h5>
                      <p className="text-[12px] text-gray-500 font-light">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

          <div className="mt-10 p-5 rounded-xl bg-amber-500/[0.06] border border-amber-500/[0.15] text-center r-up">
            <p className="text-[14px] text-amber-700 font-light">
              <span className="font-medium">Key Differentiator:</span> Integrates with existing enterprise systems without requiring architectural replacement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
