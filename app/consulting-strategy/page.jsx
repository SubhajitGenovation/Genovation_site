"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollLines from "@/components/home/ScrollLines";
import Hero from "@/components/consulting-strategy/Hero";
import Interstitial from "@/components/consulting-strategy/Interstitial";
import Problem from "@/components/consulting-strategy/Problem";
import MethodologyOverview from "@/components/consulting-strategy/MethodologyOverview";
import Transformation from "@/components/consulting-strategy/Transformation";
import Methodology from "@/components/consulting-strategy/Methodology";
import Assessment from "@/components/consulting-strategy/Assessment";
import Deliverables from "@/components/consulting-strategy/Deliverables";
import AgentMap from "@/components/consulting-strategy/AgentMap";
import Outcomes from "@/components/consulting-strategy/Outcomes";
import WhoItIsFor from "@/components/consulting-strategy/WhoItIsFor";
import ContactCTA from "@/components/consulting-strategy/ContactCTA";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ConsultingStrategyPage() {
    useEffect(() => {
        // Scroll progress indicator
        gsap.to("#scrollProgress", {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 0.3,
            },
        });

        // Navigation visibility logic
        const navTl = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top -100",
                end: "top -200",
                scrub: 1,
            },
        });
        navTl.to("#mainNav", {
            autoAlpha: 0,
            y: -50,
            ease: "power1.out",
        });

        // Refresh ScrollTrigger to ensure correct positions after all components mount
        ScrollTrigger.refresh();
    }, []);

    return (
        <main className="bg-[#f5f3f0] text-[#1a1a2e] min-h-screen relative">
            {/* Background elements */}
            <div id="scrollProgress" className="fixed top-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 z-50 origin-left scale-x-0" />
            <ScrollLines />

            {/* Page Sections */}
            <Hero />

            <div className="divider-enhanced" />

            <MethodologyOverview />

            <Interstitial
                id="inter1"
                text="Most AI adoptions fail not because the technology is wrong — but because nobody mapped where it should go."
            />

            <div className="divider-enhanced" />

            <Problem />

            <div className="divider-enhanced" />

            <Transformation />

            <div className="divider-enhanced" />

            <Methodology />

            <div className="divider-enhanced" />

            <Assessment />

            <div className="divider-enhanced" />

            <Deliverables />

            <div className="divider-enhanced" />

            <AgentMap />

            <div className="divider-enhanced" />

            <Outcomes />

            <div className="divider-enhanced" />

            <WhoItIsFor />

            <ContactCTA />
        </main>
    );
}