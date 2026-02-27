"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { X, MapPin, Clock, Check, ArrowRight, Quote } from "lucide-react";
import { industryIcons, industryColors, indClass } from "@/lib/industry";
import { getImpactEntries } from "@/lib/utils";

export const Overlay = ({ isOpen, caseStudy, onClose }) => {
  const backdropRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      // Open animation
      gsap.to(backdropRef.current, {
        backgroundColor: "rgba(0,0,0,0.45)",
        backdropFilter: "blur(16px)",
        duration: 0.6,
        ease: "power3.out",
        overwrite: true,
      });
      gsap.to(panelRef.current, {
        x: "0%",
        duration: 0.7,
        ease: "power3.out",
        overwrite: true,
      });
      document.body.style.overflow = "hidden";
    } else {
      // Close animation
      gsap.to(backdropRef.current, {
        backgroundColor: "rgba(0,0,0,0)",
        backdropFilter: "blur(0px)",
        duration: 0.5,
        ease: "power3.in",
        overwrite: true,
      });
      gsap.to(panelRef.current, {
        x: "100%",
        duration: 0.6,
        ease: "power3.in",
        overwrite: true,
        onComplete: () => {
          document.body.style.overflow = "";
        },
      });
    }
  }, [isOpen]);

  if (!caseStudy) return null;

  const {
    industry,
    title,
    client,
    location,
    duration,
    compliance,
    technologies,
    impact,
    detailedContent,
  } = caseStudy;
  const Icon = industryIcons[industry] || (() => null);
  const color = industryColors[industry] || "#6b7280";
  const impactEntries = getImpactEntries(impact);
  const dc = detailedContent;

  return (
    <>
      <div
        ref={backdropRef}
        className="overlay-backdrop"
        id="overlayBackdrop"
        onClick={onClose}
        style={{ backgroundColor: "rgba(0,0,0,0)", backdropFilter: "blur(0px)" }}
      />
      <div
        ref={panelRef}
        className="overlay-panel"
        id="overlayPanel"
        style={{ transform: "translateX(100%)" }}
      >
        <div id="overlayContent">
          <div className="sticky top-0 z-10 bg-[#f5f3f0]/92 backdrop-blur-2xl border-b border-black/[0.04] px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: `${color}10`, border: `1px solid ${color}20` }}
              >
                <Icon className="w-4 h-4" style={{ color }} />
              </div>
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase" style={{ color }}>
                {industry}
              </span>
              <span className="text-gray-300 mx-1">&middot;</span>
              <span className="text-[12px] text-gray-400 font-light">{client}</span>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl bg-white/60 border border-black/[0.06] flex items-center justify-center hover:bg-white transition-colors"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          <div className={`px-8 pt-10 pb-8 ${indClass(industry)}`}>
            <h2 className="text-3xl md:text-[2.5rem] font-extralight tracking-tight text-gray-900 leading-tight mb-4">
              {title}
            </h2>
            <p className="text-base text-gray-400 font-light leading-relaxed max-w-xl mb-8">
              {dc.executiveSummary}
            </p>
            <div className="flex flex-wrap gap-2.5 mb-8">
              <span className="inline-flex items-center gap-1.5 text-[12px] text-gray-500 font-light bg-white/60 border border-black/[0.06] rounded-full px-4 py-1.5">
                <MapPin className="w-3 h-3" /> {location}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[12px] text-gray-500 font-light bg-white/60 border border-black/[0.06] rounded-full px-4 py-1.5">
                <Clock className="w-3 h-3" /> {duration}
              </span>
              {compliance.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 text-[12px] font-light rounded-full px-4 py-1.5"
                  style={{ backgroundColor: `${color}08`, border: `1px solid ${color}15`, color }}
                >
                  {c}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {impactEntries.map((s, idx) => (
                <div
                  key={idx}
                  className="bg-white/70 border border-black/[0.04] rounded-2xl p-4 text-center"
                >
                  <span className="block text-lg font-medium" style={{ color }}>
                    {s.value}
                  </span>
                  <span className="block text-[11px] text-gray-400 font-light mt-0.5">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent mx-8" />

          <div className="px-8 py-10">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-emerald-600 mb-3 block">
              The Challenge
            </span>
            <p className="text-base text-gray-600 font-light leading-relaxed">{dc.challenge}</p>
          </div>

          <div className="px-8 pb-10">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-cyan-600 mb-3 block">
              Our Approach
            </span>
            <p className="text-base text-gray-600 font-light leading-relaxed">{dc.methodology}</p>
          </div>

          <div className={`px-8 pb-10 ${indClass(industry)}`}>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-blue-600 mb-6 block">
              Implementation Timeline
            </span>
            <div className="ml-2">
              {dc.implementation.map((step, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-[15px] font-medium text-gray-900">{step.phase}</span>
                    <span className="font-mono text-[10px] text-gray-400">{step.duration}</span>
                  </div>
                  <p className="text-[13px] text-gray-400 font-light leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="px-8 pb-10">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-violet-600 mb-5 block">
              Key Features
            </span>
            <div className="grid md:grid-cols-2 gap-3">
              {dc.keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white/50 border border-black/[0.04] rounded-xl p-4"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-emerald-600" />
                  </div>
                  <span className="text-[13px] text-gray-600 font-light leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`mx-8 mb-10 bg-white/70 border border-black/[0.06] rounded-2xl p-6 md:p-8 ${indClass(industry)}`}>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-6 block">
              Before → After
            </span>
            {Object.entries(dc.results.beforeAfter).map(([key, value]) => (
              <div key={key} className="ba-row">
                <div>
                  <span className="text-[13px] text-gray-400 font-light">{value.before}</span>
                </div>
                <div className="ba-arrow">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <span className="text-[13px] text-gray-900 font-medium">{value.after}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="px-8 pb-10">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-emerald-600 mb-5 block">
              Business Impact
            </span>
            <div className="space-y-3">
              {dc.results.businessImpact.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <span className="text-[14px] text-gray-600 font-light leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {dc.testimonial && (
            <div className="mx-8 mb-10 bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a] rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-6 text-white/[0.03] text-[140px] leading-none font-serif select-none">
                &ldquo;
              </div>
              <Quote className="w-6 h-6 text-emerald-400/30 mb-4" />
              <p className="text-white/65 text-base font-light leading-relaxed italic mb-6 relative z-10 max-w-lg">
                &ldquo;{dc.testimonial.quote}&rdquo;
              </p>
              <div className="relative z-10">
                <span className="text-white/85 text-sm font-medium block">{dc.testimonial.author}</span>
                <span className="text-white/35 text-xs font-light">
                  {dc.testimonial.title}, {dc.testimonial.company}
                </span>
              </div>
            </div>
          )}

          <div className="px-8 pb-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-3 block">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg bg-white/60 border border-black/[0.06] text-[12px] text-gray-600 font-light"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-3 block">
                  Compliance
                </span>
                <div className="flex flex-wrap gap-2">
                  {compliance.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1.5 rounded-lg text-[12px] font-light"
                      style={{ backgroundColor: `${color}06`, border: `1px solid ${color}12`, color }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mx-8 mb-12 bg-white/50 border border-black/[0.06] rounded-2xl p-6">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-3 block">
              What's Next
            </span>
            <p className="text-[14px] text-gray-500 font-light leading-relaxed">{dc.nextSteps}</p>
          </div>

          <div className="px-8 pb-12 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-black text-white text-sm font-light tracking-wider uppercase hover:bg-gray-800 transition-colors"
            >
              Discuss your project <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};