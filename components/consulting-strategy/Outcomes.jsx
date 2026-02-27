"use client";

import { useEffect, useRef } from "react";
import { Sparkles, MapPin, Lock, Rocket, Users, BarChart3, Repeat } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const outcomes = [
    {
        title: "Clarity on Where AI Fits",
        desc: "No more guessing. You'll know exactly which processes benefit from agentic AI, which don't, and why — with data to support every recommendation.",
        icon: <MapPin className="w-5 h-5 text-emerald-600" />,
        badge: "Eliminates wasted investment",
        color: "emerald"
    },
    {
        title: "Governance Built In, Not Bolted On",
        desc: "Compliance, audit trails, and JUDGE verification are designed into the architecture from day one — so legal and compliance teams are aligned, not blocking.",
        icon: <Lock className="w-5 h-5 text-cyan-600" />,
        badge: "Prevents compliance delays",
        color: "cyan"
    },
    {
        title: "Accelerated Time to Production",
        desc: "With process mapping, data readiness, and architecture done upfront, deployment goes from months of discovery to weeks of execution.",
        icon: <Rocket className="w-5 h-5 text-blue-600" />,
        badge: "Compresses deployment timeline",
        color: "blue"
    },
    {
        title: "Teams That Trust the System",
        desc: "Change management and enablement are part of the engagement — so your people adopt the system because they understand it, not because they're told to.",
        icon: <Users className="w-5 h-5 text-violet-600" />,
        badge: "Drives real adoption",
        color: "violet"
    },
    {
        title: "A Business Case That Holds",
        desc: "We build ROI projections into the engagement — so when you present to the board, you're showing projected returns grounded in your actual operational data.",
        icon: <BarChart3 className="w-5 h-5 text-emerald-600" />,
        badge: "Secures internal buy-in",
        color: "emerald"
    },
    {
        title: "A Repeatable Playbook",
        desc: "The methodology, frameworks, and assessment tools we use become yours. When you're ready to scale to new departments or regions, you have the blueprint.",
        icon: <Repeat className="w-5 h-5 text-cyan-600" />,
        badge: "Scales beyond the pilot",
        color: "cyan"
    }
];

export default function Outcomes() {
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
        <section className="py-40 relative" id="outcomes" ref={sectionRef}>
            <div className="orb w-[500px] h-[400px] bg-violet-500/[0.05] absolute" style={{ top: "10%", right: "5%" }}></div>

            <div className="relative max-w-6xl mx-auto px-8">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-violet-500/[0.14] border border-violet-500/[0.35] mb-8 r-up">
                        <Sparkles className="w-3 h-3 text-violet-600" />
                        <span className="text-violet-600 text-[11px] font-light tracking-[0.25em] uppercase">What Changes</span>
                    </div>
                    <h2 className="display-section text-5xl md:text-7xl r-up font-light tracking-tight">
                        From Assessment<br /><span className="text-gradient">to Operational Intelligence.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {outcomes.map((outcome, idx) => (
                        <div key={idx} className="outcome-card r-up group bg-white/85 border border-black/5 rounded-[20px] p-8 relative overflow-hidden transition-all duration-500 hover:translate-y-[-4px] hover:border-emerald-500/15 hover:shadow-[0_24px_50px_-16px_rgba(0,0,0,0.06)]">
                            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${outcome.color === 'emerald' ? 'bg-emerald-500/10' :
                                outcome.color === 'cyan' ? 'bg-cyan-500/10' :
                                    outcome.color === 'blue' ? 'bg-blue-500/10' :
                                        'bg-violet-500/10'
                                }`}>
                                {outcome.icon}
                            </div>
                            <h4 className="text-[16px] text-gray-900 font-light mb-3">{outcome.title}</h4>
                            <p className="text-[13px] text-gray-700 font-light leading-relaxed mb-5">
                                {outcome.desc}
                            </p>
                            <div className={`text-[10px] font-mono tracking-wider uppercase ${outcome.color === 'emerald' ? 'text-emerald-600' :
                                outcome.color === 'cyan' ? 'text-cyan-600' :
                                    outcome.color === 'blue' ? 'text-blue-600' :
                                        'text-violet-600'
                                }`}>
                                {outcome.badge}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
