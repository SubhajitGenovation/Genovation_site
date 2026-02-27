"use client";

import { Lock as LockIcon } from "lucide-react";

// ─── SVG DIAGRAMS ───────────────────────────────────────────────

function SDCADiagram() {
  return (
    <svg viewBox="0 0 340 280" className="w-full">
      <defs>
        <linearGradient id="matrixFull" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fb7185" stopOpacity="0.3"/><stop offset="100%" stopColor="#f43f5e" stopOpacity="0.15"/>
        </linearGradient>
        <linearGradient id="matrixSparse" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3"/><stop offset="100%" stopColor="#0891b2" stopOpacity="0.15"/>
        </linearGradient>
      </defs>
      <text x="170" y="18" textAnchor="middle" fill="#9ca3af" fontSize="8.5" letterSpacing="0.1em" fontFamily="Space Mono">ATTENTION MECHANISM COMPARISON</text>
      {/* Traditional */}
      <g transform="translate(20,38)">
        <text x="55" y="12" textAnchor="middle" fill="#6b7280" fontSize="9">Traditional</text>
        <text x="55" y="24" textAnchor="middle" fill="#9ca3af" fontSize="8">O(n²)</text>
        <rect x="5" y="35" width="100" height="100" rx="10" fill="rgba(251,113,133,0.04)" stroke="rgba(251,113,133,0.15)" strokeWidth="1"/>
        <g fill="url(#matrixFull)">
          {[40,54,68,82,96,110].map(y => [10,24,38,52,66,80].map(x =>
            <rect key={`${x}-${y}`} x={x} y={y} width="12" height="12" rx="2"/>
          ))}
        </g>
        <text x="55" y="145" textAnchor="middle" fill="#e11d48" fontSize="7.5">O(n²) computation</text>
        <text x="55" y="157" textAnchor="middle" fill="#9ca3af" fontSize="7">All tokens attend to all</text>
      </g>
      {/* Arrow */}
      <g transform="translate(135,95)">
        <rect x="0" y="0" width="65" height="26" rx="13" fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.2)" strokeWidth="1"/>
        <text x="32" y="12" textAnchor="middle" fill="#0891b2" fontSize="8" fontWeight="600">SDCA</text>
        <path d="M 20 18 L 45 18" fill="none" stroke="#0891b2" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M 42 14 L 48 18 L 42 22" fill="none" stroke="#0891b2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      {/* SDCA */}
      <g transform="translate(215,38)">
        <text x="55" y="12" textAnchor="middle" fill="#0891b2" fontSize="9" fontWeight="500">SDCA</text>
        <text x="55" y="24" textAnchor="middle" fill="#06b6d4" fontSize="8">O(nk)</text>
        <rect x="5" y="35" width="100" height="100" rx="10" fill="rgba(6,182,212,0.03)" stroke="rgba(6,182,212,0.15)" strokeWidth="1"/>
        <g fill="url(#matrixSparse)">
          {[[10,40],[24,40],[24,54],[38,54],[38,68],[52,68],[52,82],[66,82],[66,96],[80,96],[80,110]].map(([x,y],i) =>
            <rect key={i} x={x} y={y} width="12" height="12" rx="2"/>
          )}
        </g>
        <g fill="rgba(139,92,246,0.35)">
          {[[52,40],[80,54],[10,82],[52,110]].map(([x,y],i) =>
            <rect key={i} x={x} y={y} width="12" height="12" rx="2"/>
          )}
        </g>
        <text x="55" y="145" textAnchor="middle" fill="#0891b2" fontSize="7.5">O(nk) computation</text>
        <text x="55" y="157" textAnchor="middle" fill="#9ca3af" fontSize="7">Semantic distance routing</text>
      </g>
      {/* Legend */}
      <g transform="translate(20,195)">
        <rect x="0" y="0" width="300" height="55" rx="12" fill="rgba(0,0,0,0.02)" stroke="rgba(0,0,0,0.06)" strokeWidth="1"/>
        <rect x="15" y="14" width="14" height="14" rx="3" fill="url(#matrixSparse)"/>
        <text x="36" y="24" fill="#6b7280" fontSize="8">Local attention efficient</text>
        <rect x="165" y="14" width="14" height="14" rx="3" fill="rgba(139,92,246,0.35)"/>
        <text x="186" y="24" fill="#6b7280" fontSize="8">Semantic anchors</text>
        <text x="150" y="44" textAnchor="middle" fill="#9ca3af" fontSize="7.5">Maintains reasoning quality with significantly less compute</text>
      </g>
    </svg>
  );
}

