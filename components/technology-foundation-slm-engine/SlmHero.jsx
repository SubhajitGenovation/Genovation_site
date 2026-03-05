"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Cpu, ArrowRight, ChevronRight } from "lucide-react";

const stats = [
  { value: "~3.5", label: "GPT Level", sub: "Capability Match", color: "emerald" },
  { value: "10x", label: "Cost Reduction", sub: "vs. Cloud LLMs", color: "cyan" },
  { value: "100%", label: "On-Premise", sub: "Data Residency", color: "blue" },
  { value: "0", label: "External APIs", sub: "Zero Dependencies", color: "violet" },
];

const colorMap = {
  emerald: { bg: "bg-emerald-500/[0.06]", border: "border-emerald-500/[0.15]", text: "text-emerald-600", sub: "text-emerald-600/60" },
  cyan:    { bg: "bg-cyan-500/[0.06]",    border: "border-cyan-500/[0.15]",    text: "text-cyan-600",    sub: "text-cyan-600/60" },
  blue:    { bg: "bg-blue-500/[0.06]",    border: "border-blue-500/[0.15]",    text: "text-blue-600",    sub: "text-blue-600/60" },
  violet:  { bg: "bg-violet-500/[0.06]",  border: "border-violet-500/[0.15]",  text: "text-violet-600",  sub: "text-violet-600/60" },
};

