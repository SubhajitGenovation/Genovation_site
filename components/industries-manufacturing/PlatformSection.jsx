"use client";

import { Eye, Shield, Layers, Users } from "lucide-react";

export default function PlatformSection() {
  return (
    <section id="platform" style={{ padding: "12rem 0", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.15, backgroundImage: "linear-gradient(rgba(245,158,11,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.04) 1px, transparent 1px)", backgroundSize: "100px 100px" }} />
      <div className="orb" style={{ position: "absolute", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none", width: "600px", height: "500px", background: "rgba(16,185,129,0.04)", top: "15%", right: "20%" }} />

      <div style={{ position: "relative", maxWidth: "72rem", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "6rem" }}>
          <div className="r-up" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1.25rem", borderRadius: "9999px", background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.12)", marginBottom: "2rem" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
            <span style={{ color: "#059669", fontSize: "0.6875rem", fontWeight: 300, letterSpacing: "0.25em", textTransform: "uppercase" }}>Platform</span>
          </div>
          <h2 className="r-up" style={{ fontWeight: 300, letterSpacing: "-0.04em", lineHeight: 1.0, fontSize: "clamp(2.5rem, 7vw, 6rem)" }}>
            Built for<br />
            <span style={{ background: "linear-gradient(135deg, #059669 0%, #0891b2 50%, #2563eb 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Industrial Environments
            </span>
          </h2>
        </div>

        {/* 3 Platform Cards */}
        <div className="r-up" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", marginBottom: "4rem" }}>
          {[
            {
              label: "Deployment",
              color: "#d97706",
              bg: "rgba(245,158,11,0.05)",
              border: "rgba(245,158,11,0.08)",
              cardBorder: "rgba(245,158,11,0.12)",
              items: ["On-Premise", "Private Industrial Networks", "Edge-Adjacent"],
            },
            {
              label: "Integration",
              color: "#2563eb",
              bg: "rgba(59,130,246,0.04)",
              border: "rgba(59,130,246,0.08)",
              cardBorder: "rgba(59,130,246,0.12)",
              items: ["Historians & Databases", "Existing ETL Pipelines", "No Rip-and-Replace"],
            },
            {
              label: "Explainability",
              color: "#059669",
              bg: "rgba(16,185,129,0.04)",
              border: "rgba(16,185,129,0.08)",
              cardBorder: "rgba(16,185,129,0.12)",
              items: ["Measurable Variables", "Clear Reasoning Paths", "Audit Trails"],
            },
          ].map((col, i) => (
            <div key={i} className="card" style={{ padding: "2rem", height: "100%", borderColor: col.cardBorder }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.625rem", color: col.color, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1.25rem" }}>{col.label}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {col.items.map((item) => (
                  <div key={item} style={{ padding: "0.75rem", borderRadius: "0.75rem", background: col.bg, border: `1px solid ${col.border}` }}>
                    <span style={{ fontSize: "0.875rem", color: "#374151", fontWeight: 300 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Feature Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "3rem" }}>
          {[
            { icon: <Eye size={20} color="#d97706" />, title: "Explanation, not just visualization", sub: 'Insights that answer "why", not just "what"', dir: "r-left" },
            { icon: <Shield size={20} color="#d97706" />, title: "Designed for OT-aware environments", sub: "Respects operational technology boundaries", dir: "r-right" },
            { icon: <Layers size={20} color="#d97706" />, title: "Respects infrastructure investments", sub: "Works with existing systems, no forced replacement", dir: "r-left" },
            { icon: <Users size={20} color="#d97706" />, title: "Builds trust across roles", sub: "From operators to engineers to leadership", dir: "r-right" },
          ].map((item, i) => (
            <div key={i} className={item.dir}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "1.5rem", borderRadius: "1rem", background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.75rem", background: "rgba(245,158,11,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <p style={{ color: "#111827", fontWeight: 500, marginBottom: "4px" }}>{item.title}</p>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280", fontWeight: 300 }}>{item.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="r-up">
          <div style={{ padding: "1.5rem", borderRadius: "1rem", background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.12)", textAlign: "center" }}>
            <p style={{ fontSize: "1.125rem", color: "#92400e", fontWeight: 300 }}>Adopted where credibility matters more than novelty.</p>
          </div>
        </div>
      </div>
    </section>
  );
}