function AgenticDiagram() {
  return (
    <svg viewBox="0 0 340 280" className="w-full">
      <text x="170" y="18" textAnchor="middle" fill="#9ca3af" fontSize="8.5" letterSpacing="0.1em" fontFamily="Space Mono">GOVERNED EXECUTION PIPELINE</text>
      {/* Agent Request */}
      <g transform="translate(30,40)">
        <rect x="0" y="0" width="80" height="50" rx="12" fill="rgba(139,92,246,0.06)" stroke="rgba(139,92,246,0.25)" strokeWidth="1.5"/>
        <text x="40" y="22" textAnchor="middle" fill="#7c3aed" fontSize="9" fontWeight="500">Agent</text>
        <text x="40" y="35" textAnchor="middle" fill="#9ca3af" fontSize="7">Request</text>
      </g>
      <path d="M 115 65 L 140 65" fill="none" stroke="rgba(139,92,246,0.3)" strokeWidth="1.5" strokeDasharray="4,3"/>
      <path d="M 137 61 L 143 65 L 137 69" fill="none" stroke="rgba(139,92,246,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Policy Gate */}
      <g transform="translate(145,35)">
        <rect x="0" y="0" width="100" height="60" rx="12" fill="rgba(245,158,11,0.06)" stroke="rgba(245,158,11,0.3)" strokeWidth="2"/>
        <text x="50" y="18" textAnchor="middle" fill="#b45309" fontSize="7" letterSpacing="0.05em" fontWeight="600">POLICY GATE</text>
        <line x1="10" y1="26" x2="90" y2="26" stroke="rgba(245,158,11,0.2)" strokeWidth="0.5"/>
        <text x="50" y="38" textAnchor="middle" fill="#d97706" fontSize="7">Governance</text>
        <text x="50" y="50" textAnchor="middle" fill="#d97706" fontSize="7">Rules Engine</text>
      </g>
      <path d="M 250 65 L 275 65" fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5" strokeDasharray="4,3"/>
      <path d="M 272 61 L 278 65 L 272 69" fill="none" stroke="rgba(16,185,129,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Validated Action */}
      <g transform="translate(280,40)">
        <rect x="0" y="0" width="50" height="50" rx="12" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.25)" strokeWidth="1.5"/>
        <text x="25" y="22" textAnchor="middle" fill="#059669" fontSize="14">✓</text>
        <text x="25" y="38" textAnchor="middle" fill="#059669" fontSize="6.5">Execute</text>
      </g>
      {/* Reject path */}
      <path d="M 195 95 L 195 120" fill="none" stroke="rgba(251,113,133,0.3)" strokeWidth="1.5" strokeDasharray="4,3"/>
      <path d="M 191 117 L 195 123 L 199 117" fill="none" stroke="rgba(251,113,133,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <g transform="translate(160,125)">
        <rect x="0" y="0" width="70" height="35" rx="10" fill="rgba(251,113,133,0.06)" stroke="rgba(251,113,133,0.2)" strokeWidth="1"/>
        <text x="35" y="15" textAnchor="middle" fill="#e11d48" fontSize="8"> Block</text>
        <text x="35" y="27" textAnchor="middle" fill="#9ca3af" fontSize="6.5"> Alert</text>
      </g>
      {/* Audit Trail */}
      <g transform="translate(20,180)">
        <rect x="0" y="0" width="300" height="75" rx="14" fill="rgba(139,92,246,0.03)" stroke="rgba(139,92,246,0.15)" strokeWidth="1.5" strokeDasharray="6,3"/>
        <text x="150" y="18" textAnchor="middle" fill="#7c3aed" fontSize="8" fontWeight="500" letterSpacing="0.08em">IMMUTABLE AUDIT TRAIL</text>
        <line x1="15" y1="28" x2="285" y2="28" stroke="rgba(139,92,246,0.1)" strokeWidth="0.5"/>
        {[
          { x: 15, color: "#7c3aed", label: "Request",      sig: "t logged" },
          { x: 109, color: "#b45309", label: "Policy Check", sig: "t logged" },
          { x: 203, color: "#059669", label: "Execution",    sig: "t logged" },
        ].map((e, i) => (
          <g key={i} transform={`translate(${e.x},36)`}>
            <rect x="0" y="0" width="82" height="28" rx="6" fill={`rgba(${i===0?"139,92,246":i===1?"245,158,11":"16,185,129"},0.06)`} stroke={`rgba(${i===0?"139,92,246":i===1?"245,158,11":"16,185,129"},0.12)`} strokeWidth="0.5"/>
            <text x="41" y="12" textAnchor="middle" fill={e.color} fontSize="6.5" fontWeight="500">{e.label}</text>
            <text x="41" y="22" textAnchor="middle" fill="#9ca3af" fontSize="5.5">{e.sig}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

function AnalyticsDiagram() {
  return (
    <svg viewBox="0 0 340 280" className="w-full">
      <text x="170" y="18" textAnchor="middle" fill="#9ca3af" fontSize="8.5" letterSpacing="0.1em" fontFamily="Space Mono">PRIVACY-PRESERVING COMPUTATION</text>
      {/* Org A */}
      <g transform="translate(15,40)">
        <rect x="0" y="0" width="95" height="65" rx="12" fill="rgba(99,102,241,0.05)" stroke="rgba(99,102,241,0.2)" strokeWidth="1.5"/>
        <text x="47" y="20" textAnchor="middle" fill="#4f46e5" fontSize="9" fontWeight="500">Org A</text>
        <text x="47" y="33" textAnchor="middle" fill="#9ca3af" fontSize="7">Encrypted</text>
        <text x="47" y="44" textAnchor="middle" fill="#9ca3af" fontSize="7">Data</text>
        {[15,33,51,69].map(x => <rect key={x} x={x} y="50" width="14" height="8" rx="2" fill="rgba(99,102,241,0.15)"/>)}
      </g>
      {/* Org B */}
      <g transform="translate(230,40)">
        <rect x="0" y="0" width="95" height="65" rx="12" fill="rgba(6,182,212,0.05)" stroke="rgba(6,182,212,0.2)" strokeWidth="1.5"/>
        <text x="47" y="20" textAnchor="middle" fill="#0891b2" fontSize="9" fontWeight="500">Org B</text>
        <text x="47" y="33" textAnchor="middle" fill="#9ca3af" fontSize="7">Encrypted</text>
        <text x="47" y="44" textAnchor="middle" fill="#9ca3af" fontSize="7">Data</text>
        {[15,33,51,69].map(x => <rect key={x} x={x} y="50" width="14" height="8" rx="2" fill="rgba(6,182,212,0.15)"/>)}
      </g>
      {/* Arrows */}
      <path d="M 62 108 L 120 140" fill="none" stroke="rgba(99,102,241,0.25)" strokeWidth="1.5" strokeDasharray="4,3"/>
      <path d="M 278 108 L 220 140" fill="none" stroke="rgba(6,182,212,0.25)" strokeWidth="1.5" strokeDasharray="4,3"/>
      {/* Secure Zone */}
      <g transform="translate(60,130)">
        <rect x="0" y="0" width="220" height="70" rx="16" fill="rgba(16,185,129,0.04)" stroke="rgba(16,185,129,0.25)" strokeWidth="2"/>
        <rect x="0" y="0" width="220" height="22" rx="16" fill="rgba(16,185,129,0.06)"/>
        <rect x="0" y="10" width="220" height="12" fill="rgba(16,185,129,0.06)"/>
        <text x="110" y="15" textAnchor="middle" fill="#059669" fontSize="8" fontWeight="600" letterSpacing="0.08em">ENCRYPTED SECURE ZONE</text>
        {[
          { x: 15, label: "Compute",  sub: "on encrypted" },
          { x: 82, label: "Separate", sub: "identities" },
          { x: 150,label: "Validate", sub: "integrity" },
        ].map((e, i) => (
          <g key={i} transform={`translate(${e.x},32)`}>
            <rect x="0" y="0" width="55" height="28" rx="6" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.12)" strokeWidth="0.5"/>
            <text x="27" y="12" textAnchor="middle" fill="#059669" fontSize="6.5">{e.label}</text>
            <text x="27" y="22" textAnchor="middle" fill="#9ca3af" fontSize="5.5">{e.sub}</text>
          </g>
        ))}
      </g>
      {/* Arrow down */}
      <path d="M 170 200 L 170 220" fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5"/>
      <path d="M 166 217 L 170 223 L 174 217" fill="none" stroke="rgba(16,185,129,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Joint Insights */}
      <g transform="translate(85,225)">
        <rect x="0" y="0" width="170" height="40" rx="12" fill="rgba(245,158,11,0.06)" stroke="rgba(245,158,11,0.25)" strokeWidth="1.5"/>
        <text x="85" y="18" textAnchor="middle" fill="#b45309" fontSize="9" fontWeight="500">Joint Insights</text>
        <text x="85" y="32" textAnchor="middle" fill="#9ca3af" fontSize="7">No raw data exposed to either party</text>
      </g>
    </svg>
  );
}

function SecureCommsDiagram() {
  return (
    <svg viewBox="0 0 340 280" className="w-full">
      <text x="170" y="18" textAnchor="middle" fill="#9ca3af" fontSize="8.5" letterSpacing="0.1em" fontFamily="Space Mono">AUTHENTICATED MESSAGING CHAIN</text>
      {/* Agent A */}
      <g transform="translate(20,40)">
        <rect x="0" y="0" width="80" height="55" rx="12" fill="rgba(251,113,133,0.05)" stroke="rgba(251,113,133,0.25)" strokeWidth="1.5"/>
        <circle cx="40" cy="20" r="10" fill="rgba(251,113,133,0.1)" stroke="rgba(251,113,133,0.2)" strokeWidth="1"/>
        <text x="40" y="23" textAnchor="middle" fill="#e11d48" fontSize="8" fontWeight="600">A</text>
        <text x="40" y="42" textAnchor="middle" fill="#e11d48" fontSize="7.5">Agent A</text>
      </g>
      <path d="M 105 67 L 130 67" fill="none" stroke="rgba(251,113,133,0.3)" strokeWidth="1.5"/>
      <path d="M 127 63 L 133 67 L 127 71" fill="none" stroke="rgba(251,113,133,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Sign */}
      <g transform="translate(135,47)">
        <rect x="0" y="0" width="70" height="40" rx="10" fill="rgba(245,158,11,0.06)" stroke="rgba(245,158,11,0.25)" strokeWidth="1.5"/>
        <text x="35" y="16" textAnchor="middle" fill="#b45309" fontSize="7" fontWeight="600">SIGN</text>
        <text x="35" y="30" textAnchor="middle" fill="#d97706" fontSize="6">🔑 Private Key</text>
      </g>
      <path d="M 210 67 L 235 67" fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5"/>
      <path d="M 232 63 L 238 67 L 232 71" fill="none" stroke="rgba(16,185,129,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Verify */}
      <g transform="translate(240,40)">
        <rect x="0" y="0" width="80" height="55" rx="12" fill="rgba(16,185,129,0.05)" stroke="rgba(16,185,129,0.25)" strokeWidth="1.5"/>
        <text x="40" y="18" textAnchor="middle" fill="#059669" fontSize="7" fontWeight="600">VERIFY</text>
        <text x="40" y="32" textAnchor="middle" fill="#059669" fontSize="14">✓</text>
        <text x="40" y="47" textAnchor="middle" fill="#9ca3af" fontSize="6">Integrity OK</text>
      </g>
      {/* Tamper detection */}
      <g transform="translate(50,120)">
        <rect x="0" y="0" width="240" height="45" rx="12" fill="rgba(251,113,133,0.03)" stroke="rgba(251,113,133,0.15)" strokeWidth="1" strokeDasharray="5,3"/>
        <text x="120" y="17" textAnchor="middle" fill="#e11d48" fontSize="7.5" fontWeight="500">Tamper Detection Layer</text>
        <text x="120" y="33" textAnchor="middle" fill="#9ca3af" fontSize="6.5">Any modification to message or metadata → chain invalidated</text>
      </g>
      {/* Execution chain */}
      <g transform="translate(20,185)">
        <rect x="0" y="0" width="300" height="75" rx="14" fill="rgba(251,113,133,0.03)" stroke="rgba(251,113,133,0.15)" strokeWidth="1.5"/>
        <text x="150" y="17" textAnchor="middle" fill="#e11d48" fontSize="8" fontWeight="500" letterSpacing="0.05em">EXECUTION CHAIN</text>
        <line x1="10" y1="26" x2="290" y2="26" stroke="rgba(251,113,133,0.1)" strokeWidth="0.5"/>
        {[
          { x: 12,  label: "msg₁", sig: "sig: a3f2..." },
          { x: 90,  label: "msg₂", sig: "sig: b7d1..." },
          { x: 168, label: "msg₃", sig: "sig: c9e4..." },
        ].map((m, i) => (
          <g key={i}>
            <g transform={`translate(${m.x},34)`}>
              <rect x="0" y="0" width="60" height="30" rx="8" fill="rgba(251,113,133,0.06)" stroke="rgba(251,113,133,0.15)" strokeWidth="0.5"/>
              <text x="30" y="13" textAnchor="middle" fill="#e11d48" fontSize="6.5" fontWeight="500">{m.label}</text>
              <text x="30" y="24" textAnchor="middle" fill="#9ca3af" fontSize="5">{m.sig}</text>
            </g>
            {i < 2 && <>
              <path d={`M ${m.x + 64} 49 L ${m.x + 74} 49`} fill="none" stroke="rgba(251,113,133,0.3)" strokeWidth="1"/>
              <path d={`M ${m.x + 71} 46 L ${m.x + 76} 49 L ${m.x + 71} 52`} fill="none" stroke="rgba(251,113,133,0.3)" strokeWidth="1" strokeLinecap="round"/>
            </>}
          </g>
        ))}
        <g transform="translate(246,38)">
          <text x="22" y="10" textAnchor="middle" fill="#9ca3af" fontSize="7">...</text>
        </g>
      </g>
    </svg>
  );
}

// ─── PATENT CARD DATA ────────────────────────────────────────────

const patents = [
  {
    color: "cyan",
    border: "rgba(6,182,212,0.2)",
    iconBg: "bg-cyan-500/[0.1] border-cyan-500/[0.2]",
    iconColor: "text-cyan-500",
    badge: "PATENT PENDING",
    title: "Semantic Distance-Based Compression Attention",
    sub: "Novel attention and context-management mechanism",
    sectionColor: "text-cyan-600",
    sectionBg: "bg-cyan-500/[0.04] border-cyan-500/[0.1]",
    itemBg: "bg-cyan-500/[0.1]",
    itemIconColor: "text-cyan-500",
    impactBg: "bg-cyan-500/[0.05] border-cyan-500/[0.12]",
    impactColor: "text-cyan-600",
    icon: "brain-circuit",
    objectives: [
      { icon: "zap",        title: "Reduce computational overhead",  sub: "Lower cost per inference without sacrificing quality" },
      { icon: "maximize-2", title: "Enable longer context windows",  sub: "Process more information in constrained environments" },
      { icon: "signal",     title: "Improve signal retention",       sub: "Maintain reasoning quality with sparse attention" },
    ],
    impact: [
      { title: "Smaller Models", sub: "Advanced reasoning" },
      { title: "On-Premise",     sub: "Edge deployment" },
      { title: "60% Less",       sub: "Compute cost" },
    ],
    Diagram: SDCADiagram,
    footer: <>SDCA underpins Genovation's ability to deliver near-LLM reasoning performance using efficient, enterprise-deployable models.</>,
  },
  {
    color: "violet",
    border: "rgba(139,92,246,0.2)",
    iconBg: "bg-violet-500/[0.1] border-violet-500/[0.2]",
    iconColor: "text-violet-500",
    badge: "PATENT + TRADE SECRET",
    title: "Governed Agentic Execution",
    sub: "Policy-enforced agent orchestration with full auditability",
    sectionColor: "text-violet-600",
    sectionBg: "bg-violet-500/[0.04] border-violet-500/[0.1]",
    itemBg: "bg-violet-500/[0.1]",
    itemIconColor: "text-violet-500",
    impactBg: "bg-violet-500/[0.05] border-violet-500/[0.12]",
    impactColor: "text-violet-600",
    icon: "git-branch",
    objectives: [
      { icon: "scan-eye",     title: "Continuous action validation",  sub: "Every agent step is checked against enterprise governance rules before execution" },
      { icon: "shield-check", title: "Enterprise policy enforcement", sub: "Hardcoded governance boundaries that cannot be overridden by prompts or chain-of-thought" },
      { icon: "file-search",  title: "Immutable audit trail",         sub: "Every decision, delegation, and tool invocation is logged for regulatory compliance" },
    ],
    impact: [
      { title: "Multi-Agent", sub: "Orchestration" },
      { title: "Zero-Drift",  sub: "Policy adherence" },
      { title: "Full Trace",  sub: "Audit readiness" },
    ],
    Diagram: AgenticDiagram,
    footer: <>Governed Agentic Execution is the core orchestration layer of <span className="text-violet-600 font-normal">Mentis OS</span> — enabling autonomous agent workflows that remain compliant by construction, not just by monitoring.</>,
  },
  {
    color: "emerald",
    border: "rgba(16,185,129,0.2)",
    iconBg: "bg-emerald-500/[0.1] border-emerald-500/[0.2]",
    iconColor: "text-emerald-500",
    badge: "PATENT PENDING",
    title: "Trust-Minimized Analytics",
    sub: "Collaborative intelligence without raw data exposure",
    sectionColor: "text-emerald-600",
    sectionBg: "bg-emerald-500/[0.04] border-emerald-500/[0.1]",
    itemBg: "bg-emerald-500/[0.1]",
    itemIconColor: "text-emerald-500",
    impactBg: "bg-emerald-500/[0.05] border-emerald-500/[0.12]",
    impactColor: "text-emerald-600",
    icon: "lock",
    objectives: [
      { icon: "eye-off",    title: "Analytics without data exposure", sub: "Derive cross-organizational insights without any party seeing the other's raw data" },
      { icon: "fingerprint",title: "Identity mapping separation",     sub: "Cryptographic separation of identity from analytical payload — even at compute layer" },
      { icon: "handshake",  title: "Zero-trust collaboration",        sub: "No trusted third party required — mathematically enforced data sovereignty" },
    ],
    impact: [
      { title: "Multi-Party", sub: "Safe collaboration" },
      { title: "GDPR Ready",  sub: "By architecture" },
      { title: "No TTP",      sub: "Trusted third party" },
    ],
    Diagram: AnalyticsDiagram,
    footer: <>Trust-Minimized Analytics complements <span className="text-emerald-600 font-normal">CipherVault</span> — enabling cross-organizational intelligence in finance, healthcare, and defense without any party compromising data sovereignty.</>,
  },
  {
    color: "rose",
    border: "rgba(251,113,133,0.2)",
    iconBg: "bg-rose-500/[0.1] border-rose-500/[0.2]",
    iconColor: "text-rose-500",
    badge: "PATENT PENDING",
    title: "Secure Agent Communication",
    sub: "Cryptographically authenticated inter-agent messaging",
    sectionColor: "text-rose-600",
    sectionBg: "bg-rose-500/[0.04] border-rose-500/[0.1]",
    itemBg: "bg-rose-500/[0.1]",
    itemIconColor: "text-rose-500",
    impactBg: "bg-rose-500/[0.05] border-rose-500/[0.12]",
    impactColor: "text-rose-600",
    icon: "radio-tower",
    objectives: [
      { icon: "key-round",    title: "Authenticated execution chains", sub: "Each agent message is cryptographically signed — spoofed instructions are rejected at protocol level" },
      { icon: "shield-alert", title: "Tamper-resistant signaling",     sub: "Message integrity verified at every hop — any modification invalidates the chain" },
      { icon: "scroll-text",  title: "Verifiable action logs",         sub: "Cryptographic proofs that a specific agent performed a specific action at a specific time" },
    ],
    impact: [
      { title: "Anti-Spoof",    sub: "Injection-proof" },
      { title: "Chain Proof",   sub: "End-to-end" },
      { title: "High Assurance",sub: "Defense-grade" },
    ],
    Diagram: SecureCommsDiagram,
    footer: <>Secure Agent Communication provides the cryptographic backbone for <span className="text-rose-500 font-normal">high-assurance</span> multi-agent deployments — critical in defense, finance, and regulated healthcare environments.</>,
  },
];

// ─── ICON MAP (Lucide) ───────────────────────────────────────────
import {
  BrainCircuit, GitBranch, Lock, RadioTower,
  Zap, Maximize2, Signal,
  ScanEye, ShieldCheck, FileSearch,
  EyeOff, Fingerprint, Handshake,
  KeyRound, ShieldAlert, ScrollText,
} from "lucide-react";

const ICON_MAP = {
  "brain-circuit": BrainCircuit, "git-branch": GitBranch,
  "lock": Lock, "radio-tower": RadioTower,
  "zap": Zap, "maximize-2": Maximize2, "signal": Signal,
  "scan-eye": ScanEye, "shield-check": ShieldCheck, "file-search": FileSearch,
  "eye-off": EyeOff, "fingerprint": Fingerprint, "handshake": Handshake,
  "key-round": KeyRound, "shield-alert": ShieldAlert, "scroll-text": ScrollText,
};

function IconFor({ name, className }) {
  const C = ICON_MAP[name];
  return C ? <C className={className} /> : null;
}

// ─── MAIN COMPONENT ─────────────────────────────────────────────

export default function PatentTechnologies() {
  return (
    <section className="py-32 relative overflow-hidden" id="patents">
      <div className="orb w-[700px] h-[500px] bg-cyan-500/[0.04]"   style={{ top: "5%",   left: "10%" }} />
      <div className="orb w-[500px] h-[400px] bg-violet-500/[0.04]" style={{ bottom: "20%", right: "10%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/[0.05] border border-black/[0.08] mb-8 r-up">
            <LockIcon className="w-3 h-3 text-gray-500" />
            <span className="text-gray-500 text-[11px] font-light tracking-[0.25em] uppercase">Protected Innovations</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Patent-Pending<br /><span className="text-gradient-cyan">Technologies</span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 r-up">
            Core mechanisms protected through patent filings and trade secret protections.
          </p>
        </div>

        <div id="patentCards">
          {patents.map((p, i) => (
            <div key={i} className="card p-10 mb-8 r-up"
              style={{ borderRadius: "28px", borderColor: p.border, background: "rgba(255,255,255,0.9)" }}>
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between mb-8 gap-4">
                <div className="flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-2xl ${p.iconBg} border flex items-center justify-center`}>
                    <IconFor name={p.icon} className={`w-7 h-7 ${p.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-gray-900 tracking-tight mb-1">{p.title}</h3>
                    <p className="text-gray-400 text-sm font-light">{p.sub}</p>
                  </div>
                </div>
                <div className="badge-patent px-5 py-2.5 rounded-full">
                  <span className="font-mono text-[11px] text-amber-700 font-medium tracking-wider">{p.badge}</span>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-10">
                {/* Left */}
                <div>
                  <h4 className={`text-[11px] font-mono ${p.sectionColor} uppercase tracking-wider mb-5`}>
                    {i === 0 ? "Core Objectives" : "Core Mechanism"}
                  </h4>
                  <div className="space-y-3 mb-8">
                    {p.objectives.map((obj, j) => (
                      <div key={j} className={`flex items-start gap-4 p-4 rounded-xl ${p.sectionBg} border`}>
                        <div className={`w-8 h-8 rounded-lg ${p.itemBg} flex items-center justify-center flex-shrink-0`}>
                          <IconFor name={obj.icon} className={`w-4 h-4 ${p.itemIconColor}`} />
                        </div>
                        <div>
                          <p className="text-gray-900 font-medium text-[14px]">{obj.title}</p>
                          <p className="text-[12px] text-gray-400 font-light mt-0.5">{obj.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <h4 className={`text-[11px] font-mono ${p.sectionColor} uppercase tracking-wider mb-4`}>Enterprise Impact</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {p.impact.map((imp, j) => (
                      <div key={j} className={`p-4 rounded-xl ${p.impactBg} border text-center`}>
                        <p className={`${p.impactColor} font-medium text-sm mb-0.5`}>{imp.title}</p>
                        <p className="text-[10px] text-gray-400 font-light">{imp.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Diagram */}
                <div className="diagram-card p-6">
                  <p.Diagram />
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-8 border-t border-black/[0.06]">
                <p className="text-[14px] text-gray-400 font-light italic">{p.footer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
