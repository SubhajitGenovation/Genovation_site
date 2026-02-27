"use client";

export default function ResearchFooter() {
  return (
    <footer className="border-t border-black/[0.06] py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between flex-wrap gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
              <svg className="w-3 h-3 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4"/>
              </svg>
            </div>
            <span className="text-sm font-light tracking-tight text-gray-500">Genovation</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            {["Privacy", "Terms", "Security", "Contact"].map((item) => (
              <a key={item} href="#"
                className="text-xs font-light tracking-wide text-gray-500 hover:text-gray-900 transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-400 font-light">© 2026 Genovation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
