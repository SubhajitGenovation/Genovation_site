"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, BookOpen, BarChart3, Lightbulb, MessageCircle, Brain, Sparkles, Boxes, Lock, Atom, Radio, RadioTower, Box, Wifi, Factory, ShieldCheck, FileSearch } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ACC_ITEMS = [
  { id: "mentis",     color: "#10b981", title: "Mentis OS",               badge: null,           body: "The governed agentic operating system beneath everything. Orchestrates agents, enforces policies, provides real-time oversight, and ensures every decision is explainable and auditable.", list: null },
  { id: "agents",     color: "#3b82f6", title: "Agent SKUs",              badge: "4 agents",     body: "Purpose-built agents for specific enterprise functions:", list: [{ key: "Knowledge", desc: "Document understanding, semantic search, knowledge graph construction" }, { key: "Analytics", desc: "Pattern recognition, anomaly detection, trend forecasting" }, { key: "Strategy", desc: "Scenario modeling, risk assessment, decision support" }, { key: "CX", desc: "Customer interaction, sentiment analysis, intelligent routing" }] },
  { id: "slms",       color: "#f59e0b", title: "Small Language Models",   badge: "3 components", body: "Proprietary domain-specific models — not fine-tuned open source. Built from the ground up for accuracy, efficiency, and on-premise deployment.", list: [{ key: "Core SLMs", desc: "Run on commodity GPUs with predictable costs" }, { key: "SDCA", desc: "Patent-filed attention mechanism for domain expertise" }, { key: "Domain Models", desc: "Finance, healthcare, legal, manufacturing, defense" }] },
  { id: "security",   color: "#8b5cf6", title: "Security & Cryptography", badge: "3 components", body: "Defense-grade security engineered from the ground up — not bolted on after the fact.", list: [{ key: "CipherVault", desc: "Computation on encrypted data, zero-knowledge proofs" }, { key: "Post-Quantum", desc: "Lattice-based primitives resistant to quantum attacks" }, { key: "Secure Comms", desc: "Zero-trust agent channels, mutual authentication" }] },
  { id: "extensions", color: "#06b6d4", title: "Extension Libraries",     badge: "4 components", body: "Libraries that extend agent capabilities into the physical world.", list: [{ key: "Sensors", desc: "Industrial sensors, environmental monitors, equipment telemetry" }, { key: "Simulations", desc: "Digital twins, sandboxed testing, what-if analysis" }, { key: "IoT", desc: "MQTT, OPC-UA, Modbus, bidirectional device communication" }, { key: "Industrial", desc: "PLCs, SCADA, manufacturing execution systems" }] },
  { id: "governance", color: "#fb7185", title: "Governance & Audit",      badge: "2 components", body: "The accountability layer that makes everything else enterprise-ready.", list: [{ key: "Governance Engine", desc: "Policy enforcement, access control, real-time override" }, { key: "Audit Trail", desc: "Immutable logs, reasoning chains, decision explainability" }] },
];

const ORBITS = [
  { r: 72,  dur: 18, color: "#3b82f6", planets: [
    { icon: <BookOpen      className="w-4 h-4" />, label: "Knowledge", angle: 0   },
    { icon: <BarChart3     className="w-4 h-4" />, label: "Analytics", angle: 90  },
    { icon: <Lightbulb     className="w-4 h-4" />, label: "Strategy",  angle: 180 },
    { icon: <MessageCircle className="w-4 h-4" />, label: "CX",        angle: 270 },
  ]},
  { r: 138, dur: 28, color: "#f59e0b", planets: [
    { icon: <Brain    className="w-4 h-4" />, label: "SLMs",   angle: 45  },
    { icon: <Sparkles className="w-4 h-4" />, label: "SDCA",   angle: 165 },
    { icon: <Boxes    className="w-4 h-4" />, label: "Domain", angle: 285 },
  ]},
  { r: 204, dur: 40, color: "#8b5cf6", planets: [
    { icon: <Lock  className="w-4 h-4" />, label: "CipherVault",  angle: 20  },
    { icon: <Atom  className="w-4 h-4" />, label: "Post-Quantum", angle: 140 },
    { icon: <Radio className="w-4 h-4" />, label: "Sec. Comms",   angle: 260 },
  ]},
  { r: 270, dur: 55, color: "#06b6d4", planets: [
    { icon: <RadioTower  className="w-4 h-4" />, label: "Sensors",     angle: 0,   color: "#06b6d4" },
    { icon: <Box         className="w-4 h-4" />, label: "Simulations", angle: 60,  color: "#06b6d4" },
    { icon: <Wifi        className="w-4 h-4" />, label: "IoT",         angle: 130, color: "#06b6d4" },
    { icon: <Factory     className="w-4 h-4" />, label: "Industrial",  angle: 200, color: "#06b6d4" },
    { icon: <ShieldCheck className="w-4 h-4" />, label: "Governance",  angle: 270, color: "#fb7185" },
    { icon: <FileSearch  className="w-4 h-4" />, label: "Audit",       angle: 330, color: "#10b981" },
  ]},
];

