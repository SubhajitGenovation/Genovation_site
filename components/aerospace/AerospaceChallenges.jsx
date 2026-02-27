"use client";

import React from 'react';
import { Lock, FileCheck2, Users } from 'lucide-react';

export default function AerospaceChallenges() {
    const challenges = [
        {
            icon: Lock,
            title: 'IP & Export Control',
            description: 'ITAR, EAR, and proprietary data can never leave your infrastructure. Cloud AI is a non-starter for most programs.',
            badge: 'Zero tolerance for data exfiltration — even inadvertent.',
            color: 'sky'
        },
        {
            icon: FileCheck2,
            title: 'Regulatory Rigor',
            description: 'FAA, EASA, AS9100, NADCAP — every function must produce auditable, traceable outputs or it doesn\'t ship.',
            badge: 'Black-box AI is incompatible with aerospace compliance culture.',
            color: 'amber'
        },
        {
            icon: Users,
            title: 'Knowledge Drain',
            description: '40% of the aerospace workforce retires this decade. Tribal knowledge in manufacturing, quality, and engineering is walking out the door.',
            badge: 'Not just engineers — machinists, inspectors, and technicians too.',
            color: 'violet'
        }
    ];

    const getColorClasses = (color) => {
        const maps = {
            sky: {
                iconBg: 'bg-sky-500/[0.08] border-sky-500/[0.12]',
                icon: 'text-sky-500',
                badgeBg: 'bg-sky-500/[0.04] border-sky-500/[0.08]',
                badgeText: 'text-sky-600/80'
            },
            amber: {
                iconBg: 'bg-amber-500/[0.08] border-amber-500/[0.12]',
                icon: 'text-amber-500',
                badgeBg: 'bg-amber-500/[0.04] border-amber-500/[0.08]',
                badgeText: 'text-amber-600/80'
            },
            violet: {
                iconBg: 'bg-violet-500/[0.08] border-violet-500/[0.12]',
                icon: 'text-violet-500',
                badgeBg: 'bg-violet-500/[0.04] border-violet-500/[0.08]',
                badgeText: 'text-violet-500/80'
            }
        };
        return maps[color];
    };

    return (
        <section className="py-28 relative overflow-hidden">
            <div className="absolute inset-0 mesh-bg-sky opacity-15"></div>
            <div className="relative max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-[10px] text-gray-400 tracking-[0.3em] uppercase mb-4 font-mono r-up">The Challenge</p>
                    <h2 className="text-4xl md:text-5xl display-section text-gray-800 r-up leading-[1.1]">Why Aerospace Is Different</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                    {challenges.map((challenge, idx) => {
                        const Icon = challenge.icon;
                        const colors = getColorClasses(challenge.color);
                        return (
                            <div key={idx} className="bg-white/85 shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-black/[0.08] rounded-[20px] p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-15px_rgba(14,165,233,0.1)] hover:border-sky-500/25 r-up group">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border transition-colors ${colors.iconBg}`}>
                                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                                </div>
                                <h3 className="text-gray-800 font-medium text-lg mb-3">{challenge.title}</h3>
                                <p className="text-sm text-gray-500 font-light leading-relaxed mb-4">
                                    {challenge.description}
                                </p>
                                <div className={`p-3 rounded-lg border ${colors.badgeBg}`}>
                                    <p className={`text-[11px] font-light ${colors.badgeText}`}>
                                        {challenge.badge}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
