"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Scale } from "lucide-react";

const stats = [
  { value: "96.8%", label: "Avg Confidence",  color: "text-emerald-600" },
  { value: "<200ms", label: "Verification",   color: "text-cyan-600" },
  { value: "100%",  label: "Traceable",        color: "text-blue-600" },
  { value: "Zero",  label: "Blind Trust",      color: "text-violet-600" },
];

export default function JudgeHero() {
  const heroRef = useRef(null);

  useGSAP(() => {
    // Split JUDGE into chars
    const line = document.querySelector(".hero-line");
    if (!line) return;
    const text = line.textContent;
    line.innerHTML = "";
    text.split("").forEach((c) => {
      const span = document.createElement("span");
      span.className = "char";
      span.textContent = c === " " ? "\u00A0" : c;
      line.appendChild(span);
    });

    const tl = gsap.timeline({ delay: 0.3 });
    tl.to("#heroBadge",     { opacity: 1, duration: 0.8, ease: "power2.out" })
      .to(".hero-line .char", { opacity: 1, y: 0, rotateX: 0, skewX: 0, stagger: 0.04, duration: 1, ease: "power4.out" }, "-=0.4")
      .to("#heroSubTitle p",  { y: 0, duration: 1.2, ease: "power3.out" }, "-=0.3")
      .to("#heroDivider",     { opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.3")
      .to("#heroSub p",       { y: 0, duration: 1, ease: "power3.out" }, "-=0.3")
      .to("#heroStats",       { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.3");

    gsap.to("#heroContent", {
      y: -120, ease: "none",
      scrollTrigger: { trigger: "#hero", start: "top top", end: "70% top", scrub: true },
    });
  }, { scope: heroRef });

  return (
    <section ref={heroRef} id="hero" className="relative min-h-[120vh] flex items-center justify-center overflow-hidden">


      <div className="orb w-[800px] h-[600px] bg-emerald-500/[0.06]" style={{ top: "10%", left: "15%" }} />
      <div className="orb w-[500px] h-[400px] bg-cyan-500/[0.05]"   style={{ bottom: "15%", right: "10%" }} />

      <div id="heroContent" className="relative max-w-6xl mx-auto px-8 text-center">
        <div id="heroBadge" className="mb-10" style={{ opacity: 0 }}>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2]">
            <Scale className="w-3 h-3 text-emerald-600" />
            <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">AI Governance Layer</span>
          </div>
        </div>

        <h1 className="display-hero text-7xl md:text-[8rem] lg:text-[9.5rem] mb-4" style={{ perspective: "1000px" }}>
          <span className="hero-line">JUDGE</span>
        </h1>

        <div className="overflow-hidden mb-8" id="heroSubTitle">
          <p className="display-section text-3xl md:text-5xl lg:text-[4rem] text-gradient"
            style={{ lineHeight: 1.1, transform: "translateY(100%)" }}>
            Every Output Verified.<br />Every Decision Defended.
          </p>
        </div>

        <div id="heroDivider" className="flex items-center justify-center gap-4 mb-8" style={{ opacity: 0 }}>
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-emerald-400/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-emerald-400/40" />
        </div>

        <div className="overflow-hidden mb-12" id="heroSub">
          <p className="text-xl md:text-[1.65rem] text-gray-600 font-light leading-[1.4]"
            style={{ transform: "translateY(100%)" }}>
            The dedicated verification agent that governs every AI output<br className="hidden md:block" />
            inside Mentis OS — eliminating hallucinations, enforcing policy,<br className="hidden md:block" />
            and producing audit-ready intelligence.
          </p>
        </div>

        <div id="heroStats" className="flex items-center justify-center gap-12 mt-16" style={{ opacity: 0 }}>
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-12">
              <div className="text-center">
                <div className={`text-3xl font-light ${s.color}`}>{s.value}</div>
                <div className="text-[10px] text-gray-600 font-light tracking-widest uppercase mt-1">{s.label}</div>
              </div>
              {i < stats.length - 1 && <div className="w-px h-10 bg-black/[0.06]" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
