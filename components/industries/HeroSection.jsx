"use client";

import { Shield, FileCheck, ScanEye } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div
        className="orb absolute"
        style={{ width: 600, height: 400, background: "rgba(6,95,70,0.04)", top: "15%", left: "20%" }}
      />

      <div className="relative max-w-6xl mx-auto px-8 text-center" id="heroContent">

        {/* Badge */}
        <div className="mb-10" id="heroBadge">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-800/[0.06] border border-slate-800/[0.1]">
            <svg className="w-3 h-3 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span className="text-slate-600 text-[11px] font-light tracking-[0.25em] uppercase">
              Industries We Serve
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1
          style={{
            fontWeight: 300,
            letterSpacing: "-0.05em",
            lineHeight: 1.0,
            fontSize: "clamp(3.5rem,8vw,8.5rem)",
            marginBottom: "2.5rem",
          }}
        >
          {/* Line 1 — chars get split by GSAP */}
          <span
            id="heroLine1"
            className="hero-line"
            style={{ color: "#111827" }}
          >
            Purpose-Built for
          </span>

          {/* Line 2 — gradient, animated as whole block (NOT char split) */}
          <span
            id="heroLine2"
            style={{
              display: "block",
              overflow: "visible",
              paddingBottom: "0.1em",
              background: "linear-gradient(135deg,#334155 0%,#475569 50%,#1e293b 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Regulated Industries
          </span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-10" id="heroDivider">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-slate-400/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-500/40" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-slate-400/40" />
        </div>

        {/* Sub 1 */}
        <div style={{ overflow: "hidden", marginBottom: "1.25rem" }} id="heroSub1">
          <p
            className="text-xl md:text-[1.5rem] text-gray-600 font-light leading-[1.4] max-w-3xl mx-auto"
            style={{ letterSpacing: "-0.01em" }}
          >
            Intelligence systems that are accurate, explainable, and sovereign — built for environments where trust must be earned.
          </p>
        </div>

        {/* Sub 2 */}
        <div style={{ overflow: "hidden", marginBottom: "3rem" }} id="heroSub2">
          <p className="text-base text-gray-500 font-light max-w-2xl mx-auto">
            We do not pursue horizontal adoption. We focus where intelligence must withstand scrutiny.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto" id="heroPillars">
          {[
            { icon: <Shield className="w-5 h-5 text-slate-600" />, title: "Data Sovereignty", desc: "Data never leaves organizational boundaries" },
            { icon: <FileCheck className="w-5 h-5 text-slate-600" />, title: "Regulated Decisions", desc: "Decisions are audited and mission-critical" },
            { icon: <ScanEye className="w-5 h-5 text-slate-600" />, title: "No Black Box", desc: "Black-box AI introduces unacceptable risk" },
          ].map((p, i) => (
            <div
              key={i}
              className="p-6 text-center"
              style={{
                background: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: 20,
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-slate-800/[0.06] border border-slate-800/[0.08] flex items-center justify-center mx-auto mb-4">
                {p.icon}
              </div>
              <p className="text-gray-900 font-light text-sm mb-1">{p.title}</p>
              <p className="text-xs text-gray-500 font-light">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-16" id="heroStats">
          {[
            { val: "7",     label: "Industries",    color: "#1e293b", mono: false },
            { val: "100%",  label: "On-Premise",    color: "#1e293b", mono: false },
            { val: "Zero",  label: "External APIs", color: "#1e293b", mono: false },
            { val: "JUDGE", label: "Verified",      color: "#065f46", mono: true  },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-8 md:gap-12">
              {i > 0 && <div className="w-px h-10 bg-black/[0.06]" />}
              <div className="text-center">
                <div
                  className="text-3xl font-light"
                  style={{ color: s.color, fontFamily: s.mono ? "'Space Mono',monospace" : "inherit" }}
                >
                  {s.val}
                </div>
                <div className="text-[10px] text-gray-500 font-light tracking-widest uppercase mt-1">
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Cue */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          id="scrollCue"
        >
          <span className="text-[10px] text-gray-500 font-light tracking-[0.4em] uppercase">Scroll</span>
          <div style={{ width: 1, height: 64, position: "relative", overflow: "hidden" }}>
            <div
              style={{
                position: "absolute", top: 0, left: 0,
                width: "100%", height: "50%",
                background: "linear-gradient(to bottom, rgba(100,116,139,0.6), transparent)",
                animation: "scrollCueDrop 1.8s ease-in-out infinite",
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
