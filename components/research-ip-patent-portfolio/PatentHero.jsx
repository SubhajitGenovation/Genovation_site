"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FileBadge, Shield, Globe, ChevronRight } from "lucide-react";

const stats = [
  { icon: <FileBadge className="w-5 h-5 text-amber-600" />, bg: "bg-amber-500/[0.1] border-amber-500/[0.2]", title: "Patent-Pending", sub: "Active filings" },
  { icon: <Shield className="w-5 h-5 text-gray-500" />,     bg: "bg-black/[0.04] border-black/[0.08]",       title: "Trade Secrets",   sub: "Protected IP" },
  { icon: <Globe className="w-5 h-5 text-gray-500" />,      bg: "bg-black/[0.04] border-black/[0.08]",       title: "Global",          sub: "Coverage" },
];

function IPDiagram() {
  return (
    <svg viewBox="0 0 400 380" className="w-full">
      <defs>
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#d97706" stopOpacity="0.05"/>
        </linearGradient>
      </defs>
      <text x="200" y="25" textAnchor="middle" fill="#9ca3af" fontSize="8.5" letterSpacing="0.15em" fontFamily="Space Mono">IP PROTECTION ARCHITECTURE</text>
      <circle cx="200" cy="190" r="155" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>
      <circle cx="200" cy="190" r="155" fill="none" stroke="rgba(245,158,11,0.12)" strokeWidth="1" strokeDasharray="4,8"/>
      <circle cx="200" cy="190" r="115" fill="none" stroke="rgba(245,158,11,0.1)" strokeWidth="1.5"/>
      <circle cx="200" cy="190" r="75"  fill="none" stroke="rgba(245,158,11,0.18)" strokeWidth="1.5"/>
      <circle cx="200" cy="190" r="42"  fill="url(#shieldGrad)" stroke="rgba(245,158,11,0.3)" strokeWidth="1.5"/>
      <g transform="translate(200,190)">
        <path d="M 0 -20 L 16 -11 L 16 7 C 16 16 0 25 0 25 C 0 25 -16 16 -16 7 L -16 -11 Z"
          fill="rgba(245,158,11,0.15)" stroke="#d97706" strokeWidth="1.5"/>
        <path d="M -5 0 L -2 3 L 7 -5" fill="none" stroke="#d97706" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      {/* SDCA Attention — top */}
      <g>
        <circle cx="200" cy="52" r="26" fill="rgba(6,182,212,0.06)" stroke="rgba(6,182,212,0.25)" strokeWidth="1.5"/>
        <text x="200" y="49" textAnchor="middle" fill="#0891b2" fontSize="8" fontWeight="600">SDCA</text>
        <text x="200" y="60" textAnchor="middle" fill="#9ca3af" fontSize="6.5">Attention</text>
      </g>
      {/* Agentic Governance — right */}
      <g>
        <circle cx="328" cy="190" r="26" fill="rgba(139,92,246,0.06)" stroke="rgba(139,92,246,0.25)" strokeWidth="1.5"/>
        <text x="328" y="187" textAnchor="middle" fill="#7c3aed" fontSize="8" fontWeight="600">Agentic</text>
        <text x="328" y="198" textAnchor="middle" fill="#9ca3af" fontSize="6.5">Governance</text>
      </g>
      {/* Secure Analytics — bottom */}
      <g>
        <circle cx="200" cy="328" r="26" fill="rgba(16,185,129,0.06)" stroke="rgba(16,185,129,0.25)" strokeWidth="1.5"/>
        <text x="200" y="325" textAnchor="middle" fill="#059669" fontSize="8" fontWeight="600">Secure</text>
        <text x="200" y="336" textAnchor="middle" fill="#9ca3af" fontSize="6.5">Analytics</text>
      </g>
      {/* Secure Comms — left */}
      <g>
        <circle cx="72" cy="190" r="26" fill="rgba(251,113,133,0.06)" stroke="rgba(251,113,133,0.25)" strokeWidth="1.5"/>
        <text x="72" y="187" textAnchor="middle" fill="#e11d48" fontSize="8" fontWeight="600">Secure</text>
        <text x="72" y="198" textAnchor="middle" fill="#9ca3af" fontSize="6.5">Comms</text>
      </g>
      {/* Connector lines */}
      <line x1="200" y1="78"  x2="200" y2="148" stroke="rgba(6,182,212,0.15)"   strokeWidth="1" strokeDasharray="3,3"/>
      <line x1="302" y1="190" x2="242" y2="190" stroke="rgba(139,92,246,0.15)"  strokeWidth="1" strokeDasharray="3,3"/>
      <line x1="200" y1="302" x2="200" y2="232" stroke="rgba(16,185,129,0.15)"  strokeWidth="1" strokeDasharray="3,3"/>
      <line x1="98"  y1="190" x2="158" y2="190" stroke="rgba(251,113,133,0.15)" strokeWidth="1" strokeDasharray="3,3"/>
      <text x="200" y="370" textAnchor="middle" fill="#9ca3af" fontSize="7.5">
        Foundational mechanisms protected at every layer
      </text>
    </svg>
  );
}

