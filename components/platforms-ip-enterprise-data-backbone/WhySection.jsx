"use client";
import { useEffect } from "react";
import { Brain, CheckCircle, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function WhySection() {
  useEffect(() => {
    gsap.utils.toArray(".r-up").forEach((el) => {
      gsap.to(el, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
    });
  }, []);

  const items = [
    {
      icon: <Brain className="w-6 h-6 text-emerald-600" />,
      number: "01",
      title: "Intelligence is only as good as its data",
      desc: "The most sophisticated AI model produces garbage output when fed fragmented, stale, or ungoverned data. The Backbone ensures every signal that reaches an intelligence system is clean, contextual, and traceable.",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-cyan-600" />,
      number: "02",
      title: "Governance is not optional in the enterprise",
      desc: "Regulatory requirements, audit obligations, and data sovereignty mandates make ungoverned AI deployment legally and operationally untenable. The Backbone makes governance the default, not an afterthought.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-violet-600" />,
      number: "03",
      title: "Real-time operations demand real-time data",
      desc: "Enterprise decisions are made in minutes, not days. The Backbone bridges the gap between raw operational telemetry and actionable intelligence — at the speed your operations require.",
    },
  ];

  return (
    <section id="whySection" className="py-48 relative">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[600px] h-[500px] bg-emerald-500/[0.06]" style={{ top: "10%", left: "5%" }} />
      <div className="relative max-w-5xl mx-auto px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2] mb-8 r-up">
            <Brain className="w-3 h-3 text-emerald-600" />
            <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">The Bigger Picture</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Why This <span className="text-gradient">Matters</span>
          </h2>
        </div>
        <div className="space-y-5">
          {items.map((item) => (
            <div key={item.number} className="card p-8 md:p-10 flex gap-8 items-start r-up" style={{ background: "rgba(255,255,255,0.85)" }}>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-2xl bg-black/[0.04] flex items-center justify-center">{item.icon}</div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-mono tracking-widest text-gray-400">{item.number}</span>
                  <h3 className="text-lg md:text-xl font-light text-gray-900 tracking-tight">{item.title}</h3>
                </div>
                <p className="text-[15px] text-gray-600 font-light leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
