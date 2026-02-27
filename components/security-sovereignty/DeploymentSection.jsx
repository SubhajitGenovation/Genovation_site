"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Server, Cloud, WifiOff, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const deployCards = [
  {
    gradient: "from-blue-400 to-violet-400",
    iconBg: "from-blue-500/[0.12] to-blue-500/[0.04]",
    icon: <Cloud className="w-6 h-6 text-blue-500" />,
    title: "Private Cloud",
    desc: "Deploy within your VPC with complete network isolation. Data stays in your cloud account.",
    features: ["Your VPC, your keys", "Zero data egress", "Full audit integration"],
    compliance: "COMPLIANCE: Standard",
    complianceColor: "text-blue-500",
  },
  {
    gradient: "from-emerald-400 to-cyan-400",
    iconBg: "from-emerald-500/[0.12] to-emerald-500/[0.04]",
    icon: <Server className="w-6 h-6 text-emerald-500" />,
    title: "On-Premise",
    desc: "Full installation on your hardware within your datacenter. Maximum infrastructure control.",
    features: ["Your hardware", "Kubernetes or bare metal", "HSM integration"],
    compliance: "COMPLIANCE: Regulated",
    complianceColor: "text-emerald-600",
  },
  {
    gradient: "from-amber-400 to-red-400",
    iconBg: "from-amber-500/[0.12] to-amber-500/[0.04]",
    icon: <WifiOff className="w-6 h-6 text-amber-500" />,
    title: "Air-Gapped",
    desc: "Complete network isolation with zero external connectivity. Maximum security posture.",
    features: ["Zero connectivity", "Offline operation", "Manual updates only"],
    compliance: "COMPLIANCE: Classified",
    complianceColor: "text-amber-600",
  },
];

export default function DeploymentSection() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.utils.toArray(".r-up", containerRef.current).forEach((el) => {
        gsap.to(el, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
      });
      const cards = containerRef.current.querySelectorAll("#deployCards > div");
      if (cards.length) {
        ScrollTrigger.batch(cards, {
          start: "top 87%",
          onEnter: (elements) => gsap.fromTo(elements, { y: 60, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: "power3.out" }),
          once: true,
        });
      }
      containerRef.current.querySelectorAll(".orb").forEach((orb) => {
        gsap.to(orb, { y: (Math.random() - 0.5) * 250, x: (Math.random() - 0.5) * 120, ease: "none", scrollTrigger: { trigger: containerRef.current, start: "top bottom", end: "bottom top", scrub: 2.5 } });
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="deployment" className="py-32 md:py-48 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-15" />
      <div className="orb w-[500px] h-[400px] bg-emerald-500/[0.05]" style={{ top: "10%", left: "20%" }} />
      <div className="orb w-[400px] h-[350px] bg-blue-500/[0.04]" style={{ bottom: "15%", right: "20%" }} />

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.15] mb-8 r-up">
            <Server className="w-3 h-3 text-emerald-600" />
            <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">Deployment</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl lg:text-8xl r-up">
            Choose Your <span className="text-gradient">Security Level</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto r-up">
            From private cloud to air-gapped enclaves. Every deployment inherits the full security stack.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto" id="deployCards">
          {deployCards.map((c) => (
            <div key={c.title} className="card p-8 relative overflow-hidden">
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${c.gradient}`} />
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.iconBg} flex items-center justify-center mb-6`}>{c.icon}</div>
              <h3 className="text-xl font-normal text-gray-800 mb-2">{c.title}</h3>
              <p className="text-sm text-gray-500 font-light mb-6 leading-relaxed">{c.desc}</p>
              <div className="space-y-3 mb-6">
                {c.features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm font-light text-gray-500">
                    <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" /><span>{f}</span>
                  </div>
                ))}
              </div>
              <div className="pt-5 border-t border-black/[0.04]">
                <span className={`text-[10px] font-mono tracking-wider ${c.complianceColor}`}>{c.compliance}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
