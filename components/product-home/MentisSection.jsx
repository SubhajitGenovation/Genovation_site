"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Monitor, Search, Bot, Database, Plug, ToggleRight,
  BookOpen, Repeat, Cpu,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function MentisSection() {
  const mentisGlowRef = useRef(null);
  const mentisMockWrapperRef = useRef(null);
  const mentisScanlineRef = useRef(null);
  const mentisReflectionRef = useRef(null);

  useEffect(() => {
    if (typeof document === "undefined") return;

    // Create floating particles
    const particlesContainer = document.getElementById("mentisParticles");
    if (particlesContainer && particlesContainer.children.length === 0) {
      for (let i = 0; i < 12; i++) {
        const p = document.createElement("div");
        p.className = "m-particle";
        p.style.left = Math.random() * 100 + "%";
        p.style.top = Math.random() * 100 + "%";
        particlesContainer.appendChild(p);
      }
    }

    // Set initial isometric state
    gsap.set("#mentisMockTransform", {
      rotateX: 16,
      rotateY: -3,
      scale: 0.82,
      y: 120,
      transformPerspective: 1200,
    });

    const mentisTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#mentisWrapper",
        start: "top top",
        end: "90% top",
        scrub: 0.8,
        pin: "#mentisStickyPin",   // ← PIN the inner sticky div
        anticipatePin: 1,
      },
    });

    // Phase 1: Text
    mentisTL
      .to("#mentisBadge", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
      .to("#mentisLine1", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.2")
      .to("#mentisLine2", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.5")
      .to("#mentisLine3", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.5")
      .to({}, { duration: 1.2 })
      .to("#mentisTextBlock", { opacity: 0, y: -80, duration: 0.8, ease: "power2.in" })

    // Phase 2: Mock enters
      .to("#mentisMockLayer", { opacity: 1, duration: 0.01 })
      .to(
        "#mentisMockTransform",
        { y: 0, scale: 0.94, rotateX: 6, rotateY: -1, duration: 2, ease: "power3.out" },
        "-=0.3"
      )
      .add(() => {
        if (mentisGlowRef.current) mentisGlowRef.current.classList.add("active");
        if (mentisMockWrapperRef.current) mentisMockWrapperRef.current.classList.add("active");
        if (mentisScanlineRef.current) mentisScanlineRef.current.style.opacity = "1";
      }, "-=1")
      .to(".mock-chat-item", { opacity: 1, stagger: 0.04, duration: 0.3, ease: "power2.out" }, "-=0.6")
      .to(".mock-agent-card", { opacity: 1, y: 0, stagger: 0.04, duration: 0.4, ease: "power3.out" }, "-=0.3")
      .to("#mentisMockTransform", { rotateX: 2, rotateY: -0.5, scale: 0.95, duration: 1.2, ease: "power2.out" }, "-=0.2")
      .to(mentisReflectionRef.current, { opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.6")

    // Phase 3: Annotations
      .to("#annModules", { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" })
      .to("#annSearch",  { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.3")
      .to("#annChat",    { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.3")
      .to("#annStatus",  { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.3")
      .to("#annAgents",  { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.3")
      .to("#annCustom",  { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.3")
      .to("#mentisMockTransform", { rotateX: 0, rotateY: 0, scale: 1, duration: 1, ease: "power2.out" }, "-=0.3")
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
      .to({}, { duration: 2.5 })

    // Exit
      .to(".annotation", { opacity: 0, y: -10, duration: 0.4, stagger: 0.03, ease: "power2.in" })
      .to(
        "#mentisMockTransform",
        { opacity: 0, y: -60, scale: 0.9, rotateX: -5, rotateY: 1, duration: 0.8, ease: "power2.in" },
        "-=0.2"
      )
      .to("#mentisMockLayer", { opacity: 0, duration: 0.3 }, "-=0.2")
      .to(".m-particle", { opacity: 0, duration: 0.3 }, "-=0.5")
      .add(() => {
        if (mentisGlowRef.current) mentisGlowRef.current.classList.remove("active");
        if (mentisMockWrapperRef.current) mentisMockWrapperRef.current.classList.remove("active");
        if (mentisScanlineRef.current) mentisScanlineRef.current.style.opacity = "0";
      });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const chatItems = [
    { time: "7:21 PM", tag: "Analytics",            tagColor: "text-cyan-600/60",   text: "For this dataset with Tab..." },
    { time: "6:30 PM", tag: "Analytics",            tagColor: "text-cyan-600/50",   text: "For this dataset with Tab..." },
    { time: "4:32 PM", tag: "Sophia",               tagColor: "text-emerald-600/60",text: "what can you do now?" },
    { time: "3:31 PM", tag: "Aegis",                tagColor: "text-blue-600",      text: "previous IT policies of W..." },
    { time: "3:19 PM", tag: "Aegis",                tagColor: "text-blue-600/80",   text: "Hi Aegis" },
    { time: "3:01 PM", tag: "Testing custom agent", tagColor: "text-gray-600",      text: "Tell me about 2026 budget..." },
    { time: "3:17 PM", tag: "Testing custom agent", tagColor: "text-gray-600",      text: "derivative is 3*x**2 - 1..." },
    { time: "3:01 PM", tag: "Testing custom agent", tagColor: "text-gray-600",      text: "I want to find root of x*..." },
  ];

  const builtInAgents = [
    { name: "Aegis",     desc: "Compliance & Governance", gradient: "from-blue-500/60 to-blue-400/40",     emoji: "🛡️" },
    { name: "Sophia",    desc: "Knowledge & Research",    gradient: "from-emerald-500/60 to-emerald-400/40", emoji: "📚" },
    { name: "Clovis",    desc: "Finance & Analytics",     gradient: "from-violet-500/60 to-violet-400/40",  emoji: "📊" },
    { name: "Analytica", desc: "Data Intelligence",       gradient: "from-cyan-500/60 to-cyan-400/40",      emoji: "🔍" },
  ];

  const customAgents = [
    { name: "HR Assistant", desc: "Custom • HR",     color: "text-amber-600" },
    { name: "Supply Chain", desc: "Custom • Ops",    color: "text-blue-600" },
    { name: "Legal Aide",   desc: "Custom • Legal",  color: "text-violet-600" },
    { name: "+ New Agent",  desc: "Create custom",   color: "text-gray-400" },
  ];

  const navItems = [
    { icon: <Database className="w-3 h-3" />,     label: "Data Hub",     active: false },
    { icon: <Plug className="w-3 h-3" />,          label: "Connectors",   active: false },
    { icon: <Bot className="w-3 h-3" />,           label: "Agents",       active: true  },
    { icon: <ToggleRight className="w-3 h-3" />,   label: "Capabilities", active: false },
    { icon: <BookOpen className="w-3 h-3" />,      label: "Library",      active: false },
    { icon: <Repeat className="w-3 h-3" />,        label: "Automations",  active: false },
    { icon: <Cpu className="w-3 h-3" />,           label: "Models",       active: false, badge: "New" },
  ];

  return (
    <section
      className="relative"
      id="mentisWrapper"
      style={{ height: "550vh" }}
    >
      {/* ── Sticky container — NO CSS sticky, GSAP pins it ── */}
      <div
        id="mentisStickyPin"
        style={{
          height: "100vh",
          overflow: "hidden",
          perspective: "1200px",
          perspectiveOrigin: "50% 45%",
        }}
      >
        {/* Particles */}
        <div className="mentis-particles" id="mentisParticles" />

        {/* ── PHASE 1: Text Block ── */}
        <div
          className="absolute inset-0 flex items-center justify-center z-10"
          id="mentisTextBlock"
        >
          <div className="text-center px-8 max-w-5xl">
            <div
              id="mentisBadge"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2] mb-8"
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              <Monitor className="w-3 h-3 text-emerald-600" />
              <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">
                Mentis AgentOS
              </span>
            </div>

            <h2 className="display-section text-5xl md:text-7xl lg:text-[5.5rem] mb-6">
              <span
                className="block"
                id="mentisLine1"
                style={{ opacity: 0, transform: "translateY(60px)" }}
              >
                One Foundation.
              </span>
              <span
                className="block text-gradient mt-2"
                id="mentisLine2"
                style={{ opacity: 0, transform: "translateY(60px)" }}
              >
                The Sovereign Intelligence OS.
              </span>
            </h2>

            <p
              id="mentisLine3"
              className="text-lg md:text-[1.3rem] text-gray-600 font-light max-w-2xl mx-auto leading-relaxed"
              style={{ opacity: 0, transform: "translateY(40px)" }}
            >
              Every agent, every data source, every decision — running entirely
              inside your infrastructure.
            </p>
          </div>
        </div>

        {/* ── PHASE 2: Mock UI Layer ── */}
        <div
          id="mentisMockLayer"
          className="absolute inset-0 flex items-center justify-center z-10"
          style={{ opacity: 0 }}
        >
          <div
            id="mentisMockTransform"
            className="px-8 w-full max-w-7xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="max-w-5xl mx-auto mentis-annotated-wrap">

              {/* Ambient Glow */}
              <div className="mentis-glow" id="mentisGlow" ref={mentisGlowRef} />

              {/* ══ ANNOTATION LABELS ══ */}
              <div className="annotation ann-left ann-cyan-c hidden md:block" id="annSearch"
                style={{ left: "12px", top: "68px" }}>
                <div className="annotation-label">
                  <div className="ann-dot" />
                  <span className="ann-text">Quick Search</span>
                </div>
              </div>
              <div className="annotation ann-left ann-emerald hidden md:block" id="annChat"
                style={{ left: "12px", top: "155px" }}>
                <div className="annotation-label">
                  <div className="ann-dot" />
                  <span className="ann-text">Chat History</span>
                </div>
              </div>
              <div className="annotation ann-right ann-violet-c hidden md:block" id="annStatus"
                style={{ right: "12px", top: "12px" }}>
                <div className="annotation-label">
                  <div className="ann-dot" />
                  <span className="ann-text">Sovereign Status</span>
                </div>
              </div>
              <div className="annotation ann-right ann-amber-c hidden md:block" id="annAgents"
                style={{ right: "12px", top: "175px" }}>
                <div className="annotation-label">
                  <div className="ann-dot" />
                  <span className="ann-text">Built-in Agents</span>
                </div>
              </div>
              <div className="annotation ann-right ann-emerald hidden md:block" id="annCustom"
                style={{ right: "12px", top: "320px" }}>
                <div className="annotation-label">
                  <div className="ann-dot" />
                  <span className="ann-text">Custom Agents</span>
                </div>
              </div>
              <div className="annotation ann-top ann-blue-c hidden md:block" id="annModules"
                style={{ top: "34px", left: "50%", transform: "translateX(-30%) translateY(8px)" }}>
                <div className="annotation-label">
                  <div className="ann-dot" />
                  <span className="ann-text">Module Navigation</span>
                </div>
              </div>

              {/* ══ MOCK WRAPPER ══ */}
              <div
                className="mentis-mock-wrapper"
                id="mentisMockWrapper"
                ref={mentisMockWrapperRef}
              >
                <div
                  className="mentis-scanline"
                  id="mentisScanline"
                  ref={mentisScanlineRef}
                  style={{ opacity: 0 }}
                />

                {/* Mock Inner */}
                <div
                  id="mentisMockInner"
                  style={{
                    background: "rgba(255,255,255,0.97)",
                    border: "1px solid rgba(0,0,0,0.1)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 40px 120px -30px rgba(16,185,129,0.06)",
                  }}
                >
                  {/* Window Chrome */}
                  <div className="mock-header" style={{ borderBottom: "none" }}>
                    <div className="mock-dot r" />
                    <div className="mock-dot y" />
                    <div className="mock-dot g" />
                    <span className="text-[9px] text-gray-600 font-mono ml-3">
                      mentis.local — Sovereign Instance
                    </span>
                    <div className="ml-auto flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 status-dot-live" />
                        <span className="text-[7px] text-emerald-600 font-mono">ONLINE</span>
                      </div>
                      <span className="text-[7px] text-gray-600 font-mono">PQ-256</span>
                    </div>
                  </div>

                  {/* OS Layout */}
                  <div className="flex" style={{ minHeight: "400px" }}>

                    {/* ── Left Sidebar ── */}
                    <div
                      className="w-48 flex-shrink-0 border-r border-black/[0.06] p-3 flex flex-col"
                      style={{ background: "rgba(0,0,0,0.015)" }}
                    >
                      {/* Logo */}
                      <div className="flex items-center gap-2 mb-3 px-1">
                        <div className="w-5 h-5 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <circle cx="12" cy="12" r="3" />
                            <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
                          </svg>
                        </div>
                        <span className="text-[10px] text-gray-600 font-light">Mentis</span>
                        <span className="px-1.5 py-0.5 rounded bg-black/[0.06] text-[7px] text-gray-600 font-mono ml-auto">
                          Beta v0.9
                        </span>
                      </div>

                      {/* New Chat */}
                      <button
                        className="w-full py-2 rounded-lg text-[10px] text-black font-medium flex items-center justify-center gap-1.5 mb-3 transition-all hover:opacity-90"
                        style={{ background: "linear-gradient(90deg, rgba(16,185,129,0.8), rgba(34,211,238,0.8))" }}
                      >
                        <span className="text-xs">+</span> New Chat
                      </button>

                      {/* Search */}
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-black/[0.04] border border-black/[0.04] mb-3">
                        <Search className="w-3 h-3 text-gray-600" />
                        <span className="text-[8px] text-gray-600 font-light">Search chats...</span>
                        <span className="typing-cursor" />
                      </div>

                      {/* Chat History */}
                      <div className="space-y-0.5 flex-1 overflow-hidden">
                        {chatItems.map((item, i) => (
                          <div
                            key={i}
                            className="p-2 rounded-lg mock-chat-item"
                            style={{
                              opacity: 0,
                              background: i === 0 ? "rgba(0,0,0,0.05)" : undefined,
                              border: i === 0 ? "1px solid rgba(0,0,0,0.06)" : undefined,
                            }}
                          >
                            <div className="text-[9px] text-gray-600 font-light truncate">{item.text}</div>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <span className="text-[7px] text-gray-600">{item.time}</span>
                              <span className={`text-[7px] ${item.tagColor}`}>{item.tag}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ── Main Content ── */}
                    <div className="flex-1 flex flex-col" style={{ background: "rgba(0,0,0,0.008)" }}>

                      {/* Top Nav */}
                      <div className="flex items-center gap-0.5 px-3 py-2 border-b border-black/[0.08]">
                        {navItems.map((nav, i) => (
                          <a
                            key={i}
                            className={`px-2.5 py-1.5 rounded-md text-[9px] font-light flex items-center gap-1.5 transition-colors cursor-pointer ${
                              nav.active
                                ? "bg-black/[0.05] text-emerald-600"
                                : "text-gray-600 hover:bg-black/[0.04]"
                            }`}
                          >
                            {nav.icon}{nav.label}
                            {nav.badge && (
                              <span className="px-1 py-0.5 rounded bg-black/[0.06] text-[7px] text-gray-600 ml-0.5">
                                {nav.badge}
                              </span>
                            )}
                          </a>
                        ))}
                        <div className="ml-auto flex items-center gap-3">
                          <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[7px] text-emerald-600 font-mono">SOVEREIGN</span>
                          </div>
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] text-gray-600 font-medium"
                            style={{ background: "linear-gradient(135deg, rgba(34,211,238,0.3), rgba(52,211,153,0.3))" }}
                          >
                            AS
                          </div>
                        </div>
                      </div>

                      {/* Agent Search */}
                      <div className="px-5 pt-4 pb-2">
                        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-black/[0.04] border border-black/[0.06]">
                          <Search className="w-3.5 h-3.5 text-gray-600" />
                          <span className="text-[11px] text-gray-600 font-light">Search agents and models...</span>
                        </div>
                      </div>

                      {/* Agents Grid */}
                      <div className="flex-1 px-5 pb-4 overflow-hidden">
                        {/* Built-in */}
                        <div className="flex items-center justify-between mb-2.5">
                          <span className="text-[11px] text-gray-600 font-light">Built-in Agents</span>
                          <span className="text-[10px] text-gray-600 font-light">4 available</span>
                        </div>
                        <div className="grid grid-cols-4 gap-2 mb-5">
                          {builtInAgents.map((agent, i) => (
                            <div
                              key={i}
                              className={`p-2.5 rounded-xl bg-black/[0.03] border border-black/[0.06] hover:border-emerald-400/15 transition-all agent-card-enhanced mock-agent-card`}
                              style={{ opacity: 0, transform: "translateY(15px)" }}
                            >
                              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${agent.gradient} mb-2 flex items-center justify-center text-base`}>
                                {agent.emoji}
                              </div>
                              <div className="text-[9px] text-gray-700 font-medium">{agent.name}</div>
                              <div className="text-[8px] text-gray-400 font-light">{agent.desc}</div>
                            </div>
                          ))}
                        </div>

                        {/* Custom */}
                        <div className="flex items-center justify-between mb-2.5">
                          <span className="text-[11px] text-gray-600 font-light">Custom Agents</span>
                          <span className="text-[10px] text-emerald-600 font-light cursor-pointer">+ Create</span>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                          {customAgents.map((agent, i) => (
                            <div
                              key={i}
                              className="p-2.5 rounded-xl bg-black/[0.03] border border-black/[0.06] hover:border-emerald-400/15 transition-all agent-card-enhanced mock-agent-card"
                              style={{ opacity: 0, transform: "translateY(15px)" }}
                            >
                              <div className="w-8 h-8 rounded-lg bg-black/[0.04] mb-2 flex items-center justify-center">
                                <Bot className="w-4 h-4 text-gray-400" />
                              </div>
                              <div className={`text-[9px] font-medium ${agent.color}`}>{agent.name}</div>
                              <div className="text-[8px] text-gray-400 font-light">{agent.desc}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reflection */}
                <div
                  ref={mentisReflectionRef}
                  style={{
                    position: "absolute",
                    bottom: "-45%",
                    left: "5%",
                    right: "5%",
                    height: "50%",
                    background: "linear-gradient(to bottom, rgba(245,243,240,0) 0%, rgba(245,243,240,1) 60%)",
                    pointerEvents: "none",
                    zIndex: 10,
                    opacity: 0,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
