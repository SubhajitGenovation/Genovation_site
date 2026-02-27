"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AlertTriangle, XCircle, CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function RiskSection() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // r-up reveals
      gsap.utils.toArray(".r-up", containerRef.current).forEach((el) => {
        gsap.to(el, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
      });

      // Staggered cards
      const cards = containerRef.current.querySelectorAll("#riskCards > div");
      if (cards.length) {
        ScrollTrigger.batch(cards, {
          start: "top 87%",
          onEnter: (elements) => gsap.fromTo(elements, { y: 60, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: "power3.out" }),
          once: true,
        });
      }

      // Orb parallax
      containerRef.current.querySelectorAll(".orb").forEach((orb) => {
        gsap.to(orb, {
          y: (Math.random() - 0.5) * 250,
          x: (Math.random() - 0.5) * 120,
          ease: "none",
          scrollTrigger: { trigger: containerRef.current, start: "top bottom", end: "bottom top", scrub: 2.5 },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="risks" className="py-32 md:py-48 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[600px] h-[500px] bg-red-500/[0.04]" style={{ top: "5%", left: "10%" }} />
      <div className="orb w-[500px] h-[400px] bg-emerald-500/[0.05]" style={{ bottom: "5%", right: "15%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-500/[0.08] border border-red-500/[0.12] mb-8 r-up">
            <AlertTriangle className="w-3 h-3 text-red-500" />
            <span className="text-red-500 text-[11px] font-light tracking-[0.25em] uppercase">Risk Assessment</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            The <span className="text-gradient-warm">Hidden Cost</span><br />of Traditional AI
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto r-up">
            Most AI systems require you to accept assumptions that regulated enterprises cannot defend.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto" id="riskCards">

          {/* Traditional AI */}
          <div className="comparison-card rounded-3xl overflow-hidden bg-white/80 border border-red-200/40 shadow-sm">
            <div className="px-8 pt-8 pb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <h3 className="text-xl font-normal text-gray-800">Traditional AI</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-red-500/[0.08] text-red-500 text-[10px] font-mono tracking-wider">HIGH_RISK</span>
              </div>
              <p className="text-sm text-gray-400 font-light">Your data leaves your control at every stage</p>
            </div>

            <div className="risk-diagram risk-diagram-traditional mx-6 mb-6">
              <svg className="w-full" viewBox="0 0 440 420" fill="none">
                <rect x="0" y="0" width="440" height="2" fill="url(#redScan)" opacity="0.5">
                  <animateTransform attributeName="transform" type="translate" values="0 0;0 420;0 0" dur="4s" repeatCount="indefinite" />
                </rect>
                <defs>
                  <linearGradient id="redScan" x1="0" y1="0" x2="440" y2="0">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="#f87171" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                <rect x="100" y="20" width="240" height="100" rx="16" stroke="#3b82f6" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="6 4" fill="rgba(59,130,246,0.02)" />
                <text x="220" y="14" textAnchor="middle" fill="rgba(59,130,246,0.35)" fontSize="9" fontFamily="Space Mono" letterSpacing="0.1em">YOUR_ORGANIZATION</text>
                <rect x="120" y="40" width="80" height="32" rx="8" fill="rgba(59,130,246,0.06)" stroke="rgba(59,130,246,0.15)" />
                <text x="160" y="60" textAnchor="middle" fill="#3b82f6" fontSize="11" fontFamily="Urbanist" fontWeight="400">Databases</text>
                <rect x="240" y="40" width="80" height="32" rx="8" fill="rgba(59,130,246,0.06)" stroke="rgba(59,130,246,0.15)" />
                <text x="280" y="60" textAnchor="middle" fill="#3b82f6" fontSize="11" fontFamily="Urbanist" fontWeight="400">Documents</text>
                <line x1="220" y1="120" x2="220" y2="160" stroke="#f87171" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="5 3" />
                <circle r="3.5" fill="#fb7185"><animateMotion dur="1.8s" repeatCount="indefinite" path="M220,90 L220,160" /></circle>
                <circle r="3.5" fill="#fb7185" opacity="0.5"><animateMotion dur="1.8s" repeatCount="indefinite" path="M220,90 L220,160" begin="0.6s" /></circle>
                <rect x="60" y="165" width="320" height="140" rx="18" fill="rgba(248,113,113,0.03)" stroke="rgba(248,113,113,0.15)" strokeWidth="1" />
                <text x="220" y="158" textAnchor="middle" fill="rgba(248,113,113,0.5)" fontSize="9" fontFamily="Space Mono" letterSpacing="0.1em">EXTERNAL_CLOUD</text>
                <rect x="130" y="190" width="180" height="50" rx="12" fill="rgba(248,113,113,0.04)" stroke="rgba(248,113,113,0.2)" />
                <text x="220" y="212" textAnchor="middle" fill="#ef4444" fontSize="12" fontFamily="Urbanist" fontWeight="500">3rd Party Provider</text>
                <text x="220" y="228" textAnchor="middle" fill="rgba(0,0,0,0.25)" fontSize="9" fontFamily="Space Mono">retention: UNKNOWN</text>
                <g className="data-leak-line"><line x1="310" y1="200" x2="370" y2="180" stroke="#f87171" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3 2" /><text x="378" y="178" fill="#f87171" fontSize="16" opacity="0.4">?</text></g>
                <g className="data-leak-line" style={{ animationDelay: "0.5s" }}><line x1="310" y1="225" x2="375" y2="245" stroke="#f87171" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3 2" /><text x="382" y="250" fill="#f87171" fontSize="16" opacity="0.4">?</text></g>
                <g className="data-leak-line" style={{ animationDelay: "1s" }}><line x1="130" y1="210" x2="70" y2="195" stroke="#f87171" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3 2" /><text x="52" y="192" fill="#f87171" fontSize="16" opacity="0.4">?</text></g>
                <g className="data-leak-line" style={{ animationDelay: "0.7s" }}><line x1="130" y1="235" x2="65" y2="260" stroke="#f87171" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3 2" /><text x="48" y="268" fill="#f87171" fontSize="16" opacity="0.4">?</text></g>
                <rect x="150" y="260" width="140" height="28" rx="6" fill="rgba(248,113,113,0.06)" stroke="rgba(248,113,113,0.12)" />
                <text x="220" y="278" textAnchor="middle" fill="rgba(248,113,113,0.6)" fontSize="9" fontFamily="Space Mono">USED_FOR_TRAINING?</text>
                <line x1="220" y1="305" x2="220" y2="340" stroke="rgba(0,0,0,0.1)" strokeWidth="1" strokeDasharray="4 3" />
                <rect x="145" y="345" width="150" height="50" rx="12" fill="rgba(0,0,0,0.03)" stroke="rgba(0,0,0,0.1)" />
                <text x="220" y="367" textAnchor="middle" fill="rgba(0,0,0,0.35)" fontSize="11" fontFamily="Space Mono" fontWeight="500">BLACK BOX</text>
                <text x="220" y="383" textAnchor="middle" fill="rgba(0,0,0,0.2)" fontSize="9" fontFamily="Urbanist">No explainability</text>
              </svg>
            </div>

            <div className="px-8 pb-8 space-y-3">
              {[
                "Data physically leaves your infrastructure",
                "Unknown retention & training policies",
                "Opaque decision-making process",
                "Third-party data breach exposure",
              ].map((text) => (
                <div key={text} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-50/60 border border-red-100/60">
                  <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span className="text-sm font-light text-red-600">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Genovation */}
          <div className="comparison-card rounded-3xl overflow-hidden bg-white/80 border border-emerald-200/40 shadow-sm" style={{ animationDelay: "0.15s" }}>
            <div className="px-8 pt-8 pb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 soft-pulse" />
                  <h3 className="text-xl font-normal text-gray-800">Genovation</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/[0.08] text-emerald-600 text-[10px] font-mono tracking-wider">SOVEREIGN</span>
              </div>
              <p className="text-sm text-gray-400 font-light">Every byte stays under your control</p>
            </div>

            <div className="risk-diagram risk-diagram-genovation mx-6 mb-6">
              <svg className="w-full" viewBox="0 0 440 420" fill="none">
                <defs>
                  <linearGradient id="greenScan" x1="0" y1="0" x2="440" y2="0">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="#10b981" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                <rect x="30" y="20" width="380" height="380" rx="20" fill="rgba(16,185,129,0.015)" stroke="rgba(16,185,129,0.2)" strokeWidth="1.5" />
                <rect x="30" y="20" width="380" height="380" rx="20" fill="none" stroke="rgba(16,185,129,0.08)" strokeWidth="1">
                  <animate attributeName="stroke-opacity" values="0.08;0.2;0.08" dur="3s" repeatCount="indefinite" />
                </rect>
                <text x="220" y="14" textAnchor="middle" fill="rgba(16,185,129,0.5)" fontSize="9" fontFamily="Space Mono" letterSpacing="0.15em">SECURITY_PERIMETER</text>
                <g transform="translate(390, 20)">
                  <circle cx="0" cy="0" r="12" fill="rgba(16,185,129,0.08)" />
                  <text x="0" y="4" textAnchor="middle" fill="#10b981" fontSize="11">🛡</text>
                </g>
                <rect x="100" y="45" width="80" height="32" rx="8" fill="rgba(59,130,246,0.06)" stroke="rgba(59,130,246,0.15)" />
                <text x="140" y="65" textAnchor="middle" fill="#3b82f6" fontSize="11" fontFamily="Urbanist" fontWeight="400">Databases</text>
                <rect x="260" y="45" width="80" height="32" rx="8" fill="rgba(59,130,246,0.06)" stroke="rgba(59,130,246,0.15)" />
                <text x="300" y="65" textAnchor="middle" fill="#3b82f6" fontSize="11" fontFamily="Urbanist" fontWeight="400">Documents</text>
                <line x1="220" y1="80" x2="220" y2="120" stroke="#10b981" strokeOpacity="0.4" strokeWidth="1.5" />
                <circle r="3" fill="#10b981"><animateMotion dur="1.5s" repeatCount="indefinite" path="M220,80 L220,120" /></circle>
                <rect x="120" y="125" width="200" height="55" rx="14" fill="rgba(139,92,246,0.04)" stroke="rgba(139,92,246,0.2)" />
                <text x="220" y="148" textAnchor="middle" fill="#7c3aed" fontSize="12" fontFamily="Urbanist" fontWeight="500">PQC Vault</text>
                <text x="220" y="165" textAnchor="middle" fill="rgba(0,0,0,0.25)" fontSize="8" fontFamily="Space Mono">Post-Quantum Encrypted Storage</text>
                <line x1="220" y1="180" x2="220" y2="210" stroke="#10b981" strokeOpacity="0.4" strokeWidth="1.5" />
                <circle r="3" fill="#10b981"><animateMotion dur="1.5s" repeatCount="indefinite" path="M220,180 L220,210" /></circle>
                <rect x="110" y="215" width="220" height="55" rx="14" fill="rgba(16,185,129,0.04)" stroke="rgba(16,185,129,0.2)" />
                <text x="220" y="238" textAnchor="middle" fill="#059669" fontSize="12" fontFamily="Urbanist" fontWeight="500">Local MentisOS Processing</text>
                <text x="220" y="255" textAnchor="middle" fill="rgba(0,0,0,0.25)" fontSize="8" fontFamily="Space Mono">On your infrastructure</text>
                <line x1="330" y1="240" x2="385" y2="240" stroke="#f87171" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 3" />
                <circle cx="395" cy="240" r="8" fill="none" stroke="#f87171" strokeOpacity="0.25" strokeWidth="1" />
                <line x1="392" y1="237" x2="398" y2="243" stroke="#f87171" strokeOpacity="0.3" strokeWidth="1" />
                <line x1="398" y1="237" x2="392" y2="243" stroke="#f87171" strokeOpacity="0.3" strokeWidth="1" />
                <line x1="110" y1="240" x2="55" y2="240" stroke="#f87171" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 3" />
                <circle cx="45" cy="240" r="8" fill="none" stroke="#f87171" strokeOpacity="0.25" strokeWidth="1" />
                <line x1="42" y1="237" x2="48" y2="243" stroke="#f87171" strokeOpacity="0.3" strokeWidth="1" />
                <line x1="48" y1="237" x2="42" y2="243" stroke="#f87171" strokeOpacity="0.3" strokeWidth="1" />
                <line x1="220" y1="270" x2="220" y2="300" stroke="rgba(139,92,246,0.3)" strokeWidth="1.5" />
                <rect x="140" y="305" width="160" height="45" rx="10" fill="rgba(139,92,246,0.04)" stroke="rgba(139,92,246,0.2)" />
                <text x="220" y="325" textAnchor="middle" fill="#7c3aed" fontSize="11" fontFamily="Space Mono" fontWeight="500">JUDGE</text>
                <text x="220" y="340" textAnchor="middle" fill="rgba(0,0,0,0.25)" fontSize="8" fontFamily="Urbanist">Explainable • Auditable</text>
                <line x1="220" y1="350" x2="220" y2="375" stroke="#10b981" strokeOpacity="0.3" strokeWidth="1.5" />
                <rect x="140" y="378" width="160" height="30" rx="8" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.2)" />
                <text x="198" y="397" textAnchor="middle" fill="#10b981" fontSize="10" fontFamily="Urbanist" fontWeight="400">Audited Output</text>
                <text x="342" y="397" fill="#10b981" fontSize="10">✓</text>
              </svg>
            </div>

            <div className="px-8 pb-8 space-y-3">
              {[
                "Data never leaves your security perimeter",
                "Post-quantum encrypted at rest & in transit",
                "Full decision explainability via JUDGE",
                "Immutable audit trail for compliance",
              ].map((text) => (
                <div key={text} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-50/60 border border-emerald-100/60">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm font-light text-emerald-700">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
