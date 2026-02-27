"use client";
import {
  Calculator, Factory, Target, ShoppingCart, MessageCircle,
  CheckCircle, Sparkles, Zap, Send, Paperclip, ShieldCheck,
  AlertTriangle, PiggyBank, PieChart, Lock,
} from "lucide-react";

/* ── Shared light terminal card ── */
function TerminalCard({ title, tabs, activeTab, statusBadge, children }) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "#ffffff",
        border: "1px solid rgba(0,0,0,0.08)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
      }}
    >
      {/* Chrome bar */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b border-black/[0.06]"
        style={{ background: "linear-gradient(180deg,#fafaf9,#f5f4f2)" }}
      >
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          </div>
          {/* Tab pills */}
          {tabs && (
            <div className="flex items-center gap-1 ml-2 p-0.5 bg-black/[0.03] rounded-lg">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  className={`px-2.5 py-1 text-[9px] rounded font-medium transition-colors ${
                    i === 0
                      ? "text-amber-600 bg-amber-500/[0.1]"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}
          {title && (
            <span className="text-[10px] text-gray-400 font-mono ml-2">{title}</span>
          )}
        </div>
        {statusBadge && statusBadge}
      </div>
      {/* Body */}
      <div className="p-4" style={{ background: "rgba(252,251,249,0.6)" }}>
        {children}
      </div>
    </div>
  );
}

/* ── Shared KPI cell ── */
function KpiCell({ label, val, valCls = "text-gray-800", sub, subCls = "text-gray-400", tinted }) {
  return (
    <div
      className="p-3 rounded-xl"
      style={{
        background: tinted ? tinted.bg : "rgba(255,255,255,0.7)",
        border: tinted ? `1px solid ${tinted.border}` : "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div className="text-[7.5px] text-gray-400 font-mono tracking-wider mb-1">{label}</div>
      <div className={`text-[18px] font-bold leading-tight ${valCls}`}>{val}</div>
      {sub && <div className={`text-[8px] mt-0.5 ${subCls}`}>{sub}</div>}
    </div>
  );
}

/* ── Shared AI card ── */
function AiCard({ icon, iconBg, label, conf, confCls = "text-emerald-600", confBg = "rgba(16,185,129,0.08)", children }) {
  return (
    <div
      className="p-3.5 rounded-xl"
      style={{
        background: "rgba(245,158,11,0.05)",
        border: "1px solid rgba(245,158,11,0.12)",
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <div
          className="w-5 h-5 rounded-lg flex items-center justify-center"
          style={{ background: iconBg }}
        >
          {icon}
        </div>
        <span className="text-[9px] font-semibold text-amber-600">{label}</span>
        {conf && (
          <span
            className={`ml-auto flex items-center gap-1 px-1.5 py-0.5 text-[7.5px] rounded ${confCls}`}
            style={{ background: confBg }}
          >
            <ShieldCheck className="w-2.5 h-2.5" />{conf}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

export default function AnalyticsCapabilities() {
  return (
    <section
      id="capabilities"
      className="py-32 md:py-48 relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div className="absolute inset-0 mesh-bg opacity-10" />
      <div className="orb w-[600px] h-[500px] bg-amber-500/[0.04]" style={{ top: "5%", left: "10%" }} />
      <div className="orb w-[400px] h-[350px] bg-orange-500/[0.03]" style={{ bottom: "10%", right: "15%" }} />

      <div className="relative max-w-6xl mx-auto px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6 r-up">
            <span className="text-[11px] text-amber-600 font-mono tracking-[0.2em]">04</span>
            <div className="w-8 h-px bg-amber-500/40" />
            <span className="text-[11px] text-gray-400 font-light tracking-[0.2em] uppercase">Intelligence Modules</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl mb-6 r-up">
            Explanation Across{" "}
            <span className="text-gradient-amber">Every Domain</span>
          </h2>
          <p className="text-xl text-gray-400 font-light r-up">
            Purpose-built intelligence for finance, operations, sales, and procurement.
          </p>
        </div>

        {/* ── CFO ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Text */}
          <div className="r-left">
            <div className="flex items-center gap-2.5 mb-5">
              <Calculator className="w-5 h-5 text-amber-500" />
              <span className="text-[10px] text-amber-600 font-mono tracking-[0.18em] uppercase">CFO Intelligence</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 leading-tight">
              Variance{" "}
              <span className="text-gradient-amber">Explanation</span>
            </h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">
              Automatically explains revenue variance, cost and margin shifts, and budget
              deviations with narrative explanations and full source lineage.
            </p>
            <div className="space-y-2.5">
              {["Revenue variance decomposition", "Cost driver identification", "Board-ready explanations"].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-gray-500 font-light">
                  <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />{item}
                </div>
              ))}
            </div>
          </div>
          {/* Right: Card */}
          <div className="r-right">
            <TerminalCard
              tabs={["Variance", "Trends", "Forecast"]}
              statusBadge={null}
            >
              <div className="grid grid-cols-3 gap-2 mb-3">
                <KpiCell label="TARGET" val="68.5%" sub="Planned margin" />
                <KpiCell label="ACTUAL" val="64.2%" sub="Achieved margin" />
                <KpiCell
                  label="GAP" val="-4.3%" valCls="text-red-500" sub="Below target" subCls="text-red-400"
                  tinted={{ bg: "rgba(239,68,68,0.05)", border: "rgba(239,68,68,0.12)" }}
                />
              </div>
              <AiCard
                icon={<Sparkles className="w-2.5 h-2.5 text-white" />}
                iconBg="linear-gradient(135deg,#f59e0b,#f97316)"
                label="AI Analysis"
                conf="96%"
              >
                <p className="text-[9.5px] text-gray-600 leading-relaxed">
                  Margin compression driven by:{" "}
                  <span className="text-amber-600 font-medium">(1)</span> Raw material cost +8%,{" "}
                  <span className="text-amber-600 font-medium">(2)</span> Mix shift to lower-margin SKUs,{" "}
                  <span className="text-amber-600 font-medium">(3)</span> EMEA promotional discounting.
                </p>
              </AiCard>
            </TerminalCard>
          </div>
        </div>

        {/* ── Operations ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Card */}
          <div className="r-left order-2 lg:order-1">
            <TerminalCard
              title="Operations • Line 3"
              statusBadge={
                <span className="flex items-center gap-1.5 px-2 py-1 text-[8px] text-red-500 bg-red-500/[0.07] rounded-full border border-red-500/[0.15]">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 soft-pulse" />Alert Active
                </span>
              }
            >
              {/* Mini bar chart */}
              <div className="p-3 rounded-xl bg-white/70 border border-black/[0.05] mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[8px] text-gray-400 font-mono">Units/hour</span>
                  <span className="text-[8px] text-red-500 font-mono">↓ 32% from baseline</span>
                </div>
                <div className="flex items-end gap-1.5 h-14">
                  {[
                    ["78%","bg-cyan-400/60"],["82%","bg-cyan-400/60"],["80%","bg-cyan-400/60"],
                    ["58%","bg-amber-400"],["54%","bg-amber-400"],
                    ["44%","bg-red-500"],["41%","bg-red-400/70"],["38%","bg-red-400/60"],
                  ].map(([h, cls], i) => (
                    <div key={i} className={`flex-1 ${cls} rounded-t`} style={{ height: h }} />
                  ))}
                </div>
              </div>
              {/* Root cause */}
              <div className="p-3.5 rounded-xl"
                style={{
                  background: "rgba(6,182,212,0.05)",
                  border: "1px solid rgba(6,182,212,0.12)",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-cyan-400 to-sky-500 flex items-center justify-center">
                    <Zap className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span className="text-[9px] text-cyan-600 font-semibold">Root Cause Identified</span>
                  <span className="ml-auto px-1.5 py-0.5 text-[7.5px] text-emerald-600 bg-emerald-500/[0.08] rounded font-mono">
                    94% conf.
                  </span>
                </div>
                <p className="text-[9.5px] text-gray-600 leading-relaxed">
                  Throughput dropped <strong>32%</strong> starting Tuesday 14:00. Correlated with{" "}
                  <span className="text-cyan-600 font-medium">bearing temperature anomaly</span> on Unit 3B.
                </p>
              </div>
            </TerminalCard>
          </div>
          {/* Right: Text */}
          <div className="r-right order-1 lg:order-2">
            <div className="flex items-center gap-2.5 mb-5">
              <Factory className="w-5 h-5 text-cyan-500" />
              <span className="text-[10px] text-cyan-600 font-mono tracking-[0.18em] uppercase">Operations Intelligence</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 leading-tight">
              Performance{" "}
              <span className="text-gradient-cyan">Insight</span>
            </h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">
              Explains operational changes across throughput, efficiency, utilization, and quality
              metrics without black-box forecasting.
            </p>
            <div className="space-y-2.5">
              {["Anomaly detection with explanation", "Cross-system correlation", "Actionable recommendations"].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-gray-500 font-light">
                  <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0" />{item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Sales ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Text */}
          <div className="r-left">
            <div className="flex items-center gap-2.5 mb-5">
              <Target className="w-5 h-5 text-violet-500" />
              <span className="text-[10px] text-violet-600 font-mono tracking-[0.18em] uppercase">Sales Intelligence</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 leading-tight">
              Performance{" "}
              <span className="text-gradient-violet">Diagnosis</span>
            </h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">
              Explains why deals accelerated or stalled, conversion rates shifted, and pipelines
              expanded or contracted.
            </p>
            <div className="space-y-2.5">
              {["Win/loss pattern analysis", "Pipeline health diagnosis", "Rep performance factors"].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-gray-500 font-light">
                  <CheckCircle className="w-4 h-4 text-violet-500 flex-shrink-0" />{item}
                </div>
              ))}
            </div>
          </div>
          {/* Right: Card */}
          <div className="r-right">
            <TerminalCard
              tabs={["Win Rate", "Pipeline", "Reps"]}
              statusBadge={
                <span className="flex items-center gap-1.5 px-2 py-1 text-[8px] text-emerald-600 bg-emerald-500/[0.07] rounded-full border border-emerald-500/[0.15]">
                  <CheckCircle className="w-3 h-3" />+7pp
                </span>
              }
            >
              <div className="grid grid-cols-2 gap-2.5 mb-3">
                <KpiCell label="Q2 WIN RATE" val="34%" sub="Previous quarter" />
                <KpiCell
                  label="Q3 WIN RATE" val="41%" valCls="text-emerald-600" sub="Current quarter" subCls="text-emerald-500"
                  tinted={{ bg: "rgba(16,185,129,0.05)", border: "rgba(16,185,129,0.12)" }}
                />
              </div>
              {/* Win/loss bars */}
              <div className="mb-3">
                {[["34%", "bg-gray-300", "Q2"], ["41%", "bg-emerald-400", "Q3"]].map(([w, cls, lbl]) => (
                  <div key={lbl} className="flex items-center gap-2 mb-1.5">
                    <span className="text-[8px] text-gray-400 w-4">{lbl}</span>
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full ${cls} rounded-full`} style={{ width: w }} />
                    </div>
                    <span className="text-[8px] text-gray-500 w-5">{w}</span>
                  </div>
                ))}
              </div>
              {/* Why improved */}
              <div className="p-3.5 rounded-xl"
                style={{
                  background: "rgba(139,92,246,0.05)",
                  border: "1px solid rgba(139,92,246,0.12)",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center">
                    <Sparkles className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span className="text-[9px] text-violet-600 font-semibold">Why Win Rate Improved</span>
                </div>
                <div className="space-y-1 text-[9.5px] text-gray-600">
                  <div className="flex items-start gap-1.5"><span className="text-violet-500 font-bold">1.</span><strong className="text-gray-800">New demo framework</strong> +12pp where used</div>
                  <div className="flex items-start gap-1.5"><span className="text-violet-500 font-bold">2.</span><strong className="text-gray-800">Earlier SE involvement</strong> -18% close time</div>
                  <div className="flex items-start gap-1.5"><span className="text-violet-500 font-bold">3.</span><strong className="text-gray-800">Competitor gap</strong> in security features</div>
                </div>
              </div>
            </TerminalCard>
          </div>
        </div>

        {/* ── Procurement ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Card */}
          <div className="r-left order-2 lg:order-1">
            <TerminalCard
              tabs={["Alerts", "Vendors", "Contracts"]}
              statusBadge={
                <span className="flex items-center gap-1.5 px-2 py-1 text-[8px] text-red-500 bg-red-500/[0.07] rounded-full border border-red-500/[0.15]">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />2 Active
                </span>
              }
            >
              <div className="space-y-2 mb-3">
                <div className="p-3 rounded-xl"
                  style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.12)" }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                      <span className="text-[9px] text-red-600 font-semibold">Price Anomaly</span>
                    </div>
                    <span className="text-[8px] text-red-500 font-mono">+23% vs benchmark</span>
                  </div>
                  <p className="text-[8.5px] text-gray-400">TechSupply Inc • Cloud Services • $847K</p>
                </div>
                <div className="p-3 rounded-xl"
                  style={{ background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.12)" }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <PieChart className="w-3.5 h-3.5 text-amber-500" />
                      <span className="text-[9px] text-amber-600 font-semibold">Concentration Risk</span>
                    </div>
                    <span className="text-[8px] text-amber-500 font-mono">67% single vendor</span>
                  </div>
                  <p className="text-[8.5px] text-gray-400">AWS at 67% of cloud spend</p>
                </div>
              </div>
              <div className="p-3.5 rounded-xl"
                style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.12)" }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                    <PiggyBank className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span className="text-[9px] text-emerald-600 font-semibold">Savings Opportunity</span>
                </div>
                <p className="text-[9.5px] text-gray-600">
                  <strong className="text-gray-800">$1.2M potential</strong> via renegotiation + consolidation
                </p>
              </div>
            </TerminalCard>
          </div>
          {/* Right: Text */}
          <div className="r-right order-1 lg:order-2">
            <div className="flex items-center gap-2.5 mb-5">
              <ShoppingCart className="w-5 h-5 text-emerald-500" />
              <span className="text-[10px] text-emerald-600 font-mono tracking-[0.18em] uppercase">Procurement Intelligence</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 leading-tight">
              Spend{" "}
              <span className="text-gradient-emerald">Analysis</span>
            </h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">
              Detects cost leakage, vendor anomalies, spend concentration risks, and pricing
              irregularities with defensible explanations.
            </p>
            <div className="space-y-2.5">
              {["Anomaly detection with context", "Vendor risk assessment", "Savings opportunity identification"].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-gray-500 font-light">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />{item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Executive Q&A ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="r-left">
            <div className="flex items-center gap-2.5 mb-5">
              <MessageCircle className="w-5 h-5 text-rose-500" />
              <span className="text-[10px] text-rose-600 font-mono tracking-[0.18em] uppercase">Executive Intelligence</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 leading-tight">
              Natural Language{" "}
              <span className="text-gradient-rose">Q&amp;A</span>
            </h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">
              Leaders ask questions in plain English across multiple databases and receive
              structured answers with reasoning and data references.
            </p>
            <div className="space-y-2.5">
              {["Cross-database reasoning", "Structured, defensible answers", "Ad-hoc decision support"].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-gray-500 font-light">
                  <CheckCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />{item}
                </div>
              ))}
            </div>
          </div>
          {/* Right: Chat card */}
          <div className="r-right">
            <TerminalCard
              statusBadge={
                <span className="flex items-center gap-1.5 px-2 py-1 text-[8px] text-emerald-600 bg-emerald-500/[0.07] rounded-full border border-emerald-500/[0.15]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 soft-pulse" />3 sources
                </span>
              }
            >
              <div className="space-y-3 mb-3">
                {/* User message */}
                <div className="flex gap-2.5">
                  <div className="w-6 h-6 rounded bg-gray-200 flex items-center justify-center text-[8px] font-bold text-gray-600 flex-shrink-0">JD</div>
                  <div className="p-3 rounded-xl bg-white border border-black/[0.06] max-w-[85%]">
                    <p className="text-[10px] text-gray-700">Why did we miss EBITDA target last quarter, and what is the outlook for Q4?</p>
                  </div>
                </div>
                {/* AI response */}
                <div className="flex gap-2.5">
                  <div className="w-6 h-6 rounded bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="p-3 rounded-xl"
                      style={{ background: "rgba(251,113,133,0.06)", border: "1px solid rgba(251,113,133,0.12)" }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[8.5px] text-rose-600 font-semibold">Analysis complete</span>
                        <span className="flex items-center gap-0.5 px-1.5 py-0.5 text-[7px] text-emerald-600 bg-emerald-500/[0.08] rounded">
                          <ShieldCheck className="w-2 h-2" />Verified
                        </span>
                      </div>
                      <p className="text-[9px] text-gray-700 font-medium mb-2">
                        Q3 EBITDA missed by $4.2M (target: $28M, actual: $23.8M):
                      </p>
                      <div className="space-y-1 text-[9px] text-gray-600">
                        <div className="flex items-start gap-1.5"><span className="text-rose-500 font-bold">1.</span>Revenue shortfall (-$6.4M) from deal slippage + APAC</div>
                        <div className="flex items-start gap-1.5"><span className="text-rose-500 font-bold">2.</span>Margin compression (-4.3pp) from raw material costs</div>
                        <div className="flex items-start gap-1.5"><span className="text-rose-500 font-bold">3.</span>Partially offset by OpEx underspend (+$2.2M)</div>
                      </div>
                      <div className="mt-2 p-2 rounded-lg"
                        style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.1)" }}
                      >
                        <p className="text-[9px] text-emerald-700">
                          <strong>Q4 Outlook:</strong> $8.1M slipped deals closing. 94% confidence on revised target.
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-black/[0.04]">
                        {["NetSuite", "Salesforce", "Budget Model"].map((s, i) => (
                          <span key={s} className={`px-1.5 py-0.5 text-[7px] rounded ${
                            i < 2 ? "text-blue-600 bg-blue-500/[0.08]" : "text-gray-400 bg-black/[0.03]"
                          }`}>{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Input bar */}
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-black/[0.07]">
                <Paperclip className="w-3.5 h-3.5 text-gray-300" />
                <input
                  type="text"
                  placeholder="Ask a follow-up question..."
                  className="flex-1 bg-transparent text-[10px] text-gray-600 placeholder-gray-300 outline-none"
                />
                <button className="p-1.5 rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 text-white">
                  <Send className="w-3 h-3" />
                </button>
              </div>
            </TerminalCard>
          </div>
        </div>

      </div>
    </section>
  );
}
