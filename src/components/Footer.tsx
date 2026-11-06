import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { BUSINESS_CONFIG } from "@/config/business";
import { CATEGORIES } from "@/data/products";
import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-deep text-ivory border-t border-forest mt-auto">
      {/* Upper Footer: Brand statement & direct manufacturer trust banner */}
      <div className="border-b border-forest/60 py-10 bg-forest-deep/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="h-10 w-10 rounded-full bg-forest flex items-center justify-center text-terracotta border border-terracotta/30">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold tracking-wide text-white">
                  100% Village Blacksmith Forged
                </h4>
                <p className="text-xs text-sage/70">
                  Every tool shaped by hand on the anvil
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="h-10 w-10 rounded-full bg-forest flex items-center justify-center text-terracotta border border-terracotta/30">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold tracking-wide text-white">
                  Direct From Village Workshop
                </h4>
                <p className="text-xs text-sage/70">
                  No middlemen markup, genuine craft prices
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="h-10 w-10 rounded-full bg-forest flex items-center justify-center text-terracotta border border-terracotta/30">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold tracking-wide text-white">
                  Direct WhatsApp Enquiry
                </h4>
                <p className="text-xs text-sage/70">
                  Quick response for single or wholesale batches
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1 & 2: Brand Story */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="footer" />
            <p className="text-sm text-sage/80 leading-relaxed max-w-sm mt-3">
              {BUSINESS_CONFIG.name} is a traditional Indian blacksmith manufacturing workshop.
              We hand-forge high-carbon iron tools for farmers, woodworkers, rural households,
              and wholesale suppliers across India.
            </p>
            <p className="text-xs text-terracotta font-medium tracking-wider uppercase">
              {BUSINESS_CONFIG.tagline}
            </p>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h3 className="font-serif text-base font-semibold text-white tracking-wider mb-4 border-b border-forest pb-2">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-sage/80">
              <li>
                <Link href="/" className="hover:text-terracotta transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-terracotta transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-terracotta transition-colors">
                  About Our Forge
                </Link>
              </li>
              <li>
                <Link href="/our-craft" className="hover:text-terracotta transition-colors">
                  Our Handcrafting Process
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-terracotta transition-colors">
                  Wholesale & Retail Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Product Categories */}
          <div>
            <h3 className="font-serif text-base font-semibold text-white tracking-wider mb-4 border-b border-forest pb-2">
              Categories
            </h3>
            <ul className="space-y-2 text-sm text-sage/80">
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/products?category=${encodeURIComponent(cat)}`}
                    className="hover:text-terracotta transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Workshop Contact Information */}
          <div>
            <h3 className="font-serif text-base font-semibold text-white tracking-wider mb-4 border-b border-forest pb-2">
              Workshop Contact
            </h3>
            <ul className="space-y-3 text-xs text-sage/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-terracotta shrink-0 mt-0.5" />
                <a
                  href={BUSINESS_CONFIG.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-terracotta transition-colors group/loc"
                >
                  <span>{BUSINESS_CONFIG.displayAddress}</span>
                  <span className="block text-[11px] text-secondary-text group-hover/loc:text-terracotta">
                    (Village Workshop • View on Google Maps ↗)
                  </span>
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-terracotta shrink-0" />
                <a
                  href={`tel:${BUSINESS_CONFIG.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-terracotta transition-colors"
                >
                  {BUSINESS_CONFIG.phone}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <MessageSquare className="h-4 w-4 text-terracotta shrink-0" />
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-terracotta transition-colors"
                >
                  WhatsApp: +{BUSINESS_CONFIG.whatsappNumber}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-terracotta shrink-0" />
                <span className="truncate">{BUSINESS_CONFIG.email}</span>
              </li>

              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-terracotta shrink-0" />
                <span>{BUSINESS_CONFIG.businessHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-forest flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-secondary-text">
          <p>
            © {currentYear} {BUSINESS_CONFIG.name}. All rights reserved. Handcrafted in India.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Traditional Indian Village Craftsmanship</span>
            <span>•</span>
            <span>Direct Manufacturer Connection</span>
            <span>•</span>
            <span>Honest Rural Manufacturing</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
