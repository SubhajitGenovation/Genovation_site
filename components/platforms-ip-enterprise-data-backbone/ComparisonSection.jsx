"use client";
import { useEffect } from "react";
import {
  ArrowLeftRight, Target, Compass, GitBranch,
  Link, Server, CheckCircle
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ROWS = [
  {
    icon: <Target className="w-3.5 h-3.5 text-black/30" />,
    capability: "Primary Focus",
    typical: "Storage-centric",
    backbone: "Execution-centric",
  },
  {
    icon: <Compass className="w-3.5 h-3.5 text-black/30" />,
    capability: "Design Goal",
    typical: "Dashboards first",
    backbone: "Intelligence first",
  },
  {
    icon: <GitBranch className="w-3.5 h-3.5 text-black/30" />,
    capability: "Pipeline Model",
    typical: "Ad-hoc pipelines",
    backbone: "Governed workflows",
  },
  {
    icon: <Link className="w-3.5 h-3.5 text-black/30" />,
    capability: "Data Lineage",
    typical: "Limited lineage",
    backbone: "Full traceability",
  },
  {
    icon: <Server className="w-3.5 h-3.5 text-black/30" />,
    capability: "Deployment",
    typical: "Cloud-dependent",
    backbone: "Sovereign deploy",
  },
];

export default function ComparisonSection() {
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

    // Stagger table rows on scroll
    ScrollTrigger.batch(".cmp-row", {
      start: "top 88%",
      onEnter: (els) =>
        gsap.fromTo(
          els,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.7, ease: "power3.out" }
        ),
      once: true,
    });
  }, []);

  return (
    <section id="comparison" className="py-48 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div
        className="orb w-[500px] h-[400px] bg-emerald-500/[0.05]"
        style={{ top: "10%", left: "15%" }}
      />

      <div className="relative max-w-4xl mx-auto px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2] mb-8 r-up">
            <ArrowLeftRight className="w-3 h-3 text-emerald-600" />
            <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">
              Comparison
            </span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            What Makes This
            <br />
            <span className="text-gradient">Different</span>
          </h2>
        </div>

        {/* Comparison table */}
        <div
          className="r-up rounded-2xl overflow-hidden border border-black/[0.08]"
          style={{ background: "rgba(250,249,247,0.95)" }}
        >
          {/* Table header */}
          <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-black/[0.08]">
            {/* Capability col header */}
            <div className="px-6 py-4 border-r border-black/[0.06]">
              <span className="text-[10px] text-black/30 font-light tracking-[0.2em] uppercase">
                Capability
              </span>
            </div>

            {/* Typical Platforms col header */}
            <div className="px-6 py-4 border-r border-black/[0.06]">
              <span className="text-[10px] text-black/30 font-light tracking-[0.2em] uppercase">
                Typical Platforms
              </span>
            </div>

            {/* Data Backbone col header — highlighted */}
            <div
              className="px-6 py-4 flex items-center gap-2"
              style={{ background: "rgba(16,185,129,0.07)" }}
            >
              <div className="w-5 h-5 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
                </svg>
              </div>
              <span className="text-[10px] text-emerald-700 font-medium tracking-[0.15em] uppercase">
                Data Backbone
              </span>
            </div>
          </div>

          {/* Table rows */}
          {ROWS.map((row, i) => (
            <div
              key={row.capability}
              className={`cmp-row grid grid-cols-[1fr_1fr_1fr] ${
                i < ROWS.length - 1 ? "border-b border-black/[0.06]" : ""
              }`}
            >
              {/* Capability */}
              <div className="px-6 py-4 flex items-center gap-3 border-r border-black/[0.06]">
                <div className="flex-shrink-0">{row.icon}</div>
                <span className="text-[13px] text-black/55 font-light">
                  {row.capability}
                </span>
              </div>

              {/* Typical Platforms */}
              <div className="px-6 py-4 flex items-center border-r border-black/[0.06]">
                <span className="text-[13px] text-black/35 font-light">
                  — {row.typical}
                </span>
              </div>

              {/* Data Backbone — highlighted */}
              <div
                className="px-6 py-4 flex items-center gap-2"
                style={{ background: "rgba(16,185,129,0.05)" }}
              >
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                <span className="text-[13px] text-emerald-600 font-light">
                  {row.backbone}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
