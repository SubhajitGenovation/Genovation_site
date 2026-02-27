"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldAlert, X, ArrowRight, Layers } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Split hero lines into .char spans
      const heroLines = containerRef.current.querySelectorAll(".hero-line");
      heroLines.forEach((line) => {
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

      // Hero timeline
      const heroTL = gsap.timeline({ delay: 0.3 });
      heroTL
        .to("#heroBadge", { opacity: 1, duration: 0.8, ease: "power2.out" })
        .to(".hero-line:first-child .char", { opacity: 1, y: 0, rotateX: 0, skewX: 0, stagger: 0.03, duration: 1, ease: "power4.out" }, "-=0.4")
        .to(".hero-line:last-child .char", { opacity: 1, y: 0, rotateX: 0, skewX: 0, stagger: 0.03, duration: 1, ease: "power4.out" }, "-=0.7")
        .to("#heroDivider", { opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.3")
        .to("#heroSub1 p", { y: 0, duration: 1, ease: "power3.out" }, "-=0.3")
        .to("#heroSub2 p", { y: 0, duration: 1, ease: "power3.out" }, "-=0.7")
        .to("#heroRisks", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .to("#heroButtons", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .to("#scrollCue", { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.3");

      // Hero parallax
      gsap.to("#heroContent", {
        y: -120,
        ease: "none",
        scrollTrigger: { trigger: "#hero", start: "top top", end: "70% top", scrub: true },
      });

      // Orb parallax
      containerRef.current.querySelectorAll(".orb").forEach((orb) => {
        gsap.to(orb, {
          y: (Math.random() - 0.5) * 250,
          x: (Math.random() - 0.5) * 120,
          ease: "none",
          scrollTrigger: { trigger: "#hero", start: "top bottom", end: "bottom top", scrub: 2.5 },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="hero" className="relative min-h-[130vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-30" />
      <div className="orb w-[700px] h-[600px] bg-red-500/[0.04]" style={{ top: "10%", left: "15%" }} />
      <div className="orb w-[500px] h-[400px] bg-emerald-500/[0.05]" style={{ bottom: "15%", right: "20%" }} />
      <div className="orb w-[600px] h-[400px] bg-blue-500/[0.04]" style={{ top: "40%", left: "50%" }} />

      <div className="relative max-w-6xl mx-auto px-8 text-center" id="heroContent">
        {/* Badge */}
        <div className="mb-12 opacity-0" id="heroBadge">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-500/[0.08] border border-red-500/[0.15]">
            <ShieldAlert className="w-3 h-3 text-red-500" />
            <span className="text-red-500 text-[11px] font-light tracking-[0.25em] uppercase">Security & Sovereignty</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="display-hero text-[clamp(3.5rem,8vw,7.5rem)] mb-12">
          <span className="hero-line block">Intelligence That</span>
          <span className="hero-line block text-gradient">Never Leaves Your Control</span>
        </h1>

        {/* Divider */}
        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent mb-10 opacity-0" id="heroDivider" />

        {/* Sub lines */}
        <div className="max-w-2xl mx-auto mb-6 overflow-hidden" id="heroSub1">
          <p className="text-xl md:text-2xl text-gray-400 font-light translate-y-full">
            For regulated enterprises, AI adoption isn't blocked by capability.
          </p>
        </div>
        <div className="max-w-2xl mx-auto mb-14 overflow-hidden" id="heroSub2">
          <p className="text-2xl md:text-3xl text-gray-800 font-light translate-y-full">
            It's blocked by <span className="text-gradient-warm font-normal">risk</span>.
          </p>
        </div>

        {/* Risk pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-14 opacity-0 translate-y-8" id="heroRisks">
          {["Data Exposure", "Non-Compliance", "Opaque Decisions"].map((risk) => (
            <div key={risk} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-500/[0.06] border border-red-500/[0.1]">
              <X className="w-3.5 h-3.5 text-red-400" />
              <span className="text-sm font-light text-red-500">{risk}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6 opacity-0 translate-y-8" id="heroButtons">
          <Link href="#contact" className="hero-cta-primary px-8 py-4 rounded-full text-white font-light text-sm tracking-wider inline-flex items-center gap-3">
            Start Security Review <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="#architecture" className="px-8 py-4 rounded-full border border-black/[0.1] text-gray-700 hover:border-emerald-500/30 hover:text-emerald-600 font-light text-sm tracking-wider transition-all inline-flex items-center gap-3">
            View Architecture <Layers className="w-4 h-4" />
          </Link>
        </div>

        {/* Scroll cue */}
        <div className="mt-20 opacity-0" id="scrollCue">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] text-gray-400 font-mono tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-gray-300 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
