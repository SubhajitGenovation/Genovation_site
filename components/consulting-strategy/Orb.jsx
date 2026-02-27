"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export default function Orb({ className, style }) {
    const orbRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(orbRef.current, {
                yPercent: 15,
                xPercent: 10,
                duration: 5 + Math.random() * 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }, orbRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={orbRef}
            className={cn("orb absolute rounded-full blur-[100px] pointer-events-none will-change-transform", className)}
            style={style}
        />
    );
}
