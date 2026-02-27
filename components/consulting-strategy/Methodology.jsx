"use client";

import { useEffect, useRef } from "react";
import { Layers, FileText, GitBranch, Target, Shield, Cpu, Network, Map, Presentation } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const phases = [
    {
        num: "01",
        time: "Week 1–2",
        title: "Organizational Discovery",
        desc: "We embed with your team. We interview stakeholders across functions, shadow workflows, audit existing tooling, and map every decision chain that could be augmented by intelligence.",
        items: [
            "Stakeholder interviews across 5–8 functional areas",
            "Workflow shadowing and process documentation",
            "Current tooling and data infrastructure audit",
            "Pain point identification and decision-chain mapping"
        ],
        deliverables: [
            { icon: <FileText className="w-3 h-3" />, text: "Process Atlas" },
            { icon: <GitBranch className="w-3 h-3" />, text: "Decision Chain Map" }
        ],
        color: "emerald",
        dataColor: "emerald"
    },
    {
        num: "02",
        time: "Week 2–4",
        title: "AI Opportunity Mapping",
        desc: "Using the discovery outputs, we identify where agentic AI creates real leverage — and where it doesn't. We score each opportunity on impact, feasibility, data readiness, and governance risk.",
        items: [
            "Process-by-process AI opportunity scoring",
            "Data readiness assessment per use case",
            "Impact vs. effort prioritization matrix",
            "Governance and compliance risk analysis"
        ],
        deliverables: [
            { icon: <Target className="w-3 h-3" />, text: "Opportunity Matrix" },
            { icon: <Shield className="w-3 h-3" />, text: "Risk Assessment" }
        ],
        color: "cyan",
        dataColor: "cyan"
    },
    {
        num: "03",
        time: "Week 4–6",
        title: "Architecture & Agent Design",
        desc: "We design the agentic architecture — which Mentis agents map to which processes, how JUDGE governs each output, where CipherVault secures each data flow, and how the system integrates into your existing infrastructure.",
        items: [
            "Agent-to-process mapping and orchestration design",
            "JUDGE governance rules per workflow",
            "Data flow architecture and CipherVault integration",
            "Infrastructure compatibility and deployment model"
        ],
        deliverables: [
            { icon: <Cpu className="w-3 h-3" />, text: "Agent Blueprint" },
            { icon: <Network className="w-3 h-3" />, text: "Integration Spec" }
        ],
        color: "blue",
        dataColor: "blue"
    },
    {
        num: "04",
        time: "Week 6–8",
        title: "Roadmap & Enablement",
        desc: "We deliver a phased deployment roadmap — what ships first, what scales next, what metrics define success, and how your teams are trained to operate and trust the system.",
        items: [
            "Phased rollout plan with milestones and KPIs",
            "Change management and internal enablement program",
            "Success metrics and measurement framework",
            "Executive-ready strategy presentation"
        ],
        deliverables: [
            { icon: <Map className="w-3 h-3" />, text: "Deployment Roadmap" },
            { icon: <Presentation className="w-3 h-3" />, text: "Executive Deck" }
        ],
        color: "violet",
        dataColor: "violet"
    }
];

