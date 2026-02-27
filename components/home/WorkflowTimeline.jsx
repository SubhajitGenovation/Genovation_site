// components/WorkflowTimeline.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Workflow } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function WorkflowTimeline() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            // Reveal up animations (matching home.html .r-up pattern)
            section.querySelectorAll(".r-up").forEach((el) => {
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

            // Scale-in reveal for the mock (matching home.html .r-scale pattern)
            section.querySelectorAll(".r-scale").forEach((el) => {
                gsap.fromTo(
                    el,
                    { scale: 0.8, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 1.4,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 88%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section ref={sectionRef} id="workflow" className="py-48 relative" style={{ backgroundColor: "var(--bg)" }}>
                {/* Mesh background */}
                <div className="absolute inset-0 mesh-bg opacity-15" />

                {/* Decorative orb */}
                <div
                    className="orb w-[600px] h-[400px] bg-cyan-500/[0.06]"
                    style={{ top: "15%", right: "10%" }}
                />

                <div className="relative max-w-6xl mx-auto px-8">
                    {/* Intro */}
                    <div className="text-center mb-24">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/[0.14] border border-cyan-500/[0.2] mb-8 r-up">
                            <Workflow className="w-3 h-3 text-cyan-600" />
                            <span className="text-cyan-600 text-[11px] font-light tracking-[0.25em] uppercase">
                                Live Workflow
                            </span>
                        </div>
                        <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
                            Watch a Query
                            <br />
                            <span className="text-gradient">Flow Through Mentis</span>
                        </h2>
                        <p className="text-lg text-gray-600 font-light max-w-xl mx-auto mt-6 r-up">
                            From natural language to verified answer — in under 800
                            milliseconds.
                        </p>
                    </div>

                    {/* Grid: Timeline + Mock */}
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        {/* Left - Timeline */}
                        <div>
                            {/* Step 1 */}
                            <div className="timeline-step r-up" style={{ paddingBottom: 32 }}>
                                <div className="timeline-dot" />
                                <div className="text-[10px] text-emerald-600 font-mono tracking-wider uppercase mb-1">
                                    Step 1 — 0ms
                                </div>
                                <div className="text-[17px] font-light text-gray-900 mb-2">
                                    Query Ingestion
                                </div>
                                <p className="text-[15px] text-gray-600 font-light leading-relaxed">
                                    &quot;What were our top 3 revenue risks from last quarter&apos;s audit?&quot;
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="timeline-step r-up" style={{ paddingBottom: 32 }}>
                                <div className="timeline-dot" />
                                <div className="text-[10px] text-emerald-600 font-mono tracking-wider uppercase mb-1">
                                    Step 2 — 45ms
                                </div>
                                <div className="text-[17px] font-light text-gray-900 mb-2">
                                    Intent Classification
                                </div>
                                <p className="text-[15px] text-gray-600 font-light leading-relaxed">
                                    Document search + risk analysis + temporal filter. Routes to
                                    Knowledge + Analytics agents.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="timeline-step r-up" style={{ paddingBottom: 32 }}>
                                <div className="timeline-dot" />
                                <div className="text-[10px] text-cyan-600 font-mono tracking-wider uppercase mb-1">
                                    Step 3 — 120ms
                                </div>
                                <div className="text-[17px] font-light text-gray-900 mb-2">
                                    Multi-Agent Retrieval
                                </div>
                                <p className="text-[15px] text-gray-600 font-light leading-relaxed">
                                    14,200 audit documents searched. Risk metrics queried. Results
                                    merged.
                                </p>
                            </div>

                            {/* Step 4 */}
                            <div className="timeline-step r-up" style={{ paddingBottom: 32 }}>
                                <div className="timeline-dot" style={{ borderColor: "var(--cyan)" }} />
                                <div className="text-[10px] text-cyan-600 font-mono tracking-wider uppercase mb-1">
                                    Step 4 — 380ms
                                </div>
                                <div className="text-[17px] font-light text-gray-900 mb-2">
                                    Reasoning &amp; Synthesis
                                </div>
                                <p className="text-[15px] text-gray-600 font-light leading-relaxed">
                                    Chain-of-thought ranks risks by severity × probability.
                                </p>
                            </div>

                            {/* Step 5 */}
                            <div className="timeline-step r-up" style={{ paddingBottom: 32 }}>
                                <div className="timeline-dot" style={{ borderColor: "var(--violet)" }} />
                                <div className="text-[10px] text-violet-600 font-mono tracking-wider uppercase mb-1">
                                    Step 5 — 620ms
                                </div>
                                <div className="text-[17px] font-light text-gray-900 mb-2">
                                    JUDGE Verification
                                </div>
                                <p className="text-[15px] text-gray-600 font-light leading-relaxed">
                                    Every claim cross-referenced. Hallucination check passed. 96.8%
                                    confidence.
                                </p>
                            </div>

                            {/* Step 6 */}
                            <div className="timeline-step r-up">
                                <div className="timeline-dot" />
                                <div className="text-[10px] text-emerald-600 font-mono tracking-wider uppercase mb-1">
                                    Step 6 — 780ms
                                </div>
                                <div className="text-[17px] font-light text-gray-900 mb-2">
                                    Encrypted Delivery
                                </div>
                                <p className="text-[15px] text-gray-600 font-light leading-relaxed">
                                    CipherVault encrypted, audit trail logged, citations attached.
                                </p>
                            </div>
                        </div>

                        {/* Right - Sticky Mock Result */}
                        <div className="r-scale" style={{ position: "sticky", top: 120 }}>
                            <div className="industry-mock">
                                <div className="mock-header">
                                    <div className="mock-dot r" />
                                    <div className="mock-dot y" />
                                    <div className="mock-dot g" />
                                    <span className="text-[9px] text-gray-600 font-mono ml-2">
                                        MENTIS — QUERY RESULT
                                    </span>
                                    <span className="ml-auto px-2.5 py-1 rounded-full bg-emerald-500/10 text-[8px] text-emerald-600 font-mono">
                                        780ms · VERIFIED
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-sm font-light text-gray-700 mb-5">
                                        Top 3 Revenue Risks — Q3 Audit
                                    </h4>

                                    <div className="space-y-3">
                                        {/* Risk 1 - Critical */}
                                        <div className="p-4 rounded-xl bg-black/[0.03] border-l-2 border-l-rose-400/60 border border-black/[0.06]">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-xs text-gray-700 font-light">
                                                    1. Supply Chain Concentration
                                                </span>
                                                <span className="px-2 py-0.5 rounded-full bg-rose-400/15 text-[8px] text-rose-600">
                                                    CRITICAL
                                                </span>
                                            </div>
                                            <p className="text-[11px] text-gray-600 font-light leading-relaxed">
                                                68% semiconductor procurement relies on 2 vendors.
                                                Impact: $23-31M annually.
                                            </p>
                                            <span className="text-[9px] text-gray-600 font-mono mt-2 block">
                                                Audit-Q3-2024.pdf, Procurement-Report.xlsx
                                            </span>
                                        </div>

                                        {/* Risk 2 - High */}
                                        <div className="p-4 rounded-xl bg-black/[0.03] border-l-2 border-l-amber-400/60 border border-black/[0.06]">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-xs text-gray-700 font-light">
                                                    2. DORA Compliance Gap
                                                </span>
                                                <span className="px-2 py-0.5 rounded-full bg-amber-500/15 text-[8px] text-amber-600">
                                                    HIGH
                                                </span>
                                            </div>
                                            <p className="text-[11px] text-gray-600 font-light leading-relaxed">
                                                Readiness at 62%. Non-compliance penalty: up to 2%
                                                global turnover.
                                            </p>
                                        </div>

                                        {/* Risk 3 - High */}
                                        <div className="p-4 rounded-xl bg-black/[0.03] border-l-2 border-l-amber-400/60 border border-black/[0.06]">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-xs text-gray-700 font-light">
                                                    3. Mid-Market Churn
                                                </span>
                                                <span className="px-2 py-0.5 rounded-full bg-amber-500/15 text-[8px] text-amber-600">
                                                    HIGH
                                                </span>
                                            </div>
                                            <p className="text-[11px] text-gray-600 font-light leading-relaxed">
                                                12.3% churn in $50K-$200K segment. Revenue at risk:
                                                $14.7M.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 mt-5 pt-4 border-t border-black/[0.04]">
                                        <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-[8px] text-emerald-600">
                                            ✓ JUDGE VERIFIED
                                        </span>
                                        <span className="px-2.5 py-1 rounded-full bg-blue-400/10 text-[8px] text-blue-400">
                                            5 SOURCES
                                        </span>
                                        <span className="px-2.5 py-1 rounded-full bg-violet-400/10 text-[8px] text-violet-600">
                                            96.8% CONFIDENCE
                                        </span>
                                        <span className="ml-auto text-[8px] text-gray-600 font-mono">
                                            AUDIT-ID: MNT-Q3-7829
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="divider-enhanced" />
        </>
    );
}