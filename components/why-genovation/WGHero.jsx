"use client";
import { Shield } from "lucide-react";

export default function WGHero() {
  return (
    <section className="relative min-h-[130vh] flex items-center justify-center overflow-hidden" id="hero">
      <div className="absolute inset-0 mesh-bg opacity-30" />
      <div className="orb w-[700px] h-[600px] bg-emerald-500/[0.06]" style={{ top: "10%", left: "15%" }} />
      <div className="orb w-[500px] h-[400px] bg-cyan-500/[0.05]" style={{ bottom: "15%", right: "20%" }} />
      <div className="orb w-[600px] h-[400px] bg-blue-500/[0.04]" style={{ top: "40%", left: "50%" }} />

      <div className="relative max-w-6xl mx-auto px-8 text-center" id="heroContent">
        {/* Badge */}
        <div className="mb-12 opacity-0" id="heroBadge">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.12] border border-emerald-500/[0.2]">
            <Shield className="w-3 h-3 text-emerald-600" />
            <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">Why Genovation</span>
          </div>
        </div>

        {/* H1 — chars split by WGAnimations */}
        <h1 className="display-hero text-[clamp(3.5rem,8vw,7.5rem)] mb-12">
          <span className="hero-line block">Built for Intelligence</span>
          <span className="hero-line block text-gradient">That Must Be Trusted</span>
        </h1>

        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent mb-10 opacity-0" id="heroDivider" />

        <div className="max-w-2xl mx-auto mb-6 overflow-hidden" id="heroSub1">
          <p className="text-xl md:text-2xl text-gray-400 font-light translate-y-full">
            Most AI companies optimize for capability.
          </p>
        </div>
        <div className="max-w-2xl mx-auto mb-14 overflow-hidden" id="heroSub2">
          <p className="text-2xl md:text-3xl text-gray-800 font-light translate-y-full">
            We optimize for <span className="text-gradient font-normal">consequence</span>.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 opacity-0 translate-y-8" id="heroButtons">
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-blue-500/[0.08] border border-blue-500/[0.15]">
            <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
            <span className="text-sm font-light text-gray-600">Cloud</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/[0.08] border border-emerald-500/[0.15]">
            <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
            <span className="text-sm font-light text-gray-600">On-Premise</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-amber-500/[0.08] border border-amber-500/[0.15]">
            <svg className="w-4 h-4 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
            <span className="text-sm font-light text-gray-600">Air-Gapped</span>
          </div>
        </div>

        <p className="mt-10 text-lg text-gray-400 font-light opacity-0" id="scrollCue">
          Deploy anywhere. <span className="text-gradient font-normal">Trust everywhere</span>.
        </p>
      </div>
    </section>
  );
}
