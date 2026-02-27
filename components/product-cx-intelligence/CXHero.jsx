"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Headphones, ArrowRight, PlayCircle, Cpu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CXHero() {
  const ref = useRef(null);

  useGSAP(() => {
    if (typeof document === "undefined") return;

    // Split hero lines into .char spans
    ref.current.querySelectorAll(".hero-line").forEach((line) => {
      const isGrad = line.classList.contains("text-gradient");
      const raw = line.textContent;
      line.innerHTML = "";
      raw.split("").forEach((c) => {
        const sp = document.createElement("span");
        sp.className = "char" + (isGrad ? " text-gradient" : "");
        sp.textContent = c === " " ? "\u00A0" : c;
        line.appendChild(sp);
      });
    });

    const tl = gsap.timeline({ delay: 0.3 });
    tl
      .to("#heroBadge",  { opacity: 1, duration: 0.8, ease: "power2.out" })
      .to(".hero-line:nth-child(1) .char", { opacity: 1, y: 0, rotateX: 0, skewX: 0, stagger: 0.025, duration: 1, ease: "power4.out" }, "-=0.4")
      .to(".hero-line:nth-child(2) .char", { opacity: 1, y: 0, rotateX: 0, skewX: 0, stagger: 0.025, duration: 1, ease: "power4.out" }, "-=0.7")
      .to(".hero-line:nth-child(3) .char", { opacity: 1, y: 0, rotateX: 0, skewX: 0, stagger: 0.025, duration: 1, ease: "power4.out" }, "-=0.7")
      .to("#heroDivider",  { opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.3")
      .to("#heroSub1 p",   { y: 0,       duration: 1,   ease: "power3.out" }, "-=0.3")
      .to("#heroStats",    { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.5")
      .to("#heroButtons",  { opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.5")
      .to("#heroPlatform", { opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.5")
      .to("#scrollCue",    { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.3");

    // Hero parallax
    gsap.to("#heroContent", {
      y: -120, ease: "none",
      scrollTrigger: { trigger: "#hero", start: "top top", end: "70% top", scrub: true },
    });
  }, { scope: ref });

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "130vh" }}
    >
      <div className="absolute inset-0 mesh-bg opacity-30" />
      <div className="orb" style={{ width: 700, height: 600, background: "rgba(245,158,11,0.06)", top: "10%", left: "15%" }} />
      <div className="orb" style={{ width: 500, height: 400, background: "rgba(234,88,12,0.05)", bottom: "15%", right: "20%" }} />

      <div className="relative max-w-6xl mx-auto px-8 text-center" id="heroContent">

        {/* Badge */}
        <div className="mb-12" id="heroBadge" style={{ opacity: 0 }}>
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border"
            style={{ background: "rgba(245,158,11,0.08)", borderColor: "rgba(245,158,11,0.15)" }}
          >
            <Headphones className="w-3 h-3 text-amber-600" />
            <span className="text-amber-600 text-[11px] font-light tracking-[0.25em] uppercase">
              CX Intelligence — Full Application Platform
            </span>
          </div>
        </div>

        {/* Title */}
        <h1
          id="heroTitle"
          className="display-hero mb-10"
          style={{ fontSize: "clamp(4rem,9.5vw,9.5rem)", perspective: "1000px" }}
        >
          <span className="hero-line block">Conversational AI</span>
          <span className="hero-line block">
            That&nbsp;<span className="text-gradient">Actually</span>
          </span>
          <span className="hero-line block text-gradient">Does Things</span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-10" id="heroDivider" style={{ opacity: 0 }}>
          <div className="w-12 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(245,158,11,0.4))" }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(245,158,11,0.6)" }} />
          <div className="w-12 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(245,158,11,0.4))" }} />
        </div>

        {/* Sub-headline */}
        <div className="overflow-hidden mb-14" id="heroSub1">
          <p
            className="text-gray-500 font-light tracking-[-0.01em] leading-[1.4]"
            style={{ fontSize: "clamp(1.1rem,1.65vw,1.65rem)", transform: "translateY(100%)" }}
          >
            A full-fledged application that connects to any API, executes any code,{" "}
            <br className="hidden md:inline" />
            and powers infinite customer experiences — all within your security perimeter.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-14" id="heroStats" style={{ opacity: 0 }}>
          {[
            { val: "∞",    color: "text-amber-600",   label: "Use Cases" },
            { val: "Any",  color: "text-orange-600",  label: "API / Code" },
            { val: "100%", color: "text-emerald-600", label: "Governed" },
            { val: "5+",   color: "text-blue-600",    label: "Deploy Options" },
          ].map(({ val, color, label }, i) => (
            <div key={label} className="flex items-center gap-8">
              <div className="text-center">
                <div className={`text-3xl font-light ${color}`}>{val}</div>
                <div className="text-[10px] text-gray-500 font-light tracking-widest uppercase mt-1">{label}</div>
              </div>
              {i < 3 && <div className="w-px h-10" style={{ background: "rgba(0,0,0,0.06)" }} />}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5" id="heroButtons" style={{ opacity: 0 }}>
          <button className="hero-cta-primary group relative px-9 py-4 rounded-full text-[15px] font-medium flex items-center gap-3 overflow-hidden">
            <span className="relative z-10 text-white flex items-center gap-3">
              Request Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </span>
          </button>
          <button
            className="group px-9 py-4 rounded-full border text-gray-700 text-[15px] font-light flex items-center gap-3 transition-all duration-400"
            style={{ borderColor: "rgba(0,0,0,0.1)" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(245,158,11,0.25)"; e.currentTarget.style.color = "#92400e"; e.currentTarget.style.background = "rgba(0,0,0,0.03)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)"; e.currentTarget.style.color = "#374151"; e.currentTarget.style.background = "transparent"; }}
          >
            <PlayCircle className="w-4 h-4 text-amber-600" />
            Watch Demo
          </button>
        </div>

        {/* Platform badge */}
        <div className="mt-16" id="heroPlatform" style={{ opacity: 0 }}>
          <div
            className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl border shadow-sm"
            style={{ background: "rgba(255,255,255,0.6)", borderColor: "rgba(0,0,0,0.08)" }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#f59e0b,#ea580c)" }}>
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <div className="text-sm font-normal text-gray-800">Powered by Mentis AgentOS</div>
              <div className="text-xs text-gray-400 font-light">Enterprise agentic operating system</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3" id="scrollCue" style={{ opacity: 0 }}>
        <span className="text-[10px] text-gray-500 font-light tracking-[0.4em] uppercase">Scroll</span>
        <div className="relative overflow-hidden" style={{ width: 1, height: 64 }}>
          <div className="absolute top-0 left-0 w-full h-8 animate-bounce" style={{ background: "linear-gradient(to bottom,rgba(245,158,11,0.6),transparent)" }} />
        </div>
      </div>
    </section>
  );
}
