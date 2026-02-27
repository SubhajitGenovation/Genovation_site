// components/SecuritySection.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Fingerprint, GlobeLock, Lock, MapPin, Scale, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function SecuritySection() {
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const scaleRef = useRef(null);
    const headerRef = useRef(null);

    useEffect(() => {
        // Intro Animation
        if (headerRef.current) {
            const children = headerRef.current.children;
            gsap.to(children, {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });
        }

        gsap.to(leftRef.current, {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: leftRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });

        gsap.to(rightRef.current, {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: rightRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });

        gsap.to(scaleRef.current, {
            scale: 1,
            opacity: 1,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
                trigger: scaleRef.current,
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
            <section id="security" className="py-48 relative bg-[#f5f3f0]">
                {/* Mesh background */}
                <div className="absolute inset-0 mesh-bg opacity-15" />

                {/* Orb */}
                <div
                    className="orb absolute w-[500px] h-[400px] rounded-full blur-[80px] pointer-events-none bg-[#8b5cf6]/7"
                    style={{ top: "30%", right: "5%" }}
                />

                <div className="relative max-w-7xl mx-auto px-8">
                    {/* Intro */}
                    <div className="text-center mb-24" ref={headerRef}>
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 mb-8 opacity-0 translate-y-[80px]">
                            <ShieldCheck className="w-3 h-3 text-[#10b981]" />
                            <span className="text-[#10b981] text-[11px] font-light tracking-[0.25em] uppercase">
                                Enterprise Security
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.04em] leading-[1] opacity-0 translate-y-[80px]">
                            Security Isn't a Feature.
                            <br />
                            <span className="bg-gradient-to-r from-[#059669] via-[#0891b2] to-[#2563eb] bg-clip-text text-transparent">
                                It's the Foundation.
                            </span>
                        </h2>
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 gap-24 items-start">
                        {/* Left column */}
                        <div ref={leftRef} className="opacity-0 -translate-x-[100px]">
                            <p className="text-[1.05rem] text-gray-600 font-light leading-relaxed mb-10">
                                Post-quantum cryptography. Zero-trust architecture. Complete data
                                sovereignty. Compliance is enforced by design, not policy.
                            </p>

                            <div className="space-y-3">
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-black/[0.05] border border-black/[0.06]">
                                    <div className="w-8 h-8 rounded-lg bg-[#10b981]/12 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-4 h-4 text-[#10b981]" />
                                    </div>
                                    <div>
                                        <h4 className="font-light text-gray-600 text-[15px]">
                                            Data Residency Control
                                        </h4>
                                        <p className="text-[13px] text-gray-600 font-light">
                                            Choose exactly where your data lives — your DC, your cloud,
                                            your air-gap.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-xl bg-black/[0.05] border border-black/[0.06]">
                                    <div className="w-8 h-8 rounded-lg bg-[#06b6d4]/12 flex items-center justify-center flex-shrink-0">
                                        <Lock className="w-4 h-4 text-[#06b6d4]" />
                                    </div>
                                    <div>
                                        <h4 className="font-light text-gray-600 text-[15px]">
                                            Post-Quantum Cryptography
                                        </h4>
                                        <p className="text-[13px] text-gray-600 font-light">
                                            CipherVault implements NIST-approved CRYSTALS-Kyber &
                                            Dilithium.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-xl bg-black/[0.05] border border-black/[0.06]">
                                    <div className="w-8 h-8 rounded-lg bg-[#3b82f6]/12 flex items-center justify-center flex-shrink-0">
                                        <Scale className="w-4 h-4 text-[#3b82f6]" />
                                    </div>
                                    <div>
                                        <h4 className="font-light text-gray-600 text-[15px]">
                                            JUDGE Verification Layer
                                        </h4>
                                        <p className="text-[13px] text-gray-600 font-light">
                                            Every AI output independently verified. Hallucination
                                            detection. Full audit trail.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-xl bg-black/[0.05] border border-black/[0.06]">
                                    <div className="w-8 h-8 rounded-lg bg-[#8b5cf6]/12 flex items-center justify-center flex-shrink-0">
                                        <Fingerprint className="w-4 h-4 text-[#8b5cf6]" />
                                    </div>
                                    <div>
                                        <h4 className="font-light text-gray-600 text-[15px]">
                                            Zero-Trust Architecture
                                        </h4>
                                        <p className="text-[13px] text-gray-600 font-light">
                                            Every request authenticated, every access logged,
                                            microsegmented by design.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right column */}
                        <div ref={rightRef} className="opacity-0 translate-x-[100px]">
                            {/* Mock */}
                            <div className="industry-mock bg-white/90 border border-black/[0.1] rounded-[20px] overflow-hidden transition-all duration-500 hover:border-[rgba(16,185,129,0.25)] hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.1)]">
                                <div className="mock-header flex items-center gap-[6px] p-[10px_14px] border-b border-[rgba(0,0,0,0.08)] bg-[rgba(0,0,0,0.03)] rounded-t-[20px]">
                                    <div className="mock-dot r w-[7px] h-[7px] rounded-full bg-[rgba(255,95,87,0.8)]" />
                                    <div className="mock-dot y w-[7px] h-[7px] rounded-full bg-[rgba(254,188,46,0.8)]" />
                                    <div className="mock-dot g w-[7px] h-[7px] rounded-full bg-[rgba(40,200,64,0.8)]" />
                                    <span className="text-[9px] text-gray-600 font-mono ml-2">SECURITY COMMAND CENTER</span>
                                    <div className="ml-auto flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                                        <span className="text-[9px] text-[#10b981] font-mono">LIVE</span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="grid grid-cols-3 gap-3 mb-5">
                                        <div className="text-center p-3 rounded-xl bg-black/[0.03] border border-black/[0.06]">
                                            <div className="text-xl font-light text-[#10b981]">0</div>
                                            <div className="text-[9px] text-gray-600 font-light">Threats</div>
                                        </div>
                                        <div className="text-center p-3 rounded-xl bg-black/[0.03] border border-black/[0.06]">
                                            <div className="text-xl font-light text-[#10b981]">100%</div>
                                            <div className="text-[9px] text-gray-600 font-light">Encrypted</div>
                                        </div>
                                        <div className="text-center p-3 rounded-xl bg-black/[0.03] border border-black/[0.06]">
                                            <div className="text-xl font-light text-[#06b6d4]">24/7</div>
                                            <div className="text-[9px] text-gray-600 font-light">SOC Active</div>
                                        </div>
                                    </div>

                                    <div className="space-y-2.5 mb-5">
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-[10px] text-gray-600 font-light">Network Perimeter</span>
                                                <span className="text-[9px] text-[#10b981] font-mono">SECURE</span>
                                            </div>
                                            <div className="h-1 rounded-full bg-black/[0.05] overflow-hidden">
                                                <div className="h-full w-full rounded-full pipe-flow"></div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-[10px] text-gray-600 font-light">Encryption Layer</span>
                                                <span className="text-[9px] text-[#10b981] font-mono">PQ-ACTIVE</span>
                                            </div>
                                            <div className="h-1 rounded-full bg-black/[0.05] overflow-hidden">
                                                <div className="h-full w-full rounded-full pipe-flow" style={{ animationDelay: "-1s" }}></div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-[10px] text-gray-600 font-light">JUDGE Integrity</span>
                                                <span className="text-[9px] text-[#10b981] font-mono">VERIFIED</span>
                                            </div>
                                            <div className="h-1 rounded-full bg-black/[0.05] overflow-hidden">
                                                <div className="h-full w-full rounded-full pipe-flow" style={{ animationDelay: "-2s" }}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-[9px] text-gray-600 font-mono tracking-wider uppercase mb-3">
                                        Audit Stream
                                    </div>

                                    <div className="space-y-1.5">
                                        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-black/[0.03] text-[10px]">
                                            <span className="text-[#10b981]">✓</span>
                                            <span className="text-gray-600 font-light flex-1">
                                                Query Q-7829 verified — 3 sources confirmed
                                            </span>
                                            <span className="text-gray-600 font-mono">2s</span>
                                        </div>

                                        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-black/[0.03] text-[10px]">
                                            <span className="text-[#06b6d4]/60">🔒</span>
                                            <span className="text-gray-600 font-light flex-1">
                                                CipherVault rotation — PQ-KEM keys refreshed
                                            </span>
                                            <span className="text-gray-600 font-mono">14s</span>
                                        </div>

                                        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-black/[0.03] text-[10px]">
                                            <span className="text-[#10b981]">✓</span>
                                            <span className="text-gray-600 font-light flex-1">
                                                Access approved — sarah.mitchell@corp
                                            </span>
                                            <span className="text-gray-600 font-mono">28s</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 mt-5 flex-wrap">
                                        <span className="px-2.5 py-1 rounded-full bg-[#10b981]/6 text-[8px] text-[#10b981]">
                                            GDPR
                                        </span>
                                        <span className="px-2.5 py-1 rounded-full bg-[#10b981]/6 text-[8px] text-[#10b981]">
                                            HIPAA
                                        </span>
                                        <span className="px-2.5 py-1 rounded-full bg-[#06b6d4]/6 text-[8px] text-[#06b6d4]">
                                            ISO 27001
                                        </span>
                                        <span className="px-2.5 py-1 rounded-full bg-[#06b6d4]/6 text-[8px] text-[#06b6d4]">
                                            SOC 2
                                        </span>
                                        <span className="px-2.5 py-1 rounded-full bg-[#3b82f6]/6 text-[8px] text-[#3b82f6]">
                                            FedRAMP
                                        </span>
                                        <span className="px-2.5 py-1 rounded-full bg-[#8b5cf6]/6 text-[8px] text-[#8b5cf6]">
                                            NIST
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Defense in Depth */}
                    <div
                        className="mt-12 p-6 md:p-8 rounded-2xl bg-[#edeae6] border border-black/[0.06] w-full"
                        ref={scaleRef}
                    >
                        <h4 className="text-[13px] font-light text-gray-600 text-center mb-5 tracking-wider">
                            Defense in Depth
                        </h4>

                        <div className="flex items-center justify-center gap-0 flex-wrap">
                            <div className="text-center px-4 py-3 rounded-l-xl bg-black/[0.03] border border-black/[0.06]">
                                <div className="text-[9px] text-gray-600 font-mono uppercase mb-1">
                                    Layer 1
                                </div>
                                <div className="text-[13px] text-gray-600 font-light">Edge</div>
                            </div>

                            <div className="w-5 h-px bg-[#10b981]/20 relative">
                                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#10b981]/50" />
                            </div>

                            <div className="text-center px-4 py-3 bg-black/[0.03] border border-black/[0.06]">
                                <div className="text-[9px] text-gray-600 font-mono uppercase mb-1">
                                    Layer 2
                                </div>
                                <div className="text-[13px] text-gray-600 font-light">
                                    Zero-Trust
                                </div>
                            </div>

                            <div className="w-5 h-px bg-[#06b6d4]/20 relative">
                                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#06b6d4]/50" />
                            </div>

                            <div className="text-center px-4 py-3 bg-black/[0.03] border border-black/[0.06]">
                                <div className="text-[9px] text-gray-600 font-mono uppercase mb-1">
                                    Layer 3
                                </div>
                                <div className="text-[13px] text-gray-600 font-light">
                                    CipherVault
                                </div>
                            </div>

                            <div className="w-5 h-px bg-[#3b82f6]/20 relative">
                                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#3b82f6]/50" />
                            </div>

                            <div className="text-center px-4 py-3 bg-[#10b981]/4 border border-[#10b981]/12">
                                <div className="text-[9px] text-[#10b981] font-mono uppercase mb-1">
                                    Layer 4
                                </div>
                                <div className="text-[13px] text-[#10b981] font-light">
                                    JUDGE
                                </div>
                            </div>

                            <div className="w-5 h-px bg-[#8b5cf6]/20 relative">
                                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#8b5cf6]/50" />
                            </div>

                            <div className="text-center px-4 py-3 rounded-r-xl bg-black/[0.03] border border-black/[0.06]">
                                <div className="text-[9px] text-gray-600 font-mono uppercase mb-1">
                                    Layer 5
                                </div>
                                <div className="text-[13px] text-gray-600 font-light">
                                    Your Data
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