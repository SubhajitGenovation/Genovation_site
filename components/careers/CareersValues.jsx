"use client";

export default function CareersValues() {
  const values = [
    "Excellence over perfection",
    "Discipline over motivation",
    "Transparency over politics",
    "Output over hours",
    "Learning over knowing",
    "Curiosity over credentials",
    "Craft over chaos",
    "Simplicity over complexity"
  ];

  return (
    <section className="py-20 relative overflow-hidden border-y border-black/[0.06]">
      <div className="relative max-w-7xl mx-auto px-8">
        <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-emerald-600 block mb-6 text-center r-fade">
          Our Values
        </span>
        
        <div className="ticker-wrap">
          <div className="ticker">
            {/* Duplicate for seamless loop */}
            {[...values, ...values].map((value, index) => (
              <div key={index} className="flex items-center gap-3 flex-shrink-0">
                <span className="text-xl md:text-2xl font-light text-gray-700 tracking-tight whitespace-nowrap">
                  {value}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}