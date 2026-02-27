"use client";

import { Database, ShieldCheck, Server, BarChart2, Brain, Clock, HelpCircle, Layers, User, Zap, GitBranch, Link, MessageSquare } from "lucide-react";

export default function ChallengeSection() {
  return (
    <section id="challenge" style={{ padding: "12rem 0", position: "relative" }}>
      {/* Mesh BG */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.15, backgroundImage: "linear-gradient(rgba(245,158,11,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.04) 1px, transparent 1px)", backgroundSize: "100px 100px" }} />
      {/* Orb */}
      <div style={{ position: "absolute", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none", width: "600px", height: "500px", background: "rgba(245,158,11,0.04)", top: "10%", left: "20%" }} className="orb" />

      <div style={{ position: "relative", maxWidth: "72rem", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "6rem" }}>
          <div
            className="r-up"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 1.25rem",
              borderRadius: "9999px",
              background: "rgba(245,158,11,0.08)",
              border: "1px solid rgba(245,158,11,0.12)",
              marginBottom: "2rem",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <span style={{ color: "#d97706", fontSize: "0.6875rem", fontWeight: 300, letterSpacing: "0.25em", textTransform: "uppercase" }}>The Challenge</span>
          </div>
          <h2
            className="r-up"
            style={{ fontWeight: 300, letterSpacing: "-0.04em", lineHeight: 1.0, fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            The Reality of AI<br />
            <span style={{ background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              in Manufacturing
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", marginBottom: "4rem" }}>
          {/* Card 1 */}
          <div className="r-up">
            <div className="card" style={{ padding: "2.5rem", height: "100%", borderColor: "rgba(245,158,11,0.12)" }}>
              <div style={{ width: "3.5rem", height: "3.5rem", borderRadius: "1rem", background: "rgba(245,158,11,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                <Database size={28} color="#d97706" />
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 500, color: "#111827", marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>Data Is Abundant, Insight Is Not</h3>
              <p style={{ fontSize: "0.875rem", color: "#6b7280", fontWeight: 300, lineHeight: 1.6, marginBottom: "1.25rem" }}>Plants generate data continuously, but insights arrive too late, without root causes, or disconnected from SOPs.</p>
              <div style={{ padding: "0.75rem", borderRadius: "0.75rem", background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.1)" }}>
                <p style={{ fontSize: "0.75rem", color: "#92400e", fontWeight: 300 }}>Dashboards show what happened. They rarely explain why.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="r-up">
            <div className="card" style={{ padding: "2.5rem", height: "100%", borderColor: "rgba(217,119,6,0.12)" }}>
              <div style={{ width: "3.5rem", height: "3.5rem", borderRadius: "1rem", background: "rgba(249,115,22,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                <ShieldCheck size={28} color="#ea580c" />
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 500, color: "#111827", marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>Operational Trust Matters</h3>
              <p style={{ fontSize: "0.875rem", color: "#6b7280", fontWeight: 300, lineHeight: 1.6, marginBottom: "1.25rem" }}>Production decisions affect safety, quality, throughput, and cost. Unexplainable AI recommendations are rarely accepted.</p>
              <div style={{ padding: "0.75rem", borderRadius: "0.75rem", background: "rgba(249,115,22,0.04)", border: "1px solid rgba(249,115,22,0.1)" }}>
                <p style={{ fontSize: "0.75rem", color: "#9a3412", fontWeight: 300 }}>The floor needs to trust the insight before acting on it.</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="r-up">
            <div className="card" style={{ padding: "2.5rem", height: "100%", borderColor: "rgba(244,63,94,0.1)" }}>
              <div style={{ width: "3.5rem", height: "3.5rem", borderRadius: "1rem", background: "rgba(239,68,68,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                <Server size={28} color="#ef4444" />
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 500, color: "#111827", marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>Infrastructure Constraints</h3>
              <p style={{ fontSize: "0.875rem", color: "#6b7280", fontWeight: 300, lineHeight: 1.6, marginBottom: "1.25rem" }}>Legacy systems, OT-IT separation, and on-premise requirements are the norm. Cloud-centric AI often fails to fit.</p>
              <div style={{ padding: "0.75rem", borderRadius: "0.75rem", background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.08)" }}>
                <p style={{ fontSize: "0.75rem", color: "#dc2626", fontWeight: 300 }}>Many AI solutions can't meet manufacturing realities.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="r-scale">
          <div style={{ background: "rgba(255,255,255,0.85)", boxShadow: "0 1px 3px rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "20px", padding: "2.5rem" }}>
            <h3 style={{ textAlign: "center", fontSize: "1.125rem", fontWeight: 500, color: "#111827", marginBottom: "2.5rem", letterSpacing: "-0.02em" }}>
              Traditional BI vs. Explainable Intelligence
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
              {/* Traditional */}
              <div style={{ background: "rgba(244,63,94,0.04)", border: "1px solid rgba(244,63,94,0.1)", borderRadius: "16px", padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                  <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.75rem", background: "rgba(251,113,133,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <BarChart2 size={20} color="#fb7185" />
                  </div>
                  <h4 style={{ fontSize: "1.125rem", fontWeight: 500, color: "#374151" }}>Traditional Dashboards</h4>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {[
                    { icon: <Clock size={16} color="#9ca3af" />, text: "Shows metrics after the fact" },
                    { icon: <HelpCircle size={16} color="#9ca3af" />, text: "No root cause explanation" },
                    { icon: <Layers size={16} color="#9ca3af" />, text: "Disconnected from SOPs" },
                    { icon: <User size={16} color="#9ca3af" />, text: "Requires analyst interpretation" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem", borderRadius: "0.75rem", background: "rgba(255,255,255,0.6)" }}>
                      {item.icon}
                      <span style={{ fontSize: "0.875rem", color: "#6b7280", fontWeight: 300 }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Genovation */}
              <div style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.15)", borderRadius: "16px", padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                  <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.75rem", background: "rgba(245,158,11,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Brain size={20} color="#d97706" />
                  </div>
                  <h4 style={{ fontSize: "1.125rem", fontWeight: 500, color: "#92400e" }}>Genovation Intelligence</h4>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {[
                    { icon: <Zap size={16} color="#f59e0b" />, text: "Real-time explainable insights" },
                    { icon: <GitBranch size={16} color="#f59e0b" />, text: "Automated root cause analysis" },
                    { icon: <Link size={16} color="#f59e0b" />, text: "Tied to process context" },
                    { icon: <MessageSquare size={16} color="#f59e0b" />, text: "Natural language answers" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem", borderRadius: "0.75rem", background: "rgba(255,255,255,0.6)" }}>
                      {item.icon}
                      <span style={{ fontSize: "0.875rem", color: "#374151", fontWeight: 300 }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}