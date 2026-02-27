"use client";

import { useEffect, useRef } from "react";
import { Package, GitBranch, Cpu, Database, Map, Presentation, FileText } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const docs = [
    {
        title: "Process Atlas",
        desc: "Complete visual map of your decision flows, bottlenecks, and automation candidates with AI opportunity scores.",
        icon: <GitBranch className="w-3 h-3 text-emerald-600" />,
        type: "DOCUMENT",
        color: "#10b981",
        preview: (
            <svg viewBox="0 0 280 140" fill="none" className="w-full opacity-90">
                <rect x="10" y="10" width="70" height="28" rx="6" fill="rgba(16,185,129,0.22)" stroke="#10b981" strokeWidth="0.75" strokeOpacity="0.4" />
                <rect x="10" y="55" width="70" height="28" rx="6" fill="rgba(16,185,129,0.22)" stroke="#10b981" strokeWidth="0.75" strokeOpacity="0.4" />
                <rect x="10" y="100" width="70" height="28" rx="6" fill="rgba(16,185,129,0.22)" stroke="#10b981" strokeWidth="0.75" strokeOpacity="0.4" />
                <rect x="105" y="32" width="70" height="28" rx="6" fill="rgba(6,182,212,0.22)" stroke="#06b6d4" strokeWidth="0.75" strokeOpacity="0.4" />
                <rect x="105" y="78" width="70" height="28" rx="6" fill="rgba(6,182,212,0.22)" stroke="#06b6d4" strokeWidth="0.75" strokeOpacity="0.4" />
                <rect x="200" y="55" width="70" height="28" rx="6" fill="rgba(59,130,246,0.22)" stroke="#3b82f6" strokeWidth="0.75" strokeOpacity="0.4" />
                <line x1="80" y1="24" x2="105" y2="42" stroke="#10b981" strokeWidth="0.75" strokeOpacity="0.5" />
                <line x1="175" y1="46" x2="200" y2="65" stroke="#06b6d4" strokeWidth="0.75" strokeOpacity="0.5" />
            </svg>
        )
    },
    {
        title: "Agent Architecture Blueprint",
        desc: "Technical spec mapping Mentis agents to your processes — orchestration logic, data flows, and JUDGE governance rules.",
        icon: <Cpu className="w-3 h-3 text-cyan-600" />,
        type: "DOCUMENT",
        color: "#06b6d4",
        preview: (
            <svg viewBox="0 0 280 140" fill="none" className="w-full opacity-90">
                <rect x="10" y="8" width="260" height="24" rx="5" fill="rgba(16,185,129,0.22)" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.5" />
                <rect x="10" y="40" width="260" height="24" rx="5" fill="rgba(6,182,212,0.22)" stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.5" />
                <rect x="50" y="72" width="180" height="20" rx="5" fill="rgba(16,185,129,0.1)" stroke="#10b981" strokeWidth="0.75" strokeOpacity="0.5" />
                <rect x="10" y="100" width="260" height="24" rx="5" fill="rgba(59,130,246,0.22)" stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.5" />
            </svg>
        )
    },
    {
        title: "Data Readiness Report",
        desc: "Assessment of each data source — availability, quality, format, permissions — and what preparation is needed.",
        icon: <Database className="w-3 h-3 text-blue-600" />,
        type: "DOCUMENT",
        color: "#3b82f6",
        preview: (
            <svg viewBox="0 0 280 140" fill="none" className="w-full opacity-90">
                <rect x="10" y="8" width="260" height="18" rx="4" fill="rgba(59,130,246,0.1)" />
                <rect x="18" y="34" width="200" height="5" rx="1" fill="rgba(255,255,255,0.12)" />
                <rect x="18" y="50" width="180" height="5" rx="1" fill="rgba(255,255,255,0.12)" />
                <rect x="18" y="66" width="220" height="5" rx="1" fill="rgba(255,255,255,0.12)" />
                <circle cx="248" cy="36" r="4" fill="rgba(16,185,129,0.25)" />
                <circle cx="248" cy="52" r="4" fill="rgba(6,182,212,0.25)" />
                <circle cx="248" cy="68" r="4" fill="rgba(245,158,11,0.25)" />
            </svg>
        )
    }
];

