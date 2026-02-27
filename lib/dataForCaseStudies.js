export const caseStudies = [
  {
    id: 1,
    industry: "Healthcare",
    title: "AEGIS Diagnostic Assistant",
    client: "Memorial Health System",
    location: "Chicago, IL",
    duration: "14 months",
    technologies: ["Computer Vision", "NLP", "AWS"],
    compliance: ["HIPAA", "GDPR"],
    featured: true,
    problem:
      "Radiologists faced 40% increase in workload with 12% miss rate on early-stage nodules.",
    solution: "AEGIS deployed a multimodal AI that triages scans and highlights anomalies.",
    impact: {
      diagnosisAccuracy: "+28%",
      efficiency: "+32%",
      downtime: "-67%",
      complianceScore: "99.9%",
    },
    detailedContent: {
      executiveSummary:
        "Memorial Health System integrated AEGIS to support radiologists, reducing burnout and improving patient outcomes.",
      challenge:
        "With a surge in imaging volumes, radiologists experienced high burnout and a 12% miss rate on early-stage lung nodules.",
      methodology:
        "We trained AEGIS on 2M+ anonymized scans and integrated it into the PACS workflow as a second reader.",
      implementation: [
        { phase: "Data Acquisition", duration: "3 months", description: "Gathered and annotated 2.1M medical images." },
        { phase: "Model Training", duration: "4 months", description: "Trained ensemble of CNNs and vision transformers." },
        { phase: "Clinical Validation", duration: "3 months", description: "Prospective study with 15 radiologists." },
        { phase: "Go Live", duration: "2 months", description: "Rolled out to three hospitals with live monitoring." },
      ],
      keyFeatures: [
        "Real‑time triage of urgent cases",
        "Heatmap overlay on suspicious regions",
        "Automated report draft generation",
      ],
      results: {
        beforeAfter: {
          diagnosis: { before: "12% miss rate", after: "3% miss rate" },
          turnaround: { before: "24h avg", after: "4h avg" },
        },
        businessImpact: [
          "Reduced radiologist overtime by 40%",
          "Increased early‑stage cancer detection by 28%",
          "Saved $2.3M in malpractice reserves",
        ],
      },
      testimonial: {
        quote:
          "AEGIS is like having a tireless partner. It catches things I might miss and gives me confidence.",
        author: "Dr. Sarah Chen",
        title: "Chief of Radiology",
        company: "Memorial Health System",
      },
      nextSteps: "Expand to emergency department triage and multi‑modal data (labs + notes).",
    },
  },
  {
    id: 2,
    industry: "Manufacturing",
    title: "360° Manufacturing Data Integration",
    client: "Global Steel Manufacturing Corp.",
    location: "Pittsburgh, USA",
    duration: "14 weeks",
    technologies: ["Data Integration", "Real-time Analytics"],
    compliance: ["ISO 9001"],
    featured: false,
    problem:
      "Disparate sensor data, logs, and systems creating operational blind spots and 23% production inefficiencies.",
    solution: "Unified data fabric with real‑time anomaly detection.",
    impact: {
      efficiency: "31% increase",
      downtime: "67% reduction",
      dataAccuracy: "94% improvement",
      costSavings: "$3.2M annually",
    },
    detailedContent: {
      executiveSummary:
        "Global Steel deployed our integration platform to consolidate IIoT data across 12 plants.",
      challenge: "Siloed systems prevented holistic view, causing 23% efficiency loss.",
      methodology: "Implemented edge connectors and a central data lake with streaming analytics.",
      implementation: [
        { phase: "Assessment", duration: "3 weeks", description: "Audited 200+ data sources." },
        { phase: "Integration", duration: "8 weeks", description: "Deployed 45 edge connectors." },
        { phase: "Optimization", duration: "3 weeks", description: "Tuned anomaly detection models." },
      ],
      keyFeatures: [
        "Real‑time OEE dashboards",
        "Predictive maintenance alerts",
        "Automated root‑cause analysis",
      ],
      results: {
        beforeAfter: {
          efficiency: { before: "65% OEE", after: "85% OEE" },
          downtime: { before: "18%", after: "6%" },
        },
        businessImpact: [
          "Increased throughput by 31%",
          "Reduced unplanned downtime by 67%",
          "Saved $3.2M in energy and scrap costs",
        ],
      },
      testimonial: {
        quote:
          "We now see the entire production line in real time – it’s transformed our maintenance strategy.",
        author: "Mark Reynolds",
        title: "VP of Operations",
        company: "Global Steel",
      },
      nextSteps: "Expand to supply chain integration.",
    },
  },
  {
    id: 3,
    industry: "Healthcare",
    title: "HIPAA‑Compliant Medical Analytics",
    client: "Regional Healthcare Network",
    location: "Boston, USA",
    duration: "10 weeks",
    technologies: ["Privacy‑Preserving AI", "Audit Systems"],
    compliance: ["HIPAA", "HITRUST"],
    featured: false,
    problem:
      "Complex patient data across systems hindering clinical decision-making while maintaining strict HIPAA compliance.",
    solution: "Federated learning platform with automated audit trails.",
    impact: {
      diagnosisAccuracy: "28% improvement",
      complianceScore: "100% HIPAA",
      processingTime: "45% faster",
      riskReduction: "89% data breach risk",
    },
    detailedContent: {
      executiveSummary: "Regional Healthcare Network unified 7 hospitals' data without moving PHI.",
      challenge: "Clinicians waited days for cross‑facility patient insights; audits were manual.",
      methodology: "Deployed federated queries and differential privacy on existing databases.",
      implementation: [
        { phase: "Gap Analysis", duration: "2 weeks", description: "Mapped data sources and policies." },
        { phase: "Federated Setup", duration: "4 weeks", description: "Installed secure query engines." },
        { phase: "Pilot", duration: "4 weeks", description: "Tested with 50 clinicians." },
      ],
      keyFeatures: [
        "Cross‑facility patient timeline",
        "Automated HIPAA audit logs",
        "Differential privacy for research queries",
      ],
      results: {
        beforeAfter: {
          queryTime: { before: "3 days", after: "2 hours" },
          auditPrep: { before: "80 person‑hours", after: "automated" },
        },
        businessImpact: [
          "Reduced clinical decision time by 45%",
          "Achieved 100% audit compliance",
          "Prevented potential breaches (estimated $4.2M saved)",
        ],
      },
      testimonial: {
        quote:
          "We can now answer population health questions in hours, not weeks – securely.",
        author: "Dr. Emily Park",
        title: "CMIO",
        company: "Regional Healthcare Network",
      },
      nextSteps: "Integrate genomic data for precision medicine.",
    },
  },
  {
    id: 4,
    industry: "Healthcare",
    title: "Clinical Trial Data Management & Analysis",
    client: "PharmaCorp R&D",
    location: "San Francisco, USA",
    duration: "16 weeks",
    technologies: ["Data Integration", "FDA Compliance", "Blockchain"],
    compliance: ["FDA 21 CFR Part 11", "GDPR"],
    featured: false,
    problem:
      "Clinical trial data scattered across multiple systems, FDA compliance challenges, and delayed submissions.",
    solution: "Unified trial data platform with immutable audit trails.",
    impact: {
      dataIntegration: "95% unified access",
      complianceTime: "68% faster FDA submissions",
      dataAccuracy: "99.9%",
      patientRecruitment: "+22%",
    },
    detailedContent: {
      executiveSummary: "PharmaCorp accelerated trial timelines by consolidating 15 legacy systems.",
      challenge: "Disparate EDC, lab, and imaging systems caused 6‑month delays in FDA filing.",
      methodology: "Built a data lake with FHIR APIs and smart contracts for consent tracking.",
      implementation: [
        { phase: "Data Mapping", duration: "5 weeks", description: "Harmonized 200+ data elements." },
        { phase: "Platform Build", duration: "8 weeks", description: "Deployed scalable data lake." },
        { phase: "Validation", duration: "3 weeks", description: "FDA mock inspection passed." },
      ],
      keyFeatures: [
        "Real‑time trial dashboard",
        "Automated SDTM conversion",
        "Blockchain‑based consent management",
      ],
      results: {
        beforeAfter: {
          submissionPrep: { before: "8 months", after: "2.5 months" },
          dataErrors: { before: "12%", after: "0.5%" },
        },
        businessImpact: [
          "Reduced FDA submission time by 68%",
          "Increased patient diversity by 22%",
          "Saved $5.7M in rework costs",
        ],
      },
      testimonial: {
        quote:
          "We brought a drug to market 4 months faster thanks to seamless data integration.",
        author: "Dr. Robert Lee",
        title: "Head of Clinical Operations",
        company: "PharmaCorp",
      },
      nextSteps: "Expand to real‑world evidence studies.",
    },
  },
  {
    id: 5,
    industry: "Defense",
    title: "Secure Data Analytics for Mission Planning",
    client: "Department of Defense",
    location: "Washington, D.C.",
    duration: "18 months",
    technologies: ["Secure Enclaves", "ML Ops", "Zero Trust"],
    compliance: ["IL5", "FedRAMP High"],
    featured: false,
    problem:
      "Critical mission data locked in silos with strict security requirements preventing comprehensive analysis.",
    solution: "Air‑gapped analytics platform with cross‑domain federation.",
    impact: {
      decisionSpeed: "52% faster",
      threatDetection: "+37%",
      missionReadiness: "99.7%",
      costReduction: "$12M",
    },
    detailedContent: {
      executiveSummary: "Enabled secure cross‑agency intel sharing without compromising classification.",
      challenge: "Analysts manually correlated data from 9 different secure enclaves.",
      methodology: "Deployed federated learning nodes in each enclave with homomorphic encryption.",
      implementation: [
        { phase: "Classification", duration: "3 months", description: "Mapped data sensitivity levels." },
        { phase: "Node Deployment", duration: "9 months", description: "Installed 12 hardened nodes." },
        { phase: "Testing", duration: "6 months", description: "Red‑team validation." },
      ],
      keyFeatures: [
        "Cross‑domain queries without data movement",
        "Real‑time threat correlation",
        "Automated compliance reporting",
      ],
      results: {
        beforeAfter: {
          intelCorrelation: { before: "4 hours", after: "15 minutes" },
          falseAlerts: { before: "200/day", after: "45/day" },
        },
        businessImpact: [
          "Reduced decision latency by 52%",
          "Saved $12M in redundant analysis tools",
          "Achieved 99.7% mission readiness",
        ],
      },
      testimonial: {
        quote:
          "We finally have a unified operational picture without compromising security.",
        author: "Gen. Michael Torres (ret.)",
        title: "Program Director",
        company: "DoD",
      },
      nextSteps: "Expand to coalition partners.",
    },
  },
  {
    id: 6,
    industry: "Aerospace",
    title: "Spacecraft Mission Control Analytics",
    client: "Sasa Agency",
    location: "Houston, USA",
    duration: "25 weeks",
    technologies: ["Anomaly Detection", "Predictive Analytics"],
    compliance: ["NASA-STD-8719.13"],
    featured: false,
    problem:
      "Manual spacecraft system monitoring requiring 24/7 human oversight, 6-hour response time for anomalies, and limited predictive capabilities.",
    solution: "Autonomous AI co‑pilot for telemetry analysis.",
    impact: {
      anomalyDetection: "97% predictive accuracy",
      responseTime: "92% faster alerts",
      autonomousOps: "78% automated decisions",
      missionSuccess: "99.7% reliability",
    },
    detailedContent: {
      executiveSummary: "Reduced flight controller workload by automating 78% of routine checks.",
      challenge: "Controllers manually reviewed 50,000+ telemetry channels per mission.",
      methodology: "Trained LSTM models on 15 years of mission data; integrated into ground systems.",
      implementation: [
        { phase: "Data Ingestion", duration: "8 weeks", description: "Processed 5PB of telemetry." },
        { phase: "Model Dev", duration: "12 weeks", description: "Developed 15 anomaly models." },
        { phase: "Deployment", duration: "5 weeks", description: "Installed in mission control." },
      ],
      keyFeatures: [
        "Real‑time telemetry triage",
        "Predictive component failure alerts",
        "Automated procedure recommendations",
      ],
      results: {
        beforeAfter: {
          anomalyResponse: { before: "6 hours", after: "30 minutes" },
          manualChecks: { before: "100%", after: "22%" },
        },
        businessImpact: [
          "Reduced anomaly response time by 92%",
          "Increased mission reliability to 99.7%",
          "Saved $8M in extended mission costs",
        ],
      },
      testimonial: {
        quote:
          "The system catches subtle drifts hours before they become critical – it's like having a sixth sense.",
        author: "Dr. Alan Voss",
        title: "Flight Director",
        company: "Sasa Agency",
      },
      nextSteps: "Extend to deep‑space missions with longer communication delays.",
    },
  },
];