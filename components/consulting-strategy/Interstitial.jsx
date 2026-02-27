"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Interstitial({ text, id }) {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    // This effect handles the word-by-word reveal synchronized with scroll
    useEffect(() => {
        if (!text || !textRef.current) return;

        const words = text.trim().split(/\s+/);
        const textEl = textRef.current;

        // Clear and rebuild word spans
        textEl.innerHTML = words.map(w => `<span class="word inline-block text-black/[0.05] transition-colors duration-200">${w}</span>`).join(' ');
        const wordSpans = textEl.querySelectorAll('.word');

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=150%",
                    pin: true,
                    scrub: 0.6,
                }
            });

            // Reveal words one by one
            wordSpans.forEach((word, i) => {
                tl.to(word, {
                    color: "#1a1a2e",
                    opacity: 1,
                    duration: 0.1,
                }, i * (1 / wordSpans.length));
            });

            // Keep it stable and centered, just a very subtle scale for focus
            tl.fromTo(textEl,
                { scale: 0.98 },
                { scale: 1.02, ease: "none" },
                0
            );
        }, containerRef);

        return () => ctx.revert();
    }, [text, id]); // Including id ensures the hook signature is stable for each instance

    return (
        <section ref={containerRef} className="relative h-[130vh] flex items-center justify-center bg-[#f5f3f0] overflow-hidden" id={id}>
            <div className="max-w-6xl mx-auto px-8 text-center" style={{ perspective: "1500px" }}>
                <p
                    ref={textRef}
                    className="text-4xl md:text-5xl lg:text-[4.5rem] font-light leading-[1.1] tracking-tight will-change-transform"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Words injected via useEffect */}
                </p>
            </div>
        </section>
    );
}
