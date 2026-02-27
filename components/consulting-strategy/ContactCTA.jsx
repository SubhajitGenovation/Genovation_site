"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Download, Clock, Lock, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ContactCTA() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".r-up", {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-32 relative overflow-hidden" id="cta" ref={sectionRef}>
            <div className="relative max-w-5xl mx-auto px-8">
                {/* CTA Card */}
                <div className="cta-card bg-[#1a1a2e] rounded-[28px] p-12 md:p-20 relative overflow-hidden shadow-2xl">
                    {/* Interior Gradients - simulating ::before */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(16,185,129,0.08)_0%,transparent_60%)]" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(6,182,212,0.06)_0%,transparent_50%)]" />
                    </div>

                    <div className="relative z-10 text-center max-w-2xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.06] border border-white/[0.1] mb-8 r-up opacity-0 translate-y-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-emerald-400 text-[11px] font-light tracking-[0.25em] uppercase">Start With Strategy</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-tight mb-6 r-up opacity-0 translate-y-4" style={{ letterSpacing: "-0.03em" }}>
                            The Best AI Deployment<br />
                            <span className="bg-gradient-to-r from-[#34d399] to-[#22d3ee] bg-clip-text text-transparent">Starts Before the First Agent.</span>
                        </h2>

                        <p className="text-[15px] text-white/50 font-light leading-relaxed mb-10 r-up opacity-0 translate-y-4">
                            Book a strategy session with our consulting team. We'll discuss your organization, your
                            constraints, and whether a structured assessment makes sense for your situation. No commitment.
                            No pitch. Just an honest conversation.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 r-up opacity-0 translate-y-4">
                            <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-black text-[14px] font-light tracking-wide hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5 transition-all no-underline">
                                <span>Book a Strategy Session</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/methodology" className="inline-flex items-center gap-2 text-[14px] text-white/40 font-light hover:text-white/70 transition-colors no-underline">
                                <Download className="w-4 h-4" />
                                Download Methodology Overview
                            </Link>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-12 r-up opacity-0 translate-y-4">
                            <div className="flex items-center gap-2">
                                <Clock className="w-3.5 h-3.5 text-white/25" />
                                <span className="text-[11px] text-white/30 font-light uppercase tracking-wider">45-min initial session</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Lock className="w-3.5 h-3.5 text-white/25" />
                                <span className="text-[11px] text-white/30 font-light uppercase tracking-wider">Confidential by default</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <X className="w-3.5 h-3.5 text-white/25" />
                                <span className="text-[11px] text-white/30 font-light uppercase tracking-wider">No commitment</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Company Footer */}
                <div className="text-center mt-12 r-up opacity-0 translate-y-4">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/[0.03] border border-black/[0.06]">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[12px] text-gray-800 font-light">Genovation Technological Solutions Pvt. Ltd.</span>
                        <span className="text-[10px] text-gray-500 font-mono">·</span>
                        <span className="text-[12px] text-gray-700 font-light uppercase tracking-tight">Enterprise Intelligence. Sovereign by Design.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
