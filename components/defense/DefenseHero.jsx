"use client";

import React, { useEffect, useRef } from 'react';
import { ChevronRight, ArrowRight, Shield } from 'lucide-react';
import gsap from 'gsap';

export default function DefenseHero() {
    const heroRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ delay: 0.3 });

        tl.to('.hero-breadcrumb', { opacity: 1, duration: 0.6, ease: 'power2.out' });
        tl.to('.hero-badge', { opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.3');

        // Character animation for title
        tl.to('.hero-char', {
            opacity: 1,
            y: '0%',
            rotateX: 0,
            skewX: 0,
            duration: 0.8,
            stagger: 0.025,
            ease: 'power4.out'
        }, '-=0.2');

        tl.to('.hero-sub-1', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.4');
        tl.to('.hero-sub-2', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.6');
        tl.to('.hero-tags', { opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.4');
        tl.to('.hero-buttons', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3');
    }, []);

    const renderText = (text, gradient = false) => {
        return text.split('').map((char, i) => (
            <span
                key={i}
                className={`hero-char inline-block opacity-0 translate-y-full -rotate-x-90 -skew-x-8 origin-bottom center ${gradient ? 'text-gradient-slate' : ''}`}
                style={{ width: char === ' ' ? '0.3em' : 'auto' }}
            >
                {char === ' ' ? '\u00A0' : char}
            </span>
        ));
    };

    return (
        <section ref={heroRef} className="relative min-h-[120vh] flex items-center justify-center overflow-hidden pt-24" id="hero">
            <div className="absolute inset-0 mesh-bg-slate opacity-20"></div>
            <div className="orb w-[700px] h-[500px] bg-slate-500/[0.06] top-[-10%] left-[25%]"></div>
            <div className="orb w-[500px] h-[400px] bg-slate-600/[0.04] bottom-[10%] right-[10%]"></div>

            <div className="relative max-w-6xl mx-auto px-8">
                <div className="hero-breadcrumb flex items-center gap-2 text-sm mb-12 opacity-0">
                    <span className="text-gray-400 font-light">Industries</span>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
                    <span className="text-slate-600 font-light">Defense</span>
                </div>

                <div className="max-w-4xl">
                    <div className="hero-badge mb-8 opacity-0">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-500/[0.08] border border-slate-500/[0.2]">
                            <div className="w-2 h-2 rounded-full bg-slate-500 animate-pulse"></div>
                            <span className="text-slate-700 text-[11px] font-light tracking-[0.25em] uppercase">Defense & National Security</span>
                        </div>
                    </div>

                    <h1 className="display-hero text-6xl lg:text-[6.5rem] mb-6 perspective-[1000px]">
                        <span className="block whitespace-nowrap">{renderText("Mission-Grade")}</span>
                        <span className="block whitespace-nowrap">{renderText("Intelligence.", true)}</span>
                    </h1>

                    <div className="overflow-hidden mb-4">
                        <p className="hero-sub-1 text-xl text-gray-500 font-light translate-y-full opacity-0">
                            AI that operates entirely within secure boundaries —<br />
                            air-gapped, explainable, and sovereign.
                        </p>
                    </div>

                    <div className="overflow-hidden mb-8">
                        <p className="hero-sub-2 text-[15px] text-gray-400 font-light leading-relaxed max-w-xl translate-y-full opacity-0">
                            Defense organizations operate where security breaches, data leakage, or unexplainable decisions are unacceptable.
                            AI adoption is constrained not by ambition — but by <span className="text-slate-700 font-normal">trust, control, and survivability</span>.
                        </p>
                    </div>

                    <div className="hero-tags flex flex-wrap gap-3 mb-10 opacity-0">
                        {["Air-Gapped Deployment", "Zero External Dependencies", "Full Auditability", "Long-Horizon Security"].map((tag, i) => (
                            <span key={i} className="px-4 py-2 rounded-full bg-slate-500/[0.08] border border-slate-500/[0.15] text-slate-700 text-sm font-light">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="hero-buttons flex items-center gap-4 opacity-0 translate-y-[30px]">
                        <div className="mag-btn">
                            <a href="#products" className="btn-inner inline-flex items-center gap-2 px-7 py-3.5 rounded-full hero-cta text-white text-[14px] font-normal group">
                                <span>View Products</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                        <div className="mag-btn">
                            <a href="#cta" className="btn-inner px-7 py-3.5 rounded-full bg-black/[0.05] border border-black/[0.1] text-gray-600 text-[14px] font-light hover:bg-black/[0.08] transition-all">
                                Secure Discussion
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
