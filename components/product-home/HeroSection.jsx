"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { BookOpen, BarChart2, Compass, MessageCircle, ArrowDown, Brain } from "lucide-react";

export default function HeroSection() {
  useEffect(() => {
    if (typeof document === "undefined") return;

    // CHARACTER SPLIT
    document.querySelectorAll(".hero-line").forEach((line) => {
      const text = line.textContent;
      line.innerHTML = "";
      text.split(" ").forEach((word, wi, arr) => {
        const wordWrap = document.createElement("span");
        wordWrap.style.display = "inline-block";
        wordWrap.style.whiteSpace = "nowrap";
        word.split("").forEach((c) => {
          const span = document.createElement("span");
          span.className = "char";
          span.textContent = c;
          wordWrap.appendChild(span);
        });
        line.appendChild(wordWrap);
        if (wi < arr.length - 1) {
          const space = document.createElement("span");
          space.className = "char";
          space.textContent = "\u00A0";
          space.style.display = "inline";
          line.appendChild(space);
        }
      });
    });

    // HERO TIMELINE
    const heroTL = gsap.timeline({ delay: 0.3 });
    heroTL
      .to("#heroBadge", { opacity: 1, duration: 0.8, ease: "power2.out" })
      .to(".hero-line:first-child .char", { opacity: 1, y: 0, rotateX: 0, skewX: 0, stagger: 0.03, duration: 1, ease: "power4.out" }, "-=0.4")
      .to(".hero-line:last-child .char", { opacity: 1, y: 0, rotateX: 0, skewX: 0, stagger: 0.03, duration: 1, ease: "power4.out" }, "-=0.7")
      .to("#heroDivider", { opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.3")
      .to("#heroSub1 p", { y: 0, duration: 1, ease: "power3.out" }, "-=0.3")
      .to("#heroProducts", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
      .to("#heroPlatform", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
      .to("#scrollCue", { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.3");

    // HERO PARALLAX
    gsap.to("#heroContent", {
      y: -120, ease: "none",
      scrollTrigger: { trigger: "#hero", start: "top top", end: "70% top", scrub: true },
    });
  }, []);

  return (
    <section className="relative min-h-[130vh] flex items-center justify-center overflow-hidden" id="hero">
      <div className="absolute inset-0 mesh-bg opacity-30" />
      <div className="orb w-175 h-150 bg-sky-500/5" style={{ top: "10%", left: "15%" }} />
      <div className="orb w-125 h-100 bg-violet-500/5" style={{ bottom: "15%", right: "20%" }} />
      <div className="orb w-150 h-100 bg-emerald-500/4" style={{ top: "40%", left: "50%" }} />

      <div className="relative max-w-6xl mx-auto px-8 text-center" id="heroContent">
        {/* Badge */}
        {/* <div className="mb-12 opacity-0" id="heroBadge">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-sky-500/[0.08] border border-sky-500/[0.15]">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 soft-pulse" />
            <span className="text-sky-600 text-[11px] font-light tracking-[0.25em] uppercase">Intelligence Products</span>
          </div>
        </div> */}

        {/* Heading */}
        <h1 className="display-hero text-[clamp(3.5rem,8vw,7.5rem)] mb-12">
          <span className="hero-line block">Enterprise Intelligence</span>
          <span className="hero-line block text-gradient">Sovereign by Design</span>
        </h1>

        {/* Divider */}
        <div className="h-px w-32 mx-auto bg-linear-to-r from-transparent via-sky-500/30 to-transparent mb-10 opacity-0" id="heroDivider" />

        {/* Subtitle */}
        <div className="max-w-2xl mx-auto mb-14 overflow-hidden" id="heroSub1">
          <p className="text-xl md:text-2xl text-gray-400 font-light translate-y-full">
            Intelligence products designed for environments where data sovereignty, explainability, and accountability are mandatory.
          </p>
        </div>

        {/* Product Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-14 opacity-0 translate-y-8" id="heroProducts">
          <a href="#knowledge" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-sky-500/30 bg-sky-500/6 text-sky-600 text-sm font-light hover:bg-sky-500/12 transition-all">
            <BookOpen className="w-4 h-4" /> Knowledge <ArrowDown className="w-3 h-3 opacity-40" />
          </a>
          <a href="#analytics" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-violet-500/30 bg-violet-500/6 text-violet-600 text-sm font-light hover:bg-violet-500/12 transition-all">
            <BarChart2 className="w-4 h-4" /> Analytics <ArrowDown className="w-3 h-3 opacity-40" />
          </a>
          <a href="#strategy" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/6 text-emerald-600 text-sm font-light hover:bg-emerald-500/12 transition-all">
            <Compass className="w-4 h-4" /> Strategy <ArrowDown className="w-3 h-3 opacity-40" />
          </a>
          <a href="#cx" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-500/30 bg-amber-500/6 text-amber-600 text-sm font-light hover:bg-amber-500/12 transition-all">
            <MessageCircle className="w-4 h-4" /> Customer Experience <ArrowDown className="w-3 h-3 opacity-40" />
          </a>
        </div>

        {/* Platform Badge */}
        <div className="opacity-0 translate-y-8" id="heroPlatform">
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/60 border border-black/8">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-sky-500 to-violet-600 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <div className="text-sm font-normal text-gray-800">Powered by Mentis OS</div>
              <div className="text-xs text-gray-400 font-light">Enterprise agentic operating system</div>
            </div>
            <a href="#mentisWrapper" className="ml-4 text-sky-600 text-sm font-light hover:underline transition-colors">Learn more →</a>
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="mt-20 opacity-0" id="scrollCue">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] text-gray-400 font-mono tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-px h-10 bg-linear-to-b from-gray-300 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
