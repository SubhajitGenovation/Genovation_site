"use client";

import React, { useEffect } from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function DefenseCTA() {
    const router = useRouter();

    useEffect(() => {
        // ... rest of your useEffect code remains the same
    }, []);

    const handleNavigation = (path) => {
        router.push(path);
    };

    return (
        <section className="py-32 relative overflow-hidden bg-[#f5f3f0]" id="cta">
            <div className="orb w-[600px] h-[400px] bg-slate-500/[0.05] bottom-[10%] left-[20%]"></div>

            <div className="relative max-w-3xl mx-auto px-8 text-center">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-500/[0.08] border border-slate-500/[0.15] mb-8 r-up opacity-0 translate-y-10">
                    <Shield className="w-3 h-3 text-slate-600" />
                    <span className="text-slate-600 text-[11px] font-light tracking-[0.25em] uppercase">Get Started</span>
                </div>

                <h2 className="display-section text-5xl md:text-7xl mb-6 r-up opacity-0 translate-y-10">
                    Engage with <span className="text-gradient-slate">Us</span>
                </h2>

                <p className="text-lg text-gray-500 font-light mb-12 r-up opacity-0 translate-y-10">
                    If your organization operates in secure or classified environments and is exploring safe AI adoption, we welcome a confidential discussion.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-16 r-up opacity-0 translate-y-10">
                    <div className="mag-btn">
                        <button 
                            onClick={() => handleNavigation('/talk-to-sales')}
                            className="btn-inner inline-flex items-center gap-2 px-8 py-4 rounded-full hero-cta text-white font-normal shadow-lg shadow-slate-500/20 group"
                        >
                            <span className='text-black'>Defense Inquiries</span>
                            <ArrowRight className="w-4 h-4 text-black transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                    <div className="mag-btn">
                        <button 
                            onClick={() => handleNavigation('/secure-discussion')}
                            className="btn-inner px-8 py-4 rounded-full bg-black/[0.05] border border-black/[0.1] text-gray-600 font-light hover:bg-black/[0.08] transition-all"
                        >
                            Secure Discussion
                        </button>
                    </div>
                </div>

                <div className="p-8 rounded-3xl bg-slate-500/[0.04] border border-slate-500/[0.15] r-scale opacity-0 scale-90">
                    <p className="text-xl text-gray-900 font-light leading-relaxed">
                        "In defense, intelligence must be <span className="text-gradient-slate font-normal">secure, explainable, and accountable</span>. Genovation is built for that mission."
                    </p>
                </div>
            </div>
        </section>
    );
}