"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Sub-components
import ExplainScrollSetup from "@/components/technology-foundation-explainability-traceability/Explainscrollsetup";
import ExplainNav from "@/components/technology-foundation-explainability-traceability/Explainnav";
import ExplainHero from "@/components/technology-foundation-explainability-traceability/ExplainHero";
import ExplainInterstitial from "@/components/technology-foundation-explainability-traceability/Explaininterstitial";
import ExplainProblem from "@/components/technology-foundation-explainability-traceability/Explainproblem";
import ExplainWhat from "@/components/technology-foundation-explainability-traceability/Explainwhat";
import ExplainTrace from "@/components/technology-foundation-explainability-traceability/Explaintrace";
import ExplainOversight from "@/components/technology-foundation-explainability-traceability/Explainoversight";
import ExplainInspector from "@/components/technology-foundation-explainability-traceability/ExplainInspector";
import ExplainUseCases from "@/components/technology-foundation-explainability-traceability/Explainusecases";
import ExplainWhy from "@/components/technology-foundation-explainability-traceability/ExplainWhy";
import ExplainFooter from "@/components/technology-foundation-explainability-traceability/ExplainFooter";

export default function ExplainabilityPage() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <div className="antialiased" style={{ background: "#f5f3f0", color: "#1a1a2e", overflowX: "hidden", WebkitFontSmoothing: "antialiased" }}>
      {/* Global scroll setup: progress bar + scroll lines + nav behavior + orb parallax */}
      <ExplainScrollSetup />

      {/* Navigation */}
      {/* <ExplainNav /> */}

      {/* Hero */}
      <ExplainHero />

      {/* Interstitial — pinned scroll text */}
      <ExplainInterstitial />

      <div className="divider-enhanced"></div>

      {/* Black-Box Problem vs Genovation */}
      <ExplainProblem />

      <div className="divider-enhanced"></div>

      {/* What Explainability Means: WHAT / WHY / HOW + Decision Lineage */}
      <ExplainWhat />

      <div className="divider-enhanced"></div>

      {/* Traceability Across the Entire Lifecycle */}
      <ExplainTrace />

      <div className="divider-enhanced"></div>

      {/* Real-Time Oversight & Enforcement */}
      <ExplainOversight />

      <div className="divider-enhanced"></div>

      {/* Trace Inspector Mock UI */}
      <ExplainInspector />

      <div className="divider-enhanced"></div>

      {/* Use Cases + Regulatory Alignment */}
      <ExplainUseCases />

      <div className="divider-enhanced"></div>

      {/* Why This Matters + CTA */}
      <ExplainWhy />

      {/* Footer */}
      {/* <ExplainFooter /> */}
    </div>
  );
}