"use client";

import { Phone } from "lucide-react";
import { BUSINESS_CONFIG, getPhoneCallUrl } from "@/config/business";

interface CallButtonProps {
  customText?: string;
  variant?: "primary" | "secondary" | "outline" | "compact";
  className?: string;
  showIcon?: boolean;
}

export function CallButton({
  customText = "Call Now",
  variant = "outline",
  className = "",
  showIcon = true,
}: CallButtonProps) {
  const phoneUrl = getPhoneCallUrl();

  const variantStyles = {
    primary:
      "bg-terracotta hover:bg-terracotta-hover text-white shadow-sm hover:shadow transition-all duration-200 border border-terracotta",
    secondary:
      "bg-forest hover:bg-forest-deep text-ivory shadow-sm hover:shadow transition-all duration-200 border border-forest",
    outline:
      "bg-transparent hover:bg-forest/5 text-forest border border-forest transition-all duration-200",
    compact:
      "bg-forest hover:bg-forest-deep text-ivory text-xs px-3 py-1.5 rounded transition-all duration-200",
  };

  return (
    <a
      href={phoneUrl}
      className={`inline-flex items-center justify-center gap-2 rounded-md font-medium text-sm transition-transform active:scale-[0.98] ${
        variant === "compact" ? "py-1.5 px-3" : "px-5 py-2.5"
      } ${variantStyles[variant]} ${className}`}
      aria-label={`Call MAKAR JI workshop at ${BUSINESS_CONFIG.phone}`}
    >
      {showIcon && (
        <Phone className={variant === "compact" ? "h-3.5 w-3.5" : "h-4 w-4"} />
      )}
      <span>{customText}</span>
    </a>
  );
}
