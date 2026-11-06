import { SectionHeading } from "./SectionHeading";
import { SafeImage } from "./SafeImage";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CraftsmanshipSection() {
  const steps = [
    {
      step: "01",
      title: "Heating In The Hearth",
      description:
        "High-carbon reclaimed iron and spring steel are heated in a traditional coal hearth until reaching incandescent red-orange forging temperature (around 1,000°C).",
      image: "/images/workshop/workshop-hearth.jpg",
    },
    {
      step: "02",
      title: "Hammering & Anvil Shaping",
      description:
        "Using hand hammers and tongs, the blacksmith draws out the bevels, tapers the tang, and drift-punches the eye hole while the iron is soft.",
      image: "/images/workshop/workshop-anvil.jpg",
    },
    {
      step: "03",
      title: "Quenching & Edge Tempering",
      description:
        "The shaped tool is carefully heat-treated in oil or water to lock in microscopic carbon crystal hardness, giving the cutting edge lasting sharpness.",
      image: "/images/hero/hero-blacksmith.jpg",
    },
    {
      step: "04",
      title: "Hand Finishing & Inspection",
      description:
        "The cutting bevel is ground on a coarse stone, the forge scale is wire-brushed, and the tool is oiled with mustard oil to protect against moisture.",
      image: "/images/workshop/workshop-craftsman.jpg",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-forest-deep text-ivory border-y border-forest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Forging Journey"
          title="Made By Hand. Inspired By Tradition."
          description="Every tool passes through the hearth, the anvil, the quenching trough, and the sharpening stone. This centuries-old sequence creates tools of exceptional resilience."
          lightTheme
        />

        {/* 4 Process Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="group flex flex-col justify-between rounded-lg border border-forest bg-forest/60 overflow-hidden transition-all duration-300 hover:border-terracotta/60 hover:bg-forest"
            >
              {/* Step Image */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-forest-deep/80">
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  fallbackTitle={item.title}
                />
                <div className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded bg-terracotta text-xs font-bold text-white shadow">
                  {item.step}
                </div>
              </div>

              {/* Step Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-sage/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Craft Link & Note */}
        <div className="mt-12 text-center">
          <Link
            href="/our-craft"
            className="inline-flex items-center gap-2 rounded-md bg-terracotta px-6 py-3 text-sm font-medium text-white hover:bg-terracotta-hover transition-colors"
          >
            <span>Learn More About Our Crafting Process</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-4 text-[11px] text-sage/60">
            *Reference workshop photography shown. Actual production occurs at our village hearth.
          </p>
        </div>
      </div>
    </section>
  );
}
