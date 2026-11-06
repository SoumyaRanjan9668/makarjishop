import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { SafeImage } from "@/components/SafeImage";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  Flame,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Craft | Traditional Indian Blacksmithing | MAKAR JI",
  description:
    "Discover the traditional village blacksmithing process of MAKAR JI: coal hearth heating, anvil hammering, hand-quenched tempering, and oil finishing.",
};

export default function OurCraftPage() {
  const craftStages = [
    {
      num: "01",
      title: "Raw Material Selection",
      subtitle: "High-Tensile Carbon Steel & Reclaimed Iron",
      desc: "Great tools begin with dense, high-carbon metal. We selectively source high-carbon leaf springs, railway carbon steel, and dense structural iron that possess the ideal alloy composition for shock absorption and keen edge holding.",
      image: "/images/workshop/workshop-anvil.jpg",
      keyPoints: [
        "High carbon content for hardness retention",
        "Tested for absence of internal stress cracks",
        "Sized according to intended tool heft and balance",
      ],
    },
    {
      num: "02",
      title: "Coal Hearth Heating",
      subtitle: "The Science of Forge Fire Color",
      desc: "Our coal forge is fired with natural air blast. The blacksmith reads temperature by the glowing color of the iron — from cherry red (approx. 800°C) to bright forging lemon-yellow (approx. 1,050°C). Heating must be even and gradual to avoid burning the carbon out of the steel.",
      image: "/images/workshop/coal.webp",
      keyPoints: [
        "Even core temperature throughout the billet",
        "Careful temperature monitoring by eye",
        "Prevents carbon decarbonization during fire heats",
      ],
    },
    {
      num: "03",
      title: "Anvil Hammering & Bevel Shaping",
      subtitle: "Forming Strength Through Compression",
      desc: "Hammer blows compress the microscopic grain structure of the hot metal, making forged iron significantly tougher than cast or stamped metal. The blacksmith draws out the blade taper, forms the spine, and drift-punches the oval handle socket with high precision.",
      image: "/images/hero/hero-blacksmith.jpg",
      keyPoints: [
        "Continuous hammer rhythm aligns metal grain",
        "Reinforced spine prevents bending under impact",
        "Tapered socket forged directly into the head",
      ],
    },
    {
      num: "04",
      title: "Differential Quenching & Tempering",
      subtitle: "Balancing Hardness With Flexibility",
      desc: "A hard blade that is brittle will chip against stones; a soft blade will dull quickly. Through controlled differential quenching in water and oil, the cutting edge is hardened while the body of the tool remains tough and springy to absorb impacts.",
      image: "/images/workshop/workshop-anvil.jpg",
      keyPoints: [
        "Keen cutting bevel hardened for edge longevity",
        "Shock-absorbing body prevents catastrophic shattering",
        "Traditional oil bath finish to prevent initial corrosion",
      ],
    },
    {
      num: "05",
      title: "Hand Grinding & Final Inspection",
      subtitle: "The Final Blacksmith Touch",
      desc: "After cooling, each tool's cutting edge is ground and honed on coarse sharpening wheels. Forge scale is wire-brushed, and a protective layer of natural mustard oil is applied to shield the raw iron during storage and transport.",
      image: "/images/workshop/hand.png",
      keyPoints: [
        "Pre-sharpened cutting edge ready for work",
        "Balanced weight distribution tested by hand",
        "Coated with natural oil for storage protection",
      ],
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-ivory text-main-text">
        {/* Hero Header */}
        <section className="bg-forest-deep text-ivory py-20 sm:py-28 relative overflow-hidden border-b border-forest">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(var(--color-terracotta)_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-forest border border-terracotta/40 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-terracotta-light mb-4">
              <Flame className="h-3.5 w-3.5 text-terracotta" />
              The Art of Village Forging
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Our Traditional Craft
            </h1>

            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-sage/85 font-sans leading-relaxed">
              Discover how heat, muscle, and seasoned eye transform raw carbon iron into
              enduring tools that serve Indian agriculture, forestry, and homes.
            </p>
          </div>
        </section>

        {/* Hand-Forged vs Stamped Metal Comparison */}
        <section className="py-16 sm:py-20 border-b border-forest/10 bg-ivory-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-forest/15 bg-white p-6 sm:p-10 shadow-sm">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest text-center mb-8">
                Why Hand-Forged Iron Outlasts Modern Stamped Sheet Metal
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Hand-Forged MAKAR JI */}
                <div className="rounded-lg border-2 border-forest bg-forest/5 p-6 space-y-3">
                  <div className="flex items-center gap-2 text-forest font-serif font-bold text-lg">
                    <ShieldCheck className="h-5 w-5 text-terracotta" />
                    <span>MAKAR JI Hand-Forged Iron</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-main-text">
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta font-bold">✓</span>
                      <span><strong>Continuous Grain Alignment:</strong> Hammer strikes compress the grain along tool contour, preventing stress fractures.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta font-bold">✓</span>
                      <span><strong>Solid High-Carbon Core:</strong> Can be repeatedly resharpened on stone for decades of service.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta font-bold">✓</span>
                      <span><strong>Differential Temper:</strong> Tough shock-absorbing spine with hardened keen cutting bevel.</span>
                    </li>
                  </ul>
                </div>

                {/* Stamped Factory Metal */}
                <div className="rounded-lg border border-secondary-text/30 bg-ivory-light p-6 space-y-3 opacity-90">
                  <div className="flex items-center gap-2 text-secondary-text font-serif font-bold text-lg">
                    <ShieldAlert className="h-5 w-5 text-secondary-text" />
                    <span>Commercial Stamped Metal</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-secondary-text">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✕</span>
                      <span><strong>Disrupted Grain:</strong> Cut out of flat sheet with mechanical press, leaving weak microscopic fracture points.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✕</span>
                      <span><strong>Thin Low-Grade Steel:</strong> Bends or curls easily against stones, hard clay, or dry hardwoods.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✕</span>
                      <span><strong>Superficial Case Hardening:</strong> Dulls quickly and cannot be resharpened effectively once the surface wear occurs.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The 5 Stages Deep Dive */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            <SectionHeading
              badge="Step by Step"
              title="The 5 Stages of the Village Hearth"
              description="From raw steel billet to the polished cutting edge, follow the journey of a MAKAR JI tool."
            />

            <div className="space-y-16">
              {craftStages.map((stage, idx) => {
                const isEven = idx % 2 === 1;
                return (
                  <div
                    key={stage.num}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                      isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Media Column */}
                    <div
                      className={`lg:col-span-5 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden border border-forest/20 shadow-lg bg-forest-deep">
                        <SafeImage
                          src={stage.image}
                          alt={stage.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 45vw"
                          className="object-cover"
                          fallbackTitle={stage.title}
                        />
                        <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-terracotta text-sm font-bold text-white shadow-md">
                          {stage.num}
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div
                      className={`lg:col-span-7 space-y-4 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <span className="text-xs font-semibold tracking-wider text-terracotta uppercase">
                        Stage {stage.num} • {stage.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
                        {stage.title}
                      </h3>
                      <p className="text-sm sm:text-base text-secondary-text leading-relaxed">
                        {stage.desc}
                      </p>

                      <div className="pt-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-forest mb-2">
                          Craft Highlights:
                        </h4>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-main-text">
                          {stage.keyPoints.map((point, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA to Explore Products */}
        <section className="py-16 sm:py-20 bg-forest-deep text-ivory text-center border-t border-forest">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              See The Craft In Our Finished Tools
            </h2>
            <p className="text-sm sm:text-base text-sage/85 max-w-xl mx-auto">
              Explore axes, cleavers, weeders, and iron griddles shaped with these exact
              traditional methods.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/products"
                className="w-full sm:w-auto rounded-md bg-terracotta px-7 py-3.5 text-sm font-semibold text-white hover:bg-terracotta-hover transition-colors"
              >
                Browse All Tools
              </Link>
              <WhatsAppButton
                variant="outline"
                className="w-full sm:w-auto text-ivory border-sage/40 hover:bg-forest"
                customText="Inquire About Custom Forged Work"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
