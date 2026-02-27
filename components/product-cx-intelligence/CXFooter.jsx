"use client";

export default function CXFooter() {
  return (
    <footer className="py-16 relative z-10" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-5 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,#fbbf24,#ea580c)" }}>
                <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
                </svg>
              </div>
              <span className="text-sm font-light text-gray-600">Genovation</span>
            </div>
            <p className="text-[13px] text-gray-500 font-light leading-relaxed max-w-xs">
              Enterprise intelligence systems. Your data, your infrastructure, your AI.
            </p>
          </div>

          {/* Platform */}
          <div>
            <div className="text-[11px] text-gray-400 font-mono tracking-wider uppercase mb-4">Platform</div>
            <div className="space-y-2.5">
              {["Mentis AgentOS", "JUDGE", "CipherVault"].map((link) => (
                <a key={link} href="#" className="block text-[13px] text-gray-500 font-light hover:text-amber-600 transition-colors">{link}</a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <div className="text-[11px] text-gray-400 font-mono tracking-wider uppercase mb-4">Products</div>
            <div className="space-y-2.5">
              {["Knowledge", "Analytics", "Strategy"].map((link) => (
                <a key={link} href="#" className="block text-[13px] text-gray-500 font-light hover:text-amber-600 transition-colors">{link}</a>
              ))}
              <a href="#" className="block text-[13px] text-amber-600 font-light">CX Intelligence</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-[11px] text-gray-400 font-mono tracking-wider uppercase mb-4">Company</div>
            <div className="space-y-2.5">
              {["About", "Careers", "Security", "Contact"].map((link) => (
                <a key={link} href="#" className="block text-[13px] text-gray-500 font-light hover:text-amber-600 transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(0,0,0,0.04)" }}>
          <p className="text-xs text-gray-500 font-light">© 2026 Genovation. All rights reserved.</p>
          <div className="flex gap-4">
            {["SOC 2", "ISO 27001", "GDPR", "HIPAA"].map((badge) => (
              <span key={badge} className="px-2.5 py-1 rounded text-[10px] text-gray-400 font-mono"
                style={{ background: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.06)" }}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
