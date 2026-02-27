"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function AnalyticsHero() {
  const container = useRef();

  useGSAP(
    () => {
      const heroTL = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTL
        .to("#heroBadge", { opacity: 1, duration: 0.8, delay: 0.3 })
        .from(
          ".hero-line",
          { y: 120, rotateX: -30, skewX: -4, opacity: 0, stagger: 0.2, duration: 1.2 },
          "-=0.5"
        )
        .to("#heroDivider", { opacity: 1, duration: 0.6 }, "-=0.6")
        .to("#heroSub1 p", { y: 0, duration: 1 }, "-=0.4")
        .to("#heroStats", { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
        .to("#heroCTAs", { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
        .to("#scrollCue", { opacity: 1, duration: 0.6 }, "-=0.3");
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative min-h-[130vh] flex items-center justify-center overflow-hidden"
      id="hero"
    >
      <div className="absolute inset-0 mesh-bg opacity-30" />
      <div
        className="orb w-[700px] h-[600px] bg-amber-500/[0.07]"
        style={{ top: "10%", left: "15%" }}
      />
      <div
        className="orb w-[500px] h-[400px] bg-orange-500/[0.05]"
        style={{ bottom: "15%", right: "20%" }}
      />
      <div
        className="orb w-[600px] h-[400px] bg-amber-500/[0.03]"
        style={{ top: "40%", left: "50%" }}
      />

      <div className="relative max-w-6xl mx-auto px-8 text-center" id="heroContent">
        {/* Badge */}
        <div className="mb-12 opacity-0" id="heroBadge">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/[0.08] border border-amber-500/[0.15]">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 soft-pulse" />
            <span className="text-amber-600 text-[11px] font-light tracking-[0.25em] uppercase">
              Decision Intelligence Platform
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="display-hero text-[clamp(3.5rem,8vw,7.5rem)] mb-12">
          <span className="hero-line block">Analytics &</span>
          <span className="hero-line block text-gradient">Decision Intelligence</span>
        </h1>

        {/* Divider */}
        <div
          className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mb-10 opacity-0"
          id="heroDivider"
        />

        {/* Subtitle */}
        <div className="max-w-2xl mx-auto mb-14 overflow-hidden" id="heroSub1">
          <p className="text-xl md:text-2xl text-gray-400 font-light translate-y-full">
            Dashboards show <em>what</em> happened. Reports show <em>where</em>. Your teams
            still spend weeks arguing over <em>why</em>. We explain business outcomes —
            clearly, defensibly, and without black-box reasoning.
          </p>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap justify-center gap-12 mb-14 opacity-0 translate-y-8"
          id="heroStats"
        >
          <div className="text-center">
            <div className="text-3xl font-light text-gray-800">10x</div>
            <div className="text-xs text-gray-400 font-mono tracking-wider mt-1">
              Faster Root-Cause
            </div>
          </div>
          <div className="w-px h-12 bg-black/[0.08]" />
          <div className="text-center">
            <div className="text-3xl font-light text-gray-800">100%</div>
            <div className="text-xs text-gray-400 font-mono tracking-wider mt-1">
              Traceable Logic
            </div>
          </div>
          <div className="w-px h-12 bg-black/[0.08]" />
          <div className="text-center">
            <div className="text-3xl font-light text-gray-800">Zero</div>
            <div className="text-xs text-gray-400 font-mono tracking-wider mt-1">
              Black Boxes
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div
          className="flex justify-center gap-4 opacity-0 translate-y-8"
          id="heroCTAs"
        >
          <a
            href="#capabilities"
            className="px-7 py-3 rounded-full hero-cta-primary text-white text-sm font-light tracking-wide"
          >
            Explore Capabilities
          </a>
          <a
            href="#demo"
            className="px-7 py-3 rounded-full bg-black/[0.05] border border-black/[0.1] text-gray-700 hover:border-amber-500/30 hover:text-amber-600 text-sm font-light tracking-wide transition-all"
          >
            Request Demo
          </a>
        </div>

        {/* Scroll Cue */}
        <div className="mt-20 opacity-0" id="scrollCue">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] text-gray-400 font-mono tracking-[0.3em] uppercase">
              Scroll
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-gray-300 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}