export default function SlmHero() {
  const heroRef = useRef(null);

  useGSAP(() => {
    if (typeof document === "undefined") return;
    const tl = gsap.timeline({ delay: 0.3 });
    tl.to("#slmHeroBadge",   { opacity: 1, duration: 0.8, ease: "power2.out" })
      .to("#slmHeroTitle",   { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=0.4")
      .to("#slmHeroSub1",    { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.6")
      .to("#slmHeroSub2",    { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.5")
      .to("#slmHeroStatus",  { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.4")
      .to("#slmHeroButtons", { opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4")
      .to("#slmHeroStats",   { opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.3")
      .to("#slmHeroDiagram", { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" }, "-=1.0");
  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-24 overflow-hidden" id="hero">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[700px] h-[500px] bg-emerald-500/[0.06]" style={{ top: "-10%", left: "30%" }} />
      <div className="orb w-[500px] h-[400px] bg-cyan-500/[0.05]" style={{ bottom: "10%", right: "10%" }} />

      <div className="relative max-w-7xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            {/* Breadcrumb */}
            {/* <div className="flex items-center gap-2 mb-2">
              <a href="#" className="text-[11px] text-gray-500 hover:text-gray-700 font-light tracking-wider transition-colors">Technology Foundation</a>
              <ChevronRight className="w-3 h-3 text-gray-400" />
            </div> */}

            {/* Badge */}
            {/* <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2] mb-8 r-up opacity-0" id="slmHeroBadge">
              <Cpu className="w-3 h-3 text-emerald-600" />
              <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">Model Architecture</span>
            </div> */}

            {/* Title */}
            <h1 className="display-hero text-5xl md:text-6xl lg:text-[5.5rem] mb-6 opacity-0" id="slmHeroTitle" style={{ transform: "translateY(80px)" }}>
              Small Language<br />
              <span className="text-gradient">Models</span>
            </h1>

            <p className="text-xl md:text-[1.5rem] text-gray-600 font-light tracking-[-0.01em] leading-[1.4] mb-4 opacity-0" id="slmHeroSub1">
              Enterprise-Grade Intelligence Without Hyperscale Dependency
            </p>

            <p className="text-[15px] text-gray-500 font-light mb-8 max-w-lg leading-relaxed opacity-0" id="slmHeroSub2">
              Large language models were designed for the internet. Enterprise intelligence operates under very different constraints. Genovation's SLMs are purpose-built to deliver explainable, sovereign, cost-efficient intelligence — without reliance on hyperscale infrastructure or external APIs.
            </p>

            {/* Status */}
            <div className="p-4 rounded-2xl bg-emerald-500/[0.06] border border-emerald-500/[0.15] mb-8 opacity-0" id="slmHeroStatus">
              <p className="text-[10px] text-emerald-600 font-mono tracking-wider uppercase mb-1">Deployment Status</p>
              <p className="text-[14px] text-gray-600 font-light">
                All Genovation intelligence products run on these SLMs, orchestrated by{" "}
                <span className="text-emerald-600 font-normal">Mentis OS</span>.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 mb-10 opacity-0" id="slmHeroButtons">
              <button className="group hero-cta-primary px-7 py-3.5 rounded-full text-[14px] font-medium flex items-center gap-2.5">
                <span className="text-black flex items-center gap-2.5">
                  Explore Architecture
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-7 py-3.5 rounded-full border border-black/[0.1] text-gray-600 text-[14px] font-light hover:border-emerald-400/25 hover:text-gray-800 hover:bg-black/[0.03] transition-all">
                Technical Specs
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 opacity-0" id="slmHeroStats">
              {stats.map((s, i) => {
                const c = colorMap[s.color];
                return (
                  <div key={i} className={`p-4 rounded-2xl ${c.bg} border ${c.border}`}>
                    <p className={`text-2xl font-light ${c.text} mb-1`}>{s.value}</p>
                    <p className="text-[10px] text-gray-500 font-light tracking-widest uppercase">{s.label}</p>
                    <p className={`text-[9px] ${c.sub} font-light mt-1`}>{s.sub}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: SVG Architecture Diagram */}
          <div className="opacity-0" id="slmHeroDiagram" style={{ transform: "translateX(100px)" }}>
            <div className="absolute -inset-6 bg-gradient-to-br from-emerald-500/[0.06] via-transparent to-cyan-500/[0.04] rounded-3xl blur-2xl" />
            <div className="relative p-6 rounded-2xl border border-emerald-500/[0.15] bg-white/70 backdrop-blur-sm" style={{ boxShadow: "0 30px 80px -20px rgba(16,185,129,0.1)" }}>
              <svg viewBox="0 0 520 520" className="w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="slmGEmerald" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#34d399"/><stop offset="100%" stopColor="#059669"/>
                  </linearGradient>
                  <linearGradient id="slmGCyan" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee"/><stop offset="100%" stopColor="#0891b2"/>
                  </linearGradient>
                  <linearGradient id="slmGViolet" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#a78bfa"/><stop offset="100%" stopColor="#7c3aed"/>
                  </linearGradient>
                  <filter id="slmDs"><feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#059669" floodOpacity="0.12"/></filter>
                  <filter id="slmDsV"><feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#7c3aed" floodOpacity="0.1"/></filter>
                  <filter id="slmDsC"><feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0891b2" floodOpacity="0.1"/></filter>
                  <marker id="slmArrowR" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                    <polygon points="0,0 8,3 0,6" fill="#d1d5db"/>
                  </marker>
                </defs>

                {/* Title */}
                <text x="260" y="26" textAnchor="middle" fill="#059669" fontSize="10" fontFamily="'Space Mono',monospace" fontWeight="600">SLM ARCHITECTURE</text>
                <text x="260" y="42" textAnchor="middle" fill="#9ca3af" fontSize="9" fontWeight="300">Enterprise-Optimized Transformer Pipeline</text>

                {/* Arrows */}
                <line x1="100" y1="120" x2="132" y2="120" stroke="#d1d5db" strokeWidth="1.5" markerEnd="url(#slmArrowR)"/>
                <line x1="230" y1="120" x2="262" y2="120" stroke="#d1d5db" strokeWidth="1.5" markerEnd="url(#slmArrowR)"/>
                <line x1="360" y1="120" x2="392" y2="120" stroke="#d1d5db" strokeWidth="1.5" markerEnd="url(#slmArrowR)"/>
                <line x1="472" y1="120" x2="497" y2="120" stroke="#d1d5db" strokeWidth="1.5" markerEnd="url(#slmArrowR)"/>

                {/* INPUT */}
                <g filter="url(#slmDsC)">
                  <rect x="18" y="86" width="82" height="68" rx="12" fill="white" stroke="rgba(6,182,212,0.3)" strokeWidth="1.5"/>
                  <rect x="18" y="86" width="82" height="22" rx="12" fill="url(#slmGCyan)"/>
                  <rect x="18" y="96" width="82" height="12" fill="url(#slmGCyan)"/>
                  <text x="59" y="101" textAnchor="middle" fill="white" fontSize="8" fontFamily="'Space Mono',monospace" fontWeight="600">INPUT</text>
                  <text x="59" y="128" textAnchor="middle" fill="#0891b2" fontSize="9" fontWeight="500">Tokenize</text>
                  <text x="59" y="143" textAnchor="middle" fill="#9ca3af" fontSize="7" fontWeight="300">text → ids</text>
                </g>

                {/* EMBEDDING */}
                <g filter="url(#slmDsV)">
                  <rect x="134" y="86" width="96" height="68" rx="12" fill="white" stroke="rgba(124,58,237,0.25)" strokeWidth="1.5"/>
                  <rect x="134" y="86" width="96" height="22" rx="12" fill="url(#slmGViolet)"/>
                  <rect x="134" y="96" width="96" height="12" fill="url(#slmGViolet)"/>
                  <text x="182" y="101" textAnchor="middle" fill="white" fontSize="8" fontFamily="'Space Mono',monospace" fontWeight="600">EMBEDDING</text>
                  <text x="182" y="128" textAnchor="middle" fill="#7c3aed" fontSize="9" fontWeight="500">Encode</text>
                  <text x="182" y="143" textAnchor="middle" fill="#9ca3af" fontSize="7" fontWeight="300">ids → vectors</text>
                </g>

                {/* TRANSFORMER */}
                <g filter="url(#slmDs)">
                  <rect x="264" y="72" width="96" height="96" rx="14" fill="white" stroke="rgba(16,185,129,0.35)" strokeWidth="2"/>
                  <rect x="264" y="72" width="96" height="24" rx="14" fill="url(#slmGEmerald)"/>
                  <rect x="264" y="84" width="96" height="12" fill="url(#slmGEmerald)"/>
                  <text x="312" y="89" textAnchor="middle" fill="white" fontSize="8" fontFamily="'Space Mono',monospace" fontWeight="600">TRANSFORMER</text>
                  <text x="285" y="115" textAnchor="middle" fill="#059669" fontSize="7" fontWeight="600">Attn</text>
                  <g transform="translate(285,122)">
                    <rect x="-16" y="-5" width="32" height="12" rx="3" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.3)" strokeWidth="0.8"/>
                    <text x="0" y="4" textAnchor="middle" fill="#059669" fontSize="6" fontWeight="700">QKV</text>
                  </g>
                  <line x1="312" y1="112" x2="312" y2="128" stroke="#c4b5fd" strokeWidth="1" strokeDasharray="2,2"/>
                  <text x="339" y="115" textAnchor="middle" fill="#059669" fontSize="7" fontWeight="600">FFN</text>
                  <g transform="translate(339,122)">
                    <rect x="-14" y="-5" width="28" height="12" rx="3" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.3)" strokeWidth="0.8"/>
                    <text x="0" y="4" textAnchor="middle" fill="#059669" fontSize="6" fontWeight="600">W₁W₂</text>
                  </g>
                  <line x1="302" y1="122" x2="323" y2="122" stroke="#d1d5db" strokeWidth="1" markerEnd="url(#slmArrowR)"/>
                  <text x="312" y="157" textAnchor="middle" fill="#9ca3af" fontSize="7" fontWeight="300">×32 layers</text>
                  <rect x="270" y="78" width="84" height="84" rx="12" fill="none" stroke="rgba(16,185,129,0.08)" strokeWidth="1" strokeDasharray="3,3" transform="translate(4,4)"/>
                </g>

                {/* PROJECTION */}
                <g filter="url(#slmDsV)">
                  <rect x="394" y="86" width="78" height="68" rx="12" fill="white" stroke="rgba(124,58,237,0.25)" strokeWidth="1.5"/>
                  <rect x="394" y="86" width="78" height="22" rx="12" fill="url(#slmGViolet)"/>
                  <rect x="394" y="96" width="78" height="12" fill="url(#slmGViolet)"/>
                  <text x="433" y="101" textAnchor="middle" fill="white" fontSize="8" fontFamily="'Space Mono',monospace" fontWeight="600">PROJECT</text>
                  <text x="433" y="128" textAnchor="middle" fill="#7c3aed" fontSize="9" fontWeight="500">LM Head</text>
                  <text x="433" y="143" textAnchor="middle" fill="#9ca3af" fontSize="7" fontWeight="300">→ vocab</text>
                </g>

                {/* OUTPUT */}
                <text x="504" y="108" textAnchor="middle" fill="#0891b2" fontSize="8" fontFamily="'Space Mono',monospace" fontWeight="600">OUT</text>
                <circle cx="504" cy="124" r="10" fill="rgba(6,182,212,0.1)" stroke="rgba(6,182,212,0.45)" strokeWidth="2"/>
                <circle cx="504" cy="124" r="4" fill="url(#slmGCyan)"/>

                {/* Connector down */}
                <line x1="312" y1="168" x2="312" y2="200" stroke="#c4b5fd" strokeWidth="1.2" strokeDasharray="3,3"/>
                <polygon points="309,199 315,199 312,205" fill="#c4b5fd"/>

                {/* Self-Attention Panel */}
                <rect x="70" y="210" width="390" height="120" rx="14" fill="rgba(16,185,129,0.02)" stroke="rgba(16,185,129,0.12)" strokeWidth="1"/>
                <text x="265" y="228" textAnchor="middle" fill="#059669" fontSize="8" fontFamily="'Space Mono',monospace" fontWeight="600">MULTI-HEAD SELF-ATTENTION DETAIL</text>
                <g transform="translate(120,260)">
                  <rect x="-30" y="-18" width="60" height="36" rx="8" fill="url(#slmGEmerald)" filter="url(#slmDs)"/>
                  <text x="0" y="5" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">Q</text>
                  <text x="0" y="-24" textAnchor="middle" fill="#9ca3af" fontSize="7" fontWeight="300">Query</text>
                </g>
                <g transform="translate(220,260)">
                  <rect x="-30" y="-18" width="60" height="36" rx="8" fill="url(#slmGEmerald)" filter="url(#slmDs)"/>
                  <text x="0" y="5" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">K</text>
                  <text x="0" y="-24" textAnchor="middle" fill="#9ca3af" fontSize="7" fontWeight="300">Key</text>
                </g>
                <g transform="translate(320,260)">
                  <rect x="-30" y="-18" width="60" height="36" rx="8" fill="url(#slmGEmerald)" filter="url(#slmDs)"/>
                  <text x="0" y="5" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">V</text>
                  <text x="0" y="-24" textAnchor="middle" fill="#9ca3af" fontSize="7" fontWeight="300">Value</text>
                </g>
                <path d="M150,260 C170,260 180,300 210,300" fill="none" stroke="rgba(16,185,129,0.4)" strokeWidth="1.2"/>
                <path d="M220,278 L220,300" fill="none" stroke="rgba(16,185,129,0.4)" strokeWidth="1.2"/>
                <path d="M290,260 C270,260 260,300 230,300" fill="none" stroke="rgba(16,185,129,0.4)" strokeWidth="1.2"/>
                <rect x="188" y="293" width="64" height="24" rx="6" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.3)" strokeWidth="1"/>
                <text x="220" y="309" textAnchor="middle" fill="#059669" fontSize="7" fontWeight="600">Softmax</text>
                <line x1="252" y1="305" x2="370" y2="305" stroke="rgba(16,185,129,0.3)" strokeWidth="1.2" markerEnd="url(#slmArrowR)"/>
                <rect x="372" y="293" width="70" height="24" rx="6" fill="rgba(124,58,237,0.08)" stroke="rgba(124,58,237,0.25)" strokeWidth="1"/>
                <text x="407" y="309" textAnchor="middle" fill="#7c3aed" fontSize="7" fontWeight="600">Concat + W_o</text>

                {/* FFN Panel */}
                <rect x="70" y="345" width="390" height="80" rx="14" fill="rgba(16,185,129,0.02)" stroke="rgba(16,185,129,0.1)" strokeWidth="1"/>
                <text x="265" y="363" textAnchor="middle" fill="#059669" fontSize="8" fontFamily="'Space Mono',monospace" fontWeight="600">FEED-FORWARD NETWORK</text>
                <rect x="95" y="378" width="60" height="30" rx="7" fill="white" stroke="rgba(16,185,129,0.3)" strokeWidth="1.2"/>
                <text x="125" y="397" textAnchor="middle" fill="#059669" fontSize="8" fontWeight="600">Input</text>
                <line x1="155" y1="393" x2="178" y2="393" stroke="#d1d5db" strokeWidth="1.5" markerEnd="url(#slmArrowR)"/>
                <rect x="180" y="378" width="76" height="30" rx="7" fill="url(#slmGEmerald)" filter="url(#slmDs)"/>
                <text x="218" y="397" textAnchor="middle" fill="white" fontSize="8" fontWeight="600">W₁ + GeLU</text>
                <line x1="256" y1="393" x2="279" y2="393" stroke="#d1d5db" strokeWidth="1.5" markerEnd="url(#slmArrowR)"/>
                <rect x="281" y="378" width="52" height="30" rx="7" fill="url(#slmGEmerald)" filter="url(#slmDs)"/>
                <text x="307" y="397" textAnchor="middle" fill="white" fontSize="8" fontWeight="600">W₂</text>
                <line x1="333" y1="393" x2="356" y2="393" stroke="#d1d5db" strokeWidth="1.5" markerEnd="url(#slmArrowR)"/>
                <rect x="358" y="378" width="82" height="30" rx="7" fill="white" stroke="rgba(124,58,237,0.25)" strokeWidth="1.2"/>
                <text x="399" y="397" textAnchor="middle" fill="#7c3aed" fontSize="8" fontWeight="600">Add & Norm</text>

                {/* Specs */}
                <g transform="translate(260,450)">
                  <rect x="-225" y="0" width="450" height="62" rx="12" fill="rgba(255,255,255,0.8)" stroke="rgba(16,185,129,0.1)" strokeWidth="1"/>
                  <g transform="translate(-170,38)">
                    <text x="0" y="0" fill="#059669" fontSize="16" fontWeight="700">~7B</text>
                    <text x="0" y="13" fill="#9ca3af" fontSize="7">Parameters</text>
                  </g>
                  <g transform="translate(-80,38)">
                    <text x="0" y="0" fill="#0891b2" fontSize="16" fontWeight="700">32</text>
                    <text x="0" y="13" fill="#9ca3af" fontSize="7">Layers</text>
                  </g>
                  <g transform="translate(0,38)">
                    <text x="0" y="0" fill="#7c3aed" fontSize="16" fontWeight="700">4096</text>
                    <text x="0" y="13" fill="#9ca3af" fontSize="7">Hidden Dim</text>
                  </g>
                  <g transform="translate(90,38)">
                    <text x="0" y="0" fill="#059669" fontSize="16" fontWeight="700">32</text>
                    <text x="0" y="13" fill="#9ca3af" fontSize="7">Attn Heads</text>
                  </g>
                  <g transform="translate(175,38)">
                    <text x="0" y="0" fill="#0891b2" fontSize="16" fontWeight="700">8K</text>
                    <text x="0" y="13" fill="#9ca3af" fontSize="7">Context</text>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
