"use client";

import { AppDots, AppTab, LabelMono, Pill, PBar, IconShieldCheck, IconAlertTriangle } from "./Ui";

export default function ThreeTenProduct() {
  const kpis = [
    { val: "2,847", label: "Total Requests", cls: "m-blue", color: "#111827" },
    { val: "72%", label: "Resolved <5d", cls: "m-green", color: "#059669" },
    { val: "↑ 34%", label: "Water/Sewer Spike", cls: "m-red", color: "#ef4444" },
    { val: "4.2d", label: "Avg Resolution", cls: "m-amber", color: "#d97706" },
    { val: "91%", label: "Citizen Satisfaction", cls: "m-violet", color: "#7c3aed" },
  ];

  const deptPerf = [
    { dept: "Roads", pct: 82, color: "rgba(16,185,129,0.5)", textColor: "#059669" },
    { dept: "Parks", pct: 78, color: "rgba(16,185,129,0.5)", textColor: "#059669" },
    { dept: "Water", pct: 54, color: "rgba(239,68,68,0.5)", textColor: "#ef4444" },
    { dept: "Permits", pct: 68, color: "rgba(245,158,11,0.5)", textColor: "#d97706" },
    { dept: "Sanitation", pct: 91, color: "rgba(16,185,129,0.5)", textColor: "#059669" },
    { dept: "Code Enf", pct: 65, color: "rgba(245,158,11,0.5)", textColor: "#d97706" },
  ];

  return (
    <div className="mb-36">
      <div className="flex items-center gap-4 mb-6 r-up">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.2)" }}>
          <svg className="w-7 h-7" style={{ color: "#0891b2" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        </div>
        <div>
          <h3 className="text-2xl font-light text-gray-900 tracking-tight">Citizen Services Analytics — 311 Dashboard</h3>
          <p className="text-[13px] text-gray-400 font-light mt-0.5">Complaint pattern detection · Geographic clustering · Department performance · Emerging issue alerts</p>
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
              {["Weekly Brief", "Live Feed", "Heatmap", "Trends"].map((t, i) => (
                <AppTab key={t} active={i === 0}>{t}</AppTab>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-gray-400">Nov 11–17, 2024</span>
            <Pill type="b">INTERNAL</Pill>
          </div>
        </div>

        <div className="p-6">
          {/* KPIs */}
          <div className="grid grid-cols-5 gap-3 mb-6">
            {kpis.map(({ val, label, cls, color }) => (
              <div key={label} className={`metric ${cls}`}>
                <p className="text-xl font-semibold" style={{ color }}>{val}</p>
                <p className="text-[9px] text-gray-400 font-light mt-1">{label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-5 mb-5">
            {/* Emerging Issue Alert */}
            <div className="p-5 rounded-2xl" style={{ background: "rgba(239,68,68,0.03)", border: "1px solid rgba(239,68,68,0.15)", boxShadow: "0 4px 20px -4px rgba(239,68,68,0.08)" }}>
              <div className="flex items-center gap-2 mb-3">
                <IconAlertTriangle size={16} color="#ef4444" />
                <span className="text-[13px] font-medium text-gray-900">Emerging Issue Detected</span>
                <Pill type="r" style={{ marginLeft: "auto" }}>Critical</Pill>
              </div>
              <p className="text-[12px] text-gray-600 font-light mb-4">
                Cluster of <span className="text-red-600 font-medium">47 water quality complaints</span> from Districts 3 &amp; 7 in 72 hours — 4x above normal volume.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-3">
                {[
                  { label: "Types", val: "Discoloration (23), Odor (14), Pressure (10)" },
                  { label: "Cluster", val: "Oak St → 5th Ave corridor, 1.2 mi radius" },
                ].map(({ label, val }) => (
                  <div key={label} className="p-3 rounded-xl bg-white" style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
                    <p className="text-[10px] text-gray-400 mb-1">{label}</p>
                    <p className="text-[11px] text-gray-700 font-light">{val}</p>
                  </div>
                ))}
              </div>
              <div className="p-3 rounded-xl" style={{ background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.15)" }}>
                <p className="text-[11px] text-amber-700"><strong>Correlation:</strong> Water main replacement WO-2024-1847 began Nov 9 in adjacent block. Likely construction-related turbidity.</p>
              </div>
            </div>

            {/* Chart */}
            <div className="p-5 rounded-2xl" style={{ background: "rgba(0,0,0,0.015)", border: "1px solid rgba(0,0,0,0.05)" }}>
              <LabelMono style={{ marginBottom: 12 }}>Weekly Request Volume by Category</LabelMono>
              <svg viewBox="0 0 340 150" className="w-full">
                <defs>
                  <linearGradient id="aG" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(59,130,246,0.15)" /><stop offset="100%" stopColor="rgba(59,130,246,0)" />
                  </linearGradient>
                </defs>
                <line x1="30" y1="10" x2="30" y2="130" stroke="rgba(0,0,0,0.04)" strokeWidth="0.5" />
                <line x1="30" y1="130" x2="330" y2="130" stroke="rgba(0,0,0,0.06)" strokeWidth="0.5" />
                <line x1="30" y1="90" x2="330" y2="90" stroke="rgba(0,0,0,0.03)" strokeDasharray="4,4" />
                <line x1="30" y1="50" x2="330" y2="50" stroke="rgba(0,0,0,0.03)" strokeDasharray="4,4" />
                <polygon points="30,110 75,105 120,100 165,95 210,88 255,60 300,42 330,38 330,130 30,130" fill="url(#aG)" />
                <polyline points="30,110 75,105 120,100 165,95 210,88 255,60 300,42 330,38" fill="none" stroke="rgba(59,130,246,0.5)" strokeWidth="2" strokeLinecap="round" />
                <polygon points="210,88 255,60 300,42 330,38 330,130 210,130" fill="rgba(239,68,68,0.08)" />
                <polyline points="210,88 255,60 300,42 330,38" fill="none" stroke="rgba(239,68,68,0.5)" strokeWidth="2" strokeLinecap="round" strokeDasharray="4,3" />
                {[["Mon",30],["Tue",75],["Wed",120],["Thu",165],["Fri",210],["Sat",255],["Sun",300]].map(([d, x]) => (
                  <text key={d} x={x} y="145" fill={d === "Sat" || d === "Sun" ? "#dc2626" : "#9ca3af"} fontSize="7" fontWeight={d === "Sat" || d === "Sun" ? "500" : "400"}>{d}</text>
                ))}
                <text x="260" y="52" fill="#dc2626" fontSize="7" fontWeight="500">Water spike ↑</text>
                <text x="20" y="93" textAnchor="end" fill="#9ca3af" fontSize="6">300</text>
                <text x="20" y="53" textAnchor="end" fill="#9ca3af" fontSize="6">600</text>
              </svg>
            </div>
          </div>

          {/* Department Performance */}
          <div className="p-5 rounded-2xl" style={{ background: "rgba(0,0,0,0.015)", border: "1px solid rgba(0,0,0,0.05)" }}>
            <LabelMono style={{ marginBottom: 16 }}>Department Resolution Performance</LabelMono>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {deptPerf.map(({ dept, pct, color, textColor }) => (
                <div key={dept} className="flex items-center gap-3">
                  <span className="text-[11px] text-gray-600" style={{ width: 56 }}>{dept}</span>
                  <div style={{ flex: 1, height: 10, borderRadius: 6, background: "rgba(0,0,0,0.04)", overflow: "hidden" }}>
                    <div style={{ height: "100%", borderRadius: 6, background: color, width: `${pct}%` }} />
                  </div>
                  <span className="text-[11px] font-medium" style={{ color: textColor, width: 40, textAlign: "right" }}>{pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          padding: "10px 20px", borderTop: "1px solid rgba(0,0,0,0.04)",
          background: "rgba(0,0,0,0.008)", display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div className="flex items-center gap-2">
            <IconShieldCheck size={14} color="#9ca3af" />
            <span className="text-[10px] text-gray-400 font-light">De-identified data · Source: 311 System, GIS, Work Order DB</span>
          </div>
        </div>
      </div>
    </div>
  );
}