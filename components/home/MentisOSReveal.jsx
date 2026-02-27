// components/MentisOSReveal.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Activity,
    Bot,
    Brain,
    Cpu,
    Database,
    Eye,
    Headphones,
    KeyRound,
    Search,
    Server,
    Shield,
    ShieldCheck,
    Telescope,
    TrendingUp,
    Vault,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function MentisOSReveal() {
    const textBlockRef = useRef(null);
    const i2badgeRef = useRef(null);
    const i2line1Ref = useRef(null);
    const i2line2Ref = useRef(null);
    const i2line3Ref = useRef(null);
    const mockLayerRef = useRef(null);
    const mockRef = useRef(null);
    const glowRef = useRef(null);
    const mockWrapperRef = useRef(null);
    const scanlineRef = useRef(null);
    const reflectionRef = useRef(null);
    const particlesContainerRef = useRef(null);

    // Annotations refs
    const annModulesRef = useRef(null);
    const annSearchRef = useRef(null);
    const annChatRef = useRef(null);
    const annStatusRef = useRef(null);
    const annAgentsRef = useRef(null);
    const annCustomRef = useRef(null);

    useEffect(() => {
        // Create particles
        const particlesContainer = particlesContainerRef.current;
        for (let i = 0; i < 12; i++) {
            const p = document.createElement("div");
            p.className = "m-particle absolute w-[2px] h-[2px] rounded-full bg-gray-400 opacity-0";
            p.style.left = `${Math.random() * 100}%`;
            p.style.top = `${Math.random() * 100}%`;
            particlesContainer.appendChild(p);
        }

        // GSAP timeline
        const i2tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#inter2Wrapper",
                start: "top top",
                end: "90% top",
                scrub: 0.8,
                pin: "#inter2Sticky",
                pinSpacing: true,
            },
        });

        // Phase 1: Text reveal
        i2tl
            .to(i2badgeRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
            .to(i2line1Ref.current, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.2")
            .to(i2line2Ref.current, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.5")
            .to(i2line3Ref.current, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.5")
            // Hold text
            .to({}, { duration: 1.2 })
            // Fade text out
            .to(textBlockRef.current, { opacity: 0, y: -80, duration: 0.8, ease: "power2.in" })

            // Phase 2: Mock layer show
            .to(mockLayerRef.current, { opacity: 1, duration: 0.01 })
            // Mock entry from isometric
            .to(
                mockRef.current,
                {
                    y: 0,
                    scale: 0.94,
                    rotateX: 6,
                    rotateY: -1,
                    duration: 2,
                    ease: "power3.out",
                },
                "-=0.3"
            )
            // Activate effects
            .add(() => {
                glowRef.current.classList.add("active");
                mockWrapperRef.current.classList.add("active");
                scanlineRef.current.style.opacity = "1";
            }, "-=1")
            // Stagger chat items
            .to(
                ".mock-chat-item",
                {
                    opacity: 1,
                    stagger: 0.04,
                    duration: 0.3,
                    ease: "power2.out",
                },
                "-=0.6"
            )
            // Stagger agent cards
            .to(
                ".mock-agent-card",
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.04,
                    duration: 0.4,
                    ease: "power3.out",
                },
                "-=0.3"
            )
            // Isometric to flat
            .to(
                mockRef.current,
                {
                    rotateX: 2,
                    rotateY: -0.5,
                    scale: 0.95,
                    duration: 1.2,
                    ease: "power2.out",
                },
                "-=0.2"
            )
            // Reflection
            .to(
                reflectionRef.current,
                { opacity: 1, duration: 0.5, ease: "power2.out" },
                "-=0.6"
            )
            // Annotations
            .to(annModulesRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.1")
            .to(annSearchRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.3")
            .to(annChatRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.3")
            .to(annStatusRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.3")
            .to(annAgentsRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.3")
            .to(annCustomRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.3")
            // Final flat
            .to(
                mockRef.current,
                {
                    rotateX: 0,
                    rotateY: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power2.out",
                },
                "-=0.3"
            )
            // Particles
            .to(
                ".m-particle",
                {
                    opacity: () => Math.random() * 0.3 + 0.05,
                    y: () => (Math.random() - 0.5) * 200,
                    x: () => (Math.random() - 0.5) * 100,
                    duration: 2,
                    stagger: { each: 0.04, from: "random" },
                    ease: "power1.out",
                },
                "-=2"
            )
            // Hold annotated view
            .to({}, { duration: 2.5 })
            // Exit: annotations out
            .to(
                ".annotation",
                {
                    opacity: 0,
                    y: -10,
                    duration: 0.4,
                    stagger: 0.03,
                    ease: "power2.in",
                }
            )
            // Mock fade/tilt out
            .to(
                mockRef.current,
                {
                    opacity: 0,
                    y: -60,
                    scale: 0.9,
                    rotateX: -5,
                    rotateY: 1,
                    duration: 0.8,
                    ease: "power2.in",
                },
                "-=0.2"
            )
            // Layer fade
            .to(mockLayerRef.current, { opacity: 0, duration: 0.3 }, "-=0.2")
            // Particles out
            .to(".m-particle", { opacity: 0, duration: 0.3 }, "-=0.5")
            .add(() => {
                glowRef.current.classList.remove("active");
                mockWrapperRef.current.classList.remove("active");
                scanlineRef.current.style.opacity = "0";
            });

        // Cleanup
        return () => {
            i2tl.kill();
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <>
            <section
                id="inter2Wrapper"
                className="relative"
                style={{ height: "550vh" }}
            >
                <div
                    id="inter2Sticky"
                    className="sticky top-0 h-screen overflow-hidden"
                    style={{ perspective: "1200px", perspectiveOrigin: "50% 45%" }}
                >
                    {/* Particles */}
                    <div
                        className="mentis-particles absolute inset-[-100px] pointer-events-none overflow-hidden z-0"
                        ref={particlesContainerRef}
                    ></div>

                    {/* Phase 1: Text */}
                    <div
                        className="absolute inset-0 flex items-center justify-center z-10"
                        id="mentisTextBlock"
                        ref={textBlockRef}
                    >
                        <div className="text-center px-8 max-w-5xl">
                            <div
                                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 mb-8 opacity-0 translate-y-[30px]"
                                id="i2badge"
                                ref={i2badgeRef}
                            >
                                <Search className="w-3 h-3 text-[#10b981]" />
                                <span className="text-[#10b981] text-[11px] font-light tracking-[0.25em] uppercase">
                                    Mentis AgentOS
                                </span>
                            </div>
                            <h2
                                className="text-5xl md:text-7xl lg:text-[5.5rem] font-light mb-6 tracking-[-0.04em] leading-[1]"
                                id="inter2Text"
                            >
                                <span
                                    className="block opacity-0 translate-y-[60px]"
                                    ref={i2line1Ref}
                                    id="i2line1"
                                >
                                    Not just another AI layer.
                                </span>
                                <span
                                    className="block bg-gradient-to-r from-[#059669] via-[#0891b2] to-[#2563eb] bg-clip-text text-transparent mt-2 opacity-0 translate-y-[60px]"
                                    ref={i2line2Ref}
                                    id="i2line2"
                                >
                                    The Sovereign Intelligence OS.
                                </span>
                            </h2>
                            <p
                                className="text-lg md:text-[1.3rem] text-[#4b5563] font-light max-w-2xl mx-auto leading-relaxed opacity-0 translate-y-[40px]"
                                ref={i2line3Ref}
                                id="i2line3"
                            >
                                Every agent, every data source — running entirely inside your infrastructure.
                            </p>
                        </div>
                    </div>

                    {/* Phase 2: Mock */}
                    <div
                        className="absolute inset-0 flex items-center justify-center z-10 opacity-0"
                        id="i2mockLayer"
                        ref={mockLayerRef}
                    >
                        <div
                            id="i2mock"
                            className="px-8 w-full max-w-7xl"
                            ref={mockRef}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <div className="max-w-5xl mx-auto mentis-annotated-wrap relative">
                                {/* Glow */}
                                <div
                                    className="mentis-glow absolute inset-[-80px] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.06)_0%,rgba(34,211,238,0.03)_30%,transparent_70%)] opacity-0 transition-opacity duration-[1200ms]"
                                    ref={glowRef}
                                ></div>

                                {/* Annotations */}
                                <div
                                    className="annotation ann-top ann-blue-c hidden md:block opacity-0 translate-y-[8px]"
                                    ref={annModulesRef}
                                    style={{ top: "34px", left: "50%", transform: "translateX(-30%) translateY(8px)" }}
                                >
                                    <div className="annotation-label inline-flex items-center gap-[6px] px-[4px_10px_4px_7px] rounded-full bg-white/95 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-[rgba(0,0,0,0.08)] whitespace-nowrap">
                                        <div className="ann-dot w-[5px] h-[5px] rounded-full bg-[#3b82f6]"></div>
                                        <span className="ann-text text-[9px] font-normal tracking-[0.1em] uppercase text-[rgba(37,99,235,0.9)]">
                                            Module Navigation
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className="annotation ann-left ann-cyan-c hidden md:block opacity-0 translate-y-[8px]"
                                    ref={annSearchRef}
                                    style={{ left: "12px", top: "68px" }}
                                >
                                    <div className="annotation-label inline-flex items-center gap-[6px] px-[4px_10px_4px_7px] rounded-full bg-white/95 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-[rgba(6,182,212,0.2)] whitespace-nowrap">
                                        <div className="ann-dot w-[5px] h-[5px] rounded-full bg-[#06b6d4]"></div>
                                        <span className="ann-text text-[9px] font-normal tracking-[0.1em] uppercase text-[rgba(8,145,178,0.9)]">
                                            Quick Search
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className="annotation ann-left ann-emerald hidden md:block opacity-0 translate-y-[8px]"
                                    ref={annChatRef}
                                    style={{ left: "12px", top: "155px" }}
                                >
                                    <div className="annotation-label inline-flex items-center gap-[6px] px-[4px_10px_4px_7px] rounded-full bg-white/95 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-[rgba(16,185,129,0.2)] whitespace-nowrap">
                                        <div className="ann-dot w-[5px] h-[5px] rounded-full bg-[#10b981]"></div>
                                        <span className="ann-text text-[9px] font-normal tracking-[0.1em] uppercase text-[rgba(5,150,105,0.9)]">
                                            Chat History
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className="annotation ann-right ann-violet-c hidden md:block opacity-0 translate-y-[8px]"
                                    ref={annStatusRef}
                                    style={{ right: "12px", top: "12px" }}
                                >
                                    <div className="annotation-label inline-flex items-center gap-[6px] px-[4px_10px_4px_7px] rounded-full bg-white/95 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-[rgba(139,92,246,0.2)] whitespace-nowrap">
                                        <div className="ann-dot w-[5px] h-[5px] rounded-full bg-[#8b5cf6]"></div>
                                        <span className="ann-text text-[9px] font-normal tracking-[0.1em] uppercase text-[rgba(124,58,237,0.9)]">
                                            Sovereign Status
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className="annotation ann-right ann-amber-c hidden md:block opacity-0 translate-y-[8px]"
                                    ref={annAgentsRef}
                                    style={{ right: "12px", top: "175px" }}
                                >
                                    <div className="annotation-label inline-flex items-center gap-[6px] px-[4px_10px_4px_7px] rounded-full bg-white/95 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-[rgba(245,158,11,0.2)] whitespace-nowrap">
                                        <div className="ann-dot w-[5px] h-[5px] rounded-full bg-[#fbbf24]"></div>
                                        <span className="ann-text text-[9px] font-normal tracking-[0.1em] uppercase text-[rgba(217,119,6,0.9)]">
                                            Built-in Agents
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className="annotation ann-right ann-emerald hidden md:block opacity-0 translate-y-[8px]"
                                    ref={annCustomRef}
                                    style={{ right: "12px", top: "320px" }}
                                >
                                    <div className="annotation-label inline-flex items-center gap-[6px] px-[4px_10px_4px_7px] rounded-full bg-white/95 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-[rgba(16,185,129,0.2)] whitespace-nowrap">
                                        <div className="ann-dot w-[5px] h-[5px] rounded-full bg-[#10b981]"></div>
                                        <span className="ann-text text-[9px] font-normal tracking-[0.1em] uppercase text-[rgba(5,150,105,0.9)]">
                                            Custom Agents
                                        </span>
                                    </div>
                                </div>

                                {/* Mock wrapper */}
                                <div
                                    className="mentis-mock-wrapper relative perspective-[1200px] transition-shadow duration-[600ms] ease-in-out"
                                    ref={mockWrapperRef}
                                >
                                    {/* Scanline */}
                                    <div
                                        className="mentis-scanline absolute inset-0 overflow-hidden pointer-events-none rounded-[20px] z-[5] bg-[linear-gradient(180deg,transparent_0%,rgba(52,211,153,0.01)_50%,transparent_100%)]"
                                        ref={scanlineRef}
                                        style={{ opacity: 0 }}
                                    ></div>

                                    {/* Mock inner */}
                                    <div
                                        className="industry-mock bg-white/90 border border-[rgba(0,0,0,0.1)] rounded-[20px] overflow-hidden transition-all duration-500"
                                        style={{
                                            borderColor: "rgba(16,185,129,0.15)",
                                            boxShadow: "0 40px 120px -30px rgba(16,185,129,0.06)",
                                        }}
                                    >
                                        {/* Header */}
                                        <div className="mock-header flex items-center gap-[6px] px-[10px_14px] border-b border-[rgba(0,0,0,0.08)] bg-[rgba(0,0,0,0.03)] rounded-t-[20px]">
                                            <div className="mock-dot r w-[7px] h-[7px] rounded-full bg-[rgba(255,95,87,0.8)]"></div>
                                            <div className="mock-dot y w-[7px] h-[7px] rounded-full bg-[rgba(254,188,46,0.8)]"></div>
                                            <div className="mock-dot g w-[7px] h-[7px] rounded-full bg-[rgba(40,200,64,0.8)]"></div>
                                            <span className="text-[9px] text-[#4b5563] font-mono ml-3">mentis.local — Sovereign Instance</span>
                                            <div className="ml-auto flex items-center gap-3">
                                                <div className="flex items-center gap-1.5">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] status-dot-live"></div>
                                                    <span className="text-[7px] text-[#10b981] font-mono">ONLINE</span>
                                                </div>
                                                <span className="text-[7px] text-[#4b5563] font-mono">PQ-256</span>
                                            </div>
                                        </div>

                                        {/* OS Layout */}
                                        <div className="flex min-h-[400px]">
                                            {/* Left Sidebar */}
                                            <div className="w-48 flex-shrink-0 border-r border-[rgba(0,0,0,0.06)] p-3 flex flex-col bg-[rgba(0,0,0,0.015)]">
                                                <div className="flex items-center gap-2 mb-3 px-1">
                                                    <div className="w-5 h-5 rounded-md bg-gradient-to-br from-[#10b981] to-[#06b6d4] flex items-center justify-center">
                                                        <svg className="w-2.5 h-2.5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                            <circle cx="12" cy="12" r="3" />
                                                            <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-[10px] text-[#4b5563] font-light">Mentis</span>
                                                    <span className="px-1.5 py-0.5 rounded bg-[rgba(0,0,0,0.06)] text-[7px] text-[#4b5563] font-mono ml-auto">Beta v0.9</span>
                                                </div>
                                                <button className="w-full py-2 rounded-lg bg-gradient-to-r from-[#10b981]/80 to-[#06b6d4]/80 text-[10px] text-black font-medium flex items-center justify-center gap-1.5 mb-3 hover:from-[#10b981] hover:to-[#06b6d4] transition-all">
                                                    <span className="text-xs">+</span> New Chat
                                                </button>
                                                <div className="flex items-center gap-2 p-2 rounded-lg bg-[rgba(0,0,0,0.04)] border border-[rgba(0,0,0,0.04)] mb-3">
                                                    <Search className="w-3 h-3 text-[#4b5563]" />
                                                    <span className="text-[8px] text-[#4b5563] font-light">Search chats...</span>
                                                    <span className="typing-cursor inline-block w-[1px] h-[10px] bg-[#10b981] ml-[2px] animate-blink vertical-align-middle"></span>
                                                </div>
                                                <div className="space-y-0.5 flex-1 overflow-hidden">
                                                    <div className="p-2 rounded-lg bg-[rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.06)] mock-chat-item opacity-0">
                                                        <div className="text-[9px] text-[#4b5563] font-light truncate">
                                                            For this dataset with Tab...
                                                        </div>
                                                        <div className="flex items-center gap-1.5 mt-0.5">
                                                            <span className="text-[7px] text-[#4b5563]">7:21 PM</span>
                                                            <span className="text-[7px] text-[#06b6d4]/60">Analytics</span>
                                                        </div>
                                                    </div>
                                                    {/* Repeat for other chat items - adding opacity-0 to each */}
                                                    <div className="p-2 rounded-lg mock-chat-item opacity-0">
                                                        <div className="text-[9px] text-[#4b5563] font-light truncate">
                                                            For this dataset with Tab...
                                                        </div>
                                                        <div className="flex items-center gap-1.5 mt-0.5">
                                                            <span className="text-[7px] text-[#4b5563]">6:30 PM</span>
                                                            <span className="text-[7px] text-[#06b6d4]/50">Analytics</span>
                                                        </div>
                                                    </div>
                                                    <div className="p-2 rounded-lg mock-chat-item opacity-0">
                                                        <div className="text-[9px] text-[#4b5563] font-light truncate">
                                                            what can you do now?
                                                        </div>
                                                        <div className="flex items-center gap-1.5 mt-0.5">
                                                            <span className="text-[7px] text-[#4b5563]">4:32 PM</span>
                                                            <span className="text-[7px] text-[#10b981]/60">Sophia</span>
                                                        </div>
                                                    </div>
                                                    <div className="p-2 rounded-lg mock-chat-item opacity-0">
                                                        <div className="text-[9px] text-[#4b5563] font-light truncate">
                                                            previous IT policies of W...
                                                        </div>
                                                        <div className="flex items-center gap-1.5 mt-0.5">
                                                            <span className="text-[7px] text-[#4b5563]">3:31 PM</span>
                                                            <span className="text-[7px] text-[#3b82f6]">Aegis</span>
                                                        </div>
                                                    </div>
                                                    <div className="p-2 rounded-lg mock-chat-item opacity-0">
                                                        <div className="text-[9px] text-[#4b5563] font-light truncate">
                                                            Hi Aegis
                                                        </div>
                                                        <div className="flex items-center gap-1.5 mt-0.5">
                                                            <span className="text-[7px] text-[#4b5563]">3:19 PM</span>
                                                            <span className="text-[7px] text-[#3b82f6]/80">Aegis</span>
                                                        </div>
                                                    </div>
                                                    <div className="p-2 rounded-lg mock-chat-item opacity-0">
                                                        <div className="text-[9px] text-[#4b5563] font-light truncate">
                                                            Tell me about 2026 budget...
                                                        </div>
                                                        <div className="flex items-center gap-1.5 mt-0.5">
                                                            <span className="text-[7px] text-[#4b5563]">3:01 PM</span>
                                                            <span className="text-[7px] text-[#4b5563]">Testing custom agent</span>
                                                        </div>
                                                    </div>
                                                    <div className="p-2 rounded-lg mock-chat-item opacity-0">
                                                        <div className="text-[9px] text-[#4b5563] font-light truncate">
                                                            derivative is 3*x**2 - 1...
                                                        </div>
                                                        <div className="flex items-center gap-1.5 mt-0.5">
                                                            <span className="text-[7px] text-[#4b5563]">3:17 PM</span>
                                                            <span className="text-[7px] text-[#4b5563]">Testing custom agent</span>
                                                        </div>
                                                    </div>
                                                    <div className="p-2 rounded-lg mock-chat-item opacity-0">
                                                        <div className="text-[9px] text-[#4b5563] font-light truncate">
                                                            I want to find root of x*...
                                                        </div>
                                                        <div className="flex items-center gap-1.5 mt-0.5">
                                                            <span className="text-[7px] text-[#4b5563]">3:01 PM</span>
                                                            <span className="text-[7px] text-[#4b5563]">Testing custom agent</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Main Content */}
                                            <div className="flex-1 flex flex-col bg-[rgba(0,0,0,0.008)]">
                                                {/* Top Nav */}
                                                <div className="flex items-center gap-0.5 px-3 py-2 border-b border-[rgba(0,0,0,0.08)]">
                                                    <a className="px-2.5 py-1.5 rounded-md text-[9px] text-[#4b5563] font-light hover:bg-[rgba(0,0,0,0.04)] transition-colors flex items-center gap-1.5">
                                                        <Database className="w-3 h-3" />
                                                        Data Hub
                                                    </a>
                                                    <a className="px-2.5 py-1.5 rounded-md text-[9px] text-[#4b5563] font-light hover:bg-[rgba(0,0,0,0.04)] transition-colors flex items-center gap-1.5">
                                                        <Activity className="w-3 h-3" />
                                                        Connectors
                                                    </a>
                                                    <a className="px-2.5 py-1.5 rounded-md bg-[rgba(0,0,0,0.05)] text-[9px] text-[#10b981] font-light flex items-center gap-1.5">
                                                        <Bot className="w-3 h-3" />
                                                        Agents
                                                    </a>
                                                    <a className="px-2.5 py-1.5 rounded-md text-[9px] text-[#4b5563] font-light hover:bg-[rgba(0,0,0,0.04)] transition-colors flex items-center gap-1.5">
                                                        <TrendingUp className="w-3 h-3" />
                                                        Capabilities
                                                    </a>
                                                    <a className="px-2.5 py-1.5 rounded-md text-[9px] text-[#4b5563] font-light hover:bg-[rgba(0,0,0,0.04)] transition-colors flex items-center gap-1.5">
                                                        <Headphones className="w-3 h-3" />
                                                        Library
                                                    </a>
                                                    <a className="px-2.5 py-1.5 rounded-md text-[9px] text-[#4b5563] font-light hover:bg-[rgba(0,0,0,0.04)] transition-colors flex items-center gap-1.5">
                                                        <Telescope className="w-3 h-3" />
                                                        Automations
                                                    </a>
                                                    <a className="px-2.5 py-1.5 rounded-md text-[9px] text-[#4b5563] font-light hover:bg-[rgba(0,0,0,0.04)] transition-colors flex items-center gap-1.5">
                                                        <Cpu className="w-3 h-3" />
                                                        Models
                                                        <span className="px-1 py-0.5 rounded bg-[rgba(0,0,0,0.06)] text-[7px] text-[#4b5563] ml-0.5">New</span>
                                                    </a>
                                                    <div className="ml-auto flex items-center gap-3">
                                                        <div className="flex items-center gap-1.5">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></div>
                                                            <span className="text-[7px] text-[#10b981] font-mono">SOVEREIGN</span>
                                                        </div>
                                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#06b6d4]/30 to-[#10b981]/30 flex items-center justify-center text-[8px] text-[#4b5563] font-medium">
                                                            AS
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Agent Search */}
                                                <div className="px-5 pt-4 pb-2">
                                                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[rgba(0,0,0,0.04)] border border-[rgba(0,0,0,0.06)]">
                                                        <Search className="w-3.5 h-3.5 text-[#4b5563]" />
                                                        <span className="text-[11px] text-[#4b5563] font-light">Search agents and models...</span>
                                                    </div>
                                                </div>

                                                {/* Agents Content */}
                                                <div className="flex-1 px-5 pb-4 overflow-hidden">
                                                    {/* Built-in */}
                                                    <div className="flex items-center justify-between mb-2.5">
                                                        <span className="text-[11px] text-[#4b5563] font-light">Built-in Agents</span>
                                                        <span className="text-[10px] text-[#4b5563] font-light">4 available</span>
                                                    </div>
                                                    <div className="grid grid-cols-4 gap-2 mb-5">
                                                        <div className="p-2.5 rounded-xl bg-[rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.06)] hover:border-[#10b981]/15 transition-all agent-card-enhanced mock-agent-card opacity-0 translate-y-[15px]">
                                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3b82f6]/60 to-[#3b82f6]/40 mb-2 flex items-center justify-center">
                                                                <Shield className="w-4 h-4 text-[#4b5563]" />
                                                            </div>
                                                            <div className="text-[10px] text-[#4b5563] font-light mb-0.5">Aegis</div>
                                                            <div className="text-[8px] text-[#4b5563] font-light">Research Intelligence</div>
                                                            <div className="flex items-center gap-1 mt-1.5">
                                                                <div className="w-1 h-1 rounded-full bg-[#10b981]/60"></div>
                                                                <span className="text-[7px] text-[#10b981]">Ready</span>
                                                            </div>
                                                        </div>
                                                        {/* Repeat for Sophia, Clovis, Analytica with same classes and opacity-0 translate-y-[15px] */}
                                                        <div className="p-2.5 rounded-xl bg-[rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.06)] hover:border-[#10b981]/15 transition-all agent-card-enhanced mock-agent-card opacity-0 translate-y-[15px]">
                                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#10b981]/60 to-[#14b8a6]/40 mb-2 flex items-center justify-center">
                                                                <Brain className="w-4 h-4 text-[#4b5563]" />
                                                            </div>
                                                            <div className="text-[10px] text-[#4b5563] font-light mb-0.5">Sophia</div>
                                                            <div className="text-[8px] text-[#4b5563] font-light">Knowledge Intelligence</div>
                                                            <div className="flex items-center gap-1 mt-1.5">
                                                                <div className="w-1 h-1 rounded-full bg-[#10b981]/60"></div>
                                                                <span className="text-[7px] text-[#10b981]">Ready</span>
                                                            </div>
                                                        </div>
                                                        <div className="p-2.5 rounded-xl bg-[rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.06)] hover:border-[#10b981]/15 transition-all agent-card-enhanced mock-agent-card opacity-0 translate-y-[15px]">
                                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8b5cf6]/60 to-[#a855f7]/40 mb-2 flex items-center justify-center">
                                                                <Eye className="w-4 h-4 text-[#4b5563]" />
                                                            </div>
                                                            <div className="text-[10px] text-[#4b5563] font-light mb-0.5">Clovis</div>
                                                            <div className="text-[8px] text-[#4b5563] font-light">Vision Intelligence</div>
                                                            <div className="flex items-center gap-1 mt-1.5">
                                                                <div className="w-1 h-1 rounded-full bg-[#fbbf24]/60"></div>
                                                                <span className="text-[7px] text-[#fbbf24]">Setup required</span>
                                                            </div>
                                                        </div>
                                                        <div className="p-2.5 rounded-xl bg-[rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.06)] hover:border-[#10b981]/15 transition-all agent-card-enhanced mock-agent-card opacity-0 translate-y-[15px]">
                                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#06b6d4]/60 to-[#3b82f6]/40 mb-2 flex items-center justify-center">
                                                                <TrendingUp className="w-4 h-4 text-[#4b5563]" />
                                                            </div>
                                                            <div className="text-[10px] text-[#4b5563] font-light mb-0.5">Analytica</div>
                                                            <div className="text-[8px] text-[#4b5563] font-light">Data Intelligence</div>
                                                            <div className="flex items-center gap-1 mt-1.5">
                                                                <div className="w-1 h-1 rounded-full bg-[#fbbf24]/60"></div>
                                                                <span className="text-[7px] text-[#fbbf24]">Setup required</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Custom Agents */}
                                                    <div className="flex items-center justify-between mb-2.5">
                                                        <span className="text-[11px] text-[#4b5563] font-light">Your Custom Agents</span>
                                                        <span className="text-[10px] text-[#4b5563] font-light">6 agents</span>
                                                    </div>
                                                    <div className="grid grid-cols-4 gap-2">
                                                        <div className="p-2.5 rounded-xl bg-[rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.06)] agent-card-enhanced mock-agent-card opacity-0 translate-y-[15px]">
                                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#fb7185]/50 to-[#f97316]/40 mb-2"></div>
                                                            <div className="text-[10px] text-[#4b5563] font-light mb-0.5">Testing custom agent</div>
                                                            <div className="text-[8px] text-[#4b5563] font-light mb-1.5">This is testing custom agent desc...</div>
                                                            <div className="flex gap-1 mb-1.5">
                                                                <span className="px-1.5 py-0.5 rounded bg-[rgba(0,0,0,0.05)] text-[7px] text-[#4b5563]">testing</span>
                                                                <span className="px-1.5 py-0.5 rounded bg-[rgba(0,0,0,0.05)] text-[7px] text-[#4b5563]">initial agent</span>
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <div className="w-1 h-1 rounded-full bg-[#10b981]/60"></div>
                                                                <span className="text-[7px] text-[#10b981]">Ready</span>
                                                            </div>
                                                        </div>
                                                        {/* Repeat for other custom agents with opacity-0 translate-y-[15px] */}
                                                        <div className="p-2.5 rounded-xl bg-[rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.06)] agent-card-enhanced mock-agent-card opacity-0 translate-y-[15px]">
                                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#fbbf24]/50 to-[#eab308]/40 mb-2"></div>
                                                            <div className="text-[10px] text-[#4b5563] font-light mb-0.5">Data Analyst Pro</div>
                                                            <div className="text-[8px] text-[#4b5563] font-light mb-1.5">Powerful data analytics agent that can...</div>
                                                            <div className="flex gap-1 mb-1.5">
                                                                <span className="px-1.5 py-0.5 rounded bg-[rgba(0,0,0,0.05)] text-[7px] text-[#4b5563]">data</span>
                                                                <span className="px-1.5 py-0.5 rounded bg-[rgba(0,0,0,0.05)] text-[7px] text-[#4b5563]">sql</span>
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <div className="w-1 h-1 rounded-full bg-[#10b981]/60"></div>
                                                                <span className="text-[7px] text-[#10b981]">Ready</span>
                                                            </div>
                                                        </div>
                                                        <div className="p-2.5 rounded-xl bg-[rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.06)] agent-card-enhanced mock-agent-card opacity-0 translate-y-[15px]">
                                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#14b8a6]/50 to-[#10b981]/40 mb-2"></div>
                                                            <div className="text-[10px] text-[#4b5563] font-light mb-0.5">API Integration Specialist</div>
                                                            <div className="text-[8px] text-[#4b5563] font-light mb-1.5">Expert at connecting to REST APIs,...</div>
                                                            <div className="flex gap-1 mb-1.5">
                                                                <span className="px-1.5 py-0.5 rounded bg-[rgba(0,0,0,0.05)] text-[7px] text-[#4b5563]">api</span>
                                                                <span className="px-1.5 py-0.5 rounded bg-[rgba(0,0,0,0.05)] text-[7px] text-[#4b5563]">integration</span>
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <div className="w-1 h-1 rounded-full bg-[#10b981]/60"></div>
                                                                <span className="text-[7px] text-[#10b981]">Ready</span>
                                                            </div>
                                                        </div>
                                                        <div className="p-2.5 rounded-xl bg-[rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.06)] agent-card-enhanced mock-agent-card opacity-0 translate-y-[15px]">
                                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3b82f6]/50 to-[#6366f1]/40 mb-2"></div>
                                                            <div className="text-[10px] text-[#4b5563] font-light mb-0.5">Web Research Assistant</div>
                                                            <div className="text-[8px] text-[#4b5563] font-light mb-1.5">Advanced web scraping and research...</div>
                                                            <div className="flex gap-1 mb-1.5">
                                                                <span className="px-1.5 py-0.5 rounded bg-[rgba(0,0,0,0.05)] text-[7px] text-[#4b5563]">research</span>
                                                                <span className="px-1.5 py-0.5 rounded bg-[rgba(0,0,0,0.05)] text-[7px] text-[#4b5563]">web-scraping</span>
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <div className="w-1 h-1 rounded-full bg-[#10b981]/60"></div>
                                                                <span className="text-[7px] text-[#10b981]">Ready</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Bottom */}
                                                <div className="px-5 py-2 border-t border-[rgba(0,0,0,0.04)] flex items-center justify-between">
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex items-center gap-1">
                                                            <div className="w-1 h-1 rounded-full bg-[#10b981]/50"></div>
                                                            <span className="text-[7px] text-[#4b5563] font-mono">4 active</span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <div className="w-1 h-1 rounded-full bg-[#fbbf24]/50"></div>
                                                            <span className="text-[7px] text-[#4b5563] font-mono">2 pending</span>
                                                        </div>
                                                    </div>
                                                    <span className="text-[8px] text-[#4b5563] font-mono">Beta v0.9</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Reflection */}
                                <div className="relative h-20 overflow-hidden mt-[-1px] opacity-0" ref={reflectionRef} id="mentisReflection">
                                    <div className="mentis-reflection-image transform scale-y-[-1] translate-y-[-2px] opacity-[0.06]" style={{ maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 50%)", overflow: "hidden", borderRadius: "20px" }}>
                                        {/* Mirror the mock content here if needed, but original uses linear-gradient so approximating */}
                                        <div style={{ height: "200px", background: "linear-gradient(to bottom, rgba(16,185,129,0.04), transparent)", borderRadius: "0 0 20px 20px" }}></div>
                                    </div>
                                    <div className="mentis-reflection absolute bottom-[-45%] left-[5%] right-[5%] h-[50%] bg-[linear-gradient(to bottom, rgba(245,243,240,0) 0%, rgba(245,243,240,1) 60%)] pointer-events-none z-10"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}