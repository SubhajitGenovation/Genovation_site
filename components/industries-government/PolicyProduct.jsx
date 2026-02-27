"use client";

import { AppDots, AppTab, LabelMono, Pill, Stag } from "./Ui";

export default function PolicyProduct() {
  return (
    <div className="mb-36">
      <div className="flex items-center gap-4 mb-6 r-up">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)" }}>
          <svg className="w-7 h-7" style={{ color: "#6366f1" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
          </svg>
        </div>
        <div>
          <h3 className="text-2xl font-light text-gray-900 tracking-tight">Policy &amp; Regulatory Intelligence</h3>
          <p className="text-[13px] text-gray-400 font-light mt-0.5">Legislation analysis · Cross-statute referencing · Fiscal impact modeling · Bill comparison</p>
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
              {["Impact Analysis", "Bill Compare", "Regulatory Tracker", "Fiscal Model"].map((t, i) => (
                <AppTab key={t} active={i === 0}>{t}</AppTab>
              ))}
            </div>
          </div>
          <Pill type="b">INTERNAL</Pill>
        </div>

        <div className="p-6">
          {/* User message */}
          <div style={{ maxWidth: "72%", marginLeft: "auto", padding: "12px 16px", borderRadius: "18px 18px 4px 18px", background: "rgba(59,130,246,0.07)", border: "1px solid rgba(59,130,246,0.1)", marginBottom: 24 }}>
            <p className="text-[13px] text-gray-700 font-light">Analyze the proposed infrastructure bill's impact on state transportation funding and identify all affected programs.</p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            {/* Metric 1 */}
            <div className="metric m-green">
              <p className="text-2xl font-semibold text-emerald-600">+$2.4B</p>
              <p className="text-[10px] text-gray-400 font-light mt-1">Est. State Increase</p>
              <svg width="100%" height="24" className="mt-1">
                <defs>
                  <linearGradient id="spkG" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(16,185,129,0.15)" />
                    <stop offset="100%" stopColor="rgba(16,185,129,0)" />
                  </linearGradient>
                </defs>
                <polyline points="0,20 18,15 36,17 54,11 72,7 90,9 108,3" fill="none" stroke="rgba(16,185,129,0.5)" strokeWidth="2" strokeLinecap="round" />
                <polyline points="0,20 18,15 36,17 54,11 72,7 90,9 108,3 108,24 0,24" fill="url(#spkG)" />
              </svg>
            </div>
            {/* Metric 2 */}
            <div className="metric m-blue">
              <p className="text-2xl font-semibold text-blue-600">47</p>
              <p className="text-[10px] text-gray-400 font-light mt-1">Programs Affected</p>
              <div className="grid grid-cols-4 gap-1 mt-2">
                {["30%","20%","15%","10%"].map((w, i) => (
                  <div key={i} className="h-3 rounded" style={{ background: `rgba(59,130,246,${0.3 - i * 0.05})` }} />
                ))}
              </div>
              <div className="flex justify-between mt-1">
                {["Hwy","Transit","Bridge","EV"].map(l => <span key={l} className="text-[7px] text-gray-400">{l}</span>)}
              </div>
            </div>
            {/* Metric 3 */}
            <div className="metric m-amber">
              <p className="text-2xl font-semibold text-amber-600">3</p>
              <p className="text-[10px] text-gray-400 font-light mt-1">New Requirements</p>
              <div className="space-y-1 mt-2 text-left">
                {["Climate resilience","EV infrastructure","Equity scoring"].map(l => (
                  <div key={l} className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span className="text-[8px] text-gray-400">{l}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Metric 4 */}
            <div className="metric m-violet">
              <p className="text-2xl font-semibold text-violet-600">90%</p>
              <p className="text-[10px] text-gray-400 font-light mt-1">Federal Match (↑ from 80%)</p>
              <svg width="100%" height="24" className="mt-1">
                <rect y="4" width="80%" height="7" rx="3.5" fill="rgba(59,130,246,0.15)" />
                <text x="0" y="24" fill="#9ca3af" fontSize="7">80% current</text>
                <rect y="4" width="100%" height="7" rx="3.5" fill="rgba(139,92,246,0.2)" />
                <text x="84%" y="24" fill="#7c3aed" fontSize="7">90% new</text>
              </svg>
            </div>
          </div>

          {/* Key Changes */}
          <div className="p-5 rounded-2xl mb-6" style={{ background: "rgba(0,0,0,0.015)", border: "1px solid rgba(0,0,0,0.05)" }}>
            <LabelMono style={{ marginBottom: 16 }}>Key Legislative Changes</LabelMono>
            <div className="space-y-2.5">
              {[
                { icon: "↑", bg: "rgba(16,185,129,0.1)", color: "#059669", title: "Federal match increased from 80% → 90%", sub: "All highway projects under NHPP. Retroactive to Oct 1.", ref: "§ 1201", impact: "+$890M", impactColor: "#059669" },
                { icon: "Δ", bg: "rgba(245,158,11,0.1)", color: "#d97706", title: "Climate resilience assessment for projects >$25M", sub: "Vulnerability assessment + adaptation plan. 90-day review added.", ref: "§ 1305", impact: "14 affected", impactColor: "#d97706" },
                { icon: "+", bg: "rgba(59,130,246,0.1)", color: "#1d4ed8", title: "New EV charging infrastructure formula", sub: "Population + VMT weighted. Below-median adoption gets 1.2x multiplier.", ref: "§ 1402", impact: "$340M new", impactColor: "#1d4ed8" },
              ].map((c) => (
                <div key={c.title} className="flex items-start gap-4 p-4 rounded-xl bg-white" style={{ border: "1px solid rgba(0,0,0,0.05)" }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: c.bg }}>
                    <span className="text-sm font-medium" style={{ color: c.color }}>{c.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-[13px] text-gray-800 font-medium">{c.title}</p>
                    <p className="text-[11px] text-gray-400 font-light mt-1">{c.sub}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-[10px] text-blue-600 font-mono block">{c.ref}</span>
                    <span className="text-[9px] font-medium" style={{ color: c.impactColor }}>{c.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Funding Chart */}
          <div className="p-5 rounded-2xl mb-5" style={{ background: "rgba(0,0,0,0.015)", border: "1px solid rgba(0,0,0,0.05)" }}>
            <LabelMono style={{ marginBottom: 16 }}>Funding Comparison: Current vs. Proposed</LabelMono>
            <svg viewBox="0 0 620 155" className="w-full">
              <defs>
                <linearGradient id="bC" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(59,130,246,0.22)" /><stop offset="100%" stopColor="rgba(59,130,246,0.08)" />
                </linearGradient>
                <linearGradient id="bN" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(16,185,129,0.28)" /><stop offset="100%" stopColor="rgba(16,185,129,0.08)" />
                </linearGradient>
              </defs>
              {/* Highway */}
              <text x="68" y="16" textAnchor="end" fill="#6b7280" fontSize="9" fontFamily="Space Mono">Highway</text>
              <rect x="78" y="5" width="220" height="13" rx="4" fill="url(#bC)" /><text x="84" y="15" fill="#2563eb" fontSize="7.5" fontWeight="500">$4.2B</text>
              <rect x="78" y="21" width="308" height="13" rx="4" fill="url(#bN)" /><text x="84" y="31" fill="#059669" fontSize="7.5" fontWeight="500">$5.8B (+38%)</text>
              {/* Transit */}
              <text x="68" y="55" textAnchor="end" fill="#6b7280" fontSize="9" fontFamily="Space Mono">Transit</text>
              <rect x="78" y="44" width="155" height="13" rx="4" fill="url(#bC)" /><text x="84" y="54" fill="#2563eb" fontSize="7.5" fontWeight="500">$2.1B</text>
              <rect x="78" y="60" width="200" height="13" rx="4" fill="url(#bN)" /><text x="84" y="70" fill="#059669" fontSize="7.5" fontWeight="500">$2.8B (+33%)</text>
              {/* Bridge */}
              <text x="68" y="94" textAnchor="end" fill="#6b7280" fontSize="9" fontFamily="Space Mono">Bridge</text>
              <rect x="78" y="83" width="110" height="13" rx="4" fill="url(#bC)" /><text x="84" y="93" fill="#2563eb" fontSize="7.5" fontWeight="500">$1.4B</text>
              <rect x="78" y="99" width="145" height="13" rx="4" fill="url(#bN)" /><text x="84" y="109" fill="#059669" fontSize="7.5" fontWeight="500">$1.9B (+36%)</text>
              {/* EV */}
              <text x="68" y="133" textAnchor="end" fill="#6b7280" fontSize="9" fontFamily="Space Mono">EV</text>
              <text x="78" y="128" fill="#9ca3af" fontSize="7" fontStyle="italic">No current program</text>
              <rect x="78" y="138" width="78" height="13" rx="4" fill="rgba(139,92,246,0.15)" stroke="rgba(139,92,246,0.25)" strokeWidth="0.5" />
              <text x="84" y="148" fill="#7c3aed" fontSize="7.5" fontWeight="500">$340M NEW</text>
            </svg>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {["H.R. 3684", "23 U.S.C. §104", "CBO Score 2024", "State DOT Budget FY24"].map(t => <Stag key={t}>{t}</Stag>)}
          </div>
        </div>
      </div>
    </div>
  );
}