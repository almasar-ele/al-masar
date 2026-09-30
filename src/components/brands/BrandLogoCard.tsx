"use client";

import { useState } from "react";
import Image from "next/image";
import type { Brand } from "@/data/brands";

interface BrandLogoCardProps {
  brand: Brand;
  isDuplicate?: boolean;
}

export default function BrandLogoCard({ brand, isDuplicate = false }: BrandLogoCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      aria-hidden={isDuplicate ? "true" : undefined}
      className="group flex h-20 w-36 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#101A2B] px-4 py-3 transition-all duration-300 hover:border-[#8A63E8]/40 hover:bg-[#142033] hover:shadow-lg hover:shadow-[#8A63E8]/10 sm:h-24 sm:w-48 sm:rounded-2xl sm:px-6 sm:py-4"
    >
      {brand.logo && !imageError ? (
        /* eslint-disable-next-html-element-suppression */
        <img
          src={brand.logo}
          alt={brand.name}
          width={160}
          height={56}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          style={{ width: "auto", height: "auto" }}
          className="h-auto w-auto max-h-11 max-w-[110px] shrink-0 object-contain grayscale brightness-200 opacity-75 transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100 sm:max-h-14 sm:max-w-[140px]"
          onError={() => setImageError(true)}
        />
      ) : null}
    </div>
  );
}
