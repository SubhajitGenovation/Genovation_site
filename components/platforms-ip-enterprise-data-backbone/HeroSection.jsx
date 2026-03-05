"use client";
import { useEffect } from "react";
import { Database, ArrowRight, PlayCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  useEffect(() => {
    document.querySelectorAll(".hero-line").forEach((line) => {
      const text = line.textContent ?? "";
      line.innerHTML = "";
      text.split("").forEach((c) => {
        const span = document.createElement("span");
        span.className = "char";
        span.textContent = c === " " ? "\u00A0" : c;
        line.appendChild(span);
      });
    });

    const tl = gsap.timeline({ delay: 0.3 });
    tl.to("#heroBadge", { opacity: 1, duration: 0.8, ease: "power2.out" })
      .to(".hero-line:first-child .char", { opacity: 1, y: 0, rotateX: 0, skewX: 0, stagger: 0.03, duration: 1, ease: "power4.out" }, "-=0.4")
      .to(".hero-line:last-child .char",  { opacity: 1, y: 0, rotateX: 0, skewX: 0, stagger: 0.03, duration: 1, ease: "power4.out" }, "-=0.7")
      .to("#heroDivider",  { opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.3")
      .to("#heroSub1 p",   { y: 0, duration: 1, ease: "power3.out" }, "-=0.3")
      .to("#heroSub2 p",   { y: 0, duration: 1, ease: "power3.out" }, "-=0.7")
      .to("#heroButtons",  { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
      .to("#scrollCue",    { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.3");

    gsap.to("#heroContent", {
      y: -120,
      ease: "none",
      scrollTrigger: { trigger: "#hero", start: "top top", end: "70% top", scrub: true },
    });
  }, []);

  return (
    <section id="hero" className="relative min-h-[130vh] flex items-center justify-center overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-8 text-center" id="heroContent">
        {/* <div className="mb-12 opacity-0" id="heroBadge">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2]">
            <Database className="w-3 h-3 text-emerald-600" />
            <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">Platform & Foundational IP</span>
          </div>
        </div> */}

        <h1 className="display-hero text-7xl md:text-[8rem] lg:text-[9.5rem] mb-10" style={{ perspective: 1000 }}>
          <span className="hero-line block">Enterprise Data &</span>
          <span className="hero-line block text-gradient">IoT Backbone</span>
        </h1>

        <div className="flex items-center justify-center gap-4 mb-10 opacity-0" id="heroDivider">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-emerald-400/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-emerald-400/40" />
        </div>

        <div className="overflow-hidden mb-5" id="heroSub1">
          <p className="text-xl md:text-[1.65rem] text-gray-600 font-light tracking-[-0.01em] leading-[1.4] translate-y-full">
            The Foundation for <span className="text-gray-900 font-normal">Reliable</span>,{" "}
            <span className="text-gray-900 font-normal">Real-Time</span> Enterprise Intelligence
          </p>
        </div>
        <div className="overflow-hidden mb-14" id="heroSub2">
          <p className="text-[15px] md:text-base text-gray-500 font-light max-w-xl mx-auto leading-[1.7] translate-y-full">
            Enterprise intelligence is only as reliable as the data beneath it. The{" "}
            <span className="text-emerald-600">governed data execution layer</span> upon which{" "}
            <span className="text-cyan-600">Mentis AgentOS</span> operates.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 opacity-0" id="heroButtons">
          <button className="hero-cta-primary group relative px-9 py-4 rounded-full text-[15px] font-medium flex items-center gap-3 overflow-hidden">
            <span className="relative z-10 text-black flex items-center gap-3">
              Explore Architecture
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </span>
          </button>
          <button className="group px-9 py-4 rounded-full border border-black/[0.1] text-gray-700 text-[15px] font-light flex items-center gap-3 hover:border-emerald-400/25 hover:text-gray-900 hover:bg-black/[0.05] transition-all duration-400">
            <PlayCircle className="w-4 h-4 text-emerald-600" />
            See Data Flow
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0" id="scrollCue">
        <span className="text-[10px] text-gray-600 font-light tracking-[0.4em] uppercase">Scroll</span>
        <div className="w-[1px] h-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-emerald-400/60 to-transparent animate-bounce" />
        </div>
      </div>
    </section>
  );
}
