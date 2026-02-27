"use client";
import { useEffect } from "react";
import { Database, ShieldCheck, Rocket, ArrowRight, BookOpen } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  useEffect(() => {
    gsap.utils.toArray(".r-up").forEach((el) => {
      gsap.to(el, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
    });
    gsap.fromTo("#cta h2", { scale: 0.7, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.8, ease: "power2.out", scrollTrigger: { trigger: "#cta", start: "top 80%", toggleActions: "play none none none" } });
    ScrollTrigger.batch("#ctaCards .card", {
      start: "top 87%",
      onEnter: (els) => gsap.fromTo(els, { y: 60, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: "power3.out" }),
      once: true,
    });
  }, []);

  const cards = [
    { icon: <Database className="w-6 h-6 text-emerald-600 mx-auto mb-3" />,   text: "Data becomes reliable intelligence input" },
    { icon: <ShieldCheck className="w-6 h-6 text-cyan-600 mx-auto mb-3" />,   text: "AI decisions become explainable & defensible" },
    { icon: <Rocket className="w-6 h-6 text-violet-600 mx-auto mb-3" />,      text: "Enterprises gain confidence in deployment" },
  ];

  return (
    <section className="py-56 relative overflow-hidden" id="cta">
      <div className="orb w-[800px] h-[800px] bg-gradient-to-br from-emerald-500/[0.06] via-cyan-500/[0.04] to-violet-500/[0.06]" style={{ top: "10%", left: "20%" }} />
      <div className="absolute inset-0 mesh-bg opacity-20" />
      <div className="relative max-w-4xl mx-auto px-8 text-center">
        <h2 className="display-hero text-6xl md:text-8xl lg:text-[9rem] mb-12 r-up">
          Data Becomes<br /><span className="text-gradient">Reliable<br />Intelligence</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-4 mb-16" id="ctaCards">
          {cards.map((c) => (
            <div key={c.text} className="card p-6 r-up">{c.icon}<p className="text-[15px] text-gray-600 font-light">{c.text}</p></div>
          ))}
        </div>
        <p className="text-[1.15rem] text-gray-600 font-light mb-16 leading-relaxed r-up">
          Intelligence is only as trustworthy as the data beneath it.<br />
          <span className="text-emerald-600 font-light">We build the layer that makes it trustworthy.</span>
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 r-up">
          <button className="hero-cta-primary group px-8 py-3.5 rounded-full text-black text-[15px] font-normal flex items-center gap-3">
            Request Architecture Review
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-3.5 rounded-full bg-black/[0.05] border border-black/[0.1] text-gray-600 text-[15px] font-light flex items-center gap-3 hover:bg-black/[0.08] transition-all">
            <BookOpen className="w-4 h-4" /> Technical Documentation
          </button>
        </div>
      </div>
    </section>
  );
}
