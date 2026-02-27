"use client";
import { useEffect } from "react";
import {
  ArrowRightLeft, Lock, Layers, ClipboardList, Plus, Database
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    icon: <ArrowRightLeft className="w-4 h-4 text-cyan-600" />,
    iconBg: "bg-cyan-500/[0.1]",
    title: "Controlled Data Flow",
    sub: "Managed ingress and egress",
  },
  {
    icon: <Lock className="w-4 h-4 text-blue-600" />,
    iconBg: "bg-blue-500/[0.1]",
    title: "Encryption",
    sub: "At rest and in transit",
  },
  {
    icon: <Layers className="w-4 h-4 text-violet-600" />,
    iconBg: "bg-violet-500/[0.1]",
    title: "Workload Isolation",
    sub: "Between pipelines",
  },
  {
    icon: <ClipboardList className="w-4 h-4 text-amber-600" />,
    iconBg: "bg-amber-500/[0.1]",
    title: "Full Auditability",
    sub: "Of all processing",
  },
];

export default function SecuritySection() {
  useEffect(() => {
    gsap.utils.toArray(".r-up").forEach((el) => {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    });

    ScrollTrigger.batch(".sec-row", {
      start: "top 88%",
      onEnter: (els) =>
        gsap.fromTo(
          els,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, stagger: 0.12, duration: 0.8, ease: "power3.out" }
        ),
      once: true,
    });

    // Diagram connector pulse
    gsap.to("#secConnector", {
      scaleY: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 1.8,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section id="security" className="py-48 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div
        className="orb w-[600px] h-[500px] bg-violet-500/[0.04]"
        style={{ top: "5%", right: "5%" }}
      />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Text + Features ── */}
          <div>
            {/* Title */}
            <h2 className="display-section text-5xl md:text-6xl lg:text-7xl mb-5 r-up leading-tight">
              Security &amp;{" "}
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg,#06b6d4,#3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Compliance
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-[15px] text-gray-500 font-light leading-relaxed mb-10 max-w-sm r-up">
              Compliance is enforced by design, not policy. Security is
              architectural, not aspirational.
            </p>

            {/* Feature rows */}
            <div className="flex flex-col gap-3">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="sec-row flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/70 border border-black/[0.06] hover:border-black/[0.1] hover:bg-white/90 transition-all duration-300"
                >
                  <div
                    className={`w-9 h-9 rounded-xl ${f.iconBg} flex items-center justify-center flex-shrink-0`}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <div className="text-[13px] font-light text-black/65">
                      {f.title}
                    </div>
                    <div className="text-[11px] text-black/30 font-light mt-0.5">
                      {f.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Diagram ── */}
          <div className="r-up">
            <div
              className="rounded-3xl border border-black/[0.07] p-8 flex flex-col items-center gap-0"
              style={{ background: "rgba(250,249,247,0.95)" }}
            >
              {/* Enterprise Data Backbone card */}
              <div
                className="w-full rounded-2xl p-6 flex flex-col items-center gap-3 mb-0"
                style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.15)" }}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <span className="text-[12px] text-black/50 font-light tracking-wide">
                  Enterprise Data Backbone
                </span>
              </div>

              {/* Connector */}
              <div
                id="secConnector"
                className="flex flex-col items-center gap-0 py-1"
              >
                {/* Line top */}
                <div className="w-px h-5 bg-black/[0.12]" />
                {/* GOVERNED DATA pill */}
                <div className="px-3 py-1 rounded-full bg-white border border-black/[0.1] shadow-sm">
                  <span className="text-[9px] text-black/30 font-mono tracking-widest uppercase">
                    governed data
                  </span>
                </div>
                {/* Line bottom */}
                <div className="w-px h-5 bg-black/[0.12]" />
              </div>

              {/* Mentis AgentOS card */}
              <div
                className="w-full rounded-2xl p-6 flex flex-col items-center gap-3"
                style={{ background: "rgba(139,92,246,0.06)", border: "1px solid rgba(139,92,246,0.15)" }}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                <span className="text-[12px] text-black/50 font-light tracking-wide">
                  Mentis AgentOS
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
