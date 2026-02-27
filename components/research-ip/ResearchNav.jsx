"use client";
import { FlaskConical } from "lucide-react";

export default function ResearchNav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#f5f3f0]/85 border-b border-black/[0.08]"
      id="mainNav"
      style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        transition: "transform 0.5s cubic-bezier(0.23,1,0.32,1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center">
            <FlaskConical className="w-4 h-4 text-white" />
          </div>
          <span className="text-base font-light tracking-tight text-gray-700">Genovation</span>
        </a>

        <div className="hidden md:flex items-center gap-9 nav-desktop-items">
          {["Platform", "AgentOS", "Explainability", "Security"].map((item) => (
            <div key={item} className="nav-item">
              <span className="nav-item-label">{item}</span>
            </div>
          ))}
          <div className="nav-item active">
            <span className="nav-item-label" style={{ color: "#4f46e5" }}>Research IP</span>
          </div>
        </div>

        <div className="mag-btn">
          <button className="btn-inner px-5 py-2 rounded-full bg-black/[0.05] border border-black/[0.1] text-gray-700 hover:border-indigo-500/30 hover:text-indigo-600 text-xs font-light tracking-widest uppercase transition-all">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}