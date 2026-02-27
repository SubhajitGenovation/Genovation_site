"use client";

import { GitFork, Clock, Radio, AlertTriangle } from "lucide-react";

const PROBLEMS = [
  {
    icon: <GitFork className="w-5 h-5" style={{ color: "#f87171" }} />,
    iconBg: "rgba(239,68,68,0.1)",
    title: "Fragmented Inputs",
    desc: "Market data, competitor news, analyst reports exist in separate tools, formats, and timelines.",
  },
  {
    icon: <Clock className="w-5 h-5" style={{ color: "#fb923c" }} />,
    iconBg: "rgba(249,115,22,0.1)",
    title: "Reactive Strategy",
    desc: "Analysis is backward-looking — compiled after changes have already occurred.",
  },
  {
    icon: <Radio className="w-5 h-5" style={{ color: "#fb923c" }} />,
    iconBg: "rgba(251,146,60,0.1)",
    title: "Unstructured Noise",
    desc: "Leadership teams interpret unfiltered signals without context or prioritization.",
  },
  {
    icon: <AlertTriangle className="w-5 h-5" style={{ color: "#f87171" }} />,
    iconBg: "rgba(239,68,68,0.1)",
    title: "AI Without Governance",
    desc: "Many tools rely on opaque models — unsuitable for board-level decisions.",
  },
];

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden"
      style={{ background: "#F0EEE8", paddingTop: "7rem", paddingBottom: "7rem" }}
    >
      {/* Subtle warm orb */}
      <div
        className="orb"
        style={{
          width: 600, height: 400,
          background: "radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)",
          top: "20%", right: "0%",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-8">

        {/* ── Section label ── */}
        <div className="flex items-center justify-center gap-3 mb-8 r-up">
          <span
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "0.65rem",
              color: "#f97316",
              letterSpacing: "0.15em",
            }}
          >
            00
          </span>
          <div style={{ width: 32, height: 1, background: "rgba(249,115,22,0.4)" }} />
          <span
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "0.65rem",
              color: "#9ca3af",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            The Problem
          </span>
        </div>

        {/* ── Heading ── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="r-up"
            style={{
              fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
              fontWeight: 300,
              fontFamily: "var(--font-urbanist), sans-serif",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "#1a1a2e",
              marginBottom: "0.5rem",
            }}
          >
            Strategic Intelligence
            <br />Today is{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #f97316, #ef4444)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Broken
            </span>
          </h2>
          <p
            className="r-up"
            style={{
              fontSize: "1rem",
              color: "#9ca3af",
              fontWeight: 300,
              marginTop: "1.25rem",
              lineHeight: 1.7,
            }}
          >
            Most strategic analysis is backward-looking — compiled after changes have already occurred.
          </p>
        </div>

        {/* ── 4 cards row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {PROBLEMS.map(({ icon, iconBg, title, desc }) => (
            <div
              key={title}
              className="r-up"
              style={{
                background: "rgba(255,255,255,0.75)",
                border: "1px solid rgba(0,0,0,0.07)",
                borderRadius: 20,
                padding: "1.75rem 1.5rem",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                {icon}
              </div>
              <h3
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "#1a1a2e",
                  marginBottom: "0.5rem",
                  fontFamily: "var(--font-urbanist), sans-serif",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#6b7280",
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
