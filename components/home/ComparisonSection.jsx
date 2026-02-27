// components/ComparisonSection.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cloud, FileSearch, GitCompare, GlobeLock, Lock, Radio, ShieldCheck, WifiOff } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ComparisonSection() {
    const badgeRef = useRef(null);
    const titleRef = useRef(null);
    const tableRef = useRef(null);

    useEffect(() => {
        // Badge
        gsap.to(badgeRef.current, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: badgeRef.current,
                start: "top 88%",
                toggleActions: "play none none none",
            },
        });

        // Title
        gsap.to(titleRef.current, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 88%",
                toggleActions: "play none none none",
            },
        });

        // Table scale
        gsap.to(tableRef.current, {
            scale: 1,
            opacity: 1,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
                trigger: tableRef.current,
                start: "top 88%",
                toggleActions: "play none none none",
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <>
            <section id="comparison" className="py-48 relative bg-[#f5f3f0]">
                {/* Mesh background */}
                <div className="absolute inset-0 mesh-bg opacity-15" />

                {/* Orb */}
                <div
                    className="orb absolute w-[600px] h-[500px] rounded-full blur-[80px] pointer-events-none bg-[#10b981]/5"
                    style={{ top: "10%", left: "40%" }}
                />

                <div className="relative max-w-5xl mx-auto px-8">
                    {/* Intro */}
                    <div className="text-center mb-20">
                        <div
                            ref={badgeRef}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#10b981]/8 border border-[#10b981]/20 mb-8 opacity-0 translate-y-[80px]"
                        >
                            <GitCompare className="w-3 h-3 text-[#10b981]" />
                            <span className="text-[#10b981] text-[11px] font-light tracking-[0.25em] uppercase">
                                Why Genovation
                            </span>
                        </div>

                        <h2
                            ref={titleRef}
                            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.04em] leading-[1] opacity-0 translate-y-[80px]"
                        >
                            What Makes This{" "}
                            <span className="bg-gradient-to-r from-[#059669] via-[#0891b2] to-[#2563eb] bg-clip-text text-transparent">
                                Different
                            </span>
                        </h2>
                    </div>

                    {/* Table */}
                    <div
                        ref={tableRef}
                        className="opacity-0 scale-[0.8]"
                        id="compTable"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-b from-[#10b981]/4 via-transparent to-[#06b6d4]/3 rounded-[32px] blur-2xl" />
                        <div className="relative rounded-2xl border border-black/[0.1] overflow-hidden bg-white/90 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                            <div className="comp-row grid grid-cols-3 gap-0 border-b border-black/[0.1] bg-black/[0.03]">
                                <div className="comp-cell p-5 md:p-[20px_24px]">
                                    <span className="text-xs text-gray-600 font-light tracking-[0.15em] uppercase">
                                        Capability
                                    </span>
                                </div>
                                <div className="comp-cell text-center p-5 md:p-[20px_24px]">
                                    <span className="text-xs text-gray-600 font-light tracking-[0.15em] uppercase">
                                        Conventional AI
                                    </span>
                                </div>
                                <div className="comp-cell text-center p-5 md:p-[20px_24px] bg-[#10b981]/8">
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-5 h-5 rounded-md bg-gradient-to-br from-[#10b981] to-[#06b6d4] flex items-center justify-center">
                                            <ShieldCheck className="w-3 h-3 text-black" />
                                        </div>
                                        <span className="text-xs text-[#10b981] font-light tracking-[0.1em] uppercase">
                                            Genovation
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="comp-row grid grid-cols-3 gap-0 border-b border-black/[0.08]">
                                <div className="comp-cell comp-cell-label flex items-center gap-2.5 p-5 md:p-[20px_24px]">
                                    <div className="w-6 h-6 rounded-lg bg-black/[0.05] flex items-center justify-center">
                                        <Cloud className="w-3 h-3 text-gray-600" />
                                    </div>
                                    Data Location
                                </div>
                                <div className="comp-cell comp-cell-old flex items-center justify-center gap-1.5 p-5 md:p-[20px_24px]">
                                    <span className="text-gray-500 text-sm">-</span> Cloud-dependent
                                </div>
                                <div className="comp-cell comp-cell-new flex items-center justify-center gap-2 p-5 md:p-[20px_24px] bg-[#10b981]/8 text-[#047857]">
                                    <ShieldCheck className="w-4 h-4 text-[#047857]" />
                                    100% On-Premise
                                </div>
                            </div>

                            <div className="comp-row grid grid-cols-3 gap-0 border-b border-black/[0.08]">
                                <div className="comp-cell comp-cell-label flex items-center gap-2.5 p-5 md:p-[20px_24px]">
                                    <div className="w-6 h-6 rounded-lg bg-black/[0.05] flex items-center justify-center">
                                        <ShieldCheck className="w-3 h-3 text-gray-600" />
                                    </div>
                                    Output Verification
                                </div>
                                <div className="comp-cell comp-cell-old flex items-center justify-center gap-1.5 p-5 md:p-[20px_24px]">
                                    <span className="text-gray-500 text-sm">-</span> None
                                </div>
                                <div className="comp-cell comp-cell-new flex items-center justify-center gap-2 p-5 md:p-[20px_24px] bg-[#10b981]/8 text-[#047857]">
                                    <ShieldCheck className="w-4 h-4 text-[#047857]" />
                                    JUDGE Layer
                                </div>
                            </div>

                            <div className="comp-row grid grid-cols-3 gap-0 border-b border-black/[0.08]">
                                <div className="comp-cell comp-cell-label flex items-center gap-2.5 p-5 md:p-[20px_24px]">
                                    <div className="w-6 h-6 rounded-lg bg-black/[0.05] flex items-center justify-center">
                                        <Lock className="w-3 h-3 text-gray-600" />
                                    </div>
                                    Encryption
                                </div>
                                <div className="comp-cell comp-cell-old flex items-center justify-center gap-1.5 p-5 md:p-[20px_24px]">
                                    <span className="text-gray-500 text-sm">-</span> Standard TLS
                                </div>
                                <div className="comp-cell comp-cell-new flex items-center justify-center gap-2 p-5 md:p-[20px_24px] bg-[#10b981]/8 text-[#047857]">
                                    <ShieldCheck className="w-4 h-4 text-[#047857]" />
                                    Post-Quantum
                                </div>
                            </div>

                            <div className="comp-row grid grid-cols-3 gap-0 border-b border-black/[0.08]">
                                <div className="comp-cell comp-cell-label flex items-center gap-2.5 p-5 md:p-[20px_24px]">
                                    <div className="w-6 h-6 rounded-lg bg-black/[0.05] flex items-center justify-center">
                                        <WifiOff className="w-3 h-3 text-gray-600" />
                                    </div>
                                    Air-Gapped Deploy
                                </div>
                                <div className="comp-cell comp-cell-old flex items-center justify-center gap-1.5 p-5 md:p-[20px_24px]">
                                    <span className="text-gray-500 text-sm">-</span> Requires internet
                                </div>
                                <div className="comp-cell comp-cell-new flex items-center justify-center gap-2 p-5 md:p-[20px_24px] bg-[#10b981]/8 text-[#047857]">
                                    <ShieldCheck className="w-4 h-4 text-[#047857]" />
                                    Native
                                </div>
                            </div>

                            <div className="comp-row grid grid-cols-3 gap-0 border-b border-black/[0.08]">
                                <div className="comp-cell comp-cell-label flex items-center gap-2.5 p-5 md:p-[20px_24px]">
                                    <div className="w-6 h-6 rounded-lg bg-black/[0.05] flex items-center justify-center">
                                        <FileSearch className="w-3 h-3 text-gray-600" />
                                    </div>
                                    Audit Trail
                                </div>
                                <div className="comp-cell comp-cell-old flex items-center justify-center gap-1.5 p-5 md:p-[20px_24px]">
                                    <span className="text-gray-500 text-sm">-</span> Partial logs
                                </div>
                                <div className="comp-cell comp-cell-new flex items-center justify-center gap-2 p-5 md:p-[20px_24px] bg-[#10b981]/8 text-[#047857]">
                                    <ShieldCheck className="w-4 h-4 text-[#047857]" />
                                    Immutable
                                </div>
                            </div>

                            <div className="comp-row grid grid-cols-3 gap-0 border-b border-black/[0.08]">
                                <div className="comp-cell comp-cell-label flex items-center gap-2.5 p-5 md:p-[20px_24px]">
                                    <div className="w-6 h-6 rounded-lg bg-black/[0.05] flex items-center justify-center">
                                        <GlobeLock className="w-3 h-3 text-gray-600" />
                                    </div>
                                    Agent Orchestration
                                </div>
                                <div className="comp-cell comp-cell-old flex items-center justify-center gap-1.5 p-5 md:p-[20px_24px]">
                                    <span className="text-gray-500 text-sm">-</span> Single model
                                </div>
                                <div className="comp-cell comp-cell-new flex items-center justify-center gap-2 p-5 md:p-[20px_24px] bg-[#10b981]/8 text-[#047857]">
                                    <ShieldCheck className="w-4 h-4 text-[#047857]" />
                                    Mentis AgentOS
                                </div>
                            </div>

                            <div className="comp-row grid grid-cols-3 gap-0 border-b border-black/[0.08]">
                                <div className="comp-cell comp-cell-label flex items-center gap-2.5 p-5 md:p-[20px_24px]">
                                    <div className="w-6 h-6 rounded-lg bg-black/[0.05] flex items-center justify-center">
                                        <Radio className="w-3 h-3 text-gray-600" />
                                    </div>
                                    IoT & SCADA
                                </div>
                                <div className="comp-cell comp-cell-old flex items-center justify-center gap-1.5 p-5 md:p-[20px_24px]">
                                    <span className="text-gray-500 text-sm">-</span> Third-party
                                </div>
                                <div className="comp-cell comp-cell-new flex items-center justify-center gap-2 p-5 md:p-[20px_24px] bg-[#10b981]/8 text-[#047857]">
                                    <ShieldCheck className="w-4 h-4 text-[#047857]" />
                                    Built-in Backbone
                                </div>
                            </div>

                            <div className="comp-row grid grid-cols-3 gap-0">
                                <div className="comp-cell comp-cell-label flex items-center gap-2.5 p-5 md:p-[20px_24px]">
                                    <div className="w-6 h-6 rounded-lg bg-black/[0.05] flex items-center justify-center">
                                        <ShieldCheck className="w-3 h-3 text-gray-600" />
                                    </div>
                                    Regulatory Compliance
                                </div>
                                <div className="comp-cell comp-cell-old flex items-center justify-center gap-1.5 p-5 md:p-[20px_24px]">
                                    <span className="text-gray-500 text-sm">-</span> Your responsibility
                                </div>
                                <div className="comp-cell comp-cell-new flex items-center justify-center gap-2 p-5 md:p-[20px_24px] bg-[#10b981]/8 text-[#047857]">
                                    <ShieldCheck className="w-4 h-4 text-[#047857]" />
                                    7 Frameworks
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="divider-enhanced h-px bg-gradient-to-r from-transparent via-[#10b981]/20 to-transparent relative z-10" />
        </>
    );
}