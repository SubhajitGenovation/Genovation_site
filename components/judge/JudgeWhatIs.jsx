"use client";

import { ShieldCheck, ScanSearch, FileCheck2 } from "lucide-react";

const principles = [
  { icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />, iconBg: "bg-emerald-500/[0.1]",  title: "Independent Agent",        body: "JUDGE is not the same model that generated the output. It is a separate, dedicated verification agent with its own reasoning — eliminating self-validation bias." },
  { icon: <ScanSearch className="w-6 h-6 text-cyan-600" />,    iconBg: "bg-cyan-500/[0.12]",    title: "Multi-Dimensional Checks", body: "Every output is evaluated across source fidelity, factual consistency, policy compliance, and confidence scoring — not just a single pass/fail gate." },
  { icon: <FileCheck2 className="w-6 h-6 text-blue-600" />,    iconBg: "bg-blue-500/[0.12]",    title: "Audit-Ready by Default",   body: "Every verification produces an immutable trace — what was checked, what was found, what verdict was reached. Always reconstructible." },
];

export default function JudgeWhatIs() {
  return (
    <section id="whatIsJudge" className="py-48 relative">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[600px] h-[400px] bg-emerald-500/[0.06]" style={{ top: "5%", right: "20%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2] mb-8 r-up">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">The Verification Layer</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            What Is<br /><span className="text-gradient">JUDGE?</span>
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto mt-8 leading-relaxed r-up">
            JUDGE is a dedicated, independent verification agent that sits between every AI output and the end user.
            It does not generate intelligence — it governs it.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="r-scale mb-24">
          <div className="diagram-container p-8 md:p-12">
            <div className="text-center mb-8">
              <span className="text-[10px] text-gray-600 font-mono tracking-[0.2em] uppercase">
                Where JUDGE Sits in the Mentis OS Stack
              </span>
            </div>
            <svg viewBox="0 0 900 420" className="w-full" id="archDiagram">
              <defs>
                <linearGradient id="agG" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%"   stopColor="#10b981" stopOpacity="0.15"/>
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.08"/>
                </linearGradient>
                <linearGradient id="judgeG" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%"   stopColor="#10b981" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#059669" stopOpacity="0.12"/>
                </linearGradient>
                <linearGradient id="flowG" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%"   stopColor="#10b981" stopOpacity="0"/>
                  <stop offset="30%"  stopColor="#10b981" stopOpacity="0.6"/>
                  <stop offset="70%"  stopColor="#06b6d4" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0"/>
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="blur"/>
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>

              {/* Background zones */}
              <rect x="20"  y="20" width="200" height="380" rx="16" fill="rgba(0,0,0,0.02)"        stroke="rgba(0,0,0,0.06)"          strokeWidth="1"/>
              <rect x="260" y="20" width="200" height="380" rx="16" fill="url(#agG)"               stroke="rgba(16,185,129,0.12)"      strokeWidth="1"/>
              <rect x="500" y="20" width="180" height="380" rx="16" fill="url(#judgeG)"             stroke="rgba(16,185,129,0.25)"      strokeWidth="1.5"/>
              <rect x="720" y="20" width="160" height="380" rx="16" fill="rgba(0,0,0,0.02)"        stroke="rgba(0,0,0,0.06)"          strokeWidth="1"/>

              {/* Zone labels */}
              <text x="120" y="52" textAnchor="middle" fill="rgba(0,0,0,0.4)"      fontSize="9" fontFamily="Space Mono,monospace" letterSpacing="0.15em">DATA SOURCES</text>
              <text x="360" y="52" textAnchor="middle" fill="rgba(5,150,105,0.6)"  fontSize="9" fontFamily="Space Mono,monospace" letterSpacing="0.15em">AGENT LAYER</text>
              <text x="590" y="52" textAnchor="middle" fill="rgba(5,150,105,0.9)"  fontSize="9" fontFamily="Space Mono,monospace" letterSpacing="0.15em" fontWeight="700">JUDGE</text>
              <text x="800" y="52" textAnchor="middle" fill="rgba(0,0,0,0.4)"      fontSize="9" fontFamily="Space Mono,monospace" letterSpacing="0.15em">OUTPUT</text>

              {/* Data source boxes */}
              {[
                ["Documents & SOPs",  "14,200 files",      80],
                ["Databases & APIs",  "SQL, CRM, ERP",    145],
                ["IoT & Telemetry",   "Real-time streams", 210],
                ["External Signals",  "Market, regulatory",275],
              ].map(([label, sub, y]) => (
                <g key={label}>
                  <rect x="45" y={y} width="150" height="48" rx="10" fill="white" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
                  <text x="120" y={y+21} textAnchor="middle" fill="rgba(0,0,0,0.6)" fontSize="11" fontFamily="Urbanist">{label}</text>
                  <text x="120" y={y+37} textAnchor="middle" fill="rgba(0,0,0,0.35)" fontSize="8"  fontFamily="Space Mono">{sub}</text>
                </g>
              ))}

              {/* Agent boxes */}
              {[
                ["Aegis",         "Research Agent",   "rgba(59,130,246,0.15)",  85],
                ["Sophia",        "Knowledge Agent",  "rgba(16,185,129,0.15)", 157],
                ["Analytica",     "Data Agent",       "rgba(6,182,212,0.15)",  229],
                ["Custom Agent",  "User-defined",     "rgba(139,92,246,0.15)", 301],
              ].map(([name, role, dotFill, y]) => (
                <g key={name}>
                  <rect x="280" y={y} width="160" height="56" rx="10" fill="white" stroke="rgba(16,185,129,0.15)" strokeWidth="1"/>
                  <circle cx="300" cy={y+28} r="8" fill={dotFill}/>
                  <text x="315" y={y+22} fill="rgba(0,0,0,0.65)" fontSize="11" fontFamily="Urbanist">{name}</text>
                  <text x="315" y={y+38} fill="rgba(0,0,0,0.35)" fontSize="8"  fontFamily="Urbanist">{role}</text>
                </g>
              ))}

              {/* JUDGE box */}
              <rect x="518" y="90" width="145" height="260" rx="14" fill="white" stroke="rgba(16,185,129,0.35)" strokeWidth="2" filter="url(#glow)"/>
              {[
                ["Source Verification", "rgba(16,185,129,0.08)", "rgba(16,185,129,0.15)", "#059669", 110],
                ["Hallucination Check", "rgba(6,182,212,0.08)",  "rgba(6,182,212,0.15)",  "#0891b2", 160],
                ["Policy Compliance",   "rgba(59,130,246,0.08)", "rgba(59,130,246,0.15)", "#2563eb", 210],
                ["Confidence Score",    "rgba(139,92,246,0.08)", "rgba(139,92,246,0.15)", "#7c3aed", 260],
              ].map(([label, fill, stroke, textColor, y]) => (
                <g key={label}>
                  <rect x="530" y={y} width="120" height="36" rx="8" fill={fill} stroke={stroke} strokeWidth="1"/>
                  <text x="590" y={y+22} textAnchor="middle" fill={textColor} fontSize="9" fontFamily="Urbanist" fontWeight="500">{label}</text>
                  {y < 260 && <line x1="590" y1={y+36} x2="590" y2={y+50} stroke={stroke} strokeWidth="1" strokeDasharray="3"/>}
                </g>
              ))}
              <line x1="590" y1="296" x2="590" y2="310" stroke="rgba(139,92,246,0.3)" strokeWidth="1" strokeDasharray="3"/>
              <rect x="530" y="310" width="120" height="30" rx="8" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.25)" strokeWidth="1"/>
              <text x="590" y="329" textAnchor="middle" fill="#059669" fontSize="9" fontFamily="Space Mono" fontWeight="700">VERDICT</text>

              {/* Output boxes */}
              {[
                ["VERIFIED",  "#10b981", "#059669", "rgba(16,185,129,0.2)",  "Delivered to user",     110],
                ["REJECTED",  "#f87171", "#dc2626", "rgba(248,113,113,0.2)", "Sent for re-reasoning", 185],
                ["ESCALATED", "#fbbf24", "#d97706", "rgba(251,191,36,0.2)",  "Human review",          260],
              ].map(([label, dotFill, textColor, stroke, sub, y]) => (
                <g key={label}>
                  <rect x="735" y={y} width="130" height="56" rx="10" fill="white" stroke={stroke} strokeWidth="1"/>
                  <circle cx="755" cy={y+20} r="5" fill={dotFill}/>
                  <text x="768" y={y+23} fill={textColor} fontSize="10" fontFamily="Urbanist" fontWeight="500">{label}</text>
                  <text x="768" y={y+40} fill="rgba(0,0,0,0.35)" fontSize="8" fontFamily="Urbanist">{sub}</text>
                </g>
              ))}
              <rect x="735" y="335" width="130" height="48" rx="10" fill="rgba(0,0,0,0.02)" stroke="rgba(0,0,0,0.06)" strokeWidth="1"/>
              <text x="800" y="356" textAnchor="middle" fill="rgba(0,0,0,0.4)"  fontSize="9" fontFamily="Space Mono">Audit Trail</text>
              <text x="800" y="372" textAnchor="middle" fill="rgba(0,0,0,0.25)" fontSize="7" fontFamily="Space Mono">Immutable log</text>

              {/* Flow arrows */}
              {[
                { x1:195, y1:195, x2:275, y2:195, stroke:"url(#flowG)",              delay:"0s",   px:"275,191 283,195 275,199", pFill:"rgba(16,185,129,0.5)" },
                { x1:440, y1:195, x2:515, y2:220, stroke:"url(#flowG)",              delay:"0.5s", px:"512,216 520,220 513,224", pFill:"rgba(16,185,129,0.5)" },
                { x1:663, y1:138, x2:730, y2:138, stroke:"rgba(16,185,129,0.4)",     delay:"1s",   px:"730,134 738,138 730,142", pFill:"rgba(16,185,129,0.4)" },
                { x1:663, y1:213, x2:730, y2:213, stroke:"rgba(248,113,113,0.4)",    delay:"1.2s", px:"730,209 738,213 730,217", pFill:"rgba(248,113,113,0.4)" },
                { x1:663, y1:288, x2:730, y2:288, stroke:"rgba(251,191,36,0.4)",     delay:"1.4s", px:"730,284 738,288 730,292", pFill:"rgba(251,191,36,0.4)" },
              ].map((a, i) => (
                <g key={i} className="flow-arrow" style={{ animationDelay: a.delay }}>
                  <line x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2} stroke={a.stroke} strokeWidth="1.5"/>
                  <polygon points={a.px} fill={a.pFill}/>
                </g>
              ))}

              <text x="450" y="408" textAnchor="middle" fill="rgba(0,0,0,0.25)" fontSize="8" fontFamily="Space Mono,monospace" letterSpacing="0.2em">
                MENTIS OS — GOVERNED EXECUTION PIPELINE
              </text>
            </svg>
          </div>
        </div>

        {/* 3 principles */}
        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <div key={i} className="card p-8 r-up">
              <div className={`w-12 h-12 rounded-xl ${p.iconBg} flex items-center justify-center mb-5`}>{p.icon}</div>
              <h3 className="text-lg font-light text-gray-900 mb-3">{p.title}</h3>
              <p className="text-[15px] text-gray-600 font-light leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
