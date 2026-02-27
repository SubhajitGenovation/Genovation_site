"use client";

import WGHero from "@/components/why-genovation/WGHero";
import WGDeployment from "@/components/why-genovation/WGDeployment";
import WGSovereignty from "@/components/why-genovation/WGSovereignty";
import WGExplainability from "@/components/why-genovation/WGExplainability";
import WGControlCenter from "@/components/why-genovation/WGControlCenter";
import WGMentis from "@/components/why-genovation/WGMentis";
import WGCipherVault from "@/components/why-genovation/WGCipherVault";
import WGStack from "@/components/why-genovation/WGStack";
import WGIndustries from "@/components/why-genovation/WGIndustries";
import WGCTA from "@/components/why-genovation/WGCTA";
import WGFooter from "@/components/why-genovation/WGFooter";
import WGAnimations from "@/components/why-genovation/WGAnimations";

export default function WhyGenovationPage() {
  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        id="scrollProgress"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "2px",
          zIndex: 200,
          transformOrigin: "left center",
          background:
            "linear-gradient(90deg,#10b981,#06b6d4,#3b82f6,#8b5cf6)",
          width: "100%",
        }}
      />

      {/* Background Scroll Lines */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        {[
          {
            id: "sLine1",
            d: "M200 0 Q350 2000 200 4000 Q50 6000 200 8000 L200 10000",
            stroke: "rgba(16,185,129,0.06)",
          },
          {
            id: "sLine2",
            d: "M720 0 Q900 2500 720 5000 Q540 7500 720 10000",
            stroke: "rgba(6,182,212,0.05)",
          },
          {
            id: "sLine3",
            d: "M1240 0 Q1100 2000 1240 4000 Q1380 6000 1240 8000 L1240 10000",
            stroke: "rgba(59,130,246,0.04)",
          },
        ].map(({ id, d, stroke }) => (
          <div
            key={id}
            id={id}
            style={{ position: "absolute", inset: 0, width: "100%" }}
          >
            <svg
              viewBox="0 0 1440 10000"
              preserveAspectRatio="none"
              style={{ width: "100%", height: "100%" }}
            >
              <path
                d={d}
                fill="none"
                stroke={stroke}
                strokeWidth="1"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Page Sections */}
      <WGHero />
      <div className="divider-enhanced" />
      <WGDeployment />
      <div className="divider-enhanced" />
      <WGSovereignty />
      <div className="divider-enhanced" />
      <WGExplainability />
      <div className="divider-enhanced" />
      <WGControlCenter />
      <div className="divider-enhanced" />
      <WGMentis />
      <div className="divider-enhanced" />
      <WGCipherVault />
      <div className="divider-enhanced" />
      <WGStack />
      <div className="divider-enhanced" />
      {/* <WGIndustries /> */}
      <div className="divider-enhanced" />
      <WGCTA />
      {/* <WGFooter /> */}

      {/* GSAP — mounts last, after all DOM is ready */}
      <WGAnimations />
    </>
  );
}
