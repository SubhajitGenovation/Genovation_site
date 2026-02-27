"use client";

import React from 'react';
import { Shield, Search, Zap, Users } from 'lucide-react';

export default function AerospaceWhyChoose() {
    const reasons = [
        {
            icon: Shield,
            title: 'Sovereignty First',
            description: 'Your data, your models, your infrastructure. IP never leaves your air-gapped environment.'
        },
        {
            icon: Search,
            title: 'Total Traceability',
            description: 'Every answer is cited. No hallucinations. Complete audit trails for certification rigor.'
        },
        {
            icon: Zap,
            title: 'Speed to Compliance',
            description: 'Accelerate AS9100/FAA certification by automating documentation and evidence gathering.'
        },
        {
            icon: Users,
            title: 'Workforce Resilience',
            description: 'Capture "tribal knowledge" before it retires, making it accessible to next-gen technicians.'
        }
    ];

    return (
        <section className="py-28 relative overflow-hidden bg-white/30">
            <div className="absolute inset-0 mesh-bg-sky opacity-15"></div>

            <div className="relative max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-[10px] text-gray-400 tracking-[0.3em] uppercase mb-4 font-mono r-up">The Advantage</p>
                    <h2 className="text-4xl md:text-5xl display-section text-gray-800 r-up leading-[1.1]">Why Aerospace Leaders<br />Choose Genovation</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;
                        return (
                            <div key={idx} className="text-center r-up group">
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-black/[0.05] flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-sky-50 group-hover:border-sky-200">
                                    <Icon className="w-6 h-6 text-sky-500" />
                                </div>
                                <h3 className="text-gray-800 font-medium text-lg mb-3">{reason.title}</h3>
                                <p className="text-sm text-gray-500 font-light leading-relaxed px-2">
                                    {reason.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
