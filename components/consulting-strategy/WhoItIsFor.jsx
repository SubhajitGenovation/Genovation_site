"use client";

import { useEffect, useRef } from "react";
import { Landmark, Building, ShieldAlert, RefreshCw } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const targetGroups = [
    {
        title: "Regulated industries",
        desc: "Financial services, healthcare, defense, government — where compliance isn't optional and every output needs a trail.",
        icon: <Landmark className="w-4 h-4 text-emerald-600" />,
        bg: "bg-emerald-500/[0.16]"
    },
    {
        title: "Complex organizations",
        desc: "Multi-division, multi-geography enterprises where processes are entangled and data is siloed across dozens of systems.",
        icon: <Building className="w-4 h-4 text-cyan-600" />,
        bg: "bg-cyan-500/[0.16]"
    },
    {
        title: "Data sovereignty requirements",
        desc: "On-premise, air-gapped, or jurisdiction-locked environments where cloud AI simply isn't an option.",
        icon: <ShieldAlert className="w-4 h-4 text-blue-600" />,
        bg: "bg-blue-500/[0.16]"
    },
    {
        title: "Failed or stalled AI initiatives",
        desc: "You've tried AI before. It didn't stick. We help you understand why — and build a path that actually works this time.",
        icon: <RefreshCw className="w-4 h-4 text-violet-600" />,
        bg: "bg-violet-500/[0.16]"
    }
];

export default function WhoItIsFor() {
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
        <section className="py-40 relative" id="whoFor" ref={sectionRef}>
            <div className="absolute inset-0 mesh-bg opacity-15"></div>

            <div className="relative max-w-5xl mx-auto px-8">
                <div className="text-center mb-20">
                    <h2 className="display-section text-4xl md:text-5xl r-up font-light tracking-tight">
                        Built for Organizations<br /><span className="text-gradient">Where AI Adoption Is Hard.</span>
                    </h2>
                    <p className="text-[15px] text-gray-800 font-light mt-6 max-w-2xl mx-auto leading-relaxed r-up">
                        If adopting AI were simple, you wouldn't need us. We work with enterprises where the complexity is real — and
                        the stakes are too high for guesswork.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {targetGroups.map((group, idx) => (
                        <div key={idx} className="assess-node r-up bg-white/90 border border-black/5 rounded-[16px] p-8 transition-all duration-500 hover:border-emerald-500/20 hover:scale-[1.02] hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.06)] group">
                            <div className="flex items-start gap-4">
                                <div className={`w-9 h-9 rounded-xl ${group.bg} flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110`}>
                                    {group.icon}
                                </div>
                                <div>
                                    <div className="text-[14px] text-gray-800 font-light mb-1">{group.title}</div>
                                    <div className="text-[12px] text-gray-700 font-light leading-relaxed">{group.desc}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
