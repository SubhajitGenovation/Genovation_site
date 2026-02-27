"use client";
import { useState } from "react";
import {
  Calculator, Factory, Target, ShoppingCart, Truck, Crown,
  Lock, Search, Sparkles, TrendingDown, PieChart, GitBranch,
  Calendar, BarChart3, Activity, Gauge, AlertTriangle,
  Thermometer, RefreshCw, Globe, Users, Briefcase,
  ChevronRight, Download, Share2, ShieldCheck, Zap, Ticket,
} from "lucide-react";

const TABS = [
  { id: "cfo",         label: "CFO / Finance",     icon: <Calculator className="w-3.5 h-3.5" /> },
  { id: "mfg",         label: "Manufacturing",     icon: <Factory className="w-3.5 h-3.5" /> },
  { id: "sales",       label: "Sales & Revenue",   icon: <Target className="w-3.5 h-3.5" /> },
  { id: "procurement", label: "Procurement",       icon: <ShoppingCart className="w-3.5 h-3.5" /> },
  { id: "supply",      label: "Supply Chain",      icon: <Truck className="w-3.5 h-3.5" /> },
  { id: "exec",        label: "Executive / Board", icon: <Crown className="w-3.5 h-3.5" /> },
];

const URL_PATHS = {
  cfo:         "/analytics/cfo/variance",
  mfg:         "/analytics/manufacturing/plant-a",
  sales:       "/analytics/sales/pipeline",
  procurement: "/analytics/procurement/spend-cube",
  supply:      "/analytics/supply-chain/disruptions",
  exec:        "/analytics/executive/strategic-summary",
};

export default function AnalyticsDashboard() {
  const [activeTab, setActiveTab] = useState("cfo");

  return (
    <section className="py-32 md:py-44 relative overflow-hidden" id="solution"
      style={{ background: "var(--bg)" }}
    >
      <div className="orb w-[900px] h-[800px] bg-amber-500/[0.04]" style={{ top: "-5%", left: "-10%" }} />
      <div className="orb w-[600px] h-[500px] bg-orange-500/[0.03]" style={{ bottom: "0%", right: "-5%" }} />

      <div className="relative max-w-[1300px] mx-auto px-6">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-6 r-up">
            <span className="text-[11px] text-amber-600 font-mono tracking-[0.2em]">03</span>
            <div className="w-8 h-px bg-amber-500/40" />
            <span className="text-[11px] text-gray-400 font-light tracking-[0.2em] uppercase">Live Dashboards</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl mb-6 r-up">
            Decision Intelligence{" "}
            <span className="text-gradient-amber">in Action</span>
          </h2>
          <p className="text-lg text-gray-500 font-light r-up">
            Purpose-built dashboards for every function. Each one explains the{" "}
            <em>why</em> behind the numbers.
          </p>
        </div>

        {/* ── Tab Bar — light pill style matching screenshot ── */}
        <div className="flex justify-center mb-8 r-up">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-black/[0.04] border border-black/[0.06]">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-white text-amber-600 shadow-sm border border-amber-500/[0.2]"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <span className={activeTab === tab.id ? "text-amber-500" : "text-gray-400"}>
                  {tab.icon}
                </span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Dashboard Frame — dark macOS window ── */}
        <div className="r-scale rounded-[18px] overflow-hidden shadow-2xl"
          style={{
            background: "#0e0e10",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 32px 64px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.04)",
          }}
        >
          {/* macOS Chrome */}
          <div className="flex items-center justify-between px-5 py-3"
            style={{
              background: "linear-gradient(180deg,#1c1c20,#161619)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              {/* URL bar */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  minWidth: "280px",
                }}
              >
                <Lock className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                <span className="text-[10px] font-mono text-zinc-400">app.genovation.ai</span>
                <span className="text-[10px] font-mono text-zinc-600">{URL_PATHS[activeTab]}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {/* Search */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <Search className="w-3 h-3 text-zinc-600" />
                <span className="text-[9px] text-zinc-600 font-mono">⌘K</span>
              </div>
              {/* Ask AI button — amber gradient matching screenshot */}
              <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-white text-[10px] font-semibold"
                style={{
                  background: "linear-gradient(135deg,#d97706,#f59e0b)",
                  boxShadow: "0 2px 8px rgba(245,158,11,0.3)",
                }}
              >
                <Sparkles className="w-3 h-3" />
                Ask AI
              </button>
              {/* Avatar */}
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-[9px] font-bold">
                JD
              </div>
            </div>
          </div>

          {/* Panel Content */}
          {activeTab === "cfo"         && <CFOPanel />}
          {activeTab === "mfg"         && <MfgPanel />}
          {activeTab === "sales"       && <SalesPanel />}
          {activeTab === "procurement" && <ProcurementPanel />}
          {activeTab === "supply"      && <SupplyPanel />}
          {activeTab === "exec"        && <ExecPanel />}
        </div>
      </div>
    </section>
  );
}

