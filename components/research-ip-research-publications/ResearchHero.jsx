"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FlaskConical, Target, ShieldCheck } from "lucide-react";

const stats = [
  { icon: <Target className="w-4 h-4 text-emerald-600" />, bg: "bg-emerald-500/[0.1]", label: "Mission-Driven" },
  { icon: <ShieldCheck className="w-4 h-4 text-violet-600" />, bg: "bg-violet-500/[0.1]", label: "Enterprise-First" },
  { icon: <FlaskConical className="w-4 h-4 text-cyan-600" />, bg: "bg-cyan-500/[0.1]", label: "Deep Research" },
];

const themes = [
  { icon: "scan-search", bg: "bg-cyan-500/[0.06]", border: "border-cyan-400/[0.15]", iconBg: "bg-cyan-500/[0.15]", iconColor: "text-cyan-600", label: "text-cyan-700", title: "Explainable & Governed AI", tags: ["TRACING", "AUDIT", "POLICY"] },
  { icon: "git-branch", bg: "bg-violet-500/[0.05]", border: "border-violet-400/[0.12]", iconBg: "bg-violet-500/[0.15]", iconColor: "text-violet-600", label: "text-violet-700", title: "Agentic Architectures", tags: ["ORCHESTRATION", "BOUNDED", "CONFLICT"] },
  { icon: "gauge", bg: "bg-emerald-500/[0.06]", border: "border-emerald-400/[0.15]", iconBg: "bg-emerald-500/[0.15]", iconColor: "text-emerald-600", label: "text-emerald-700", title: "Efficiency-Driven Intelligence", tags: ["SLM", "ON-PREM", "<50ms"] },
  { icon: "lock", bg: "bg-amber-500/[0.06]", border: "border-amber-400/[0.15]", iconBg: "bg-amber-500/[0.15]", iconColor: "text-amber-600", label: "text-amber-700", title: "Secure & Privacy-Preserving", tags: ["ENCRYPTED", "ZK", "POST-QUANTUM"] },
];

export default function ResearchHero() {
  const heroRef = useRef(null);

  useGSAP(() => {
    if (typeof document === "undefined") return;

    document.querySelectorAll(".hero-line").forEach((line) => {
      const text = line.textContent.trim();
      line.textContent = "";
      text.split("").forEach((ch) => {
        const span = document.createElement("span");
        span.className = "char";
        span.textContent = ch === " " ? "\u00A0" : ch;
        line.appendChild(span);
      });
    });

    const tl = gsap.timeline({ delay: 0.3 });
    tl.to("#heroBreadcrumb", { opacity: 1, duration: 0.6, ease: "power2.out" })
      .to("#heroBadge",      { opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.3")
      .to(".hero-line:first-child .char", { opacity: 1, y: 0, rotateX: 0, skewX: 0, stagger: 0.03, duration: 1, ease: "power4.out" }, "-=0.2")
      .to(".hero-line:last-child .char",  { opacity: 1, y: 0, rotateX: 0, skewX: 0, stagger: 0.03, duration: 1, ease: "power4.out" }, "-=0.7")
      .to("#heroSub1 p",  { y: 0, duration: 1, ease: "power3.out" }, "-=0.5")
      .to("#heroSub2 p",  { y: 0, duration: 1, ease: "power3.out" }, "-=0.7")
      .to("#heroQuote",   { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.5")
      .to("#heroStats",   { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.3")
      .to("#heroMock",    { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=0.8");
  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="relative min-h-[110vh] flex items-center justify-center overflow-hidden" id="hero">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[800px] h-[600px] bg-violet-500/[0.06]" style={{ top: "-10%", left: "30%" }} />
      <div className="orb w-[500px] h-[500px] bg-cyan-500/[0.05]" style={{ bottom: "10%", right: "10%" }} />

      <div className="relative max-w-6xl mx-auto px-8 pt-32">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-12 opacity-0" id="heroBreadcrumb">
          <a href="#" className="text-gray-500 hover:text-gray-700 text-xs font-light tracking-wide transition-colors">Research & IP</a>
          <span className="text-gray-400">/</span>
          <span className="text-emerald-600 text-xs font-light tracking-wide">Research Publications</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <div className="mb-8 opacity-0" id="heroBadge">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-500/[0.1] border border-violet-500/[0.2]">
                <FlaskConical className="w-3 h-3 text-violet-600" />
                <span className="text-violet-600 text-[11px] font-light tracking-[0.25em] uppercase">Research Publications</span>
              </div>
            </div>

            <h1 className="display-hero text-6xl md:text-[7rem] lg:text-[8rem] mb-8" style={{ perspective: "1000px" }}>
              <span className="hero-line">Building</span><br />
              <span className="hero-line text-gradient">Trust.</span>
            </h1>

            <div className="overflow-hidden mb-6" id="heroSub1">
              <p className="text-xl md:text-2xl text-gray-600 font-light tracking-[-0.01em] leading-[1.4] translate-y-full">
                Most enterprise AI is built to impress demos, not survive audits.
              </p>
            </div>
            <div className="overflow-hidden mb-8" id="heroSub2">
              <p className="text-base text-gray-500 font-light leading-relaxed translate-y-full">
                Genovation's research program exists because we believe the gap between "AI that works" and "AI that enterprises can deploy responsibly" is not a product problem — it's a fundamental research problem.{" "}
                <span className="text-gray-900 font-medium">We're solving it.</span>
              </p>
            </div>

            <div className="quote-block mb-10 py-2 opacity-0" id="heroQuote">
              <p className="text-gray-500 italic text-sm font-light leading-relaxed">
                "Where appropriate, we publish selected research outcomes to contribute to the broader scientific community — while protecting core intellectual property and enterprise security considerations."
              </p>
            </div>

            <div className="flex items-center gap-4 flex-wrap opacity-0" id="heroStats">
              {stats.map((s, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-white/60 border border-black/[0.08]">
                  <div className={`w-9 h-9 rounded-xl ${s.bg} flex items-center justify-center`}>{s.icon}</div>
                  <span className="text-sm text-gray-700 font-light">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Mock */}
          <div className="opacity-0" id="heroMock" style={{ transform: "translateY(20px)" }}>
            <div className="industry-mock" style={{ boxShadow: "0 40px 120px -30px rgba(139,92,246,0.1)" }}>
              <div className="mock-header">
                <div className="mock-dot r" /><div className="mock-dot y" /><div className="mock-dot g" />
                <span className="text-[9px] text-gray-600 font-mono ml-2">RESEARCH FOCUS AREAS</span>
              </div>
              <div className="p-6 space-y-4">
                {themes.map((t, i) => (
                  <div key={i} className={`p-4 rounded-2xl ${t.bg} border ${t.border}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-8 h-8 rounded-lg ${t.iconBg} flex items-center justify-center`}>
                        <span className={`w-4 h-4 ${t.iconColor}`} data-lucide={t.icon} />
                      </div>
                      <span className={`text-[11px] ${t.label} font-medium tracking-wide`}>{t.title}</span>
                    </div>
                    <div className="flex gap-1.5 flex-wrap">
                      {t.tags.map((tag, j) => (
                        <span key={j} className="px-2 py-0.5 rounded-md bg-white/60 text-[8px] text-gray-500 font-mono">{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="text-center p-3 rounded-xl bg-violet-500/[0.05] border border-violet-400/[0.1]">
                  <span className="text-[9px] text-violet-600 font-mono tracking-wider">4 INTERCONNECTED RESEARCH THEMES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
