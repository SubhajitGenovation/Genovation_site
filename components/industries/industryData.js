export const industries = [
  {
    id: "mock1",
    num: "01",
    label: "Financial Services",
    badges: ["SEC", "SOX", "AML/KYC", "DORA"],
    badgeStyle: {},
    title: "Financial Services",
    subtitle: "Banking · Insurance · Asset Management",
    description:
      "Banks, insurers, and financial institutions operate under intense regulatory oversight. Every AI output must be verifiable, defensible, and traceable to source.",
    bullets: [
      "Policy and compliance intelligence across governance documents",
      "Explainable analytics for financial variance and risk",
      "Sovereign deployment with zero external data exposure",
    ],
    useCases: [
      { icon: "file-text", title: "Compliance Q&A", desc: "Governance-grounded answers with citation trails" },
      { icon: "trending-up", title: "CFO Variance Explanation", desc: "Explainable P&L and balance sheet analysis" },
      { icon: "receipt", title: "Procurement Intelligence", desc: "Spend analytics across vendor and cost data" },
    ],
    why: "Full data residency · Explainable outputs · Immutable audit trails",
  },
  {
    id: "mock2",
    num: "02",
    label: "Aerospace & Defense",
    badges: [
      { label: "CLASSIFIED", style: { background: "rgba(127,29,29,0.1)", color: "rgba(127,29,29,0.6)" } },
      { label: "ITAR" },
      { label: "FedRAMP High" },
    ],
    title: "Aerospace & Defense",
    subtitle: "Defense · Aviation · Space Systems",
    description:
      "Air-gapped deployment for classified environments. Mentis operates entirely within your secure enclave — zero external API dependencies, zero data egress.",
    bullets: [
      "Air-gapped deployments for classified environments",
      "Controlled agent execution with full auditability",
      "Long-horizon security for multi-decade programs",
    ],
    useCases: [
      { icon: "scroll-text", title: "Regulatory Intelligence", desc: "ITAR, defense regulation compliance" },
      { icon: "library", title: "Knowledge Consolidation", desc: "Unified intelligence across programs" },
      { icon: "radar", title: "Threat Intelligence", desc: "Classified & open-source synthesis" },
    ],
    why: "Zero external dependencies · Secure agent execution · Air-gapped by design",
  },
  {
    id: "mock3",
    num: "03",
    label: "Manufacturing & Industrial",
    badges: ["OT-Aligned", "On-Premise"],
    title: "Manufacturing",
    subtitle: "Industrial · Operations · Supply Chain",
    description:
      "Vast operational data — but insights are often delayed or manual. We transform raw production data into explainable, actionable intelligence.",
    bullets: [
      "Explainable operational performance with root-cause",
      "Analytics across production, supply chain, procurement",
      "Knowledge intelligence across SOPs and documentation",
    ],
    useCases: [
      { icon: "activity", title: "Operations Intelligence", desc: "Real-time OEE, throughput, downtime analysis" },
      { icon: "truck", title: "Supply Chain Analysis", desc: "End-to-end vendor and logistics visibility" },
      { icon: "clipboard-check", title: "SOP Compliance", desc: "Process documentation intelligence" },
    ],
    why: "Industrial data integration · OT-aligned · Explanation-first analytics",
  },
  {
    id: "mock4",
    num: "04",
    label: "Healthcare",
    badges: ["HIPAA", "GDPR", "ISO 27001"],
    title: "Healthcare",
    subtitle: "Hospitals · Clinical Networks · Health Systems",
    description:
      "Privacy-first architecture delivers clinical intelligence without exposing protected health information. HIPAA compliant by design, not by afterthought.",
    bullets: [
      "Secure knowledge across clinical and research docs",
      "Analytics without exposing protected health information",
      "Privacy-preserving cross-institution collaboration",
    ],
    useCases: [
      { icon: "clipboard-list", title: "Clinical Knowledge", desc: "Protocol, guideline, and regulation intelligence" },
      { icon: "flask-conical", title: "Research Synthesis", desc: "Accelerated literature review across journals" },
      { icon: "lock", title: "Secure Collaboration", desc: "Encrypted cross-institution analytics" },
    ],
    why: "Privacy-first architecture · Cryptographic data protection · Zero external exposure",
  },
  {
    id: "mock5",
    num: "05",
    label: "Pharma & Life Sciences",
    badges: ["FDA", "EMA", "GxP"],
    title: "Pharma & Life Sciences",
    subtitle: "Drug Discovery · R&D · Regulatory Affairs",
    description:
      "Long R&D cycles and complex regulatory pathways. We accelerate discovery while maintaining full IP protection and alignment with FDA, EMA, and global agencies.",
    bullets: [
      "Research synthesis across trials and literature",
      "Regulatory intelligence for global submissions",
      "IP-protected environments for proprietary data",
    ],
    useCases: [
      { icon: "search", title: "Drug Discovery Intelligence", desc: "Compound, target, mechanism synthesis" },
      { icon: "file-check-2", title: "Regulatory Submission", desc: "FDA/EMA with audit-ready outputs" },
      { icon: "book-open", title: "Literature & Patent Analysis", desc: "Prior art, competitive intelligence" },
    ],
    why: "Secure research environments · Regulatory compliance · IP protection",
  },
  {
    id: "mock6",
    num: "06",
    label: "Energy & Utilities",
    badges: ["NERC CIP", "SCADA", "OT Isolated"],
    title: "Energy & Utilities",
    subtitle: "Power Grid · Oil & Gas · Renewables",
    description:
      "Critical national infrastructure with strict security requirements. OT-compatible intelligence with zero external dependencies, designed for air-gapped operational environments.",
    bullets: [
      "OT/IT convergence with secure intelligence layers",
      "NERC, FERC, and environmental compliance",
      "Air-gapped deployment for critical infrastructure",
    ],
    useCases: [
      { icon: "gauge", title: "Grid Operations", desc: "Load balancing, fault detection, prediction" },
      { icon: "shield-check", title: "Safety Compliance", desc: "NERC CIP, environmental regulation" },
      { icon: "wrench", title: "Predictive Maintenance", desc: "Asset lifecycle optimization" },
    ],
    why: "Critical infrastructure security · OT-compatible · Zero external dependencies",
  },
  {
    id: "mock7",
    num: "07",
    label: "Government & Public Sector",
    badges: ["FedRAMP", "NIST 800-171", "CMMC"],
    title: "Government",
    subtitle: "Federal · State · Intelligence Community",
    description:
      "Sovereign AI for sovereign nations. Operates entirely within government-controlled infrastructure with full transparency and accountability for every output.",
    bullets: [
      "Operates within government-controlled infrastructure",
      "Full transparency and accountability for every output",
      "Policy, governance, and operational intelligence at scale",
    ],
    useCases: [
      { icon: "gavel", title: "Policy Intelligence", desc: "Regulations, executive orders, directives" },
      { icon: "network", title: "Inter-Agency Knowledge", desc: "Unified intelligence across departments" },
      { icon: "compass", title: "Strategic Analysis", desc: "Long-term planning and threat assessment" },
    ],
    why: "Sovereign deployment · Explainable outputs · Zero vendor lock-in",
  },
];
