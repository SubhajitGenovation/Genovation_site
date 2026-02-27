"use client";

export default function Footer() {
  const platform = ["Mentis AgentOS", "Data Backbone", "CipherVault", "JUDGE"];
  const products  = ["Knowledge", "Analytics", "Strategy", "CX"];
  const company   = ["About", "Careers", "Security", "Contact"];

  return (
    <footer className="py-16 border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <circle cx="12" cy="12" r="3" /><path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
                </svg>
              </div>
              <span className="text-sm font-light text-gray-600">Genovation</span>
            </div>
            <p className="text-[13px] text-gray-600 font-light leading-relaxed max-w-xs">
              Sovereign enterprise intelligence. Your data, your infrastructure, your AI.
            </p>
          </div>

          <div>
            <div className="text-[11px] text-gray-600 font-mono tracking-wider uppercase mb-4">Platform</div>
            <div className="space-y-2.5">
              {platform.map((item) => (
                <a key={item} href="#" className="block text-[13px] text-gray-600 font-light hover:text-gray-900 transition-colors">{item}</a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] text-gray-600 font-mono tracking-wider uppercase mb-4">Products</div>
            <div className="space-y-2.5">
              {products.map((item) => (
                <a key={item} href="#" className="block text-[13px] text-gray-600 font-light hover:text-gray-900 transition-colors">{item}</a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] text-gray-600 font-mono tracking-wider uppercase mb-4">Company</div>
            <div className="space-y-2.5">
              {company.map((item) => (
                <a key={item} href="#" className="block text-[13px] text-gray-600 font-light hover:text-gray-900 transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-black/[0.04] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 font-light">© 2026 Genovation. All rights reserved.</p>
          <div className="flex gap-8">
            {["Privacy", "Terms", "Security"].map((link) => (
              <a key={link} href="#" className="text-xs text-gray-600 font-light hover:text-gray-900 transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
