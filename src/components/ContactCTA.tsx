import { MessageSquare, PhoneCall, Hammer } from "lucide-react";
import { BUSINESS_CONFIG, getWhatsAppUrl, getPhoneCallUrl } from "@/config/business";

export function ContactCTA() {
  return (
    <section className="py-20 sm:py-24 bg-forest-deep text-ivory relative overflow-hidden border-t border-forest">
      {/* Background Subtle Forge Texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(var(--color-terracotta)_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-terracotta/40 bg-forest px-3.5 py-1.5 text-xs font-semibold tracking-wider text-sage uppercase">
          <Hammer className="h-3.5 w-3.5 text-terracotta" />
          Direct Workshop Contact
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Have A Product Enquiry?
        </h2>

        <p className="text-base sm:text-lg text-sage/85 max-w-2xl mx-auto leading-relaxed">
          Whether you need a single handcrafted axe for your farm or a regular bulk
          consignment of agricultural tools for your store, connect directly with our
          workshop.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-md bg-terracotta px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-terracotta-hover transition-all duration-200"
          >
            <MessageSquare className="h-5 w-5" />
            <span>WhatsApp Us Now</span>
          </a>

          <a
            href={getPhoneCallUrl()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-md border border-sage/40 bg-forest px-8 py-3.5 text-base font-semibold text-ivory hover:bg-forest-light hover:border-sage transition-all duration-200"
          >
            <PhoneCall className="h-5 w-5 text-terracotta" />
            <span>Call {BUSINESS_CONFIG.phone}</span>
          </a>
        </div>

        <p className="text-xs text-sage/60 pt-2">
          Workshop response hours: {BUSINESS_CONFIG.businessHours}
        </p>
      </div>
    </section>
  );
}
