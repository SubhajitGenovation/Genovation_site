"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AerospaceCTA() {
    return (
        <section className="py-28 relative overflow-hidden">
            <div className="absolute inset-0 mesh-bg-sky opacity-20"></div>
            <div className="orb w-[500px] h-[500px] bg-sky-400/[0.05] top-[-20%] left-[20%]"></div>

            <div className="relative max-w-3xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl display-section text-gray-800 mb-6 r-up">Ready to Explore?</h2>
                <p className="text-lg text-gray-500 mb-10 font-light r-up">
                    Whether you're looking to accelerate engineering, improve manufacturing quality,
                    or preserve decades of institutional knowledge — let's talk.
                </p>

                <div className="flex flex-wrap justify-center gap-3 mb-12 r-up">
                    <button className="hero-cta-primary px-8 py-3.5 rounded-full text-white text-sm font-light tracking-wider flex items-center gap-2 group transition-all hover:scale-105 active:scale-95">
                        Aerospace Inquiries
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <button className="px-8 py-3.5 rounded-full bg-black/[0.05] border border-black/[0.08] text-gray-700 hover:border-sky-500/30 text-sm font-light tracking-wider transition-all hover:bg-black/[0.08]">
                        Schedule Demo
                    </button>
                </div>

                <div className="p-8 rounded-2xl bg-sky-500/[0.04] border border-sky-500/[0.12] r-up">
                    <p className="text-xl text-gray-700 font-light leading-relaxed">
                        "From the shop floor to the flight line — Genovation delivers AI that's
                        <span className="text-gradient-sky font-medium ml-1.5">secure, traceable, and built for how aerospace actually works</span>."
                    </p>
                </div>
            </div>
        </section>
    );
}
