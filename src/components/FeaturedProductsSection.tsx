import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import { SectionHeading } from "./SectionHeading";
import { ProductCard } from "./ProductCard";
import { ArrowRight } from "lucide-react";

export function FeaturedProductsSection() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-20 sm:py-28 bg-ivory text-main-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <SectionHeading
            badge="Forged For Everyday Work"
            title="Featured Handmade Tools"
            description="Explore our most requested traditional iron tools. Each tool is individually shaped, balanced, and heat-tempered by hand."
            align="left"
            className="mb-0"
          />

          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-md border border-forest bg-transparent px-5 py-2.5 text-sm font-semibold text-forest hover:bg-forest hover:text-ivory transition-colors self-start md:self-auto"
          >
            <span>View Full Catalogue</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-14 rounded-lg border border-forest/15 bg-ivory-light p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-serif text-base font-bold text-forest">
              Need A Custom Size or Specific Tool Weight?
            </h4>
            <p className="text-xs sm:text-sm text-secondary-text mt-1">
              Because we forge by hand, we can accommodate custom weight and bevel preferences for batch orders.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-md bg-forest px-4 py-2 text-xs font-semibold text-ivory hover:bg-forest-deep transition-colors"
          >
            <span>Custom Enquiry</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
