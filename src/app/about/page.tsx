import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { SafeImage } from "@/components/SafeImage";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CallButton } from "@/components/CallButton";
import {
  Hammer,
  ShieldCheck,
  HeartHandshake,
  MapPin,
  CheckCircle,
  Truck,
} from "lucide-react";
import { BUSINESS_CONFIG } from "@/config/business";

export const metadata: Metadata = {
  title: "About Us | MAKAR JI Traditional Village Blacksmith",
  description:
    "Learn about MAKAR JI: authentic Indian village blacksmith craftsmanship, handmade high-carbon iron tools, and direct manufacturer connection.",
};

export default function AboutPage() {
  const values = [
    {
      icon: Hammer,
      title: "Authentic Craftsmanship",
      description:
        "Every tool is formed by hand over coal embers and hammered on the anvil. We maintain the traditional techniques that make hand-forged tools vastly superior in tensile toughness.",
    },
    {
      icon: ShieldCheck,
      title: "Honest Materials",
      description:
        "We reject hollow casings and cheap sheet metal. We use solid high-carbon iron and proven spring steel that can be resharpened repeatedly for decades of hard work.",
    },
    {
      icon: HeartHandshake,
      title: "Direct Connection",
      description:
        "We connect village makers directly with buyers. When you order from MAKAR JI, you deal straight with the craft workshop, ensuring fair prices and transparent communication.",
    },
    {
      icon: Truck,
      title: "Rural Heritage Preservation",
      description:
        "By expanding the reach of village-made products to city markets and regional retailers, we keep the centuries-old Indian blacksmithing heritage vital and economically sustainable.",
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-ivory text-main-text">
        {/* Editorial Hero Header */}
        <section className="bg-forest-deep text-ivory py-20 sm:py-28 relative overflow-hidden border-b border-forest">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(var(--color-terracotta)_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-forest border border-terracotta/40 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-terracotta-light mb-4">
              <Hammer className="h-3.5 w-3.5 text-terracotta" />
              Village Blacksmith Heritage
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              About MAKAR JI
            </h1>

            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-sage/85 font-sans leading-relaxed">
              Bridging the gap between traditional Indian village metalcraft and modern
              agricultural and industrial tool demands.
            </p>

            {/* Official Workshop Seal */}
            <div className="mt-8 flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/makar-ji-logo.png"
                alt="Makar Ji Workshop Official Seal"
                className="max-h-40 sm:max-h-48 w-auto object-contain rounded-xl drop-shadow-xl bg-ivory/95 p-3 border-2 border-terracotta/40"
              />
            </div>
          </div>
        </section>

        {/* Section 1: Brand Story & Mission */}
        <section className="py-20 sm:py-24 border-b border-forest/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Photo */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-4/5 w-full rounded-xl overflow-hidden border border-forest/20 shadow-xl bg-forest-deep">
                  <SafeImage
                    src="/images/workshop/workshop-anvil.jpg"
                    alt="Blacksmith striking glowing iron on anvil"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    fallbackTitle="Handmade Village Forging"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-forest-deep via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-serif text-sm font-semibold">
                      Tools Made for Real Work
                    </p>
                    <p className="text-[11px] text-sage/80 mt-0.5">
                      Forged one piece at a time with hammer, tongs, and fire.
                    </p>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="lg:col-span-7 space-y-6">
                <SectionHeading
                  badge="The Background"
                  title="A Rural Tradition Serving Hardworking Hands"
                  align="left"
                />

                <div className="space-y-4 text-sm sm:text-base text-secondary-text leading-relaxed">
                  <p>
                    Across Indian villages, the rhythmic clang of hammer against anvil has long
                    been the heartbeat of rural life. The local blacksmith is not simply a tradesperson;
                    they are the essential mechanic of the agrarian community — crafting the axes that
                    gather firewood, the sickles and weeders that tend crops, and the heavy ironware
                    that powers homes.
                  </p>

                  <p>
                    <strong className="text-forest">MAKAR JI</strong> was founded by a traditional
                    village blacksmith operating a dedicated manual workshop. For years, these rugged,
                    indestructible hand-forged tools were accessible only to neighbouring farmers and
                    village residents.
                  </p>

                  <p>
                    Our brand mission is to open these village-made tools directly to wider audiences:
                    retail buyers seeking authentic durable tools, city dwellers wanting genuine
                    artisan cookware and garden implements, and wholesale agricultural dealers
                    requiring reliable stock.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-forest">
                  <div className="inline-flex items-center gap-1.5 bg-ivory-light border border-forest/15 px-3 py-2 rounded-md">
                    <CheckCircle className="h-4 w-4 text-terracotta" />
                    <span>Traditional Coal Forge</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-ivory-light border border-forest/15 px-3 py-2 rounded-md">
                    <CheckCircle className="h-4 w-4 text-terracotta" />
                    <span>Solid High-Carbon Iron</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-ivory-light border border-forest/15 px-3 py-2 rounded-md">
                    <CheckCircle className="h-4 w-4 text-terracotta" />
                    <span>Direct Artisan Workshop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Our Values */}
        <section className="py-20 sm:py-24 bg-ivory-light border-b border-forest/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Guiding Principles"
              title="Our Values & Commitment"
              description="Everything we do is guided by the honesty of rural Indian craftsmanship and fair dealing."
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="rounded-lg border border-forest/15 bg-white p-6 sm:p-8 transition-all hover:border-terracotta hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-forest text-terracotta mb-5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-forest mb-2">
                      {v.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: The Workshop & Location */}
        <section className="py-20 sm:py-24 border-b border-forest/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <SectionHeading
                  badge="The Workshop"
                  title="Where Iron Meets Anvil and Flame"
                  align="left"
                />

                <div className="space-y-4 text-sm sm:text-base text-secondary-text leading-relaxed">
                  <p>
                    Our workshop is a traditional rural Indian smithy. There are no automated
                    assembly lines or computer-controlled milling machines. The work here is physical,
                    tactile, and grounded in centuries of passed-down muscle memory.
                  </p>
                  <p>
                    Each morning, the coal hearth is ignited. Bellows blow air into the embers until
                    the fire reaches white-hot intensity. Tool blanks are heated, turned, and brought
                    to the anvil where heavy hand hammers draw out the edges, form the tapered sockets,
                    and strike in the final profile.
                  </p>
                  <p>
                    We welcome inquiries from customers seeking verified handmade quality. If you
                    wish to discuss tool specifications, handle styles, or custom batch orders,
                    connect directly with our workshop team.
                  </p>
                </div>

                <div className="pt-2 rounded-lg bg-sage/40 border border-sage p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-terracotta shrink-0 mt-0.5" />
                    <div className="text-xs text-main-text">
                      <strong>Workshop Location:</strong> {BUSINESS_CONFIG.displayAddress}.
                      <p className="text-[11px] text-secondary-text mt-0.5">Visits by appointment for bulk trade discussions.</p>
                    </div>
                  </div>
                  <a
                    href={BUSINESS_CONFIG.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 px-3 py-1.5 rounded bg-forest text-xs font-semibold text-ivory hover:bg-forest-deep transition-colors text-center"
                  >
                    View on Maps ↗
                  </a>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <WhatsAppButton variant="primary" customText="Enquire on WhatsApp" />
                  <CallButton variant="outline" />
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-4/3 sm:aspect-square w-full rounded-xl overflow-hidden border border-forest/20 shadow-lg bg-forest-deep">
                  <SafeImage
                    src="/images/workshop/workshop-hearth.jpg"
                    alt="Traditional village forge coals"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    fallbackTitle="Coal Hearth & Forge"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Wholesale & Retail Direct CTA */}
        <section className="py-16 sm:py-20 bg-forest text-ivory text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Ready to Experience Hand-Forged Quality?
            </h2>
            <p className="text-sm sm:text-base text-sage/85 max-w-xl mx-auto leading-relaxed">
              Explore our full catalogue of handcrafted cutting tools, agricultural implements,
              and village ironware.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/products"
                className="w-full sm:w-auto rounded-md bg-terracotta px-6 py-3 text-sm font-semibold text-white hover:bg-terracotta-hover transition-colors"
              >
                Browse All Tools
              </Link>
              <Link
                href="/our-craft"
                className="w-full sm:w-auto rounded-md border border-sage/40 bg-transparent px-6 py-3 text-sm font-semibold text-ivory hover:bg-ivory-light/10 transition-colors"
              >
                Learn About Our Crafting
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
