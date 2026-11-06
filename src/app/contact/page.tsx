import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactFormClient } from "@/components/ContactFormClient";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CallButton } from "@/components/CallButton";
import { BUSINESS_CONFIG } from "@/config/business";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Wholesale Enquiries | MAKAR JI",
  description:
    "Get in touch with MAKAR JI for retail tool purchases, bulk wholesale supply, and custom blacksmithing orders. Direct workshop contact via WhatsApp and phone.",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="bg-ivory text-main-text">
        {/* Header Banner */}
        <section className="bg-forest-deep text-ivory py-16 sm:py-24 border-b border-forest text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-forest border border-terracotta/40 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-terracotta-light mb-3">
              Direct Manufacturer Connection
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Contact & Enquiries
            </h1>
            <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-sage/85 leading-relaxed">
              Connect directly with our village blacksmith workshop for single tool orders,
              bulk wholesale trade, or custom forge specifications.
            </p>
          </div>
        </section>

        {/* Contact Content Grid */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Workshop Information & Cards */}
              <div className="lg:col-span-6 space-y-8">
                <div>
                  <SectionHeading
                    badge="Direct Access"
                    title="Workshop Information"
                    description="We believe in transparent, straightforward communication. Reach out directly through any of the channels below."
                    align="left"
                  />
                </div>

                {/* Direct Action Quick Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <WhatsAppButton
                    variant="primary"
                    customText="Chat on WhatsApp"
                    className="w-full sm:w-auto justify-center"
                  />
                  <CallButton
                    variant="secondary"
                    customText={`Call ${BUSINESS_CONFIG.phone}`}
                    className="w-full sm:w-auto justify-center"
                  />
                </div>

                {/* Contact Cards List */}
                <div className="space-y-4">
                  {/* Address Card */}
                  <div className="rounded-lg border border-forest/15 bg-ivory-light p-5 flex items-start gap-4">
                    <div className="p-2.5 rounded-md bg-forest text-terracotta shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="text-sm">
                      <h4 className="font-serif font-bold text-forest mb-1">
                        Workshop Address
                      </h4>
                      <p className="text-secondary-text">
                        {BUSINESS_CONFIG.displayAddress}
                      </p>
                      <p className="text-xs text-terracotta mt-1 font-medium">
                        Village: {BUSINESS_CONFIG.villageDetails.village} • Tehsil: {BUSINESS_CONFIG.villageDetails.tehsilBlock} • {BUSINESS_CONFIG.villageDetails.district}, {BUSINESS_CONFIG.villageDetails.state}
                      </p>
                    </div>
                  </div>

                  {/* Phone & WhatsApp Card */}
                  <div className="rounded-lg border border-forest/15 bg-ivory-light p-5 flex items-start gap-4">
                    <div className="p-2.5 rounded-md bg-forest text-terracotta shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="text-sm">
                      <h4 className="font-serif font-bold text-forest mb-1">
                        Phone & WhatsApp
                      </h4>
                      <p className="text-secondary-text">
                        Mobile:{" "}
                        <a
                          href={`tel:${BUSINESS_CONFIG.phone.replace(/[^0-9+]/g, "")}`}
                          className="text-forest font-semibold hover:underline"
                        >
                          {BUSINESS_CONFIG.phone}
                        </a>
                      </p>
                      <p className="text-secondary-text">
                        WhatsApp:{" "}
                        <a
                          href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-forest font-semibold hover:underline"
                        >
                          +{BUSINESS_CONFIG.whatsappNumber}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Working Hours Card */}
                  <div className="rounded-lg border border-forest/15 bg-ivory-light p-5 flex items-start gap-4">
                    <div className="p-2.5 rounded-md bg-forest text-terracotta shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="text-sm">
                      <h4 className="font-serif font-bold text-forest mb-1">
                        Hearth & Response Hours
                      </h4>
                      <p className="text-secondary-text">
                        {BUSINESS_CONFIG.businessHours}
                      </p>
                      <p className="text-xs text-secondary-text mt-1">
                        Sunday: Closed for maintenance and hearth preparation
                      </p>
                    </div>
                  </div>

                  {/* Email Placeholder Card */}
                  <div className="rounded-lg border border-forest/15 bg-ivory-light p-5 flex items-start gap-4">
                    <div className="p-2.5 rounded-md bg-forest text-terracotta shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="text-sm">
                      <h4 className="font-serif font-bold text-forest mb-1">
                        Email Enquiry
                      </h4>
                      <p className="text-secondary-text">
                        {BUSINESS_CONFIG.email}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Google Maps Location Embed Card */}
                <div className="rounded-xl border border-forest/20 bg-ivory-light overflow-hidden shadow-sm">
                  <div className="p-4 border-b border-forest/10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-semibold text-forest">
                      <MapPin className="h-4 w-4 text-terracotta" />
                      <span>Workshop Location on Google Maps</span>
                    </div>
                    <a
                      href={BUSINESS_CONFIG.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-terracotta hover:underline"
                    >
                      <span>Open in Google Maps ↗</span>
                    </a>
                  </div>

                  {/* Real Interactive Google Maps Iframe */}
                  <div className="relative w-full aspect-video sm:aspect-4/3 bg-forest-deep overflow-hidden">
                    <iframe
                      src={BUSINESS_CONFIG.googleMapsEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title="MAKAR JI Workshop Location"
                      className="w-full h-full min-h-[300px]"
                    />
                  </div>

                  <div className="p-3.5 bg-forest-deep text-ivory flex items-center justify-between text-xs">
                    <span className="text-sage">
                      {BUSINESS_CONFIG.displayAddress}
                    </span>
                    <a
                      href={BUSINESS_CONFIG.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded bg-forest text-[11px] font-medium text-ivory border border-sage/30 hover:border-terracotta hover:text-terracotta transition-colors whitespace-nowrap ml-2"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Direct Message / Enquiry Form */}
              <div className="lg:col-span-6 sticky top-28">
                <ContactFormClient />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
