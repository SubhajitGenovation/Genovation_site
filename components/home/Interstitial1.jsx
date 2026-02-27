// components/Interstitial1.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Interstitial1() {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const interWords = [
        "Your", "data", "shouldn't", "leave", "your", "walls.",
        "Your", "AI", "shouldn't", "be", "a", "black", "box."
    ];

    useEffect(() => {
        const textElement = textRef.current;
        if (!textElement) return;

        const wordEls = textElement.querySelectorAll(".inter-word");

        // Master timeline pinned to scroll
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#inter1",
                start: "top top",
                end: "80% top",
                scrub: 0.5,
                pin: "#inter1Pin",
                pinSpacing: true,
            },
        });

        // Phase 1: Entire paragraph skews from extreme → straight
        tl.fromTo(
            textElement,
            {
                skewY: 14,
                skewX: -6,
                rotateX: 20,
                scale: 0.85,
                opacity: 0.15,
                y: 80,
            },
            {
                skewY: 0,
                skewX: 0,
                rotateX: 0,
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 2,
                ease: "none",
            }
        );

        // Phase 2: Individual words light up in sequence
        wordEls.forEach((w, i) => {
            tl.fromTo(
                w,
                {
                    opacity: 0.3,
                    filter: "blur(2px)",
                },
                {
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 0.15,
                    ease: "power2.out",
                },
                2 + (i / wordEls.length) * 1.5
            );
        });

        // Phase 3: Hold visible
        tl.to({}, { duration: 2 });

        // Cleanup
        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <section
            id="inter1"
            className="relative"
            style={{ height: "300vh" }}
            ref={containerRef}
        >
            <div
                id="inter1Pin"
                className="sticky top-0 h-screen flex items-center justify-center"
            >
                <div
                    className="max-w-5xl mx-auto px-8 text-center"
                    style={{ perspective: "1200px" }}
                >
                    <p
                        ref={textRef}
                        className="display-inter text-4xl md:text-6xl lg:text-[4.5rem] text-gray-900 font-light tracking-[-0.03em] leading-[1.15]"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {interWords.map((word, index) => (
                            <span key={index}>
                                <span className="inter-word">{word}</span>
                                {index < interWords.length - 1 && " "}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
        </section>
    );
}