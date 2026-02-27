// components/IndustriesSection.jsx
import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, GlobeLock, Landmark, Plane, ShieldCheck, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function IndustriesSection() {
    const introRef = useRef(null);
    const financeLeftRef = useRef(null);
    const financeRightRef = useRef(null);
    const aeroLeftRef = useRef(null);
    const aeroRightRef = useRef(null);
    const govEnergyRefs = useRef([]);

    useEffect(() => {
        // Intro reveal
        gsap.to(introRef.current, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: introRef.current,
                start: "top 88%",
                toggleActions: "play none none none",
            },
        });

        // Finance
        gsap.to(financeLeftRef.current, {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: financeLeftRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });
        gsap.to(financeRightRef.current, {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: financeRightRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });

        // Aero
        gsap.to(aeroLeftRef.current, {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: aeroLeftRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });
        gsap.to(aeroRightRef.current, {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: aeroRightRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });

        // Gov & Energy stagger and motion
        govEnergyRefs.current.forEach((el, i) => {
            if (!el) return;

            // Reveal animation
            gsap.to(el, {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 88%",
                    toggleActions: "play none none none",
                },
                delay: i * 0.15,
                onComplete: () => {
                    // Start floating motion after reveal
                    gsap.to(el, {
                        y: "-=6px",
                        duration: 2.5 + i * 0.5,
                        ease: "sine.inOut",
                        repeat: -1,
                        yoyo: true,
                    });
                }
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <>
            <section id="industries" className="py-48 relative bg-[#f5f3f0]">
                {/* Mesh background */}
                <div className="absolute inset-0 mesh-bg opacity-15" />

                {/* Orb */}
                <div
                    className="orb absolute w-[600px] h-[400px] rounded-full blur-[80px] pointer-events-none bg-[#10b981]/6"
                    style={{ top: "5%", left: "30%" }}
                />

                <div className="relative max-w-6xl mx-auto px-8">
                    {/* Intro */}
                    <div className="text-center mb-24 opacity-0 translate-y-[80px]" ref={introRef}>
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#8b5cf6]/14 border border-[#8b5cf6]/20 mb-8">
                            <Building2 className="w-3 h-3 text-[#8b5cf6]" />
                            <span className="text-[#8b5cf6] text-[11px] font-light tracking-[0.25em] uppercase">
                                Industry Solutions
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.04em] leading-[1]">
                            Purpose-Built for
                            <br />
                            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#fb7185] bg-clip-text text-transparent">
                                Regulated Industries
                            </span>
                        </h2>
                    </div>

                    {/* Financial Services */}
                    <div className="relative mb-48" id="indFinance">
                        {/* Accent bg */}
                        <div className="absolute -inset-12 rounded-[48px] bg-gradient-to-br from-[#10b981]/7 via-[#10b981]/2 to-[#06b6d4]/5" />
                        <div className="absolute -inset-12 rounded-[48px] border border-[#10b981]/8" />

                        <div className="relative grid md:grid-cols-2 gap-20 items-center p-10">
                            <div ref={financeLeftRef} className="opacity-0 -translate-x-[100px]">
                                <div className="flex items-center gap-5 mb-8">
                                    <div className="w-[4.5rem] h-[4.5rem] rounded-2xl bg-gradient-to-br from-[#10b981]/25 to-[#06b6d4]/15 flex items-center justify-center border border-[#10b981]/25 shadow-lg shadow-[#10b981]/10">
                                        <Landmark className="w-9 h-9 text-[#10b981]" />
                                    </div>
                                    <Link href="/financial-services" className="group/title">
                                        <h3 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight group-hover/title:text-emerald-700 transition-colors flex items-center gap-3">
                                            Financial Services <span className="text-xl opacity-0 group-hover/title:opacity-100 group-hover/title:translate-x-1 transition-all">→</span>
                                        </h3>
                                    </Link>
                                    <p className="text-[15px] text-gray-500 font-light tracking-wider mt-2">
                                        Banking · Insurance · Asset Management
                                    </p>
                                </div>

                                <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-10">
                                    AML/KYC compliance, algorithmic risk assessment, full-spectrum
                                    financial intelligence — every output verifiable and
                                    audit-ready.
                                </p>

                                <div className="flex gap-3 flex-wrap mb-10">
                                    <span className="px-5 py-2.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/25 text-sm text-[#10b981] font-light">
                                        SEC
                                    </span>
                                    <span className="px-5 py-2.5 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/25 text-sm text-[#06b6d4] font-light">
                                        SOX
                                    </span>
                                    <span className="px-5 py-2.5 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/25 text-sm text-[#3b82f6] font-light">
                                        AML/KYC
                                    </span>
                                    <span className="px-5 py-2.5 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/25 text-sm text-[#8b5cf6] font-light">
                                        DORA
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 gap-5">
                                    <div className="text-center p-6 rounded-2xl bg-[#10b981]/8 border border-[#10b981]/20 shadow-sm">
                                        <div className="text-4xl font-light text-[#10b981]">94%</div>
                                        <div className="text-[13px] text-gray-600 font-light mt-2">
                                            Faster compliance reviews
                                        </div>
                                    </div>

                                    <div className="text-center p-6 rounded-2xl bg-[#06b6d4]/8 border border-[#06b6d4]/20 shadow-sm">
                                        <div className="text-4xl font-light text-[#06b6d4]">$2.1M</div>
                                        <div className="text-[13px] text-gray-600 font-light mt-2">
                                            Annual audit savings
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div ref={financeRightRef} className="opacity-0 translate-x-[100px]">
                                <div className="industry-mock bg-white/90 border border-black/[0.1] rounded-[20px] overflow-hidden transition-all duration-500 hover:border-[#10b981]/25 hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.1)]">
                                    <div className="mock-header flex items-center gap-[6px] p-[10px_14px] border-b border-[rgba(0,0,0,0.08)] bg-[rgba(0,0,0,0.03)] rounded-t-[20px]">
                                        <div className="mock-dot r w-[7px] h-[7px] rounded-full bg-[rgba(255,95,87,0.8)]" />
                                        <div className="mock-dot y w-[7px] h-[7px] rounded-full bg-[rgba(254,188,46,0.8)]" />
                                        <div className="mock-dot g w-[7px] h-[7px] rounded-full bg-[rgba(40,200,64,0.8)]" />
                                        <span className="text-[9px] text-gray-600 font-mono ml-2">COMPLIANCE MONITORING — REAL-TIME</span>
                                    </div>

                                    <div className="p-5">
                                        <div className="grid grid-cols-3 gap-2.5 mb-4">
                                            <div className="text-center p-3 rounded-xl bg-black/[0.03] border border-black/[0.06]">
                                                <div className="text-lg font-light text-[#10b981]">2,847</div>
                                                <div className="text-[8px] text-gray-600">Txn/sec</div>
                                            </div>

                                            <div className="text-center p-3 rounded-xl bg-black/[0.03] border border-black/[0.06]">
                                                <div className="text-lg font-light text-amber-600/80">12</div>
                                                <div className="text-[8px] text-gray-600">Flagged</div>
                                            </div>

                                            <div className="text-center p-3 rounded-xl bg-black/[0.03] border border-black/[0.06]">
                                                <div className="text-lg font-light text-[#10b981]">99.97%</div>
                                                <div className="text-[8px] text-gray-600">Clear Rate</div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="p-3 rounded-xl bg-black/[0.03] border-l-2 border-l-rose-400/50 border border-black/[0.06] flex justify-between items-center">
                                                <div>
                                                    <div className="text-[11px] text-gray-600 font-light">Unusual wire — ACC-4472</div>
                                                    <div className="text-[9px] text-gray-600 font-light">€847K across 4 entities</div>
                                                </div>
                                                <span className="px-2 py-0.5 rounded-full bg-rose-500/10 text-[8px] text-rose-600">REVIEW</span>
                                            </div>

                                            <div className="p-3 rounded-xl bg-black/[0.03] border-l-2 border-l-amber-400/50 border border-black/[0.06] flex justify-between items-center">
                                                <div>
                                                    <div className="text-[11px] text-gray-600 font-light">PEP match — ACC-9918</div>
                                                    <div className="text-[9px] text-gray-600 font-light">Sanctioned list match</div>
                                                </div>
                                                <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-[8px] text-amber-600">ESCALATED</span>
                                            </div>

                                            <div className="p-3 rounded-xl bg-black/[0.03] border-l-2 border-l-[#10b981]/50 border border-black/[0.06] flex justify-between items-center">
                                                <div>
                                                    <div className="text-[11px] text-gray-600 font-light">Auto-cleared — ACC-3301</div>
                                                    <div className="text-[9px] text-gray-600 font-light">Recurring vendor verified</div>
                                                </div>
                                                <span className="px-2 py-0.5 rounded-full bg-[#10b981]/10 text-[8px] text-[#10b981]">CLEARED</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Aerospace & Defense */}
                    <div className="relative mb-48" id="indAero">
                        {/* Accent bg */}
                        <div className="absolute -inset-12 rounded-[48px] bg-gradient-to-br from-[#3b82f6]/7 via-[#3b82f6]/2 to-[#8b5cf6]/5" />
                        <div className="absolute -inset-12 rounded-[48px] border border-[#3b82f6]/8" />

                        <div className="relative grid md:grid-cols-2 gap-20 items-center p-10">
                            <div ref={aeroLeftRef} className="opacity-0 -translate-x-[100px]">
                                <div className="industry-mock bg-white/90 border border-black/[0.1] rounded-[20px] overflow-hidden transition-all duration-500 hover:border-[#3b82f6]/25 hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.1)]">
                                    <div className="mock-header flex items-center gap-[6px] p-[10px_14px] border-b border-[rgba(0,0,0,0.08)] bg-[rgba(0,0,0,0.03)] rounded-t-[20px]">
                                        <div className="mock-dot r w-[7px] h-[7px] rounded-full bg-[rgba(255,95,87,0.8)]" />
                                        <div className="mock-dot y w-[7px] h-[7px] rounded-full bg-[rgba(254,188,46,0.8)]" />
                                        <div className="mock-dot g w-[7px] h-[7px] rounded-full bg-[rgba(40,200,64,0.8)]" />
                                        <span className="text-[9px] text-gray-600 font-mono ml-2">CLASSIFIED ANALYSIS — AIR-GAPPED</span>
                                    </div>

                                    <div className="p-5">
                                        <div className="flex items-center gap-2 mb-4 p-2.5 rounded-lg bg-rose-400/[0.04] border border-rose-400/[0.12]">
                                            <ShieldCheck className="w-3.5 h-3.5 text-rose-600/70" />
                                            <span className="text-[10px] text-rose-600/80 font-light">SECRET // NOFORN</span>
                                            <span className="ml-auto text-[9px] text-gray-600 font-mono">AIR-GAPPED</span>
                                        </div>

                                        <div className="p-3 rounded-xl bg-black/[0.03] border border-black/[0.06] mb-3">
                                            <div className="text-[9px] text-gray-600 font-mono mb-1">ANALYST QUERY</div>
                                            <p className="text-[11px] text-gray-600 font-light">
                                                Cross-reference all F-35 Block 4 maintenance with fleet
                                                reliability data.
                                            </p>
                                        </div>

                                        <div className="p-3.5 rounded-xl bg-[#3b82f6]/[0.03] border border-[#3b82f6]/[0.1]">
                                            <div className="text-[9px] text-[#3b82f6]/60 font-mono mb-2">
                                                MENTIS — 14,200 DOCS SCANNED
                                            </div>
                                            <p className="text-[11px] text-gray-600 font-light leading-relaxed mb-3">
                                                3 recurring avionics failure patterns. DAS sensor MTBF
                                                degraded 12% over 6 months. Correlated with Hill AFB &
                                                Eglin AFB depot reports.
                                            </p>
                                            <div className="flex gap-2">
                                                <span className="px-2 py-0.5 rounded-full bg-[#3b82f6]/10 text-[8px] text-[#3b82f6]">8 REPORTS</span>
                                                <span className="px-2 py-0.5 rounded-full bg-[#10b981]/10 text-[8px] text-[#10b981]">✓ JUDGE</span>
                                                <span className="px-2 py-0.5 rounded-full bg-rose-500/10 text-[8px] text-rose-600">SECRET</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div ref={aeroRightRef} className="opacity-0 translate-x-[100px]">
                                <div className="flex items-center gap-5 mb-8">
                                    <div className="w-[4.5rem] h-[4.5rem] rounded-2xl bg-gradient-to-br from-[#3b82f6]/25 to-[#8b5cf6]/15 flex items-center justify-center border border-[#3b82f6]/25 shadow-lg shadow-[#3b82f6]/10">
                                        <Plane className="w-9 h-9 text-[#3b82f6]" />
                                    </div>
                                    <Link href="/defense" className="group/title">
                                        <h3 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight group-hover/title:text-blue-700 transition-colors flex items-center gap-3">
                                            Aerospace & Defense <span className="text-xl opacity-0 group-hover/title:opacity-100 group-hover/title:translate-x-1 transition-all">→</span>
                                        </h3>
                                    </Link>
                                    <p className="text-[15px] text-gray-500 font-light tracking-wider mt-2">
                                        Defense · Aviation · Space Systems
                                    </p>
                                </div>

                                <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-10">
                                    Air-gapped deployment for classified environments. Mentis
                                    operates entirely within your secure enclave.
                                </p>

                                <div className="flex gap-3 flex-wrap mb-10">
                                    <span className="px-5 py-2.5 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/25 text-sm text-[#3b82f6] font-light">
                                        Air-Gapped
                                    </span>
                                    <span className="px-5 py-2.5 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/25 text-sm text-[#8b5cf6] font-light">
                                        ITAR
                                    </span>
                                    <span className="px-5 py-2.5 rounded-full bg-rose-400/[0.1] border border-rose-400/25 text-sm text-rose-600/70 font-light">
                                        FedRAMP High
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 gap-5">
                                    <div className="text-center p-6 rounded-2xl bg-[#3b82f6]/8 border border-[#3b82f6]/20 shadow-sm">
                                        <div className="text-4xl font-light text-[#3b82f6]">10x</div>
                                        <div className="text-[13px] text-gray-600 font-light mt-2">
                                            Faster review
                                        </div>
                                    </div>

                                    <div className="text-center p-6 rounded-2xl bg-[#8b5cf6]/8 border border-[#8b5cf6]/20 shadow-sm">
                                        <div className="text-4xl font-light text-[#8b5cf6]">Zero</div>
                                        <div className="text-[13px] text-gray-600 font-light mt-2">
                                            External transfers
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Government & Energy */}
                    <div className="grid md:grid-cols-2 gap-16" id="indGovEnergy">
                        {/* Government */}
                        <div className="relative opacity-0 translate-y-[80px]" ref={(el) => (govEnergyRefs.current[0] = el)}>
                            <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-[#8b5cf6]/8 via-[#8b5cf6]/2 to-rose-500/5" />
                            <div className="absolute -inset-6 rounded-[36px] border border-[#8b5cf6]/8" />

                            <div className="relative card p-12 bg-white/85 backdrop-blur-sm border border-gray-200/60 rounded-3xl shadow-sm transition-all duration-500">
                                <div className="flex items-center gap-5 mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8b5cf6]/25 to-[#fb7185]/15 flex items-center justify-center border border-[#8b5cf6]/25 shadow-lg shadow-[#8b5cf6]/10">
                                        <Building2 className="w-8 h-8 text-[#8b5cf6]" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-light text-gray-900 tracking-tight">
                                            Government & Public Sector
                                        </h3>
                                        <p className="text-[15px] text-gray-500 font-light mt-2">
                                            Federal · State · Intelligence Community
                                        </p>
                                    </div>
                                </div>

                                <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                                    Sovereign AI for sovereign nations. Full NIST, FedRAMP, and
                                    classification-level compliance.
                                </p>

                                <div className="flex gap-2 flex-wrap mb-6">
                                    <span className="px-4 py-2 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 text-[13px] text-[#8b5cf6]">
                                        FedRAMP High
                                    </span>
                                    <span className="px-4 py-2 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[13px] text-[#3b82f6]">
                                        NIST 800-171
                                    </span>
                                    <span className="px-4 py-2 rounded-full bg-rose-400/[0.1] border border-rose-400/20 text-[13px] text-rose-600/70">
                                        IL4/IL5
                                    </span>
                                    <span className="px-4 py-2 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 text-[13px] text-[#10b981]">
                                        CMMC L3
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-black/[0.03]">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]/80" />
                                        <span className="text-[15px] text-gray-600 font-light flex-1">
                                            EO 14028 Cybersecurity
                                        </span>
                                        <span className="text-[13px] text-[#10b981] font-mono">COMPLIANT</span>
                                    </div>

                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-black/[0.03]">
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                        <span className="text-[15px] text-gray-600 font-light flex-1">
                                            NERC CIP v8 Standards
                                        </span>
                                        <span className="text-[13px] text-amber-600/60 font-mono">2 GAPS</span>
                                    </div>

                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-black/[0.03]">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]/80" />
                                        <span className="text-[15px] text-gray-600 font-light flex-1">
                                            DOE Grid Modernization
                                        </span>
                                        <span className="text-[13px] text-[#10b981] font-mono">ALIGNED</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Energy & Utilities */}
                        <div className="relative opacity-0 translate-y-[80px]" ref={(el) => (govEnergyRefs.current[1] = el)}>
                            <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-[#06b6d4]/8 via-[#06b6d4]/2 to-amber-500/5" />
                            <div className="absolute -inset-6 rounded-[36px] border border-[#06b6d4]/8" />

                            <div className="relative card p-12 bg-white/85 backdrop-blur-sm border border-gray-200/60 rounded-3xl shadow-sm transition-all duration-500">
                                <div className="flex items-center gap-5 mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#06b6d4]/25 to-[#fbbf24]/15 flex items-center justify-center border border-[#06b6d4]/25 shadow-lg shadow-[#06b6d4]/10">
                                        <Zap className="w-8 h-8 text-[#06b6d4]" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-light text-gray-900 tracking-tight">
                                            Energy & Utilities
                                        </h3>
                                        <p className="text-[15px] text-gray-500 font-light mt-2">
                                            Power Grid · Oil & Gas · Renewables
                                        </p>
                                    </div>
                                </div>

                                <p className="text-md text-gray-600 font-light leading-relaxed mb-8">
                                    SCADA grid intelligence. Predictive load management, fault
                                    detection — on-premise within your OT perimeter.
                                </p>

                                <div className="flex gap-3 flex-wrap mb-6">
                                    <span className="px-4 py-2 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/20 text-[13px] text-[#06b6d4]">
                                        NERC CIP
                                    </span>
                                    <span className="px-4 py-2 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 text-[13px] text-[#10b981]">
                                        SCADA Native
                                    </span>
                                    <span className="px-4 py-2 rounded-full bg-amber-500/[0.1] border border-amber-500/20 text-[13px] text-amber-600">
                                        OT Isolated
                                    </span>
                                </div>

                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    <div className="text-center p-5 rounded-xl bg-[#10b981]/8 border border-[#10b981]/20">
                                        <div className="text-2xl font-light text-[#10b981]">14.2GW</div>
                                        <div className="text-[12px] text-gray-600 mt-1">Load</div>
                                    </div>

                                    <div className="text-center p-5 rounded-xl bg-[#06b6d4]/8 border border-[#06b6d4]/20">
                                        <div className="text-2xl font-light text-[#06b6d4]">98.7%</div>
                                        <div className="text-[12px] text-gray-600 mt-1">Stability</div>
                                    </div>

                                    <div className="text-center p-5 rounded-xl bg-amber-500/[0.08] border border-amber-500/20">
                                        <div className="text-2xl font-light text-amber-600">4hr</div>
                                        <div className="text-[12px] text-gray-600 mt-1">Prediction</div>
                                    </div>
                                </div>

                                <div className="p-5 rounded-xl bg-amber-500/[0.08] border border-amber-400/[0.2]">
                                    <div className="text-sm text-amber-600/80 font-light mb-1.5">
                                        ⚡ Predictive Load Alert — N-3
                                    </div>
                                    <p className="text-sm text-gray-600 font-light">
                                        18% demand surge in 4 hours. Recommend preemptive balancing.
                                    </p>
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