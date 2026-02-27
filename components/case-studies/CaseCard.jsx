"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight, MapPin, Clock, Building2 } from "lucide-react";
import { industryIcons, industryColors, indClass } from "@/lib/industry";
import { getImpactEntries } from "@/lib/utils";

export const CaseCard = ({ caseStudy, onClick }) => {
  const cardRef = useRef(null);
  const { id, industry, title, problem, client, location, duration, technologies, featured, impact } = caseStudy;
  const Icon = industryIcons[industry] || Building2;
  const color = industryColors[industry] || "#6b7280";
  const impactEntries = getImpactEntries(impact);
  const topStat = impactEntries[0];

  const handleClick = () => {
    // Quick scale animation on card
    gsap.to(cardRef.current, {
      scale: 0.98,
      duration: 0.15,
      ease: "power2.out",
      yoyo: true,
      repeat: 1,
      onComplete: onClick,
    });
  };

  if (featured) {
    return (
      <div
        ref={cardRef}
        className={`case-card featured ${indClass(industry)}`}
        onClick={handleClick}
      >
        <div className="card-top">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: `${color}10`, border: `1px solid ${color}20` }}
            >
              <Icon className="w-4 h-4" style={{ color }} />
            </div>
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase" style={{ color }}>
              {industry}
            </span>
            <span className="font-mono text-[9px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-600 border border-amber-400/15">
              Featured
            </span>
            <div className="card-arrow ml-auto">
              <ArrowUpRight className="w-5 h-5 text-gray-300" />
            </div>
          </div>
          <h3 className="text-2xl md:text-[1.7rem] font-light text-gray-900 tracking-tight leading-snug mb-3">
            {title}
          </h3>
          <p className="text-[14px] text-gray-400 font-light leading-relaxed mb-5 max-w-lg">{problem}</p>
          <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-400 font-light pb-6">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-3 h-3" /> {client}
            </span>
            <span className="text-gray-300">&middot;</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3" /> {location}
            </span>
            <span className="text-gray-300">&middot;</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3" /> {duration}
            </span>
          </div>
        </div>
        <div className="card-right">
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-gray-400 mb-5 block">
            Key Impact
          </span>
          <div className="space-y-4">
            {impactEntries.slice(0, 4).map((s, idx) => {
              const width = ((id * 13) + (idx * 7)) % 35 + 60;
              return (
                <div key={idx} className="card-hero-stat">
                  <div className="flex items-baseline justify-between mb-1.5">
                    <span className="text-[12px] text-gray-400 font-light">{s.label}</span>
                    <span className="text-[15px] font-medium" style={{ color }}>
                      {s.value}
                    </span>
                  </div>
                  <div className="h-1 rounded-full bg-black/[0.03] overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${width}%`, backgroundColor: `${color}30` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-1.5 mt-6">
            {technologies.slice(0, 3).map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md bg-black/[0.03] text-[10px] text-gray-500 font-mono tracking-wide"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="card-bottom" />
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      className={`case-card ${indClass(industry)}`}
      onClick={handleClick}
    >
      <div className="card-top">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: `${color}10`, border: `1px solid ${color}20` }}
            >
              <Icon className="w-3.5 h-3.5" style={{ color }} />
            </div>
            <span className="font-mono text-[10px] tracking-[0.12em] uppercase" style={{ color }}>
              {industry}
            </span>
          </div>
          <div className="card-arrow">
            <ArrowUpRight className="w-4 h-4 text-gray-300" />
          </div>
        </div>
        <h3 className="text-lg font-light text-gray-900 tracking-tight leading-snug mb-2.5">{title}</h3>
        <p
          className="text-[13px] text-gray-400 font-light leading-relaxed mb-5"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {problem}
        </p>
        <div
          className="card-hero-stat rounded-xl p-4 mb-1"
          style={{ background: `${color}06`, border: `1px solid ${color}12` }}
        >
          <div className="flex items-center justify-between">
            <span className="text-[12px] text-gray-500 font-light">{topStat.label}</span>
            <span className="text-lg font-medium tracking-tight" style={{ color }}>
              {topStat.value}
            </span>
          </div>
        </div>
      </div>
      <div className="card-bottom">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-[11px] text-gray-400 font-light">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {location.split(",")[0]}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {duration}
            </span>
          </div>
          <span className="px-2.5 py-1 rounded-md bg-black/[0.03] text-[10px] text-gray-500 font-mono tracking-wide">
            {technologies[0]}
          </span>
        </div>
      </div>
    </div>
  );
};