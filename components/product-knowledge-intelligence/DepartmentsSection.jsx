"use client";
import { useEffect, useState } from "react";
import { TrendingUp, Users, FlaskConical, Scale, Settings } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SalesMock  from "./SalesMock";
import HRMock     from "./HRMock";
import RDMock     from "./RDMock";
import LegalMock  from "./LegalMock";
import OpsMock    from "./OpsMock";

const TABS = [
  { id:"sales",    label:"Sales",       Icon: TrendingUp,   MockComp: SalesMock,
    stats:[
      { value:"Instant", label:"Product Knowledge", color:"text-sky-400" },
      { value:"-73%",    label:"Call Prep Time",    color:"text-emerald-400" },
      { value:"100%",    label:"Pricing Accuracy",  color:"text-cyan-400" },
      { value:"+31%",    label:"Win Rate",          color:"text-violet-400" },
    ]
  },
  { id:"hr",       label:"HR & People", Icon: Users,        MockComp: HRMock,
    stats:[
      { value:"< 30s",  label:"Policy Resolution", color:"text-violet-400" },
      { value:"100%",   label:"Regional Accuracy",  color:"text-emerald-400" },
      { value:"Auto",   label:"Conflict Detection", color:"text-amber-400" },
      { value:"-58%",   label:"HR Tickets",         color:"text-sky-400" },
    ]
  },
  { id:"research", label:"R&D",         Icon: FlaskConical, MockComp: RDMock,
    stats:[
      { value:"Auto",     label:"Cross-Study Discovery", color:"text-emerald-400" },
      { value:"-82%",     label:"Lit Review Time",       color:"text-sky-400" },
      { value:"Real-time",label:"Spec Conflicts",        color:"text-amber-400" },
      { value:"-91%",     label:"Duplicate Risk",        color:"text-violet-400" },
    ]
  },
  { id:"legal",    label:"Legal",       Icon: Scale,        MockComp: LegalMock,
    stats:[
      { value:"Instant", label:"Clause Retrieval",      color:"text-amber-400" },
      { value:"-64%",    label:"Review Cycles",         color:"text-emerald-400" },
      { value:"Auto",    label:"Risk Flagging",         color:"text-sky-400" },
      { value:"100%",    label:"Regulation Coverage",   color:"text-violet-400" },
    ]
  },
  { id:"ops",      label:"Operations",  Icon: Settings,     MockComp: OpsMock,
    stats:[
      { value:"Real-time",label:"System Monitoring",    color:"text-cyan-400" },
      { value:"-47%",     label:"Incident MTTR",        color:"text-emerald-400" },
      { value:"Auto",     label:"Root Cause Analysis",  color:"text-amber-400" },
      { value:"99.97%",   label:"SLA Compliance",       color:"text-violet-400" },
    ]
  },
];

