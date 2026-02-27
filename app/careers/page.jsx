"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  ChevronDown,
  Code2,
  Compass,
  Crown,
  Eye,
  Flame,
  FlaskConical,
  Globe,
  Handshake,
  Image,
  Layers,
  MapPin,
  MessageCircle,
  Monitor,
  Puzzle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Sprout,
  Star,
  Terminal,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function CareersPage() {
  const [activeRole, setActiveRole] = useState(null);
  const [filter, setFilter] = useState("all");
  const heroRef = useRef(null);
  const scrollProgressRef = useRef(null);

  // Role data (same as HTML)
  const roles = [
    {
      id: "research-intern",
      title: "Research Intern",
      category: ["research", "internship"],
      type: "INTERNSHIP",
      salary: "₹5K–15K",
      description:
        "Work on cutting-edge AI research — neural architectures, language models, autonomous systems.",
      tags: ["AI/ML", "Python", "Curiosity"],
      salaryDetail: "UG: ₹5K · PG: ₹15K",
      icon: <FlaskConical className="w-5 h-5 text-emerald-600" />,
      color: "from-emerald-500/15 to-cyan-500/15",
    },
    {
      id: "mern-stack",
      title: "MERN Stack Developer",
      category: ["engineering"],
      type: "FULL-TIME",
      salary: "₹15K–20K",
      description:
        "Build user interfaces for AI products. Create intuitive experiences for complex AI systems.",
      tags: ["MongoDB", "React", "Node.js", "Express"],
      icon: <Layers className="w-5 h-5 text-cyan-600" />,
      color: "from-cyan-500/15 to-blue-500/15",
    },
    {
      id: "python-dev",
      title: "Python Developer",
      category: ["engineering"],
      type: "FULL-TIME",
      salary: "₹15K–20K",
      description:
        "Backend systems, ML pipelines, data processing, model deployment.",
      tags: ["Python", "Flask/Django", "APIs", "ML Pipelines"],
      icon: <Terminal className="w-5 h-5 text-blue-600" />,
      color: "from-blue-500/15 to-violet-500/15",
    },
    {
      id: "experienced-dev",
      title: "Experienced Developer",
      category: ["engineering"],
      type: "FULL-TIME",
      salary: "₹30K–40K",
      experience: "2-3 YRS",
      description:
        "Lead technical initiatives, mentor juniors, drive architecture and technical excellence.",
      tags: ["Architecture", "Mentoring", "Production"],
      icon: <Star className="w-5 h-5 text-violet-600" />,
      color: "from-violet-500/15 to-rose-500/15",
    },
    {
      id: "founders-office-junior",
      title: "Founders Office — Junior",
      category: ["business"],
      type: "FULL-TIME",
      salary: "₹15K–20K",
      description:
        "Work directly with leadership on strategy, research, analysis, and operations.",
      tags: ["Strategy", "Analysis", "Operations"],
      icon: <Compass className="w-5 h-5 text-amber-600" />,
      color: "from-amber-500/15 to-orange-500/15",
    },
    {
      id: "founders-office-senior",
      title: "Founders Office — Senior",
      category: ["business"],
      type: "FULL-TIME",
      salary: "₹25K–30K",
      experience: "2+ YRS",
      description:
        "Lead strategic projects — partnerships, market analysis, product strategy.",
      tags: ["Partnerships", "Strategy", "Leadership"],
      icon: <Crown className="w-5 h-5 text-rose-500" />,
      color: "from-rose-500/15 to-red-500/15",
    },
    {
      id: "general-intern",
      title: "General Intern",
      category: ["internship"],
      type: "INTERNSHIP",
      salary: "₹5K",
      experience: "ANY LEVEL",
      description:
        "Cross-functional: research support, basic dev, content, operations. Discover your strengths.",
      tags: ["Any Level", "Cross-functional"],
      icon: <Sprout className="w-5 h-5 text-emerald-600" />,
      color: "from-emerald-500/15 to-emerald-400/15",
    },
  ];

  const filteredRoles =
    filter === "all"
      ? roles
      : roles.filter((role) => role.category.includes(filter));

  const toggleRole = (id) => {
    setActiveRole((prev) => (prev === id ? null : id));
  };

  useGSAP(() => {
    // Scroll progress bar
    if (scrollProgressRef.current) {
      gsap.set(scrollProgressRef.current, { scaleX: 0 });
      gsap.to(scrollProgressRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });
    }

    // Nav hide on scroll (optional, but layout has its own header)
    // If you want to hide the layout's header on scroll, you'd need to handle it differently.
    // The original HTML had a nav with its own hide animation. Since layout provides Header,
    // we omit that animation here.

    // Hero timeline
    const heroTl = gsap.timeline({ delay: 0.4 });
    heroTl
      .to("#heroBadge", { opacity: 1, duration: 0.8, ease: "power2.out" })
      .to(
        "#heroTitle",
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=0.4"
      )
      .to(
        "#hero .r-up:not(#heroTitle)",
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .to(
        ".node-circle",
        {
          opacity: 1,
          scale: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: "back.out(1.5)",
        },
        "-=0.3"
      )
      .to(
        ".flow-path",
        {
          strokeDashoffset: 0,
          stagger: 0.06,
          duration: 1.2,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .to(
        ".flow-dot",
        {
          opacity: 1,
          stagger: 0.05,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .to(
        "#heroRibbon",
        { opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      );

    // General reveal animations
    const revealConfigs = [
      { selector: ".r-up", props: { y: 0, opacity: 1 } },
      { selector: ".r-left", props: { x: 0, opacity: 1 } },
      { selector: ".r-right", props: { x: 0, opacity: 1 } },
      { selector: ".r-scale", props: { scale: 1, opacity: 1 } },
      { selector: ".r-fade", props: { opacity: 1 } },
    ];

    revealConfigs.forEach(({ selector, props }) => {
      gsap.utils.toArray(selector).forEach((el) => {
        if (el.closest("#hero")) return;
        gsap.to(el, {
          ...props,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });
    });

    // Orb parallax
    document.querySelectorAll(".orb").forEach((orb) => {
      gsap.to(orb, {
        y: (Math.random() - 0.5) * 200,
        ease: "none",
        scrollTrigger: {
          trigger: orb.closest("section") || document.body,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    });

    // CTA scale animation
    gsap.fromTo(
      "#cta h2",
      { scale: 0.6, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#cta",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []); // Empty dependency array ensures it runs once after mount

  return (
    <>
      <div id="scrollProgress" ref={scrollProgressRef} className="fixed top-0 left-0 h-[2px] z-200 origin-left bg-gradient-to-r from-emerald-500 to-cyan-500 to-blue-500 to-violet-500" />

      {/* HERO — SPLIT LAYOUT */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden pt-24"
        id="hero"
      >
        <div
          className="orb w-[600px] h-[400px] bg-emerald-500/[0.06]"
          style={{ top: "10%", right: "20%" }}
        ></div>
        <div
          className="orb w-[400px] h-[400px] bg-violet-500/[0.04]"
          style={{ bottom: "5%", left: "5%" }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8 r-fade" id="heroBadge">
                <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-emerald-600">
                  We're hiring in Kolkata
                </span>
              </div>
              <h1
                className="display-hero text-6xl md:text-[5.5rem] lg:text-[7rem] mb-8 r-up"
                id="heroTitle"
              >
                Come build<br />
                <span className="text-gradient">the future</span>
                <br />
                with us.
              </h1>
              <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-lg mb-10 r-up">
                We're a small AI company building breakthrough technology. We don't care about
                your degree or your English — we care about your curiosity and your hunger to
                learn.
              </p>
              <div className="flex items-center gap-5 r-up">
                <a
                  href="#roles"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 text-black text-[15px] font-medium flex items-center gap-3 hover:shadow-xl hover:shadow-emerald-500/15 transition-all"
                >
                  See Open Roles <ArrowDown className="w-4 h-4" />
                </a>
                <a
                  href="#life"
                  className="text-[15px] text-gray-500 font-light hover:text-gray-900 transition-colors underline underline-offset-4 decoration-gray-300 hover:decoration-emerald-400"
                >
                  Life here
                </a>
              </div>
            </div>
            {/* Team Constellation SVG */}
            <div className="relative r-scale" id="heroDiagram">
              <svg
                viewBox="0 0 500 500"
                className="w-full max-w-lg mx-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="250"
                  y1="140"
                  x2="130"
                  y2="260"
                  stroke="url(#cg1)"
                  strokeWidth="1.5"
                  strokeOpacity="0.25"
                  className="flow-path"
                />
                <line
                  x1="250"
                  y1="140"
                  x2="370"
                  y2="260"
                  stroke="url(#cg1)"
                  strokeWidth="1.5"
                  strokeOpacity="0.25"
                  className="flow-path"
                />
                <line
                  x1="130"
                  y1="260"
                  x2="190"
                  y2="390"
                  stroke="url(#cg2)"
                  strokeWidth="1.5"
                  strokeOpacity="0.2"
                  className="flow-path"
                />
                <line
                  x1="370"
                  y1="260"
                  x2="310"
                  y2="390"
                  stroke="url(#cg2)"
                  strokeWidth="1.5"
                  strokeOpacity="0.2"
                  className="flow-path"
                />
                <line
                  x1="130"
                  y1="260"
                  x2="370"
                  y2="260"
                  stroke="url(#cg1)"
                  strokeWidth="1"
                  strokeOpacity="0.15"
                  strokeDasharray="4 4"
                  className="flow-path"
                />
                <line
                  x1="190"
                  y1="390"
                  x2="310"
                  y2="390"
                  stroke="url(#cg2)"
                  strokeWidth="1"
                  strokeOpacity="0.15"
                  strokeDasharray="4 4"
                  className="flow-path"
                />
                <defs>
                  <linearGradient id="cg1">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                  <linearGradient id="cg2">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <g className="node-circle">
                  <circle
                    cx="250"
                    cy="140"
                    r="48"
                    fill="white"
                    stroke="#10b981"
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                  />
                  <circle cx="250" cy="140" r="4" fill="#10b981" />
                  <text
                    x="250"
                    y="133"
                    textAnchor="middle"
                    fontFamily="Space Mono"
                    fontSize="9"
                    fill="#10b981"
                    letterSpacing="0.1em"
                  >
                    RESEARCH
                  </text>
                  <text
                    x="250"
                    y="152"
                    textAnchor="middle"
                    fontFamily="Urbanist"
                    fontSize="11"
                    fill="#6b7280"
                    fontWeight="300"
                  >
                    AI / ML
                  </text>
                </g>
                <g className="node-circle">
                  <circle
                    cx="130"
                    cy="260"
                    r="48"
                    fill="white"
                    stroke="#06b6d4"
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                  />
                  <circle cx="130" cy="260" r="4" fill="#06b6d4" />
                  <text
                    x="130"
                    y="253"
                    textAnchor="middle"
                    fontFamily="Space Mono"
                    fontSize="9"
                    fill="#06b6d4"
                    letterSpacing="0.1em"
                  >
                    ENGINEERING
                  </text>
                  <text
                    x="130"
                    y="272"
                    textAnchor="middle"
                    fontFamily="Urbanist"
                    fontSize="11"
                    fill="#6b7280"
                    fontWeight="300"
                  >
                    Full-Stack
                  </text>
                </g>
                <g className="node-circle">
                  <circle
                    cx="370"
                    cy="260"
                    r="48"
                    fill="white"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                  />
                  <circle cx="370" cy="260" r="4" fill="#3b82f6" />
                  <text
                    x="370"
                    y="253"
                    textAnchor="middle"
                    fontFamily="Space Mono"
                    fontSize="9"
                    fill="#3b82f6"
                    letterSpacing="0.1em"
                  >
                    PRODUCT
                  </text>
                  <text
                    x="370"
                    y="272"
                    textAnchor="middle"
                    fontFamily="Urbanist"
                    fontSize="11"
                    fill="#6b7280"
                    fontWeight="300"
                  >
                    Strategy
                  </text>
                </g>
                <g className="node-circle">
                  <circle
                    cx="190"
                    cy="390"
                    r="42"
                    fill="white"
                    stroke="#8b5cf6"
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                  />
                  <circle cx="190" cy="390" r="4" fill="#8b5cf6" />
                  <text
                    x="190"
                    y="383"
                    textAnchor="middle"
                    fontFamily="Space Mono"
                    fontSize="8"
                    fill="#8b5cf6"
                    letterSpacing="0.1em"
                  >
                    FOUNDERS
                  </text>
                  <text
                    x="190"
                    y="400"
                    textAnchor="middle"
                    fontFamily="Urbanist"
                    fontSize="11"
                    fill="#6b7280"
                    fontWeight="300"
                  >
                    Office
                  </text>
                </g>
                <g className="node-circle">
                  <circle
                    cx="310"
                    cy="390"
                    r="42"
                    fill="white"
                    stroke="#fbbf24"
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                  />
                  <circle cx="310" cy="390" r="4" fill="#fbbf24" />
                  <text
                    x="310"
                    y="383"
                    textAnchor="middle"
                    fontFamily="Space Mono"
                    fontSize="8"
                    fill="#d97706"
                    letterSpacing="0.1em"
                  >
                    INTERNS
                  </text>
                  <text
                    x="310"
                    y="400"
                    textAnchor="middle"
                    fontFamily="Urbanist"
                    fontSize="11"
                    fill="#6b7280"
                    fontWeight="300"
                  >
                    All Teams
                  </text>
                </g>
                <circle
                  cx="60"
                  cy="180"
                  r="3"
                  fill="#10b981"
                  opacity="0.3"
                  className="flow-dot"
                />
                <circle
                  cx="440"
                  cy="170"
                  r="2"
                  fill="#3b82f6"
                  opacity="0.25"
                  className="flow-dot"
                />
                <circle
                  cx="80"
                  cy="400"
                  r="2.5"
                  fill="#8b5cf6"
                  opacity="0.2"
                  className="flow-dot"
                />
                <circle
                  cx="420"
                  cy="420"
                  r="3"
                  fill="#06b6d4"
                  opacity="0.2"
                  className="flow-dot"
                />
                <circle
                  cx="250"
                  cy="50"
                  r="2"
                  fill="#10b981"
                  opacity="0.3"
                  className="flow-dot"
                />
                <circle
                  cx="250"
                  cy="460"
                  r="2"
                  fill="#fbbf24"
                  opacity="0.25"
                  className="flow-dot"
                />
              </svg>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase">
                  Team Structure
                </span>
              </div>
            </div>
          </div>
          <div
            className="mt-20 pt-8 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-8 r-fade"
            id="heroRibbon"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="font-mono text-[11px] text-gray-500 tracking-wide">
                KOLKATA, INDIA
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
              <span className="font-mono text-[11px] text-gray-500 tracking-wide">
                SKILLS-FIRST HIRING
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="font-mono text-[11px] text-gray-500 tracking-wide">
                NO DEGREE REQUIRED
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-violet-500"></div>
              <span className="font-mono text-[11px] text-gray-500 tracking-wide">
                CUTTING-EDGE AI
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="py-6 border-y border-black/[0.06] overflow-hidden">
        <div className="ticker-wrap">
          <div className="ticker">
            <span className="font-mono text-[11px] text-gray-400 tracking-[0.2em] uppercase whitespace-nowrap">
              Skills over credentials
            </span>
            <span className="text-emerald-400">◆</span>
            <span className="font-mono text-[11px] text-gray-400 tracking-[0.2em] uppercase whitespace-nowrap">
              Discipline over talent
            </span>
            <span className="text-cyan-400">◆</span>
            <span className="font-mono text-[11px] text-gray-400 tracking-[0.2em] uppercase whitespace-nowrap">
              Transparency always
            </span>
            <span className="text-blue-400">◆</span>
            <span className="font-mono text-[11px] text-gray-400 tracking-[0.2em] uppercase whitespace-nowrap">
              Hunger over pedigree
            </span>
            <span className="text-violet-400">◆</span>
            <span className="font-mono text-[11px] text-gray-400 tracking-[0.2em] uppercase whitespace-nowrap">
              Impact over salary
            </span>
            <span className="text-amber-400">◆</span>
            <span className="font-mono text-[11px] text-gray-400 tracking-[0.2em] uppercase whitespace-nowrap">
              Build from Kolkata
            </span>
            <span className="text-rose-400">◆</span>
            <span className="font-mono text-[11px] text-gray-400 tracking-[0.2em] uppercase whitespace-nowrap">
              Skills over credentials
            </span>
            <span className="text-emerald-400">◆</span>
            <span className="font-mono text-[11px] text-gray-400 tracking-[0.2em] uppercase whitespace-nowrap">
              Discipline over talent
            </span>
            <span className="text-cyan-400">◆</span>
            <span className="font-mono text-[11px] text-gray-400 tracking-[0.2em] uppercase whitespace-nowrap">
              Transparency always
            </span>
            <span className="text-blue-400">◆</span>
            <span className="font-mono text-[11px] text-gray-400 tracking-[0.2em] uppercase whitespace-nowrap">
              Hunger over pedigree
            </span>
            <span className="text-violet-400">◆</span>
            <span className="font-mono text-[11px] text-gray-400 tracking-[0.2em] uppercase whitespace-nowrap">
              Impact over salary
            </span>
            <span className="text-amber-400">◆</span>
            <span className="font-mono text-[11px] text-gray-400 tracking-[0.2em] uppercase whitespace-nowrap">
              Build from Kolkata
            </span>
            <span className="text-rose-400">◆</span>
          </div>
        </div>
      </div>

      {/* LIFE AT GENOVATION — BENTO */}
      <section className="py-32 relative" id="life">
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-emerald-600 block mb-4 r-fade">
                Life Here
              </span>
              <h2 className="display-section text-5xl md:text-7xl r-up">
                Inside<br />
                <span className="text-gradient">Genovation</span>
              </h2>
            </div>
            <p className="text-base text-gray-500 font-light max-w-sm text-right hidden md:block r-fade">
              A small team in Sector V, Kolkata — solving hard problems, learning fast, building
              the future of AI.
            </p>
          </div>
          <div className="bento-grid">
            <div
              className="img-placeholder col-span-12 md:col-span-7 row-span-4 r-up"
              style={{ minHeight: "340px" }}
            >
              <Image className="w-8 h-8 text-gray-300 relative z-10" />
              <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase relative z-10">
                Office space — Arch Square X2, Sector V
              </span>
            </div>
            <div
              className="img-placeholder col-span-12 md:col-span-5 row-span-4 r-up"
              style={{ minHeight: "340px" }}
            >
              <Users className="w-8 h-8 text-gray-300 relative z-10" />
              <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase relative z-10">
                The team
              </span>
            </div>
            <div
              className="img-placeholder col-span-12 md:col-span-4 row-span-3 r-up"
              style={{ minHeight: "240px" }}
            >
              <Monitor className="w-6 h-6 text-gray-300 relative z-10" />
              <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase relative z-10">
                Workstations
              </span>
            </div>
            <div
              className="col-span-12 md:col-span-4 row-span-3 bg-[#1a1a2e] rounded-2xl p-8 flex flex-col justify-between r-up"
              style={{ minHeight: "240px" }}
            >
              <p className="text-white/80 text-lg font-light leading-relaxed italic">
                "Discipline is choosing what you want most over what you want right now. That's
                how breakthroughs happen."
              </p>
              <span className="text-emerald-400 font-mono text-[11px] tracking-wider">
                — GENOVATION FOUNDING PRINCIPLE
              </span>
            </div>
            <div
              className="img-placeholder col-span-12 md:col-span-4 row-span-3 r-up"
              style={{ minHeight: "240px" }}
            >
              <MapPin className="w-6 h-6 text-gray-300 relative z-10" />
              <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase relative z-10">
                Kolkata, West Bengal
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES — NODE DIAGRAM */}
      <section className="py-32 relative overflow-hidden" id="values">
        <div
          className="orb w-[500px] h-[400px] bg-emerald-500/[0.04]"
          style={{ top: "10%", left: "-5%" }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-cyan-600 block mb-4 r-fade">
              What We Believe
            </span>
            <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
              Our <span className="text-gradient">DNA</span>
            </h2>
          </div>
          <div className="relative max-w-5xl mx-auto">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1000 900"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M170,150 Q500,50 830,150"
                stroke="url(#vg1)"
                strokeWidth="1"
                strokeOpacity="0.1"
              />
              <path
                d="M170,450 Q500,350 830,450"
                stroke="url(#vg1)"
                strokeWidth="1"
                strokeOpacity="0.08"
              />
              <path
                d="M170,750 Q500,650 830,750"
                stroke="url(#vg2)"
                strokeWidth="1"
                strokeOpacity="0.1"
              />
              <path
                d="M500,200 L500,700"
                stroke="url(#vg2)"
                strokeWidth="1"
                strokeOpacity="0.06"
                strokeDasharray="6 4"
              />
              <defs>
                <linearGradient id="vg1">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="vg2">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              <div className="diagram-node r-up">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <Globe className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h3 className="text-[15px] font-medium text-gray-900 tracking-tight">
                    Truly Inclusive
                  </h3>
                </div>
                <p className="text-[13px] text-gray-500 font-light leading-relaxed">
                  Any gender, religion, language. Can't speak perfect English? Don't care. Can
                  you solve problems? That's what matters.
                </p>
              </div>
              <div className="diagram-node r-up">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-cyan-600" />
                  </div>
                  <h3 className="text-[15px] font-medium text-gray-900 tracking-tight">
                    Discipline
                  </h3>
                </div>
                <p className="text-[13px] text-gray-500 font-light leading-relaxed">
                  We show up, we follow through, we do what we say. Talent is common —
                  disciplined execution is what separates those who ship from those who don't.
                </p>
              </div>
              <div className="diagram-node r-up">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Eye className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="text-[15px] font-medium text-gray-900 tracking-tight">
                    Radical Transparency
                  </h3>
                </div>
                <p className="text-[13px] text-gray-500 font-light leading-relaxed">
                  No politics, no hidden agendas. If something's broken, we say it. If you're
                  stuck, you ask. Honest communication is the foundation of everything here.
                </p>
              </div>
              <div className="md:col-start-2 md:row-start-2 r-scale">
                <div className="diagram-node border-emerald-500/20 bg-white text-center py-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/15 to-cyan-500/15 flex items-center justify-center mx-auto mb-4">
                    <Flame className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-light text-gray-900 tracking-tight mb-2">
                    Hungry & Humble
                  </h3>
                  <p className="text-[13px] text-gray-500 font-light leading-relaxed">
                    Eager to learn, humble about what you don't know, hungry to make something
                    meaningful.
                  </p>
                </div>
              </div>
              <div className="diagram-node r-up">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <Code2 className="w-4 h-4 text-violet-600" />
                  </div>
                  <h3 className="text-[15px] font-medium text-gray-900 tracking-tight">
                    Skills-First
                  </h3>
                </div>
                <p className="text-[13px] text-gray-500 font-light leading-relaxed">
                  Self-taught? YouTube University? Bootcamp? CS degree? We don't care how you
                  learned — show us what you can build.
                </p>
              </div>
              <div className="diagram-node r-up">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center">
                    <Rocket className="w-4 h-4 text-rose-500" />
                  </div>
                  <h3 className="text-[15px] font-medium text-gray-900 tracking-tight">
                    Impact Over Salary
                  </h3>
                </div>
                <p className="text-[13px] text-gray-500 font-light leading-relaxed">
                  We're honest — our pay isn't big tech. But you'll work on breakthrough AI and
                  build something that matters.
                </p>
              </div>
              <div className="diagram-node r-up">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-amber-600" />
                  </div>
                  <h3 className="text-[15px] font-medium text-gray-900 tracking-tight">
                    Local Pride
                  </h3>
                </div>
                <p className="text-[13px] text-gray-500 font-light leading-relaxed">
                  Proudly building world-class AI from Kolkata. No need to move to Bangalore —
                  great work happens here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER — DARK/LIGHT SPLIT */}
      <section className="py-32 relative" id="offer">
        <div
          className="orb w-[500px] h-[400px] bg-cyan-500/[0.05]"
          style={{ top: "20%", right: "10%" }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="mb-20">
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-blue-600 block mb-4 r-fade">
              Radical Honesty
            </span>
            <h2 className="display-section text-5xl md:text-7xl r-up">
              The honest<br />
              <span className="text-gradient">trade-off</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#1a1a2e] rounded-2xl p-10 r-left">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                <span className="font-mono text-[11px] text-emerald-400 tracking-[0.2em] uppercase">
                  What you get
                </span>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <svg
                    className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="text-white text-[15px] font-light mb-1">
                      Cutting-edge AI research
                    </h4>
                    <p className="text-gray-500 text-[13px] font-light">
                      SDCA, autonomous agents, breakthrough architectures
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg
                    className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="text-white text-[15px] font-light mb-1">
                      Rapid learning curve
                    </h4>
                    <p className="text-gray-500 text-[13px] font-light">
                      Small team = you learn fast, touch everything
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg
                    className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="text-white text-[15px] font-light mb-1">
                      Truly inclusive culture
                    </h4>
                    <p className="text-gray-500 text-[13px] font-light">
                      Be yourself, speak your language, focus on the work
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg
                    className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="text-white text-[15px] font-light mb-1">
                      Direct production impact
                    </h4>
                    <p className="text-gray-500 text-[13px] font-light">
                      Your work ships, your ideas matter from day one
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg
                    className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="text-white text-[15px] font-light mb-1">
                      Flexible environment
                    </h4>
                    <p className="text-gray-500 text-[13px] font-light">
                      Results matter, not hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/60 border border-black/[0.06] rounded-2xl p-10 r-right">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <span className="font-mono text-[11px] text-gray-400 tracking-[0.2em] uppercase">
                  What you don't get
                </span>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-gray-300 text-lg mt-0.5 flex-shrink-0">—</span>
                  <div>
                    <h4 className="text-gray-700 text-[15px] font-light mb-1">High salaries</h4>
                    <p className="text-gray-400 text-[13px] font-light">
                      Our pay isn't competitive with big tech
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-gray-300 text-lg mt-0.5 flex-shrink-0">—</span>
                  <div>
                    <h4 className="text-gray-700 text-[15px] font-light mb-1">
                      Corporate perks
                    </h4>
                    <p className="text-gray-400 text-[13px] font-light">
                      No fancy cafeterias, gym memberships, retreats
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-gray-300 text-lg mt-0.5 flex-shrink-0">—</span>
                  <div>
                    <h4 className="text-gray-700 text-[15px] font-light mb-1">
                      Job security guarantees
                    </h4>
                    <p className="text-gray-400 text-[13px] font-light">
                      Growing startup = inherent uncertainty
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-gray-300 text-lg mt-0.5 flex-shrink-0">—</span>
                  <div>
                    <h4 className="text-gray-700 text-[15px] font-light mb-1">
                      Brand prestige
                    </h4>
                    <p className="text-gray-400 text-[13px] font-light">
                      We're not Google — we're building our reputation
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-gray-300 text-lg mt-0.5 flex-shrink-0">—</span>
                  <div>
                    <h4 className="text-gray-700 text-[15px] font-light mb-1">Easy work</h4>
                    <p className="text-gray-400 text-[13px] font-light">
                      Breakthrough research is hard — expect challenge
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center r-up">
            <p className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              If you want maximum salary, go elsewhere. If you want to{" "}
              <span className="text-emerald-600 font-normal">learn rapidly</span>, work on{" "}
              <span className="text-emerald-600 font-normal">meaningful problems</span>, and grow
              fast — <span className="text-gradient font-medium">let's talk</span>.
            </p>
          </div>
        </div>
      </section>

      {/* OPEN ROLES — ACCORDION */}
      <section className="py-32 relative" id="roles">
        <div
          className="orb w-[600px] h-[400px] bg-violet-500/[0.04]"
          style={{ top: "5%", left: "25%" }}
        ></div>
        <div className="relative max-w-5xl mx-auto px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-violet-600 block mb-4 r-fade">
                Open Roles
              </span>
              <h2 className="display-section text-5xl md:text-7xl r-up">
                Join the <span className="text-gradient">team</span>
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-3 r-fade" id="filterBar">
              {["all", "research", "engineering", "business", "internship"].map((cat) => (
                <button
                  key={cat}
                  className={`filter-pill ${filter === cat ? "active" : ""}`}
                  data-filter={cat}
                  onClick={() => setFilter(cat)}
                >
                  {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <p className="text-[13px] text-gray-400 font-light mb-8 r-fade">
            All positions based in Kolkata. Remote flexible, in-person preferred. Salary shown per
            month.
          </p>
          <div id="rolesList" className="border-t border-black/[0.06]">
            {filteredRoles.map((role) => (
              <div
                key={role.id}
                className={`role-row r-up ${activeRole === role.id ? "active" : ""}`}
                data-category={role.category.join(" ")}
              >
                <div
                  className="flex items-center justify-between py-6 px-4 cursor-pointer"
                  onClick={() => toggleRole(role.id)}
                >
                  <div className="flex items-center gap-5">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center flex-shrink-0`}
                    >
                      {role.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-light text-gray-900 tracking-tight">
                        {role.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-0.5">
                        <span
                          className={`font-mono text-[10px] ${
                            role.type === "INTERNSHIP"
                              ? "text-emerald-600"
                              : role.type === "FULL-TIME"
                              ? "text-cyan-600"
                              : "text-violet-600"
                          }`}
                        >
                          {role.type}
                        </span>
                        <span className="text-gray-300">·</span>
                        <span className="font-mono text-[10px] text-gray-400">
                          {role.salary}
                        </span>
                        {role.experience && (
                          <>
                            <span className="text-gray-300">·</span>
                            <span className="font-mono text-[10px] text-gray-400">
                              {role.experience}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 role-arrow flex-shrink-0 transition-transform ${
                      activeRole === role.id ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`role-detail overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    activeRole === role.id ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-4 pb-6" style={{ paddingLeft: "76px" }}>
                    <p className="text-[14px] text-gray-600 font-light leading-relaxed mb-4">
                      {role.description}
                    </p>
                    <div className="flex items-center gap-2 flex-wrap mb-4">
                      {role.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-emerald-500/[0.08] text-[10px] text-emerald-600 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      {role.salaryDetail && (
                        <span className="text-[11px] text-gray-400 font-light">
                          {role.salaryDetail}
                        </span>
                      )}
                      <a
                        href="mailto:careers@genovationsolutions.com"
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500 text-white text-[11px] font-light hover:bg-emerald-600 transition-all"
                      >
                        Apply <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 r-fade">
            <p className="text-[13px] text-gray-400 font-light">
              Questions?{" "}
              <a
                href="mailto:careers@genovationsolutions.com"
                className="text-emerald-600 hover:underline"
              >
                careers@genovationsolutions.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* HIRING PROCESS — SVG FLOWCHART */}
      <section className="py-32 relative overflow-hidden" id="process">
        <div
          className="orb w-[500px] h-[400px] bg-emerald-500/[0.04]"
          style={{ bottom: "10%", right: "5%" }}
        ></div>
        <div className="relative max-w-5xl mx-auto px-8">
          <div className="text-center mb-20">
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-emerald-600 block mb-4 r-fade">
              Simple Process
            </span>
            <h2 className="display-section text-5xl md:text-7xl r-up">
              How we <span className="text-gradient">hire</span>
            </h2>
            <p className="text-base text-gray-500 font-light max-w-lg mx-auto mt-4 r-fade">
              No whiteboard puzzles. No brain teasers. We value discipline and transparency at
              every step — and we expect the same from you.
            </p>
          </div>
          {/* 4-step process: two rows of two */}
          <div className="r-up" id="processFlow">
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
              {/* Step 1 */}
              <div className="bg-white rounded-2xl p-8 border border-emerald-500/15 relative">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-[11px] text-emerald-600 tracking-[0.15em]">
                    01
                  </span>
                  <div className="flex-1 h-px bg-emerald-500/15"></div>
                  <MessageCircle className="w-4 h-4 text-emerald-500/40" />
                </div>
                <h3 className="text-xl font-light text-gray-900 tracking-tight mb-2">
                  Initial Chat
                </h3>
                <p className="text-[14px] text-gray-500 font-light leading-relaxed">
                  A quick, casual conversation to get to know you — your interests, what excites
                  you, and what you're looking for. No pressure, just a real conversation.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl p-8 border border-cyan-500/15 relative">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-[11px] text-cyan-600 tracking-[0.15em]">
                    02
                  </span>
                  <div className="flex-1 h-px bg-cyan-500/15"></div>
                  <Code2 className="w-4 h-4 text-cyan-500/40" />
                </div>
                <h3 className="text-xl font-light text-gray-900 tracking-tight mb-2">
                  Skill Assessment
                </h3>
                <p className="text-[14px] text-gray-500 font-light leading-relaxed">
                  A take-home practical problem relevant to the role. No trick questions or brain
                  teasers — just real work that shows us how you think and build.
                </p>
              </div>

              {/* Connecting SVG between rows */}
              <div className="col-span-1 md:col-span-2 flex justify-center py-1">
                <svg width="200" height="24" viewBox="0 0 200 24" fill="none">
                  <path
                    d="M100,0 L100,24"
                    stroke="url(#stepGrad)"
                    strokeWidth="1.5"
                    strokeOpacity="0.2"
                    strokeDasharray="4 3"
                  />
                  <defs>
                    <linearGradient id="stepGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-2xl p-8 border border-blue-500/15 relative">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-[11px] text-blue-600 tracking-[0.15em]">
                    03
                  </span>
                  <div className="flex-1 h-px bg-blue-500/15"></div>
                  <Building2 className="w-4 h-4 text-blue-500/40" />
                </div>
                <h3 className="text-xl font-light text-gray-900 tracking-tight mb-2">
                  On-Site Assessment
                </h3>
                <p className="text-[14px] text-gray-500 font-light leading-relaxed">
                  Come to our Kolkata office and work on a hands-on task with the team. See the
                  workspace, meet the people, get a real feel for how we operate day-to-day.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-2xl p-8 border border-violet-500/15 relative">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-[11px] text-violet-600 tracking-[0.15em]">
                    04
                  </span>
                  <div className="flex-1 h-px bg-violet-500/15"></div>
                  <Handshake className="w-4 h-4 text-violet-500/40" />
                </div>
                <h3 className="text-xl font-light text-gray-900 tracking-tight mb-2">
                  Chat with Management
                </h3>
                <p className="text-[14px] text-gray-500 font-light leading-relaxed">
                  A short, direct conversation with leadership. We want to understand your goals,
                  and you should understand ours. Mutual fit matters more than anything.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 r-up">
            <div className="bg-white/60 border border-emerald-500/10 rounded-xl p-5 text-center">
              <Puzzle className="w-5 h-5 text-emerald-600 mx-auto mb-2" />
              <span className="text-[13px] text-gray-700 font-light block">
                Problem solving
              </span>
            </div>
            <div className="bg-white/60 border border-cyan-500/10 rounded-xl p-5 text-center">
              <ShieldCheck className="w-5 h-5 text-cyan-600 mx-auto mb-2" />
              <span className="text-[13px] text-gray-700 font-light block">Discipline</span>
            </div>
            <div className="bg-white/60 border border-blue-500/10 rounded-xl p-5 text-center">
              <Eye className="w-5 h-5 text-blue-600 mx-auto mb-2" />
              <span className="text-[13px] text-gray-700 font-light block">Transparency</span>
            </div>
            <div className="bg-white/60 border border-violet-500/10 rounded-xl p-5 text-center">
              <Sparkles className="w-5 h-5 text-violet-600 mx-auto mb-2" />
              <span className="text-[13px] text-gray-700 font-light block">Excitement for AI</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 relative overflow-hidden" id="cta">
        <div
          className="orb w-[800px] h-[600px] bg-gradient-to-br from-emerald-500/[0.06] via-cyan-500/[0.03] to-violet-500/[0.06]"
          style={{ top: "10%", left: "15%" }}
        ></div>
        <div className="relative max-w-4xl mx-auto px-8 text-center">
          <h2 className="display-hero text-6xl md:text-8xl lg:text-[8rem] mb-10 r-scale">
            Ready?
          </h2>
          <p className="text-xl text-gray-500 font-light mb-12 leading-relaxed max-w-xl mx-auto r-up">
            If you're curious, humble, and hungry — we'd love to hear from you. No cover letter
            needed. Just show us what you've built.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 r-up">
            <a
              href="mailto:careers@genovationsolutions.com"
              className="group px-10 py-5 rounded-full bg-[#1a1a2e] text-white text-[15px] font-light flex items-center gap-3 hover:bg-black transition-all hover:shadow-2xl hover:shadow-black/10"
            >
              careers@genovationsolutions.com{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <p className="text-[13px] text-gray-400 font-light mt-10">
            Kolkata, India · Building AI for the world
          </p>
        </div>
      </section>
    </>
  );
}