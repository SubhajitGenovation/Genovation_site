"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming utils exists, or I will use clsx/tailwind-merge directly if not

// If lib/utils doesn't exist, I'll fallback to a simple join or just template literals
// Checking package.json, clsx and tailwind-merge are installed. 
// I'll stick to simple strings + template literals if uncertain about alias.
// Actually, I'll verify first. for now, I'll use a direct implementation.

const TalkToSales = ({
    className,
    variant = "primary", // primary, outline, ghost
    size = "default", // default, sm, lg
    onClick,
    href = "/talk-to-sales",
    children = "Talk to Sales"
}) => {

    const variants = {
        primary: "bg-emerald-700 text-white border border-transparent hover:bg-emerald-800",
        outline: "bg-transparent text-emerald-700 border border-emerald-700/20 hover:bg-emerald-50",
        ghost: "bg-transparent text-gray-600 hover:text-emerald-700 hover:bg-emerald-50/50",
    };

    const sizes = {
        default: "px-6 py-2.5 text-xs",
        sm: "px-4 py-2 text-[11px]",
        lg: "px-8 py-3 text-sm",
    };

    const Component = href ? Link : motion.button;
    const props = href ? { href } : { onClick };

    return (
        <Component
            {...props}
            className={`
        relative inline-flex items-center justify-center gap-2
        rounded-full font-medium tracking-widest uppercase transition-colors
        ${variants[variant]}
        ${sizes[size]}
        ${className || ""}
      `}
        // Motion props need to be applied to a motion component. 
        // If Link, we need to wrap it or use motion.create(Link). 
        // For simplicity and to ensure animation works on Link, I'll use a wrapper or just className transitions for color, 
        // and motion for scale/entry.
        // Actually motion.create(Link) is better.
        >
            <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center gap-2"
            >
                {children}
            </motion.span>
        </Component>
    );
};

// Re-implementing with motion.create(Link) to support motion props on Link
const MotionLink = motion.create(Link);

export default function TalkToSalesComponent({
    className,
    variant = "primary",
    size = "default",
    href = "/talk-to-sales",
    children = "Talk to Sales",
    ...props
}) {
    const baseStyles = "relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-widest uppercase cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2";

    const variants = {
        primary: "bg-emerald-700 text-white border border-transparent shadow-sm shadow-emerald-900/10 hover:shadow-md hover:shadow-emerald-900/20",
        outline: "bg-transparent text-emerald-700 border border-emerald-700/20 hover:border-emerald-700/40 hover:bg-emerald-50",
        ghost: "bg-transparent text-gray-600 hover:text-emerald-700 hover:bg-emerald-50/50",
    };

    const sizes = {
        default: "px-6 py-2.5 text-xs",
        sm: "px-4 py-2 text-[11px]",
        lg: "px-8 py-3 text-sm",
    };

    return (
        <MotionLink
            href={href}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ""}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{
                opacity: { duration: 0.6, ease: "easeOut" },
                y: { duration: 0.6, ease: "easeOut" },
                scale: { duration: 0.2 },
                layout: { duration: 0.3 }
            }}
            {...props}
        >
            {children}
        </MotionLink>
    );
}
