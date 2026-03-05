"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function CTASection() {
  const router = useRouter();

  return (
    <section id="cta" style={{ padding: "14rem 0", position: "relative", overflow: "hidden" }}>
      <div
        className="orb"
        style={{
          position: "absolute",
          borderRadius: "50%",
          filter: "blur(80px)",
          pointerEvents: "none",
          width: "800px",
          height: "800px",
          background: "linear-gradient(135deg, rgba(245,158,11,0.06), rgba(249,115,22,0.04), rgba(16,185,129,0.04))",
          top: "10%",
          left: "20%",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.20,
          backgroundImage: "linear-gradient(rgba(245,158,11,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.04) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      <div style={{ position: "relative", maxWidth: "56rem", margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>
        <h2
          id="ctaHeading"
          style={{
            fontWeight: 300,
            letterSpacing: "-0.05em",
            lineHeight: 0.95,
            fontSize: "clamp(4rem, 10vw, 9rem)",
            marginBottom: "3rem",
          }}
        >
          Engage<br />
          <span
            style={{
              background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            With Us.
          </span>
        </h2>

        <p
          className="r-up"
          style={{
            fontSize: "1.15rem",
            color: "#4b5563",
            fontWeight: 300,
            marginBottom: "4rem",
            lineHeight: 1.6,
          }}
        >
          If your organization is exploring AI adoption across industrial operations and requires explainable, deployable intelligence, we welcome a conversation.
        </p>

        <div
          className="r-up"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "4rem",
          }}
        >
          <div className="mag-btn">
            <button
              onClick={() => router.push('/talk-to-sales')}
              className="btn-inner"
              style={{
                padding: "1rem 2.25rem",
                borderRadius: "9999px",
                background: "linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #f59e0b 100%)",
                backgroundSize: "200% 100%",
                boxShadow: "0 0 30px -5px rgba(245,158,11,0.2), 0 0 60px -15px rgba(217,119,6,0.15)",
                border: "none",
                fontSize: "0.9375rem",
                fontWeight: 500,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
                color: "#000",
              }}
            >
              Manufacturing Inquiries
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="mag-btn">
            <button
              onClick={() => router.push('/operational-demo')}
              className="btn-inner"
              style={{
                padding: "1rem 2.25rem",
                borderRadius: "9999px",
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(0,0,0,0.1)",
                color: "#374151",
                fontSize: "0.9375rem",
                fontWeight: 300,
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              Operational Intelligence Demo
            </button>
          </div>
        </div>

        <div className="r-scale">
          <div
            style={{
              padding: "2rem",
              borderRadius: "1.5rem",
              background: "rgba(245,158,11,0.06)",
              border: "1px solid rgba(245,158,11,0.12)",
            }}
          >
            <p style={{ fontSize: "1.25rem", color: "#1f2937", fontWeight: 300, lineHeight: 1.6 }}>
              "In manufacturing, intelligence must{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 500,
                }}
              >
                earn the trust of the floor
              </span>{" "}
              before it reaches the boardroom. Genovation is built for that reality."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ManufacturingFooter() {
  return (
    <footer style={{ padding: "4rem 0", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
      <div style={{ maxWidth: "88rem", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
              <div style={{ width: "1.75rem", height: "1.75rem", borderRadius: "0.5rem", background: "linear-gradient(135deg, #34d399, #22d3ee)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3">
                  <circle cx="12" cy="12" r="3" /><path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
                </svg>
              </div>
              <span style={{ fontSize: "0.875rem", fontWeight: 300, color: "#4b5563" }}>Genovation</span>
            </div>
            <p style={{ fontSize: "0.8125rem", color: "#4b5563", fontWeight: 300, lineHeight: 1.6, maxWidth: "18rem" }}>
              Sovereign enterprise intelligence. Your data, your infrastructure, your AI.
            </p>
          </div>

          {/* Platform */}
          <div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", color: "#4b5563", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Platform</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {["Mentis AgentOS", "JUDGE", "CipherVault", "Deployment Models"].map((l) => (
                <a key={l} href="#" style={{ fontSize: "0.8125rem", color: "#4b5563", fontWeight: 300, textDecoration: "none" }}>{l}</a>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", color: "#4b5563", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Industries</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              <a href="#" style={{ fontSize: "0.8125rem", color: "#d97706", fontWeight: 300, textDecoration: "none" }}>Manufacturing</a>
              {["Finance", "Healthcare", "Government"].map((l) => (
                <a key={l} href="#" style={{ fontSize: "0.8125rem", color: "#4b5563", fontWeight: 300, textDecoration: "none" }}>{l}</a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6875rem", color: "#4b5563", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Company</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {["About", "Careers", "Security", "Contact"].map((l) => (
                <a key={l} href="#" style={{ fontSize: "0.8125rem", color: "#4b5563", fontWeight: 300, textDecoration: "none" }}>{l}</a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(0,0,0,0.04)", paddingTop: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <p style={{ fontSize: "0.75rem", color: "#4b5563", fontWeight: 300 }}>© 2026 Genovation. All rights reserved.</p>
          <div style={{ display: "flex", gap: "2rem" }}>
            {["Privacy", "Terms", "Security"].map((l) => (
              <a key={l} href="#" style={{ fontSize: "0.75rem", color: "#4b5563", fontWeight: 300, textDecoration: "none" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}