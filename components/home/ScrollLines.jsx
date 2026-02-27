"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollLines() {
    const containerRef = useRef(null);

    useGSAP(() => {
        // ✅ SAFE DOM CHECK - Fixes "body not found" error
        if (typeof document === 'undefined') return;
        
        const body = document.body;
        if (!body) return;

        // Kill existing ScrollTriggers first
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        // Animate lines
        gsap.to("#sLine1", {
            y: -200,
            ease: "none",
            scrollTrigger: {
                trigger: body,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.5,
            },
        });
        
        gsap.to("#sLine2", {
            y: -400,
            ease: "none",
            scrollTrigger: {
                trigger: body,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.8,
            },
        });
        
        gsap.to("#sLine3", {
            y: -100,
            ease: "none",
            scrollTrigger: {
                trigger: body,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.2,
            },
        });
    }, { scope: containerRef });

    return (
        <div className="scroll-lines-wrap" ref={containerRef} aria-hidden="true">
            <div className="scroll-line" id="sLine1">
                <svg viewBox="0 0 1440 10000" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="sl1" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                            <stop offset="8%" stopColor="#10b981" />
                            <stop offset="35%" stopColor="#06b6d4" />
                            <stop offset="60%" stopColor="#3b82f6" />
                            <stop offset="85%" stopColor="#10b981" />
                            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M180,0 C220,400 60,700 200,1200 C340,1700 80,2000 160,2600 C240,3200 40,3500 180,4100 C320,4700 60,5200 200,5800 C340,6400 100,6800 160,7500 C220,8200 60,8600 180,9200 L180,10000"
                        stroke="url(#sl1)"
                        strokeWidth="2"
                        strokeOpacity="0.15"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
            <div className="scroll-line" id="sLine2">
                <svg viewBox="0 0 1440 10000" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="sl2" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                            <stop offset="12%" stopColor="#06b6d4" />
                            <stop offset="45%" stopColor="#8b5cf6" />
                            <stop offset="80%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M1280,0 C1240,500 1380,900 1260,1500 C1140,2100 1360,2600 1300,3200 C1240,3800 1400,4200 1280,4800 C1160,5400 1380,5900 1300,6500 C1220,7100 1400,7600 1280,8200 L1280,10000"
                        stroke="url(#sl2)"
                        strokeWidth="1.5"
                        strokeOpacity="0.12"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
            <div className="scroll-line" id="sLine3">
                <svg viewBox="0 0 1440 10000" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="sl3" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                            <stop offset="15%" stopColor="#3b82f6" stopOpacity="0.6" />
                            <stop offset="45%" stopColor="#8b5cf6" stopOpacity="0.4" />
                            <stop offset="75%" stopColor="#10b981" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M720,0 C800,600 640,1200 750,1800 C860,2400 620,3000 700,3600 C780,4200 660,4800 740,5400 C820,6000 640,6600 720,7200 C800,7800 660,8400 720,9000 L720,10000"
                        stroke="url(#sl3)"
                        strokeWidth="1"
                        strokeOpacity="0.08"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
        </div>
    );
}
