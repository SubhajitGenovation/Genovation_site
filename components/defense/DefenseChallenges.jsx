"use client";

import React, { useEffect } from 'react';
import { Shield, WifiOff, AlertTriangle, Radar, XCircle, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function DefenseChallenges() {
    useEffect(() => {
        const reveals = document.querySelectorAll('.r-up');
        reveals.forEach(el => {
            gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 87%',
                    once: true
                }
            });
        });

        const cards = document.querySelectorAll('#challengeCards .card');
        if (cards.length) {
            ScrollTrigger.batch(cards, {
                start: 'top 87%',
                onEnter: els => gsap.fromTo(els, { y: 60, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: 'power3.out' }),
                once: true
            });
        }
    }, []);

    const challenges = [
        {
            icon: Shield,
            title: "Data Sovereignty",
            desc: "Critical intelligence cannot be sent to public clouds or external APIs. Organizations must own their stack.",
            accent: "bg-red-500",
            iconColor: "text-red-500"
        },
        {
            icon: WifiOff,
            title: "Denial-Proof",
            desc: "AI must function in air-gapped contexts and DDIL environments without losing foundational capability.",
            accent: "bg-amber-500",
            iconColor: "text-amber-500"
        },
        {
            icon: AlertTriangle,
            title: "Exfiltration Risk",
            desc: "The threat of data exfiltration via 'AI-as-a-service' creates an unacceptable risk surface for IP.",
            accent: "bg-red-500",
            iconColor: "text-red-500"
        },
        {
            icon: Radar,
            title: "Explainable AI",
            desc: "In defense, 'I don't know why it thought that' is a failure of command. Decisive action requires trace.",
            accent: "bg-violet-500",
            iconColor: "text-violet-600"
        }
    ];

    return (
        <section className="py-28 relative overflow-hidden bg-white/30" id="challenges">
            <div className="absolute inset-0 mesh-bg-slate opacity-15"></div>
            <div className="orb w-[400px] h-[400px] bg-slate-500/[0.04] top-[10%] left-[-10%]"></div>

            <div className="relative max-w-6xl mx-auto px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-500/[0.08] border border-slate-500/[0.15] mb-8 r-up translate-y-10 opacity-0">
                        <Shield className="w-3 h-3 text-slate-600" />
                        <span className="text-slate-600 text-[11px] font-light tracking-[0.25em] uppercase">Core Challenges</span>
                    </div>
                    <h2 className="display-section text-5xl md:text-7xl r-up translate-y-10 opacity-0">
                        The Sovereignty <br /><span className="text-gradient-slate">Gap</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20" id="challengeCards">
                    {challenges.map((item, i) => (
                        <div key={i} className="card p-7 group hover:bg-white/40 transition-colors opacity-0" style={{ borderRadius: '24px' }}>
                            <div className={`w-12 h-12 rounded-2xl ${item.accent}/[0.1] border ${item.accent}/[0.15] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                            </div>
                            <h3 className="text-lg text-gray-900 font-light mb-3">{item.title}</h3>
                            <p className="text-[13px] text-gray-400 font-light leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    <div className="p-8 rounded-3xl bg-red-500/[0.03] border border-red-500/[0.12] r-up translate-y-10 opacity-0">
                        <div className="flex items-center gap-3 mb-6">
                            <XCircle className="w-6 h-6 text-red-400" />
                            <h3 className="text-xl font-light text-gray-900">The Modern SaaS Danger</h3>
                        </div>
                        <p className="text-[14px] text-gray-500 font-light leading-relaxed mb-6">
                            Generic AI platforms are built on "data-for-training" business models. This creates a collision course with defense security protocols.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Inability to function in air-gapped environments",
                                "Opacity of decision-making and token weights",
                                "Leakage of prompt context into global models",
                                "Dependency on external uptime and infrastructure"
                            ].map((text, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2"></div>
                                    <span className="text-[13px] text-gray-400 font-light">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 rounded-3xl bg-emerald-500/[0.03] border border-emerald-500/[0.12] r-up translate-y-10 opacity-0">
                        <div className="flex items-center gap-3 mb-6">
                            <CheckCircle className="w-6 h-6 text-emerald-500" />
                            <h3 className="text-xl font-light text-gray-900">The Genovation Solution</h3>
                        </div>
                        <p className="text-[14px] text-gray-500 font-light leading-relaxed mb-6">
                            We deliver a sovereign AI stack where intelligence is treated as a component, not a service.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Full deployment inside classified boundaries",
                                "100% explainability via traceable chain-of-thought",
                                "Zero data movement outside the host infrastructure",
                                "Resilient operation in DDIL and denied territories"
                            ].map((text, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></div>
                                    <span className="text-[13px] text-gray-400 font-light">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