/* ── Shared sidebar item ── */
function SbItem({ icon, label, active, color }) {
  return (
    <div className={`flex items-center gap-2.5 px-3 py-2 rounded-lg cursor-pointer transition-all ${
      active
        ? "text-white"
        : "text-zinc-600 hover:text-zinc-400"
    }`}
      style={active ? {
        background: color ? `${color}18` : "rgba(255,255,255,0.06)",
        borderLeft: `2px solid ${color || "#f59e0b"}`,
      } : {}}
    >
      {icon}
      <span className="text-[10.5px] font-medium">{label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────
   CFO PANEL — matches screenshot exactly
───────────────────────────────────────── */
function CFOPanel() {
  return (
    <div className="flex" style={{ minHeight: "680px" }}>
      {/* Sidebar */}
      <div className="w-52 flex-shrink-0 flex flex-col"
        style={{
          background: "linear-gradient(180deg,#111113,#0e0e10)",
          borderRight: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-white/[0.05]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/[0.15] flex items-center justify-center">
              <Calculator className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <div className="text-[11px] text-white font-semibold">CFO Dashboard</div>
              <div className="text-[9px] text-zinc-500 mt-0.5">Finance Intelligence</div>
            </div>
          </div>
        </div>

        <div className="p-3 flex-1">
          {/* Analyses */}
          <div className="text-[8px] text-zinc-600 font-mono uppercase tracking-[0.18em] mb-2 px-2">Analyses</div>
          <div className="space-y-0.5">
            <SbItem icon={<TrendingDown className="w-3.5 h-3.5 text-amber-400" />} label="Revenue Variance" active color="#f59e0b" />
            <SbItem icon={<PieChart className="w-3.5 h-3.5" />}    label="Margin Analysis" />
            <SbItem icon={<GitBranch className="w-3.5 h-3.5" />}   label="P&L Waterfall" />
            <SbItem icon={<Calendar className="w-3.5 h-3.5" />}    label="Budget vs Actual" />
            <SbItem icon={<BarChart3 className="w-3.5 h-3.5" />}   label="Cash Flow" />
          </div>

          <div className="h-px bg-white/[0.05] my-4" />

          {/* Connected Sources */}
          <div className="text-[8px] text-zinc-600 font-mono uppercase tracking-[0.18em] mb-3 px-2">Connected Sources</div>
          <div className="space-y-2.5 px-2">
            {[
              ["NetSuite",   "34.2k rows"],
              ["Salesforce", "12.4k rows"],
              ["Snowflake",  "847k rows"],
            ].map(([src, rows]) => (
              <div key={src} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span className="text-[9.5px] text-zinc-400">{src}</span>
                <span className="text-[8px] text-zinc-700 ml-auto font-mono">{rows}</span>
              </div>
            ))}
          </div>

          {/* Last sync */}
          <div className="mt-5 mx-2 p-2.5 rounded-xl"
            style={{
              background: "rgba(16,185,129,0.06)",
              border: "1px solid rgba(16,185,129,0.1)",
            }}
          >
            <div className="flex items-center gap-1.5 text-[8.5px] text-emerald-400">
              <RefreshCw className="w-3 h-3" />
              Last sync: 4 min ago
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto"
        style={{ background: "linear-gradient(180deg,#111113,#0e0e10)" }}
      >
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-[9px] text-zinc-600 mb-2 font-mono">
          <span>CFO Insights</span>
          <ChevronRight className="w-3 h-3" />
          <span>Q3 2024</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-amber-400/70">Revenue Variance</span>
        </div>

        {/* Title Row */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h3 className="text-[18px] font-semibold text-white tracking-tight">
              Revenue Variance Explained
            </h3>
            {/* Verified badge */}
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] text-emerald-400 font-medium"
              style={{
                background: "rgba(16,185,129,0.1)",
                border: "1px solid rgba(16,185,129,0.2)",
              }}
            >
              <ShieldCheck className="w-3 h-3" />Verified
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[10px] text-zinc-300"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Download className="w-3 h-3" />Export
            </button>
            <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[10px] text-white font-semibold"
              style={{ background: "linear-gradient(135deg,#d97706,#f59e0b)" }}
            >
              <Share2 className="w-3 h-3" />Share
            </button>
          </div>
        </div>

        {/* KPI Cards — matching screenshot: TARGET / ACTUAL / VARIANCE / CONFIDENCE */}
        <div className="grid grid-cols-4 gap-3 mb-5">
          {/* TARGET */}
          <div className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="text-[8px] text-zinc-500 font-mono tracking-widest mb-2">TARGET</div>
            <div className="text-[26px] font-bold text-white tracking-tighter leading-none mb-1">$53.6M</div>
            <div className="text-[9px] text-zinc-600">Q3 2024 Plan</div>
            {/* Subtle sparkline */}
            <svg viewBox="0 0 80 20" className="w-full mt-2 opacity-30">
              <polyline points="0,16 20,12 40,14 60,10 80,8" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
            </svg>
          </div>
          {/* ACTUAL */}
          <div className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="text-[8px] text-zinc-500 font-mono tracking-widest mb-2">ACTUAL</div>
            <div className="text-[26px] font-bold text-white tracking-tighter leading-none mb-1">$47.2M</div>
            <div className="text-[9px] text-zinc-600">Q3 Result</div>
            <svg viewBox="0 0 80 20" className="w-full mt-2 opacity-30">
              <polyline points="0,14 20,10 40,16 60,8 80,14" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
            </svg>
          </div>
          {/* VARIANCE — red tinted */}
          <div className="p-4 rounded-xl" style={{ background: "rgba(239,68,68,0.07)", border: "1px solid rgba(239,68,68,0.18)" }}>
            <div className="text-[8px] text-zinc-500 font-mono tracking-widest mb-2">VARIANCE</div>
            <div className="text-[26px] font-bold text-red-400 tracking-tighter leading-none mb-1">-$6.4M</div>
            <div className="text-[9px] text-red-400/60 font-medium">-12% vs plan</div>
            {/* Small dial graphic */}
            <svg viewBox="0 0 40 22" className="w-10 mt-1 opacity-60">
              <path d="M4 20 A16 16 0 0 1 36 20" fill="none" stroke="rgba(239,68,68,0.2)" strokeWidth="3" />
              <path d="M4 20 A16 16 0 0 1 14 7" fill="none" stroke="rgba(239,68,68,0.8)" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
          {/* CONFIDENCE — emerald tinted */}
          <div className="p-4 rounded-xl" style={{ background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.18)" }}>
            <div className="text-[8px] text-zinc-500 font-mono tracking-widest mb-2">CONFIDENCE</div>
            <div className="text-[26px] font-bold text-emerald-400 tracking-tighter leading-none mb-1">98%</div>
            <div className="text-[9px] text-emerald-400/60 font-medium">High confidence</div>
            {/* Circular gauge */}
            <svg viewBox="0 0 40 40" className="w-8 mt-1">
              <circle cx="20" cy="20" r="14" fill="none" stroke="rgba(16,185,129,0.1)" strokeWidth="3" />
              <circle cx="20" cy="20" r="14" fill="none" stroke="rgba(16,185,129,0.7)" strokeWidth="3"
                strokeDasharray={`${0.98 * 87.96} 87.96`}
                strokeDashoffset="22"
                strokeLinecap="round"
                transform="rotate(-90 20 20)"
              />
            </svg>
          </div>
        </div>

        {/* AI Explanation Banner — amber gradient matching screenshot */}
        <div className="p-4 rounded-xl mb-5"
          style={{
            background: "linear-gradient(135deg,rgba(245,158,11,0.1) 0%,rgba(249,115,22,0.06) 100%)",
            border: "1px solid rgba(245,158,11,0.2)",
          }}
        >
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-[10px] text-amber-400 font-semibold">AI-Generated Explanation</span>
                <span className="px-2 py-0.5 text-[8px] text-zinc-500 rounded-full font-mono"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  3 factors
                </span>
                <span className="ml-auto flex items-center gap-1 px-2 py-0.5 text-[8px] text-emerald-400 rounded-full font-mono"
                  style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.15)" }}
                >
                  <ShieldCheck className="w-2.5 h-2.5" />98% conf.
                </span>
              </div>
              <p className="text-[11.5px] text-zinc-300 leading-[1.8] font-light">
                Q3 revenue missed target by{" "}
                <span className="text-red-400 font-semibold">$6.4M (-12%)</span>.
                Three primary drivers identified:{" "}
                <span className="text-amber-300 font-semibold">Enterprise deal slippage</span>{" "}
                (-$2.1M, 3 deals delayed to Q4 due to legal review),{" "}
                <span className="text-amber-300 font-semibold">APAC underperformance</span>{" "}
                (-$2.8M, new competitor pressure in SG/AU markets), and{" "}
                <span className="text-amber-300 font-semibold">SMB churn spike</span>{" "}
                (-$1.5M, pricing sensitivity post-increase).
              </p>
            </div>
          </div>
        </div>

        {/* Waterfall + Factor Breakdown side by side */}
        <div className="grid grid-cols-2 gap-4 mb-4">

          {/* Variance Waterfall */}
          <div className="p-4 rounded-xl"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[9px] text-zinc-500 font-mono tracking-widest">VARIANCE WATERFALL</span>
              <span className="text-[8px] text-zinc-700 font-mono">Q3 FY24</span>
            </div>
            <svg viewBox="0 0 400 145" className="w-full">
              <defs>
                <linearGradient id="wG1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(156,163,175,0.6)" />
                  <stop offset="100%" stopColor="rgba(156,163,175,0.2)" />
                </linearGradient>
                <linearGradient id="wR1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(239,68,68,0.9)" />
                  <stop offset="100%" stopColor="rgba(220,38,38,0.5)" />
                </linearGradient>
                <linearGradient id="wA1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(234,179,8,0.9)" />
                  <stop offset="100%" stopColor="rgba(202,138,4,0.5)" />
                </linearGradient>
              </defs>
              {/* Target bar — gray */}
              <rect x="20"  y="15"  width="54" height="110" rx="6" fill="url(#wG1)" />
              <text x="47"  y="10"  textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="8" fontFamily="monospace" fontWeight="600">$53.6M</text>
              {/* Deals drop — red */}
              <rect x="100" y="15"  width="44" height="32" rx="5" fill="url(#wR1)" />
              <text x="122" y="60"  textAnchor="middle" fill="rgba(239,68,68,0.9)" fontSize="8" fontFamily="monospace" fontWeight="600">-$2.1M</text>
              {/* APAC drop */}
              <rect x="168" y="47"  width="44" height="44" rx="5" fill="url(#wR1)" />
              <text x="190" y="104" textAnchor="middle" fill="rgba(239,68,68,0.9)" fontSize="8" fontFamily="monospace" fontWeight="600">-$2.8M</text>
              {/* Churn drop */}
              <rect x="236" y="91"  width="44" height="24" rx="5" fill="url(#wR1)" opacity={0.7} />
              <text x="258" y="128" textAnchor="middle" fill="rgba(239,68,68,0.7)" fontSize="8" fontFamily="monospace" fontWeight="600">-$1.5M</text>
              {/* Actual — amber */}
              <rect x="314" y="20"  width="54" height="90" rx="6" fill="url(#wA1)" />
              <text x="341" y="10"  textAnchor="middle" fill="rgba(234,179,8,0.9)" fontSize="8" fontFamily="monospace" fontWeight="600">$47.2M</text>
              {/* Labels */}
              {["Target","Deals","APAC","Churn","Actual"].map((lbl, i) => (
                <text key={lbl} x={[47,122,190,258,341][i]} y="140"
                  textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="monospace"
                >
                  {lbl}
                </text>
              ))}
            </svg>
          </div>

          {/* Factor Breakdown */}
          <div className="rounded-xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="flex items-center justify-between px-4 py-3.5"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
            >
              <span className="text-[9px] text-zinc-500 font-mono tracking-widest">FACTOR BREAKDOWN</span>
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-red-500/70" />
                <span className="w-2 h-2 rounded-full bg-orange-500/70" />
                <span className="w-2 h-2 rounded-full bg-amber-500/70" />
              </div>
            </div>
            {[
              {
                icon: <Briefcase className="w-3.5 h-3.5 text-red-400" />,
                iconBg: "rgba(239,68,68,0.15)",
                title: "Enterprise Slippage",
                sub: "3 deals pushed to Q4 — legal review",
                val: "-$2.1M", pct: "33%", conf: "98%",
                confCls: "text-emerald-400",
                confBg: "rgba(16,185,129,0.12)",
              },
              {
                icon: <Globe className="w-3.5 h-3.5 text-orange-400" />,
                iconBg: "rgba(249,115,22,0.15)",
                title: "APAC Region",
                sub: "New competitor in SG/AU markets",
                val: "-$2.8M", pct: "44%", conf: "94%",
                confCls: "text-emerald-400",
                confBg: "rgba(16,185,129,0.12)",
              },
              {
                icon: <Users className="w-3.5 h-3.5 text-amber-400" />,
                iconBg: "rgba(245,158,11,0.15)",
                title: "SMB Churn",
                sub: "Pricing sensitivity post Q2 increase",
                val: "-$1.5M", pct: "23%", conf: "87%",
                confCls: "text-amber-400",
                confBg: "rgba(245,158,11,0.12)",
              },
            ].map((f) => (
              <div key={f.title} className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: f.iconBg }}
                >
                  {f.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10.5px] text-zinc-200 font-semibold">{f.title}</div>
                  <div className="text-[8.5px] text-zinc-600 mt-0.5">{f.sub}</div>
                </div>
                <div className="text-right">
                  <div className="text-[12px] text-red-400 font-bold font-mono">{f.val}</div>
                  <div className="text-[8px] text-zinc-600 mt-0.5">{f.pct}</div>
                </div>
                <span className={`px-2 py-1 text-[8px] font-mono rounded-lg ${f.confCls} flex-shrink-0`}
                  style={{ background: f.confBg }}
                >
                  {f.conf}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Logic Path footer bar — fixed (no map) */}
        <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-[9px]"
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <GitBranch className="w-3.5 h-3.5 text-zinc-600" />
          <span className="text-zinc-600 font-mono font-medium">Logic:</span>
          <span className="px-2.5 py-1 rounded-lg text-zinc-400 font-mono"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            $53.6M
          </span>
          <svg width="16" height="8" viewBox="0 0 16 8">
            <path d="M0 4h12M10 1l3 3-3 3" fill="none" stroke="rgba(113,113,122,0.5)" strokeWidth="1.5" />
          </svg>
          <span className="px-2.5 py-1 rounded-lg text-zinc-400 font-mono"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            $47.2M
          </span>
          <svg width="16" height="8" viewBox="0 0 16 8">
            <path d="M0 4h12M10 1l3 3-3 3" fill="none" stroke="rgba(113,113,122,0.5)" strokeWidth="1.5" />
          </svg>
          <span className="px-2.5 py-1 rounded-lg text-amber-400 font-mono font-medium"
            style={{
              background: "rgba(245,158,11,0.1)",
              border: "1px solid rgba(245,158,11,0.2)",
            }}
          >
            3 factors
          </span>
          <span className="ml-auto text-amber-400/70 font-mono cursor-pointer hover:text-amber-300 transition-colors">
            View full audit →
          </span>
        </div>
      </div>
    </div>
  );
}

/* Keep MfgPanel, SalesPanel, ProcurementPanel, SupplyPanel, ExecPanel same as before */
function MfgPanel() {
  return (
    <div className="flex" style={{ minHeight: "680px" }}>
      <div className="w-52 flex-shrink-0 flex flex-col"
        style={{ background: "linear-gradient(180deg,#111113,#0e0e10)", borderRight: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="p-4 border-b border-white/[0.05]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/[0.15] flex items-center justify-center">
              <Factory className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <div className="text-[11px] text-white font-semibold">Manufacturing</div>
              <div className="text-[9px] text-zinc-500 mt-0.5">Operations Intel</div>
            </div>
          </div>
        </div>
        <div className="p-3 flex-1">
          <div className="text-[8px] text-zinc-600 font-mono uppercase tracking-[0.18em] mb-2 px-2">Views</div>
          <div className="space-y-0.5">
            <SbItem icon={<Activity className="w-3.5 h-3.5 text-cyan-400" />} label="Plant Overview" active color="#06b6d4" />
            <SbItem icon={<Gauge className="w-3.5 h-3.5" />}         label="OEE Analysis" />
            <SbItem icon={<AlertTriangle className="w-3.5 h-3.5" />} label="Downtime Log" />
            <SbItem icon={<Thermometer className="w-3.5 h-3.5" />}   label="Quality Control" />
          </div>
        </div>
      </div>
      <div className="flex-1 p-6 overflow-auto" style={{ background: "linear-gradient(180deg,#111113,#0e0e10)" }}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-[9px] text-zinc-600 mb-1 font-mono">Manufacturing • Plant A</div>
            <div className="flex items-center gap-3">
              <h3 className="text-[18px] font-semibold text-white tracking-tight">Plant Overview</h3>
              <span className="flex items-center gap-1.5 px-2.5 py-1 text-[8px] text-red-400 rounded-full font-medium"
                style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.15)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 soft-pulse" />2 Alerts
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { line: "LINE 1", val: "847", oee: "OEE 92%", oeeCls: "text-emerald-400", pct: "92%", bar: "#10b981" },
            { line: "LINE 2", val: "412", oee: "OEE 48% ↓32%", oeeCls: "text-red-400", pct: "48%", bar: "#ef4444", border: "rgba(239,68,68,0.18)" },
            { line: "LINE 3", val: "791", oee: "OEE 88%", oeeCls: "text-emerald-400", pct: "88%", bar: "#10b981" },
          ].map((l) => (
            <div key={l.line} className="p-4 rounded-xl"
              style={{ background: l.border ? "rgba(239,68,68,0.06)" : "rgba(255,255,255,0.04)", border: `1px solid ${l.border || "rgba(255,255,255,0.07)"}` }}
            >
              <div className="text-[8px] text-zinc-500 font-mono tracking-widest mb-2">{l.line}</div>
              <div className="text-[22px] font-bold text-white tracking-tighter">{l.val} <span className="text-[10px] text-zinc-500 font-normal">u/hr</span></div>
              <div className="w-full h-2 bg-white/[0.05] rounded-full mt-2 overflow-hidden">
                <div className="h-full rounded-full" style={{ width: l.pct, background: l.bar }} />
              </div>
              <div className={`text-[9px] ${l.oeeCls} font-semibold mt-1.5`}>{l.oee}</div>
            </div>
          ))}
        </div>
        <div className="p-4 rounded-xl"
          style={{ background: "linear-gradient(135deg,rgba(6,182,212,0.08),rgba(6,182,212,0.02))", border: "1px solid rgba(6,182,212,0.15)" }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-[10px] text-cyan-400 font-semibold">Root Cause Identified</span>
            <span className="ml-auto px-2 py-0.5 text-[8px] text-emerald-400 rounded-lg font-mono"
              style={{ background: "rgba(16,185,129,0.1)" }}
            >94%</span>
          </div>
          <p className="text-[11px] text-zinc-300 leading-relaxed">
            Line 2 throughput dropped <strong>32%</strong> at 08:14 AM. Correlated with{" "}
            <span className="text-cyan-300 font-semibold">bearing temperature anomaly</span> on Unit 2B — sensor T-4021 exceeded 185°F.
          </p>
        </div>
      </div>
    </div>
  );
}

function SalesPanel() {
  return (
    <div className="flex" style={{ minHeight: "680px" }}>
      <div className="w-52 flex-shrink-0 flex flex-col"
        style={{ background: "linear-gradient(180deg,#111113,#0e0e10)", borderRight: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="p-4 border-b border-white/[0.05]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-violet-500/[0.15] flex items-center justify-center">
              <Target className="w-4 h-4 text-violet-400" />
            </div>
            <div>
              <div className="text-[11px] text-white font-semibold">Sales Intelligence</div>
              <div className="text-[9px] text-zinc-500 mt-0.5">Revenue Operations</div>
            </div>
          </div>
        </div>
        <div className="p-3 flex-1">
          <div className="text-[8px] text-zinc-600 font-mono uppercase tracking-[0.18em] mb-2 px-2">Views</div>
          <div className="space-y-0.5">
            <SbItem icon={<Activity className="w-3.5 h-3.5 text-violet-400" />} label="Pipeline Health" active color="#8b5cf6" />
            <SbItem icon={<TrendingDown className="w-3.5 h-3.5" />} label="Win/Loss" />
            <SbItem icon={<Users className="w-3.5 h-3.5" />} label="Rep Performance" />
          </div>
        </div>
      </div>
      <div className="flex-1 p-6 overflow-auto" style={{ background: "linear-gradient(180deg,#111113,#0e0e10)" }}>
        <h3 className="text-[18px] font-semibold text-white tracking-tight mb-6">Sales & Revenue Intelligence</h3>
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: "PIPELINE", val: "$24.8M", cls: "text-white" },
            { label: "WIN RATE", val: "41%", cls: "text-emerald-400", bg: "rgba(16,185,129,0.07)", border: "rgba(16,185,129,0.15)" },
            { label: "AT RISK",  val: "$3.2M", cls: "text-amber-400", bg: "rgba(245,158,11,0.07)", border: "rgba(245,158,11,0.15)" },
          ].map((k) => (
            <div key={k.label} className="p-4 rounded-xl"
              style={{ background: k.bg || "rgba(255,255,255,0.04)", border: `1px solid ${k.border || "rgba(255,255,255,0.07)"}` }}
            >
              <div className="text-[8px] text-zinc-500 font-mono tracking-widest mb-2">{k.label}</div>
              <div className={`text-[26px] font-bold tracking-tighter leading-none ${k.cls}`}>{k.val}</div>
            </div>
          ))}
        </div>
        <div className="p-4 rounded-xl"
          style={{ background: "linear-gradient(135deg,rgba(139,92,246,0.08),rgba(139,92,246,0.02))", border: "1px solid rgba(139,92,246,0.15)" }}
        >
          <div className="flex gap-3">
            <Sparkles className="w-5 h-5 text-violet-400 flex-shrink-0" />
            <div>
              <div className="text-[10px] text-violet-400 font-semibold mb-1.5">Win Rate Analysis</div>
              <p className="text-[11px] text-zinc-300 leading-relaxed">
                Win rate improved <span className="text-emerald-400 font-semibold">+7pp</span> — new demo framework (+12pp where used), earlier SE involvement (-18% cycle time), competitor gap in security features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProcurementPanel() {
  return (
    <div className="flex" style={{ minHeight: "680px" }}>
      <div className="w-52 flex-shrink-0 flex flex-col"
        style={{ background: "linear-gradient(180deg,#111113,#0e0e10)", borderRight: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="p-4 border-b border-white/[0.05]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/[0.15] flex items-center justify-center">
              <ShoppingCart className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <div className="text-[11px] text-white font-semibold">Procurement</div>
              <div className="text-[9px] text-zinc-500 mt-0.5">Spend Intelligence</div>
            </div>
          </div>
        </div>
        <div className="p-3 flex-1">
          <div className="text-[8px] text-zinc-600 font-mono uppercase tracking-[0.18em] mb-2 px-2">Views</div>
          <div className="space-y-0.5">
            <SbItem icon={<AlertTriangle className="w-3.5 h-3.5 text-emerald-400" />} label="Alerts" active color="#10b981" />
            <SbItem icon={<Users className="w-3.5 h-3.5" />} label="Vendors" />
          </div>
        </div>
      </div>
      <div className="flex-1 p-6 overflow-auto" style={{ background: "linear-gradient(180deg,#111113,#0e0e10)" }}>
        <h3 className="text-[18px] font-semibold text-white tracking-tight mb-6">Procurement Intelligence</h3>
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: "SPEND",       val: "$12.4M", cls: "text-white" },
            { label: "ALERTS",      val: "2",      cls: "text-red-400",     bg: "rgba(239,68,68,0.07)",   border: "rgba(239,68,68,0.15)" },
            { label: "SAVINGS OPP.",val: "$1.2M",  cls: "text-emerald-400", bg: "rgba(16,185,129,0.07)", border: "rgba(16,185,129,0.15)" },
          ].map((k) => (
            <div key={k.label} className="p-4 rounded-xl"
              style={{ background: k.bg || "rgba(255,255,255,0.04)", border: `1px solid ${k.border || "rgba(255,255,255,0.07)"}` }}
            >
              <div className="text-[8px] text-zinc-500 font-mono tracking-widest mb-2">{k.label}</div>
              <div className={`text-[26px] font-bold tracking-tighter leading-none ${k.cls}`}>{k.val}</div>
            </div>
          ))}
        </div>
        <div className="p-4 rounded-xl"
          style={{ background: "linear-gradient(135deg,rgba(16,185,129,0.08),rgba(16,185,129,0.02))", border: "1px solid rgba(16,185,129,0.15)" }}
        >
          <div className="flex gap-3">
            <Sparkles className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div>
              <div className="text-[10px] text-emerald-400 font-semibold mb-1.5">Spend Analysis</div>
              <p className="text-[11px] text-zinc-300 leading-relaxed">
                TechSupply Inc cloud services priced <span className="text-red-400 font-semibold">+23% above benchmark</span>. AWS at{" "}
                <span className="text-amber-300 font-semibold">67% of cloud spend</span>. Potential savings of{" "}
                <span className="text-emerald-400 font-semibold">$1.2M</span> via renegotiation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SupplyPanel() {
  return (
    <div className="flex" style={{ minHeight: "680px" }}>
      <div className="w-52 flex-shrink-0 flex flex-col"
        style={{ background: "linear-gradient(180deg,#111113,#0e0e10)", borderRight: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="p-4 border-b border-white/[0.05]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-500/[0.15] flex items-center justify-center">
              <Truck className="w-4 h-4 text-sky-400" />
            </div>
            <div>
              <div className="text-[11px] text-white font-semibold">Supply Chain</div>
              <div className="text-[9px] text-zinc-500 mt-0.5">Logistics Intel</div>
            </div>
          </div>
        </div>
        <div className="p-3 flex-1">
          <div className="text-[8px] text-zinc-600 font-mono uppercase tracking-[0.18em] mb-2 px-2">Views</div>
          <div className="space-y-0.5">
            <SbItem icon={<Activity className="w-3.5 h-3.5 text-sky-400" />} label="Disruptions" active color="#0ea5e9" />
            <SbItem icon={<Truck className="w-3.5 h-3.5" />} label="Shipments" />
          </div>
        </div>
      </div>
      <div className="flex-1 p-6 overflow-auto" style={{ background: "linear-gradient(180deg,#111113,#0e0e10)" }}>
        <h3 className="text-[18px] font-semibold text-white tracking-tight mb-6">Supply Chain Intelligence</h3>
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: "ON TIME",     val: "94%", cls: "text-emerald-400", bg: "rgba(16,185,129,0.07)", border: "rgba(16,185,129,0.15)" },
            { label: "DISRUPTIONS", val: "3",   cls: "text-amber-400",  bg: "rgba(245,158,11,0.07)", border: "rgba(245,158,11,0.15)" },
            { label: "RISK SCORE",  val: "Low", cls: "text-white" },
          ].map((k) => (
            <div key={k.label} className="p-4 rounded-xl"
              style={{ background: k.bg || "rgba(255,255,255,0.04)", border: `1px solid ${k.border || "rgba(255,255,255,0.07)"}` }}
            >
              <div className="text-[8px] text-zinc-500 font-mono tracking-widest mb-2">{k.label}</div>
              <div className={`text-[26px] font-bold tracking-tighter leading-none ${k.cls}`}>{k.val}</div>
            </div>
          ))}
        </div>
        <div className="p-4 rounded-xl"
          style={{ background: "linear-gradient(135deg,rgba(14,165,233,0.08),rgba(14,165,233,0.02))", border: "1px solid rgba(14,165,233,0.15)" }}
        >
          <div className="flex gap-3">
            <Sparkles className="w-5 h-5 text-sky-400 flex-shrink-0" />
            <div>
              <div className="text-[10px] text-sky-400 font-semibold mb-1.5">Disruption Analysis</div>
              <p className="text-[11px] text-zinc-300 leading-relaxed">
                3 active disruptions. Port congestion in APAC will delay <span className="text-amber-300 font-semibold">14 shipments</span> by 4–7 days. Alternative via Rotterdam: <span className="text-emerald-400 font-semibold">+$42K cost, -3 days</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExecPanel() {
  return (
    <div className="flex" style={{ minHeight: "680px" }}>
      <div className="w-52 flex-shrink-0 flex flex-col"
        style={{ background: "linear-gradient(180deg,#111113,#0e0e10)", borderRight: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="p-4 border-b border-white/[0.05]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-rose-500/[0.15] flex items-center justify-center">
              <Crown className="w-4 h-4 text-rose-400" />
            </div>
            <div>
              <div className="text-[11px] text-white font-semibold">Executive Board</div>
              <div className="text-[9px] text-zinc-500 mt-0.5">Strategic Summary</div>
            </div>
          </div>
        </div>
        <div className="p-3 flex-1">
          <div className="text-[8px] text-zinc-600 font-mono uppercase tracking-[0.18em] mb-2 px-2">Views</div>
          <div className="space-y-0.5">
            <SbItem icon={<BarChart3 className="w-3.5 h-3.5 text-rose-400" />} label="Strategic Summary" active color="#fb7185" />
            <SbItem icon={<GitBranch className="w-3.5 h-3.5" />} label="Board Brief" />
          </div>
        </div>
      </div>
      <div className="flex-1 p-6 overflow-auto" style={{ background: "linear-gradient(180deg,#111113,#0e0e10)" }}>
        <h3 className="text-[18px] font-semibold text-white tracking-tight mb-6">Executive Strategic Summary</h3>
        <div className="grid grid-cols-4 gap-3 mb-5">
          {[
            { label: "REVENUE", val: "-12%", cls: "text-red-400",     bg: "rgba(239,68,68,0.07)",   border: "rgba(239,68,68,0.15)" },
            { label: "WIN RATE",val: "+7pp", cls: "text-emerald-400", bg: "rgba(16,185,129,0.07)", border: "rgba(16,185,129,0.15)" },
            { label: "OEE",     val: "-4pp", cls: "text-amber-400",  bg: "rgba(245,158,11,0.07)", border: "rgba(245,158,11,0.15)" },
            { label: "CASH",    val: "OK",   cls: "text-white" },
          ].map((k) => (
            <div key={k.label} className="p-4 rounded-xl"
              style={{ background: k.bg || "rgba(255,255,255,0.04)", border: `1px solid ${k.border || "rgba(255,255,255,0.07)"}` }}
            >
              <div className="text-[8px] text-zinc-500 font-mono tracking-widest mb-2">{k.label}</div>
              <div className={`text-[24px] font-bold tracking-tighter leading-none ${k.cls}`}>{k.val}</div>
            </div>
          ))}
        </div>
        <div className="p-4 rounded-xl"
          style={{ background: "linear-gradient(135deg,rgba(251,113,133,0.08),rgba(251,113,133,0.02))", border: "1px solid rgba(251,113,133,0.15)" }}
        >
          <div className="flex gap-3">
            <Sparkles className="w-5 h-5 text-rose-400 flex-shrink-0" />
            <div>
              <div className="text-[10px] text-rose-400 font-semibold mb-1.5">Strategic Summary</div>
              <p className="text-[11px] text-zinc-300 leading-relaxed">
                Revenue gap from deal slippage + APAC pressure. Sales execution improving (+7pp win rate).{" "}
                <span className="text-red-400 font-semibold">Line 2 needs immediate attention</span>. Supply chain stable. Q4 outlook:{" "}
                <span className="text-emerald-400 font-semibold">$8.1M slipped deals closing</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}