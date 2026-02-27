"use client";

import { useEffect, useRef } from "react";
import { AlertTriangle, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Problem() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animating .r-left
            gsap.to(".r-left", {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".r-left",
                    start: "top 85%",
                }
            });

            // Animating children of .r-right
            gsap.to(sectionRef.current.querySelectorAll(".r-right"), {
                x: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current.querySelector(".space-y-4"),
                    start: "top 80%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-40 relative" id="problem" ref={sectionRef}>
            <div className="absolute inset-0 mesh-bg opacity-15"></div>
            <div className="orb w-[500px] h-[400px] bg-cyan-500/[0.04] absolute" style={{ top: "10%", right: "5%" }}></div>

            <div className="relative max-w-5xl mx-auto px-8">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div className="r-left">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-500/[0.12] border border-red-500/[0.3] mb-8">
                            <AlertTriangle className="w-3 h-3 text-red-500" />
                            <span className="text-red-500 text-[11px] font-light tracking-[0.25em] uppercase">The Pattern We See</span>
                        </div>
                        <h2 className="display-section text-4xl md:text-5xl mb-8 font-light tracking-tight">
                            Enterprise AI Fails<br />
                            <span style={{ color: "rgba(0,0,0,0.25)" }}>When It Skips Strategy.</span>
                        </h2>
                        <p className="text-[15px] text-gray-800 font-light leading-relaxed">
                            Organizations invest millions in AI tooling, deploy it horizontally, and wonder why adoption stalls,
                            outputs are distrusted, and ROI never materializes. The technology wasn't the problem.
                            The absence of architectural thinking was.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                title: "AI deployed without process mapping",
                                desc: "Agents don't know where they fit in existing workflows"
                            },
                            {
                                title: "Governance added as an afterthought",
                                desc: "Compliance teams block rollout mid-deployment"
                            },
                            {
                                title: "Data topology ignored",
                                desc: "AI can't access what it needs, or accesses what it shouldn't"
                            },
                            {
                                title: "No change management",
                                desc: "Teams distrust outputs, revert to manual processes"
                            }
                        ].map((item, i) => (
                            <div key={i} className="r-right assess-node bg-white/90 border border-black/5 rounded-2xl p-5 md:p-6 transition-all duration-500 hover:border-emerald-500/20 hover:translate-y-[-2px] hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.06)] group">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-lg bg-red-500/[0.14] flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <X className="w-4 h-4 text-red-400 group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div>
                                        <div className="text-[14px] text-gray-800 font-light">{item.title}</div>
                                        <div className="text-[12px] text-gray-700 font-light mt-1">{item.desc}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
