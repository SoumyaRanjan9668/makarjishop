"use client";

import { MessageSquare } from "lucide-react";
import { BUSINESS_CONFIG, getWhatsAppUrl, getWholesaleWhatsAppUrl } from "@/config/business";
import { useState } from "react";

interface WhatsAppButtonProps {
  productName?: string;
  isWholesale?: boolean;
  customText?: string;
  variant?: "primary" | "secondary" | "outline" | "compact";
  className?: string;
  showIcon?: boolean;
}

export function WhatsAppButton({
  productName,
  isWholesale = false,
  customText,
  variant = "primary",
  className = "",
  showIcon = true,
}: WhatsAppButtonProps) {
  const [showNotice, setShowNotice] = useState(false);

  // Construct URL
  const whatsappUrl = isWholesale
    ? getWholesaleWhatsAppUrl()
    : getWhatsAppUrl(productName);

  // Base styling per variant
  const variantStyles = {
    primary:
      "bg-terracotta hover:bg-terracotta-hover text-white shadow-sm hover:shadow transition-all duration-200 border border-terracotta",
    secondary:
      "bg-forest hover:bg-forest-deep text-ivory shadow-sm hover:shadow transition-all duration-200 border border-forest",
    outline:
      "bg-transparent hover:bg-forest/5 text-forest border border-forest hover:border-forest transition-all duration-200",
    compact:
      "bg-terracotta hover:bg-terracotta-hover text-white text-xs px-3 py-1.5 rounded transition-all duration-200",
  };

  const defaultText = isWholesale
    ? "Wholesale Enquiry"
    : productName
    ? "Enquire on WhatsApp"
    : "Chat on WhatsApp";

  const buttonText = customText || defaultText;

  return (
    <div className="relative inline-block">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          // If using the placeholder number, inform user in developer console
          if (BUSINESS_CONFIG.whatsappNumber === "919876543210") {
            setShowNotice(true);
            setTimeout(() => setShowNotice(false), 4000);
          }
        }}
        className={`inline-flex items-center justify-center gap-2 rounded-md font-medium text-sm transition-transform active:scale-[0.98] cursor-pointer ${
          variant === "compact" ? "py-1.5 px-3" : "px-5 py-2.5"
        } ${variantStyles[variant]} ${className}`}
        aria-label={`WhatsApp Enquiry for ${productName || "MAKAR JI handmade tools"}`}
      >
        {showIcon && (
          <MessageSquare className={variant === "compact" ? "h-3.5 w-3.5" : "h-4 w-4"} />
        )}
        <span>{buttonText}</span>
      </a>

      {showNotice && (
        <div className="absolute left-1/2 -bottom-10 z-50 -translate-x-1/2 whitespace-nowrap rounded bg-forest-deep px-2.5 py-1 text-[11px] text-ivory shadow-lg border border-terracotta/40">
          Editable WhatsApp number configured in src/config/business.ts
        </div>
      )}
    </div>
  );
}
