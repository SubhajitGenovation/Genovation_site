"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

export default function ResearchHero() {
  const containerRef = useRef(null);

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

    const heroTL = gsap.timeline({ delay: 0.3 });
    heroTL
      .to("#heroBadge", { opacity: 1, duration: 0.8, ease: "power2.out" })
      .to(".hero-line:first-child .char", { opacity: 1, y: 0, rotateX: 0, skewX: 0, stagger: 0.03, duration: 1, ease: "power4.out" }, "-=0.4")
      .to(".hero-line:last-child .char", { opacity: 1, y: 0, rotateX: 0, skewX: 0, stagger: 0.03, duration: 1, ease: "power4.out" }, "-=0.7")
      .to("#heroSub1 p", { y: 0, duration: 1, ease: "power3.out" }, "-=0.3")
      .to("#heroSub2 p", { y: 0, duration: 1, ease: "power3.out" }, "-=0.5")
      .to("#heroButtons", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.3")
      .to("#heroStats", { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.3");

    gsap.to("#heroContent", {
      y: -120, ease: "none",
      scrollTrigger: { trigger: "#hero", start: "top top", end: "70% top", scrub: true },
    });
  }, { scope: containerRef });

  return (
    <section
      className="relative min-h-[120vh] flex items-center justify-center overflow-hidden pt-32"
      id="hero"
      ref={containerRef}
    >
      <div className="absolute inset-0 mesh-bg opacity-15"></div>
      <div className="orb w-[700px] h-[500px] bg-indigo-500/[0.06]" style={{ top: "-10%", left: "25%" }}></div>
      <div className="orb w-[500px] h-[400px] bg-violet-500/[0.05]" style={{ bottom: "10%", right: "10%" }}></div>

      <div className="relative max-w-6xl mx-auto px-8" id="heroContent">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left - Text */}
          <div>
            <div className="mb-8 opacity-0" id="heroBadge">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-500/[0.1] border border-indigo-500/[0.2]">
                <div className="w-2 h-2 rounded-full bg-indigo-500" style={{ animation: "pulse-soft 2s ease-in-out infinite" }}></div>
                <span className="text-indigo-600 text-[11px] font-light tracking-[0.25em] uppercase">Research &amp; Intellectual Property</span>
              </div>
            </div>

            <h1 className="display-hero text-6xl lg:text-[7rem] mb-6" id="heroTitle" style={{ perspective: "1000px" }}>
              <span className="hero-line" style={{ whiteSpace: "nowrap" }}>Deep-Tech</span><br />
              <span className="hero-line text-gradient" style={{ whiteSpace: "nowrap" }}>Research.</span>
            </h1>

            <div className="overflow-hidden mb-4" id="heroSub1">
              <p className="text-xl text-gray-500 font-light translate-y-full">
                Built on original research, proprietary systems,<br />and defensible intellectual property.
              </p>
            </div>

            <div className="overflow-hidden mb-8" id="heroSub2">
              <p className="text-[15px] text-gray-400 font-light leading-relaxed max-w-lg translate-y-full">
                We engineer foundational mechanisms for{" "}
                <span className="text-indigo-600 font-normal">sovereign</span>,{" "}
                <span className="text-violet-600 font-normal">explainable</span>, and{" "}
                <span className="text-cyan-600 font-normal">secure</span> intelligence. Every advance feeds directly into enterprise products.
              </p>
            </div>

            <div className="flex items-center gap-4 opacity-0 mb-10" id="heroButtons" style={{ transform: "translateY(30px)" }}>
              <div className="mag-btn">
                <a href="#areas" className="btn-inner inline-flex items-center gap-2 px-7 py-3.5 rounded-full hero-cta-primary text-white text-[14px] font-normal">
                  <span>Research Areas</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="mag-btn">
                <a href="#ip" className="btn-inner px-7 py-3.5 rounded-full bg-black/[0.05] border border-black/[0.1] text-gray-600 text-[14px] font-light hover:bg-black/[0.08] transition-all">
                  View IP Portfolio
                </a>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 opacity-0" id="heroStats">
              <div className="p-3 rounded-xl bg-indigo-500/[0.08] border border-indigo-500/[0.15]">
                <p className="text-xl font-semibold text-gray-900 mb-0.5">Patent</p>
                <p className="text-[10px] text-gray-500 font-light tracking-wider uppercase">Pending Core IP</p>
              </div>
              <div className="p-3 rounded-xl bg-violet-500/[0.08] border border-violet-500/[0.15]">
                <p className="text-xl font-semibold text-gray-900 mb-0.5">3</p>
                <p className="text-[10px] text-gray-500 font-light tracking-wider uppercase">Proprietary Platforms</p>
              </div>
              <div className="p-3 rounded-xl bg-cyan-500/[0.08] border border-cyan-500/[0.15]">
                <p className="text-xl font-semibold text-gray-900 mb-0.5">4</p>
                <p className="text-[10px] text-gray-500 font-light tracking-wider uppercase">Focus Areas</p>
              </div>
            </div>
          </div>

          {/* Right - Research Network Diagram */}
          <div className="r-up">
            <div className="diagram-card p-8">
              <svg viewBox="0 0 440 440" className="w-full">
                <defs>
                  <linearGradient id="connLine" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.15"/>
                  </linearGradient>
                </defs>
                {/* Connection lines */}
                <line x1="220" y1="220" x2="100" y2="100" stroke="url(#connLine)" strokeWidth="1.5" strokeDasharray="6,4"/>
                <line x1="220" y1="220" x2="340" y2="100" stroke="url(#connLine)" strokeWidth="1.5" strokeDasharray="6,4"/>
                <line x1="220" y1="220" x2="100" y2="340" stroke="url(#connLine)" strokeWidth="1.5" strokeDasharray="6,4"/>
                <line x1="220" y1="220" x2="340" y2="340" stroke="url(#connLine)" strokeWidth="1.5" strokeDasharray="6,4"/>
                {/* Orbital rings */}
                <circle cx="220" cy="220" r="155" fill="none" stroke="rgba(99,102,241,0.08)" strokeWidth="1"/>
                <circle cx="220" cy="220" r="110" fill="none" stroke="rgba(139,92,246,0.06)" strokeWidth="1"/>
                <circle cx="220" cy="220" r="65" fill="none" stroke="rgba(99,102,241,0.05)" strokeWidth="1"/>
                {/* Central Hub */}
                <circle cx="220" cy="220" r="48" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.25)" strokeWidth="1.5"/>
                <circle cx="220" cy="220" r="36" fill="rgba(99,102,241,0.08)" stroke="rgba(129,140,248,0.15)" strokeWidth="1"/>
                <text x="220" y="215" textAnchor="middle" fill="#4f46e5" fontSize="10" fontWeight="600" fontFamily="Urbanist">RESEARCH</text>
                <text x="220" y="230" textAnchor="middle" fill="#6366f1" fontSize="9" fontFamily="Urbanist">CORE</text>
                {/* Area 1: Agentic Systems */}
                <circle cx="100" cy="100" r="40" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.3)" strokeWidth="1.5"/>
                <rect x="87" y="84" width="26" height="16" rx="3" fill="none" stroke="#6366f1" strokeWidth="1.5"/>
                <circle cx="100" cy="92" r="3.5" fill="#6366f1"/>
                <text x="100" y="122" textAnchor="middle" fill="#4f46e5" fontSize="7.5" fontWeight="600" fontFamily="Urbanist">AGENTIC</text>
                <text x="100" y="132" textAnchor="middle" fill="#6366f1" fontSize="6.5" fontFamily="Urbanist">SYSTEMS</text>
                {/* Area 2: Efficient LMs */}
                <circle cx="340" cy="100" r="40" fill="rgba(139,92,246,0.06)" stroke="rgba(139,92,246,0.3)" strokeWidth="1.5"/>
                <circle cx="330" cy="90" r="4" fill="#a78bfa"/>
                <circle cx="350" cy="90" r="4" fill="#a78bfa"/>
                <circle cx="340" cy="102" r="5" fill="#8b5cf6"/>
                <line x1="333" y1="92" x2="337" y2="100" stroke="#c4b5fd" strokeWidth="1.2"/>
                <line x1="347" y1="92" x2="343" y2="100" stroke="#c4b5fd" strokeWidth="1.2"/>
                <text x="340" y="122" textAnchor="middle" fill="#7c3aed" fontSize="7.5" fontWeight="600" fontFamily="Urbanist">EFFICIENT</text>
                <text x="340" y="132" textAnchor="middle" fill="#8b5cf6" fontSize="6.5" fontFamily="Urbanist">LANGUAGE MODELS</text>
                {/* Area 3: Explainability */}
                <circle cx="100" cy="340" r="40" fill="rgba(6,182,212,0.06)" stroke="rgba(6,182,212,0.3)" strokeWidth="1.5"/>
                <circle cx="97" cy="335" r="10" fill="none" stroke="#06b6d4" strokeWidth="1.5"/>
                <line x1="104" y1="342" x2="112" y2="350" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round"/>
                <path d="M92 335 L96 339 L103 331" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <text x="100" y="362" textAnchor="middle" fill="#0891b2" fontSize="7.5" fontWeight="600" fontFamily="Urbanist">EXPLAINABILITY</text>
                <text x="100" y="372" textAnchor="middle" fill="#06b6d4" fontSize="6.5" fontFamily="Urbanist">&amp; GOVERNANCE</text>
                {/* Area 4: Cryptography */}
                <circle cx="340" cy="340" r="40" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5"/>
                <path d="M340 322 L328 328 L328 340 C328 348 340 354 340 354 C340 354 352 348 352 340 L352 328 Z" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinejoin="round"/>
                <rect x="335" y="333" width="10" height="7" rx="1" fill="#10b981"/>
                <circle cx="340" cy="330" r="3.5" fill="none" stroke="#10b981" strokeWidth="1.5"/>
                <text x="340" y="362" textAnchor="middle" fill="#059669" fontSize="7.5" fontWeight="600" fontFamily="Urbanist">CRYPTOGRAPHIC</text>
                <text x="340" y="372" textAnchor="middle" fill="#10b981" fontSize="6.5" fontFamily="Urbanist">SECURITY</text>
                {/* Floating dots */}
                <circle cx="160" cy="160" r="2.5" fill="#818cf8" opacity="0.5"/>
                <circle cx="280" cy="160" r="2.5" fill="#a78bfa" opacity="0.5"/>
                <circle cx="160" cy="280" r="2.5" fill="#22d3ee" opacity="0.5"/>
                <circle cx="280" cy="280" r="2.5" fill="#34d399" opacity="0.5"/>
                <text x="220" y="420" textAnchor="middle" fill="#9ca3af" fontSize="8.5" letterSpacing="0.12em" fontFamily="Space Mono" fontWeight="400">RESEARCH FOCUS AREAS</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}