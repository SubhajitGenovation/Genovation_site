"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronRight, Fingerprint, ShieldCheck, Lock, FileCheck, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/dist/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Scroll progress bar
      gsap.to("#scrollProgress", {
        scaleX: 1, ease: "none",
        scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 0.3 },
      });

      // ── char split — LINE 1 only (plain text, no gradient issues) ──
      const line1 = line1Ref.current;
      if (line1) {
        const text = line1.dataset.text;
        line1.innerHTML = "";
        [...text].forEach((c) => {
          const s = document.createElement("span");
          s.style.cssText =
            "display:inline-block;opacity:0;transform:translateY(80%) rotateX(-80deg) skewX(-6deg);transform-origin:bottom center;will-change:transform,opacity;";
          s.textContent = c === " " ? "\u00A0" : c;
          line1.appendChild(s);
        });
      }

      // ── LINE 2 — animate as ONE block (no char split, preserves gradient) ──
      const line2 = line2Ref.current;
      if (line2) {
        gsap.set(line2, { opacity: 0, y: 80, rotateX: -40, skewX: -4 });
      }

      // ── Hero entrance timeline ──
      const tl = gsap.timeline({ delay: 0.2 });
      tl
        // Removed heroBreadcrumb animation
        // Removed heroBadge animation
        // Animate line 1 chars
        .to(line1 ? [...line1.children] : [], {
          opacity: 1, y: 0, rotateX: 0, skewX: 0,
          stagger: 0.025, duration: 1.1, ease: "power4.out",
        }, "-=0.3")
        // Animate line 2 as a whole block right after line 1 finishes
        .to(line2, {
          opacity: 1, y: 0, rotateX: 0, skewX: 0,
          duration: 1.0, ease: "power4.out",
        }, "-=0.5")
        .to("#heroDivider", { opacity: 1, duration: 0.5 }, "-=0.4")
        .to("#heroSub1 p",  { y: 0, duration: 0.9, ease: "power3.out" }, "-=0.3")
        .to("#heroSub2",    { opacity: 1, duration: 0.7 }, "-=0.4")
        .to("#heroCTAs",    { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.3")
        .to("#heroTrust",   { opacity: 1, duration: 0.6 }, "-=0.2")
        .to("#scrollCue",   { opacity: 1, duration: 0.5 }, "-=0.1");

      // ── scroll-triggered r-* reveals ──
      gsap.utils.toArray(".r-up").forEach((el) => {
        gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }});
      });
      gsap.utils.toArray(".r-left").forEach((el) => {
        gsap.to(el, { opacity: 1, x: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }});
      });
      gsap.utils.toArray(".r-right").forEach((el) => {
        gsap.to(el, { opacity: 1, x: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }});
      });
      gsap.utils.toArray(".r-scale").forEach((el) => {
        gsap.to(el, { opacity: 1, scale: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }});
      });
    };
    init();
  }, []);

  return (
    <section
      className="relative overflow-hidden section-sky"
      id="hero"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {/* Background */}
      <div className="absolute inset-0 mesh-bg" style={{ opacity: 0.3 }} />
      <div className="orb" style={{ width: 900, height: 700, background: "rgba(14,165,233,0.06)", top: "5%", left: "5%" }} />
      <div className="orb" style={{ width: 600, height: 500, background: "rgba(6,182,212,0.05)", bottom: "15%", right: "10%" }} />
      <div className="orb" style={{ width: 700, height: 500, background: "rgba(16,185,129,0.03)", top: "40%", left: "55%" }} />
      <div className="orb" style={{ width: 400, height: 350, background: "rgba(139,92,246,0.03)", top: "20%", right: "30%" }} />

      <div
        className="relative w-full max-w-6xl mx-auto px-8 text-center"
        style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
      >
        {/* ── Removed Breadcrumb section ── */}
        
        {/* ── Removed Badge section ── */}

        {/* ── H1 ── */}
        <h1
          className="display-hero mb-14"
          style={{ fontSize: "clamp(3.5rem,8vw,7rem)", lineHeight: 1.0, letterSpacing: "-0.05em" }}
        >
          {/* Line 1: char-split animated */}
          <div
            ref={line1Ref}
            data-text="Enterprise Knowledge"
            style={{ display: "block", minHeight: "1.05em" }}
          >
            Enterprise Knowledge
          </div>

          {/* 
            Line 2: NO char-split. Animated as a single block.
            Gradient is set via className only — never touched by innerHTML replacement.
            gsap.set() makes it opacity:0 BEFORE paint via useEffect.
          */}
          <div
            ref={line2Ref}
            className="text-gradient-sky"
            style={{
              display: "block",
              minHeight: "1.05em",
              // Start visible on SSR so there's no flash of missing text.
              // GSAP will immediately set opacity:0 in useEffect before first frame.
            }}
          >
            Intelligence
          </div>
        </h1>

        {/* ── Divider ── */}
        <div id="heroDivider" className="flex items-center justify-center gap-4 mb-12" style={{ opacity: 0 }}>
          <div className="w-16 h-px"
            style={{ background: "linear-gradient(90deg,transparent,rgba(14,165,233,0.4))" }} />
          <div className="w-2 h-2 rounded-full"
            style={{ border: "1px solid rgba(14,165,233,0.4)", position: "relative" }}>
            <div className="absolute inset-0 rounded-full soft-pulse"
              style={{ background: "rgba(14,165,233,0.2)" }} />
          </div>
          <div className="w-16 h-px"
            style={{ background: "linear-gradient(270deg,transparent,rgba(14,165,233,0.4))" }} />
        </div>

        {/* ── Sub 1 ── */}
        <div id="heroSub1" className="max-w-2xl mx-auto mb-8 overflow-hidden">
          <p className="text-gray-400 font-light"
            style={{ fontSize: "clamp(1.05rem,2vw,1.45rem)", transform: "translateY(100%)", lineHeight: 1.6 }}>
            Enterprise-grade Retrieval-Augmented Generation for governed, explainable
            answers over your policies &amp; SOPs.
          </p>
        </div>

        {/* ── Sub 2 ── */}
        <div id="heroSub2" className="max-w-2xl mx-auto mb-16" style={{ opacity: 0 }}>
          <p className="text-gray-500 font-light leading-relaxed" style={{ fontSize: 15 }}>
            A massive RAG system that retrieves relevant content from your document corpus
            and generates accurate, citation-backed responses — grounded in your actual
            policies, never hallucinated.
          </p>
        </div>

        {/* ── CTAs ── */}
        <div id="heroCTAs" className="flex flex-wrap justify-center gap-4 mb-16"
          style={{ opacity: 0, transform: "translateY(2rem)" }}>
          <a href="#contact"
            className="hero-cta-primary inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-light"
            style={{ fontSize: 14, letterSpacing: "0.05em" }}>
            Request a Demo <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#capabilities"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-light transition-all hover:text-sky-600"
            style={{
              border: "1px solid rgba(0,0,0,0.1)",
              background: "rgba(255,255,255,0.7)",
              color: "#374151",
              fontSize: 14,
              letterSpacing: "0.05em",
            }}>
            Explore Capabilities
          </a>
        </div>

        {/* ── Trust indicators ── */}
        <div id="heroTrust" className="flex flex-wrap justify-center gap-8" style={{ opacity: 0 }}>
          {[
            { Icon: Fingerprint, color: "text-violet-400", text: "Proprietary Semantic Chunking" },
            { Icon: ShieldCheck, color: "text-emerald-400", text: "73% Less Hallucination" },
            { Icon: Lock,        color: "text-sky-400",     text: "Air-Gapped Ready" },
            { Icon: FileCheck,   color: "text-amber-400",   text: "Full Audit Trail" },
          ].map(({ Icon, color, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon className={`w-4 h-4 ${color}`} />
              <span className="text-gray-400 font-light" style={{ fontSize: 11 }}>{text}</span>
            </div>
          ))}
        </div>

        {/* ── Scroll cue ── */}
        <div id="scrollCue" className="mt-20" style={{ opacity: 0 }}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-400 font-mono uppercase"
              style={{ fontSize: 10, letterSpacing: "0.3em" }}>Scroll</span>
            <div className="w-px h-10"
              style={{ background: "linear-gradient(to bottom, #d1d5db, transparent)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}