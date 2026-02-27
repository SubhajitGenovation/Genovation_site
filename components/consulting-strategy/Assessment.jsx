"use client";

import { useEffect, useRef } from "react";
import { Scan, Workflow, Database, Shield, Users, Server, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const assessmentDimensions = [
    {
        title: "Process Architecture",
        desc: "How decisions flow through your organization. Where bottlenecks exist. Which processes are repeatable and automatable vs. uniquely human.",
        icon: <Workflow className="w-4 h-4 text-emerald-600" />,
        bg: "bg-emerald-500/[0.16]"
    },
    {
        title: "Data Topology",
        desc: "Where your data lives, how it moves, who owns it, and what's accessible vs. siloed. We map every source an agent would need.",
        icon: <Database className="w-4 h-4 text-cyan-600" />,
        bg: "bg-cyan-500/[0.16]"
    },
    {
        title: "Governance & Compliance",
        desc: "Regulatory requirements, internal policies, approval chains, and audit obligations. We design governance into the architecture, not around it.",
        icon: <Shield className="w-4 h-4 text-blue-600" />,
        bg: "bg-blue-500/[0.16]"
    },
    {
        title: "People & Readiness",
        desc: "Who will use the system? Who will resist it? What training is needed? We plan for human adoption as seriously as we plan the technical deployment.",
        icon: <Users className="w-4 h-4 text-violet-600" />,
        bg: "bg-violet-500/[0.16]"
    },
    {
        title: "Infrastructure & Security",
        desc: "Existing compute, network, and security posture. On-prem vs. cloud. Air-gapped requirements. We architect within your constraints, not around them.",
        icon: <Server className="w-4 h-4 text-emerald-600" />,
        bg: "bg-emerald-500/[0.16]"
    },
    {
        title: "ROI & Business Case",
        desc: "We build the business case with you — projected cost savings, time-to-value, productivity gains, and risk reduction — so you can justify the investment internally.",
        icon: <TrendingUp className="w-4 h-4 text-cyan-600" />,
        bg: "bg-cyan-500/[0.16]"
    }
];

const barDimensions = [
    { label: "Process Architecture", value: 92, color: "from-[#10b981] to-[#34d399]", dotColor: "#10b981", sub: "DECISION CHAINS · BOTTLENECKS · AUTOMATION CANDIDATES" },
    { label: "Data Topology", value: 88, color: "from-[#06b6d4] to-[#22d3ee]", dotColor: "#06b6d4", sub: "SOURCES · SILOS · FORMATS · PERMISSIONS" },
    { label: "Governance & Compliance", value: 85, color: "from-[#3b82f6] to-[#60a5fa]", dotColor: "#3b82f6", sub: "REGULATORY · INTERNAL POLICIES · AUDIT TRAILS" },
    { label: "ROI & Business Case", value: 90, color: "from-[#8b5cf6] to-[#a78bfa]", dotColor: "#8b5cf6", sub: "COST SAVINGS · TIME-TO-VALUE · PRODUCTIVITY" },
    { label: "People & Readiness", value: 82, color: "from-[#f59e0b] to-[#fbbf24]", dotColor: "#f59e0b", sub: "ADOPTION · TRAINING · RESISTANCE · CHAMPIONS" },
    { label: "Infrastructure & Security", value: 86, color: "from-[#14b8a6] to-[#2dd4bf]", dotColor: "#14b8a6", sub: "COMPUTE · NETWORK · AIR-GAP · DEPLOYMENT" }
];

export default function Assessment() {
    const sectionRef = useRef(null);
    const assessBarsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // General reveal
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

            gsap.to(".r-scale", {
                scale: 1,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            // Specific bar animations
            assessBarsRef.current.forEach((bar, i) => {
                if (bar) {
                    gsap.to(bar, {
                        scaleX: 1,
                        duration: 1.5,
                        delay: 0.2 + i * 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: bar,
                            start: "top 95%",
                        }
                    });
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-40 relative overflow-hidden" id="assess" ref={sectionRef}>
            <div className="absolute inset-0 mesh-bg opacity-15"></div>
            <div className="orb w-[500px] h-[400px] bg-blue-500/[0.04] absolute" style={{ top: "20%", right: "5%" }}></div>

            <div className="relative max-w-6xl mx-auto px-8">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/[0.14] border border-cyan-500/[0.35] mb-8 r-up">
                        <Scan className="w-3 h-3 text-cyan-600" />
                        <span className="text-cyan-600 text-[11px] font-light tracking-[0.25em] uppercase">Assessment Dimensions</span>
                    </div>
                    <h2 className="display-section text-5xl md:text-7xl r-up font-light tracking-tight">
                        We Look at<br /><span className="text-gradient">Everything That Matters.</span>
                    </h2>
                </div>

                {/* ASSESSMENT DASHBOARD PANEL */}
                <div className="mb-16 r-scale opacity-0 scale-[0.85] bg-[#13131e] rounded-[24px] border border-white/5 overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)] relative">
                    {/* Titlebar */}
                    <div className="px-7 py-4 border-b border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500/70" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                            <div className="w-2 h-2 rounded-full bg-green-500/70" />
                            <span className="font-mono text-[10px] text-white/45 ml-3">assessment.genovation.ai — Organizational Readiness Report</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="font-mono text-[9px] text-emerald-500 tracking-widest">LIVE</span>
                        </div>
                    </div>

                    <div className="p-8 md:p-10">
                        {/* Top summary row */}
                        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-9 pb-6 border-b border-white/5">
                            <div className="flex-1">
                                <div className="font-mono text-[9px] text-white/45 tracking-[0.15em] mb-2 uppercase">Overall Readiness</div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-[48px] font-extralight tracking-tighter bg-gradient-to-br from-[#10b981] to-[#06b6d4] bg-clip-text text-transparent">87</span>
                                    <span className="text-sm font-extralight text-white/45">/100</span>
                                </div>
                            </div>
                            <div className="hidden md:block w-px h-12 bg-white/5"></div>
                            <div className="flex-1">
                                <div className="font-mono text-[9px] text-white/45 tracking-[0.15em] mb-2 uppercase">Verdict</div>
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/15">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                                    <span className="font-mono text-[11px] text-[#10b981] tracking-wide uppercase">High Readiness — Proceed to Architecture</span>
                                </div>
                            </div>
                        </div>

                        {/* Dimension bars */}
                        <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
                            {barDimensions.map((bar, i) => (
                                <div key={i}>
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-[2px]" style={{ backgroundColor: bar.dotColor }} />
                                            <span className="text-[13px] text-white/90 font-light">{bar.label}</span>
                                        </div>
                                        <span className="font-mono text-[13px] font-bold" style={{ color: bar.dotColor }}>{bar.value}</span>
                                    </div>
                                    <div className="h-1.5 rounded-[3px] bg-white/5 overflow-hidden relative">
                                        <div
                                            ref={el => assessBarsRef.current[i] = el}
                                            className={`h-full rounded-[3px] bg-gradient-to-r ${bar.color} origin-left`}
                                            style={{ width: `${bar.value}%`, transform: 'scaleX(0)' }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/15" />
                                        </div>
                                    </div>
                                    <div className="font-mono text-[8px] text-white/40 mt-1 tracking-widest">
                                        {bar.sub}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom bar */}
                        <div className="mt-7 pt-5 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-4 h-1 rounded-sm bg-gradient-to-r from-[#10b981] to-[#34d399]" />
                                    <span className="text-[9px] text-white/40 uppercase">High (85+)</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-4 h-1 rounded-sm bg-gradient-to-r from-[#f59e0b] to-[#fbbf24]" />
                                    <span className="text-[9px] text-white/40 uppercase">Medium (70–84)</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-4 h-1 rounded-sm bg-gradient-to-r from-[#ef4444] to-[#f87171]" />
                                    <span className="text-[9px] text-white/40 uppercase">Needs work (&lt;70)</span>
                                </div>
                            </div>
                            <span className="font-mono text-[9px] text-white/25 ml-auto tracking-widest uppercase">Genovation Assessment Engine v2.4</span>
                        </div>
                    </div>
                </div>

                {/* ASSESSMENT GRID */}
                <div className="grid md:grid-cols-3 gap-5">
                    {assessmentDimensions.map((dim, idx) => (
                        <div key={idx} className="assess-node r-up bg-white/90 border border-black/5 rounded-[16px] p-[20px_24px] transition-all duration-[400ms] cubic-bezier(0.23,1,0.32,1) hover:border-emerald-500/20 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.06)] relative group">
                            <div className="flex items-center gap-3 mb-3">
                                <div className={`w-9 h-9 rounded-xl ${dim.bg} flex items-center justify-center transition-transform group-hover:scale-105 duration-500`}>
                                    {dim.icon}
                                </div>
                                <h4 className="text-[15px] text-gray-900 font-light tracking-tight">{dim.title}</h4>
                            </div>
                            <p className="text-[13px] text-gray-700 font-light leading-relaxed">
                                {dim.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
