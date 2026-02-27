"use client";

import { useEffect, useRef } from "react";
import { Shuffle, ArrowDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Transformation() {
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
                    start: "top 80%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-40 relative overflow-hidden" id="transformation" ref={sectionRef}>
            <div className="absolute inset-0 mesh-bg opacity-15"></div>
            <div className="orb w-[500px] h-[400px] bg-cyan-500/[0.04] absolute" style={{ top: "5%", left: "10%" }}></div>

            <div className="relative max-w-6xl mx-auto px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/[0.14] border border-cyan-500/[0.35] mb-8 r-up">
                        <Shuffle className="w-3 h-3 text-cyan-600" />
                        <span className="text-cyan-600 text-[11px] font-light tracking-[0.25em] uppercase">Before & After</span>
                    </div>
                    <h2 className="display-section text-5xl md:text-7xl r-up font-light tracking-tight">
                        The <span className="text-gradient">Transformation.</span>
                    </h2>
                    <p className="text-[15px] text-gray-800 font-light mt-6 max-w-2xl mx-auto leading-relaxed r-up">
                        This is what changes when you lead with strategy instead of tooling. Disconnected AI experiments become a
                        governed, architected system that maps cleanly to how your organization actually works.
                    </p>
                </div>

                {/* BEFORE --- full width */}
                <div className="diagram-container r-up mb-8 bg-white/70 border rounded-[24px] p-8 overflow-hidden" style={{ borderColor: "rgba(239,68,68,0.25)" }}>
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <span className="text-[11px] font-mono text-red-400 tracking-[0.2em] uppercase">Without Strategy</span>
                        <span className="text-[12px] text-gray-500 font-light ml-2">— Disconnected, ungoverned, stalled</span>
                    </div>
                    <svg viewBox="0 0 900 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                        {/* Scattered nodes --- chaos */}
                        <rect x="30" y="20" width="140" height="48" rx="10" fill="rgba(239,68,68,0.12)" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.4" />
                        <text x="55" y="50" fontFamily="Urbanist" fontSize="12" fill="rgba(0,0,0,0.65)" fontWeight="300">Sales Team</text>

                        <rect x="240" y="8" width="160" height="48" rx="10" fill="rgba(239,68,68,0.12)" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.4" />
                        <text x="270" y="38" fontFamily="Urbanist" fontSize="12" fill="rgba(0,0,0,0.65)" fontWeight="300">Finance Ops</text>

                        <rect x="500" y="25" width="140" height="48" rx="10" fill="rgba(239,68,68,0.12)" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.4" />
                        <text x="522" y="55" fontFamily="Urbanist" fontSize="12" fill="rgba(0,0,0,0.65)" fontWeight="300">Legal / GRC</text>

                        <rect x="710" y="15" width="160" height="48" rx="10" fill="rgba(239,68,68,0.12)" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.4" />
                        <text x="735" y="45" fontFamily="Urbanist" fontSize="12" fill="rgba(0,0,0,0.65)" fontWeight="300">Engineering</text>

                        <rect x="80" y="110" width="150" height="48" rx="10" fill="rgba(239,68,68,0.12)" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.4" />
                        <text x="100" y="140" fontFamily="Urbanist" fontSize="12" fill="rgba(0,0,0,0.65)" fontWeight="300">Customer Ops</text>

                        <rect x="620" y="105" width="160" height="48" rx="10" fill="rgba(239,68,68,0.12)" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.4" />
                        <text x="642" y="135" fontFamily="Urbanist" fontSize="12" fill="rgba(0,0,0,0.65)" fontWeight="300">Research Team</text>

                        {/* AI blob --- disconnected */}
                        <rect x="340" y="90" width="160" height="80" rx="16" fill="rgba(239,68,68,0.14)" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.45" strokeDasharray="6 6" />
                        <text x="375" y="125" fontFamily="Space Mono" fontSize="14" fill="#ef4444" fontWeight="700">AI ???</text>
                        <text x="370" y="148" fontFamily="Urbanist" fontSize="11" fill="rgba(239,68,68,0.5)" fontWeight="300">No clear fit anywhere</text>

                        {/* Disconnected lines */}
                        <line x1="170" y1="44" x2="340" y2="110" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
                        <line x1="400" y1="32" x2="400" y2="90" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
                        <line x1="500" y1="49" x2="470" y2="95" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
                        <line x1="230" y1="134" x2="340" y2="134" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
                        <line x1="500" y1="134" x2="620" y2="129" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
                        <line x1="710" y1="39" x2="500" y2="105" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />

                        {/* X marks on connectors */}
                        <g transform="translate(249,71)">
                            <line x1="0" y1="0" x2="12" y2="12" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.4" />
                            <line x1="12" y1="0" x2="0" y2="12" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.4" />
                        </g>
                        <g transform="translate(394,55)">
                            <line x1="0" y1="0" x2="12" y2="12" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.4" />
                            <line x1="12" y1="0" x2="0" y2="12" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.4" />
                        </g>
                        <g transform="translate(479,66)">
                            <line x1="0" y1="0" x2="12" y2="12" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.4" />
                            <line x1="12" y1="0" x2="0" y2="12" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.4" />
                        </g>
                        <g transform="translate(279,128)">
                            <line x1="0" y1="0" x2="12" y2="12" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.4" />
                            <line x1="12" y1="0" x2="0" y2="12" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.4" />
                        </g>
                        <g transform="translate(554,125.5)">
                            <line x1="0" y1="0" x2="12" y2="12" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.4" />
                            <line x1="12" y1="0" x2="0" y2="12" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.4" />
                        </g>
                        <g transform="translate(599,66)">
                            <line x1="0" y1="0" x2="12" y2="12" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.4" />
                            <line x1="12" y1="0" x2="0" y2="12" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.4" />
                        </g>

                        {/* Bottom summary */}
                        <rect x="160" y="210" width="580" height="52" rx="12" fill="rgba(239,68,68,0.03)" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.1" />
                        <text x="450" y="234" textAnchor="middle" fontFamily="Urbanist" fontSize="12" fill="rgba(0,0,0,0.65)" fontWeight="300">No process mapping · No governance · No data topology · No adoption plan</text>
                        <text x="450" y="252" textAnchor="middle" fontFamily="Urbanist" fontSize="11" fill="rgba(239,68,68,0.4)" fontWeight="300">Result: stalled adoption, distrusted outputs, zero ROI</text>
                    </svg>
                </div>

                {/* Arrow between diagrams */}
                <div className="flex justify-center my-4 r-up">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/[0.16] border border-emerald-500/[0.35] flex items-center justify-center">
                        <ArrowDown className="w-5 h-5 text-emerald-600" />
                    </div>
                </div>

                {/* AFTER --- full width */}
                <div className="diagram-container r-up mt-4 bg-white/70 border rounded-[24px] p-8 overflow-hidden" style={{ borderColor: "rgba(16,185,129,0.3)" }}>
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-[11px] font-mono text-emerald-600 tracking-[0.2em] uppercase">With Genovation Strategy</span>
                        <span className="text-[12px] text-gray-500 font-light ml-2">— Mapped, governed, production-ready</span>
                    </div>
                    <svg viewBox="0 0 900 310" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                        <style>
                            {`
                                .flow-arrow {
                                    stroke-dasharray: 6 6;
                                    animation: flowPulse 1s linear infinite;
                                }
                                @keyframes flowPulse {
                                    0% { stroke-dashoffset: 12; }
                                    100% { stroke-dashoffset: 0; }
                                }
                            `}
                        </style>
                        {/* Process Layer */}
                        <rect x="30" y="10" width="840" height="60" rx="14" fill="rgba(16,185,129,0.1)" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.4" />
                        <text x="55" y="34" fontFamily="Space Mono" fontSize="10" fill="#10b981" fontWeight="700" letterSpacing="1.5">PROCESS LAYER</text>
                        <rect x="55" y="44" width="100" height="18" rx="5" fill="rgba(16,185,129,0.22)" /><text x="72" y="57" fontFamily="Urbanist" fontSize="10" fill="rgba(0,0,0,0.65)">Sales</text>
                        <rect x="170" y="44" width="110" height="18" rx="5" fill="rgba(16,185,129,0.22)" /><text x="187" y="57" fontFamily="Urbanist" fontSize="10" fill="rgba(0,0,0,0.65)">Finance</text>
                        <rect x="295" y="44" width="90" height="18" rx="5" fill="rgba(16,185,129,0.22)" /><text x="315" y="57" fontFamily="Urbanist" fontSize="10" fill="rgba(0,0,0,0.65)">Legal</text>
                        <rect x="400" y="44" width="120" height="18" rx="5" fill="rgba(16,185,129,0.22)" /><text x="417" y="57" fontFamily="Urbanist" fontSize="10" fill="rgba(0,0,0,0.65)">Engineering</text>
                        <rect x="535" y="44" width="140" height="18" rx="5" fill="rgba(16,185,129,0.22)" /><text x="552" y="57" fontFamily="Urbanist" fontSize="10" fill="rgba(0,0,0,0.65)">Customer Ops</text>
                        <rect x="690" y="44" width="120" height="18" rx="5" fill="rgba(16,185,129,0.22)" /><text x="707" y="57" fontFamily="Urbanist" fontSize="10" fill="rgba(0,0,0,0.65)">Research</text>

                        {/* Arrows down */}
                        <line x1="105" y1="70" x2="105" y2="95" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.5" className="flow-arrow" />
                        <line x1="225" y1="70" x2="225" y2="95" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.5" className="flow-arrow" style={{ animationDelay: "-0.15s" }} />
                        <line x1="340" y1="70" x2="340" y2="95" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.5" className="flow-arrow" style={{ animationDelay: "-0.3s" }} />
                        <line x1="460" y1="70" x2="460" y2="95" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.5" className="flow-arrow" style={{ animationDelay: "-0.45s" }} />
                        <line x1="605" y1="70" x2="605" y2="95" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.5" className="flow-arrow" style={{ animationDelay: "-0.6s" }} />
                        <line x1="750" y1="70" x2="750" y2="95" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.5" className="flow-arrow" style={{ animationDelay: "-0.75s" }} />

                        {/* Agent Layer */}
                        <rect x="30" y="95" width="840" height="60" rx="14" fill="rgba(6,182,212,0.1)" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.4" />
                        <text x="55" y="119" fontFamily="Space Mono" fontSize="10" fill="#06b6d4" fontWeight="700" letterSpacing="1.5">AGENT LAYER — MENTIS</text>
                        <rect x="55" y="129" width="100" height="18" rx="5" fill="rgba(6,182,212,0.22)" /><text x="72" y="142" fontFamily="Urbanist" fontSize="10" fill="rgba(0,0,0,0.65)">Aegis</text>
                        <rect x="170" y="129" width="120" height="18" rx="5" fill="rgba(6,182,212,0.22)" /><text x="187" y="142" fontFamily="Urbanist" fontSize="10" fill="rgba(0,0,0,0.65)">Analytica</text>
                        <rect x="305" y="129" width="100" height="18" rx="5" fill="rgba(6,182,212,0.22)" /><text x="322" y="142" fontFamily="Urbanist" fontSize="10" fill="rgba(0,0,0,0.65)">Sophia</text>
                        <rect x="420" y="129" width="110" height="18" rx="5" fill="rgba(6,182,212,0.22)" /><text x="437" y="142" fontFamily="Urbanist" fontSize="10" fill="rgba(0,0,0,0.65)">Custom</text>
                        <rect x="545" y="129" width="120" height="18" rx="5" fill="rgba(6,182,212,0.22)" /><text x="562" y="142" fontFamily="Urbanist" fontSize="10" fill="rgba(0,0,0,0.65)">CX Agent</text>
                        <rect x="680" y="129" width="130" height="18" rx="5" fill="rgba(6,182,212,0.22)" /><text x="697" y="142" fontFamily="Urbanist" fontSize="10" fill="rgba(0,0,0,0.65)">Orchestrator</text>

                        {/* Arrow down to JUDGE */}
                        <line x1="450" y1="155" x2="450" y2="180" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.5" className="flow-arrow" style={{ animationDelay: "-0.3s" }} />

                        {/* JUDGE Layer */}
                        <rect x="200" y="180" width="500" height="46" rx="12" fill="rgba(16,185,129,0.18)" stroke="#10b981" strokeWidth="2" strokeOpacity="0.5" />
                        <text x="230" y="206" fontFamily="Space Mono" fontSize="12" fill="#10b981" fontWeight="700" letterSpacing="1.5">JUDGE</text>
                        <text x="305" y="206" fontFamily="Urbanist" fontSize="11" fill="rgba(0,0,0,0.6)" fontWeight="300">— Governance · 5-Gate Verification · Immutable Audit Trail</text>

                        {/* Arrow down to Data */}
                        <line x1="450" y1="226" x2="450" y2="248" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.5" className="flow-arrow" style={{ animationDelay: "-0.5s" }} />

                        {/* Data Layer */}
                        <rect x="30" y="248" width="840" height="52" rx="14" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.4" />
                        <text x="55" y="272" fontFamily="Space Mono" fontSize="10" fill="#3b82f6" fontWeight="700" letterSpacing="1.5">DATA LAYER — CIPHERVAULT</text>
                        <rect x="55" y="280" width="120" height="14" rx="4" fill="rgba(59,130,246,0.18)" /><text x="67" y="291" fontFamily="Urbanist" fontSize="9" fill="rgba(0,0,0,0.6)">On-Prem DBs</text>
                        <rect x="190" y="280" width="110" height="14" rx="4" fill="rgba(59,130,246,0.18)" /><text x="202" y="291" fontFamily="Urbanist" fontSize="9" fill="rgba(0,0,0,0.6)">Documents</text>
                        <rect x="315" y="280" width="80" height="14" rx="4" fill="rgba(59,130,246,0.18)" /><text x="332" y="291" fontFamily="Urbanist" fontSize="9" fill="rgba(0,0,0,0.6)">APIs</text>
                        <rect x="410" y="280" width="140" height="14" rx="4" fill="rgba(59,130,246,0.18)" /><text x="422" y="291" fontFamily="Urbanist" fontSize="9" fill="rgba(0,0,0,0.6)">Legacy Systems</text>
                        <rect x="565" y="280" width="100" height="14" rx="4" fill="rgba(59,130,246,0.18)" /><text x="577" y="291" fontFamily="Urbanist" fontSize="9" fill="rgba(0,0,0,0.6)">Data Lakes</text>
                        <rect x="680" y="280" width="130" height="14" rx="4" fill="rgba(59,130,246,0.18)" /><text x="692" y="291" fontFamily="Urbanist" fontSize="9" fill="rgba(0,0,0,0.6)">Third-Party Feeds</text>

                        {/* Checkmarks on right edge */}
                        <circle cx="878" cy="40" r="8" fill="rgba(16,185,129,0.18)" /><text x="874" y="44" fontSize="10" fill="#10b981">✓</text>
                        <circle cx="878" cy="125" r="8" fill="rgba(6,182,212,0.18)" /><text x="874" y="129" fontSize="10" fill="#06b6d4">✓</text>
                        <circle cx="878" cy="203" r="8" fill="rgba(16,185,129,0.18)" /><text x="874" y="207" fontSize="10" fill="#10b981">✓</text>
                        <circle cx="878" cy="274" r="8" fill="rgba(59,130,246,0.18)" /><text x="874" y="278" fontSize="10" fill="#3b82f6">✓</text>
                    </svg>
                </div>
            </div>
        </section>
    );
}
