"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu, Phone, MessageSquare, MapPin } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { BUSINESS_CONFIG, getWhatsAppUrl } from "@/config/business";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Prevent background scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About Us" },
    { href: "/our-craft", label: "Our Craft" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="lg:hidden">
      {/* Mobile Hamburger Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-md border border-forest/20 text-forest hover:bg-forest/5 transition-colors focus:outline-none cursor-pointer"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-forest-deep/70 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-over Drawer Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-ivory shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out border-l border-forest/10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div>
          <div className="flex items-center justify-between p-5 border-b border-forest/10">
            <BrandLogo variant="compact" showTagline={false} />
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-md text-main-text hover:bg-forest/10 transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="p-5 flex flex-col gap-2">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "bg-forest text-ivory"
                      : "text-main-text hover:bg-sage/50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-5 border-t border-forest/10 bg-ivory-light space-y-3">
          <div className="text-xs text-secondary-text space-y-1 mb-2">
            <div className="flex items-center gap-1.5 font-medium text-main-text">
              <MapPin className="h-3.5 w-3.5 text-terracotta" />
              <span>Village Forge Direct</span>
            </div>
            <p className="text-[11px] text-secondary-text">
              {BUSINESS_CONFIG.displayAddress}
            </p>
          </div>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-terracotta hover:bg-terracotta-hover text-white rounded-md font-medium text-sm transition-colors shadow-sm"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Enquire on WhatsApp</span>
          </a>

          <a
            href={`tel:${BUSINESS_CONFIG.phone.replace(/[^0-9+]/g, "")}`}
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 border border-forest text-forest hover:bg-forest/5 rounded-md font-medium text-sm transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>Call Workshop</span>
          </a>
        </div>
      </div>
    </div>
  );
}
