"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "./BrandLogo";
import { MobileNavigation } from "./MobileNavigation";
import { WhatsAppButton } from "./WhatsAppButton";
import { AnnouncementBar } from "./AnnouncementBar";

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About Us" },
    { href: "/our-craft", label: "Our Craft" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-ivory/95 backdrop-blur-md border-b border-forest/10 shadow-[0_2px_10px_rgba(18,55,47,0.03)]">
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Brand Logo */}
          <div className="shrink-0">
            <BrandLogo variant="header" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-150 py-1 border-b-2 ${
                    isActive
                      ? "border-terracotta text-forest font-semibold"
                      : "border-transparent text-main-text hover:text-forest hover:border-forest/30"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: WhatsApp CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <WhatsAppButton
              variant="primary"
              customText="Enquire on WhatsApp"
            />
          </div>

          {/* Mobile Drawer Menu Trigger */}
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
