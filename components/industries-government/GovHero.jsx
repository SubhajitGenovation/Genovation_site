"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function GovHero() {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      if (typeof document === "undefined") return;

      const tl = gsap.timeline({ delay: 0.3 });

      // Removed breadcrumb and badge animations
      // tl.to("#heroBreadcrumb", { opacity: 1, duration: 0.6, ease: "power2.out" });
      // tl.to("#heroBadge", { opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.3");

      // Character split animation
      document.querySelectorAll(".hero-line").forEach((line) => {
        const text = line.textContent;
        const isGradient = line.classList.contains("text-gradient-blue");
        line.textContent = "";
        text.split("").forEach((ch) => {
          const span = document.createElement("span");
          span.className = "char";
          if (isGradient) span.classList.add("text-gradient-blue");
          span.textContent = ch === " " ? "\u00A0" : ch;
          if (ch === " ") span.style.width = "0.3em";
          line.appendChild(span);
        });
      });

      tl.to(
        ".char",
        { opacity: 1, y: "0%", rotateX: 0, skewX: 0, duration: 0.8, stagger: 0.025, ease: "power4.out" },
        "-=0.2"
      );
      tl.to("#heroSub1 p", { y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4");
      tl.to("#heroSub2 p", { y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");
      tl.to("#heroTags", { opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.4");
      tl.to("#heroButtons", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.3");
    },
    { scope: heroRef, dependencies: [] }
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex items-center justify-center overflow-hidden pt-32 md:pt-40"
      style={{ minHeight: "100vh" }}
    >
      <div className="absolute inset-0 mesh-bg" style={{ opacity: 0.2 }} />
      <div className="orb" style={{ width: 700, height: 500, background: "rgba(59,130,246,0.06)", top: "-10%", left: "25%" }} />
      <div className="orb" style={{ width: 500, height: 400, background: "rgba(99,102,241,0.04)", bottom: "10%", right: "10%" }} />

      <div className="relative max-w-6xl mx-auto px-8" id="heroContent">
        {/* Removed Breadcrumb section */}
        {/* <div className="flex items-center gap-2 text-sm mb-12" id="heroBreadcrumb" style={{ opacity: 0 }}>
          <span className="text-gray-400 font-light">Industries</span>
          <svg className="w-3.5 h-3.5 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
          <span className="text-blue-600 font-light">Government &amp; Public Sector</span>
        </div> */}

        <div className="max-w-4xl">
          {/* Removed Badge section */}
          {/* <div className="mb-8" id="heroBadge" style={{ opacity: 0 }}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full" style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)" }}>
              <div className="w-2 h-2 rounded-full bg-blue-500" style={{ animation: "pulse-soft 2s ease-in-out infinite" }} />
              <span className="text-blue-700 text-[11px] font-light tracking-[0.25em] uppercase">Government &amp; Public Sector</span>
            </div>
          </div> */}

          {/* Hero Title */}
          <h1 className="display-hero text-6xl lg:text-[6.5rem] mb-6" id="heroTitle" style={{ perspective: 1000 }}>
            <span className="hero-line" style={{ whiteSpace: "nowrap" }}>Sovereign</span>
            <br />
            <span className="hero-line text-gradient-blue" style={{ whiteSpace: "nowrap" }}>Intelligence.</span>
          </h1>

          {/* Subtitles */}
          <div className="overflow-hidden mb-4" id="heroSub1">
            <p className="text-xl text-gray-500 font-light" style={{ transform: "translateY(100%)" }}>
              AI that serves the public interest with full<br />transparency, sovereignty, and accountability.
            </p>
          </div>
          <div className="overflow-hidden mb-8" id="heroSub2">
            <p className="text-[15px] text-gray-400 font-light leading-relaxed max-w-xl" style={{ transform: "translateY(100%)" }}>
              Government agencies handle citizen data, policy decisions, and public resources under intense scrutiny. AI adoption must meet strict requirements for{" "}
              <span className="text-blue-700 font-normal">transparency, sovereignty, and accountability</span>.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-10" id="heroTags" style={{ opacity: 0 }}>
            {["Data Sovereignty", "FedRAMP Ready", "Audit Compliance", "Citizen Privacy"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-blue-700 text-sm font-light"
                style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.15)" }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4" id="heroButtons" style={{ opacity: 0, transform: "translateY(30px)" }}>
            <div className="mag-btn">
              <a
                href="#products"
                className="btn-inner inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white text-[14px] font-normal hero-cta"
              >
                <span>View Products</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </a>
            </div>
            <div className="mag-btn">
              <a
                href="#cta"
                className="btn-inner px-7 py-3.5 rounded-full text-gray-600 text-[14px] font-light transition-all"
                style={{ background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.1)" }}
              >
                Schedule Briefing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}