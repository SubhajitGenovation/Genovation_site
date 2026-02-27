// components/ProductsHorizontalScroll.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    BarChart3,
    Bot,
    MessageCircle,
    Package,
    Radar,
    Search,
    TrendingUp,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ProductsHorizontalScroll() {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const pinRef = useRef(null);
    const introRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;
        const pin = pinRef.current;
        const intro = introRef.current;
        if (!track || !pin || !intro) return;

        const ctx = gsap.context(() => {
            // Phase 1: Reveal intro text elements with staggered animation
            const revealEls = intro.querySelectorAll(".r-up");
            revealEls.forEach((el) => {
                gsap.fromTo(
                    el,
                    { y: 80, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 88%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });

            // Phase 2: Horizontal scroll — pinned cards (matching home.html exactly)
            gsap.to(track, {
                x: () => -(track.scrollWidth - window.innerWidth + 60),
                ease: "none",
                scrollTrigger: {
                    trigger: pin,
                    start: "top top",
                    end: () => `+=${track.scrollWidth - window.innerWidth}`,
                    pin: true,
                    scrub: 1.2,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section
                ref={sectionRef}
                id="hScrollSection"
                className="relative bg-[#f5f3f0]"
            >
                {/* Subtle mesh background */}
                <div className="absolute inset-0 opacity-15 pointer-events-none mesh-bg" />

                {/* Decorative orb */}
                <div
                    className="orb absolute w-[700px] h-[500px] rounded-full blur-[80px] pointer-events-none bg-[#10b981]/6"
                    style={{ top: "10%", left: "20%" }}
                />

                {/* Intro text — elements use r-up for scroll-triggered reveal */}
                <div
                    ref={introRef}
                    className="py-32 px-8 max-w-7xl mx-auto text-center mb-8"
                >
                    <div className="r-up inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 mb-8">
                        <Package className="w-3.5 h-3.5 text-[#10b981]" />
                        <span className="text-[#10b981] text-[11px] font-light tracking-[0.25em] uppercase">
                            Dedicated Intelligence Apps
                        </span>
                    </div>

                    <h2 className="r-up text-5xl md:text-7xl lg:text-8xl font-light leading-[0.92] tracking-[-0.04em]">
                        Separate SKUs.
                        <br />
                        <span className="bg-gradient-to-r from-[#059669] via-[#0891b2] to-[#2563eb] bg-clip-text text-transparent">
                            Purpose-Built Intelligence.
                        </span>
                    </h2>

                    <p className="r-up text-base md:text-lg text-gray-600 font-light max-w-3xl mx-auto mt-6 leading-relaxed">
                        Beyond the Mentis OS agent library, our dedicated SKUs are standalone
                        intelligence applications — each purpose-built for a specific domain.
                    </p>
                </div>

                {/* Horizontal scroll container */}
                <div
                    ref={pinRef}
                    id="hScrollPin"
                    style={{ height: "200vh", position: "relative" }}
                >
                    <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                        <div
                            ref={trackRef}
                            className="h-scroll-track flex gap-8 pl-8"
                            style={{ willChange: "transform" }}
                        >
                            {/* Card 1 - Knowledge Intelligence */}
                            <div className="h-panel min-w-[520px] max-w-[520px] flex-shrink-0">
                                <div className="card p-8 md:p-10 h-full flex flex-col bg-white/85 backdrop-blur-sm border border-gray-200/60 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#10b981]/25 transition-all duration-500">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 flex items-center justify-center">
                                            <Search className="w-5 h-5 text-[#10b981]" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-light text-gray-900 tracking-tight">
                                                Knowledge Intelligence
                                            </h3>
                                            <p className="text-[11px] text-gray-600 font-light">
                                                01 — Institutional Memory
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-600 font-light leading-relaxed mb-5">
                                        Search across millions of enterprise documents with semantic
                                        understanding. Every answer grounded in your data, verified by
                                        JUDGE.
                                    </p>

                                    <div className="space-y-2 flex-1">
                                        <div className="p-3 rounded-xl bg-[#10b981]/6 border border-[#10b981]/12">
                                            <div className="flex justify-between items-center mb-1.5">
                                                <span className="text-[12px] text-gray-700 font-light">
                                                    EU Data Retention Framework v4.2
                                                </span>
                                                <span className="px-2 py-0.5 rounded-full bg-[#10b981]/15 text-[9px] text-[#10b981]">
                                                    98% MATCH
                                                </span>
                                            </div>
                                            <p className="text-[11px] text-gray-600 font-light leading-relaxed">
                                                EU customer personal data retained for 36 months
                                                post-contract termination with automated deletion...
                                            </p>
                                            <div className="flex items-center gap-2 mt-1.5">
                                                <span className="text-[9px] text-gray-600 font-mono">
                                                    Legal/GDPR/retention.pdf
                                                </span>
                                                <span className="text-[8px] text-[#10b981]">✓ JUDGE</span>
                                            </div>
                                        </div>

                                        <div className="p-3 rounded-xl bg-gray-50/50 border border-gray-200/60">
                                            <div className="flex justify-between items-center mb-1.5">
                                                <span className="text-[12px] text-gray-700 font-light">
                                                    Data Processing Agreement
                                                </span>
                                                <span className="px-2 py-0.5 rounded-full bg-[#06b6d4]/15 text-[9px] text-[#06b6d4]">
                                                    84% MATCH
                                                </span>
                                            </div>
                                            <p className="text-[11px] text-gray-600 font-light leading-relaxed">
                                                Standard DPA clauses referencing Article 17 Right to
                                                Erasure...
                                            </p>
                                        </div>

                                        <div className="p-3 rounded-xl bg-gray-50/50 border border-gray-200/60">
                                            <div className="flex justify-between items-center">
                                                <span className="text-[12px] text-gray-700 font-light">
                                                    Board Minutes — Q3 Privacy
                                                </span>
                                                <span className="px-2 py-0.5 rounded-full bg-[#3b82f6]/15 text-[9px] text-[#3b82f6]">
                                                    71% MATCH
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]/60 animate-pulse" />
                                        <span className="text-[10px] text-[#10b981]/80 font-light">
                                            50+ document types supported
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 - Analytics Intelligence */}
                            <div className="h-panel min-w-[520px] max-w-[520px] flex-shrink-0">
                                <div className="card p-8 md:p-10 h-full flex flex-col bg-white/85 backdrop-blur-sm border border-gray-200/60 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#06b6d4]/25 transition-all duration-500">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-10 h-10 rounded-xl bg-[#06b6d4]/10 flex items-center justify-center">
                                            <BarChart3 className="w-5 h-5 text-[#06b6d4]" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-light text-gray-900 tracking-tight">
                                                Analytics Intelligence
                                            </h3>
                                            <p className="text-[11px] text-gray-600 font-light">
                                                02 — Natural Language to Insight
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-600 font-light leading-relaxed mb-5">
                                        Ask questions in plain English. Mentis translates to SQL, runs
                                        queries, and returns visualized insights — all on-premise.
                                    </p>

                                    <div className="p-3.5 rounded-xl bg-gray-50/50 border border-gray-200/60 mb-3">
                                        <div className="flex items-center gap-2 mb-3">
                                            <MessageCircle className="w-3.5 h-3.5 text-[#06b6d4]/60" />
                                            <span className="text-[11px] text-gray-600 font-light italic">
                                                "Show revenue by region with trend analysis"
                                            </span>
                                        </div>

                                        {/* Simple chart - SVG */}
                                        <svg viewBox="0 0 400 100" className="w-full">
                                            <defs>
                                                <linearGradient id="cg1" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                                                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                                                </linearGradient>
                                                <linearGradient id="cg2" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.15" />
                                                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                                                </linearGradient>
                                            </defs>
                                            <line x1="40" y1="85" x2="380" y2="85" stroke="rgba(0,0,0,0.06)" strokeWidth="0.5" />
                                            <line x1="40" y1="50" x2="380" y2="50" stroke="rgba(0,0,0,0.04)" strokeWidth="0.5" strokeDasharray="3" />
                                            <text x="120" y="97" fill="rgba(0,0,0,0.3)" fontSize="7" textAnchor="middle" fontFamily="monospace">Q1</text>
                                            <text x="200" y="97" fill="rgba(0,0,0,0.3)" fontSize="7" textAnchor="middle" fontFamily="monospace">Q2</text>
                                            <text x="280" y="97" fill="rgba(0,0,0,0.3)" fontSize="7" textAnchor="middle" fontFamily="monospace">Q3</text>
                                            <text x="360" y="97" fill="rgba(0,0,0,0.3)" fontSize="7" textAnchor="middle" fontFamily="monospace">Q4</text>
                                            <path d="M120 55 L200 42 L280 30 L360 15 L360 85 L120 85 Z" fill="url(#cg1)" />
                                            <polyline points="120,55 200,42 280,30 360,15" fill="none" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.7" />
                                            <path d="M120 68 L200 62 L280 55 L360 45 L360 85 L120 85 Z" fill="url(#cg2)" />
                                            <polyline points="120,68 200,62 280,55 360,45" fill="none" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.5" />
                                            <circle cx="360" cy="15" r="3" fill="#10b981" opacity="0.8" />
                                        </svg>
                                    </div>

                                    <div className="p-3 rounded-xl bg-[#06b6d4]/5 border border-[#06b6d4]/12">
                                        <div className="flex items-center gap-2">
                                            <TrendingUp className="w-3.5 h-3.5 text-[#06b6d4]" />
                                            <span className="text-[11px] text-[#06b6d4] font-light">
                                                Anomaly: APAC revenue +34% QoQ
                                            </span>
                                        </div>
                                        <p className="text-[10px] text-gray-600 font-light mt-1">
                                            Driven by $8.2M contract with Mitsubishi Heavy Industries
                                        </p>
                                    </div>

                                    <div className="mt-4 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]/60 animate-pulse" />
                                        <span className="text-[10px] text-[#06b6d4]/80 font-light">
                                            Connects to any SQL database
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 - Strategy Intelligence */}
                            <div className="h-panel min-w-[520px] max-w-[520px] flex-shrink-0">
                                <div className="card p-8 md:p-10 h-full flex flex-col bg-white/85 backdrop-blur-sm border border-gray-200/60 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#8b5cf6]/25 transition-all duration-500">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-10 h-10 rounded-xl bg-[#8b5cf6]/10 flex items-center justify-center">
                                            <Radar className="w-5 h-5 text-[#8b5cf6]" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-light text-gray-900 tracking-tight">
                                                Strategy Intelligence
                                            </h3>
                                            <p className="text-[11px] text-gray-600 font-light">
                                                03 — Competitive Radar
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-600 font-light leading-relaxed mb-5">
                                        Continuous monitoring of competitors, markets, and
                                        regulations. Signals synthesized into actionable briefs.
                                    </p>

                                    <div className="space-y-2 flex-1">
                                        <div className="p-3 rounded-xl bg-gray-50/50 border-l-2 border-l-rose-400/60 border border-gray-200/60">
                                            <div className="text-[10px] text-rose-600/80 font-light mb-1">
                                                ● HIGH PRIORITY
                                            </div>
                                            <p className="text-[11px] text-gray-600 font-light leading-relaxed">
                                                Competitor Alpha secured $340M Series D — entering your
                                                core market
                                            </p>
                                            <span className="text-[9px] text-gray-600 font-mono mt-1 block">2 min ago</span>
                                        </div>

                                        <div className="p-3 rounded-xl bg-gray-50/50 border-l-2 border-l-amber-400/60 border border-gray-200/60">
                                            <div className="text-[10px] text-amber-600/80 font-light mb-1">
                                                ● REGULATORY
                                            </div>
                                            <p className="text-[11px] text-gray-600 font-light leading-relaxed">
                                                EU AI Act enforcement timeline accelerated — Q2 2026
                                            </p>
                                            <span className="text-[9px] text-gray-600 font-mono mt-1 block">18 min ago</span>
                                        </div>

                                        <div className="p-3 rounded-xl bg-gray-50/50 border-l-2 border-l-[#10b981]/60 border border-gray-200/60">
                                            <div className="text-[10px] text-[#10b981] font-light mb-1">
                                                ● OPPORTUNITY
                                            </div>
                                            <p className="text-[11px] text-gray-600 font-light leading-relaxed">
                                                Lockheed Martin posted RFP for AI document analysis
                                            </p>
                                            <span className="text-[9px] text-gray-600 font-mono mt-1 block">1 hr ago</span>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]/60 animate-pulse" />
                                        <span className="text-[10px] text-[#8b5cf6]/80 font-light">
                                            Real-time signal processing
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 4 - CX Intelligence */}
                            <div className="h-panel min-w-[520px] max-w-[520px] flex-shrink-0">
                                <div className="card p-8 md:p-10 h-full flex flex-col bg-white/85 backdrop-blur-sm border border-gray-200/60 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-rose-400/25 transition-all duration-500">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center">
                                            <MessageCircle className="w-5 h-5 text-rose-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-light text-gray-900 tracking-tight">
                                                CX Intelligence
                                            </h3>
                                            <p className="text-[11px] text-gray-600 font-light">
                                                04 — AI-Powered Customer Experience
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-600 font-light leading-relaxed mb-5">
                                        Deploy AI agents that handle complex queries with human-like
                                        reasoning while maintaining enterprise security.
                                    </p>

                                    <div className="space-y-2.5 flex-1">
                                        <div className="flex items-start gap-3">
                                            <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-xs text-gray-600 mt-0.5">
                                                JM
                                            </div>
                                            <div className="p-3 rounded-xl bg-gray-50/50 border border-gray-200/60">
                                                <p className="text-[11px] text-gray-600 font-light leading-relaxed">
                                                    Why was my €2.4M wire to Deutsche Bank flagged?
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="w-7 h-7 rounded-full bg-rose-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Bot className="w-3.5 h-3.5 text-rose-600/70" />
                                            </div>
                                            <div className="p-3 rounded-xl bg-gray-50/50 border border-gray-200/60">
                                                <p className="text-[11px] text-gray-600 font-light leading-relaxed mb-2">
                                                    AML screening flagged a new beneficiary pattern. Your
                                                    subsidiary was reclassified during Q3. Whitelist request
                                                    submitted.
                                                </p>
                                                <div className="flex gap-2">
                                                    <span className="px-2 py-0.5 rounded-full bg-[#10b981]/10 text-[8px] text-[#10b981]">
                                                        ✓ VERIFIED
                                                    </span>
                                                    <span className="px-2 py-0.5 rounded-full bg-rose-500/10 text-[8px] text-rose-600">
                                                        ESCALATION READY
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex items-center justify-between p-3 rounded-xl bg-gray-50/50 border border-gray-200/60">
                                        <span className="text-[10px] text-gray-600">
                                            Confidence: <span className="text-[#10b981]">94%</span>
                                        </span>
                                        <span className="text-[10px] text-gray-600">E2E Encrypted</span>
                                    </div>
                                </div>
                            </div>

                            {/* Spacer / teaser */}
                            <div className="h-panel min-w-[520px] max-w-[520px] flex-shrink-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="flex gap-2 justify-center mb-4 opacity-40">
                                        <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                                        <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                                        <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                                    </div>
                                    <span className="text-[15px] text-gray-500 font-light tracking-wide">
                                        More SKUs coming soon
                                    </span>
                                </div>
                            </div>

                            {/* Extra padding at end */}
                            <div style={{ minWidth: "100px", flexShrink: 0 }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider after section */}
            <div className="divider-enhanced h-px bg-gradient-to-r from-transparent via-[#10b981]/20 to-transparent relative z-10" />
        </>
    );
}