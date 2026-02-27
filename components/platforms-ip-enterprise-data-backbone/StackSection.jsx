"use client";
import { useEffect } from "react";
import { Database } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function StackSection() {
  useEffect(() => {
    ScrollTrigger.batch("#stackCards .card", {
      start: "top 87%",
      onEnter: (els) => gsap.fromTo(els, { y: 60, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: "power3.out" }),
      once: true,
    });
  }, []);

  const cards = [
    {
      icon: <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M12 2v4m0 12v4M2 12h4m12 0h4" /></svg>,
      iconBg: "from-emerald-400 to-cyan-400",
      current: false,
      title: "Mentis AgentOS",
      desc: "Governed intelligence execution for enterprise AI agents.",
      border: "rgba(16,185,129,0.15)",
    },
    {
      icon: <Database className="w-5 h-5 text-white" />,
      iconBg: "from-cyan-400 to-blue-500",
      current: true,
      title: "Enterprise Data Backbone",
      desc: "Governed data execution for reliable intelligence.",
      border: "rgba(6,182,212,0.15)",
    },
    {
      icon: <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>,
      iconBg: "from-violet-400 to-purple-500",
      current: false,
      title: "CipherVault",
      desc: "Secure, trustless analytics and cryptographic security.",
      border: "rgba(139,92,246,0.15)",
    },
  ];

  return (
    <section id="stack" className="py-48 relative">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-24">
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Genovation&apos;s <span className="text-gradient">Foundational IP</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5" id="stackCards">
          {cards.map((c) => (
            <div key={c.title} className="card p-8 r-up relative" style={{ background: "rgba(255,255,255,0.85)", borderColor: c.border }}>
              {c.current && (
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/[0.1] text-emerald-600 text-[8px] font-light tracking-wider border border-emerald-500/20">CURRENT</span>
                </div>
              )}
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${c.iconBg} flex items-center justify-center mb-6`}>{c.icon}</div>
              <h3 className="text-base font-light text-gray-900 mb-2">{c.title}</h3>
              <p className="text-[15px] text-gray-600 font-light">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