export default function PatentHero() {
  const heroRef = useRef(null);

  useGSAP(() => {
    if (typeof document === "undefined") return;

    // Split chars — apply gradient inline per char for gradient line
    document.querySelectorAll(".hero-line").forEach((line) => {
      const isGradient = line.dataset.gradient === "amber";
      const text = line.textContent;
      line.innerHTML = "";
      text.split("").forEach((c) => {
        const span = document.createElement("span");
        span.className = "char";
        if (isGradient) {
          span.style.background =
            "linear-gradient(135deg, #b45309 0%, #d97706 40%, #f59e0b 100%)";
          span.style.webkitBackgroundClip = "text";
          span.style.webkitTextFillColor = "transparent";
          span.style.backgroundClip = "text";
        }
        span.textContent = c === " " ? "\u00A0" : c;
        line.appendChild(span);
      });
    });

    // Hero entrance timeline
    const tl = gsap.timeline({ delay: 0.3 });
    tl.to("#heroBreadcrumb", { opacity: 1, duration: 0.6, ease: "power2.out" })
      .to("#heroBadge",      { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.3")
      .to(".hero-line-1 .char", {
        opacity: 1, y: 0, rotateX: 0, skewX: 0,
        stagger: 0.03, duration: 1, ease: "power4.out",
      }, "-=0.4")
      .to(".hero-line-2 .char", {
        opacity: 1, y: 0, rotateX: 0, skewX: 0,
        stagger: 0.03, duration: 1, ease: "power4.out",
      }, "-=0.7")
      .to("#heroSub1 p",  { y: 0, duration: 1,   ease: "power3.out" }, "-=0.3")
      .to("#heroSub2 p",  { y: 0, duration: 1,   ease: "power3.out" }, "-=0.5")
      .to("#heroButtons", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.3")
      .to("#heroStats",   { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.3");

    // Hero parallax on scroll
    gsap.to("#heroContent", {
      y: -120, ease: "none",
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
      <div className="absolute inset-0 mesh-bg opacity-20" />
      <div className="orb w-[700px] h-[500px] bg-amber-500/[0.06]"
        style={{ top: "-10%", left: "25%" }} />
      <div className="orb w-[500px] h-[400px] bg-orange-500/[0.04]"
        style={{ bottom: "10%", right: "10%" }} />

      <div className="relative max-w-6xl mx-auto px-8" id="heroContent">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-12 opacity-0" id="heroBreadcrumb">
          <span className="text-gray-400 font-light">Research IP</span>
          <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
          <span className="text-amber-600 font-light">Patent Portfolio</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left col */}
          <div>
            {/* Badge */}
            <div className="mb-8 opacity-0" id="heroBadge">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/[0.1] border border-amber-500/[0.2]">
                <span
                  className="w-2 h-2 rounded-full bg-amber-500"
                  style={{ animation: "pulse-soft 2s ease-in-out infinite" }}
                />
                <span className="text-amber-700 text-[11px] font-light tracking-[0.25em] uppercase">
                  Patent Portfolio
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1
              className="display-hero text-6xl lg:text-[7rem] mb-6"
              style={{ perspective: "1000px" }}
            >
              {/*
                hero-line-1  — plain text line
                hero-line-2  — gradient line (data-gradient="amber" triggers
                               per-char inline gradient in the split loop above)
              */}
              <span
                className="hero-line hero-line-1"
                style={{ whiteSpace: "nowrap", display: "block" }}
              >
                Protected at
              </span>
              <span
                className="hero-line hero-line-2"
                data-gradient="amber"
                style={{ whiteSpace: "nowrap", display: "block" }}
              >
                Foundation.
              </span>
            </h1>

            {/* Sub lines */}
            <div className="overflow-hidden mb-4" id="heroSub1">
              <p className="text-xl text-gray-500 font-light translate-y-full">
                Genovation's technology stack is protected by a growing<br />
                portfolio of patent-pending and proprietary innovations.
              </p>
            </div>
            <div className="overflow-hidden mb-8" id="heroSub2">
              <p className="text-[15px] text-gray-400 font-light leading-relaxed max-w-lg translate-y-full">
                Our patent strategy protects{" "}
                <span className="text-amber-700 font-normal">foundational mechanisms</span>,
                not surface-level features — ensuring long-term defensibility as markets,
                models, and deployment environments evolve.
              </p>
            </div>

            {/* CTA buttons */}
            <div
              className="flex items-center gap-4 opacity-0 mb-10"
              id="heroButtons"
              style={{ transform: "translateY(30px)" }}
            >
              <a
                href="#patents"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full hero-cta-primary text-white text-[14px] font-normal"
              >
                <span>View Portfolio</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a
                href="#cta"
                className="px-7 py-3.5 rounded-full bg-black/[0.05] border border-black/[0.1] text-gray-600 text-[14px] font-light hover:bg-black/[0.08] transition-all"
              >
                Investor Inquiries
              </a>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-6 opacity-0" id="heroStats">
              {stats.map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  {i > 0 && <div className="w-px h-10 bg-black/[0.08]" />}
                  <div className={`w-10 h-10 rounded-xl ${s.bg} border flex items-center justify-center`}>
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm font-medium">{s.title}</p>
                    <p className="text-[10px] text-gray-400 font-light">{s.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right col — IP Architecture diagram */}
          <div className="r-up">
            <div className="diagram-card p-8">
              <IPDiagram />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
