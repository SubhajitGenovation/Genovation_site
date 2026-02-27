"use client";

export default function DeploymentNav() {
  return (
    <nav
      id="mainNav"
      className="fixed top-0 left-0 right-0 z-50 border-b border-black/[0.08]"
      style={{
        background: "rgba(245,243,240,0.85)",
        backdropFilter: "blur(20px) saturate(1.4)",
        WebkitBackdropFilter: "blur(20px) saturate(1.4)",
        transition: "transform 0.5s cubic-bezier(0.23,1,0.32,1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
            <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
            </svg>
          </div>
          <span className="text-base font-light tracking-tight text-gray-700">Genovation</span>
        </div>

        <div className="hidden md:flex items-center gap-9">
          <a href="#" className="text-xs text-gray-500 hover:text-gray-800 font-light tracking-[0.15em] uppercase transition-colors">Platform</a>
          <a href="#" className="text-xs text-indigo-600 font-light tracking-[0.15em] uppercase">Technology</a>
          <a href="#" className="text-xs text-gray-500 hover:text-gray-800 font-light tracking-[0.15em] uppercase transition-colors">Solutions</a>
          <a href="#" className="text-xs text-gray-500 hover:text-gray-800 font-light tracking-[0.15em] uppercase transition-colors">Resources</a>
        </div>

        <button
          className="px-5 py-2 rounded-full text-gray-700 hover:text-indigo-600 text-xs font-light tracking-widest uppercase transition-all"
          style={{ background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.1)" }}
        >
          Contact Sales
        </button>
      </div>
    </nav>
  );
}