"use client";

const FOOTER_LINKS = [
  {
    title: "Products",
    links: [
      { label: "Knowledge Intelligence", active: false },
      { label: "Analytics Intelligence", active: false },
      { label: "Strategy Intelligence",  active: true  },
      { label: "CX Intelligence",        active: false },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Mentis AgentOS",    active: false },
      { label: "Data Backbone",     active: false },
      { label: "CipherVault",       active: false },
      { label: "JUDGE Governance",  active: false },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", active: false },
      { label: "Case Studies",  active: false },
      { label: "Blog",          active: false },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", active: false },
      { label: "Careers",  active: false },
      { label: "Contact",  active: false },
    ],
  },
];

const COMPLIANCE = ["SOC 2", "ISO 27001", "GDPR", "HIPAA"];

function LogoMark() {
  return (
    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
      <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
      </svg>
    </div>
  );
}

export default function StrategyFooter() {
  return (
    <footer
      className="relative z-10 border-t border-black/[0.06]"
      style={{ background: "var(--surface)" }}
    >
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">

          {/* Brand col */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-5">
              <LogoMark />
              <span className="text-base font-light tracking-tight text-gray-700">Genovation</span>
            </a>
            <p className="text-sm text-gray-400 font-light leading-relaxed mb-6 max-w-xs">
              Enterprise Intelligence. Sovereign by Design. Production-grade AI systems for
              regulated industries.
            </p>
            <div className="flex gap-3">
              {/* X / Twitter */}
              <a
                href="#"
                className="w-9 h-9 bg-black/[0.04] hover:bg-black/[0.08] rounded-lg flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                className="w-9 h-9 bg-black/[0.04] hover:bg-black/[0.08] rounded-lg flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-xs font-mono text-gray-500 tracking-[0.15em] uppercase mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map(({ label, active }) => (
                  <li key={label}>
                    <a
                      href="#"
                      className={
                        active
                          ? "text-sm text-emerald-600 font-medium"
                          : "text-sm text-gray-400 hover:text-gray-700 transition-colors font-light"
                      }
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <span className="text-xs text-gray-400 font-light">
                © 2025 Genovation Technological Solutions Pvt. Ltd.
              </span>
              <div className="flex items-center gap-4">
                <a href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors font-light">
                  Privacy Policy
                </a>
                <a href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors font-light">
                  Terms of Service
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-gray-400 font-mono hidden md:block">COMPLIANCE:</span>
              {COMPLIANCE.map((badge) => (
                <span
                  key={badge}
                  className="px-2 py-1 bg-black/[0.03] border border-black/[0.06] rounded text-[10px] text-gray-400 font-mono"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