const secondaryDocs = [
    {
        title: "Deployment Roadmap",
        desc: "Phased implementation plan with timelines, milestones, resource requirements, success metrics, and recommended pilot scope.",
        icon: <Map className="w-3 h-3 text-violet-600" />,
        type: "DOCUMENT",
        color: "#8b5cf6",
        preview: (
            <svg viewBox="0 0 440 120" fill="none" className="w-full opacity-90">
                <rect x="75" y="20" width="100" height="14" rx="4" fill="rgba(16,185,129,0.2)" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.5" />
                <rect x="130" y="40" width="140" height="14" rx="4" fill="rgba(6,182,212,0.2)" stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.5" />
                <rect x="220" y="60" width="120" height="14" rx="4" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.5" />
                <rect x="300" y="80" width="100" height="14" rx="4" fill="rgba(139,92,246,0.2)" stroke="#8b5cf6" strokeWidth="0.5" strokeOpacity="0.5" />
            </svg>
        )
    },
    {
        title: "Executive Strategy Brief",
        desc: "Board-ready document — business case, projected ROI, risk analysis, and recommended path forward. Designed for leadership sign-off.",
        icon: <Presentation className="w-3 h-3 text-emerald-600" />,
        type: "PRESENTATION",
        color: "#10b981",
        preview: (
            <svg viewBox="0 0 440 120" fill="none" className="w-full opacity-90">
                <rect x="10" y="40" width="98" height="50" rx="8" fill="rgba(16,185,129,0.18)" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.4" />
                <rect x="118" y="40" width="98" height="50" rx="8" fill="rgba(6,182,212,0.18)" stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.4" />
                <rect x="226" y="40" width="98" height="50" rx="8" fill="rgba(139,92,246,0.18)" stroke="#8b5cf6" strokeWidth="0.5" strokeOpacity="0.4" />
                <rect x="340" y="8" width="90" height="82" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                <polyline points="352,72 366,58 380,64 394,42 408,48 420,30" fill="none" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round" />
            </svg>
        )
    }
];

export default function Deliverables() {
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
        <section className="py-40 relative overflow-hidden" id="deliverables" ref={sectionRef}>
            <div className="absolute inset-0 mesh-bg opacity-15"></div>
            <div className="orb w-[500px] h-[400px] bg-emerald-500/[0.04] absolute" style={{ top: "15%", left: "10%" }}></div>

            <div className="relative max-w-6xl mx-auto px-8">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/[0.14] border border-blue-500/[0.35] mb-8 r-up">
                        <Package className="w-3 h-3 text-blue-600" />
                        <span className="text-blue-600 text-[11px] font-light tracking-[0.25em] uppercase">What You Receive</span>
                    </div>
                    <h2 className="display-section text-5xl md:text-7xl r-up font-light tracking-tight">
                        Concrete Artifacts.<br /><span className="text-gradient">Not Slide Decks.</span>
                    </h2>
                    <p className="text-[15px] text-gray-800 font-light mt-6 max-w-2xl mx-auto leading-relaxed r-up">
                        Every engagement produces a set of working documents your engineering and leadership teams can execute on
                        — not consultant-speak that collects dust.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                    {docs.map((doc, idx) => (
                        <div key={idx} className="doc-card r-up group bg-white/90 border border-black/5 rounded-[20px] overflow-hidden transition-all duration-500 hover:translate-y-[-4px] hover:shadow-[0_24px_50px_-16px_rgba(0,0,0,0.06)]">
                            <div className="bg-[#1a1a2e] p-6 relative">
                                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, ${doc.color}, transparent)` }}></div>
                                {doc.preview}
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-6 h-6 rounded-lg bg-emerald-500/5 flex items-center justify-center">
                                        {doc.icon}
                                    </div>
                                    <span className="font-mono text-[9px] tracking-[0.15em] uppercase" style={{ color: doc.color }}>{doc.type}</span>
                                </div>
                                <h4 className="text-[16px] text-gray-900 font-light mb-2">{doc.title}</h4>
                                <p className="text-[12px] text-gray-700 font-light leading-relaxed">
                                    {doc.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {secondaryDocs.map((doc, idx) => (
                        <div key={idx} className="doc-card r-up group bg-white/90 border border-black/5 rounded-[20px] overflow-hidden transition-all duration-500 hover:translate-y-[-4px] hover:shadow-[0_24px_50px_-16px_rgba(0,0,0,0.06)]">
                            <div className="bg-[#1a1a2e] p-6 relative">
                                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, ${doc.color}, transparent)` }}></div>
                                {doc.preview}
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-6 h-6 rounded-lg bg-emerald-500/5 flex items-center justify-center">
                                        {doc.icon}
                                    </div>
                                    <span className="font-mono text-[9px] tracking-[0.15em] uppercase" style={{ color: doc.color }}>{doc.type}</span>
                                </div>
                                <h4 className="text-[16px] text-gray-900 font-light mb-2">{doc.title}</h4>
                                <p className="text-[12px] text-gray-700 font-light leading-relaxed">
                                    {doc.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
