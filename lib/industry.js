// lib/industry.js
import {
  HeartPulse,
  Factory,
  Shield,
  Landmark,
  Cpu,
  Truck,
  Zap,
  Plane,
  Rocket,
} from "lucide-react";

export const industryIcons = {
  Healthcare: HeartPulse,
  Manufacturing: Factory,
  Defense: Shield,
  "Financial Services": Landmark,
  Technology: Cpu,
  Logistics: Truck,
  Energy: Zap,
  Aviation: Plane,
  Aerospace: Rocket,
};

export const industryColors = {
  Healthcare: "#10b981",
  Manufacturing: "#f59e0b",
  Defense: "#6366f1",
  "Financial Services": "#3b82f6",
  Technology: "#8b5cf6",
  Logistics: "#06b6d4",
  Energy: "#ef4444",
  Aviation: "#0ea5e9",
  Aerospace: "#d946ef",
};

export const indClass = (industry) =>
  `ind-${industry.toLowerCase().replace(/\s+/g, "-")}`;