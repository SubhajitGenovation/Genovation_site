import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Compass, ArrowRight as ArrowRightIcon, ArrowDown as ArrowDownIcon } from "lucide-react";
import Orb from "./Orb";
import Button from "../common/Button";
import Link from "next/link";

export default function Hero() {
    const badgeRef = useRef(null);
    const titleRef = useRef(null);
    const subRef = useRef(null);
    const ctasRef = useRef(null);
    const statsRef = useRef(null);

    useEffect(() => {
        const lines = titleRef.current.querySelectorAll(".hero-line");
        lines.forEach((line) => {
            const isGradient = line.classList.contains("text-gradient");
            const text = line.textContent;
            line.innerHTML = "";
            if (isGradient) line.classList.remove("text-gradient");
            text.split("").forEach((c) => {
                const span = document.createElement("span");
                span.className = "char" + (isGradient ? " text-gradient" : "");
                span.textContent = c === " " ? "\u00A0" : c;
                line.appendChild(span);
            });
        });

        const heroTL = gsap.timeline({ delay: 0.5 });
        heroTL
            // Removed badge animation
            .to(
                ".hero-line:first-child .char",
                { opacity: 1, y: 0, rotateX: 0, stagger: 0.02, duration: 1.2, ease: "power4.out" },
                "-=0.7"
            )
            .to(
                ".hero-line:last-child .char",
                { opacity: 1, y: 0, rotateX: 0, stagger: 0.02, duration: 1.2, ease: "power4.out" },
                "-=0.9"
            )
            .to(subRef.current.querySelector("p"), { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=0.8")
            .to(ctasRef.current, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.6")
            .to(statsRef.current, { opacity: 1, duration: 1, ease: "power2.out" }, "-=0.5")
            .to(statsRef.current.querySelectorAll(".r-up"), {
                opacity: 1,
                y: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: "power3.out"
            }, "-=0.8");
    }, []);

    return (
        <section className="relative min-h-screen flex items-center pt-40 pb-24 overflow-hidden" id="hero">
            <Orb className="w-[800px] h-[600px] bg-emerald-500/[0.05]" style={{ top: "0%", left: "-10%" }} />
            <Orb className="w-[500px] h-[400px] bg-violet-500/[0.04]" style={{ bottom: "5%", right: "0%" }} />
            <div className="relative max-w-6xl mx-auto px-8 w-full">
                <div className="max-w-4xl">
                    {/* Removed Badge section */}
                    
                    <h1 className="display-hero text-5xl md:text-6xl lg:text-[5.5rem] mb-10" ref={titleRef} id="heroTitle" style={{ perspective: "1200px" }}>
                        <span className="hero-line">We Don't Sell You AI.</span>
                        <br />
                        <span className="hero-line text-gradient">We Engineer Its Fit.</span>
                    </h1>
                    <div className="overflow-hidden mb-12" ref={subRef} id="heroSub">
                        <p className="text-lg md:text-xl text-gray-800 font-light leading-relaxed max-w-2xl translate-y-full">
                            Before a single agent is deployed, we map your organization — its processes, decision chains, data topology, and governance constraints — to architect an AI transformation that actually works.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-5 opacity-0" ref={ctasRef} id="heroCtas">
                        <Link href="/contact" passHref>
                            <Button className="px-8 py-4 rounded-2xl bg-[#1a1a2e] text-white" icon="arrow">
                                Book a Strategy Session
                            </Button>
                        </Link>
                        <Link href="#approach" passHref>
                            <Button variant="outline" className="text-gray-800 hover:text-emerald-600">
                                <ArrowDownIcon className="w-4 h-4 mr-2" />
                                See Our Approach
                            </Button>
                        </Link>
                    </div>
                </div>
                {/* stats section */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-10 mt-24 lg:mt-32 max-w-3xl lg:ml-auto opacity-0" ref={statsRef} id="heroStats">
                    {[
                        { val: "4–8", label: "Week assessments" },
                        { val: "100%", label: "Process-first approach" },
                        { val: "0", label: "Black-box decisions" }
                    ].map((stat, i) => (
                        <div key={stat.label} className="stat-block r-up group cursor-default">
                            <div className="stat-value text-4xl lg:text-5xl font-extralight text-gradient mb-3 tabular-nums">
                                {stat.val}
                            </div>
                            <div className="stat-label text-[10px] lg:text-[11px] font-mono uppercase tracking-[0.25em] text-gray-500 group-hover:text-emerald-600 transition-colors duration-500">
                                {stat.label}
                            </div>
                            <div className="h-px w-8 bg-emerald-500/20 mt-4 group-hover:w-16 transition-all duration-700"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}