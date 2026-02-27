"use client";
import { useEffect } from "react";
import { Building2, Network, ShieldOff, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const DEPLOY_CARDS = [
  {
    icon: (
      <Building2 className="w-6 h-6 text-emerald-600" />
    ),
    iconBg: "bg-emerald-500/[0.1]",
    title: "On-Premise",
    desc: "Full deployment within your data centers.",
  },
  {
    icon: (
      <Network className="w-6 h-6 text-cyan-600" />
    ),
    iconBg: "bg-cyan-500/[0.1]",
    title: "Private Networks",
    desc: "Isolated network environments.",
  },
  {
    icon: (
      <ShieldOff className="w-6 h-6 text-violet-600" />
    ),
    iconBg: "bg-violet-500/[0.1]",
    title: "Air-Gapped",
    desc: "Complete isolation for highest security.",
  },
];

const NO_DEPS = [
  "No Hyperscaler Lock-in",
  "No External SaaS",
  "No Third-Party Execution",
];

export default function DeploymentSection() {
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

    ScrollTrigger.batch(".deploy-card", {
      start: "top 88%",
      onEnter: (els) =>
        gsap.fromTo(
          els,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, stagger: 0.15, duration: 0.9, ease: "power3.out" }
        ),
      once: true,
    });
  }, []);

  return (
    <section id="deployment" className="py-48 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div
        className="orb w-[600px] h-[400px] bg-violet-500/[0.04]"
        style={{ top: "5%", right: "10%" }}
      />

      <div className="relative max-w-4xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Designed for{" "}
            <span
              className="text-gradient"
              style={{
                background:
                  "linear-gradient(90deg,#10b981,#06b6d4,#3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Enterprise
            </span>
          </h2>
          <p className="mt-5 text-base text-gray-500 font-light r-up">
            Data remains within enterprise boundaries at all times.
          </p>
        </div>

        {/* 3 deploy cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {DEPLOY_CARDS.map((card) => (
            <div
              key={card.title}
              className="deploy-card bg-white/80 border border-black/[0.07] rounded-2xl p-8 flex flex-col items-center text-center gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${card.iconBg} flex items-center justify-center`}
              >
                {card.icon}
              </div>
              <div>
                <div className="text-[14px] font-light text-black/70 mb-1.5">
                  {card.title}
                </div>
                <div className="text-[12px] text-black/35 font-light leading-relaxed">
                  {card.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No External Dependencies card */}
        <div
          className="deploy-card bg-white/80 border border-black/[0.07] rounded-2xl px-10 py-8 shadow-sm"
        >
          <div className="text-center mb-7">
            <span className="text-[13px] text-black/45 font-light tracking-wide">
              No External Dependencies
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16">
            {NO_DEPS.map((item) => (
              <div key={item} className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-red-500/[0.08] border border-red-500/[0.15] flex items-center justify-center">
                  <X className="w-3.5 h-3.5 text-red-500" />
                </div>
                <span className="text-[11px] text-black/35 font-light">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
