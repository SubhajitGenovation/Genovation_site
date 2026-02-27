import Link from "next/link";

export default function SecurityFooter() {
  return (
    <footer className="py-16 border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
                </svg>
              </div>
              <span className="text-sm font-light text-gray-600">Genovation</span>
            </div>
            <p className="text-[13px] text-gray-500 font-light leading-relaxed max-w-xs">
              Sovereign enterprise intelligence. Your data, your infrastructure, your AI.
            </p>
          </div>

          <div>
            <div className="text-[11px] text-gray-500 font-mono tracking-wider uppercase mb-4">Platform</div>
            <div className="space-y-2.5">
              {["Mentis AgentOS", "Data Backbone", "CipherVault", "JUDGE"].map((item) => (
                <Link key={item} href="#" className="block text-[13px] text-gray-500 hover:text-gray-700 font-light transition-colors">{item}</Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] text-gray-500 font-mono tracking-wider uppercase mb-4">Security</div>
            <div className="space-y-2.5">
              <Link href="#pqcvault" className="block text-[13px] text-gray-500 hover:text-gray-700 font-light transition-colors">PQC Vault</Link>
              <Link href="#ciphervault" className="block text-[13px] text-gray-500 hover:text-gray-700 font-light transition-colors">CipherVault Protocol</Link>
              <Link href="#architecture" className="block text-[13px] text-gray-500 hover:text-gray-700 font-light transition-colors">Defense in Depth</Link>
              <Link href="#deployment" className="block text-[13px] text-gray-500 hover:text-gray-700 font-light transition-colors">Deployment Options</Link>
            </div>
          </div>

          <div>
            <div className="text-[11px] text-gray-500 font-mono tracking-wider uppercase mb-4">Company</div>
            <div className="space-y-2.5">
              {["About", "Careers", "Security", "Contact"].map((item) => (
                <Link key={item} href="#" className="block text-[13px] text-gray-500 hover:text-gray-700 font-light transition-colors">{item}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-black/[0.04] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 font-light">© 2026 Genovation. All rights reserved.</p>
          <div className="flex gap-8">
            {["Privacy", "Terms", "Security"].map((item) => (
              <Link key={item} href="#" className="text-xs text-gray-500 hover:text-gray-700 font-light transition-colors">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
