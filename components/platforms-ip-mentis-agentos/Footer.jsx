"use client";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
            <svg
              className="w-3.5 h-3.5 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
            </svg>
          </div>
          <span className="text-sm font-light text-gray-500">Genovation</span>
        </a>

        <div className="flex items-center gap-8 text-[12px] text-gray-400 font-light">
          {["Privacy", "Terms", "Security", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-emerald-600 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="text-[12px] text-gray-300 font-light">
          © 2025 Genovation AI
        </div>
      </div>
    </footer>
  );
}
