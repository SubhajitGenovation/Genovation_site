"use client";

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "110vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Mesh BG */}
      <div
        className="mesh-bg"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.15,
          backgroundImage:
            "linear-gradient(rgba(245,158,11,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.04) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />
      {/* Orbs */}
      <div
        className="orb"
        style={{
          position: "absolute",
          borderRadius: "50%",
          filter: "blur(80px)",
          pointerEvents: "none",
          willChange: "transform",
          width: "800px",
          height: "600px",
          background: "rgba(245,158,11,0.06)",
          top: "-10%",
          left: "30%",
        }}
      />
      <div
        className="orb"
        style={{
          position: "absolute",
          borderRadius: "50%",
          filter: "blur(80px)",
          pointerEvents: "none",
          willChange: "transform",
          width: "500px",
          height: "500px",
          background: "rgba(249,115,22,0.04)",
          bottom: "10%",
          right: "10%",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "8rem 2rem 0",
          width: "100%",
        }}
      >
        {/* Breadcrumb */}
        <div
          id="heroBreadcrumb"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.875rem",
            marginBottom: "3rem",
            opacity: 0,
          }}
        >
          <a href="#" style={{ color: "#6b7280", fontSize: "0.75rem", fontWeight: 300, letterSpacing: "0.05em", textDecoration: "none" }}>
            Industries
          </a>
          <span style={{ color: "#9ca3af" }}>/</span>
          <span style={{ color: "#d97706", fontSize: "0.75rem", fontWeight: 300, letterSpacing: "0.05em" }}>Manufacturing</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          {/* Left Content */}
          <div>
            {/* Industry Badge */}
            <div
              id="heroBadge"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "2rem",
                opacity: 0,
              }}
            >
              <div
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "1rem",
                  background: "linear-gradient(135deg, rgba(245,158,11,0.2), rgba(249,115,22,0.1))",
                  border: "1px solid rgba(245,158,11,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Factory icon */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="1.5">
                  <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
                  <path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/>
                </svg>
              </div>
              <div>
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.625rem",
                    color: "#d97706",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    display: "block",
                  }}
                >
                  Industry
                </span>
                <p style={{ fontSize: "1.25rem", fontWeight: 300, color: "#111827", letterSpacing: "-0.02em" }}>
                  Manufacturing
                </p>
              </div>
            </div>

            {/* Hero Title */}
            <h1
              id="heroTitle"
              style={{
                fontWeight: 300,
                letterSpacing: "-0.05em",
                lineHeight: 0.95,
                fontSize: "clamp(3rem, 8vw, 8rem)",
                marginBottom: "2rem",
                perspective: "1000px",
              }}
            >
              <span
                className="hero-line"
                style={{ display: "block", whiteSpace: "nowrap" }}
              >
                Explainable
              </span>
              <span
                className="hero-line"
                style={{
                  display: "block",
                  whiteSpace: "nowrap",
                  background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Intelligence.
              </span>
            </h1>

            {/* Subtitle 1 */}
            <div style={{ overflow: "hidden", marginBottom: "1.25rem" }} id="heroSub1">
              <p
                style={{
                  fontSize: "1.5rem",
                  color: "#4b5563",
                  fontWeight: 300,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.4,
                  transform: "translateY(100%)",
                }}
              >
                For Complex Industrial Systems
              </p>
            </div>

            {/* Subtitle 2 */}
            <div style={{ overflow: "hidden", marginBottom: "2rem" }} id="heroSub2">
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "#6b7280",
                  fontWeight: 300,
                  lineHeight: 1.6,
                  transform: "translateY(100%)",
                  maxWidth: "36rem",
                }}
              >
                Manufacturing organizations generate vast volumes of data — from machines, sensors, production systems, and enterprise platforms. Yet most operational decisions are still driven by manual analysis, delayed reports, and fragmented insights.
              </p>
            </div>

            {/* Tags */}
            <div
              id="heroTags"
              style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem", opacity: 0 }}
            >
              {["On-Premise Deployment", "OT/IT Integration", "Root Cause Analysis", "Explainable Insights"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "9999px",
                    background: "rgba(245,158,11,0.08)",
                    border: "1px solid rgba(245,158,11,0.15)",
                    color: "#92400e",
                    fontSize: "0.875rem",
                    fontWeight: 300,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Box */}
            <div
              id="heroCTA"
              style={{
                padding: "1.25rem",
                borderRadius: "1rem",
                background: "rgba(245,158,11,0.06)",
                border: "1px solid rgba(251,191,36,0.12)",
                opacity: 0,
              }}
            >
              <p style={{ color: "#1f2937", fontWeight: 300, fontSize: "0.9375rem" }}>
                Genovation converts operational data into decision-ready intelligence — without disrupting existing systems.
              </p>
            </div>
          </div>

          {/* Right: Integration Architecture Mock */}
          <div id="heroMock" style={{ opacity: 0 }}>
            <div
              className="industry-mock"
              style={{
                background: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 40px 120px -30px rgba(245,158,11,0.1)",
              }}
            >
              {/* Mock Header */}
              <div className="mock-header">
                <div className="mock-dot r" />
                <div className="mock-dot y" />
                <div className="mock-dot g" />
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#6b7280", marginLeft: "0.5rem", letterSpacing: "0.1em" }}>
                  INTEGRATION ARCHITECTURE
                </span>
              </div>

              <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {/* OT Layer */}
                <div style={{ padding: "0.75rem", borderRadius: "0.75rem", background: "rgba(239,68,68,0.04)", border: "1px solid rgba(248,113,113,0.1)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f87171" }} />
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#ef4444", letterSpacing: "0.1em", textTransform: "uppercase" }}>OT Layer — Operational Technology</span>
                  </div>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {["PLCs / SCADA", "Sensors / IoT", "MES / Historian", "Quality Systems"].map((t) => (
                      <span key={t} style={{ padding: "2px 8px", borderRadius: "6px", background: "rgba(255,255,255,0.7)", fontSize: "0.5rem", color: "#6b7280", fontFamily: "'Space Mono', monospace", border: "1px solid rgba(248,113,113,0.08)" }}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Connector */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{ width: "2px", height: "20px", background: "linear-gradient(to bottom, rgba(248,113,113,0.2), rgba(96,165,250,0.2))", borderRadius: "9999px" }} />
                </div>

                {/* IT Layer */}
                <div style={{ padding: "0.75rem", borderRadius: "0.75rem", background: "rgba(59,130,246,0.04)", border: "1px solid rgba(96,165,250,0.1)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#60a5fa" }} />
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#2563eb", letterSpacing: "0.1em", textTransform: "uppercase" }}>IT Layer — Enterprise</span>
                  </div>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {["ERP / SAP", "Data Warehouse", "Document Mgmt"].map((t) => (
                      <span key={t} style={{ padding: "2px 8px", borderRadius: "6px", background: "rgba(255,255,255,0.7)", fontSize: "0.5rem", color: "#6b7280", fontFamily: "'Space Mono', monospace", border: "1px solid rgba(96,165,250,0.08)" }}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Connector */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{ width: "2px", height: "20px", background: "linear-gradient(to bottom, rgba(96,165,250,0.2), rgba(245,158,11,0.3))", borderRadius: "9999px" }} />
                </div>

                {/* Mentis OS */}
                <div style={{ padding: "1rem", borderRadius: "0.75rem", background: "rgba(245,158,11,0.07)", border: "1px solid rgba(251,191,36,0.18)", boxShadow: "0 0 30px -10px rgba(245,158,11,0.08)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f59e0b", animation: "pulse 2s infinite" }} />
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#d97706", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700 }}>Mentis OS</span>
                  </div>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {["Data Integration", "Intelligence", "Explainability"].map((t) => (
                      <span key={t} style={{ padding: "2px 8px", borderRadius: "6px", background: "rgba(245,158,11,0.1)", fontSize: "0.5rem", color: "#92400e", fontFamily: "'Space Mono', monospace", border: "1px solid rgba(245,158,11,0.15)" }}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Connector */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{ width: "2px", height: "20px", background: "linear-gradient(to bottom, rgba(245,158,11,0.3), rgba(16,185,129,0.2))", borderRadius: "9999px" }} />
                </div>

                {/* Decision Makers */}
                <div style={{ padding: "0.75rem", borderRadius: "0.75rem", background: "rgba(16,185,129,0.04)", border: "1px solid rgba(52,211,153,0.1)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} />
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5625rem", color: "#059669", letterSpacing: "0.1em", textTransform: "uppercase" }}>Decision Makers</span>
                  </div>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {["Operators", "Engineers", "Plant Mgrs", "Executives"].map((t) => (
                      <span key={t} style={{ padding: "2px 8px", borderRadius: "6px", background: "rgba(255,255,255,0.7)", fontSize: "0.5rem", color: "#6b7280", fontFamily: "'Space Mono', monospace", border: "1px solid rgba(52,211,153,0.08)" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}