import Link from "next/link";
import ProductCard from "../ui/ProductCard";
import MgLink from "../ui/MgLink";
import Icon from "../ui/Icon";

const toPublicPath = (href = "/") => href.replace(/^\/a-/, "/");

export default function ProductsPanel() {
  return (
    <div className="pt-0 pb-6">
      <div className="grid grid-cols-[5fr_3.5fr_3.5fr] gap-0 px-0 py-9">
        {/* Column 1: Intelligence Products */}
        <div className="pr-10 border-r border-gray-100">
          <div className="text-xs uppercase tracking-widest text-emerald-700 mb-4 font-semibold">
            Intelligence Products
          </div>
          <div className="flex flex-col gap-2">
            <ProductCard
              href="/a-product-knowledge-intelligence"
              icon="book-open"
              title="Enterprise Knowledge Intelligence"
              desc="Semantic search across millions of documents. Policy Q&A, knowledge consolidation, and gap detection — all grounded and verified."
              tags={["Semantic Search", "SOP Q&A", "Gap Detection"]}
            />
            <ProductCard
              href="/a-product-analytics-intelligence"
              icon="bar-chart-3"
              title="Analytics & Decision Intelligence"
              desc="Natural language to SQL. Ask questions in plain English, get visualized insights from your databases — entirely on-premise."
              tags={["NL-to-SQL", "CFO Variance", "Spend Analysis"]}
            />
            <ProductCard
              href="/a-product-strategy-intelligence"
              icon="telescope"
              title="Strategy & Research Intelligence"
              desc="Continuous monitoring of competitors, markets, and regulations. Real-time signals synthesized into actionable strategic briefs."
              tags={["Market Intel", "Competitor Radar"]}
            />
            <ProductCard
              href="/a-product-cx-intelligence"
              icon="headphones"
              title="CX Intelligence"
              desc="Deploy AI agents that handle complex customer queries with human-like reasoning — end-to-end encrypted, fully auditable."
              tags={["Conversational AI", "Secure CX"]}
            />
            <ProductCard
              href="/a-consulting-strategy"
              icon="lightbulb"
              title="Consulting & Strategy"
              desc="Expert-led AI strategy, transformation roadmaps, and sovereign intelligence consulting for regulated enterprises."
              tags={["AI Strategy", "Transformation", "Advisory"]}
            />
          </div>
        </div>

        {/* Column 2: Why Genovation */}
        <div className="px-9 border-r border-gray-100">
          <div className="text-xs uppercase tracking-widest text-emerald-700 mb-4 font-semibold">
            Why Genovation
          </div>
          <MgLink
            href="/a-why-genovation"
            icon="shield"
            label="Built for Regulated Enterprises"
          />
          <MgLink
            href="/a-security-sovereignty"
            icon="server"
            label="Sovereignty-First Architecture"
          />
          <MgLink
            href="/a-why-we-build"
            icon="brain"
            label="Intelligence Over Automation"
          />
          <MgLink
            href="/a-technology-foundation-explainability-traceability"
            icon="eye"
            label="Explainability by Design"
          />
          <MgLink
            href="/a-research-ip"
            icon="leaf"
            label="Sustainable AI Economics"
          />
          <div className="h-px bg-gray-100 my-4" />
          <div className="text-xs uppercase tracking-widest text-emerald-700 mb-4 font-semibold">
            Governance
          </div>
          <MgLink
            href="/a-technology-foundation-explainability-traceability"
            icon="file-search"
            label="Explainability & Auditability"
          />
          <MgLink
            href="/a-product-analytics-intelligence"
            icon="gauge"
            label="Executive Decision Support"
          />
          <MgLink
            href="/a-technology-foundation-deployment-models"
            icon="layers"
            label="Deployment Models"
          />
        </div>

        {/* Column 3: Primary Buyers & Featured */}
        <div className="pl-9">
          <div className="text-xs uppercase tracking-widest text-emerald-700 mb-4 font-semibold">
            Primary Buyers
          </div>
          <Link
            href={toPublicPath("/a-why-genovation")}
            className="group flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-emerald-700 transition-colors"
          >
            <Icon
              name="monitor"
              className="w-4 h-4 text-gray-500 group-hover:text-emerald-600"
            />
            CIO / CTO
            <Icon
              name="chevron-right"
              className="w-3 h-3 ml-auto text-gray-400 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-emerald-500"
            />
          </Link>
          <Link
            href={toPublicPath("/a-product-analytics-intelligence")}
            className="group flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-emerald-700 transition-colors"
          >
            <Icon
              name="calculator"
              className="w-4 h-4 text-gray-500 group-hover:text-emerald-600"
            />
            CFO / COO
            <Icon
              name="chevron-right"
              className="w-3 h-3 ml-auto text-gray-400 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-emerald-500"
            />
          </Link>
          <Link
            href={toPublicPath("/a-product-strategy-intelligence")}
            className="group flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-emerald-700 transition-colors"
          >
            <Icon
              name="compass"
              className="w-4 h-4 text-gray-500 group-hover:text-emerald-600"
            />
            Chief Strategy Officer
            <Icon
              name="chevron-right"
              className="w-3 h-3 ml-auto text-gray-400 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-emerald-500"
            />
          </Link>
          <Link
            href={toPublicPath("/a-product-cx-intelligence")}
            className="group flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-emerald-700 transition-colors"
          >
            <Icon
              name="users"
              className="w-4 h-4 text-gray-500 group-hover:text-emerald-600"
            />
            VP Customer Experience
            <Icon
              name="chevron-right"
              className="w-3 h-3 ml-auto text-gray-400 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-emerald-500"
            />
          </Link>

          <div className="mt-8 bg-emerald-50/50 rounded-xl p-5 border border-emerald-100/50">
            <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-teal-600 mb-2.5">
              ✦ Featured
            </div>
            <div className="text-base font-medium text-emerald-700 mb-1.5 tracking-tight">
              Enterprise AI Readiness Assessment
            </div>
            <div className="text-[13px] font-light text-gray-500 leading-relaxed">
              Take our free 5-minute assessment to discover how sovereign AI can
              transform your organisation&apos;s intelligence capabilities.
            </div>
            <Link
              href={toPublicPath("/a-product-home")}
              className="inline-flex items-center gap-1.5 mt-3.5 text-[13px] font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
            >
              Start Assessment{" "}
              <Icon name="arrow-right" className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-8 pt-4 border-t border-gray-100 text-[13px] font-medium text-gray-500">
        <Link href={toPublicPath("/a-product-home")} className="hover:text-emerald-700 transition-colors">All Products →</Link>
        <Link href={toPublicPath("/a-request-demo")} className="hover:text-emerald-700 transition-colors">Request Demo →</Link>
        <Link href={toPublicPath("/a-product-home")} className="hover:text-emerald-700 transition-colors">Pricing →</Link>
        <Link href={toPublicPath("/a-industries")} className="hover:text-emerald-700 transition-colors">Customer Stories →</Link>
      </div>
    </div>
  );
}
