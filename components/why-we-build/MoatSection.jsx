"use client";
import { useEffect, useRef } from "react";
import { Shield, Rocket, Puzzle, Eye, Lock, Server, Brain, Cpu, Stamp, ChevronsUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const COLORS = {
  emerald: { color: "#10b981", bg: "rgba(16,185,129,0.06)", border: "rgba(16,185,129,0.18)" },
  cyan:    { color: "#06b6d4", bg: "rgba(6,182,212,0.06)",  border: "rgba(6,182,212,0.18)"  },
  rose:    { color: "#fb7185", bg: "rgba(251,113,133,0.06)",border: "rgba(251,113,133,0.18)"},
  violet:  { color: "#8b5cf6", bg: "rgba(139,92,246,0.06)", border: "rgba(139,92,246,0.18)" },
  blue:    { color: "#3b82f6", bg: "rgba(59,130,246,0.06)", border: "rgba(59,130,246,0.18)" },
  amber:   { color: "#f59e0b", bg: "rgba(245,158,11,0.06)", border: "rgba(245,158,11,0.18)" },
};

function MoatBlock({ icon, title, desc, colorKey, wide = false, foundation = false }) {
  const c = COLORS[colorKey];
  return (
    <div
      className={`flex items-start gap-3 sm:gap-4 rounded-2xl border p-4 sm:p-5 transition-shadow duration-300 hover:shadow-md ${wide ? "w-full" : "flex-1 min-w-0"}`}
      style={{ background: c.bg, borderColor: c.border, ...(foundation ? { borderStyle: "dashed" } : {}) }}
    >
      <div
        className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center"
        style={{ background: `${c.color}18`, border: `1px solid ${c.border}` }}
      >
        <span style={{ color: c.color }}>{icon}</span>
      </div>
      <div className="min-w-0">
        <h5 className="text-sm font-semibold text-gray-800 mb-1 leading-tight">{title}</h5>
        <p className="text-xs text-gray-500 leading-relaxed font-light">{desc}</p>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-center py-1">
      <div className="flex flex-col items-center gap-0.5">
        <div className="w-px h-3 bg-gray-200" />
        <ChevronsUp className="w-3.5 h-3.5 text-gray-300" />
        <div className="w-px h-3 bg-gray-200" />
      </div>
    </div>
  );
}

const rows = [
  {
    key: "production",
    blocks: [
      { icon: <Rocket className="w-4 h-4" />, title: "Production Deployments", desc: "Live in finance, defense, healthcare, government — trust earned through delivery", colorKey: "emerald", wide: true },
    ],
  },
  {
    key: "layer4",
    blocks: [
      { icon: <Puzzle className="w-4 h-4" />, title: "Extension Libraries", desc: "Sensors, simulations, IoT, industrial — physical world capabilities", colorKey: "cyan" },
      { icon: <Eye className="w-4 h-4" />, title: "Explainability", desc: "Decision traceability at every layer — architectural, not bolt-on", colorKey: "rose" },
    ],
  },
  {
    key: "layer3",
    blocks: [
      { icon: <Lock className="w-4 h-4" />, title: "Cryptographic Libraries", desc: "Post-quantum primitives, CipherVault, secure agent comms", colorKey: "violet" },
      { icon: <Server className="w-4 h-4" />, title: "Sovereign Architecture", desc: "On-prem, air-gapped by default — can't retrofit from cloud-first", colorKey: "blue" },
    ],
  },
  {
    key: "layer2",
    blocks: [
      { icon: <Brain className="w-4 h-4" />, title: "Proprietary SLMs + SDCA", desc: "Domain-specific models with novel attention — years of research that compounds", colorKey: "amber" },
      { icon: <Cpu className="w-4 h-4" />, title: "Mentis OS", desc: "Proprietary agentic OS — cannot be assembled from open-source", colorKey: "emerald" },
    ],
  },
  {
    key: "foundation",
    blocks: [
      { icon: <Stamp className="w-4 h-4" />, title: "Patent-Protected Foundation", desc: "Core innovations filed for patent in 2025 — defensible competitive position", colorKey: "amber", wide: true, foundation: true },
    ],
  },
];

export default function MoatSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const rowRefs = useRef([]);
  const connectorRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true } }
      );

      // Rows — bottom to top (foundation first, production last)
      const reversed = [...rowRefs.current].reverse();
      reversed.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.65, delay: i * 0.1, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 92%", once: true } }
        );
      });

      // Connectors fade in
      connectorRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, scaleY: 0 },
          { opacity: 1, scaleY: 1, duration: 0.4, delay: i * 0.1 + 0.3, ease: "power2.out",
            transformOrigin: "bottom center",
            scrollTrigger: { trigger: el, start: "top 95%", once: true } }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden" id="moat">
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(139,92,246,0.12) 0%, transparent 60%)" }} />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
            style={{ background: "rgba(139,92,246,0.08)", borderColor: "rgba(139,92,246,0.2)" }}>
            <Shield className="w-3 h-3" style={{ color: "#8b5cf6" }} />
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase" style={{ color: "#8b5cf6" }}>Defensibility</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight">
            Moat Summary
          </h2>
        </div>

        {/* Wall */}
        <div className="flex flex-col gap-0">
          {rows.map((row, ri) => (
            <div key={row.key}>
              {/* Connector above every row except the top */}
              {ri > 0 && (
                <div ref={(el) => (connectorRefs.current[ri - 1] = el)}>
                  <Connector />
                </div>
              )}
              <div
                ref={(el) => (rowRefs.current[ri] = el)}
                className={`flex gap-3 sm:gap-4 ${row.blocks[0]?.wide ? "" : "flex-col sm:flex-row"}`}
              >
                {row.blocks.map((b) => (
                  <MoatBlock key={b.title} {...b} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8 font-light">
          Each layer depends on and reinforces the layers beneath it
        </p>
      </div>
    </section>
  );
}