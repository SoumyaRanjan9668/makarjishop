import { SectionHeading } from "./SectionHeading";
import { SafeImage } from "./SafeImage";
import Link from "next/link";
import { ArrowRight, Hammer, HeartHandshake, ShieldCheck } from "lucide-react";

export function BrandStorySection() {
  return (
    <section className="py-20 sm:py-28 bg-ivory text-main-text border-b border-forest/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Atmospheric Workshop Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-forest/20 shadow-xl bg-forest-deep">
              <div className="relative aspect-4/5 w-full">
                <SafeImage
                  src="/images/workshop/workshop-craftsman.jpg"
                  alt="Traditional Indian village blacksmith at work in workshop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  fallbackTitle="Village Blacksmith Workshop"
                />
                <div className="absolute inset-0 bg-linear-to-t from-forest-deep/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-terracotta font-bold">
                    Indian Village Heritage
                  </span>
                  <p className="font-serif text-sm font-semibold">
                    The Sound of the Anvil in the Heart of the Village
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 rounded-lg bg-forest-deep p-4 text-ivory border border-terracotta/50 shadow-xl max-w-xs">
              <div className="flex items-center gap-2 mb-1 text-terracotta">
                <Hammer className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Hand-Forged Daily
                </span>
              </div>
              <p className="text-xs text-sage/80">
                No automated stamping presses. Pure human skill and heavy hammer strikes.
              </p>
            </div>
          </div>

          {/* Right: Narrative Story */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              badge="Our Village Identity"
              title="Forging Honest Tools for Rural India"
              align="left"
            />

            <div className="space-y-4 text-sm sm:text-base text-secondary-text leading-relaxed">
              <p>
                <strong className="text-forest">MAKAR JI</strong> was born from a simple,
                uncompromising reality: modern industrial mass-market tools often break, warp, or
                dull quickly when confronted with the tough demands of Indian farming and manual labour.
              </p>

              <p>
                In our village workshop, iron is treated with respect. Using dense carbon steel
                and time-tested charcoal forge hearths, our blacksmith hammers out each tool with
                the precise bevel, weight balance, and temper required to handle everyday cutting,
                trenching, and clearing.
              </p>

              <p>
                By establishing MAKAR JI, our objective is to bring village-made tools directly
                to retail customers, agricultural cooperatives, rural hardware stockists, and city
                markets — preserving honest village metalcraft while giving buyers a reliable,
                manufacturer-direct source for tools that last.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-forest/10">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-forest text-terracotta">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-forest">
                    Direct Artisan Connection
                  </h4>
                  <p className="text-xs text-secondary-text">
                    Your orders support real village blacksmith families and preserve rural heritage.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-forest text-terracotta">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-forest">
                    Honest Materials Only
                  </h4>
                  <p className="text-xs text-secondary-text">
                    Solid high-carbon iron, not hollow casings or cheap plated tin.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-semibold text-sm text-forest hover:text-terracotta transition-colors"
              >
                <span>Read Our Full Story & Workshop Principles</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
