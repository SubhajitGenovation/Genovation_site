"use client";

import React from 'react';
import { Plane, ChevronRight, PenTool, Factory, ShieldCheck, Boxes, Wrench, FileCheck2 } from 'lucide-react';

export default function AerospaceHero() {
    const domainPills = [
        { icon: PenTool, label: 'Engineering', color: 'sky' },
        { icon: Factory, label: 'Manufacturing', color: 'violet' },
        { icon: ShieldCheck, label: 'Quality', color: 'emerald' },
        { icon: Boxes, label: 'Supply Chain', color: 'amber' },
        { icon: Wrench, label: 'MRO', color: 'rose' },
        { icon: FileCheck2, label: 'Certification', color: 'teal' },
    ];

    const getColorClasses = (color) => {
        const maps = {
            sky: 'bg-sky-500/[0.06] border-sky-500/[0.12] text-sky-700',
            violet: 'bg-violet-500/[0.06] border-violet-500/[0.12] text-violet-700',
            emerald: 'bg-emerald-500/[0.06] border-emerald-500/[0.12] text-emerald-700',
            amber: 'bg-amber-500/[0.06] border-amber-500/[0.12] text-amber-700',
            rose: 'bg-rose-500/[0.06] border-rose-500/[0.12] text-rose-700',
            teal: 'bg-teal-500/[0.06] border-teal-500/[0.12] text-teal-700',
        };
        return maps[color] || maps.sky;
    };

    return (
        <section className="relative min-h-[85vh] flex items-center pt-24 pb-16 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 mesh-bg-sky opacity-30"></div>
            <div className="orb w-[500px] h-[500px] bg-sky-400/[0.06] top-[-10%] left-[15%]"></div>
            <div className="orb w-[400px] h-[400px] bg-cyan-400/[0.04] bottom-[10%] right-[5%]"></div>

            <div className="relative max-w-6xl mx-auto px-6 w-full">
                <div className="max-w-4xl">
                    {/* Title Area */}
                    <div className="flex items-center gap-4 mb-8 r-up">
                        <div className="w-14 h-14 rounded-2xl bg-sky-500/[0.08] border border-sky-500/[0.15] flex items-center justify-center">
                            <Plane className="w-7 h-7 text-sky-500" />
                        </div>
                        <div>
                            <p className="text-[10px] text-sky-500/80 tracking-[0.2em] uppercase font-mono">Industry</p>
                            <h1 className="text-3xl lg:text-4xl display-inter text-gray-800">Aerospace & Defense</h1>
                        </div>
                    </div>

                    {/* Main Headline */}
                    <p className="text-3xl lg:text-[2.8rem] display-section text-gray-800 mb-6 r-up leading-none">
                        Sovereign AI Across<br />
                        <span className="text-gradient-sky">Every Aerospace Function</span>
                    </p>

                    <p className="text-lg text-gray-500 font-light leading-relaxed mb-6 max-w-3xl r-up">
                        From design engineering to the shop floor, from quality to MRO — aerospace organizations
                        need AI that works within their security perimeter, speaks their language, and meets the rigor
                        their industry demands.
                    </p>

                    {/* Domain Pills */}
                    <div className="flex flex-wrap gap-2.5 mb-8 r-up">
                        {domainPills.map((pill, idx) => {
                            const Icon = pill.icon;
                            return (
                                <span key={idx} className={`domain-pill inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[11px] font-normal border transition-all ${getColorClasses(pill.color)}`}>
                                    <Icon className="w-3.5 h-3.5" />
                                    {pill.label}
                                </span>
                            );
                        })}
                    </div>

                    <p className="text-gray-700 font-medium text-sm r-up">
                        Deployed on your infrastructure. Every answer traceable. IP never leaves your control.
                    </p>
                </div>
            </div>
        </section>
    );
}
