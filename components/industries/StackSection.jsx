"use client";

import { Layers } from "lucide-react";
import { industries } from "./industryData";
import Mock1Financial from "./Mock1Financial";
import Mock2Defense from "./Mock2Defense";
import Mock3Manufacturing from "./Mock3Manufacturing";
import Mock4Healthcare from "./Mock4Healthcare";
import Mock5Pharma from "./Mock5Pharma";
import Mock6Energy from "./Mock6Energy";
import Mock7Government from "./Mock7Government";

const mockComponents = {
  mock1: Mock1Financial,
  mock2: Mock2Defense,
  mock3: Mock3Manufacturing,
  mock4: Mock4Healthcare,
  mock5: Mock5Pharma,
  mock6: Mock6Energy,
  mock7: Mock7Government,
};

const cardStyle = {
  background: "#f7f5f2",
  border: "1px solid rgba(0,0,0,0.1)",
  borderRadius: 24,
  overflow: "hidden",
  boxShadow: "0 -1px 15px rgba(0,0,0,0.04),0 8px 40px -10px rgba(0,0,0,0.1)",
};

const stickyTops = [80, 95, 110, 125, 140, 155, 170];

export default function StackSection() {
  return (
    <section className="relative pb-32 pt-32" id="stackSection">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(rgba(16,185,129,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(16,185,129,0.06) 1px,transparent 1px)",
          backgroundSize: "100px 100px",
          opacity: 0.1,
        }}
      />

      {/* Header */}
      <div className="text-center mb-24 relative z-10 px-8">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-800/[0.06] border border-slate-800/[0.08] mb-8 r-up">
          <Layers className="w-3 h-3 text-slate-600" />
          <span className="text-slate-600 text-[11px] font-light tracking-[0.25em] uppercase">Deep Dive</span>
        </div>
        <h2
          className="r-up"
          style={{ fontWeight: 300, letterSpacing: "-0.04em", lineHeight: 1, fontSize: "clamp(3rem,7vw,8rem)" }}
        >
          Seven Industries.<br />
          <span style={{ background: "linear-gradient(135deg,#059669 0%,#0891b2 50%,#2563eb 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Built for Each.
          </span>
        </h2>
        <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 r-up">
          Scroll to explore each sector and see the platform in action.
        </p>
      </div>

      {/* Stack Container */}
      <div className="max-w-6xl mx-auto px-8 relative z-10" id="stackContainer">
        {industries.map((ind, i) => {
          const MockComponent = mockComponents[ind.id];
          const defaultBadges = Array.isArray(ind.badges)
            ? ind.badges.map((b) =>
                typeof b === "string"
                  ? { label: b, style: { background: "rgba(71,85,105,0.1)", color: "#475569" } }
                  : b
              )
            : [];

          return (
            <div
              key={ind.id}
              className="stack-card"
              style={{ zIndex: i + 1, position: "sticky", top: stickyTops[i], marginBottom: 40, borderRadius: 24, willChange: "transform" }}
            >
              <div className="stack-card-inner" style={cardStyle}>
                {/* Header Row */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 20px", borderBottom: "1px solid rgba(0,0,0,0.06)", background: "#f0eee9" }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Mono',monospace", fontSize: 11, fontWeight: 700, background: "rgba(0,0,0,0.06)", color: "#475569", flexShrink: 0 }}>
                    {ind.num}
                  </div>
                  <span style={{ fontSize: 11, color: "#475569", fontFamily: "'Space Mono',monospace", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    {ind.label}
                  </span>
                  <div className="ml-auto flex items-center gap-2 flex-wrap">
                    {defaultBadges.map((b, bi) => (
                      <span
                        key={bi}
                        style={{ padding: "2px 8px", borderRadius: 4, fontSize: 9, fontFamily: "'Space Mono',monospace", ...b.style }}
                      >
                        {b.label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Body Grid */}
                <div className="grid md:grid-cols-2" style={{ gap: 0 }}>
                  {/* Left: Description */}
                  <div className="p-8 md:p-10 md:border-r border-black/[0.04]">
                    <h3 className="text-2xl md:text-3xl font-light text-gray-900 tracking-tight mb-2">{ind.title}</h3>
                    <p className="text-sm text-slate-500 font-light mb-5">{ind.subtitle}</p>
                    <p className="text-[15px] text-gray-600 font-light leading-relaxed mb-5">{ind.description}</p>

                    <div className="space-y-1.5 mb-5">
                      {ind.bullets.map((b, bi) => (
                        <div key={bi} className="flex items-start gap-3">
                          <div className="w-1 h-1 rounded-full bg-emerald-700 mt-2.5 flex-shrink-0" />
                          <span className="text-gray-600 font-light text-sm">{b}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      {ind.useCases.map((uc, ui) => (
                        <div
                          key={ui}
                          className="uc-row"
                          style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 12, border: "1px solid rgba(0,0,0,0.04)", background: "rgba(255,255,255,0.4)", transition: "all 0.3s" }}
                        >
                          <div style={{ width: 32, height: 32, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: "rgba(0,0,0,0.04)" }}>
                            <UseCaseIcon name={uc.icon} />
                          </div>
                          <div>
                            <div className="text-[13px] text-gray-700 font-light">{uc.title}</div>
                            <div className="text-[11px] text-gray-400 font-light">{uc.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Mock */}
                  <div className="p-6 md:p-8">
                    {MockComponent && <MockComponent />}
                    <div className="mt-3 p-3 rounded-xl" style={{ background: "rgba(30,41,59,0.04)", border: "1px solid rgba(30,41,59,0.06)" }}>
                      <p className="text-[11px] text-gray-500 font-light">
                        <span className="text-slate-700 font-normal">Why Genovation:</span> {ind.why}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Inline icon resolver to avoid lucide dynamic imports
function UseCaseIcon({ name }) {
  const cls = "w-3.5 h-3.5 text-slate-500";
  const icons = {
    "file-text":     <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    "trending-up":   <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    "receipt":       <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z"/><line x1="8" y1="9" x2="16" y2="9"/><line x1="8" y1="13" x2="16" y2="13"/></svg>,
    "scroll-text":   <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h0a2 2 0 0 0-2 2v3h4"/><path d="M19 3H9a2 2 0 0 0-2 2v12"/><line x1="13" y1="8" x2="17" y2="8"/><line x1="13" y1="12" x2="17" y2="12"/></svg>,
    "library":       <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
    "radar":         <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/><path d="M4 6h.01"/><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"/><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"/><path d="M12 18h.01"/><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"/><circle cx="12" cy="12" r="2"/><path d="m13.41 10.59 5.66-5.66"/></svg>,
    "activity":      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    "truck":         <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
    "clipboard-check":<svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="2"/><path d="m9 14 2 2 4-4"/></svg>,
    "clipboard-list":<svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="2"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="15" y2="16"/></svg>,
    "flask-conical": <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2v6l3.5 7A4 4 0 0 1 14 22H10a4 4 0 0 1-3.5-7L10 8V2"/><line x1="8.5" y1="2" x2="15.5" y2="2"/></svg>,
    "lock":          <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
    "search":        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    "file-check-2":  <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m3 15 2 2 4-4"/></svg>,
    "book-open":     <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
    "gauge":         <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>,
    "shield-check":  <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
    "wrench":        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
    "gavel":         <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10"/><path d="m16 16 6-6"/><path d="m8 8 6-6"/><path d="m9 7 8 8"/></svg>,
    "network":       <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>,
    "compass":       <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>,
  };
  return icons[name] || <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /></svg>;
}
