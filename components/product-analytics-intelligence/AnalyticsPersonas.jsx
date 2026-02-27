"use client";
import { useState } from "react";
import {
  Calculator, Factory, Target, Crown,
  ChevronDown, Check, Sparkles, Zap,
  AlertTriangle, FileText, Ticket, Lock,
  ShieldCheck,
} from "lucide-react";

const personas = [
  {
    id: "cfo",
    icon: <Calculator className="w-5 h-5 text-amber-500" />,
    iconBg: "bg-amber-100",
    title: "CFOs & Finance Leaders",
    subtitle: "Defensible explanations for board meetings and audits",
    labelCls: "text-amber-600",
    items: [
      "Variance explanations with traceable logic paths for every metric",
      "Audit-ready reports generated in seconds, not days",
      "Confidence scores on every AI-generated insight",
    ],
  },
  {
    id: "ops",
    icon: <Factory className="w-5 h-5 text-cyan-500" />,
    iconBg: "bg-cyan-100",
    title: "Operations Leaders",
    subtitle: "Root-cause analysis in minutes, not meetings",
    labelCls: "text-cyan-600",
    items: [
      "Anomaly detection with automatic root-cause correlation",
      "Predictive maintenance tickets created before failures",
      "Cross-system insights: production + supply + quality",
    ],
  },
  {
    id: "sales",
    icon: <Target className="w-5 h-5 text-violet-500" />,
    iconBg: "bg-violet-100",
    title: "Sales Leadership",
    subtitle: "Understand why deals win or slip — with data",
    labelCls: "text-violet-600",
    items: [
      "Win/loss analysis with actual behavioral patterns",
      "At-risk deals flagged before they slip",
      "Pipeline health explained, not just reported",
    ],
  },
  {
    id: "exec",
    icon: <Crown className="w-5 h-5 text-rose-500" />,
    iconBg: "bg-rose-100",
    title: "Executive Teams",
    subtitle: "Strategic clarity without information overload",
    labelCls: "text-rose-600",
    items: [
      "Cross-functional insights in one unified view",
      "Board-ready briefs generated on demand",
      "Ask questions in natural language, get explained answers",
    ],
  },
];

