"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function DefenseInterstitial() {
    const sectionRef = useRef(null);
    const pinRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const text = textRef.current;
        if (!text) return;

        const words = text.innerText.trim().split(/\s+/);
        text.innerHTML = words.map(word => `<span class="inter-word inline-block opacity-[0.15] blur-[1px] transition-all duration-300">${word}</span>`).join(' ');

        const wordEls = text.querySelectorAll('.inter-word');

        const st = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            pin: pinRef.current,
            scrub: true,
            onUpdate: (self) => {
                const progress = self.progress;
                wordEls.forEach((word, i) => {
                    const wordProgress = i / wordEls.length;
                    const dist = Math.abs(progress - wordProgress);

                    if (dist < 0.08) {
                        word.style.opacity = '1';
                        word.style.filter = 'blur(0px)';
                    } else if (dist < 0.15) {
                        word.style.opacity = '0.6';
                        word.style.filter = 'blur(1px)';
                    } else {
                        word.style.opacity = '0.15';
                        word.style.filter = 'blur(1px)';
                    }
                });
            }
        });

        return () => {
            st.kill();
        };
    }, []);

    return (
        <section ref={sectionRef} id="interDef" className="relative h-[250vh]">
            <div ref={pinRef} id="interDefPin" className="h-screen flex items-center justify-center sticky top-0 overflow-hidden">
                <div className="absolute inset-0 mesh-bg-slate opacity-10"></div>
                <div className="relative max-w-4xl mx-auto px-8 text-center">
                    <h2 ref={textRef} id="interDefText" className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-[1.4] tracking-tight">
                        Our mission is to empower those who protect — with intelligence that follows the rules, keeps its secrets, and explains its reasoning.
                    </h2>
                </div>
            </div>
        </section>
    );
}
