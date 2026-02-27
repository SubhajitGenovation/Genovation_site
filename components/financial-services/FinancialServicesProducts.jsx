"use client";

import React, { useEffect } from "react";
import {
  MessageSquare, Search, Folder, BarChart2, Settings,
  Lock, ShieldCheck, FileText, Bookmark, TrendingUp,
  Receipt, AlertTriangle, PieChart, Bot, Database,
  Building2, ShieldAlert, FileCheck, Filter, Download,
  ScrollText, Brain, Eye,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────
   SHARED PRIMITIVES
───────────────────────────────────────────── */

function AppChrome({ title, right }) {
  return (
    <div className="app-chrome">
      <div className="app-dots flex gap-[7px]">
        <span /><span /><span />
      </div>
      <span className="app-title">{title}</span>
      {right && <div className="chrome-right">{right}</div>}
    </div>
  );
}

function AppStatus({ items }) {
  return (
    <div className="app-status">
      <div className="live" />
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span>·</span>}
          <span>{item}</span>
        </React.Fragment>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   UC1 — POLICY & COMPLIANCE
───────────────────────────────────────────── */

function UC1PolicyCompliance() {
  return (
    <section className="py-32 relative">
      <div
        className="orb w-[500px] h-[400px] bg-emerald-900/[0.03]"
        style={{ top: "5%", right: "10%" }}
      />
      <div className="relative max-w-6xl mx-auto px-8">
        <div className="mb-10">
          <span className="font-mono text-[10px] text-emerald-700/60 tracking-[0.25em] uppercase">
            Use Case 01
          </span>
          <h2 className="display-section text-4xl md:text-5xl text-gray-900 mt-3 mb-4 font-light">
            Policy &amp; Compliance Intelligence
          </h2>
          <p className="text-gray-500 font-light max-w-2xl">
            Natural-language Q&amp;A across governance documents with source-linked answers, gap
            detection, and audit trails.
          </p>
        </div>

        {/* APP FRAME */}
        <div className="app-frame r-up opacity-0 translate-y-[60px]" id="mock1">
          <AppChrome
            title="Mentis — Compliance Intelligence"
            right={
              <>
                <span className="badge-g flex items-center gap-1">
                  <Lock className="w-2.5 h-2.5" /> On-Premise
                </span>
                <span className="badge-g">JUDGE Active</span>
              </>
            }
          />
          <div className="app-layout">
            {/* NAV */}
            <div className="app-nav">
              <div className="nav-i act">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
              </div>
              <div className="nav-i"><Search className="w-3.5 h-3.5 text-gray-400" /></div>
              <div className="nav-i"><Folder className="w-3.5 h-3.5 text-gray-400" /></div>
              <div className="nav-i"><BarChart2 className="w-3.5 h-3.5 text-gray-400" /></div>
              <div className="nav-i"><Settings className="w-3.5 h-3.5 text-gray-400" /></div>
            </div>

            {/* MAIN CONTENT */}
            <div className="app-content" style={{ padding: "14px 16px", gap: "8px" }}>
              <div className="m-bubble m-user ac">
                Does our current AML framework satisfy DORA Article 15 requirements?
              </div>

              <div className="m-bubble m-ai ac" style={{ maxWidth: "100%" }}>
                <div className="mb-2">
                  Based on analysis of{" "}
                  <strong className="font-medium">2,847 governance documents</strong>, your AML
                  framework covers most of Art. 15 but has one critical gap:
                </div>

                {/* Compliance matrix */}
                <div className="grid grid-cols-3 gap-2 my-3">
                  <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-100 text-center">
                    <p className="text-[9px] text-emerald-700 font-mono mb-0.5">Art. 15.2a</p>
                    <p className="text-[8px] text-emerald-600">Transaction Monitoring</p>
                    <p className="text-[8px] text-emerald-700 font-medium mt-1">✓ Covered</p>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-100 text-center">
                    <p className="text-[9px] text-emerald-700 font-mono mb-0.5">Art. 15.3</p>
                    <p className="text-[8px] text-emerald-600">Third-Party Screening</p>
                    <p className="text-[8px] text-emerald-700 font-medium mt-1">✓ Covered</p>
                  </div>
                  <div className="p-2 rounded-lg bg-amber-50 border border-amber-200 text-center">
                    <p className="text-[9px] text-amber-700 font-mono mb-0.5">Art. 15.4</p>
                    <p className="text-[8px] text-amber-600">Resilience Testing</p>
                    <p className="text-[8px] text-amber-700 font-medium mt-1">⚠ Gap Found</p>
                  </div>
                </div>

                <div className="doc-hl text-[10px] text-gray-600 leading-relaxed">
                  <strong className="font-medium" style={{ color: "#92400e" }}>Gap:</strong> Digital
                  operational resilience testing under Art. 15.4 requires expanded ICT risk scenarios
                  not present in the current AML-Policy-v4.2 framework. Recommend updating §3.1 to
                  include quarterly scenario-based testing.
                </div>
              </div>

              {/* Sources */}
              <div className="flex flex-wrap gap-1.5 ac">
                {[
                  "AML-Policy-v4.2 §3.1",
                  "DORA-Compliance-Guide §15",
                  "Board-Memo-Q3-2024",
                  "ICT-Risk-Framework v2.1",
                ].map((s) => (
                  <span key={s} className="src-pill">
                    <FileText className="w-2.5 h-2.5" /> {s}
                  </span>
                ))}
              </div>

              {/* Verification row */}
              <div className="flex items-center gap-3 ac mt-2">
                <span className="badge-g flex items-center gap-1">
                  <ShieldCheck className="w-2.5 h-2.5" /> JUDGE: Verified
                </span>
                <span className="badge-g">94.2% Confidence</span>
                <span className="font-mono text-[8px] text-gray-400">Audit: cf-2847-ax</span>
                <div className="flex items-center gap-1.5 ml-auto">
                  <div className="w-24 m-bar">
                    <div
                      className="m-bar-fill"
                      style={{ width: "0%", background: "linear-gradient(90deg,#10b981,#06b6d4)" }}
                      data-w="94"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="app-panel ac">
              <p className="text-[8px] font-mono text-gray-400 tracking-wider uppercase mb-3">
                Related Documents
              </p>
              <div className="space-y-2">
                {[
                  { name: "AML-Policy-v4.2.pdf",      status: "g", label: "Updated 2024-09" },
                  { name: "DORA-Compliance-Guide.pdf", status: "g", label: "Updated 2024-11" },
                  { name: "Board-Memo-Q3-2024.pdf",    status: "a", label: "Review Due"      },
                  { name: "ICT-Risk-Framework.pdf",    status: "g", label: "Updated 2024-08" },
                ].map((doc) => (
                  <div
                    key={doc.name}
                    className="p-2 rounded-lg bg-white border border-gray-100 cursor-default hover:border-emerald-200 transition-colors"
                  >
                    <p className="text-[9px] text-gray-700 font-light mb-0.5">{doc.name}</p>
                    <div className="flex items-center gap-1">
                      <div className={`s-dot ${doc.status}`} />
                      <span className="text-[7px] text-gray-400">{doc.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Gauge */}
              <div className="mt-4 pt-3 border-t border-gray-100">
                <p className="text-[8px] font-mono text-gray-400 tracking-wider uppercase mb-2">
                  Compliance Score
                </p>
                <div className="flex items-center justify-center">
                  <svg width="60" height="60" viewBox="0 0 42 42">
                    <circle cx="21" cy="21" r="16" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="3" />
                    <circle
                      cx="21" cy="21" r="16" fill="none" stroke="#10b981"
                      strokeWidth="3" strokeLinecap="round"
                      className="gauge-ring" data-val="78"
                      transform="rotate(-90 21 21)" pathLength="100"
                    />
                    <text x="21" y="23" textAnchor="middle" fill="#10b981"
                      fontSize="9" fontWeight="600" fontFamily="Space Mono">78%</text>
                  </svg>
                </div>
                <p className="text-[8px] text-gray-400 text-center mt-1">DORA Alignment</p>
              </div>
            </div>
          </div>
          <AppStatus items={["On-Premise Deployment", "2,847 docs indexed", "Data Sovereign", "Last Sync: 4 min ago"]} />
        </div>

        {/* Feature mini-cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {[
            { title: "Gap Detection",       desc: "Automatically identifies policy contradictions, outdated provisions, and missing coverage areas" },
            { title: "Source Traceability", desc: "Every answer linked to specific document sections with version tracking" },
            { title: "Audit Readiness",     desc: "Complete query-response logs ready for regulator review at any time" },
          ].map((item) => (
            <div key={item.title} className="p-4 rounded-xl bg-white/60 border border-gray-100 r-up opacity-0 translate-y-[60px]">
              <p className="text-[10px] text-emerald-700/60 font-mono uppercase tracking-wider mb-1">
                {item.title}
              </p>
              <p className="text-sm text-gray-500 font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   DOCUMENT INTELLIGENCE DEEP DIVE
───────────────────────────────────────────── */

function DocIntelligence() {
  return (
    <section className="py-20 relative">
      <div className="relative max-w-6xl mx-auto px-8">
        <div className="mb-8">
          <span className="font-mono text-[10px] text-gray-400 tracking-[0.25em] uppercase">
            Feature Deep Dive
          </span>
          <h3 className="text-2xl font-light text-gray-900 mt-3 mb-2 tracking-tight">
            Source-Linked Document Intelligence
          </h3>
          <p className="text-gray-500 font-light max-w-2xl text-sm">
            See exactly which passages inform every answer. Click any citation to jump to the
            original document with highlighted context.
          </p>
        </div>

        <div className="app-frame r-up opacity-0 translate-y-[60px]" id="mockDoc">
          <AppChrome
            title="Document Viewer — AML-Policy-v4.2.pdf"
            right={<span className="badge-g">Page 14 of 47</span>}
          />
          <div className="app-layout" style={{ minHeight: "200px" }}>
            <div className="app-nav">
              <div className="nav-i act"><FileText className="w-3.5 h-3.5 text-emerald-700" /></div>
              <div className="nav-i"><Search className="w-3.5 h-3.5 text-gray-400" /></div>
              <div className="nav-i"><Bookmark className="w-3.5 h-3.5 text-gray-400" /></div>
            </div>

            <div className="app-content" style={{ padding: "14px 16px", gap: "2px" }}>
              <div className="doc-line ac">3.1 Anti-Money Laundering Controls</div>
              <div className="doc-line ac" style={{ color: "#6b7280" }}>3.1.1 The institution shall maintain transaction monitoring</div>
              <div className="doc-line ac" style={{ color: "#6b7280" }}>systems capable of detecting suspicious patterns across</div>
              <div className="doc-line ac" style={{ color: "#6b7280" }}>all customer segments and product lines.</div>
              <div className="doc-line ac" style={{ height: "6px" }} />
              <div className="doc-hl ac">
                <span className="text-[9px] text-emerald-800 leading-relaxed">
                  3.1.2 Third-party risk screening shall be conducted at<br />
                  onboarding and annually thereafter, with enhanced due<br />
                  diligence for high-risk jurisdictions (see Annex B).
                </span>
              </div>
              <div className="doc-line ac" style={{ height: "6px" }} />
              <div className="doc-line ac" style={{ color: "#6b7280" }}>3.1.3 All AML alerts shall be triaged within 48 hours</div>
              <div className="doc-line ac" style={{ color: "#6b7280" }}>and escalated per the Suspicious Activity Reporting</div>
              <div className="doc-line ac" style={{ color: "#6b7280" }}>procedures outlined in Section 5.</div>
            </div>

            <div className="app-panel ac">
              <p className="text-[8px] font-mono text-gray-400 tracking-wider uppercase mb-3">
                Extracted Entities
              </p>
              <div className="space-y-1.5">
                <div className="p-1.5 rounded bg-emerald-50 border border-emerald-100">
                  <p className="text-[8px] text-emerald-700">Requirement: Transaction monitoring</p>
                </div>
                <div className="p-1.5 rounded bg-emerald-50 border border-emerald-100">
                  <p className="text-[8px] text-emerald-700">Requirement: Third-party screening</p>
                </div>
                <div className="p-1.5 rounded bg-amber-50 border border-amber-100">
                  <p className="text-[8px] text-amber-700">Gap: ICT resilience testing</p>
                </div>
                <div className="p-1.5 rounded bg-slate-50 border border-slate-100">
                  <p className="text-[8px] text-slate-600">Reference: Annex B</p>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-gray-100">
                <p className="text-[8px] font-mono text-gray-400 tracking-wider uppercase mb-2">Status</p>
                <div className="space-y-1">
                  {[
                    { dot: "g", text: "Version 4.2 — Current"   },
                    { dot: "g", text: "Approved: 2024-09-15"     },
                    { dot: "a", text: "Review Due: 2025-03"      },
                  ].map((s) => (
                    <div key={s.text} className="flex items-center gap-1.5">
                      <div className={`s-dot ${s.dot}`} />
                      <span className="text-[8px] text-gray-500">{s.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <AppStatus items={["Cited by current query", "Section 3.1.2 highlighted", "4 entities extracted"]} />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   UC2 — CFO VARIANCE INTELLIGENCE
───────────────────────────────────────────── */

function UC2CFOVariance() {
  const kpis = [
    { val: "+4.2%",   label: "Revenue vs Forecast", color: "#10b981", data: [40,55,50,65,80,75,90], barColor: "#10b981" },
    { val: "+8.1%",   label: "OPEX vs Forecast",    color: "#b91c1c", data: [30,40,55,70,85,90,95], barColor: "#b91c1c" },
    { val: "-1.8%",   label: "Net Margin",           color: "#b45309", data: [80,75,60,55,50,45,40], barColor: "#f59e0b" },
    { val: "$142.3M", label: "Q3 Revenue",           color: "#111827", data: [55,60,65,70,75,80,85], barColor: "#4f46e5" },
  ];

  const waterfallBars = [
    { label: "Forecast",    val: "$48.2M", h: 65, color: "#94a3b8" },
    { label: "IT Infra",    val: "+$2.4M", h: 30, color: "#f87171" },
    { label: "Contractors", val: "+$1.1M", h: 18, color: "#fb923c" },
    { label: "Vendor Dlyd", val: "+$0.8M", h: 12, color: "#fbbf24" },
    { label: "Actual",      val: "$52.5M", h: 80, color: "#ef4444" },
  ];

  const drillDown = [
    { title: "IT Infrastructure", desc: "+$2.4M · Data center migration", w: 56, color: "#ef4444", bg: "bg-red-50"    },
    { title: "Risk Contractors",  desc: "+$1.1M · DORA compliance",       w: 26, color: "#f59e0b", bg: "bg-amber-50"  },
    { title: "Vendor Savings",    desc: "-$0.8M · Delayed negotiation",   w: 18, color: "#eab308", bg: "bg-yellow-50" },
  ];

  return (
    <section className="py-32 relative">
      <div
        className="orb w-[500px] h-[300px] bg-slate-500/[0.03]"
        style={{ top: "10%", left: "5%" }}
      />
      <div className="relative max-w-6xl mx-auto px-8">
        <div className="mb-10">
          <span className="font-mono text-[10px] text-emerald-700/60 tracking-[0.25em] uppercase">
            Use Case 02
          </span>
          <h2 className="display-section text-4xl md:text-5xl text-gray-900 mt-3 mb-4 font-light">
            CFO &amp; Finance Analytics Intelligence
          </h2>
          <p className="text-gray-500 font-light max-w-2xl">
            Automatic variance explanation, root-cause analysis, and narrative-driven financial
            insights — not just dashboards.
          </p>
        </div>

        <div className="app-frame r-up opacity-0 translate-y-[60px]" id="mock2">
          <AppChrome
            title="Mentis — CFO Variance Intelligence"
            right={
              <>
                <span className="font-mono text-[8px] text-gray-400">FY2024 · Q3 Report</span>
                <span className="badge-g">JUDGE Active</span>
              </>
            }
          />
          <div className="app-layout" style={{ minHeight: "320px" }}>
            <div className="app-nav">
              <div className="nav-i act"><BarChart2 className="w-3.5 h-3.5 text-emerald-700" /></div>
              <div className="nav-i"><TrendingUp className="w-3.5 h-3.5 text-gray-400" /></div>
              <div className="nav-i"><FileText className="w-3.5 h-3.5 text-gray-400" /></div>
              <div className="nav-i"><MessageSquare className="w-3.5 h-3.5 text-gray-400" /></div>
            </div>

            <div className="app-content" style={{ padding: "14px 16px", gap: "10px" }}>
              {/* KPI row */}
              <div className="grid grid-cols-4 gap-3 ac">
                {kpis.map((m) => (
                  <div key={m.label} className="m-metric">
                    <div className="val" style={{ color: m.color }}>{m.val}</div>
                    <div className="lbl">{m.label}</div>
                    <div className="spark mt-2" style={{ height: "16px" }}>
                      {m.data.map((h, j) => (
                        <div
                          key={j}
                          className="spark-bar"
                          style={{ height: "0%", background: m.barColor, opacity: 0.3 + j * 0.1 }}
                          data-h={h}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Waterfall */}
              <div className="m-card ac" style={{ padding: "12px" }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] font-mono text-gray-400 tracking-wider uppercase">
                    OPEX Variance Waterfall — Q3 vs Forecast
                  </span>
                  <span className="badge-a">+$4.3M over</span>
                </div>
                <div className="flex items-end gap-2" style={{ height: "80px" }}>
                  {waterfallBars.map((item, i) => (
                    <div key={i} className="wf-col">
                      <div
                        className="wf-bar"
                        style={{ height: "0%", background: item.color }}
                        data-h={item.h}
                      />
                      <p className="text-[7px] text-gray-400 mt-1">{item.label}</p>
                      <p
                        className="text-[7px] text-gray-500 font-mono"
                        style={{ color: i > 0 ? item.color : undefined }}
                      >
                        {item.val}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Narrative */}
              <div className="m-card ac" style={{ borderLeft: "3px solid #10b981", padding: "12px" }}>
                <div className="flex items-center gap-2 mb-2">
                  <Bot className="w-3.5 h-3.5 text-emerald-700" />
                  <span className="text-[9px] font-mono text-emerald-700 tracking-wider uppercase">
                    AI-Generated Narrative
                  </span>
                </div>
                <p className="text-[11px] text-gray-600 font-light leading-relaxed">
                  Q3 OPEX exceeded forecast by{" "}
                  <strong className="font-medium text-[#b91c1c]">$4.3M (+8.1%)</strong>. The primary
                  driver was{" "}
                  <strong className="font-medium text-gray-900">unplanned IT infrastructure costs</strong>{" "}
                  ($2.4M) related to the data center migration, compounded by{" "}
                  <strong className="font-medium text-gray-900">elevated contractor spend</strong> in
                  the Risk division ($1.1M) for the DORA compliance initiative.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {["GL-2024-Q3", "Budget-v2.1", "IT-Migration-Report"].map((s) => (
                    <span key={s} className="src-pill">
                      <FileText className="w-2.5 h-2.5" /> {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="app-panel ac" style={{ width: "180px" }}>
              <p className="text-[8px] font-mono text-gray-400 tracking-wider uppercase mb-3">
                Drill-Down
              </p>
              <div className="space-y-2">
                {drillDown.map((item) => (
                  <div
                    key={item.title}
                    className={`p-2 rounded-lg ${item.bg} border border-black/5 cursor-default`}
                  >
                    <p className="text-[8px] font-medium" style={{ color: item.color }}>{item.title}</p>
                    <p className="text-[7px] opacity-70" style={{ color: item.color }}>{item.desc}</p>
                    <div className="m-bar mt-1">
                      <div
                        className="m-bar-fill"
                        style={{ width: "0%", background: item.color }}
                        data-w={item.w}
                      />
                    </div>
                    <p className="text-[7px] text-gray-400 mt-0.5">{item.w}% of total overrun</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-2 border-t border-gray-100">
                <p className="text-[8px] font-mono text-gray-400 tracking-wider uppercase mb-2">
                  Confidence
                </p>
                <div className="flex items-center justify-center">
                  <svg width="60" height="60" viewBox="0 0 42 42">
                    <circle cx="21" cy="21" r="16" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="3" />
                    <circle
                      cx="21" cy="21" r="16" fill="none" stroke="#10b981"
                      strokeWidth="3" strokeLinecap="round"
                      className="gauge-ring" data-val="91"
                      transform="rotate(-90 21 21)" pathLength="100"
                    />
                    <text x="21" y="23" textAnchor="middle" fill="#10b981"
                      fontSize="9" fontWeight="600" fontFamily="Space Mono">91%</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <AppStatus items={["On-Premise", "GL + Budget + IT Reports", "Audit: vr-4102-bx"]} />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   UC3 — PROCUREMENT & SPEND
───────────────────────────────────────────── */

function UC3ProcurementSpend() {
  const vendors = [
    { vendor: "Accenture",    w: 92, val: "$14.2M", color: "#10b981" },
    { vendor: "AWS GovCloud", w: 78, val: "$11.8M", color: "#06b6d4" },
    { vendor: "Vendor ABC ⚠", w: 65, val: "$9.8M",  color: "#ef4444", textClass: "text-red-500" },
    { vendor: "Deloitte",     w: 55, val: "$8.3M",  color: "#64748b" },
    { vendor: "Bloomberg",    w: 42, val: "$6.4M",  color: "#94a3b8" },
  ];

  const savings = [
    { label: "Vendor consolidation", val: "$890K" },
    { label: "License optimization",  val: "$720K" },
    { label: "Duplicate PO removal",  val: "$490K" },
  ];

  return (
    <section className="py-32 relative">
      <div className="relative max-w-6xl mx-auto px-8">
        <div className="mb-10">
          <span className="font-mono text-[10px] text-emerald-700/60 tracking-[0.25em] uppercase">
            Use Case 03
          </span>
          <h2 className="display-section text-4xl md:text-5xl text-gray-900 mt-3 mb-4 font-light">
            Procurement &amp; Spend Intelligence
          </h2>
          <p className="text-gray-500 font-light max-w-2xl">
            Pattern detection across vendor spend, anomaly identification, and savings opportunities
            with full explainability.
          </p>
        </div>

        <div className="app-frame r-up opacity-0 translate-y-[60px]" id="mock3">
          <AppChrome
            title="Mentis — Spend Analytics"
            right={<span className="font-mono text-[8px] text-gray-400">FY2024 YTD</span>}
          />
          <div className="app-layout" style={{ minHeight: "300px" }}>
            <div className="app-nav">
              <div className="nav-i act"><Receipt className="w-3.5 h-3.5 text-emerald-700" /></div>
              <div className="nav-i"><AlertTriangle className="w-3.5 h-3.5 text-gray-400" /></div>
              <div className="nav-i"><PieChart className="w-3.5 h-3.5 text-gray-400" /></div>
            </div>

            <div className="app-content" style={{ padding: "14px 16px", gap: "8px" }}>
              {/* Vendor bars */}
              <div className="m-card ac" style={{ padding: "12px" }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] font-mono text-gray-400 tracking-wider uppercase">
                    Top Vendors by Spend — YTD
                  </span>
                </div>
                <div className="space-y-2">
                  {vendors.map((item) => (
                    <div key={item.vendor} className="flex items-center gap-3">
                      <span
                        className={`text-[9px] w-20 truncate font-light ${
                          item.textClass ?? "text-gray-500"
                        }`}
                      >
                        {item.vendor}
                      </span>
                      <div className="flex-1 m-bar" style={{ height: "6px" }}>
                        <div
                          className="m-bar-fill"
                          style={{ width: "0%", background: item.color }}
                          data-w={item.w}
                        />
                      </div>
                      <span
                        className={`text-[8px] font-mono w-14 text-right ${
                          item.textClass ?? "text-gray-500"
                        }`}
                      >
                        {item.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Anomaly Alerts */}
              <p className="text-[8px] font-mono text-gray-400 tracking-wider uppercase ac">
                Active Anomalies
              </p>
              <div className="space-y-2 ac">
                <div className="m-card" style={{ borderLeft: "3px solid #b91c1c", padding: "10px" }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="s-dot r" />
                      <span className="text-[10px] text-gray-700 font-light">Vendor ABC — IT Services</span>
                    </div>
                    <span className="badge-r">+47% YoY</span>
                  </div>
                  <p className="text-[9px] text-gray-400 font-light mt-1">
                    Spend increased from $6.7M to $9.8M without contract amendment. 3 duplicate POs detected.
                  </p>
                </div>
                <div className="m-card" style={{ borderLeft: "3px solid #b45309", padding: "10px" }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="s-dot a" />
                      <span className="text-[10px] text-gray-700 font-light">Consulting — Risk Division</span>
                    </div>
                    <span className="badge-a">Duplicate PO</span>
                  </div>
                  <p className="text-[9px] text-gray-400 font-light mt-1">
                    PO-4821 and PO-4823 appear to cover identical scope. Combined value: $340K.
                  </p>
                </div>
                <div className="m-card" style={{ borderLeft: "3px solid #b45309", padding: "10px" }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="s-dot a" />
                      <span className="text-[10px] text-gray-700 font-light">Software Licenses — Unused</span>
                    </div>
                    <span className="badge-a">$180K/yr</span>
                  </div>
                  <p className="text-[9px] text-gray-400 font-light mt-1">
                    42 enterprise licenses for ToolX show zero logins in 90 days. Annual cost: $180K.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="app-panel ac" style={{ width: "170px" }}>
              <p className="text-[8px] font-mono text-gray-400 tracking-wider uppercase mb-3">
                Savings Opportunities
              </p>
              <div
                className="m-metric mb-3"
                style={{
                  background: "linear-gradient(135deg,rgba(16,185,129,0.05),rgba(6,182,212,0.03))",
                }}
              >
                <div className="val" style={{ color: "#10b981", fontSize: "16px" }}>$2.1M</div>
                <div className="lbl">Identified Savings</div>
              </div>
              <div className="space-y-2">
                {savings.map((s) => (
                  <div key={s.label} className="p-2 rounded-lg bg-white border border-gray-100">
                    <p className="text-[8px] text-gray-600 font-medium">{s.label}</p>
                    <p className="text-[7px] text-emerald-700 font-mono">{s.val}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-2 border-t border-gray-100">
                <p className="text-[8px] text-gray-400">
                  All findings explainable with source data and audit trail
                </p>
              </div>
            </div>
          </div>
          <AppStatus items={["On-Premise", "ERP + Procurement Data", "3 anomalies active"]} />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   UC4 — EXECUTIVE INTELLIGENCE
───────────────────────────────────────────── */

function UC4ExecutiveIntelligence() {
  const vendorRows = [
    { vendor: "Fintech Solutions Inc.", exp: "$1.2M", risk: "Medium", riskClass: "badge-a", status: "Monitoring", statusClass: "badge-a" },
    { vendor: "DataPipe Corp",          exp: "$640K", risk: "Medium", riskClass: "badge-a", status: "Mitigated",  statusClass: "badge-g" },
    { vendor: "CloudServ Analytics",    exp: "$260K", risk: "Low",    riskClass: "badge-g", status: "Stable",     statusClass: "badge-g" },
  ];

  const sources = [
    { title: "Treasury Records",  icon: Database,    w: 100, label: "12,847 records queried", color: "#10b981" },
    { title: "Vendor Registry",   icon: Building2,   w: 100, label: "342 active vendors",      color: "#06b6d4" },
    { title: "Risk Assessments",  icon: ShieldAlert, w: 85,  label: "Q1 2024 cycle",           color: "#f59e0b" },
    { title: "VRM Procedures",    icon: FileCheck,   w: 100, label: "SOP-VRM-3.2",             color: "#64748b" },
  ];

  return (
    <section className="py-32 relative">
      <div
        className="orb w-[400px] h-[300px] bg-emerald-900/[0.03]"
        style={{ top: "15%", right: "15%" }}
      />
      <div className="relative max-w-6xl mx-auto px-8">
        <div className="mb-10">
          <span className="font-mono text-[10px] text-emerald-700/60 tracking-[0.25em] uppercase">
            Use Case 04
          </span>
          <h2 className="display-section text-4xl md:text-5xl text-gray-900 mt-3 mb-4 font-light">
            Executive &amp; Management Intelligence
          </h2>
          <p className="text-gray-500 font-light max-w-2xl">
            Secure conversational access to multi-source intelligence with governance controls,
            source synthesis, and traceability.
          </p>
        </div>

        <div className="app-frame r-up opacity-0 translate-y-[60px]" id="mock4">
          <AppChrome
            title="Mentis — Executive Intelligence"
            right={
              <>
                <span className="badge-b">Role: CEO</span>
                <span className="badge-g">RBAC Enforced</span>
              </>
            }
          />
          <div className="app-layout" style={{ minHeight: "310px" }}>
            <div className="app-nav">
              <div className="nav-i act">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
              </div>
              <div className="nav-i"><Brain className="w-3.5 h-3.5 text-gray-400" /></div>
              <div className="nav-i"><FileText className="w-3.5 h-3.5 text-gray-400" /></div>
            </div>

            <div className="app-content" style={{ padding: "14px 16px", gap: "8px" }}>
              <div className="m-bubble m-user ac">
                What's our exposure to SVB-related counterparties? Include downstream vendor risk.
              </div>

              <div className="m-bubble m-ai ac" style={{ maxWidth: "100%" }}>
                <p className="mb-2">
                  Based on analysis across{" "}
                  <strong className="font-medium">
                    Treasury records, vendor database, and risk assessments
                  </strong>:
                </p>

                {/* Exposure cards */}
                <div className="grid grid-cols-3 gap-2 my-3">
                  <div className="m-metric" style={{ padding: "8px" }}>
                    <div className="val" style={{ color: "#10b981", fontSize: "15px" }}>$0</div>
                    <div className="lbl">Direct Exposure</div>
                  </div>
                  <div className="m-metric" style={{ padding: "8px" }}>
                    <div className="val" style={{ color: "#b45309", fontSize: "15px" }}>$2.1M</div>
                    <div className="lbl">Indirect via Vendors</div>
                  </div>
                  <div className="m-metric" style={{ padding: "8px" }}>
                    <div className="val" style={{ fontSize: "15px" }}>3</div>
                    <div className="lbl">Vendors Affected</div>
                  </div>
                </div>

                {/* Vendor table */}
                <div className="m-card" style={{ padding: "8px" }}>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[8px] font-mono text-gray-400 px-1">
                      <span>VENDOR</span>
                      <span>EXPOSURE</span>
                      <span>RISK</span>
                      <span>STATUS</span>
                    </div>
                    {vendorRows.map((v) => (
                      <div
                        key={v.vendor}
                        className="flex items-center justify-between p-2 rounded-lg bg-white border border-gray-100"
                      >
                        <span className="text-[9px] text-gray-600 font-light">{v.vendor}</span>
                        <span className="text-[9px] text-gray-700 font-mono">{v.exp}</span>
                        <span className={v.riskClass}>{v.risk}</span>
                        <span className={`${v.statusClass ?? v.riskClass}`}>{v.status}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-[10px] text-gray-500 font-light mt-2">
                  <strong className="font-medium">Recommendation:</strong> Fintech Solutions holds 57%
                  of indirect exposure. Suggest board-level review of alternative providers and
                  contract contingency clause activation per SOP-VRM-3.2.
                </p>
              </div>

              {/* Sources pills */}
              <div className="flex flex-wrap gap-1.5 ac">
                <span className="src-pill"><Database className="w-2.5 h-2.5" /> Treasury DB</span>
                <span className="src-pill"><FileText className="w-2.5 h-2.5" /> Vendor Registry</span>
                <span className="src-pill"><ShieldAlert className="w-2.5 h-2.5" /> Risk Assessment Q1</span>
                <span className="src-pill"><FileText className="w-2.5 h-2.5" /> SOP-VRM-3.2</span>
              </div>

              <div className="flex items-center gap-3 ac">
                <span className="badge-g flex items-center gap-1">
                  <ShieldCheck className="w-2.5 h-2.5" /> JUDGE Verified
                </span>
                <span className="badge-g">97% Confidence</span>
                <span className="badge-b">4 Data Sources</span>
              </div>
            </div>

            {/* Right Panel */}
            <div className="app-panel ac" style={{ width: "180px" }}>
              <p className="text-[8px] font-mono text-gray-400 tracking-wider uppercase mb-3">
                Sources Synthesized
              </p>
              <div className="space-y-2">
                {sources.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.title} className="p-2 rounded-lg bg-white border border-gray-100">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Icon className="w-3 h-3" style={{ color: s.color }} />
                        <span className="text-[8px] text-gray-600 font-medium">{s.title}</span>
                      </div>
                      <div className="m-bar">
                        <div
                          className="m-bar-fill"
                          style={{ width: "0%", background: s.color }}
                          data-w={s.w}
                        />
                      </div>
                      <p className="text-[7px] text-gray-400 mt-0.5">{s.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <AppStatus
            items={["Role: CEO (Elevated)", "4 data sources", "RBAC: Full Finance Access", "Audit: ex-7291"]}
          />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   AUDIT TRAIL
───────────────────────────────────────────── */

function AuditTrail() {
  const timeline = [
    { color: "bg-slate-300",   title: "Query Received",     time: "09:42:31.204 UTC", desc: 'User: CFO (user_4521) · Session: sess_8f2a · "Why did OPEX spike in Q3?"',                 last: false },
    { color: "bg-emerald-400", title: "RBAC Check Passed",  time: "09:42:31.218 UTC", desc: "Role: CFO · Scope: finance_read, opex_view, gl_access · MFA: verified",                   last: false },
    { color: "bg-teal-400",    title: "Source Retrieval",   time: "09:42:32.847 UTC", desc: "Agent: variance_analyzer_v2 · 12 documents retrieved · 3 tables queried · Latency: 1.6s", last: false },
    { color: "bg-amber-400",   title: "Response Generated", time: "09:42:34.592 UTC", desc: "Confidence: 91% · Citations: 3 attached · JUDGE: VERIFIED · Total latency: 3.4s",         last: false },
    { color: "bg-slate-300",   title: "Response Delivered", time: "09:42:34.601 UTC", desc: "Displayed to user · Hash: 7f3a2b · Tamper-proof chain: intact",                           last: true  },
  ];

  const pillars = [
    {
      icon: <Database className="w-5 h-5 text-slate-500" />,
      title: "Data Sovereignty",
      body: "All data remains within institutional infrastructure. On-premise, private cloud, or air-gapped deployment.",
    },
    {
      icon: <Eye className="w-5 h-5 text-slate-500" />,
      title: "Explainability",
      body: "Every answer traceable to source data. Execution logs and audit trails are built into every interaction.",
    },
    {
      icon: <Lock className="w-5 h-5 text-slate-500" />,
      title: "Controlled Access",
      body: "Role-based permissions, segregation of duties, and governed agent execution workflows.",
    },
  ];

  return (
    <section className="py-32 relative">
      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-12">
          <span className="font-mono text-[10px] text-gray-400 tracking-[0.25em] uppercase">
            Governance Feature
          </span>
          <h2 className="display-section text-4xl md:text-5xl text-gray-900 mt-3 mb-4 font-light">
            Complete Audit Trail
          </h2>
          <p className="text-gray-500 font-light max-w-xl mx-auto">
            Every query, access check, source retrieval, and response — immutably logged and
            regulator-ready.
          </p>
        </div>

        <div className="app-frame r-up opacity-0 translate-y-[60px]" id="mockAudit">
          <AppChrome
            title="Mentis — Audit Trail Viewer"
            right={
              <span
                className="badge-sm font-mono text-[7px]"
                style={{ background: "rgba(0,0,0,0.04)", color: "#6b7280" }}
              >
                Immutable Log
              </span>
            }
          />
          <div className="app-layout" style={{ minHeight: "260px" }}>
            <div className="app-nav">
              <div className="nav-i act"><ScrollText className="w-3.5 h-3.5 text-emerald-700" /></div>
              <div className="nav-i"><Filter className="w-3.5 h-3.5 text-gray-400" /></div>
              <div className="nav-i"><Download className="w-3.5 h-3.5 text-gray-400" /></div>
            </div>

            <div className="app-content" style={{ padding: "14px 16px", gap: "6px" }}>
              {/* Filter bar */}
              <div className="flex items-center gap-3 p-2 rounded-lg border border-gray-100 bg-white/60 ac">
                <Search className="w-3 h-3 text-gray-400" />
                <span className="text-[10px] text-gray-400">
                  Filter by user, session, or date range...
                </span>
                <div className="ml-auto flex gap-1">
                  <span
                    className="badge-sm"
                    style={{ background: "rgba(0,0,0,0.04)", color: "#6b7280" }}
                  >
                    Today
                  </span>
                  <span
                    className="badge-sm"
                    style={{ background: "rgba(0,0,0,0.04)", color: "#6b7280" }}
                  >
                    This Week
                  </span>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-1 ac" style={{ fontSize: 0 }}>
                {timeline.map((entry) => (
                  <div
                    key={entry.title}
                    className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-gray-100 hover:border-emerald-200 transition-colors cursor-default"
                  >
                    <div className="flex flex-col items-center gap-0.5 pt-0.5">
                      <div className={`w-2 h-2 rounded-full ${entry.color}`} />
                      {!entry.last && <div className="w-px h-8 bg-gray-100" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] text-gray-700 font-medium">{entry.title}</span>
                        <span className="text-[8px] text-gray-400 font-mono">{entry.time}</span>
                      </div>
                      <p className="text-[8px] text-gray-500 font-light">{entry.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <AppStatus
            items={["Immutable", "Tamper-proof chain", "Export: SOC2 / ISO 27001 compatible"]}
          />
        </div>

        {/* Governance pillars */}
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {pillars.map((p) => (
            <div key={p.title} className="card p-8 r-up opacity-0 translate-y-[60px]">
              <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-5">
                {p.icon}
              </div>
              <h3 className="text-base font-medium text-gray-900 mb-3">{p.title}</h3>
              <p className="text-sm text-gray-500 font-light">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   RBAC ACCESS CONTROL
───────────────────────────────────────────── */

function RBACAccessControl() {
  const rows = [
    { scope: "Financial Reports", ceo: "✓ Full", cfo: "✓ Full",    cro: "◐ Summary", audit: "✓ Read-Only" },
    { scope: "Risk Assessments",  ceo: "✓ Full", cfo: "◐ Summary", cro: "✓ Full",    audit: "✓ Read-Only" },
    { scope: "Vendor Contracts",  ceo: "✓ Full", cfo: "✓ Full",    cro: "✕ Denied",  audit: "◐ Metadata"  },
    { scope: "HR / Compensation", ceo: "✓ Full", cfo: "✕ Denied",  cro: "✕ Denied",  audit: "✕ Denied"    },
  ];

  const cellColor = (val) => {
    if (val.startsWith("✓")) return "text-emerald-700";
    if (val.startsWith("✕")) return "text-red-500";
    return "text-amber-600";
  };

  return (
    <section className="py-24 relative">
      <div className="relative max-w-6xl mx-auto px-8">
        <div className="mb-8">
          <span className="font-mono text-[10px] text-gray-400 tracking-[0.25em] uppercase">
            Governance Feature
          </span>
          <h3 className="text-2xl font-light text-gray-900 mt-3 mb-2">
            Role-Based Access in Action
          </h3>
          <p className="text-gray-500 font-light text-sm max-w-2xl">
            Different roles see different data. The system enforces access boundaries at query time —
            not just at the UI layer.
          </p>
        </div>

        <div className="app-frame r-up opacity-0 translate-y-[60px]" id="mockRBAC">
          <AppChrome title="Mentis — Access Control Matrix" />
          <div style={{ padding: "16px", overflowX: "auto" }}>
            <div
              className="grid grid-cols-5 gap-0 text-center ac"
              style={{ minWidth: "500px" }}
            >
              {/* Header */}
              {["Scope", "CEO", "CFO", "CRO", "Audit"].map((h, i) => (
                <div
                  key={h}
                  className={`p-3 bg-slate-50 border border-gray-100
                    ${i === 0 ? "rounded-tl-lg" : ""}
                    ${i === 4 ? "rounded-tr-lg" : ""}`}
                >
                  <span className="text-[9px] font-mono text-gray-400 tracking-wider uppercase">
                    {h}
                  </span>
                </div>
              ))}

              {/* Data rows */}
              {rows.map((row, ri) => (
                <React.Fragment key={`row-${ri}`}>
                  <div
                    className={`p-3 border border-gray-100 text-left ${
                      ri === rows.length - 1 ? "rounded-bl-lg" : ""
                    }`}
                  >
                    <span className="text-[10px] text-gray-600 font-light">{row.scope}</span>
                  </div>
                  {[row.ceo, row.cfo, row.cro, row.audit].map((val, ci) => (
                    <div
                      key={`${ri}-${ci}`}
                      className={`p-3 border border-gray-100 ${
                        ri === rows.length - 1 && ci === 3 ? "rounded-br-lg" : ""
                      }`}
                    >
                      <span className={`text-[10px] ${cellColor(val)}`}>{val}</span>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
          <AppStatus
            items={[
              "Access enforced at query time",
              "Not just UI — data-layer segregation",
              "SSO + MFA required",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   GSAP ANIMATIONS HOOK
───────────────────────────────────────────── */

function useAnimations() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Reveal .r-up
    const reveals = document.querySelectorAll(".r-up");
    reveals.forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      });
    });

    // App mock reveals + data animations
    document.querySelectorAll(".app-frame").forEach((mock) => {
      const children = mock.querySelectorAll(".ac");
      children.forEach((c, i) => {
        c.style.transitionDelay = `${0.1 + i * 0.12}s`;
      });

      ScrollTrigger.create({
        trigger: mock,
        start: "top 68%",
        onEnter: () => {
          mock.classList.add("revealed");
          setTimeout(() => {
            mock.querySelectorAll(".m-bar-fill[data-w]").forEach((b) => {
              b.style.width = b.dataset.w + "%";
            });
            mock.querySelectorAll(".spark-bar[data-h]").forEach((b) => {
              b.style.height = b.dataset.h + "%";
            });
            mock.querySelectorAll(".wf-bar[data-h]").forEach((b) => {
              b.style.height = b.dataset.h + "%";
            });
            mock.querySelectorAll(".gauge-ring[data-val]").forEach((g) => {
              const val = parseFloat(g.dataset.val ?? "0");
              g.style.strokeDasharray = `${val} ${100 - val}`;
            });
          }, 400);
        },
        once: true,
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);
}


/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */

export default function FinancialServicesProducts() {
  useAnimations();

  return (
    <>
      <UC1PolicyCompliance />
      <div className="divider" />
      <DocIntelligence />
      <div className="divider" />
      <UC2CFOVariance />
      <div className="divider" />
      <UC3ProcurementSpend />
      <div className="divider" />
      <UC4ExecutiveIntelligence />
      <div className="divider" />
      <AuditTrail />
      <div className="divider" />
      <RBACAccessControl />
    </>
  );
}
