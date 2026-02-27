"use client";

import { useEffect, useRef } from "react";
import { GitMerge } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function AgentMap() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".r-up", {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            gsap.to(".r-scale", {
                scale: 1,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-32 relative overflow-hidden" id="agentMap" ref={sectionRef}>
            <div className="relative max-w-6xl mx-auto px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.14] border border-emerald-500/[0.35] mb-6 r-up">
                        <GitMerge className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">How It Connects</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight r-up">
                        From Your Processes<br /><span className="text-gradient">to Deployed Agents.</span>
                    </h3>
                </div>

                <div className="diagram-container r-scale bg-white/70 border border-black/5 rounded-[24px] p-8 overflow-hidden">
                    <svg viewBox="0 0 900 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                        <defs>
                            <linearGradient id="mapStroke" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#10b981" />
                                <stop offset="50%" stopColor="#06b6d4" />
                                <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>
                        </defs>
                        <style>
                            {`
                                .flow-arrow {
                                    stroke-dasharray: 6 6;
                                    animation: mapFlowPulse 1s linear infinite;
                                }
                                @keyframes mapFlowPulse {
                                    0% { stroke-dashoffset: 12; }
                                    100% { stroke-dashoffset: 0; }
                                }
                            `}
                        </style>

                        {/* LEFT: Your Org Processes */}
                        <text x="20" y="22" fontFamily="Space Mono" fontSize="9" fill="rgba(0,0,0,0.55)" fontWeight="700" letterSpacing="1">YOUR ORGANIZATION</text>

                        <rect x="20" y="36" width="200" height="40" rx="10" fill="rgba(0,0,0,0.03)" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
                        <text x="40" y="61" fontFamily="Urbanist" fontSize="11" fill="rgba(0,0,0,0.65)" fontWeight="300">Knowledge Management</text>

                        <rect x="20" y="88" width="200" height="40" rx="10" fill="rgba(0,0,0,0.03)" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
                        <text x="40" y="113" fontFamily="Urbanist" fontSize="11" fill="rgba(0,0,0,0.65)" fontWeight="300">Financial Reporting</text>

                        <rect x="20" y="140" width="200" height="40" rx="10" fill="rgba(0,0,0,0.03)" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
                        <text x="40" y="165" fontFamily="Urbanist" fontSize="11" fill="rgba(0,0,0,0.65)" fontWeight="300">Strategic Research</text>

                        <rect x="20" y="192" width="200" height="40" rx="10" fill="rgba(0,0,0,0.03)" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
                        <text x="40" y="217" fontFamily="Urbanist" fontSize="11" fill="rgba(0,0,0,0.65)" fontWeight="300">Customer Support</text>

                        <rect x="20" y="244" width="200" height="40" rx="10" fill="rgba(0,0,0,0.03)" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
                        <text x="40" y="269" fontFamily="Urbanist" fontSize="11" fill="rgba(0,0,0,0.65)" fontWeight="300">Compliance Reviews</text>

                        {/* MIDDLE: Genovation Mapping Engine */}
                        <rect x="315" y="26" width="270" height="270" rx="20" fill="rgba(16,185,129,0.03)" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.4" />
                        <text x="340" y="52" fontFamily="Space Mono" fontSize="9" fill="#10b981" fontWeight="700" letterSpacing="1">GENOVATION STRATEGY</text>

                        {/* Inner mapping */}
                        <rect x="335" y="68" width="230" height="36" rx="8" fill="rgba(16,185,129,0.18)" stroke="#10b981" strokeWidth="1" strokeOpacity="0.35" />
                        <text x="355" y="91" fontFamily="Urbanist" fontSize="10" fill="#10b981" fontWeight="400">Process Discovery & Assessment</text>

                        <rect x="335" y="115" width="230" height="36" rx="8" fill="rgba(6,182,212,0.18)" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.35" />
                        <text x="355" y="138" fontFamily="Urbanist" fontSize="10" fill="#06b6d4" fontWeight="400">AI Opportunity Scoring</text>

                        <rect x="335" y="162" width="230" height="36" rx="8" fill="rgba(59,130,246,0.18)" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.35" />
                        <text x="355" y="185" fontFamily="Urbanist" fontSize="10" fill="#3b82f6" fontWeight="400">Agent Architecture Design</text>

                        <rect x="335" y="209" width="230" height="36" rx="8" fill="rgba(139,92,246,0.18)" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.35" />
                        <text x="355" y="232" fontFamily="Urbanist" fontSize="10" fill="#8b5cf6" fontWeight="400">Governance Rule Mapping</text>

                        <rect x="335" y="254" width="230" height="30" rx="8" fill="rgba(16,185,129,0.1)" />
                        <text x="355" y="274" fontFamily="Space Mono" fontSize="8" fill="rgba(0,0,0,0.55)" fontWeight="400">DELIVERABLE → DEPLOYMENT ROADMAP</text>

                        {/* RIGHT: Deployed Agents */}
                        <text x="680" y="22" fontFamily="Space Mono" fontSize="9" fill="rgba(0,0,0,0.55)" fontWeight="700" letterSpacing="1">DEPLOYED AGENTS</text>

                        <rect x="680" y="46" width="200" height="44" rx="12" fill="rgba(16,185,129,0.18)" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.5" />
                        <text x="700" y="65" fontFamily="Space Mono" fontSize="9" fill="#10b981" fontWeight="700">AEGIS</text>
                        <text x="700" y="80" fontFamily="Urbanist" fontSize="9" fill="rgba(0,0,0,0.6)" fontWeight="300">Knowledge Intelligence</text>

                        <rect x="680" y="102" width="200" height="44" rx="12" fill="rgba(6,182,212,0.18)" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.5" />
                        <text x="700" y="121" fontFamily="Space Mono" fontSize="9" fill="#06b6d4" fontWeight="700">ANALYTICA</text>
                        <text x="700" y="136" fontFamily="Urbanist" fontSize="9" fill="rgba(0,0,0,0.6)" fontWeight="300">Decision Intelligence</text>

                        <rect x="680" y="158" width="200" height="44" rx="12" fill="rgba(59,130,246,0.18)" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.5" />
                        <text x="700" y="177" fontFamily="Space Mono" fontSize="9" fill="#3b82f6" fontWeight="700">SOPHIA</text>
                        <text x="700" y="192" fontFamily="Urbanist" fontSize="9" fill="rgba(0,0,0,0.6)" fontWeight="300">Strategy & Research</text>

                        <rect x="680" y="214" width="200" height="44" rx="12" fill="rgba(139,92,246,0.18)" stroke="#8b5cf6" strokeWidth="1.5" strokeOpacity="0.5" />
                        <text x="700" y="233" fontFamily="Space Mono" fontSize="9" fill="#8b5cf6" fontWeight="700">CX AGENT</text>
                        <text x="700" y="248" fontFamily="Urbanist" fontSize="9" fill="rgba(0,0,0,0.6)" fontWeight="300">Customer Experience</text>

                        {/* JUDGE bar at bottom */}
                        <rect x="680" y="270" width="200" height="26" rx="8" fill="rgba(16,185,129,0.22)" stroke="#10b981" strokeWidth="1" strokeOpacity="0.4" />
                        <text x="700" y="288" fontFamily="Space Mono" fontSize="8" fill="#10b981" fontWeight="700">JUDGE</text>
                        <text x="745" y="288" fontFamily="Urbanist" fontSize="8" fill="rgba(0,0,0,0.55)" fontWeight="300">Governs all outputs</text>

                        {/* Arrows */}
                        <g className="arrows">
                            <line x1="225" y1="56" x2="310" y2="86" stroke="#10b981" strokeWidth="1" strokeOpacity="0.45" className="flow-arrow" />
                            <line x1="225" y1="108" x2="310" y2="133" stroke="#10b981" strokeWidth="1" strokeOpacity="0.45" className="flow-arrow" style={{ animationDelay: "-0.2s" }} />
                            <line x1="225" y1="160" x2="310" y2="160" stroke="#10b981" strokeWidth="1" strokeOpacity="0.45" className="flow-arrow" style={{ animationDelay: "-0.4s" }} />
                            <line x1="225" y1="212" x2="310" y2="186" stroke="#10b981" strokeWidth="1" strokeOpacity="0.45" className="flow-arrow" style={{ animationDelay: "-0.6s" }} />
                            <line x1="225" y1="264" x2="310" y2="227" stroke="#10b981" strokeWidth="1" strokeOpacity="0.45" className="flow-arrow" style={{ animationDelay: "-0.8s" }} />

                            <line x1="590" y1="86" x2="675" y2="68" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.5" className="flow-arrow" style={{ animationDelay: "-0.1s" }} />
                            <line x1="590" y1="133" x2="675" y2="124" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.5" className="flow-arrow" style={{ animationDelay: "-0.3s" }} />
                            <line x1="590" y1="180" x2="675" y2="180" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.5" className="flow-arrow" style={{ animationDelay: "-0.5s" }} />
                            <line x1="590" y1="227" x2="675" y2="236" stroke="#8b5cf6" strokeWidth="1.5" strokeOpacity="0.5" className="flow-arrow" style={{ animationDelay: "-0.7s" }} />
                        </g>

                        {/* Bottom timeline bar */}
                        <rect x="20" y="320" width="860" height="36" rx="10" fill="rgba(0,0,0,0.02)" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
                        <text x="40" y="343" fontFamily="Space Mono" fontSize="8" fill="rgba(0,0,0,0.65)" fontWeight="400">ASSESSMENT</text>
                        <rect x="155" y="332" width="1" height="12" fill="rgba(0,0,0,0.08)" />
                        <text x="170" y="343" fontFamily="Space Mono" fontSize="8" fill="rgba(0,0,0,0.65)" fontWeight="400">MAPPING</text>
                        <rect x="260" y="332" width="1" height="12" fill="rgba(0,0,0,0.08)" />
                        <text x="275" y="343" fontFamily="Space Mono" fontSize="8" fill="rgba(0,0,0,0.65)" fontWeight="400">ARCHITECTURE</text>
                        <rect x="398" y="332" width="1" height="12" fill="rgba(0,0,0,0.08)" />
                        <text x="413" y="343" fontFamily="Space Mono" fontSize="8" fill="rgba(0,0,0,0.65)" fontWeight="400">DEPLOYMENT</text>
                        <rect x="530" y="332" width="1" height="12" fill="rgba(0,0,0,0.08)" />
                        <text x="545" y="343" fontFamily="Space Mono" fontSize="8" fill="rgba(0,0,0,0.15)" fontWeight="400">→ PRODUCTION INTELLIGENCE</text>
                    </svg>
                </div>
            </div>
        </section>
    );
}
