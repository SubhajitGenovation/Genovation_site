"use client";

import { Briefcase, Target, Lightbulb, Scale } from "lucide-react";

const PERSONAS = [
  {
    iconBg: "rgba(16,185,129,0.15)",
    iconBorder: "rgba(16,185,129,0.25)",
    icon: <Briefcase size={18} color="#10b981" />,
    title: "CXOs & Executive Teams",
    desc: "Strategic clarity with defensible reasoning for board presentations and high-stakes decisions.",
  },
  {
    iconBg: "rgba(6,182,212,0.15)",
    iconBorder: "rgba(6,182,212,0.25)",
    icon: <Target size={18} color="#06b6d4" />,
    title: "Strategy & Corporate Development",
    desc: "Continuous intelligence without manual aggregation. Focus on analysis, not data collection.",
  },
  {
    iconBg: "rgba(139,92,246,0.15)",
    iconBorder: "rgba(139,92,246,0.25)",
    icon: <Lightbulb size={18} color="#a78bfa" />,
    title: "Innovation Leaders",
    desc: "Signal-driven insight into emerging opportunities and technology trends before they go mainstream.",
  },
  {
    iconBg: "rgba(245,158,11,0.15)",
    iconBorder: "rgba(245,158,11,0.25)",
    icon: <Scale size={18} color="#f59e0b" />,
    title: "Board & Governance Committees",
    desc: "Transparent inputs to high-impact decisions with complete audit trails and explainable reasoning.",
  },
];

export default function PersonasSection() {
  return (
    <section
      id="personas"
      className="relative overflow-hidden"
      style={{ background: "#0A0A0A", paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      {/* Subtle orbs */}
      <div
        className="orb"
        style={{
          width: 500,
          height: 400,
          background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
          top: "10%",
          left: "20%",
        }}
      />
      <div
        className="orb"
        style={{
          width: 400,
          height: 350,
          background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)",
          bottom: "10%",
          right: "20%",
        }}
      />
      {/* Top divider */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "66%",
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-8">

        {/* ── Section label ── */}
        <div
          className="r-up"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            marginBottom: "1.5rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "0.65rem",
              color: "#10b981",
              letterSpacing: "0.15em",
            }}
          >
            04
          </span>
          <div
            style={{
              width: 32,
              height: 1,
              background: "rgba(16,185,129,0.45)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "0.65rem",
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Who This Is For
          </span>
        </div>

        {/* ── Heading ── */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "3.5rem",
          }}
        >
          <h2
            className="r-up"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontWeight: 300,
              fontFamily: "var(--font-urbanist), sans-serif",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            High-Consequence
            <br />
            Decisions
          </h2>
          <p
            className="r-up"
            style={{
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.35)",
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            Trusted by leaders where strategic clarity is non-negotiable.
          </p>
        </div>

        {/* ── 2×2 card grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: 14,
          }}
        >
          {PERSONAS.map(({ iconBg, iconBorder, icon, title, desc }, i) => (
            <div
              key={title}
              className="r-up"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
                padding: "1.5rem 1.75rem",
                borderRadius: 16,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                transition: "border-color 0.2s",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 11,
                  background: iconBg,
                  border: `1px solid ${iconBorder}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {icon}
              </div>
              {/* Text */}
              <div>
                <h3
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "#ffffff",
                    fontFamily: "var(--font-urbanist), sans-serif",
                    marginBottom: "0.4rem",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "rgba(255,255,255,0.35)",
                    fontWeight: 300,
                    lineHeight: 1.65,
                  }}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
