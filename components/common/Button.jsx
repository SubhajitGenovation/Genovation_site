"use client";

import { ArrowRight, BookOpen, FileText, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Button({ variant = "primary", className, children, icon, onClick, ...props }) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "group relative px-6 py-2.5 rounded-full text-[15px] font-light inline-flex items-center justify-center gap-2.5 transition-all duration-400 whitespace-nowrap",
                variant === "primary"
                    ? "bg-gradient-to-r from-[#10b981] via-[#06b6d4] to-[#10b981] bg-[length:200%_100%] text-black shadow-[0_0_30px_-5px_rgba(16,185,129,0.2),0_0_60px_-15px_rgba(6,182,212,0.15)] hover:bg-[position:100%_0] hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.25),0_0_80px_-15px_rgba(6,182,212,0.15),0_8px_30px_-10px_rgba(0,0,0,0.1)] hover:translate-y-[-2px]"
                    : "bg-black/[0.05] border border-[rgba(0,0,0,0.12)] text-gray-700 hover:border-[rgba(52,211,153,0.25)] hover:text-gray-900 hover:bg-black/[0.05] backdrop-blur-sm",
                className
            )}
            {...props}
        >
            {children}
            {icon && (
                <span className="flex items-center justify-center">
                    {icon === "arrow" && <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />}
                    {icon === "play" && <PlayCircle className="w-4 h-4 text-[#10b981] group-hover:text-[#10b981]/90 transition-colors" />}
                    {icon === "book" && <BookOpen className="w-4 h-4" />}
                    {icon === "file" && <FileText className="w-4 h-4" />}
                </span>
            )}
        </button>
    );
}