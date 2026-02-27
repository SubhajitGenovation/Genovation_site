"use client";

import { Check } from "lucide-react";

const ROWS = [
  { capability: "Intelligence Model", traditional: "Static reports",  ours: "Continuous"   },
  { capability: "Synthesis",          traditional: "Manual",          ours: "Automated"    },
  { capability: "Transparency",       traditional: "Black-box",       ours: "Explainable"  },
  { capability: "Data Handling",      traditional: "External cloud",  ours: "Sovereign"    },
  { capability: "Governance",         traditional: "No audit trail",  ours: "Full Lineage" },
];

export default function ComparisonSection() {
  return (
    <section
      id="comparison"
      className="relative overflow-hidden"
      style={{ background: "#F0EEE8", paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      {/* Subtle orbs */}
      <div
        className="orb"
        style={{
          width: 500,
          height: 400,
          background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)",
          top: "10%",
          right: "10%",
        }}
      />
      <div
        className="orb"
        style={{
          width: 400,
          height: 350,
          background: "radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)",
          bottom: "10%",
          left: "15%",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-8">

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
              color: "#06b6d4",
              letterSpacing: "0.15em",
            }}
          >
            03
          </span>
          <div
            style={{
              width: 32,
              height: 1,
              background: "rgba(6,182,212,0.4)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "0.65rem",
              color: "#9ca3af",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            How This Is Different
          </span>
        </div>

        {/* ── Heading ── */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <h2
            className="r-up"
            style={{
              fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
              fontWeight: 300,
              fontFamily: "var(--font-urbanist), sans-serif",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "#1a1a2e",
              marginBottom: 0,
            }}
          >
            Decision-Grade
            <br />
            <span style={{ color: "#06b6d4" }}>Intelligence</span>
          </h2>
          <p
            className="r-up"
            style={{
              fontSize: "0.95rem",
              color: "#9ca3af",
              fontWeight: 300,
              marginTop: "1rem",
              lineHeight: 1.7,
            }}
          >
            This is not research automation. It is strategic intelligence you can trust.
          </p>
        </div>

        {/* ── Table card ── */}
        <div
          className="r-up"
          style={{
            background: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(0,0,0,0.07)",
            borderRadius: 20,
            overflow: "hidden",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Table header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              borderBottom: "1px solid rgba(0,0,0,0.07)",
              background: "rgba(248,248,246,0.6)",
            }}
          >
            <div
              style={{
                padding: "16px 24px",
                fontSize: "0.8rem",
                fontWeight: 500,
                color: "#374151",
                borderRight: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              Capability
            </div>
            <div
              style={{
                padding: "16px 24px",
                fontSize: "0.8rem",
                fontWeight: 300,
                color: "#9ca3af",
                textAlign: "center",
                borderRight: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              Traditional
            </div>
            <div
              style={{
                padding: "16px 24px",
                fontSize: "0.8rem",
                fontWeight: 500,
                color: "#06b6d4",
                textAlign: "center",
              }}
            >
              Strategy Intelligence
            </div>
          </div>

          {/* Table rows */}
          {ROWS.map(({ capability, traditional, ours }, i) => (
            <div
              key={capability}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                borderBottom:
                  i < ROWS.length - 1
                    ? "1px solid rgba(0,0,0,0.05)"
                    : "none",
              }}
            >
              {/* Capability */}
              <div
                style={{
                  padding: "18px 24px",
                  fontSize: "0.82rem",
                  fontWeight: 400,
                  color: "#374151",
                  borderRight: "1px solid rgba(0,0,0,0.05)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {capability}
              </div>
              {/* Traditional */}
              <div
                style={{
                  padding: "18px 24px",
                  fontSize: "0.82rem",
                  fontWeight: 300,
                  color: "#b0b7c3",
                  textAlign: "center",
                  borderRight: "1px solid rgba(0,0,0,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {traditional}
              </div>
              {/* Ours — mint pill */}
              <div
                style={{
                  padding: "18px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(16,185,129,0.025)",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    padding: "5px 14px",
                    borderRadius: 9999,
                    background: "rgba(16,185,129,0.1)",
                    border: "1px solid rgba(16,185,129,0.18)",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "#10b981",
                  }}
                >
                  <Check size={12} strokeWidth={2.5} />
                  {ours}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
