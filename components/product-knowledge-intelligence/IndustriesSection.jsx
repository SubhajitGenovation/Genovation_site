"use client";
import { useEffect } from "react";
import { Building2, Activity, Plane, Factory } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const INDUSTRIES = [
  { icon:Building2, color:"sky",     label:"Financial Services",  items:["Regulatory policy Q&A","Compliance documentation","Risk procedure guides"] },
  { icon:Activity,  color:"violet",  label:"Healthcare",          items:["Clinical protocol retrieval","Drug interaction databases","HIPAA policy navigation"] },
  { icon:Plane,     color:"cyan",    label:"Aerospace & Defense", items:["Technical manual access","Safety procedure retrieval","Maintenance documentation"] },
  { icon:Factory,   color:"emerald", label:"Manufacturing",       items:["Quality procedure guides","ISO standard compliance","Supplier spec comparison"] },
];

export default function IndustriesSection() {
  useEffect(() => {
    gsap.utils.toArray(".ind-r-up").forEach(el => {
      gsap.to(el, { y:0, opacity:1, duration:1, ease:"power3.out",
        scrollTrigger:{ trigger:el, start:"top 88%", once:true }
      });
    });
  }, []);

  return (
    <section className="py-32 md:py-48 relative bg-[#f5f3f0]">
      <div className="relative max-w-6xl mx-auto px-8 z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/[0.08] border border-emerald-500/[0.15] mb-8 ind-r-up">
            <Building2 className="w-3 h-3 text-emerald-500"/>
            <span className="text-emerald-600 text-[11px] font-light tracking-[0.25em] uppercase">Industry Applications</span>
          </div>
          <h2 className="display-section text-5xl md:text-7xl ind-r-up">
            Deployed Across<br/><span className="text-gradient-sky">Regulated Industries</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map(({ icon: Icon, color, label, items }) => (
            <div key={label} className="ki-card p-8 ind-r-up">
              <div className={`w-12 h-12 rounded-xl bg-${color}-500/[0.1] flex items-center justify-center mb-6`}>
                <Icon className={`w-6 h-6 text-${color}-500`}/>
              </div>
              <h3 className="text-[15px] font-light text-gray-900 mb-4">{label}</h3>
              <div className="space-y-2.5">
                {items.map(item => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className={`w-1 h-1 rounded-full bg-${color}-500`}/>
                    <span className="text-[13px] text-gray-600 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