export default function AnalyticsPersonas() {
  const [active, setActive] = useState("cfo");
  const activePersona = personas.find((p) => p.id === active);

  return (
    <section
      className="py-32 md:py-44 relative overflow-hidden"
      id="personas"
      style={{ background: "var(--bg)" }}
    >
      <div className="orb w-[600px] h-[500px] bg-amber-500/[0.03]" style={{ top: "5%", left: "5%" }} />
      <div className="orb w-[400px] h-[350px] bg-violet-500/[0.02]" style={{ bottom: "10%", right: "10%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6 r-up">
            <span className="text-[11px] text-amber-600 font-mono tracking-[0.2em]">07</span>
            <div className="w-8 h-px bg-amber-500/40" />
            <span className="text-[11px] text-gray-400 font-light tracking-[0.2em] uppercase">
              Built For Leaders
            </span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl mb-6 r-up">
            Who This Is{" "}
            <span className="text-gradient-amber">For</span>
          </h2>
          <p className="text-lg text-gray-500 font-light r-up">
            Purpose-built intelligence for the people who need to explain decisions, not just report numbers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start r-up">

          {/* ── Left: Accordion List ── */}
          <div className="space-y-3">
            {personas.map((p) => {
              const isActive = active === p.id;
              return (
                <div
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className="rounded-2xl border cursor-pointer transition-all duration-200"
                  style={{
                    background: isActive ? "#ffffff" : "#ffffff",
                    border: isActive
                      ? "1px solid rgba(0,0,0,0.1)"
                      : "1px solid rgba(0,0,0,0.06)",
                    boxShadow: isActive
                      ? "0 4px 24px rgba(0,0,0,0.07)"
                      : "none",
                  }}
                >
                  {/* Accordion Header */}
                  <div className="flex items-center gap-4 p-5">
                    <div
                      className={`w-10 h-10 rounded-xl ${p.iconBg} flex items-center justify-center flex-shrink-0`}
                    >
                      {p.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[14px] font-semibold text-gray-800 mb-0.5">
                        {p.title}
                      </h4>
                      <p className="text-[11px] text-gray-400 font-light">
                        {p.subtitle}
                      </p>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${
                        isActive ? "rotate-180 text-amber-500" : "text-gray-300"
                      }`}
                    />
                  </div>

                  {/* Accordion Body */}
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: isActive ? "220px" : "0px" }}
                  >
                    <div className="px-5 pb-5 pt-0">
                      {/* Content card — amber tinted */}
                      <div
                        className="p-4 rounded-xl"
                        style={{
                          background: "rgba(245,158,11,0.04)",
                          border: "1px solid rgba(245,158,11,0.12)",
                        }}
                      >
                        <div className={`text-[10px] ${p.labelCls} font-semibold mb-3`}>
                          What changes for you:
                        </div>
                        <ul className="space-y-2">
                          {p.items.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                              <span className="text-[11px] text-gray-600 font-light leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Right: Live Preview Window ── */}
          <div className="relative">
            {/* Live Preview badge */}
            <div
              className="absolute -top-3 -right-3 z-10 px-3 py-1.5 rounded-full text-[9px] font-semibold text-white"
              style={{
                background: "linear-gradient(135deg,#d97706,#f59e0b)",
                boxShadow: "0 4px 12px rgba(245,158,11,0.3)",
              }}
            >
              Live Preview
            </div>

            {/* Dark window */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#111113",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 24px 48px rgba(0,0,0,0.2)",
              }}
            >
              {/* macOS Chrome */}
              <div
                className="flex items-center gap-3 px-4 py-2.5 border-b border-white/[0.05]"
                style={{ background: "linear-gradient(180deg,#1a1a1f,#141418)" }}
              >
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg ml-1"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <Lock className="w-2.5 h-2.5 text-emerald-400" />
                  <span className="text-[9px] font-mono text-zinc-500">
                    {activePersona.id === "cfo"  && "app.genovation.ai/cfo/variance"}
                    {activePersona.id === "ops"  && "app.genovation.ai/ops/plant-overview"}
                    {activePersona.id === "sales"&& "app.genovation.ai/sales/pipeline"}
                    {activePersona.id === "exec" && "app.genovation.ai/exec/summary"}
                  </span>
                </div>
              </div>

              {/* Panel content */}
              <div className="p-5">

                {/* ── CFO Preview ── */}
                {active === "cfo" && (
                  <div>
                    <div className="text-[9px] text-amber-400 font-mono tracking-[0.2em] mb-4">
                      CFO DASHBOARD
                    </div>
                    <div className="grid grid-cols-3 gap-2.5 mb-4">
                      {[
                        { label: "VARIANCE",   val: "-$6.4M", cls: "text-red-400",     bg: "rgba(239,68,68,0.08)",   border: "rgba(239,68,68,0.12)" },
                        { label: "FACTORS",    val: "3",      cls: "text-white",       bg: "rgba(255,255,255,0.04)", border: "rgba(255,255,255,0.07)" },
                        { label: "CONFIDENCE", val: "98%",    cls: "text-emerald-400", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.15)" },
                      ].map((k) => (
                        <div key={k.label} className="p-3 rounded-xl"
                          style={{ background: k.bg, border: `1px solid ${k.border}` }}
                        >
                          <div className="text-[7px] text-zinc-600 font-mono tracking-wider mb-1">{k.label}</div>
                          <div className={`text-[17px] font-bold ${k.cls} leading-tight`}>{k.val}</div>
                        </div>
                      ))}
                    </div>
                    {/* AI Explanation */}
                    <div className="p-3.5 rounded-xl mb-3"
                      style={{
                        background: "linear-gradient(135deg,rgba(245,158,11,0.1),rgba(245,158,11,0.04))",
                        border: "1px solid rgba(245,158,11,0.15)",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                          <Sparkles className="w-2.5 h-2.5 text-white" />
                        </div>
                        <span className="text-[9px] text-amber-400 font-semibold">AI Explanation</span>
                      </div>
                      <p className="text-[9.5px] text-zinc-400 leading-relaxed">
                        Revenue missed by{" "}
                        <span className="text-red-400 font-semibold">$6.4M</span> due to Enterprise slippage (-$2.1M), APAC pressure (-$2.8M), SMB churn (-$1.5M).
                      </p>
                    </div>
                    {/* Source pills */}
                    <div className="flex items-center gap-1.5 text-[8px]">
                      {["NetSuite", "Salesforce"].map((s) => (
                        <span key={s} className="px-2 py-1 rounded-lg text-zinc-500 font-mono"
                          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                        >
                          {s}
                        </span>
                      ))}
                      <span className="text-zinc-700 mx-0.5">→</span>
                      <span className="px-2 py-1 rounded-lg text-amber-400 font-mono font-semibold"
                        style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)" }}
                      >
                        Explained
                      </span>
                    </div>
                  </div>
                )}

                {/* ── Ops Preview ── */}
                {active === "ops" && (
                  <div>
                    <div className="text-[9px] text-cyan-400 font-mono tracking-[0.2em] mb-4">
                      OPERATIONS DASHBOARD
                    </div>
                    <div className="grid grid-cols-3 gap-2.5 mb-4">
                      {[
                        { label: "LINE 1", val: "92%", cls: "text-emerald-400", bg: "rgba(16,185,129,0.08)",  border: "rgba(16,185,129,0.15)" },
                        { label: "LINE 2", val: "48%", cls: "text-red-400",     bg: "rgba(239,68,68,0.08)",  border: "rgba(239,68,68,0.15)" },
                        { label: "LINE 3", val: "88%", cls: "text-emerald-400", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.15)" },
                      ].map((k) => (
                        <div key={k.label} className="p-3 rounded-xl"
                          style={{ background: k.bg, border: `1px solid ${k.border}` }}
                        >
                          <div className="text-[7px] text-zinc-600 font-mono tracking-wider mb-1">{k.label}</div>
                          <div className={`text-[17px] font-bold ${k.cls} leading-tight`}>{k.val}</div>
                        </div>
                      ))}
                    </div>
                    <div className="p-3.5 rounded-xl mb-3"
                      style={{
                        background: "linear-gradient(135deg,rgba(6,182,212,0.1),rgba(6,182,212,0.04))",
                        border: "1px solid rgba(6,182,212,0.15)",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-cyan-400 to-sky-500 flex items-center justify-center">
                          <Zap className="w-2.5 h-2.5 text-white" />
                        </div>
                        <span className="text-[9px] text-cyan-400 font-semibold">Root Cause Found</span>
                      </div>
                      <p className="text-[9.5px] text-zinc-400 leading-relaxed">
                        Line 2 throughput dropped{" "}
                        <span className="text-white font-semibold">32%</span> at 08:14 — bearing temp anomaly on Unit 2B, sensor T-4021.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 text-[8px] text-amber-400 rounded-lg font-mono"
                        style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.18)" }}
                      >
                        <Ticket className="w-2.5 h-2.5 inline mr-1" />Ticket #4821
                      </span>
                      <span className="text-[8px] text-zinc-600">auto-created</span>
                    </div>
                  </div>
                )}

                {/* ── Sales Preview ── */}
                {active === "sales" && (
                  <div>
                    <div className="text-[9px] text-violet-400 font-mono tracking-[0.2em] mb-4">
                      SALES DASHBOARD
                    </div>
                    <div className="grid grid-cols-3 gap-2.5 mb-4">
                      {[
                        { label: "PIPELINE", val: "$24.8M", cls: "text-white",       bg: "rgba(255,255,255,0.04)", border: "rgba(255,255,255,0.07)" },
                        { label: "WIN RATE", val: "41%",    cls: "text-emerald-400", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.15)" },
                        { label: "AT RISK",  val: "$3.2M",  cls: "text-amber-400",  bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.15)" },
                      ].map((k) => (
                        <div key={k.label} className="p-3 rounded-xl"
                          style={{ background: k.bg, border: `1px solid ${k.border}` }}
                        >
                          <div className="text-[7px] text-zinc-600 font-mono tracking-wider mb-1">{k.label}</div>
                          <div className={`text-[17px] font-bold ${k.cls} leading-tight`}>{k.val}</div>
                        </div>
                      ))}
                    </div>
                    <div className="p-3.5 rounded-xl mb-3"
                      style={{
                        background: "linear-gradient(135deg,rgba(139,92,246,0.1),rgba(139,92,246,0.04))",
                        border: "1px solid rgba(139,92,246,0.15)",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center">
                          <Sparkles className="w-2.5 h-2.5 text-white" />
                        </div>
                        <span className="text-[9px] text-violet-400 font-semibold">Win Rate Analysis</span>
                      </div>
                      <p className="text-[9.5px] text-zinc-400 leading-relaxed">
                        Win rate improved{" "}
                        <span className="text-emerald-400 font-semibold">+7pp</span> — new demo framework (+12pp where used), earlier SE involvement (-18% cycle).
                      </p>
                    </div>
                    <div className="p-2.5 rounded-lg"
                      style={{ background: "rgba(239,68,68,0.07)", border: "1px solid rgba(239,68,68,0.12)" }}
                    >
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-3 h-3 text-red-400 flex-shrink-0" />
                        <span className="text-[9px] text-zinc-400">
                          <span className="text-white font-medium">Acme Corp $420K</span> — Champion left company
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── Exec Preview ── */}
                {active === "exec" && (
                  <div>
                    <div className="text-[9px] text-rose-400 font-mono tracking-[0.2em] mb-4">
                      EXECUTIVE BRIEF
                    </div>
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {[
                        { label: "REV",  val: "-12%", cls: "text-red-400",     bg: "rgba(239,68,68,0.08)",   border: "rgba(239,68,68,0.12)" },
                        { label: "WIN",  val: "+7pp",  cls: "text-emerald-400", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.12)" },
                        { label: "OEE",  val: "-4pp",  cls: "text-amber-400",  bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.12)" },
                        { label: "CASH", val: "OK",    cls: "text-white",       bg: "rgba(255,255,255,0.04)", border: "rgba(255,255,255,0.07)" },
                      ].map((k) => (
                        <div key={k.label} className="p-2.5 rounded-xl text-center"
                          style={{ background: k.bg, border: `1px solid ${k.border}` }}
                        >
                          <div className="text-[7px] text-zinc-600 font-mono tracking-wider mb-0.5">{k.label}</div>
                          <div className={`text-sm font-bold ${k.cls} leading-tight`}>{k.val}</div>
                        </div>
                      ))}
                    </div>
                    <div className="p-3.5 rounded-xl mb-3"
                      style={{
                        background: "linear-gradient(135deg,rgba(251,113,133,0.1),rgba(251,113,133,0.04))",
                        border: "1px solid rgba(251,113,133,0.15)",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
                          <Sparkles className="w-2.5 h-2.5 text-white" />
                        </div>
                        <span className="text-[9px] text-rose-400 font-semibold">Strategic Summary</span>
                      </div>
                      <p className="text-[9.5px] text-zinc-400 leading-relaxed">
                        Revenue gap from deal slippage + APAC. Sales execution improving. Line 2 needs immediate attention. Supply chain stable.
                      </p>
                    </div>
                    <button className="w-full py-2.5 text-[9px] font-semibold text-white rounded-xl"
                      style={{ background: "linear-gradient(135deg,#e11d48,#fb7185)" }}
                    >
                      <FileText className="w-3 h-3 inline mr-1.5" />Generate Board Brief
                    </button>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
