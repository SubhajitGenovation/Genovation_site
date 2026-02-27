// components/FinalCTA.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, BookOpen, Database, FileText, Rocket, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
    const headlineRef = useRef(null);
    const cardsRef = useRef([]);
    const paraRef = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        // Headline scale
        gsap.fromTo(
            headlineRef.current,
            { scale: 0.7, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 1.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: headlineRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );

        // Cards stagger
        cardsRef.current.forEach((card, i) => {
            gsap.to(card, {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 88%",
                    toggleActions: "play none none none",
                },
                delay: i * 0.15,
            });
        });

        // Paragraph
        gsap.to(paraRef.current, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: paraRef.current,
                start: "top 88%",
                toggleActions: "play none none none",
            },
        });

        // Buttons
        gsap.to(buttonsRef.current, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: buttonsRef.current,
                start: "top 88%",
                toggleActions: "play none none none",
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <section id="cta" className="py-56 relative overflow-hidden bg-[#f5f3f0]">
            {/* Orb */}
            <div
                className="orb absolute w-[800px] h-[800px] rounded-full blur-[80px] pointer-events-none bg-gradient-to-br from-[#10b981]/6 via-[#06b6d4]/4 to-[#8b5cf6]/6"
                style={{ top: "10%", left: "20%" }}
            />

            {/* Mesh bg */}
            <div className="absolute inset-0 mesh-bg opacity-20" />

            <div className="relative max-w-4xl mx-auto px-8 text-center">
                {/* Headline */}
                <h2
                    ref={headlineRef}
                    className="text-6xl md:text-8xl lg:text-[9rem] font-light leading-[0.95] tracking-[-0.05em] mb-12 opacity-0 scale-[0.7]"
                >
                    Intelligence
                    <br />
                    <span className="bg-gradient-to-r from-[#059669] via-[#0891b2] to-[#2563eb] bg-clip-text text-transparent">
                        Without
                        <br />
                        Compromise
                    </span>
                </h2>

                {/* Cards grid */}
                <div className="grid md:grid-cols-3 gap-4 mb-16" id="ctaCards">
                    <div
                        className="card p-6 bg-white/85 shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-black/[0.1] rounded-[20px] transition-all duration-500 hover:translate-y-[-8px] hover:border-[rgba(52,211,153,0.25)] hover:shadow-[0_40px_80px_-20px_rgba(16,185,129,0.12)] opacity-0 translate-y-[80px]"
                        ref={(el) => (cardsRef.current[0] = el)}
                    >
                        <Database className="w-6 h-6 text-[#10b981] mx-auto mb-3" />
                        <p className="text-[15px] text-gray-600 font-light">
                            Your data never leaves your infrastructure
                        </p>
                    </div>

                    <div
                        className="card p-6 bg-white/85 shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-black/[0.1] rounded-[20px] transition-all duration-500 hover:translate-y-[-8px] hover:border-[rgba(52,211,153,0.25)] hover:shadow-[0_40px_80px_-20px_rgba(16,185,129,0.12)] opacity-0 translate-y-[80px]"
                        ref={(el) => (cardsRef.current[1] = el)}
                    >
                        <ShieldCheck className="w-6 h-6 text-[#06b6d4] mx-auto mb-3" />
                        <p className="text-[15px] text-gray-600 font-light">
                            Every AI output verified and auditable
                        </p>
                    </div>

                    <div
                        className="card p-6 bg-white/85 shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-black/[0.1] rounded-[20px] transition-all duration-500 hover:translate-y-[-8px] hover:border-[rgba(52,211,153,0.25)] hover:shadow-[0_40px_80px_-20px_rgba(16,185,129,0.12)] opacity-0 translate-y-[80px]"
                        ref={(el) => (cardsRef.current[2] = el)}
                    >
                        <Rocket className="w-6 h-6 text-[#8b5cf6] mx-auto mb-3" />
                        <p className="text-[15px] text-gray-600 font-light">
                            Enterprise-grade from day one
                        </p>
                    </div>
                </div>

                {/* Paragraph */}
                <p
                    ref={paraRef}
                    className="text-[1.15rem] text-gray-600 font-light mb-16 leading-relaxed opacity-0 translate-y-[80px]"
                >
                    Join the enterprises that refuse to choose between
                    <br />
                    AI capability and data sovereignty.
                    <br />
                    <span className="text-[#10b981]/90 font-light">We built the platform that delivers both.</span>
                </p>

                {/* Buttons */}
                <div
                    ref={buttonsRef}
                    className="flex flex-col sm:flex-row items-center justify-center gap-5 opacity-0 translate-y-[80px]"
                >
                    <button className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-[#10b981] via-[#06b6d4] to-[#10b981] bg-[length:200%_100%] hover:bg-[position:100%_0] text-black text-[15px] font-normal shadow-[0_0_30px_-5px_rgba(16,185,129,0.2),0_0_60px_-15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.25),0_0_80px_-15px_rgba(6,182,212,0.15),0_8px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-400 flex items-center gap-3 hover:translate-y-[-2px]">
                        <span>Contact Sales</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                    </button>

                    <button className="group px-8 py-3.5 rounded-full bg-black/[0.05] border border-white/[0.12] text-gray-600 text-[15px] font-light flex items-center gap-3 hover:border-[#10b981]/25 hover:text-gray-900 hover:bg-black/[0.05] transition-all duration-400 backdrop-blur-sm">
                        <BookOpen className="w-5 h-5" />
                        Documentation
                    </button>

                    <button className="group px-8 py-3.5 rounded-full bg-black/[0.05] border border-white/[0.12] text-gray-600 text-[15px] font-light flex items-center gap-3 hover:border-[#10b981]/25 hover:text-gray-900 hover:bg-black/[0.05] transition-all duration-400 backdrop-blur-sm">
                        <FileText className="w-5 h-5" />
                        Case Studies
                    </button>
                </div>
            </div>
        </section>
    );
}