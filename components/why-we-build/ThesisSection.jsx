"use client";
import { useEffect, useRef } from "react";
import { Lightbulb } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const layers = [
  {
    maxWidth: "100%",
    label: "Market",
    accent: { bg: "rgba(59,130,246,0.08)", color: "#3b82f6", bar: "#3b82f6" },
    body: "Enterprise AI in regulated industries is a massive, structurally underserved market. Adoption is blocked not by capability but by trust, sovereignty, and economics.",
  },
  {
    maxWidth: "92%",
    label: "Wedge",
    accent: { bg: "rgba(6,182,212,0.08)", color: "#06b6d4", bar: "#06b6d4" },
    body: "Built for the hardest environments — sovereignty, security, explainability — then adopted everywhere. Like Linux: stress-tested under the tightest constraints, then trusted at every level.",
  },
  {
    maxWidth: "84%",
    label: "Moat",
    accent: { bg: "rgba(139,92,246,0.08)", color: "#8b5cf6", bar: "#8b5cf6" },
    body: "Proprietary SLMs, proprietary agentic OS, defense-grade cryptographic libraries. Core innovations filed for patent in 2025. Depth compounds. Not a wrapper business.",
  },
  {
    maxWidth: "76%",
    label: "Economics",
    accent: { bg: "rgba(245,158,11,0.08)", color: "#f59e0b", bar: "#f59e0b" },
    body: "SLM-first architecture makes sovereign AI viable at mid-market price points. Platform + agent SKUs + extension libraries — predictable pricing, no cloud dependency.",
  },
  {
    maxWidth: "68%",
    label: "GTM",
    accent: { bg: "rgba(251,113,133,0.08)", color: "#fb7185", bar: "#fb7185" },
    body: "Platform → deep libraries → focused SKUs. Land with a single product, expand across the organization, deepen as library capabilities grow.",
  },
  {
    maxWidth: "60%",
    label: "Expansion",
    accent: { bg: "rgba(16,185,129,0.08)", color: "#10b981", bar: "#10b981" },
    body: "Current SKUs establish position. Libraries in security and physical-world interaction unlock simulation, operational intelligence, industrial agents — same governed infrastructure.",
  },
];

export default function ThesisSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const layerRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true },
        }
      );

      // Layers: staggered slide-in from left + fade
      layerRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, x: -60, scaleX: 0.92 },
          {
            opacity: 1, x: 0, scaleX: 1,
            duration: 0.7,
            delay: i * 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          }
        );

        // Accent bar width animation
        const bar = el.querySelector(".accent-bar");
        if (bar) {
          gsap.fromTo(bar, { scaleX: 0 }, {
            scaleX: 1, duration: 0.6, delay: i * 0.08 + 0.3, ease: "power2.out",
            transformOrigin: "left center",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden" id="thesis">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 20%, rgba(16,185,129,0.15) 0%, transparent 60%)" }} />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
            style={{ background: "rgba(16,185,129,0.08)", borderColor: "rgba(16,185,129,0.2)" }}>
            <Lightbulb className="w-3 h-3" style={{ color: "#10b981" }} />
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase" style={{ color: "#10b981" }}>Thesis</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight">
            The Investment Thesis
          </h2>
        </div>

        {/* Pyramid layers */}
        <div className="flex flex-col gap-2.5">
          {layers.map((layer, i) => (
            <div
              key={layer.label}
              ref={(el) => (layerRefs.current[i] = el)}
              className="group relative rounded-2xl border border-gray-100 overflow-hidden transition-shadow duration-300 hover:shadow-md"
              style={{
                maxWidth: layer.maxWidth,
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Accent bar */}
              <div
                className="accent-bar absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                style={{ background: layer.accent.bar }}
              />

              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-5 px-5 sm:px-7 py-4 sm:py-5 pl-6 sm:pl-8">
                {/* Label badge */}
                <div
                  className="shrink-0 self-start sm:self-center px-3 py-1 rounded-lg text-[10px] font-mono font-semibold tracking-[0.15em] uppercase"
                  style={{ background: layer.accent.bg, color: layer.accent.color, minWidth: "72px", textAlign: "center" }}
                >
                  {layer.label}
                </div>

                {/* Body */}
                <p className="text-sm text-gray-500 leading-relaxed font-light flex-1">{layer.body}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}