export default function Methodology() {
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
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-40 relative overflow-hidden" id="approach" ref={sectionRef}>
            <div className="absolute inset-0 mesh-bg opacity-15"></div>
            <div className="orb w-[600px] h-[500px] bg-emerald-500/[0.05] absolute" style={{ top: "10%", left: "5%" }}></div>
            <div className="orb w-[400px] h-[300px] bg-violet-500/[0.04] absolute" style={{ bottom: "15%", right: "10%" }}></div>

            <div className="relative max-w-6xl mx-auto px-8">
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.14] border border-emerald-500/[0.35] mb-8 r-up">
                        <Layers className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">Four-Phase Methodology</span>
                    </div>
                    <h2 className="display-section text-5xl md:text-7xl r-up font-light tracking-tight mb-6">
                        Strategy First.<br /><span className="text-gradient">Technology Second.</span>
                    </h2>
                    <p className="text-[15px] text-gray-800 font-light mt-6 max-w-2xl mx-auto leading-relaxed r-up">
                        Every engagement follows a rigorous four-phase methodology designed to eliminate guesswork and produce a
                        deployment blueprint grounded in your operational reality.
                    </p>
                </div>

                {/* Engagement Timeline SVG --- matching HTML exactly */}
                <div className="diagram-container mb-16 r-up bg-white/70 border border-black/5 rounded-[24px] p-8 overflow-hidden">
                    <div className="flex items-center gap-2 mb-8">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-[10px] font-mono text-gray-500 tracking-[0.2em] uppercase">8-Week Engagement Timeline</span>
                    </div>
                    <svg viewBox="0 0 900 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                        {/* Week headers */}
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((w, i) => (
                            <text key={i} x={90 + i * 103} y="20" fontFamily="Space Mono" fontSize="8" fill="rgba(0,0,0,0.45)" textAnchor="middle">W{w}</text>
                        ))}

                        {/* Grid lines */}
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
                            <line key={i} x1={39 + i * 103} y1="28" x2={39 + i * 103} y2="185" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
                        ))}

                        {/* Overlap highlights */}
                        <rect x="142" y="30" width="103" height="155" fill="rgba(16,185,129,0.025)" />
                        <rect x="348" y="30" width="103" height="155" fill="rgba(6,182,212,0.02)" />
                        <rect x="554" y="30" width="103" height="155" fill="rgba(139,92,246,0.02)" />

                        {/* Phase 1 bar */}
                        <text x="14" y="55" fontFamily="Space Mono" fontSize="8" fill="#10b981" fontWeight="700">01</text>
                        <rect x="39" y="42" width="206" height="24" rx="6" fill="rgba(16,185,129,0.18)" stroke="#10b981" strokeWidth="1" strokeOpacity="0.5" />
                        <text x="52" y="58" fontFamily="Urbanist" fontSize="10" fill="#10b981" fontWeight="400">Discovery</text>
                        <circle cx="236" cy="54" r="4" fill="#10b981" fillOpacity="0.3" /><text x="248" y="58" fontFamily="Urbanist" fontSize="8" fill="rgba(0,0,0,0.55)">Process Atlas</text>

                        {/* Phase 2 bar */}
                        <text x="14" y="95" fontFamily="Space Mono" fontSize="8" fill="#06b6d4" fontWeight="700">02</text>
                        <rect x="142" y="82" width="258" height="24" rx="6" fill="rgba(6,182,212,0.18)" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.5" />
                        <text x="155" y="98" fontFamily="Urbanist" fontSize="10" fill="#06b6d4" fontWeight="400">Opportunity Mapping</text>
                        <circle cx="390" cy="94" r="4" fill="#06b6d4" fillOpacity="0.3" /><text x="402" y="98" fontFamily="Urbanist" fontSize="8" fill="rgba(0,0,0,0.55)">Opp Matrix</text>

                        {/* Phase 3 bar */}
                        <text x="14" y="135" fontFamily="Space Mono" fontSize="8" fill="#3b82f6" fontWeight="700">03</text>
                        <rect x="348" y="122" width="258" height="24" rx="6" fill="rgba(59,130,246,0.18)" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.5" />
                        <text x="361" y="138" fontFamily="Urbanist" fontSize="10" fill="#3b82f6" fontWeight="400">Architecture & Agent Design</text>
                        <circle cx="596" cy="134" r="4" fill="#3b82f6" fillOpacity="0.3" /><text x="608" y="138" fontFamily="Urbanist" fontSize="8" fill="rgba(0,0,0,0.55)">Blueprint</text>

                        {/* Phase 4 bar */}
                        <text x="14" y="175" fontFamily="Space Mono" fontSize="8" fill="#8b5cf6" fontWeight="700">04</text>
                        <rect x="554" y="162" width="308" height="24" rx="6" fill="rgba(139,92,246,0.18)" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.5" />
                        <text x="567" y="178" fontFamily="Urbanist" fontSize="10" fill="#8b5cf6" fontWeight="400">Roadmap & Enablement</text>
                        <circle cx="850" cy="174" r="4" fill="#8b5cf6" fillOpacity="0.3" /><text x="856" y="178" fontFamily="Urbanist" fontSize="8" fill="rgba(0,0,0,0.55)">✓</text>
                    </svg>
                </div>

                <div className="grid md:grid-cols-2 gap-6 phase-grid">
                    {phases.map((phase, idx) => (
                        <div key={idx} className="phase-card r-up group bg-white/90 border border-black/5 rounded-[24px] p-10 relative overflow-hidden transition-all duration-500 hover:translate-y-[-4px] hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.06)]" data-color={phase.dataColor}>
                            {/* Hover accent line */}
                            <div className={`absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${phase.color === 'emerald' ? 'from-emerald-500 to-cyan-500' :
                                    phase.color === 'cyan' ? 'from-cyan-500 to-blue-500' :
                                        phase.color === 'blue' ? 'from-blue-500 to-violet-500' :
                                            'from-violet-500 to-emerald-500'
                                }`} />

                            <div className="flex items-center gap-5 mb-8">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono text-base font-bold border ${phase.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20' :
                                        phase.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20' :
                                            phase.color === 'blue' ? 'bg-blue-500/10 text-blue-600 border-blue-500/20' :
                                                'bg-violet-500/10 text-violet-600 border-violet-500/20'
                                    }`}>
                                    {phase.num}
                                </div>
                                <div>
                                    <div className={`text-[10px] font-mono tracking-wider uppercase mb-1 ${phase.color === 'emerald' ? 'text-emerald-600' :
                                            phase.color === 'cyan' ? 'text-cyan-600' :
                                                phase.color === 'blue' ? 'text-blue-600' :
                                                    'text-violet-600'
                                        }`}>{phase.time}</div>
                                    <h3 className="text-xl font-light text-gray-900 tracking-tight">{phase.title}</h3>
                                </div>
                            </div>
                            <p className="text-[14px] text-gray-800 font-light leading-relaxed mb-6">
                                {phase.desc}
                            </p>
                            <div className="space-y-3 mb-8">
                                {phase.items.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className={`w-1 h-1 rounded-full ${phase.color === 'emerald' ? 'bg-emerald-500' :
                                                phase.color === 'cyan' ? 'bg-cyan-500' :
                                                    phase.color === 'blue' ? 'bg-blue-500' :
                                                        'bg-violet-500'
                                            }`} />
                                        <span className="text-[13px] text-gray-800 font-light">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {phase.deliverables.map((del, i) => (
                                    <div key={i} className={`deliverable inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[12px] font-light border transition-all ${phase.color === 'emerald' ? 'bg-emerald-500/[0.06] text-emerald-700 border-emerald-500/[0.12]' :
                                            phase.color === 'cyan' ? 'bg-cyan-500/[0.06] text-cyan-700 border-cyan-500/[0.12]' :
                                                phase.color === 'blue' ? 'bg-blue-500/[0.06] text-blue-700 border-blue-500/[0.12]' :
                                                    'bg-violet-500/[0.06] text-violet-700 border-violet-500/[0.12]'
                                        }`}>
                                        <div className="w-3.5 h-3.5 flex items-center justify-center">
                                            {del.icon}
                                        </div>
                                        {del.text}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
