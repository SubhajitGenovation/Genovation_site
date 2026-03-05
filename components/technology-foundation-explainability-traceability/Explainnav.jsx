"use client";

import { useRouter } from "next/navigation";

export default function ExplainNav() {
  const router = useRouter();

  const handleRequestDemo = () => {
    router.push("/request-demo");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f3f0]/85 border-b border-black/[0.08]" id="mainNav" style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", transition: "transform 0.5s cubic-bezier(0.23,1,0.32,1)" }}>
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
            <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4"/></svg>
          </div>
          <span className="text-base font-light tracking-tight text-gray-700">Genovation</span>
        </a>
        <div className="hidden md:flex items-center gap-9">
          {["Products", "Platform", "Security", "Industries"].map((item) => (
            <div key={item} className="nav-item"><span className="nav-item-label">{item}</span></div>
          ))}
          <div className="nav-item active"><span className="nav-item-label">Explainability</span></div>
        </div>
        <div className="mag-btn">
          <button 
            onClick={handleRequestDemo}
            className="btn-inner px-5 py-2 rounded-full bg-black/[0.05] border border-black/[0.1] text-gray-700 hover:border-emerald-500/30 hover:text-emerald-600 text-xs font-light tracking-widest uppercase transition-all"
          >
            Request Demo
          </button>
        </div>
      </div>
    </nav>
  );
}