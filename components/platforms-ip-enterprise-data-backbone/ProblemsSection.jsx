"use client";
import { useEffect } from "react";
import { Activity, Brain, ShieldAlert, XCircle, CheckCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ProblemsSection() {
  useEffect(() => {
    gsap.utils.toArray(".r-up").forEach((el) => {
      gsap.to(el, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
    });
    gsap.utils.toArray(".r-scale").forEach((el) => {
      gsap.to(el, { scale: 1, opacity: 1, duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
    });
    ScrollTrigger.batch("#problemCards .card", {
      start: "top 87%",
      onEnter: (els) => gsap.fromTo(els, { y: 60, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: "power3.out" }),
      once: true,
    });
  }, []);

  const problems = [
    {
      icon: <Activity className="w-5 h-5 text-amber-600" />,
      title: "Data Is Not Static",
      desc: "Data arrives as real-time streams, periodic sensor signals, operational events, and historical batch records.",
      warn: "AI assuming clean, static datasets breaks in production.",
    },
    {
      icon: <Brain className="w-5 h-5 text-amber-600" />,
      title: "Intelligence Needs Context",
      desc: "Intelligence systems require temporal context, lineage, consistency, and transformation logic.",
      warn: "Without this, AI produces confident but incorrect answers.",
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-amber-600" />,
      title: "Governance Is Afterthought",
      desc: "In regulated environments, data movement must be controlled, transformations explainable, outputs auditable.",
      warn: "Most pipelines were not designed with these constraints.",
    },
  ];

  return (
    <section id="problems" className="py-48 relative">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[500px] h-[400px] bg-amber-500/[0.04]" style={{ top: "10%", right: "10%" }} />
      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-28">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/[0.12] border border-amber-500/[0.2] mb-8 r-up">
            <span className="text-amber-600 text-[11px] font-light tracking-[0.25em] uppercase">⚠ The Hidden Crisis</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Why Most<br /><span className="text-gradient-warm">AI Initiatives Fail</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-24" id="problemCards">
          {problems.map((p) => (
            <div key={p.title} className="card p-8">
              <div className="w-11 h-11 rounded-xl bg-amber-500/[0.12] flex items-center justify-center mb-6">{p.icon}</div>
              <h3 className="text-lg font-light text-gray-900 mb-3 tracking-tight">{p.title}</h3>
              <p className="text-[15px] text-gray-600 font-light leading-relaxed mb-6">{p.desc}</p>
              <div className="p-3.5 rounded-xl bg-red-500/[0.06] border border-red-500/[0.12]">
                <p className="text-[12px] text-red-600/80 font-light flex items-center gap-1">
                  <XCircle className="w-3 h-3 inline flex-shrink-0" />{p.warn}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto r-scale">
          <div className="bg-gradient-to-r from-emerald-500/[0.06] via-cyan-500/[0.05] to-blue-500/[0.05] rounded-3xl border border-emerald-500/[0.2] p-12 md:p-16 text-center relative overflow-hidden">
            <div className="orb w-[300px] h-[200px] bg-emerald-500/[0.08]" style={{ top: "-30%", left: "30%" }} />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-emerald-500/20">
                <CheckCircle className="w-7 h-7 text-black" />
              </div>
              <h3 className="display-section text-3xl md:text-4xl text-gray-900 mb-5">The Enterprise Data & IoT Backbone</h3>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                A governed data execution layer that ingests, transforms, governs, and serves enterprise data — so intelligence systems can{" "}
                <span className="text-emerald-600 font-normal">reason on reality, not assumptions.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
