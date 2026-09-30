"use client";

import type { LucideIcon } from "lucide-react";

interface SupplyFeatureCardProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function SupplyFeatureCard({
  number,
  title,
  description,
  icon: Icon,
}: SupplyFeatureCardProps) {
  return (
    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#101A2B] p-5 sm:rounded-2xl sm:p-6 shadow-xl shadow-black/20 transition-all duration-300 hover:border-[#8A63E8]/50 hover:bg-[#142033] hover:shadow-2xl hover:shadow-[#8A63E8]/15 hover:-translate-y-1 focus-within:border-[#8A63E8]/60 focus-within:ring-2 focus-within:ring-[#8A63E8]/40 outline-none">
      <div>
        {/* Icon & Number Header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-white/10 bg-[#07111F] text-[#6EA8FF] transition-all duration-300 group-hover:border-[#8A63E8]/40 group-hover:bg-[#8A63E8]/20 group-hover:text-white">
            <Icon className="h-5 w-5 stroke-[1.8] sm:h-6 sm:w-6" />
          </div>
          <span className="text-lg font-extrabold sm:text-xl bg-gradient-to-r from-[#6EA8FF] via-[#8A63E8] to-[#C45BCB] bg-clip-text text-transparent">
            {number}
          </span>
        </div>

        {/* Title Area with Consistent Min-Height */}
        <div className="mb-2.5 flex min-h-[44px] items-center sm:mb-3 sm:min-h-[56px]">
          <h3 className="text-base font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#6EA8FF] sm:text-xl">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-xs leading-relaxed text-[#AAB4C3] sm:text-sm">
          {description}
        </p>
      </div>

      {/* Subtle Bottom Accent Glow on Hover */}
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-[#8A63E8]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}
