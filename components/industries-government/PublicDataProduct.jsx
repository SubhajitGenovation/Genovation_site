"use client";

import { AppDots, AppTab, LabelMono, Pill, Stag } from "./Ui";

export default function PublicDataProduct() {
  const tableRows = [
    { county: "Harlan", poverty: "31.2%", lfp: "-4.7%", fed: "$1,847", risk: <Pill type="r">Critical</Pill>, povertyColor: "#ef4444", lfpColor: "#ef4444", fedColor: "#d97706" },
    { county: "McCreary", poverty: "28.9%", lfp: "-3.1%", fed: "$2,104", risk: <Pill type="r">Critical</Pill>, povertyColor: "#ef4444", lfpColor: "#ef4444", fedColor: "#d97706", alt: true },
    { county: "Clay", poverty: "26.4%", lfp: "-2.8%", fed: "$2,340", risk: <Pill type="a">High</Pill>, povertyColor: "#d97706", lfpColor: "#d97706", fedColor: "#d97706" },
    { county: "Owsley", poverty: "25.1%", lfp: "-2.3%", fed: "$1,562", risk: <Pill type="a">High</Pill>, povertyColor: "#d97706", lfpColor: "#d97706", fedColor: "#ef4444", alt: true },
  ];

  return (
    <div className="mb-36">
      <div className="flex items-center gap-4 mb-6 r-up">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)" }}>
          <svg className="w-7 h-7" style={{ color: "#7c3aed" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        </div>
        <div>
          <h3 className="text-2xl font-light text-gray-900 tracking-tight">Public Data Intelligence</h3>
          <p className="text-[13px] text-gray-400 font-light mt-0.5">Cross-dataset queries · Census, BLS, USASpending integration · Pattern discovery · Source traceability</p>
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
              {["Multi-Source Query", "Data Explorer", "Saved Reports"].map((t, i) => (
                <AppTab key={t} active={i === 0}>{t}</AppTab>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Stag color="#2563eb" borderColor="rgba(59,130,246,0.15)" bg="rgba(59,130,246,0.06)">Census</Stag>
            <Stag color="#7c3aed" borderColor="rgba(139,92,246,0.15)" bg="rgba(139,92,246,0.06)">BLS</Stag>
            <Stag color="#059669" borderColor="rgba(16,185,129,0.15)" bg="rgba(16,185,129,0.06)">USASpending</Stag>
          </div>
        </div>

        <div className="p-6">
          {/* User query */}
          <div style={{ maxWidth: "72%", marginLeft: "auto", padding: "12px 16px", borderRadius: "18px 18px 4px 18px", background: "rgba(59,130,246,0.07)", border: "1px solid rgba(59,130,246,0.1)", marginBottom: 20 }}>
            <p className="text-[13px] text-gray-700 font-light">Show me counties with highest poverty rates, declining labor force participation, and federal investment below the state median</p>
          </div>

          <div className="p-5 rounded-2xl mb-5" style={{ background: "rgba(0,0,0,0.015)", border: "1px solid rgba(0,0,0,0.05)" }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[13px] text-gray-600 font-light">Cross-referenced 3 federal datasets — <span className="text-blue-600 font-medium">7 counties</span> match all criteria</span>
            </div>

            {/* Data table */}
            <div className="rounded-xl bg-white overflow-hidden mb-5" style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
              <div className="grid grid-cols-5" style={{ background: "rgba(59,130,246,0.04)" }}>
                {["COUNTY","POVERTY","LFP CHANGE","FED INVEST/CAP","RISK"].map(h => (
                  <div key={h} className="p-3"><span className="text-[10px] text-blue-700 font-mono font-medium">{h}</span></div>
                ))}
              </div>
              {tableRows.map(({ county, poverty, lfp, fed, risk, povertyColor, lfpColor, fedColor, alt }) => (
                <div key={county} className="grid grid-cols-5" style={{
                  borderTop: "1px solid rgba(0,0,0,0.04)",
                  background: alt ? "rgba(0,0,0,0.01)" : undefined,
                }}>
                  <div className="p-3"><span className="text-[12px] text-gray-700 font-medium">{county}</span></div>
                  <div className="p-3"><span className="text-[12px] font-medium" style={{ color: povertyColor }}>{poverty}</span></div>
                  <div className="p-3"><span className="text-[12px]" style={{ color: lfpColor }}>{lfp}</span></div>
                  <div className="p-3"><span className="text-[12px]" style={{ color: fedColor }}>{fed}</span></div>
                  <div className="p-3">{risk}</div>
                </div>
              ))}
              <div className="p-3 text-center" style={{ background: "rgba(0,0,0,0.02)", borderTop: "1px solid rgba(0,0,0,0.04)" }}>
                <span className="text-[10px] text-gray-400">+ 3 more counties · State median: $3,412/capita</span>
              </div>
            </div>

            {/* Pattern analysis */}
            <div className="p-4 rounded-xl" style={{ background: "rgba(59,130,246,0.04)", border: "1px solid rgba(59,130,246,0.12)" }}>
              <p className="text-[10px] text-blue-700 font-mono font-medium mb-2">PATTERN ANALYSIS</p>
              <p className="text-[11px] text-gray-500 font-light">All 7 counties in southeastern region. 5 of 7 are former coal-dependent economies without proportional ARC investment. WIOA Title I grants are 62% below statewide average despite highest need indicators.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            <Stag>ACS 5-Year 2023</Stag>
            <Stag color="#7c3aed" borderColor="rgba(139,92,246,0.15)" bg="rgba(139,92,246,0.06)">BLS LAUS Q3 2024</Stag>
            <Stag color="#059669" borderColor="rgba(16,185,129,0.15)" bg="rgba(16,185,129,0.06)">USASpending FY24</Stag>
            <Stag color="#b45309" borderColor="rgba(245,158,11,0.15)" bg="rgba(245,158,11,0.06)">ARC Investment DB</Stag>
          </div>
        </div>
      </div>
    </div>
  );
}