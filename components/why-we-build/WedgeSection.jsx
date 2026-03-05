"use client";
import { useEffect, useRef } from "react";
import { Zap, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const linuxSteps = [
  { num: "1", color: "#10b981", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.15)", text: "Build for environments where failure is unacceptable" },
  { num: "2", color: "#06b6d4", bg: "rgba(6,182,212,0.08)",  border: "rgba(6,182,212,0.15)",  text: "Stress-test under the tightest constraints" },
  { num: "3", color: "#3b82f6", bg: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.15)", text: "Deploy everywhere — what survives the hardest conditions is the most reliable option in every condition" },
];

const funnelLayers = [
  { num: "1", color: "#3b82f6", bg: "rgba(59,130,246,0.06)",  border: "rgba(59,130,246,0.18)",  title: "Air-Gapped Defense",            desc: "Stress-tested in the harshest conditions"              },
  { num: "2", color: "#8b5cf6", bg: "rgba(139,92,246,0.06)",  border: "rgba(139,92,246,0.18)",  title: "Financial Services & Healthcare", desc: "Trusted because it survived defense-grade scrutiny"     },
  { num: "3", color: "#06b6d4", bg: "rgba(6,182,212,0.06)",   border: "rgba(6,182,212,0.18)",   title: "Manufacturing & Government",     desc: "Proven reliable across regulated environments"          },
  { num: "4", color: "#10b981", bg: "rgba(16,185,129,0.06)",  border: "rgba(16,185,129,0.18)",  title: "Every Enterprise",               desc: "The most trusted option at every level"                 },
];

// widths for desktop taper
const WIDTHS = ["100%", "88%", "76%", "64%"];

export default function WedgeSection() {
  const sectionRef  = useRef(null);
  const headerRef   = useRef(null);
  const linuxRef    = useRef(null);
  const stepRefs    = useRef([]);
  const funnelRef   = useRef(null);
  const layerRefs   = useRef([]);
  const arrowRefs   = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Header
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true } }
      );

      // Linux card wrapper
      gsap.fromTo(linuxRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: linuxRef.current, start: "top 88%", once: true } }
      );

      // Linux steps stagger
      gsap.fromTo(stepRefs.current,
        { opacity: 0, x: -24 },
        { opacity: 1, x: 0, duration: 0.55, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: linuxRef.current, start: "top 85%", once: true } }
      );

      // Funnel label
      gsap.fromTo(funnelRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: funnelRef.current, start: "top 88%", once: true } }
      );

      // Funnel layers — cascade down
      layerRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el,
          { opacity: 0, y: 20, scaleX: 0.94 },
          { opacity: 1, y: 0, scaleX: 1, duration: 0.6, delay: i * 0.13, ease: "power3.out",
            transformOrigin: "top center",
            scrollTrigger: { trigger: funnelRef.current, start: "top 82%", once: true } }
        );
      });

      // Arrows fade in between layers
      arrowRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el,
          { opacity: 0, y: -6 },
          { opacity: 1, y: 0, duration: 0.35, delay: i * 0.13 + 0.25, ease: "power2.out",
            scrollTrigger: { trigger: funnelRef.current, start: "top 82%", once: true } }
        );
      });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden" id="wedge">
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle at 25% 40%, rgba(16,185,129,0.15) 0%, transparent 60%)" }} />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
            style={{ background: "rgba(16,185,129,0.08)", borderColor: "rgba(16,185,129,0.2)" }}>
            <Zap className="w-3 h-3" style={{ color: "#10b981" }} />
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase" style={{ color: "#10b981" }}>Our Wedge</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight leading-tight">
            Built for the Hardest.<br />
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #10b981, #06b6d4)" }}>
              Adopted Everywhere.
            </span>
          </h2>
        </div>

        {/* Linux analogy card */}
        <div ref={linuxRef}
          className="rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-sm p-6 sm:p-8 mb-12 shadow-sm">
          <p className="text-gray-500 leading-relaxed font-light text-center mb-6 text-sm sm:text-base">
            The logic is the same logic that made Linux the foundation of the modern internet:
          </p>
          <div className="flex flex-col gap-3 max-w-2xl mx-auto">
            {linuxSteps.map((s, i) => (
              <div
                key={s.num}
                ref={(el) => (stepRefs.current[i] = el)}
                className="flex items-center gap-4 rounded-xl px-4 py-3.5 border"
                style={{ background: s.bg, borderColor: s.border }}
              >
                <div
                  className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold"
                  style={{ background: `${s.color}22`, color: s.color }}
                >
                  {s.num}
                </div>
                <p className="text-gray-700 font-light text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Funnel */}
        <div ref={funnelRef}>
          <p className="text-center text-[10px] text-gray-400 font-mono tracking-widest uppercase mb-8">
            The rigor travels downward — the trust travels outward
          </p>

          {/* Funnel layers — centered taper on md+, full width on mobile */}
          <div className="flex flex-col items-center gap-0">
            {funnelLayers.map((f, i) => (
              <div key={f.num} className="w-full flex flex-col items-center">

                {/* Layer */}
                <div
                  ref={(el) => (layerRefs.current[i] = el)}
                  className="flex items-center gap-3 sm:gap-4 rounded-2xl border px-4 sm:px-6 py-3.5 sm:py-4 w-full transition-shadow duration-300 hover:shadow-md"
                  style={{
                    maxWidth: WIDTHS[i],
                    background: f.bg,
                    borderColor: f.border,
                  }}
                >
                  {/* Number bubble */}
                  <div
                    className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: `${f.color}1a`, color: f.color, border: `1px solid ${f.border}` }}
                  >
                    {f.num}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center sm:gap-3">
                    <h5 className="text-sm font-semibold text-gray-800 leading-tight whitespace-nowrap">{f.title}</h5>
                    <span className="hidden sm:block w-px h-4 bg-gray-200 shrink-0" />
                    <p className="text-xs text-gray-500 font-light leading-snug mt-0.5 sm:mt-0">{f.desc}</p>
                  </div>

                  {/* Color accent dot */}
                  <div
                    className="shrink-0 w-2 h-2 rounded-full"
                    style={{ background: f.color }}
                  />
                </div>

                {/* Arrow between layers */}
                {i < funnelLayers.length - 1 && (
                  <div
                    ref={(el) => (arrowRefs.current[i] = el)}
                    className="flex flex-col items-center py-1"
                  >
                    <div className="w-px h-2.5 bg-gray-200" />
                    <ChevronDown className="w-4 h-4 text-gray-300" />
                    <div className="w-px h-2.5 bg-gray-200" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}