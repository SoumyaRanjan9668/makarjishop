import Link from "next/link";
import { MessageSquare, PackageCheck, PhoneCall, ArrowRight } from "lucide-react";
import { getWholesaleWhatsAppUrl, BUSINESS_CONFIG } from "@/config/business";

export function WholesaleSection() {
  return (
    <section className="py-16 sm:py-24 bg-forest text-ivory relative overflow-hidden">
      {/* Background Subtle Accent Pattern */}
      <div className="absolute right-0 bottom-0 opacity-10 translate-x-12 translate-y-12 pointer-events-none">
        <PackageCheck className="h-96 w-96 text-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-forest-deep rounded-2xl border border-terracotta/40 p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-terracotta/20 border border-terracotta/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-terracotta-light">
                Retailers • Distributors • Cooperatives
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Looking For Bulk Orders?
              </h2>

              <p className="text-base sm:text-lg text-sage/85 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Connect directly with us for product details, bulk supply availability,
                and wholesale quotes. We supply village-made hand-forged tools directly to
                hardware merchants and agricultural stores across regions.
              </p>

              {/* Wholesale Perks Checklist */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-sage">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                  <span>Direct Forge Rates</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                  <span>Custom Weight Specifications</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                  <span>Secure Regional Transport</span>
                </div>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <a
                href={getWholesaleWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-terracotta px-6 py-3.5 text-sm font-semibold text-white shadow hover:bg-terracotta-hover transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Request A Quote on WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-sage/40 bg-forest px-6 py-3.5 text-sm font-medium text-ivory hover:bg-forest-light transition-colors"
              >
                <span>View Contact Details</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="text-center pt-2">
                <a
                  href={`tel:${BUSINESS_CONFIG.phone.replace(/[^0-9+]/g, "")}`}
                  className="inline-flex items-center gap-1.5 text-xs text-sage/70 hover:text-white transition-colors"
                >
                  <PhoneCall className="h-3.5 w-3.5 text-terracotta" />
                  <span>Or call workshop: {BUSINESS_CONFIG.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
