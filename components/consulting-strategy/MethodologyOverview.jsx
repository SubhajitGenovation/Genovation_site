"use client";

import { useEffect, useRef } from "react";
import { GitPullRequest } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function MethodologyOverview() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".meth-container", {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            gsap.to(".phase-box", {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".meth-container",
                    start: "top 70%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-20 relative overflow-hidden" id="methOverview" ref={sectionRef}>
            <div className="relative max-w-6xl mx-auto px-8">
                <div className="meth-container opacity-0 scale-[0.98] translate-y-4 bg-white/40 border border-black/5 rounded-[32px] p-8 md:p-12 backdrop-blur-sm shadow-[0_30px_60px_-20px_rgba(0,0,0,0.05)]">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.14] border border-emerald-500/[0.35] mb-6">
                            <GitPullRequest className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">Our Methodology</span>
                        </div>
                        <h2 className="display-section text-4xl md:text-5xl mb-4 font-light tracking-tight">
                            End-to-End in <span className="text-gradient">Eight Weeks.</span>
                        </h2>
                        <p className="text-[14px] text-gray-700 font-light max-w-lg mx-auto leading-relaxed">
                            Four overlapping phases — each producing concrete deliverables — take you from initial discovery to a production-ready deployment roadmap.
                        </p>
                    </div>

                    <div className="relative overflow-x-auto pb-4 scrollbar-hide">
                        <svg viewBox="0 0 960 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[960px] lg:w-full min-w-[960px]">
                            <style>
                                {`
                                        .flow-arrow {
                                            stroke-dasharray: 6 6;
                                            animation: methFlowPulse 1s linear infinite;
                                        }
                                        @keyframes methFlowPulse {
                                            0% { stroke-dashoffset: 12; }
                                            100% { stroke-dashoffset: 0; }
                                        }
                                    `}
                            </style>
                            {/* Phase boxes */}
                            <rect x="20" y="40" width="190" height="100" rx="16" fill="rgba(16,185,129,0.08)" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" className="phase-box opacity-0 translate-y-4" />
                            <rect x="265" y="40" width="190" height="100" rx="16" fill="rgba(6,182,212,0.08)" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.3" className="phase-box opacity-0 translate-y-4" />
                            <rect x="510" y="40" width="190" height="100" rx="16" fill="rgba(59,130,246,0.08)" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.3" className="phase-box opacity-0 translate-y-4" />
                            <rect x="755" y="40" width="185" height="100" rx="16" fill="rgba(139,92,246,0.08)" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.3" className="phase-box opacity-0 translate-y-4" />

                            {/* ... rest of SVG ... */}
                            {/* Phase numbers */}
                            <text x="44" y="72" className="font-mono text-[11px] font-bold fill-emerald-500">01</text>
                            <text x="289" y="72" className="font-mono text-[11px] font-bold fill-cyan-500">02</text>
                            <text x="534" y="72" className="font-mono text-[11px] font-bold fill-blue-500">03</text>
                            <text x="779" y="72" className="font-mono text-[11px] font-bold fill-violet-500">04</text>

                            {/* Phase titles */}
                            <text x="66" y="72" className="font-sans text-[12px] font-light fill-[#1a1a2e]">Discovery</text>
                            <text x="311" y="72" className="font-sans text-[12px] font-light fill-[#1a1a2e]">Opportunity Mapping</text>
                            <text x="556" y="72" className="font-sans text-[12px] font-light fill-[#1a1a2e]">Architecture</text>
                            <text x="801" y="72" className="font-sans text-[12px] font-light fill-[#1a1a2e]">Enablement</text>

                            {/* Phase descriptions */}
                            <g className="font-sans text-[10px] font-light fill-gray-500">
                                <text x="44" y="95">Interviews · Shadowing</text>
                                <text x="44" y="110">Process documentation</text>
                                <text x="44" y="125">Infra audit</text>

                                <text x="289" y="95">AI scoring · Prioritization</text>
                                <text x="289" y="110">Data readiness check</text>
                                <text x="289" y="125">Risk analysis</text>

                                <text x="534" y="95">Agent-process mapping</text>
                                <text x="534" y="110">JUDGE governance rules</text>
                                <text x="534" y="125">Data flow design</text>

                                <text x="779" y="95">Roadmap & milestones</text>
                                <text x="779" y="110">Change management</text>
                                <text x="779" y="125">Executive brief</text>
                            </g>

                            {/* Connectors */}
                            <g className="flow-arrows">
                                <line x1="215" y1="90" x2="260" y2="90" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.6" className="flow-arrow" />
                                <polygon points="258,86 266,90 258,94" fill="#10b981" fillOpacity="0.5" />

                                <line x1="460" y1="90" x2="505" y2="90" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.6" className="flow-arrow" style={{ animationDelay: "-0.3s" }} />
                                <polygon points="503,86 511,90 503,94" fill="#06b6d4" fillOpacity="0.5" />

                                <line x1="705" y1="90" x2="750" y2="90" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.6" className="flow-arrow" style={{ animationDelay: "-0.6s" }} />
                                <polygon points="748,86 756,90 748,94" fill="#3b82f6" fillOpacity="0.5" />
                            </g>

                            {/* Week labels */}
                            <g className="font-mono text-[9px] fill-gray-400 text-anchor-middle">
                                <text x="115" y="164" textAnchor="middle">WEEK 1–2</text>
                                <text x="360" y="164" textAnchor="middle">WEEK 2–4</text>
                                <text x="605" y="164" textAnchor="middle">WEEK 4–6</text>
                                <text x="847" y="164" textAnchor="middle">WEEK 6–8</text>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
