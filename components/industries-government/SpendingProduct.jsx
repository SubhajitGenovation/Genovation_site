"use client";

import { AppDots, AppTab, LabelMono, GovSeal, IconShieldCheck } from "./Ui";

export default function SpendingProduct() {
  const contractors = [
    { name: "Apex Paving Inc.", amount: "$6.4M", pct: "34.2%", width: "68%" },
    { name: "MidState Construction", amount: "$4.1M", pct: "21.9%", width: "44%" },
    { name: "River Valley Roads", amount: "$3.8M", pct: "20.3%", width: "40%" },
    { name: "United Materials", amount: "$2.7M", pct: "14.4%", width: "29%" },
  ];

  return (
    <div className="mb-36">
      <div className="flex items-center gap-4 mb-6 r-up">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)" }}>
          <svg className="w-7 h-7" style={{ color: "#059669" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="22" x2="21" y2="22" /><line x1="6" y1="18" x2="6" y2="11" /><line x1="10" y1="18" x2="10" y2="11" />
            <line x1="14" y1="18" x2="14" y2="11" /><line x1="18" y1="18" x2="18" y2="11" /><polygon points="12 2 20 7 4 7" />
          </svg>
        </div>
        <div>
          <h3 className="text-2xl font-light text-gray-900 tracking-tight">Public Spending Transparency</h3>
          <p className="text-[13px] text-gray-400 font-light mt-0.5">Public-facing spending queries · Contractor analysis · Bid history · Vendor concentration alerts</p>
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
              {["Spending Query", "Vendor Directory", "Budget Tracker"].map((t, i) => (
                <AppTab key={t} active={i === 0}>{t}</AppTab>
              ))}
            </div>
          </div>
          <GovSeal>
            <span className="text-[10px] text-blue-600 font-medium tracking-wider">PUBLIC TRANSPARENCY PORTAL</span>
          </GovSeal>
        </div>

        {/* Body */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 220px" }}>
          <div className="p-6 space-y-4">
            {/* User */}
            <div style={{ maxWidth: "72%", marginLeft: "auto", padding: "12px 16px", borderRadius: "18px 18px 4px 18px", background: "rgba(59,130,246,0.07)", border: "1px solid rgba(59,130,246,0.1)" }}>
              <p className="text-[13px] text-gray-700 font-light">How much did the city spend on road maintenance in FY2024 vs FY2023? Who are the top contractors?</p>
            </div>

            {/* AI response */}
            <div style={{ padding: "16px 20px", borderRadius: "20px 20px 20px 4px", background: "rgba(0,0,0,0.012)", border: "1px solid rgba(0,0,0,0.05)" }}>
              <p className="text-[13px] text-gray-600 font-light mb-3">Road maintenance spending, City of Riverside:</p>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 rounded-xl text-center" style={{ background: "rgba(0,0,0,0.02)", border: "1px solid rgba(0,0,0,0.06)" }}>
                  <p className="text-[10px] text-gray-400">FY2023</p>
                  <p className="text-xl font-semibold text-gray-700">$14.2M</p>
                </div>
                <div className="p-3 rounded-xl text-center" style={{ background: "rgba(16,185,129,0.04)", border: "1px solid rgba(16,185,129,0.12)" }}>
                  <p className="text-[10px] text-gray-400">FY2024</p>
                  <p className="text-xl font-semibold text-emerald-600">$18.7M</p>
                  <p className="text-[10px] text-emerald-600 font-medium">+31.7%</p>
                </div>
              </div>
              <p className="text-[11px] text-gray-500 font-light mb-4">Increase driven by $3.8M in emergency repairs (Resolution 2024-047) and $0.7M inflationary adjustment.</p>

              <LabelMono style={{ marginBottom: 12 }}>Top Contractors FY2024</LabelMono>
              <div className="space-y-2 mb-4">
                {contractors.map(({ name, amount, pct, width }) => (
                  <div key={name} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "10px 14px", borderRadius: 12, background: "rgba(255,255,255,0.85)",
                    border: "1px solid rgba(0,0,0,0.05)",
                  }}>
                    <div className="flex items-center gap-3 flex-1">
                      <span className="text-[12px] text-gray-700 font-medium" style={{ width: 160 }}>{name}</span>
                      <div style={{ flex: 1, height: 10, borderRadius: 6, background: "rgba(0,0,0,0.04)", overflow: "hidden" }}>
                        <div style={{ height: "100%", borderRadius: 6, background: "rgba(59,130,246,0.4)", width }} />
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[12px] text-gray-600 font-medium">{amount}</span>
                      <span className="text-[10px] text-gray-400">{pct}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl" style={{ background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.15)" }}>
                <p className="text-[11px] text-amber-700 font-medium mb-1">⚠ Observation</p>
                <p className="text-[11px] text-gray-500 font-light">Apex Paving has held 34.2% of road contracts for 3 consecutive years, exceeding the city&apos;s 30% single-vendor concentration guideline (Admin Policy 22-04).</p>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="p-4 space-y-4" style={{ borderLeft: "1px solid rgba(0,0,0,0.05)" }}>
            <div>
              <LabelMono style={{ marginBottom: 8 }}>Data Sources</LabelMono>
              <div className="space-y-1.5">
                {["Adopted Budget FY23-24", "Vendor Payment Ledger", "Council Resolutions DB", "Procurement System"].map(s => (
                  <div key={s} className="flex items-center gap-2 text-[10px] text-gray-500 font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-3 rounded-xl" style={{ background: "rgba(59,130,246,0.04)", border: "1px solid rgba(59,130,246,0.1)" }}>
              <p className="text-[9px] text-blue-600 font-medium mb-1">Transparency</p>
              <p className="text-[9px] text-gray-500 font-light">All data from official public records. Amounts reflect actual disbursements.</p>
            </div>
            <div>
              <LabelMono style={{ marginBottom: 8 }}>Related Queries</LabelMono>
              <div className="space-y-1.5">
                {['"Compare with neighbors"', '"Apex bid history"', '"Road conditions by ward"'].map(q => (
                  <div key={q} className="p-2.5 rounded-lg text-[10px] text-blue-600 bg-white" style={{ border: "1px solid rgba(0,0,0,0.06)" }}>{q}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}