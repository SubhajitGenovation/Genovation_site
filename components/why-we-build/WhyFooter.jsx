"use client";
import Link from "next/link";

const footerLinks = {
  Platform:  ["Mentis OS", "Agent SKUs", "SLMs", "Security Libraries", "Extension Libraries"],
  Industries:["Financial Services", "Defense & Government", "Healthcare", "Manufacturing", "Energy"],
  Company:   ["Why We Build", "About", "Careers", "Press", "Contact"],
  Legal:     ["Privacy Policy", "Terms of Service", "Security Policy"],
};

export default function WhyFooter() {
  return (
    <footer className="py-20 relative bg-[#f5f3f0] border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
                <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
                </svg>
              </div>
              <span className="text-base font-light text-gray-700">Genovation</span>
            </div>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Enterprise intelligence infrastructure. Sovereign. Explainable. Governed.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-medium text-gray-700 tracking-widest uppercase mb-4">{heading}</h4>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l}>
                    <Link href="#" className="text-xs text-gray-500 hover:text-gray-700 font-light transition-colors">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 font-light">
            © {new Date().getFullYear()} Genovation AI. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-gray-400 font-light">Systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
