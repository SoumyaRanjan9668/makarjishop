"use client";

import Link from "next/link";
import { useState } from "react";
import { Hammer } from "lucide-react";

interface BrandLogoProps {
  variant?: "header" | "footer" | "hero" | "compact";
  className?: string;
  showTagline?: boolean;
}

export function BrandLogo({
  variant = "header",
  className = "",
  showTagline = true,
}: BrandLogoProps) {
  const [imgError, setImgError] = useState(false);

  const isFooter = variant === "footer";
  const isHero = variant === "hero";
  const isCompact = variant === "compact";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-95 focus:outline-none ${className}`}
      aria-label="MAKAR JI Workshop - Strong Work, Lasting Quality"
    >
      {/* Official Brand Logo Emblem */}
      <div
        className={`relative flex items-center justify-center shrink-0 ${
          isHero
            ? "h-16 sm:h-20 w-auto"
            : isFooter
            ? "h-14 sm:h-16 w-auto"
            : isCompact
            ? "h-10 w-auto"
            : "h-12 sm:h-14 w-auto"
        }`}
      >
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/images/makar-ji-logo.png"
            alt="Makar Ji Workshop"
            className="h-full w-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-forest border border-forest/20 text-terracotta">
            <Hammer className="h-6 w-6" />
          </div>
        )}
      </div>

      {/* Brand Name & Tagline */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-serif tracking-wider font-bold leading-none ${
            isFooter
              ? "text-2xl text-ivory"
              : isHero
              ? "text-3xl text-white tracking-widest"
              : "text-xl sm:text-2xl text-forest"
          }`}
        >
          MAKAR JI
        </span>
        {showTagline && (
          <span
            className={`text-[10px] tracking-widest uppercase font-medium mt-1 ${
              isFooter
                ? "text-sage/80"
                : isHero
                ? "text-sage"
                : "text-secondary-text"
            }`}
          >
            Workshop • Tools With Tradition
          </span>
        )}
      </div>
    </Link>
  );
}
