import HeroSection        from "@/components/product-knowledge-intelligence/HeroSection";
import DepartmentsSection from "@/components/product-knowledge-intelligence/DepartmentsSection";
import RagSection         from "@/components/product-knowledge-intelligence/RagSection";
import ProblemSection     from "@/components/product-knowledge-intelligence/ProblemSection";
import SolutionSection    from "@/components/product-knowledge-intelligence/SolutionSection";
import ChunkingSection    from "@/components/product-knowledge-intelligence/ChunkingSection"; // ← NEW
import CapabilitiesSection from "@/components/product-knowledge-intelligence/CapabilitiesSection";
import ComplianceSection  from "@/components/product-knowledge-intelligence/ComplianceSection";
import ComparisonsSection from "@/components/product-knowledge-intelligence/ComparisonsSection";
import OutcomesSection    from "@/components/product-knowledge-intelligence/OutcomesSection";
import MentisSection      from "@/components/product-knowledge-intelligence/MentisSection";
import CtaSection         from "@/components/product-knowledge-intelligence/CtaSection";
import KnowledgeStyles    from "@/components/product-knowledge-intelligence/KnowledgeStyles";
import ScrollLines        from "@/components/product-knowledge-intelligence/ScrollLines";

export const metadata = {
  title: "Knowledge Intelligence | Genovation",
  description: "Enterprise-grade RAG for governed, explainable answers over your policies & SOPs.",
};

const Divider = () => (
  <div className="divider-enhanced" style={{
    height:"1px", position:"relative", zIndex:2,
    background:"linear-gradient(90deg,transparent 0%,rgba(14,165,233,0.12) 20%,rgba(6,182,212,0.25) 50%,rgba(14,165,233,0.12) 80%,transparent 100%)"
  }} />
);

export default function KnowledgePage() {
  return (
    <>
      <KnowledgeStyles />
      <div id="scrollProgress" />
      <ScrollLines />
      <HeroSection />
      <Divider />
      <DepartmentsSection />
      <Divider />
      <RagSection />
      <Divider />
      <ProblemSection />
      <Divider />
      <SolutionSection />
      <Divider />
      <ChunkingSection />  {/* ← INSERTED HERE */}
      <Divider />
      <CapabilitiesSection />
      <Divider />
      <ComplianceSection />
      <Divider />
      <ComparisonsSection />
      <OutcomesSection />
      <Divider />
      <MentisSection />
      <Divider />
      <CtaSection />
      <KnowledgeFooter />
    </>
  );
}

function KnowledgeFooter() {
  return (
    <footer className="py-16 border-t border-black/[0.06]" style={{background:"#f5f3f0"}}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{background:"linear-gradient(135deg,#34d399,#22d3ee)"}}>
                <svg className="w-3.5 h-3.5 text-black" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="3">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 2v4m0 12v4M2 12h4m12 0h4"/>
                </svg>
              </div>
              <span className="text-sm font-light text-gray-600">Genovation</span>
            </div>
            <p className="text-[13px] text-gray-500 font-light leading-relaxed max-w-xs">
              Sovereign enterprise intelligence. Your data, your infrastructure, your AI.
            </p>
          </div>
          {[
            { label:"Platform", links:["Mentis AgentOS","JUDGE","CipherVault","Data Backbone"] },
            { label:"Products", links:["Knowledge","Analytics","Strategy","CX"] },
            { label:"Company",  links:["About","Careers","Security","Contact"] },
          ].map(({ label, links }) => (
            <div key={label}>
              <div className="text-[11px] text-gray-500 font-mono tracking-wider uppercase mb-4">{label}</div>
              <div className="space-y-2.5">
                {links.map(link => (
                  <a key={link} href="#"
                    className="block text-[13px] text-gray-500 hover:text-sky-600 font-light transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-black/[0.04] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 font-light">© 2026 Genovation. All rights reserved.</p>
          <div className="flex gap-8">
            {["Privacy","Terms","Security"].map(item => (
              <a key={item} href="#"
                className="text-xs text-gray-400 hover:text-sky-600 font-light transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
