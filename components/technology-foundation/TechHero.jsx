"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Shield, Eye, Gauge, Lock, ArrowRight } from "lucide-react";

const principles = [
  { icon: <Shield className="w-4 h-4 text-emerald-500" />, label: "Sovereignty", labelColor: "text-emerald-700", desc: "Over data and execution", bg: "bg-emerald-500/[0.1]" },
  { icon: <Eye className="w-4 h-4 text-violet-500" />, label: "Explainability", labelColor: "text-violet-700", desc: "Auditable by design", bg: "bg-violet-500/[0.1]" },
  { icon: <Gauge className="w-4 h-4 text-cyan-500" />, label: "Performance", labelColor: "text-cyan-700", desc: "Sustainable cost", bg: "bg-cyan-500/[0.1]" },
  { icon: <Lock className="w-4 h-4 text-amber-500" />, label: "Security", labelColor: "text-amber-700", desc: "Long-term resilience", bg: "bg-amber-500/[0.1]" },
];

export default function TechHero() {
  const heroRef = useRef(null);

  useGSAP(() => {
    if (typeof document === "undefined") return;

    const tl = gsap.timeline({ delay: 0.3 });
    tl.to("#heroBadge", { opacity: 1, duration: 0.8, ease: "power2.out" })
      .to("#heroTitle", { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=0.4")
      .to("#heroSub1", { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.6")
      .to("#heroSub2", { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.5")
      .to("#heroButtons", { opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4")
      .to("#heroPrinciples", { opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.3")
      .to("#heroDiagram", { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=1.0");
  }, { scope: heroRef });

  return (
    <section
      ref={heroRef}
      className="relative min-h-[110vh] flex items-center justify-center overflow-hidden pt-20"
      id="hero"
    >
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[700px] h-[600px] bg-emerald-500/[0.05]" style={{ top: "-10%", right: "-5%" }} />
      <div className="orb w-[500px] h-[400px] bg-cyan-500/[0.04]" style={{ bottom: "10%", left: "-10%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500/[0.06] border border-emerald-500/[0.12] mb-10 opacity-0"
              id="heroBadge"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 soft-pulse" />
              <span className="text-emerald-700 text-[10px] font-medium tracking-[0.3em] uppercase font-mono">
                The Foundation
              </span>
            </div>

            {/* Title */}
            <h1
              className="display-hero text-6xl md:text-7xl lg:text-[5.5rem] text-gray-900 mb-8 opacity-0"
              id="heroTitle"
              style={{ transform: "translateY(80px)" }}
            >
              Technology
              <br />
              <span className="text-gradient">Foundation</span>
            </h1>

            <p className="text-xl text-gray-600 font-light mb-3 leading-relaxed opacity-0" id="heroSub1">
              Enterprise intelligence cannot be built on abstractions alone.
            </p>
            <p className="text-[15px] text-gray-400 font-light mb-10 max-w-lg leading-relaxed opacity-0" id="heroSub2">
              Genovation's products are grounded in a deep, vertically integrated technology foundation —
              engineered for regulated, high-consequence environments.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 mb-12 opacity-0" id="heroButtons">
              <button
                className="hero-cta-primary group relative px-8 py-4 rounded-full text-[14px] font-medium flex items-center gap-3 overflow-hidden"
              >
                <span className="relative z-10 text-black flex items-center gap-3">
                  Explore Architecture
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
              <button className="px-8 py-4 rounded-full border border-black/[0.08] text-gray-600 text-[14px] font-light hover:border-emerald-400/25 transition-all backdrop-blur-sm">
                Documentation
              </button>
            </div>

            {/* Principles */}
            <div className="grid grid-cols-2 gap-4 opacity-0" id="heroPrinciples">
              {principles.map((p, i) => (
                <div key={i} className="card-accent p-5">
                  <div className="flex items-center gap-2.5 mb-2">
                    {p.icon}
                    <span className={`text-[12px] ${p.labelColor} font-medium`}>{p.label}</span>
                  </div>
                  <p className="text-[11px] text-gray-400 font-light">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stack Inspector Terminal */}
          <div className="opacity-0" id="heroDiagram" style={{ transform: "translateY(40px)" }}>
            <div className="industry-mock" style={{ boxShadow: "0 40px 120px -30px rgba(16,185,129,0.12)" }}>
              <div className="mock-header">
                <div className="mock-dot r" /><div className="mock-dot y" /><div className="mock-dot g" />
                <span className="text-[9px] text-gray-500 font-mono ml-2">genovation — stack inspector</span>
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 soft-pulse" />
                  <span className="text-[8px] text-emerald-600 font-mono">ALL LAYERS ONLINE</span>
                </div>
              </div>
              <div className="p-5 font-mono space-y-1.5" style={{ background: "rgba(250,248,245,0.5)" }}>
                <div className="term-line"><span className="term-prompt">$</span><span className="term-cmd">genovation stack inspect --verbose</span></div>
                <div className="term-separator" />
                <div className="term-output">┌─────────────────────────────────────────────┐</div>
                <div className="term-output">│ <span className="text-emerald-600 font-medium">LAYER 5</span>  Intelligence Products              │</div>
                <div className="term-output">│          Knowledge · Analytics · Strategy · CX│</div>
                <div className="term-output">├─────────────────────────────────────────────┤</div>
                <div className="term-output">│ <span className="text-violet-600 font-medium">LAYER 4</span>  Mentis OS (Agentic Core)            │</div>
                <div className="term-output">│          Orchestration · Governance · Explain │</div>
                <div className="term-output">├──────────────────────┬──────────────────────┤</div>
                <div className="term-output">│ <span className="text-cyan-600 font-medium">LAYER 3a</span> Data Backbone │ <span className="text-amber-600 font-medium">LAYER 3b</span> SLM Engine │</div>
                <div className="term-output">│  ETL · Stream · Query │  Fine-tuned models   │</div>
                <div className="term-output">├──────────────────────┴──────────────────────┤</div>
                <div className="term-output">│ <span className="text-emerald-600 font-medium">LAYER 2</span>  Security & Crypto Foundation        │</div>
                <div className="term-output">│          Zero-Trust · PQC · E2E · Audit      │</div>
                <div className="term-output">├─────────────────────────────────────────────┤</div>
                <div className="term-output">│ <span className="text-violet-600 font-medium">LAYER 1</span>  CipherVault (Trustless Analytics)    │</div>
                <div className="term-output">└─────────────────────────────────────────────┘</div>
                <div className="term-separator" />
                <div className="term-line"><span className="term-prompt">$</span><span className="term-cmd">genovation health --all</span></div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="term-badge bg-emerald-500/[0.08] text-emerald-700">✓ Products</span>
                  <span className="term-badge bg-violet-500/[0.08] text-violet-700">✓ MentisOS</span>
                  <span className="term-badge bg-cyan-500/[0.08] text-cyan-700">✓ Data</span>
                  <span className="term-badge bg-amber-500/[0.08] text-amber-700">✓ SLM</span>
                  <span className="term-badge bg-emerald-500/[0.08] text-emerald-700">✓ Security</span>
                  <span className="term-badge bg-violet-500/[0.08] text-violet-700">✓ Vault</span>
                </div>
                <div className="term-output mt-2">
                  Deploy: <span className="text-emerald-600">ON-PREMISE</span> │ Egress:{" "}
                  <span className="text-emerald-600">ZERO</span> │ Uptime:{" "}
                  <span className="text-emerald-600">99.97%</span>
                </div>
                <div className="term-line mt-1">
                  <span className="term-prompt">$</span>
                  <span className="term-cmd"><span className="typing-cursor" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
