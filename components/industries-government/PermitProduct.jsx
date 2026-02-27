"use client";

import { AppDots, AppTab, LabelMono, Pill, Stag, ConfRing, IconCheckCircle, IconXCircle, IconAlertCircle, IconAlertTriangle } from "./Ui";

export default function PermitProduct() {
  const checks = [
    { icon: <IconCheckCircle size={16} color="#10b981" />, bg: "rgba(16,185,129,0.08)", title: "Zoning (MU-2 Mixed Use)", sub: "Permitted use, density within limits", pill: <Pill type="g">✓ Compliant</Pill>, borderColor: undefined },
    { icon: <IconCheckCircle size={16} color="#10b981" />, bg: "rgba(16,185,129,0.08)", title: "Setback Requirements", sub: "Front: 15ft (req 10ft) · Side: 8ft (req 5ft)", pill: <Pill type="g">✓ Compliant</Pill>, borderColor: undefined },
    { icon: <IconXCircle size={16} color="#ef4444" />, bg: "rgba(239,68,68,0.08)", title: "Parking (1.5/unit required)", sub: "38 provided / 54 required · 16 space deficit", pill: <Pill type="r">✗ Deficient</Pill>, borderColor: "rgba(239,68,68,0.15)" },
    { icon: <IconAlertCircle size={16} color="#f59e0b" />, bg: "rgba(245,158,11,0.08)", title: "Fire Code (IFC 2021)", sub: "Sprinkler plan pending review · Egress width marginal", pill: <Pill type="a">⚠ Review</Pill>, borderColor: "rgba(245,158,11,0.12)" },
    { icon: <IconCheckCircle size={16} color="#10b981" />, bg: "rgba(16,185,129,0.08)", title: "Environmental (CEQA)", sub: "Categorically exempt — infill development", pill: <Pill type="g">✓ Exempt</Pill>, borderColor: undefined },
  ];

  return (
    <div className="mb-36">
      <div className="flex items-center gap-4 mb-6 r-up">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)" }}>
          <svg className="w-7 h-7" style={{ color: "#d97706" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
          </svg>
        </div>
        <div>
          <h3 className="text-2xl font-light text-gray-900 tracking-tight">Permit &amp; Licensing Intelligence</h3>
          <p className="text-[13px] text-gray-400 font-light mt-0.5">Automated compliance checks · Zoning analysis · Deficiency identification · Remediation paths</p>
        </div>
      </div>

      <div className="mock-app r-up">
        {/* Toolbar */}
        <div style={{
          background: "linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,247,245,0.98))",
          borderBottom: "1px solid rgba(0,0,0,0.06)", padding: "11px 20px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div className="flex items-center gap-4">
            <AppDots />
            <div className="flex items-center gap-1 ml-3">
              {["Application Review", "Compliance Matrix", "Queue"].map((t, i) => (
                <AppTab key={t} active={i === 0}>{t}</AppTab>
              ))}
            </div>
          </div>
          <Pill type="a">In Review</Pill>
        </div>

        {/* Body */}
        <div style={{ display: "grid", gridTemplateColumns: "240px 1fr" }}>
          {/* Sidebar */}
          <div style={{ background: "rgba(0,0,0,0.012)", borderRight: "1px solid rgba(0,0,0,0.05)", padding: "14px 10px", minHeight: 460 }}>
            <LabelMono style={{ padding: "0 8px", marginBottom: 8 }}>Application</LabelMono>
            <div className="px-2 mb-5">
              <div className="p-3 rounded-xl mb-3" style={{ background: "rgba(59,130,246,0.04)", border: "1px solid rgba(59,130,246,0.1)" }}>
                <p className="text-[12px] text-gray-800 font-medium">CP-2024-1842</p>
                <p className="text-[10px] text-gray-400 font-light mt-1">Mixed-use development</p>
                <p className="text-[10px] text-gray-400 font-light">200 Oak Street · 45,000 sq ft</p>
              </div>
              <div className="space-y-2">
                {[["Applicant","Oak Street Partners LLC"],["Filed","Oct 15, 2024"],["Zone","MU-2 Mixed Use"]].map(([label, val]) => (
                  <div key={label}>
                    <p className="text-[10px] text-gray-400">{label}</p>
                    <p className="text-[12px]" style={{ color: label === "Zone" ? "#1d4ed8" : "#374151", fontWeight: label === "Zone" ? 500 : 400 }}>{val}</p>
                  </div>
                ))}
              </div>
            </div>

            <LabelMono style={{ padding: "0 8px", marginBottom: 8 }}>Compliance Score</LabelMono>
            <div className="px-2">
              <div className="flex items-center justify-center mb-3">
                <ConfRing size={80} r={34} stroke="#f59e0b" offset={53} label="70%" />
              </div>
              <div className="grid grid-cols-3 gap-1 text-center">
                <div className="p-1.5 rounded" style={{ background: "rgba(16,185,129,0.08)" }}><p className="text-[8px] text-emerald-600 font-medium">3 Pass</p></div>
                <div className="p-1.5 rounded" style={{ background: "rgba(245,158,11,0.08)" }}><p className="text-[8px] text-amber-600 font-medium">1 Review</p></div>
                <div className="p-1.5 rounded" style={{ background: "rgba(239,68,68,0.08)" }}><p className="text-[8px] text-red-500 font-medium">1 Fail</p></div>
              </div>
            </div>
          </div>

          {/* Main */}
          <div className="p-5">
            <LabelMono style={{ marginBottom: 16 }}>Automated Compliance Checks</LabelMono>
            <div className="space-y-2 mb-5">
              {checks.map(({ icon, bg, title, sub, pill, borderColor }) => (
                <div key={title} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "10px 14px", borderRadius: 12,
                  background: "rgba(255,255,255,0.85)",
                  border: `1px solid ${borderColor || "rgba(0,0,0,0.05)"}`,
                }}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: bg }}>{icon}</div>
                    <div>
                      <p className="text-[12px] text-gray-800 font-medium">{title}</p>
                      <p className="text-[10px] text-gray-400 font-light">{sub}</p>
                    </div>
                  </div>
                  {pill}
                </div>
              ))}
            </div>

            {/* Parking deficiency */}
            <div className="p-4 rounded-xl mb-4" style={{ background: "rgba(239,68,68,0.03)", border: "1px solid rgba(239,68,68,0.15)" }}>
              <div className="flex items-center gap-2 mb-2">
                <IconAlertTriangle size={16} color="#ef4444" />
                <p className="text-[12px] text-red-600 font-medium">Issue: Parking Deficiency</p>
              </div>
              <p className="text-[11px] text-gray-500 font-light mb-3">Application shows 38 spaces; code requires 54 (1.5 per unit × 36 units). Applicant may:</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-lg bg-white" style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
                  <p className="text-[10px] text-blue-600 font-medium mb-1">Option A: Variance</p>
                  <p className="text-[9px] text-gray-400 font-light">Per Muni Code §17.24.060</p>
                </div>
                <div className="p-3 rounded-lg bg-white" style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
                  <p className="text-[10px] text-blue-600 font-medium mb-1">Option B: In-Lieu Fee</p>
                  <p className="text-[9px] text-gray-400 font-light">$35,000/space (Res. 2022-118)</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {["Muni Code §17", "IFC 2021", "CEQA Guidelines"].map(t => <Stag key={t}>{t}</Stag>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}