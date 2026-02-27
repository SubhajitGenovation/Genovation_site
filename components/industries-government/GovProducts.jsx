"use client";

import CitizenServicesProduct from "./CitizenServicesProduct";
import FOIAProduct from "./FOIAProduct";
import PolicyProduct from "./PolicyProduct";
import ThreeTenProduct from "./ThreeTenProduct";
import PublicDataProduct from "./PublicDataProduct";
import SpendingProduct from "./SpendingProduct";
import PermitProduct from "./PermitProduct";

export default function GovProducts() {
  return (
    <section className="py-32 relative overflow-hidden" id="products">
      <div className="orb" style={{ width: 700, height: 500, background: "rgba(59,130,246,0.04)", top: "2%", left: "10%" }} />
      <div className="orb" style={{ width: 500, height: 400, background: "rgba(139,92,246,0.03)", bottom: "20%", right: "10%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 r-up"
            style={{ background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.08)" }}
          >
            <svg className="w-3 h-3 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
            </svg>
            <span className="text-gray-500 text-[11px] font-light tracking-[0.25em] uppercase">Product Preview</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Government Intelligence<br />
            <span className="text-gradient-blue">Products</span>
          </h2>
        </div>

        <CitizenServicesProduct />
        <FOIAProduct />
        <PolicyProduct />
        <ThreeTenProduct />
        <PublicDataProduct />
        <SpendingProduct />
        <PermitProduct />

        {/* Additional Use Case Cards */}
        <div className="grid lg:grid-cols-2 gap-8" id="useCaseCards">
          {/* Inter-Agency Intelligence */}
          <div className="card p-8 r-up" style={{ borderRadius: 24, borderColor: "rgba(59,130,246,0.15)" }}>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}>
                <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M3 15h18M9 3v18" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-gray-900">Inter-Agency Intelligence</h3>
            </div>
            <div className="p-4 rounded-xl mb-5" style={{ background: "rgba(0,0,0,0.02)", border: "1px solid rgba(0,0,0,0.06)" }}>
              <div className="flex items-center justify-between mb-3">
                <span style={{ fontSize: 9, fontFamily: "'Space Mono', monospace", textTransform: "uppercase", letterSpacing: "0.15em", color: "#9ca3af" }}>Cross-Agency Query</span>
                <span style={{ padding: "3px 10px", borderRadius: 20, fontSize: 10, fontWeight: 500, background: "rgba(16,185,129,0.1)", color: "#059669", border: "1px solid rgba(16,185,129,0.2)" }}>Authorized</span>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {[["DOT","47 records"],["EPA","23 records"],["HUD","18 records"]].map(([agency, records]) => (
                  <div key={agency} className="p-2.5 rounded-lg text-center" style={{ background: "rgba(59,130,246,0.04)", border: "1px solid rgba(59,130,246,0.12)" }}>
                    <p className="text-sm font-semibold text-blue-600">{agency}</p>
                    <p className="text-[10px] text-gray-400 font-light">{records}</p>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-gray-400 font-light">Federated query. Data remains at source agencies.</p>
            </div>
            <div className="space-y-2">
              {["Cross-agency queries without data movement", "Jurisdiction-aware access controls"].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  <span className="text-[13px] text-gray-500 font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Budget & Grant Intelligence */}
          <div className="card p-8 r-up" style={{ borderRadius: 24, borderColor: "rgba(59,130,246,0.15)" }}>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}>
                <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-gray-900">Budget &amp; Grant Intelligence</h3>
            </div>
            <div className="p-4 rounded-xl mb-5" style={{ background: "rgba(0,0,0,0.02)", border: "1px solid rgba(0,0,0,0.06)" }}>
              <div style={{ maxWidth: "100%", padding: "11px 16px", borderRadius: "18px 18px 4px 18px", background: "rgba(59,130,246,0.07)", border: "1px solid rgba(59,130,246,0.1)", marginBottom: 12 }}>
                <p className="text-[11px] text-gray-600 font-light">Which grants are underutilized this fiscal year?</p>
              </div>
              <div className="p-3 rounded-xl bg-white" style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
                <p className="text-[11px] text-gray-500 font-light mb-2">3 programs below 60% obligation rate:</p>
                <div className="space-y-1.5">
                  {["Rural Infrastructure: 47% ($12M unobligated)", "Clean Energy: 52% ($8.4M)", "Workforce Dev: 58% ($3.2M)"].map(item => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span className="text-[10px] text-gray-500 font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-2">
              {["Budget execution monitoring and analysis", "Grant compliance and reporting assistance"].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  <span className="text-[13px] text-gray-500 font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}