// ── Accordion Item ────────────────────────────────────────────────────────────

function AccItem({ item, isOpen, onToggle }) {
  const bodyRef = useRef(null);

  useEffect(() => {
    if (!bodyRef.current) return;
    if (isOpen) {
      gsap.fromTo(bodyRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.35, ease: "power2.out" }
      );
    } else {
      gsap.to(bodyRef.current, { height: 0, opacity: 0, duration: 0.25, ease: "power2.in" });
    }
  }, [isOpen]);

  return (
    <div
      className="rounded-xl border overflow-hidden"
      style={{
        borderColor: isOpen ? `${item.color}35` : "rgba(0,0,0,0.07)",
        background:  isOpen ? `${item.color}05` : "#fff",
        transition: "border-color 0.2s, background 0.2s",
      }}
    >
      <button className="w-full flex items-center justify-between px-5 py-3.5 text-left" onClick={onToggle}>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full shrink-0" style={{ background: item.color }} />
          <span className="text-sm font-medium text-gray-800">{item.title}</span>
          {item.badge && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
              style={{ color: item.color, borderColor: `${item.color}35`, background: `${item.color}0d` }}>
              {item.badge}
            </span>
          )}
        </div>
        <ChevronDown className="w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
      </button>

      <div ref={bodyRef} style={{ height: 0, overflow: "hidden", opacity: 0 }}>
        <div className="px-5 pb-4 pt-0">
          <p className="text-sm text-gray-500 font-light leading-relaxed mb-3">{item.body}</p>
          {item.list && (
            <div className="flex flex-col gap-1.5">
              {item.list.map((l) => (
                <div key={l.key} className="flex gap-2 text-xs">
                  <span className="font-medium text-gray-700 shrink-0">{l.key}</span>
                  <span className="text-gray-300">—</span>
                  <span className="text-gray-500 font-light">{l.desc}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Solar System ──────────────────────────────────────────────────────────────

function SolarSystem() {
  const wrapRef    = useRef(null);
  const orbitEls   = useRef([]);
  const counterEls = useRef({});
  const orbitTweens = useRef([]);

  const SIZE = 620;
  const CX   = SIZE / 2;

  useEffect(() => {
    // Slow, smooth orbit rotations
    ORBITS.forEach((orb, oi) => {
      const el = orbitEls.current[oi];
      if (!el) return;
      const tw = gsap.to(el, {
        rotation: 360,
        duration: orb.dur,
        ease: "none",
        repeat: -1,
        svgOrigin: `${CX} ${CX}`,
      });
      orbitTweens.current[oi] = tw;

      // Counter-rotate each planet so icons/labels stay upright
      orb.planets.forEach((_, pi) => {
        const cel = counterEls.current[`${oi}-${pi}`];
        if (!cel) return;
        gsap.to(cel, {
          rotation: -360,
          duration: orb.dur,
          ease: "none",
          repeat: -1,
          svgOrigin: "0 0",
        });
      });
    });

    // Simple fade-in on scroll
    gsap.fromTo(wrapRef.current,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: wrapRef.current, start: "top 85%", once: true } }
    );

    return () => orbitTweens.current.forEach((t) => t?.kill());
  }, []);

  const pause  = () => orbitTweens.current.forEach((t) => t?.pause());
  const resume = () => orbitTweens.current.forEach((t) => t?.resume());

  return (
    <div ref={wrapRef} className="w-full max-w-75 sm:max-w-95 lg:max-w-115 mx-auto select-none"
      onMouseEnter={pause} onMouseLeave={resume}>
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="w-full h-auto" style={{ overflow: "visible" }}>
        <defs>
          <radialGradient id="cGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#134e4a" />
            <stop offset="100%" stopColor="#164e63" />
          </radialGradient>
          <filter id="cGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="8" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Orbit rings */}
        {ORBITS.map((orb, oi) => (
          <circle key={oi} cx={CX} cy={CX} r={orb.r}
            fill="none" stroke={orb.color} strokeWidth="1"
            strokeOpacity="0.12" strokeDasharray="3 8" />
        ))}

        {/* Rotating orbit groups */}
        {ORBITS.map((orb, oi) => (
          <g key={oi} ref={(el) => (orbitEls.current[oi] = el)}>
            {orb.planets.map((planet, pi) => {
              const rad    = (planet.angle - 90) * (Math.PI / 180);
              const px     = CX + orb.r * Math.cos(rad);
              const py     = CX + orb.r * Math.sin(rad);
              const pcolor = planet.color ?? orb.color;
              return (
                <g key={pi} transform={`translate(${px}, ${py})`}>
                  <circle r="16" fill={`${pcolor}12`} stroke={pcolor} strokeWidth="1" strokeOpacity="0.35" />
                  <g ref={(el) => (counterEls.current[`${oi}-${pi}`] = el)}>
                    <foreignObject x="-8" y="-8" width="16" height="16" style={{ overflow: "visible" }}>
                      <div xmlns="http://www.w3.org/1999/xhtml"
                        style={{ width: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center", color: pcolor }}>
                        {planet.icon}
                      </div>
                    </foreignObject>
                    <text y="30" textAnchor="middle"
                      fill="rgba(80,80,90,0.6)" fontSize="8"
                      fontFamily="system-ui, sans-serif" fontWeight="500">
                      {planet.label}
                    </text>
                  </g>
                </g>
              );
            })}
          </g>
        ))}

        {/* Center */}
        <circle cx={CX} cy={CX} r="52" fill="url(#cGrad)" filter="url(#cGlow)" />
        <circle cx={CX} cy={CX} r="52" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <text x={CX} y={CX - 5} textAnchor="middle"
          fill="white" fontSize="12" fontWeight="600" fontFamily="system-ui, sans-serif">
          Mentis OS
        </text>
        <text x={CX} y={CX + 12} textAnchor="middle"
          fill="rgba(255,255,255,0.4)" fontSize="7" letterSpacing="2.5"
          fontFamily="system-ui, sans-serif">
          PLATFORM
        </text>
      </svg>
    </div>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────

export default function EcosystemSection() {
  const [openItem,    setOpenItem]    = useState(null);
  const sectionRef   = useRef(null);
  const headerRef    = useRef(null);
  const accordionRef = useRef(null);

  const toggle = (id) => setOpenItem((prev) => (prev === id ? null : id));

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 88%", once: true } }
      );
      gsap.fromTo(accordionRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: accordionRef.current, start: "top 88%", once: true } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-28 relative overflow-hidden" id="ecosystem">
      <div className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "radial-gradient(circle at 75% 15%, rgba(16,185,129,0.3) 0%, transparent 55%)" }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight mb-2">
            The Genovation{" "}
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #10b981, #06b6d4)" }}>
              Ecosystem
            </span>
          </h2>
          <p className="text-xs text-gray-400 font-mono tracking-widest uppercase mt-3">Hover to pause</p>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-14">
          <div className="w-full lg:w-auto lg:shrink-0 lg:flex-1">
            <SolarSystem />
          </div>
          <div ref={accordionRef} className="w-full lg:flex-1 lg:pt-4 flex flex-col gap-2">
            {ACC_ITEMS.map((item) => (
              <AccItem key={item.id} item={item}
                isOpen={openItem === item.id}
                onToggle={() => toggle(item.id)} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
