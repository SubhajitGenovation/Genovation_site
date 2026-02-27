// components/Hero.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, PlayCircle, ShieldCheck } from "lucide-react";

export default function Hero() {
    const titleRef = useRef(null);
    const badgeRef = useRef(null);
    const subRef = useRef(null);
    const buttonsRef = useRef(null);
    const statsRef = useRef(null);
    const scrollCueRef = useRef(null);

    useEffect(() => {
        // Kill any existing animations on remount
        gsap.killTweensOf("*");

        const tl = gsap.timeline({ delay: 0.3 });

        tl
            // Badge
            .to(badgeRef.current, {
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
            })

            // First line characters
            .to(
                ".hero-line-1 .char",
                {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    skewX: 0,
                    stagger: 0.03,
                    duration: 1,
                    ease: "power4.out",
                },
                "-=0.4"
            )

            // Second line characters (gradient)
            .to(
                ".hero-line-2 .char",
                {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    skewX: 0,
                    stagger: 0.03,
                    duration: 1,
                    ease: "power4.out",
                },
                "-=0.7"
            )

            // Divider
            .to(
                ".hero-divider",
                {
                    opacity: 1,
                    duration: 0.6,
                    ease: "power2.out",
                },
                "-=0.3"
            )

            // Subtitle
            .to(
                subRef.current,
                {
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                },
                "-=0.3"
            )

            // Buttons
            .to(
                buttonsRef.current,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.5"
            )

            // Stats
            .to(
                statsRef.current,
                {
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                },
                "-=0.3"
            )

            // Scroll cue
            .to(
                scrollCueRef.current,
                {
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                },
                "-=0.3"
            );
    }, []);

    // Helper to split text into characters for animation
    const splitIntoChars = (text, lineClass) => {
        return text.split("").map((char, i) => (
            <span
                key={`${char}-${i}`}
                className={`char inline-block opacity-0 translate-y-[100%] rotate-x-[-90deg] skew-x-[-8deg] origin-bottom ${lineClass === 'hero-line-2' ? 'bg-gradient-to-r from-[#059669] via-[#0891b2] to-[#2563eb] bg-clip-text text-transparent' : ''}`}
            >
                {char === " " ? "\u00A0" : char}
            </span>
        ));
    };

    return (
        <section
            className="relative min-h-[130vh] flex items-center justify-center overflow-hidden bg-[#f5f3f0]"
            id="hero"
            style={{ perspective: '1000px' }}
        >
            {/* Main content container */}
            <div
                className="relative max-w-6xl mx-auto px-8 text-center"
                id="heroContent"
                ref={titleRef}
            >
                {/* Badge */}
                <div
                    className="mb-12 opacity-0"
                    id="heroBadge"
                    ref={badgeRef}
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#10b981]/10 border border-[#10b981]/20">
                        <ShieldCheck className="w-3 h-3 text-[#10b981]" />
                        <span className="text-[#10b981] text-[11px] font-light tracking-[0.25em] uppercase">
                            Sovereign Enterprise AI
                        </span>
                    </div>
                </div>

                {/* Main headline */}
                <h1
                    className="font-light text-[#1a1a2e] text-7xl md:text-[8rem] lg:text-[9.5rem] mb-10 tracking-[-0.05em] leading-[0.95]"
                    id="heroTitle"
                    style={{ perspective: '1000px' }}
                >
                    <span className="hero-line-1">
                        {splitIntoChars("Sovereign AI.", 'hero-line-1')}
                    </span>
                    <br />
                    <span className="hero-line-2">
                        {splitIntoChars("Private by Design.", 'hero-line-2')}
                    </span>
                </h1>

                {/* Divider dots */}
                <div
                    className="flex items-center justify-center gap-4 mb-10 opacity-0 hero-divider"
                    id="heroDivider"
                >
                    <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#10b981]/40" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]/60" />
                    <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#10b981]/40" />
                </div>

                {/* Subtitle */}
                <div className="overflow-hidden mb-14" id="heroSub1">
                    <p
                        ref={subRef}
                        className="text-xl md:text-[1.65rem] text-[#4b5563] font-light tracking-[-0.01em] leading-[1.4] translate-y-full"
                    >
                        Secured. Verified. Sovereign.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-5 opacity-0"
                    id="heroButtons"
                    ref={buttonsRef}
                >
                    <a
                        href="/product-home"
                        className="group relative px-9 py-4 rounded-full bg-gradient-to-r from-[#10b981] via-[#06b6d4] to-[#10b981] bg-[length:200%_100%] text-black text-[15px] font-medium flex items-center gap-3 overflow-hidden hover:bg-[position:100%_0] hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.25),0_0_80px_-15px_rgba(6,182,212,0.15),0_8px_30px_-10px_rgba(0,0,0,0.1)] hover:translate-y-[-2px] transition-all duration-400"
                    >
                        <span className="relative z-10 flex items-center gap-3">Explore Platform</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </a>

                    <button
                        className="group px-9 py-4 rounded-full border border-[rgba(0,0,0,0.12)] bg-[rgba(0,0,0,0.05)] text-[#4b5563] text-[15px] font-light flex items-center gap-3 hover:border-[rgba(52,211,153,0.25)] hover:text-[#1a1a2e] hover:bg-[rgba(0,0,0,0.05)] transition-all duration-400 backdrop-blur-sm"
                    >
                        <PlayCircle className="w-4 h-4 text-[#10b981] group-hover:text-[#10b981]/90 transition-colors" />
                        Watch Demo
                    </button>
                </div>

                {/* Stats row */}
                <div
                    className="flex items-center justify-center gap-12 mt-20 opacity-0"
                    id="heroStats"
                    ref={statsRef}
                >
                    <div className="text-center">
                        <div className="text-3xl font-light text-[#10b981]">100%</div>
                        <div className="text-[10px] text-[#4b5563] font-light tracking-widest uppercase mt-1">
                            On-Premise
                        </div>
                    </div>
                    <div className="w-px h-10 bg-[rgba(0,0,0,0.06)]" />
                    <div className="text-center">
                        <div className="text-3xl font-light text-[#06b6d4]">&lt;50ms</div>
                        <div className="text-[10px] text-[#4b5563] font-light tracking-widest uppercase mt-1">
                            Response
                        </div>
                    </div>
                    <div className="w-px h-10 bg-[rgba(0,0,0,0.06)]" />
                    <div className="text-center">
                        <div className="text-3xl font-light text-[#3b82f6]">Zero</div>
                        <div className="text-[10px] text-[#4b5563] font-light tracking-widest uppercase mt-1">
                            External APIs
                        </div>
                    </div>
                    <div className="w-px h-10 bg-[rgba(0,0,0,0.06)]" />
                    <div className="text-center">
                        <div className="text-3xl font-light text-[#8b5cf6]">JUDGE</div>
                        <div className="text-[10px] text-[#4b5563] font-light tracking-widest uppercase mt-1">
                            Verified
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator at bottom */}
            <div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0"
                id="scrollCue"
                ref={scrollCueRef}
            >
                <span className="text-[10px] text-[#4b5563] font-light tracking-[0.4em] uppercase">Scroll</span>
                <div className="w-[1px] h-16 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#10b981]/60 to-transparent animate-bounce" />
                </div>
            </div>
        </section>
    );
}