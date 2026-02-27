"use client";

import { Layers, Rocket, Shield } from "lucide-react";

function ProductsDiagram() {
  const products = [
    { x: 50,  color: "#4f46e5", fill: "rgba(99,102,241,0.05)",  stroke: "rgba(99,102,241,0.2)",  lines: ["Enterprise", "Knowledge", "Intelligence"] },
    { x: 205, color: "#7c3aed", fill: "rgba(139,92,246,0.05)", stroke: "rgba(139,92,246,0.2)",  lines: ["Analytics &", "Decision", "Intelligence"] },
    { x: 360, color: "#0891b2", fill: "rgba(6,182,212,0.05)",  stroke: "rgba(6,182,212,0.2)",   lines: ["Strategy &", "Research", "Intelligence"] },
    { x: 515, color: "#059669", fill: "rgba(16,185,129,0.05)", stroke: "rgba(16,185,129,0.2)",  lines: ["CX", "Intelligence", "Customer Experience"] },
  ];

  const patents = [
    { x: 25,  color: "#0891b2", fill: "rgba(6,182,212,0.06)",   stroke: "rgba(6,182,212,0.2)",   label: "SDCA" },
    { x: 175, color: "#7c3aed", fill: "rgba(139,92,246,0.06)", stroke: "rgba(139,92,246,0.2)",  label: "Agentic Governance" },
    { x: 325, color: "#059669", fill: "rgba(16,185,129,0.06)", stroke: "rgba(16,185,129,0.2)",  label: "Secure Analytics" },
    { x: 475, color: "#e11d48", fill: "rgba(251,113,133,0.06)", stroke: "rgba(251,113,133,0.2)", label: "Secure Comms" },
  ];

  return (
    <svg viewBox="0 0 700 260" className="w-full">
      <defs>
        <linearGradient id="patentBase" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#f59e0b" stopOpacity="0.06"/>
          <stop offset="50%"  stopColor="#fbbf24" stopOpacity="0.1"/>
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.06"/>
        </linearGradient>
      </defs>

      {/* Product boxes */}
      {products.map((p, i) => (
        <g key={i} transform={`translate(${p.x},25)`}>
          <rect x="0" y="0" width="140" height="65" rx="14" fill={p.fill} stroke={p.stroke} strokeWidth="1.5"/>
          <text x="70" y="28" textAnchor="middle" fill={p.color} fontSize="10" fontWeight="500">{p.lines[0]}</text>
          <text x="70" y="42" textAnchor="middle" fill={p.color} fontSize="10" fontWeight="500">{p.lines[1]}</text>
          <text x="70" y="56" textAnchor="middle" fill="#9ca3af" fontSize="8">{p.lines[2]}</text>
        </g>
      ))}

      {/* Connector lines */}
      <g stroke="rgba(245,158,11,0.2)" strokeWidth="1" strokeDasharray="4,4">
        {[120, 275, 430, 585].map(x => (
          <line key={x} x1={x} y1="90" x2={x} y2="140"/>
        ))}
      </g>

      {/* Patent foundation bar */}
      <g transform="translate(35,145)">
        <rect x="0" y="0" width="635" height="90" rx="18" fill="url(#patentBase)" stroke="rgba(245,158,11,0.25)" strokeWidth="1.5"/>
        <text x="317" y="24" textAnchor="middle" fill="#b45309" fontSize="11" fontWeight="600" letterSpacing="0.05em">PATENT PORTFOLIO</text>
        <text x="317" y="39" textAnchor="middle" fill="#d97706" fontSize="9">Foundational Mechanisms</text>
        {patents.map((p, i) => (
          <g key={i} transform={`translate(${p.x},50)`}>
            <rect x="0" y="0" width="135" height="28" rx="8" fill={p.fill} stroke={p.stroke} strokeWidth="1"/>
            <text x="67" y="18" textAnchor="middle" fill={p.color} fontSize="9">{p.label}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

const benefits = [
  { icon: <Rocket className="w-6 h-6 text-gray-500" />, title: "Rapid Launch",       sub: "New products launch quickly — foundations already protected" },
  { icon: <Layers className="w-6 h-6 text-gray-500" />, title: "Vertical Expansion", sub: "Enter new industries with confidence" },
  { icon: <Shield className="w-6 h-6 text-gray-500" />, title: "Release Defense",    sub: "Every release inherits patent protection" },
];

export default function PatentProducts() {
  return (
    <section className="py-32 relative overflow-hidden" id="products">
      <div className="orb w-[600px] h-[400px] bg-amber-500/[0.04]" style={{ top: "10%", left: "25%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/[0.05] border border-black/[0.08] mb-8 r-up">
            <Layers className="w-3 h-3 text-gray-500" />
            <span className="text-gray-500 text-[11px] font-light tracking-[0.25em] uppercase">Platform Integration</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Patents Power<br /><span className="text-gradient-amber">Products</span>
          </h2>
          <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto mt-6 r-up">
            Our patents are not tied to a single product. They protect mechanisms that power the entire intelligence platform.
          </p>
        </div>

        {/* Architecture diagram */}
        <div className="diagram-card p-10 mb-12 r-up">
          <ProductsDiagram />
        </div>

        {/* Benefit cards */}
        <div className="grid md:grid-cols-3 gap-6" id="benefitCards">
          {benefits.map((b, i) => (
            <div key={i} className="card p-6 text-center r-up" style={{ borderRadius: "20px" }}>
              <div className="w-12 h-12 rounded-xl bg-black/[0.04] border border-black/[0.08] flex items-center justify-center mx-auto mb-4">
                {b.icon}
              </div>
              <h3 className="text-gray-900 font-medium mb-1.5">{b.title}</h3>
              <p className="text-[13px] text-gray-400 font-light">{b.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
