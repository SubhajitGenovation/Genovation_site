"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function SecurityHero() {
  const heroRef = useRef(null);

  useGSAP(() => {
    if (typeof document === "undefined") return;

    // Split hero lines into chars
    document.querySelectorAll(".hero-line").forEach((line) => {
      const text = line.textContent;
      line.innerHTML = "";
      text.split("").forEach((c) => {
        const span = document.createElement("span");
        span.className = "char";
        span.textContent = c === " " ? "\u00A0" : c;
        line.appendChild(span);
      });
    });

    // Hero timeline
    const heroTL = gsap.timeline({ delay: 0.3 });
    heroTL
      .to("#heroBadge", { opacity: 1, duration: 0.8, ease: "power2.out" })
      .to(".hero-line:first-child .char", {
        opacity: 1, y: 0, rotateX: 0, skewX: 0,
        stagger: 0.03, duration: 1, ease: "power4.out",
      }, "-=0.4")
      .to(".hero-line:last-child .char", {
        opacity: 1, y: 0, rotateX: 0, skewX: 0,
        stagger: 0.03, duration: 1, ease: "power4.out",
      }, "-=0.7")
      .to("#heroSub1 p", { y: 0, duration: 1, ease: "power3.out" }, "-=0.3")
      .to("#heroSub2 p", { y: 0, duration: 1, ease: "power3.out" }, "-=0.5")
      .to("#heroButtons", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.3")
      .to("#heroStats", { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.3");

    // Hero parallax
    gsap.to("#heroContent", {
      y: -120,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "70% top",
        scrub: true,
      },
    });
  }, { scope: heroRef });

  return (
    <section
      ref={heroRef}
      className="relative min-h-[120vh] flex items-center justify-center overflow-hidden"
      id="hero"
    >
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[700px] h-[500px] bg-cyan-500/[0.07]" style={{ top: "-10%", left: "30%" }} />
      <div className="orb w-[500px] h-[400px] bg-blue-500/[0.05]" style={{ bottom: "10%", right: "10%" }} />

      <div className="relative max-w-6xl mx-auto px-8" id="heroContent">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            {/* <div className="mb-8 opacity-0" id="heroBadge">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/[0.1] border border-cyan-500/[0.2]">
                <div
                  className="w-2 h-2 rounded-full bg-cyan-500"
                  style={{ animation: "pulse-soft 2s ease-in-out infinite" }}
                />
                <span className="text-cyan-600 text-[11px] font-light tracking-[0.25em] uppercase">
                  Cryptographic & Security IP
                </span>
              </div>
            </div> */}

            {/* Title */}
            <h1
              className="display-hero text-6xl lg:text-[7rem] mb-6"
              id="heroTitle"
              style={{ perspective: "1000px" }}
            >
              <span className="hero-line">Post-Trust</span>
              <br />
              <span className="hero-line text-gradient">Security.</span>
            </h1>

            {/* Subtitle 1 */}
            <div className="overflow-hidden mb-4" id="heroSub1">
              <p className="text-xl text-gray-500 font-light translate-y-full">
                Security designed for autonomous intelligence
                <br />
                in a post-quantum world.
              </p>
            </div>

            {/* Subtitle 2 */}
            <div className="overflow-hidden mb-8" id="heroSub2">
              <p className="text-[15px] text-gray-400 font-light leading-relaxed max-w-lg translate-y-full">
                Enterprise AI introduces risks that traditional security cannot address. Our answer is security by
                architecture — cryptographic guarantees that hold even when systems are{" "}
                <span className="text-cyan-600 font-normal">compromised</span>, perimeters are{" "}
                <span className="text-blue-600 font-normal">breached</span>, and trust relationships{" "}
                <span className="text-violet-600 font-normal">fail</span>.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex items-center gap-4 opacity-0 mb-10"
              id="heroButtons"
              style={{ transform: "translateY(30px)" }}
            >
              <div className="mag-btn">
                <a
                  href="#capabilities"
                  className="btn-inner inline-flex items-center gap-2 px-7 py-3.5 rounded-full hero-cta-primary text-white text-[14px] font-normal"
                >
                  <span>Security Briefing</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="mag-btn">
                <a
                  href="#architecture"
                  className="btn-inner px-7 py-3.5 rounded-full bg-black/[0.05] border border-black/[0.1] text-gray-600 text-[14px] font-light hover:bg-black/[0.08] transition-all"
                >
                  Technical Whitepaper
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3 opacity-0" id="heroStats">
              <div className="p-3 rounded-xl bg-cyan-500/[0.08] border border-cyan-500/[0.15]">
                <p className="text-2xl font-semibold text-gray-900 mb-0.5">5</p>
                <p className="text-[10px] text-gray-500 font-light tracking-wider uppercase">Defense Layers</p>
              </div>
              <div className="p-3 rounded-xl bg-violet-500/[0.08] border border-violet-500/[0.15]">
                <p className="text-2xl font-semibold text-gray-900 mb-0.5">PQC</p>
                <p className="text-[10px] text-gray-500 font-light tracking-wider uppercase">Quantum Ready</p>
              </div>
              <div className="p-3 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/[0.15]">
                <p className="text-2xl font-semibold text-gray-900 mb-0.5">0</p>
                <p className="text-[10px] text-gray-500 font-light tracking-wider uppercase">Trust Required</p>
              </div>
              <div className="p-3 rounded-xl bg-amber-500/[0.08] border border-amber-500/[0.15]">
                <p className="text-2xl font-semibold text-gray-900 mb-0.5">E2E</p>
                <p className="text-[10px] text-gray-500 font-light tracking-wider uppercase">Encrypted</p>
              </div>
            </div>
          </div>

          {/* Right: Architecture SVG Diagram */}
          <div className="r-up">
            <div className="card p-8 relative" style={{ borderRadius: "24px" }}>
              <svg viewBox="0 0 500 580" className="w-full">
                <defs>
                  <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
                    <path d="M 25 0 L 0 0 0 25" fill="none" stroke="rgba(6,182,212,0.06)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="500" height="580" fill="url(#grid)" />

                {/* Shield Layers */}
                <path d="M250,60 L380,100 L380,230 C380,320 315,390 250,420 C185,390 120,320 120,230 L120,100 Z"
                  fill="rgba(6,182,212,0.06)" stroke="rgba(6,182,212,0.3)" strokeWidth="2" />
                <path d="M250,80 L360,115 L360,225 C360,305 300,365 250,392 C200,365 140,305 140,225 L140,115 Z"
                  fill="rgba(59,130,246,0.05)" stroke="rgba(59,130,246,0.25)" strokeWidth="1.5" />
                <path d="M250,100 L340,130 L340,220 C340,285 290,340 250,365 C210,340 160,285 160,220 L160,130 Z"
                  fill="rgba(139,92,246,0.05)" stroke="rgba(139,92,246,0.25)" strokeWidth="1.5" />
                <path d="M250,120 L320,145 L320,215 C320,270 280,315 250,338 C220,315 180,270 180,215 L180,145 Z"
                  fill="rgba(251,191,36,0.06)" stroke="rgba(251,191,36,0.25)" strokeWidth="1.5" />
                <path d="M250,140 L300,160 L300,210 C300,250 270,285 250,305 C230,285 200,250 200,210 L200,160 Z"
                  fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.4)" strokeWidth="2" />

                {/* Central Lock */}
                <g transform="translate(250, 215)">
                  <rect x="-20" y="0" width="40" height="26" rx="4"
                    fill="rgba(6,182,212,0.15)" stroke="rgba(6,182,212,0.4)" strokeWidth="1.5" />
                  <path d="M-10,-14 L-10,-6 C-10,2 0,8 0,8 C0,8 10,2 10,-6 L10,-14"
                    fill="none" stroke="rgba(6,182,212,0.5)" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="0" cy="12" r="4" fill="rgba(6,182,212,0.3)" stroke="rgba(6,182,212,0.5)" strokeWidth="1.5" />
                  <circle cx="0" cy="12" r="1.5" fill="#0891b2" />
                </g>

                {/* Layer Labels */}
                <g transform="translate(250, 68)">
                  <rect x="-52" y="-12" width="104" height="24" rx="12"
                    fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.2)" strokeWidth="1" />
                  <text x="0" y="4" textAnchor="middle" fill="#0891b2" fontSize="9" fontWeight="500" fontFamily="Urbanist">MONITORING</text>
                </g>
                <g transform="translate(385, 150)">
                  <rect x="-50" y="-12" width="100" height="24" rx="12"
                    fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
                  <text x="0" y="4" textAnchor="middle" fill="#2563eb" fontSize="9" fontWeight="500" fontFamily="Urbanist">GOVERNANCE</text>
                </g>
                <g transform="translate(115, 150)">
                  <rect x="-48" y="-12" width="96" height="24" rx="12"
                    fill="rgba(139,92,246,0.08)" stroke="rgba(139,92,246,0.2)" strokeWidth="1" />
                  <text x="0" y="4" textAnchor="middle" fill="#7c3aed" fontSize="9" fontWeight="500" fontFamily="Urbanist">SEPARATION</text>
                </g>
                <g transform="translate(375, 310)">
                  <rect x="-58" y="-12" width="116" height="24" rx="12"
                    fill="rgba(251,191,36,0.1)" stroke="rgba(251,191,36,0.2)" strokeWidth="1" />
                  <text x="0" y="4" textAnchor="middle" fill="#d97706" fontSize="9" fontWeight="500" fontFamily="Urbanist">ANONYMIZATION</text>
                </g>
                <g transform="translate(125, 310)">
                  <rect x="-58" y="-12" width="116" height="24" rx="12"
                    fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.25)" strokeWidth="1" />
                  <text x="0" y="4" textAnchor="middle" fill="#059669" fontSize="9" fontWeight="500" fontFamily="Urbanist">CRYPTOGRAPHIC</text>
                </g>

                {/* Connection Lines */}
                <line x1="250" y1="82" x2="250" y2="100" stroke="rgba(6,182,212,0.2)" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="325" y1="150" x2="340" y2="140" stroke="rgba(59,130,246,0.2)" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="175" y1="150" x2="160" y2="140" stroke="rgba(139,92,246,0.2)" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="305" y1="310" x2="290" y2="280" stroke="rgba(251,191,36,0.2)" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="195" y1="310" x2="210" y2="280" stroke="rgba(16,185,129,0.2)" strokeWidth="1" strokeDasharray="3,3" />

                {/* Data Flow */}
                <g transform="translate(45, 240)">
                  <rect x="0" y="-14" width="46" height="28" rx="6"
                    fill="rgba(6,182,212,0.06)" stroke="rgba(6,182,212,0.15)" strokeWidth="1" />
                  <text x="23" y="-1" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="Urbanist">DATA</text>
                  <text x="23" y="9" textAnchor="middle" fill="#0891b2" fontSize="7" fontWeight="500" fontFamily="Urbanist">IN</text>
                  <line x1="50" y1="0" x2="88" y2="0" stroke="rgba(6,182,212,0.25)" strokeWidth="1.5" strokeDasharray="4,3" />
                  <polygon points="88,0 82,-3 82,3" fill="rgba(6,182,212,0.4)" />
                </g>
                <g transform="translate(405, 240)">
                  <line x1="0" y1="0" x2="38" y2="0" stroke="rgba(6,182,212,0.25)" strokeWidth="1.5" strokeDasharray="4,3" />
                  <polygon points="38,0 32,-3 32,3" fill="rgba(6,182,212,0.4)" />
                  <rect x="42" y="-14" width="50" height="28" rx="6"
                    fill="rgba(6,182,212,0.06)" stroke="rgba(6,182,212,0.15)" strokeWidth="1" />
                  <text x="67" y="-1" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="Urbanist">SECURE</text>
                  <text x="67" y="9" textAnchor="middle" fill="#0891b2" fontSize="7" fontWeight="500" fontFamily="Urbanist">OUT</text>
                </g>

                {/* Bottom Info Panel */}
                <g transform="translate(250, 480)">
                  <rect x="-220" y="0" width="440" height="86" rx="12"
                    fill="rgba(255,255,255,0.6)" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
                  <g transform="translate(-160, 16)">
                    <text x="0" y="4" fill="#7c3aed" fontSize="9" fontWeight="600" fontFamily="Urbanist">POST-QUANTUM</text>
                    <text x="0" y="20" fill="#9ca3af" fontSize="7.5" fontFamily="Urbanist">ML-KEM (KYBER-1024)</text>
                    <text x="0" y="32" fill="#9ca3af" fontSize="7.5" fontFamily="Urbanist">ML-DSA (DILITHIUM-5)</text>
                    <text x="0" y="44" fill="#9ca3af" fontSize="7.5" fontFamily="Urbanist">AES-256-GCM</text>
                    <text x="0" y="56" fill="#9ca3af" fontSize="7.5" fontFamily="Urbanist">SHA-3 / SHAKE256</text>
                  </g>
                  <g transform="translate(0, 16)">
                    <text x="0" y="4" fill="#0891b2" fontSize="9" fontWeight="600" fontFamily="Urbanist">ZERO TRUST</text>
                    <text x="0" y="20" fill="#9ca3af" fontSize="7.5" fontFamily="Urbanist">No implicit trust</text>
                    <text x="0" y="32" fill="#9ca3af" fontSize="7.5" fontFamily="Urbanist">Verify all requests</text>
                    <text x="0" y="44" fill="#9ca3af" fontSize="7.5" fontFamily="Urbanist">Least privilege access</text>
                    <text x="0" y="56" fill="#9ca3af" fontSize="7.5" fontFamily="Urbanist">Continuous validation</text>
                  </g>
                  <g transform="translate(160, 16)">
                    <text x="0" y="4" fill="#059669" fontSize="9" fontWeight="600" fontFamily="Urbanist">SOVEREIGN</text>
                    <text x="0" y="20" fill="#9ca3af" fontSize="7.5" fontFamily="Urbanist">On-premise deploy</text>
                    <text x="0" y="32" fill="#9ca3af" fontSize="7.5" fontFamily="Urbanist">Air-gap capable</text>
                    <text x="0" y="44" fill="#9ca3af" fontSize="7.5" fontFamily="Urbanist">Customer-owned keys</text>
                    <text x="0" y="56" fill="#9ca3af" fontSize="7.5" fontFamily="Urbanist">Full data sovereignty</text>
                  </g>
                </g>
              </svg>

              <div className="absolute top-6 right-6 px-3 py-1.5 rounded-full bg-cyan-500/[0.08] border border-cyan-500/[0.15]">
                <span className="text-[10px] font-mono text-cyan-600">5_LAYER_DEFENSE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
