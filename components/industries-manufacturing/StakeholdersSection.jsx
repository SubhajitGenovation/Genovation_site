"use client";

import { Users, HardHat, Settings, Wrench, Truck, Monitor, Rocket, Target, Flask, GitMerge, TrendingUp } from "lucide-react";

export default function StakeholdersSection() {
  return (
    <section id="stakeholders" style={{ padding: "12rem 0", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.15, backgroundImage: "linear-gradient(rgba(245,158,11,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.04) 1px, transparent 1px)", backgroundSize: "100px 100px" }} />
      <div className="orb" style={{ position: "absolute", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none", width: "500px", height: "400px", background: "rgba(245,158,11,0.04)", top: "20%", left: "10%" }} />

      <div style={{ position: "relative", maxWidth: "72rem", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem" }}>
          {/* Left: Stakeholders */}
          <div className="r-left">
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1.25rem", borderRadius: "9999px", background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.12)", marginBottom: "2rem" }}>
              <Users size={12} color="#d97706" />
              <span style={{ color: "#d97706", fontSize: "0.6875rem", fontWeight: 300, letterSpacing: "0.25em", textTransform: "uppercase" }}>Who We Work With</span>
            </div>
            <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 300, color: "#111827", letterSpacing: "-0.02em", marginBottom: "2rem" }}>Typical Stakeholders</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { icon: <HardHat size={20} color="#d97706" />, label: "Plant Managers" },
                { icon: <Settings size={20} color="#d97706" />, label: "Operations Leadership" },
                { icon: <Wrench size={20} color="#d97706" />, label: "Industrial Engineering Teams" },
                { icon: <Truck size={20} color="#d97706" />, label: "Supply Chain & Procurement Heads" },
                { icon: <Monitor size={20} color="#d97706" />, label: "CIOs & Digital Transformation Leaders" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.25rem", borderRadius: "1rem", background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.06)" }}>
                  <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.75rem", background: "rgba(245,158,11,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.icon}</div>
                  <p style={{ color: "#1f2937", fontWeight: 300 }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Deployment */}
          <div className="r-right">
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1.25rem", borderRadius: "9999px", background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.12)", marginBottom: "2rem" }}>
              <Rocket size={12} color="#059669" />
              <span style={{ color: "#059669", fontSize: "0.6875rem", fontWeight: 300, letterSpacing: "0.25em", textTransform: "uppercase" }}>How We Deploy</span>
            </div>
            <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 300, color: "#111827", letterSpacing: "-0.02em", marginBottom: "1rem" }}>Deployment Approach</h3>
            <p style={{ color: "#6b7280", fontWeight: 300, marginBottom: "2rem", lineHeight: 1.6 }}>Manufacturing engagements typically begin with:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { icon: <Target size={20} color="#d97706" />, title: "Defined Operational Use Case", sub: "Clear scope and measurable objectives" },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>, title: "Controlled Pilot Deployment", sub: "Validated on selected lines or processes" },
                { icon: <GitMerge size={20} color="#d97706" />, title: "Integration with Selected Data Sources", sub: "Historians, databases, document systems" },
                { icon: <TrendingUp size={20} color="#d97706" />, title: "Phased Expansion", sub: "Across plants or functions based on results" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "1.25rem", borderRadius: "1rem", background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.06)" }}>
                  <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.75rem", background: "rgba(245,158,11,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <p style={{ color: "#111827", fontWeight: 500 }}>{item.title}</p>
                    <p style={{ fontSize: "0.875rem", color: "#6b7280", fontWeight: 300 }}>{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ marginTop: "1.5rem", fontSize: "0.875rem", color: "#9ca3af", fontStyle: "italic", fontWeight: 300 }}>All deployments prioritize continuity of operations and system reliability.</p>
          </div>
        </div>
      </div>
    </section>
  );
}