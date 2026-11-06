import { SectionHeading } from "./SectionHeading";
import { Hammer, Truck, CheckCircle2, MessageSquare, Users } from "lucide-react";

export function WhyChooseSection() {
  const benefits = [
    {
      icon: Hammer,
      title: "Traditional Craftsmanship",
      description:
        "Every single tool is individually hammered by an experienced village blacksmith using traditional hand forging methods.",
    },
    {
      icon: Truck,
      title: "Manufacturer Direct",
      description:
        "Buy straight from the artisan workshop. Eliminate city distributors, stockist markups, and middleman commissions.",
    },
    {
      icon: CheckCircle2,
      title: "Practical Everyday Tools",
      description:
        "Designed specifically for real Indian agricultural work, woodcutting, clearing, and rural kitchen demands.",
    },
    {
      icon: MessageSquare,
      title: "Direct WhatsApp Enquiry",
      description:
        "Talk directly with us. Get immediate clarification on tool dimensions, custom weights, and dispatch schedules.",
    },
    {
      icon: Users,
      title: "Personal Business Connection",
      description:
        "We value honest, enduring relationships with local farmers, retail shops, and bulk agricultural tool dealers.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-ivory-light text-main-text border-b border-forest/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Honest Manufacturing"
          title="Why Choose Makar Ji?"
          description="We are not a mass-market brand packaging imported stamped metal. We are genuine village blacksmiths forging strong tools for hardworking hands."
        />

        {/* 5 Benefits Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`rounded-lg border border-forest/15 bg-white p-6 sm:p-8 transition-all duration-300 hover:border-terracotta hover:shadow-md ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-forest text-terracotta mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-forest mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
