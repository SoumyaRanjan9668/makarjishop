import { SectionHeading } from "./SectionHeading";
import { Hammer, Flame, Sparkles, Scale } from "lucide-react";

export function BrandIntro() {
  const pillars = [
    {
      icon: Flame,
      title: "Coal Hearth Heating",
      description:
        "Raw high-carbon iron is fired in a coal hearth until it reaches orange forging heat, making it malleable for hand hammer shaping.",
    },
    {
      icon: Hammer,
      title: "Anvil Hammering",
      description:
        "Every curve, taper, and cutting edge is shaped by the blacksmith's rhythm and hammer blow directly on the anvil face.",
    },
    {
      icon: Sparkles,
      title: "Water & Oil Quenching",
      description:
        "Hardened through traditional village quench methods to give cutting bevels superior edge retention against Indian timber and rocky soils.",
    },
    {
      icon: Scale,
      title: "Direct Village Origin",
      description:
        "Manufactured in a rural workshop and shipped directly to farmers, woodworkers, and merchants without urban distributor markups.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-ivory text-main-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Authentic Heritage"
          title="More Than Tools. A Tradition Of Craftsmanship."
          description="In an era of thin, stamped factory sheet metal, MAKAR JI preserves the age-old art of the Indian village blacksmith. Our tools are hand-hammered from dense, high-carbon iron to deliver genuine weight, strength, and endurance."
        />

        {/* Official Brand Logo Showcase Banner */}
        <div className="mt-12 mx-auto max-w-3xl rounded-2xl border-2 border-forest/15 bg-ivory-light p-6 sm:p-8 shadow-sm text-center">
          <div className="flex flex-col items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/makar-ji-logo.png"
              alt="Makar Ji Workshop - Strong Work, Lasting Quality"
              className="max-h-48 sm:max-h-56 w-auto object-contain drop-shadow-sm transition-transform duration-300 hover:scale-[1.02]"
            />
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 text-xs font-semibold">
              <span className="rounded-full bg-forest px-3.5 py-1 text-ivory">
                Agricultural Tools
              </span>
              <span className="rounded-full bg-forest px-3.5 py-1 text-ivory">
                Traditional Iron Works
              </span>
              <span className="rounded-full bg-forest px-3.5 py-1 text-ivory">
                Custom Village Fabrication
              </span>
            </div>
            <p className="mt-3.5 text-xs sm:text-sm text-secondary-text max-w-xl leading-relaxed">
              Official workshop trademark: <strong className="text-forest">Makar Ji Workshop</strong> — dedicated to manufacturing authentic hand-hammered carbon iron tools with lasting durability.
            </p>
          </div>
        </div>

        {/* 4 Brand Pillars */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-lg border border-forest/15 bg-ivory-light p-6 transition-all duration-300 hover:border-terracotta hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-forest text-terracotta mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-forest mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
