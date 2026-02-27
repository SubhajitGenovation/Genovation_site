"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.utils.toArray(".r-up", containerRef.current).forEach((el) => {
        gsap.to(el, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
      });
      gsap.utils.toArray(".r-scale", containerRef.current).forEach((el) => {
        gsap.to(el, { scale: 1, opacity: 1, duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
      });
      gsap.fromTo(
        "#ctaHeading",
        { scale: 0.7, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.8, ease: "power2.out", scrollTrigger: { trigger: "#cta", start: "top 80%", toggleActions: "play none none none" } }
      );
      containerRef.current.querySelectorAll(".orb").forEach((orb) => {
        gsap.to(orb, { y: (Math.random() - 0.5) * 250, x: (Math.random() - 0.5) * 120, ease: "none", scrollTrigger: { trigger: containerRef.current, start: "top bottom", end: "bottom top", scrub: 2.5 } });
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="contact" className="py-32 md:py-48 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[600px] h-[500px] bg-emerald-500/[0.06]" style={{ top: "20%", left: "30%" }} />
      <div className="orb w-[400px] h-[350px] bg-cyan-500/[0.04]" style={{ bottom: "10%", right: "25%" }} />

      <div className="relative max-w-4xl mx-auto px-8 text-center" id="cta">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.15] mb-10 r-up">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 soft-pulse" />
          <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">Start Your Security Journey</span>
        </div>

        <h2 className="display-section text-5xl md:text-7xl lg:text-8xl mb-8" id="ctaHeading">
          Ready for <span className="text-gradient">Real Security</span>?
        </h2>

        <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto mb-12 r-up leading-relaxed">
          If your organization requires intelligence systems that meet real-world security and sovereignty standards, let's talk.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16 r-up">
          <Link href="#" className="hero-cta-primary px-10 py-4 rounded-full text-white font-light text-sm tracking-wider inline-flex items-center gap-3">
            Schedule Security Briefing <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="#" className="px-10 py-4 rounded-full border border-black/[0.1] text-gray-700 hover:border-emerald-500/30 hover:text-emerald-600 font-light text-sm tracking-wider transition-all inline-flex items-center gap-3">
            <FileText className="w-4 h-4" /> Architecture Whitepaper
          </Link>
        </div>

        <div className="card !rounded-2xl p-8 max-w-2xl mx-auto r-scale">
          <p className="text-xl md:text-2xl text-gray-700 font-light italic leading-relaxed">
            "If intelligence cannot be secured,<br />it should not be deployed."
          </p>
        </div>
      </div>
    </section>
  );
}