export default function DepartmentsSection() {
  const [active, setActive] = useState("sales");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo("#deptHeadline span:nth-child(1)",
      { y:60, opacity:0 }, { y:0, opacity:1, duration:1.2, ease:"power3.out",
        scrollTrigger:{ trigger:"#deptHero", start:"top 75%", toggleActions:"play none none none" }});
    gsap.fromTo("#deptHeadline span:nth-child(2)",
      { y:60, opacity:0 }, { y:0, opacity:1, duration:1.2, ease:"power3.out", delay:0.15,
        scrollTrigger:{ trigger:"#deptHero", start:"top 75%", toggleActions:"play none none none" }});
    gsap.fromTo("#deptHeadline span:nth-child(3)",
      { y:60, opacity:0 }, { y:0, opacity:1, duration:1.2, ease:"power3.out", delay:0.3,
        scrollTrigger:{ trigger:"#deptHero", start:"top 75%", toggleActions:"play none none none" }});
    gsap.fromTo(".dept-icon-item",
      { y:30, opacity:0 }, { y:0, opacity:0.4, stagger:0.08, duration:0.8, ease:"power3.out",
        scrollTrigger:{ trigger:"#deptIconRow", start:"top 85%", toggleActions:"play none none none" }});
  }, []);

  const switchDept = (id) => {
    setActive(id);
    gsap.fromTo(`[data-dept-panel="${id}"]`,
      { opacity:0, y:30 }, { opacity:1, y:0, duration:0.6, ease:"power3.out" });
    document.querySelectorAll(".dept-icon-item").forEach(i => {
      const isActive = i.dataset.deptIcon === id;
      gsap.to(i, { opacity: isActive ? 1 : 0.4, scale: isActive ? 1.1 : 1, duration:0.3, ease:"power2.out" });
    });
  };

  const current = TABS.find(t => t.id === active);
  const MockComp = current.MockComp;

  return (
    <section className="relative overflow-hidden" id="departments"
      style={{ background:"linear-gradient(180deg,#060a14 0%,#0a0f1e 15%,#0f172a 50%,#1e293b 85%,#0f172a 100%)" }}>
      <div className="absolute inset-0" style={{ backgroundImage:"radial-gradient(ellipse at 30% 20%,rgba(14,165,233,0.06) 0%,transparent 50%),radial-gradient(ellipse at 70% 80%,rgba(139,92,246,0.04) 0%,transparent 50%)" }} />
      <div className="absolute inset-0" style={{ backgroundImage:"linear-gradient(rgba(14,165,233,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(14,165,233,0.025) 1px,transparent 1px)", backgroundSize:"60px 60px" }} />
      <div className="orb" style={{ width:1200, height:800, background:"rgba(14,165,233,0.035)", top:"-15%", left:"10%" }} />
      <div className="orb" style={{ width:800,  height:600, background:"rgba(139,92,246,0.025)", bottom:0, right:0 }} />

      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-1/4 w-px h-full"
        style={{ background:"linear-gradient(180deg,transparent 0%,rgba(14,165,233,0.06) 20%,rgba(14,165,233,0.06) 80%,transparent 100%)" }} />
      <div className="absolute top-0 right-1/4 w-px h-full"
        style={{ background:"linear-gradient(180deg,transparent 0%,rgba(139,92,246,0.04) 30%,rgba(139,92,246,0.04) 70%,transparent 100%)" }} />

      {/* ── HEADLINE BLOCK ── */}
      <div className="relative pt-40 md:pt-56 pb-16 md:pb-24" id="deptHero">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div className="inline-flex items-center gap-3 px-7 py-3 rounded-full mb-14 r-up"
            style={{ background:"linear-gradient(135deg,rgba(14,165,233,0.1),rgba(139,92,246,0.06))", border:"1px solid rgba(14,165,233,0.15)" }}>
            <div className="w-2 h-2 rounded-full bg-sky-400 soft-pulse" />
            <span className="text-sky-300 font-mono uppercase"
              style={{ fontSize:11, letterSpacing:"0.25em" }}>Real-Time Department Intelligence</span>
          </div>

          <h2 className="mb-10" id="deptHeadline">
            <span className="block display-hero text-white/90"
              style={{ fontSize:"clamp(3rem,7.5vw,7.5rem)", lineHeight:0.9, letterSpacing:"-0.05em" }}>
              One Platform.
            </span>
            <span className="block display-hero text-gradient-sky"
              style={{ fontSize:"clamp(3rem,7.5vw,7.5rem)", lineHeight:0.9, letterSpacing:"-0.05em", marginTop:"0.2em" }}>
              Every Team
            </span>
            <span className="block display-hero text-gradient-sky"
              style={{ fontSize:"clamp(3rem,7.5vw,7.5rem)", lineHeight:0.9, letterSpacing:"-0.05em", marginTop:"0.2em" }}>
              Transformed.
            </span>
          </h2>

          <div className="flex items-center justify-center gap-4 mb-10 r-up">
            <div className="w-24 h-px" style={{ background:"linear-gradient(90deg,transparent,rgba(14,165,233,0.3))" }} />
            <div className="w-2.5 h-2.5 rounded-full relative" style={{ border:"1px solid rgba(14,165,233,0.4)" }}>
              <div className="absolute inset-0 rounded-full soft-pulse" style={{ background:"rgba(14,165,233,0.2)" }} />
            </div>
            <div className="w-24 h-px" style={{ background:"linear-gradient(270deg,transparent,rgba(14,165,233,0.3))" }} />
          </div>

          <p className="text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-8 r-up"
            style={{ fontSize:"clamp(1rem,1.5vw,1.35rem)", letterSpacing:"-0.01em" }}>
            See how Knowledge Intelligence adapts to each department — delivering{" "}
            <span className="text-sky-300/70">contextual, role-specific intelligence</span>{" "}
            from the same unified knowledge base.
          </p>

          {/* Icon row */}
          <div className="flex items-center justify-center gap-6 md:gap-10 mb-16 r-up" id="deptIconRow">
            {TABS.map(({ id, label, Icon }) => (
              <div key={id} className="dept-icon-item flex flex-col items-center gap-2 cursor-pointer transition-all duration-300"
                data-dept-icon={id}
                style={{ opacity: active === id ? 1 : 0.4, transform: active === id ? "scale(1.1)" : "scale(1)" }}
                onClick={() => switchDept(id)}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.06)" }}>
                  <Icon className="w-4 h-4" style={{ color: active === id ? "#7dd3fc" : "#6b7280" }} />
                </div>
                <span className="font-mono uppercase text-gray-500" style={{ fontSize:9, letterSpacing:"0.1em" }}>
                  {label === "HR & People" ? "HR" : label === "Operations" ? "Ops" : label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TABS + PANELS ── */}
      <div className="relative max-w-7xl mx-auto px-8">
        {/* Tab pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 r-up">
          {TABS.map(({ id, label, Icon }) => (
            <button key={id} className={`dept-tab${active === id ? " active" : ""}`}
              onClick={() => switchDept(id)}>
              <Icon className="w-4 h-4" /> {label}
            </button>
          ))}
        </div>

        {/* Active panel */}
        <div className="pb-36 md:pb-48" data-dept-panel={active}>
          {/* Stats bar */}
          <div className="dept-stat-bar max-w-3xl mx-auto mb-10">
            {current.stats.map((s, i) => (
              <div key={s.label} className="contents">
                {i > 0 && <div className="dept-stat-divider" />}
                <div className="dept-stat-item">
                  <div className={`dept-stat-value ${s.color}`}>{s.value}</div>
                  <div className="dept-stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Mock */}
          <div className="max-w-6xl mx-auto">
            <MockComp />
          </div>
        </div>
      </div>
    </section>
  );
}
