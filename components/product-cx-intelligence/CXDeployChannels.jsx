"use client";

import { LayoutGrid, Monitor, Smartphone, Component, Terminal } from "lucide-react";

const cards = [
  { Icon: Monitor,   bg: "rgba(245,158,11,0.2)",  iconColor: "text-amber-400",  title: "Website Widget",      body: "Drop-in live chat that connects to all your APIs with a single script tag." },
  { Icon: Smartphone,bg: "rgba(59,130,246,0.2)",   iconColor: "text-blue-400",   title: "Mobile SDK",          body: "Native iOS & Android. Swift, Kotlin, React Native SDKs." },
  { Icon: Component, bg: "rgba(16,185,129,0.2)",   iconColor: "text-emerald-400",title: "Embeddable",          body: "Drop into any portal — employee, partner, or customer-facing." },
  { Icon: Terminal,  bg: "rgba(139,92,246,0.2)",   iconColor: "text-violet-400", title: "REST & Streaming API",body: "Build completely custom experiences with full API access." },
];

export default function CXDeployChannels() {
  return (
    <section className="py-48 relative overflow-hidden" style={{ background: "#09090b" }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      <div className="orb" style={{ width: 600, height: 500, background: "rgba(245,158,11,0.04)", top: 0, left: "20%" }} />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border mb-8 r-up"
            style={{ background: "rgba(245,158,11,0.1)", borderColor: "rgba(245,158,11,0.2)" }}>
            <LayoutGrid className="w-3 h-3 text-amber-400" />
            <span className="text-amber-400 text-[11px] font-light tracking-[0.25em] uppercase">Deploy Anywhere</span>
          </div>
          <h2 className="display-section text-white r-up" style={{ fontSize: "clamp(2.5rem,8vw,8rem)" }}>
            One Agent.<br /><span className="text-gradient">Every Channel.</span>
          </h2>
          <p className="text-lg font-light max-w-xl mx-auto mt-6 r-up" style={{ color: "#a1a1aa" }}>
            Website widget, mobile integration, embeddable component, or API.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ Icon, bg, iconColor, title, body }) => (
            <div key={title} className="r-up p-8 rounded-2xl border" style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.06)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: bg }}>
                <Icon className={`w-5 h-5 ${iconColor}`} />
              </div>
              <div className="text-[15px] font-normal text-white mb-2">{title}</div>
              <p className="text-[13px] font-light leading-relaxed" style={{ color: "#a1a1aa" }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
