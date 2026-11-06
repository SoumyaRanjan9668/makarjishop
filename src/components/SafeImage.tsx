"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { Hammer, Sparkles } from "lucide-react";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackTitle?: string;
  badgeText?: string;
}

export function SafeImage({
  src,
  alt,
  fallbackTitle = "MAKAR JI Handcrafted Iron Tool",
  className = "",
  fill,
  ...props
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-forest-deep p-6 text-center text-ivory border border-forest/40 relative overflow-hidden ${
          fill ? "absolute inset-0 h-full w-full" : ""
        } ${className}`}
        style={fill ? { position: "absolute" } : { minHeight: "220px" }}
      >
        {/* Subtle decorative forge texture */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#B96F50 1px, transparent 1px), radial-gradient(#DCE5DE 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 10px 10px",
          }}
        />

        <div className="relative z-10 mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-forest border border-terracotta/50 text-terracotta shadow-inner">
          <Hammer className="h-7 w-7 text-terracotta" />
        </div>

        <p className="relative z-10 font-serif text-sm sm:text-base font-bold tracking-wide text-ivory max-w-[90%] leading-snug">
          {fallbackTitle}
        </p>

        <span className="relative z-10 mt-1 text-[11px] font-medium uppercase tracking-wider text-sage">
          Hand-Forged Traditional Tool
        </span>

        <div className="relative z-10 mt-3 inline-flex items-center gap-1.5 rounded-full bg-forest px-3 py-1 text-[10px] uppercase tracking-wider text-terracotta border border-terracotta/30">
          <Sparkles className="h-3 w-3 text-terracotta" />
          <span>Workshop Photo Replaceable</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden ${
        fill ? "relative h-full w-full" : "relative"
      } ${className}`}
      style={{ position: "relative" }}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-forest-deep/10 animate-pulse z-1" />
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${fill ? "object-cover" : ""}`}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
}
