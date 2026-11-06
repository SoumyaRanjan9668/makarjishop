import Link from "next/link";
import { ArrowRight, Hammer, Flame, Shield, MessageSquare } from "lucide-react";
import { SafeImage } from "./SafeImage";
import { getWhatsAppUrl } from "@/config/business";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-forest-deep text-ivory border-b border-forest">
      {/* Background Subtle Forge Glow & Texture */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(var(--color-terracotta)_1px,transparent_1px)] bg-size-[32px_32px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Craftsman Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-terracotta/40 bg-forest/80 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-sage uppercase">
              <span className="flex h-2 w-2 rounded-full bg-terracotta animate-pulse" />
              Traditional Indian Craftsmanship
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Strength Forged <br />
              <span className="text-terracotta italic font-serif">By Tradition.</span>
            </h1>

            {/* Description */}
            <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-sage/85 leading-relaxed font-sans">
              Discover traditionally handcrafted iron tools made with skill, dedication
              and generations of village blacksmith craftsmanship. Forged individually
              by hand on the anvil for unmatched strength and durability.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-terracotta px-7 py-3.5 text-sm sm:text-base font-medium text-white shadow-lg hover:bg-terracotta-hover transition-all duration-200 border border-terracotta"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={getWhatsAppUrl(undefined, "I would like to speak directly with the manufacturer regarding tool specifications and bulk orders.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md border border-sage/40 bg-forest/70 px-6 py-3.5 text-sm sm:text-base font-medium text-ivory hover:bg-forest hover:border-sage transition-all duration-200"
              >
                <MessageSquare className="h-4 w-4 text-terracotta" />
                <span>Talk to Manufacturer</span>
              </a>
            </div>

            {/* Trust Highlights Strip */}
            <div className="pt-6 border-t border-forest grid grid-cols-3 gap-4 text-left">
              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 text-terracotta">
                  <Flame className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Hearth Forged</h4>
                  <p className="text-[11px] text-sage/70">Coal forge heated</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 text-terracotta">
                  <Hammer className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Anvil Beaten</h4>
                  <p className="text-[11px] text-sage/70">Individually shaped</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 text-terracotta">
                  <Shield className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Village Direct</h4>
                  <p className="text-[11px] text-sage/70">Zero middlemen</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Editorial Workshop / Tool Photograph */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative framing border */}
              <div className="absolute -inset-2 rounded-lg border border-terracotta/30 -rotate-1 hidden sm:block pointer-events-none" />

              {/* Main Photo Card */}
              <div className="relative rounded-lg overflow-hidden border border-sage/20 shadow-2xl bg-forest">
                <div className="relative aspect-4/5 w-full">
                  <SafeImage
                    src="/images/hero/hero-blacksmith.jpg"
                    alt="Authentic traditional Indian village blacksmith shaping glowing red-hot iron on anvil"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    fallbackTitle="Traditional Blacksmith at the Village Anvil"
                  />
                  {/* Subtle dark gradient overlay at bottom for badge contrast */}
                  <div className="absolute inset-0 bg-linear-to-t from-forest-deep via-transparent to-transparent opacity-70" />

                  {/* Corner Badge on Hero Image */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-md border border-ivory/15 bg-forest-deep/90 backdrop-blur-md p-3.5">
                    <p className="font-serif text-sm font-semibold text-white">
                      Forging Tools for Indian Soil & Wood
                    </p>
                    <p className="text-[11px] text-sage/80 mt-0.5">
                      Hand-tempered carbon iron built to withstand generations of tough rural use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
