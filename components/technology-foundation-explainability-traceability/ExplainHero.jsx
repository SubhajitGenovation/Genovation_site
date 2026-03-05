"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScanSearch, ArrowRight, FileText, HelpCircle, GitBranch, Workflow } from "lucide-react";

export default function ExplainHero() {
  const containerRef = useRef(null);

  useGSAP(() => {
    if (typeof document === "undefined") return;

    // Split hero lines into chars
    document.querySelectorAll(".hero-line").forEach((line) => {
      const text = line.textContent;
      line.innerHTML = "";
      text.split("").forEach((c) => {
        const span = document.createElement("span");
        span.className = "char";
        span.textContent = c === " " ? "\u00A0" : c;
        line.appendChild(span);
      });
    });

    const heroTL = gsap.timeline({ delay: 0.3 });
    heroTL
      .to("#heroBadge", { opacity: 1, duration: 0.8, ease: "power2.out" })
      .to(".hero-line:first-child .char", { opacity: 1, y: 0, rotateX: 0, skewX: 0, stagger: 0.03, duration: 1, ease: "power4.out" }, "-=0.4")
      .to(".hero-line:last-child .char", { opacity: 1, y: 0, rotateX: 0, skewX: 0, stagger: 0.03, duration: 1, ease: "power4.out" }, "-=0.7")
      .to("#heroDivider", { opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.3")
      .to("#heroSub1 p", { y: 0, duration: 1, ease: "power3.out" }, "-=0.3")
      .to("#heroSub2 p", { y: 0, duration: 1, ease: "power3.out" }, "-=0.5")
      .to("#heroButtons", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.3")
      .to("#heroStats", { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.3")
      .to("#scrollCue", { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.3");

    gsap.to("#heroContent", {
      y: -120,
      ease: "none",
      scrollTrigger: { trigger: "#hero", start: "top top", end: "70% top", scrub: true },
    });
  }, { scope: containerRef });

  return (
    <section className="relative min-h-[120vh] flex items-center justify-center overflow-hidden pt-32" id="hero" ref={containerRef}>
      <div className="absolute inset-0 mesh-bg opacity-15"></div>
      <div className="orb w-[700px] h-[500px] bg-emerald-500/[0.07]" style={{ top: "-10%", left: "30%" }}></div>
      <div className="orb w-[500px] h-[400px] bg-cyan-500/[0.05]" style={{ bottom: "10%", right: "10%" }}></div>

      <div className="relative max-w-6xl mx-auto px-8 text-center" id="heroContent">
        {/* <div className="mb-10 opacity-0" id="heroBadge">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2]">
            <ScanSearch className="w-3 h-3 text-emerald-600" />
            <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">Technology Foundation</span>
          </div>
        </div> */}

        <h1 className="display-hero text-7xl md:text-[8rem] lg:text-[9.5rem] mb-10" id="heroTitle" style={{ perspective: "1000px" }}>
          <span className="hero-line">Explainability &</span><br />
          <span className="hero-line text-gradient">Traceability.</span>
        </h1>

        <div className="flex items-center justify-center gap-4 mb-8 opacity-0" id="heroDivider">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-emerald-400/40"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/60"></div>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-emerald-400/40"></div>
        </div>

        <div className="overflow-hidden mb-8" id="heroSub1">
          <p className="text-xl md:text-[1.65rem] text-gray-600 font-light tracking-[-0.01em] leading-[1.4] translate-y-full">Intelligence You Can Defend.</p>
        </div>
        <div className="overflow-hidden mb-14" id="heroSub2">
          <p className="text-base text-gray-500 font-light max-w-2xl mx-auto leading-relaxed translate-y-full">In regulated enterprises, intelligence is not accepted because it is impressive. It is accepted because it is explainable, traceable, and accountable.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 opacity-0" id="heroButtons">
          <div className="mag-btn">
            <button className="btn-inner hero-cta-primary group relative px-9 py-4 rounded-full text-[15px] font-medium flex items-center gap-3 overflow-hidden">
              <span className="relative z-10 text-black flex items-center gap-3">Explore Architecture <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" /></span>
            </button>
          </div>
          <div className="mag-btn">
            <button className="btn-inner group px-9 py-4 rounded-full border border-black/[0.1] text-gray-700 text-[15px] font-light flex items-center gap-3 hover:border-emerald-400/25 hover:text-gray-900 hover:bg-black/[0.03] transition-all duration-400">
              <FileText className="w-4 h-4 text-emerald-600" /> Technical Documentation
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 mt-20 opacity-0" id="heroStats">
          <div className="text-center p-6 rounded-2xl bg-emerald-500/[0.08] border border-emerald-500/[0.15]">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/[0.15] flex items-center justify-center mx-auto mb-3"><HelpCircle className="w-5 h-5 text-emerald-600" /></div>
            <div className="text-lg font-light text-emerald-600">What</div>
            <div className="text-[11px] text-gray-500 font-light mt-1">Decision made</div>
          </div>
          <div className="w-px h-16 bg-black/[0.06]"></div>
          <div className="text-center p-6 rounded-2xl bg-cyan-500/[0.08] border border-cyan-500/[0.15]">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/[0.15] flex items-center justify-center mx-auto mb-3"><GitBranch className="w-5 h-5 text-cyan-600" /></div>
            <div className="text-lg font-light text-cyan-600">Why</div>
            <div className="text-[11px] text-gray-500 font-light mt-1">Reasoning path</div>
          </div>
          <div className="w-px h-16 bg-black/[0.06]"></div>
          <div className="text-center p-6 rounded-2xl bg-blue-500/[0.08] border border-blue-500/[0.15]">
            <div className="w-10 h-10 rounded-xl bg-blue-500/[0.15] flex items-center justify-center mx-auto mb-3"><Workflow className="w-5 h-5 text-blue-600" /></div>
            <div className="text-lg font-light text-blue-600">How</div>
            <div className="text-[11px] text-gray-500 font-light mt-1">Execution trace</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0" id="scrollCue">
        <span className="text-[10px] text-gray-500 font-light tracking-[0.4em] uppercase">Scroll</span>
        <div className="w-[1px] h-16 relative overflow-hidden"><div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-emerald-400/60 to-transparent animate-bounce"></div></div>
      </div>
    </section>
  );
}