"use client";

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AerospaceHero from '@/components/aerospace/AerospaceHero';
import AerospaceChallenges from '@/components/aerospace/AerospaceChallenges';
import AerospaceArchitecture from '@/components/aerospace/AerospaceArchitecture';
import IntelligenceProducts from '@/components/aerospace/IntelligenceProducts';
import SecondaryProducts from '@/components/aerospace/SecondaryProducts';
import AerospaceWhyChoose from '@/components/aerospace/AerospaceWhyChoose';
import AerospaceCTA from '@/components/aerospace/AerospaceCTA';
import ScrollLines from '@/components/home/ScrollLines';

gsap.registerPlugin(ScrollTrigger);

export default function AerospacePage() {
    useEffect(() => {
        // Scroll progress bar logic
        const scrollProgress = document.getElementById('scrollProgress');
        if (scrollProgress) {
            gsap.to(scrollProgress, {
                scaleX: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.3
                }
            });
        }

        // Reveal animations (r-up, r-left, r-right)
        const reveals = document.querySelectorAll('.r-up, .r-left, .r-right');
        reveals.forEach((el) => {
            const direction = el.classList.contains('r-up') ? { y: 60 } :
                el.classList.contains('r-left') ? { x: -60 } : { x: 60 };

            gsap.fromTo(el,
                { ...direction, opacity: 0 },
                {
                    y: 0, x: 0, opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <main className="relative bg-[#f5f3f0] text-[#1a1a2e] overflow-x-hidden min-h-screen">
            <div id="scrollProgress" className="fixed top-0 left-0 right-0 h-[2px] z-[200] bg-gradient-to-r from-[#0ea5e9] via-[#0891b2] to-[#06b6d4] origin-left scale-x-0"></div>

            <ScrollLines />

            <div className="relative z-10">
                <AerospaceHero />
                <div className="divider-enhanced"></div>

                <AerospaceChallenges />
                <div className="divider-enhanced"></div>

                <AerospaceArchitecture />
                <div className="divider-enhanced"></div>

                <IntelligenceProducts />
                <SecondaryProducts />

                <AerospaceWhyChoose />
                <AerospaceCTA />
            </div>
        </main>
    );
}
