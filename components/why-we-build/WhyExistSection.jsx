"use client";
import { useEffect, useRef } from "react";
import { Heart, Sparkles, Landmark, HeartPulse, Banknote, Factory, Zap, Building2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const nodes = [
  { icon: <Landmark  className="w-5 h-5" />, color: "#3b82f6", bg: "rgba(59,130,246,0.08)",  border: "rgba(59,130,246,0.18)",  title: "National Security", desc: "Defending critical infrastructure with autonomous intelligence that never phones home" },
  { icon: <HeartPulse className="w-5 h-5" />, color: "#fb7185", bg: "rgba(251,113,133,0.08)", border: "rgba(251,113,133,0.18)", title: "Healthcare",        desc: "Accelerating diagnosis, research, and care delivery at population scale" },
  { icon: <Banknote  className="w-5 h-5" />, color: "#f59e0b", bg: "rgba(245,158,11,0.08)",  border: "rgba(245,158,11,0.18)",  title: "Financial Systems", desc: "Governing risk, fraud detection, and compliance across global markets" },
  { icon: <Factory   className="w-5 h-5" />, color: "#06b6d4", bg: "rgba(6,182,212,0.08)",   border: "rgba(6,182,212,0.18)",   title: "Manufacturing",     desc: "Bringing governed autonomy to production lines, supply chains, and quality systems" },
  { icon: <Zap       className="w-5 h-5" />, color: "#8b5cf6", bg: "rgba(139,92,246,0.08)",  border: "rgba(139,92,246,0.18)",  title: "Energy & Climate",  desc: "Optimizing grids, reducing waste, and modeling environmental systems at scale" },
  { icon: <Building2 className="w-5 h-5" />, color: "#10b981", bg: "rgba(16,185,129,0.08)",  border: "rgba(16,185,129,0.18)",  title: "Government",        desc: "Enabling sovereign intelligence for public services and civic infrastructure" },
];

// Angles for 6 nodes evenly around a circle, starting top
const ANGLES = [0, 60, 120, 180, 240, 300];
const RADIUS_DESKTOP = 240;
const RADIUS_MD      = 180;

export default function WhyExistSection() {
  const sectionRef  = useRef(null);
  const headerRef   = useRef(null);
  const centerRef   = useRef(null);
  const nodeRefs    = useRef([]);
  const lineRefs    = useRef([]);
  const pulseRefs   = useRef([]);
  const footerRef   = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Header
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true } }
      );

      // Center bubble scale in
      gsap.fromTo(centerRef.current,
        { opacity: 0, scale: 0.4 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.6)",
          scrollTrigger: { trigger: centerRef.current, start: "top 82%", once: true } }
      );

      // Pulse rings loop
      pulseRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el,
          { scale: 0.8, opacity: 0.5 },
          { scale: 1.9, opacity: 0, duration: 2.4, delay: i * 0.7,
            ease: "power1.out", repeat: -1 }
        );
      });

      // Lines draw out
      lineRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.5, delay: i * 0.08 + 0.3, ease: "power2.out",
            transformOrigin: "left center",
            scrollTrigger: { trigger: centerRef.current, start: "top 82%", once: true } }
        );
      });

      // Nodes pop in staggered
      nodeRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el,
          { opacity: 0, scale: 0.7 },
          { opacity: 1, scale: 1, duration: 0.55, delay: i * 0.08 + 0.5,
            ease: "back.out(1.7)",
            scrollTrigger: { trigger: centerRef.current, start: "top 82%", once: true } }
        );
      });

      // Footer
      gsap.fromTo(footerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: footerRef.current, start: "top 90%", once: true } }
      );

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-36 relative overflow-hidden" id="why">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-150 h-150 rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, rgba(6,182,212,0.03) 40%, transparent 70%)" }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
            style={{ background: "rgba(16,185,129,0.08)", borderColor: "rgba(16,185,129,0.2)" }}>
            <Heart className="w-3 h-3" style={{ color: "#10b981" }} />
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase" style={{ color: "#10b981" }}>Why We Exist</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 tracking-tight leading-[1.1] mb-6">
            The world's hardest problems<br />
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #10b981, #06b6d4)" }}>
              deserve intelligence that works.
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 font-light max-w-2xl mx-auto">
            We exist to help organizations solve problems that matter — with AI they can trust, control, and deploy where it counts.
          </p>
        </div>

        {/* ── Radial layout (desktop md+) ── */}
        <div className="hidden md:flex items-center justify-center">
          <div className="relative" style={{ width: RADIUS_DESKTOP * 2 + 180, height: RADIUS_DESKTOP * 2 + 180 }}>

            {/* SVG lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: "visible" }}>
              {nodes.map((n, i) => {
                const angle = (ANGLES[i] - 90) * (Math.PI / 180);
                const cx = (RADIUS_DESKTOP * 2 + 180) / 2;
                const cy = (RADIUS_DESKTOP * 2 + 180) / 2;
                const x2 = cx + RADIUS_DESKTOP * Math.cos(angle);
                const y2 = cy + RADIUS_DESKTOP * Math.sin(angle);
                return (
                  <line
                    key={n.title}
                    ref={(el) => (lineRefs.current[i] = el)}
                    x1={cx} y1={cy} x2={x2} y2={y2}
                    stroke={n.color} strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="4 4"
                  />
                );
              })}
            </svg>

            {/* Center bubble */}
            <div
              ref={centerRef}
              className="absolute rounded-full flex flex-col items-center justify-center text-center shadow-lg z-10"
              style={{
                width: 120, height: 120,
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                background: "linear-gradient(135deg, #0f766e, #0891b2)",
              }}
            >
              <Sparkles className="w-6 h-6 text-white/80 mb-1" />
              <span className="text-white text-xs font-medium leading-snug">Scalable<br />Intelligence</span>

              {/* Pulse rings */}
              {[0,1,2].map((j) => (
                <div key={j}
                  ref={(el) => (pulseRefs.current[j] = el)}
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{ border: "1.5px solid rgba(16,185,129,0.35)" }}
                />
              ))}
            </div>

            {/* Nodes */}
            {nodes.map((n, i) => {
              const angle = (ANGLES[i] - 90) * (Math.PI / 180);
              const cx = (RADIUS_DESKTOP * 2 + 180) / 2;
              const cy = (RADIUS_DESKTOP * 2 + 180) / 2;
              const x = cx + RADIUS_DESKTOP * Math.cos(angle);
              const y = cy + RADIUS_DESKTOP * Math.sin(angle);
              // Determine text alignment based on angle
              const isLeft  = x < cx - 20;
              const isRight = x > cx + 20;
              return (
                <div
                  key={n.title}
                  ref={(el) => (nodeRefs.current[i] = el)}
                  className="absolute flex flex-col items-center text-center z-10"
                  style={{
                    width: 150,
                    top: y,
                    left: x,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-2 border shadow-sm"
                    style={{ background: n.bg, borderColor: n.border }}
                  >
                    <span style={{ color: n.color }}>{n.icon}</span>
                  </div>
                  <h4 className="text-xs font-semibold text-gray-800 leading-tight mb-1">{n.title}</h4>
                  <p className="text-[10px] text-gray-500 font-light leading-snug">{n.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile / sm: grid layout ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
          {nodes.map((n, i) => (
            <div
              key={n.title}
              ref={(el) => (nodeRefs.current[i] = el)}
              className="flex items-start gap-3 rounded-2xl border p-4 transition-shadow hover:shadow-md"
              style={{ background: n.bg, borderColor: n.border }}
            >
              <div
                className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border"
                style={{ background: `${n.color}18`, borderColor: n.border }}
              >
                <span style={{ color: n.color }}>{n.icon}</span>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-800 mb-1 leading-tight">{n.title}</h4>
                <p className="text-xs text-gray-500 font-light leading-snug">{n.desc}</p>
              </div>
            </div>
          ))}

          {/* Mobile center badge */}
          <div className="sm:col-span-2 flex justify-center mt-2">
            <div
              className="flex items-center gap-2 px-5 py-3 rounded-2xl text-white text-sm font-medium shadow-lg"
              style={{ background: "linear-gradient(135deg, #0f766e, #0891b2)" }}
            >
              <Sparkles className="w-4 h-4 text-white/80" />
              Scalable Intelligence
            </div>
          </div>
        </div>

        {/* Footer */}
        <div ref={footerRef} className="text-center mt-20">
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed mb-3">
              These aren't hypothetical use cases. They are the environments we build for every day.
            </p>
            <p className="text-sm text-gray-400 font-light">
              When intelligence can be explained, defended, and controlled — it scales to the problems that matter most.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}