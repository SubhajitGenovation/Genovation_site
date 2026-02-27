"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Atom, AlertTriangle, KeyRound, PenTool, Shield, Cpu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function PQCVaultSection() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.utils.toArray(".r-up", containerRef.current).forEach((el) => {
        gsap.to(el, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
      });
      gsap.utils.toArray(".r-left", containerRef.current).forEach((el) => {
        gsap.to(el, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" } });
      });
      gsap.utils.toArray(".r-right", containerRef.current).forEach((el) => {
        gsap.to(el, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" } });
      });
      containerRef.current.querySelectorAll(".orb").forEach((orb) => {
        gsap.to(orb, { y: (Math.random() - 0.5) * 250, x: (Math.random() - 0.5) * 120, ease: "none", scrollTrigger: { trigger: containerRef.current, start: "top bottom", end: "bottom top", scrub: 2.5 } });
      });
    },
    { scope: containerRef }
  );

  const algoCards = [
    {
      icon: <KeyRound className="w-5 h-5 text-violet-500" />,
      iconBg: "from-violet-500/15 to-violet-500/5",
      title: "ML-KEM (Kyber)",
      badge: "NIST FIPS 203",
      badgeColor: "bg-violet-100/60 text-violet-600",
      desc: "Post-quantum key encapsulation mechanism. Protects all key exchanges and data-at-rest encryption keys.",
      detail: "Security Level: 5 (AES-256 equivalent) • Lattice dimension: 1024",
      detailColor: "text-violet-400 bg-violet-50/40",
      border: "border-violet-200/20 hover:border-violet-300/40 hover:shadow-violet-100/30",
    },
    {
      icon: <PenTool className="w-5 h-5 text-blue-500" />,
      iconBg: "from-blue-500/15 to-blue-500/5",
      title: "ML-DSA (Dilithium)",
      badge: "NIST FIPS 204",
      badgeColor: "bg-blue-100/60 text-blue-600",
      desc: "Digital signature scheme for authentication and data integrity. Ensures tamper-proof audit trails and verified identity.",
      detail: "Signature size: 4627 bytes • Verification: < 0.5ms",
      detailColor: "text-blue-400 bg-blue-50/40",
      border: "border-violet-200/20 hover:border-violet-300/40 hover:shadow-violet-100/30",
    },
    {
      icon: <Shield className="w-5 h-5 text-emerald-500" />,
      iconBg: "from-emerald-500/15 to-emerald-500/5",
      title: "Hybrid PQ-TLS 1.3",
      badge: "IN-TRANSIT",
      badgeColor: "bg-emerald-100/60 text-emerald-600",
      desc: "Dual-layer protection: ML-KEM + X25519 hybrid key exchange. If either algorithm holds, your data is safe.",
      detail: "Classical: X25519 + AES-256-GCM • PQ: ML-KEM-1024",
      detailColor: "text-emerald-400 bg-emerald-50/40",
      border: "border-emerald-200/20 hover:border-emerald-300/40 hover:shadow-emerald-100/30",
    },
    {
      icon: <Cpu className="w-5 h-5 text-gray-500" />,
      iconBg: "from-gray-500/10 to-gray-500/5",
      title: "HSM-Backed Key Storage",
      badge: "FIPS 140-3 L3",
      badgeColor: "bg-gray-100/80 text-gray-600",
      desc: "All PQC keys stored in hardware security modules. Keys never exist in software memory — extracted and used only within HSM enclaves.",
      detail: null,
      border: "border-gray-200/40 hover:border-violet-300/30 hover:shadow-violet-100/20",
    },
  ];

  return (
    <section ref={containerRef} id="pqcvault" className="py-32 md:py-48 relative overflow-hidden">
      <div className="absolute inset-0 pqc-grid-bg" />
      <div className="orb w-[700px] h-[600px] bg-violet-500/[0.05]" style={{ top: "5%", left: "10%" }} />
      <div className="orb w-[500px] h-[400px] bg-blue-500/[0.04]" style={{ bottom: "10%", right: "15%" }} />
      <div className="orb w-[400px] h-[300px] bg-indigo-500/[0.03]" style={{ top: "50%", left: "60%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-500/[0.1] border border-violet-500/[0.15] mb-8 r-up">
            <Atom className="w-3 h-3 text-violet-600" />
            <span className="text-violet-600 text-[11px] font-light tracking-[0.25em] uppercase">PQC Vault</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Post-Quantum<br /><span className="text-gradient-violet">Secure Storage</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-500 font-light max-w-3xl mx-auto r-up">
            Data encrypted today with classical algorithms can be harvested now and decrypted when quantum computers arrive. PQC Vault eliminates this threat from day one — inside MentisOS.
          </p>
        </div>

        {/* HNDL Warning */}
        <div className="max-w-3xl mx-auto mb-16 r-up">
          <div className="rounded-2xl border border-amber-300/30 bg-amber-50/40 p-6 flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center flex-shrink-0 mt-1">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-amber-700 mb-1">Harvest Now, Decrypt Later (HNDL)</h4>
              <p className="text-sm text-amber-600/80 font-light leading-relaxed">
                Adversaries are already capturing encrypted data today, betting that future quantum computers will break RSA and ECC. Data with long-term value — trade secrets, patient records, classified intel — is at risk <em>now</em>.
              </p>
            </div>
          </div>
        </div>

        {/* 2-Column Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left: Lattice viz */}
          <div className="r-left">
            <div className="rounded-3xl overflow-hidden bg-white/90 border border-violet-200/30 shadow-sm mb-8">
              <div className="px-6 py-4 border-b border-violet-100/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 tracking-wider">pqc_vault.lattice_view</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 soft-pulse" />
                  <span className="text-[10px] font-mono text-violet-500">QUANTUM_SAFE</span>
                </div>
              </div>
              <div className="p-6">
                <svg className="w-full" viewBox="0 0 400 300">
                  <g opacity="0.15">
                    {[50,100,150,200,250].map(y => <line key={`h${y}`} x1="50" y1={y} x2="350" y2={y} stroke="#8b5cf6" strokeWidth="0.5" />)}
                    {[50,110,170,230,290,350].map(x => <line key={`v${x}`} x1={x} y1="50" x2={x} y2="250" stroke="#8b5cf6" strokeWidth="0.5" />)}
                  </g>
                  {[[50,50,3,0.4],[110,50,3,0.4],[170,100,4,0.6],[230,50,3,0.4],[290,100,3,0.4],[350,50,3,0.4],[50,100,3,0.4],[110,150,4,0.6],[230,150,3,0.4],[350,150,4,0.6],[50,200,3,0.4],[170,200,3,0.4],[290,200,4,0.6],[110,250,3,0.4],[230,250,3,0.4],[350,250,3,0.4]].map(([cx,cy,r,op],i) => (
                    <g key={i} className="lattice-node"><circle cx={cx} cy={cy} r={r} fill="#8b5cf6" opacity={op} /></g>
                  ))}
                  <path d="M170,100 L110,150 L230,150 L290,200 L170,200 L110,150" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.5">
                    <animate attributeName="stroke-dashoffset" values="0;-18" dur="3s" repeatCount="indefinite" />
                  </path>
                  <circle cx="200" cy="150" r="20" fill="rgba(139,92,246,0.06)">
                    <animate attributeName="r" values="15;25;15" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.06;0.15;0.06" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="200" cy="150" r="6" fill="#8b5cf6" opacity="0.8" />
                  <text x="200" y="154" textAnchor="middle" fill="white" fontSize="7" fontWeight="700">K</text>
                  <text x="200" y="280" textAnchor="middle" fill="rgba(139,92,246,0.5)" fontSize="9" fontFamily="Space Mono">LATTICE_CRYPTOGRAPHY — Shortest Vector Problem (SVP)</text>
                </svg>
              </div>
            </div>
            <p className="text-sm text-gray-500 font-light leading-relaxed">
              PQC Vault uses <strong className="font-medium text-gray-700">lattice-based cryptography</strong> — mathematical problems that even quantum computers cannot efficiently solve. The Shortest Vector Problem (SVP) in high-dimensional lattices forms the security foundation, standardized by NIST as ML-KEM (Kyber) for key encapsulation and ML-DSA (Dilithium) for digital signatures.
            </p>
          </div>

          {/* Right: Spec cards */}
          <div className="space-y-5 r-right">
            {algoCards.map((card) => (
              <div key={card.title} className={`rounded-2xl bg-white/90 border p-6 transition-all hover:shadow-lg ${card.border}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.iconBg} flex items-center justify-center flex-shrink-0`}>
                    {card.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-sm font-semibold text-gray-800">{card.title}</h4>
                      <span className={`px-2 py-0.5 rounded text-[9px] font-mono ${card.badgeColor}`}>{card.badge}</span>
                    </div>
                    <p className="text-xs text-gray-400 font-light leading-relaxed mb-3">{card.desc}</p>
                    {card.detail && (
                      <div className={`font-mono text-[10px] rounded-lg px-3 py-2 ${card.detailColor}`}>{card.detail}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
