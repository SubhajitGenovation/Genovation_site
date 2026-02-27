"use client";

import { AppDots, AppTab, LabelMono, Pill, PBar, IconEye, IconFileCheck, IconFileWarning, IconFileX, IconShieldCheck } from "./Ui";

export default function FOIAProduct() {
  return (
    <div className="mb-36">
      <div className="flex items-center gap-4 mb-6 r-up">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)" }}>
          <svg className="w-7 h-7" style={{ color: "#059669" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
            <circle cx="10" cy="15" r="2" /><path d="M22 22l-3-3" />
          </svg>
        </div>
        <div>
          <h3 className="text-2xl font-light text-gray-900 tracking-tight">FOIA &amp; Public Records Intelligence</h3>
          <p className="text-[13px] text-gray-400 font-light mt-0.5">AI-assisted document review · Automated redaction · Exemption analysis · Response generation</p>
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
              {["Document Review", "Redaction Studio", "Response Draft", "Audit Log"].map((t, i) => (
                <AppTab key={t} active={i === 0}>{t}</AppTab>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-gray-400 font-mono">FOIA-2024-04782</span>
            <Pill type="b">In Review</Pill>
          </div>
        </div>

        {/* Body */}
        <div style={{ display: "grid", gridTemplateColumns: "230px 1fr" }}>
          {/* Sidebar */}
          <div style={{
            background: "rgba(0,0,0,0.012)", borderRight: "1px solid rgba(0,0,0,0.05)",
            padding: "14px 10px", minHeight: 650,
          }}>
            <LabelMono style={{ padding: "0 8px", marginBottom: 8 }}>Request Info</LabelMono>
            <div className="space-y-2 px-2 mb-5">
              {[["Requester","J. Reporter (Media)"],["Received","Nov 1, 2024"],["Deadline","Nov 21 — 11 days left"]].map(([label, val]) => (
                <div key={label}>
                  <p className="text-[10px] text-gray-400">{label}</p>
                  <p className="text-[12px]" style={{ color: label === "Deadline" ? "#d97706" : "#374151", fontWeight: label === "Deadline" ? 500 : 400 }}>{val}</p>
                </div>
              ))}
            </div>
            <div className="p-3 rounded-xl mx-2 mb-5" style={{ background: "rgba(59,130,246,0.04)", border: "1px solid rgba(59,130,246,0.1)" }}>
              <p className="text-[10px] text-blue-600 font-medium mb-1">Scope</p>
              <p className="text-[10px] text-gray-500 font-light leading-relaxed">"All communications between Agency Director and contractors re: Project Lighthouse, Jan–Jun 2024"</p>
            </div>

            <LabelMono style={{ padding: "0 8px", marginBottom: 8 }}>Review Progress</LabelMono>
            <div className="space-y-3 px-2 mb-5">
              {[["Scanned","247 / 247","#059669","100%"],["AI Classified","215 / 247","#1d4ed8","87%"],["Human Reviewed","89 / 247","#d97706","36%"]].map(([label, count, color, width]) => (
                <div key={label}>
                  <div className="flex justify-between mb-1">
                    <span className="text-[10px] text-gray-500">{label}</span>
                    <span className="text-[10px] font-medium" style={{ color }}>{count}</span>
                  </div>
                  <PBar fill={width} color={color === "#059669" ? "rgba(16,185,129,0.6)" : color === "#1d4ed8" ? "rgba(59,130,246,0.6)" : "rgba(245,158,11,0.6)"} />
                </div>
              ))}
            </div>

            <LabelMono style={{ padding: "0 8px", marginBottom: 8 }}>Exemptions Used</LabelMono>
            <div className="px-2">
              <svg viewBox="0 0 190 78" className="w-full">
                <rect x="0" y="0" width="150" height="15" rx="4" fill="rgba(59,130,246,0.12)" />
                <text x="6" y="11" fill="#2563eb" fontSize="8" fontWeight="500">(b)(4) Trade secrets: 41</text>
                <rect x="0" y="19" width="88" height="15" rx="4" fill="rgba(139,92,246,0.12)" />
                <text x="6" y="30" fill="#7c3aed" fontSize="8" fontWeight="500">(b)(6) Privacy: 24</text>
                <rect x="0" y="38" width="80" height="15" rx="4" fill="rgba(245,158,11,0.12)" />
                <text x="6" y="49" fill="#b45309" fontSize="8" fontWeight="500">(b)(7) Law enf: 22</text>
                <rect x="0" y="57" width="66" height="15" rx="4" fill="rgba(99,102,241,0.12)" />
                <text x="6" y="68" fill="#4f46e5" fontSize="8" fontWeight="500">(b)(5) Delib: 18</text>
              </svg>
            </div>
          </div>

          {/* Main */}
          <div className="p-5">
            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                { count: "142", label: "Full Release", color: "#059669", cls: "m-green" },
                { count: "73", label: "Partial Redaction", color: "#d97706", cls: "m-amber" },
                { count: "32", label: "Exempt", color: "#ef4444", cls: "m-red" },
              ].map(({ count, label, color, cls }) => (
                <div key={label} className={`metric ${cls}`}>
                  <p className="text-2xl font-semibold" style={{ color }}>{count}</p>
                  <p className="text-[10px] text-gray-400 font-light mt-1">{label}</p>
                </div>
              ))}
            </div>

            {/* Document list */}
            <div className="space-y-2 mb-5">
              {[
                { icon: <IconFileCheck size={16} color="#10b981" />, bg: "rgba(16,185,129,0.08)", name: "Email_Director_Contractor_03152024.eml", desc: "Meeting schedule · 2 pages · No sensitive content", pill: <Pill type="g">Release</Pill>, status: "✓ AI + Human", statusColor: "#059669", borderColor: undefined },
                { icon: <IconFileWarning size={16} color="#f59e0b" />, bg: "rgba(245,158,11,0.08)", name: "Contract_Amendment_02_ProjectLighthouse.pdf", desc: "Pricing terms (b)(4) + SSN (b)(6) · 8 pages · 4 redactions", pill: <Pill type="a">Redact</Pill>, status: "AI ready", statusColor: "#1d4ed8", borderColor: "rgba(245,158,11,0.15)" },
                { icon: <IconFileX size={16} color="#ef4444" />, bg: "rgba(239,68,68,0.08)", name: "Security_Assessment_Lighthouse_Phase2.pdf", desc: "Law enforcement sensitive (b)(7)(E) · 12 pages", pill: <Pill type="r">Exempt</Pill>, status: "⚠ Review", statusColor: "#ef4444", borderColor: "rgba(239,68,68,0.12)" },
                { icon: <IconFileCheck size={16} color="#10b981" />, bg: "rgba(16,185,129,0.08)", name: "Meeting_Notes_ProjectKickoff_0115.docx", desc: "Public meeting minutes · 4 pages · Clear", pill: <Pill type="g">Release</Pill>, status: "✓ AI + Human", statusColor: "#059669", borderColor: undefined },
              ].map((doc) => (
                <div key={doc.name} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "10px 14px", borderRadius: 12,
                  background: "rgba(255,255,255,0.85)",
                  border: `1px solid ${doc.borderColor || "rgba(0,0,0,0.05)"}`,
                }}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: doc.bg }}>
                      {doc.icon}
                    </div>
                    <div>
                      <p className="text-[12px] text-gray-800 font-medium">{doc.name}</p>
                      <p className="text-[10px] text-gray-400 font-light">{doc.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {doc.pill}
                    <span className="text-[9px] font-medium" style={{ color: doc.statusColor }}>{doc.status}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Redaction Preview */}
            <div className="p-5 rounded-2xl bg-white mb-5" style={{ border: "1px solid rgba(245,158,11,0.2)", boxShadow: "0 4px 20px -4px rgba(245,158,11,0.1)" }}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <IconEye size={16} color="#f59e0b" />
                  <p className="text-[11px] text-amber-600 font-mono font-medium tracking-wider">REDACTION PREVIEW — Contract_Amendment_02.pdf (pg 3)</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 rounded-lg text-[9px] text-gray-500" style={{ background: "rgba(0,0,0,0.04)" }}>← Prev</button>
                  <button className="px-3 py-1 rounded-lg text-[9px] text-gray-500" style={{ background: "rgba(0,0,0,0.04)" }}>Next →</button>
                </div>
              </div>
              <div className="p-5 rounded-xl leading-[1.9]" style={{
                background: "#fafaf8", border: "1px solid rgba(0,0,0,0.06)",
                fontFamily: "Georgia,serif", fontSize: 12, color: "#4b5563",
              }}>
                <p className="mb-3">...pursuant to the terms of Amendment No. 2, the total contract value is hereby adjusted to{" "}
                  <span style={{ background: "#1a1a2e", color: "transparent", borderRadius: 3, padding: "0 3px" }}>$4,247,500.00</span>{" "}
                  reflecting the addition of Phase 2B deliverables as described in Exhibit C attached hereto.</p>
                <p className="mb-3">The hourly rate for Senior Consultant services shall be{" "}
                  <span style={{ background: "#1a1a2e", color: "transparent", borderRadius: 3, padding: "0 3px" }}>$285.00/hr</span>{" "}
                  and for Project Manager services{" "}
                  <span style={{ background: "#1a1a2e", color: "transparent", borderRadius: 3, padding: "0 3px" }}>$340.00/hr</span>
                  , effective January 15, 2024. All other rates remain per original agreement.</p>
                <p>Point of contact:{" "}
                  <span style={{ background: "rgba(245,158,11,0.12)", borderBottom: "2px solid rgba(245,158,11,0.4)", padding: "0 2px" }}>Maria Chen, Project Director</span>{" "}
                  (SSN: <span style={{ background: "#1a1a2e", color: "transparent", borderRadius: 3, padding: "0 3px" }}>XXX-XX-1234</span>), reachable at mchen@contractor.com.</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-2">
                  <span className="text-[9px] px-2.5 py-1.5 rounded-lg flex items-center gap-1.5" style={{ background: "rgba(26,26,46,0.06)", color: "#4b5563" }}>
                    <span className="w-2.5 h-2.5 rounded inline-block" style={{ background: "rgba(26,26,46,0.8)" }} />(b)(4) Trade Secret
                  </span>
                  <span className="text-[9px] px-2.5 py-1.5 rounded-lg flex items-center gap-1.5" style={{ background: "rgba(245,158,11,0.1)", color: "#b45309" }}>
                    <span className="w-2.5 h-2.5 rounded inline-block bg-amber-400" />(b)(6) Privacy — Needs Review
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded-xl text-[10px] font-medium" style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)", color: "#065f46" }}>✓ Approve Redactions</button>
                  <button className="px-4 py-2 rounded-xl text-[10px] font-medium" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)", color: "#b45309" }}>Edit Manually</button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[10px] text-gray-400 font-light">
                Est. processing time saved: <span className="text-blue-600 font-medium">18 hours</span> · All determinations require human review
              </span>
              <button className="px-5 py-2.5 rounded-xl text-[11px] font-medium" style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", color: "#1d4ed8" }}>
                Complete &amp; Send Response →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}