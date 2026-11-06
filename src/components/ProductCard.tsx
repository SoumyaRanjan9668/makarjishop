import Link from "next/link";
import { Product } from "@/types/product";
import { SafeImage } from "./SafeImage";
import { WhatsAppButton } from "./WhatsAppButton";
import { ArrowUpRight, Hammer } from "lucide-react";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-lg border border-forest/15 bg-ivory-light overflow-hidden transition-all duration-300 hover:border-terracotta/60 hover:shadow-lg hover:shadow-forest/5">
      {/* Top Media Container */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-forest-deep/5">
        <Link href={`/products/${product.slug}`} className="relative block h-full w-full">
          <SafeImage
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
            fallbackTitle={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1 rounded bg-forest-deep/85 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium tracking-wide text-ivory border border-sage/20">
            <Hammer className="h-3 w-3 text-terracotta" />
            {product.category}
          </span>
        </div>

        {/* Pricing badge: "Contact for Price" */}
        <div className="absolute bottom-3 right-3 z-10 pointer-events-none">
          <span className="rounded bg-ivory/95 backdrop-blur-sm px-2.5 py-1 text-[11px] font-semibold text-forest shadow-sm border border-forest/10">
            Contact for Price
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          {/* Title & Hindi Title */}
          <div className="mb-2">
            <Link
              href={`/products/${product.slug}`}
              className="group/title inline-flex items-start justify-between gap-1 w-full"
            >
              <h3 className="font-serif text-lg font-bold text-forest group-hover/title:text-terracotta transition-colors leading-snug">
                {product.name}
              </h3>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-secondary-text group-hover/title:text-terracotta transition-colors mt-1" />
            </Link>
            {product.hindiName && (
              <p className="text-xs text-secondary-text font-medium">
                {product.hindiName}
              </p>
            )}
          </div>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-secondary-text line-clamp-2 leading-relaxed mb-4">
            {product.shortDescription}
          </p>

          {/* Material & Craft highlight snippet */}
          {product.material && (
            <div className="mb-5 rounded border border-sage bg-sage/30 p-2.5 text-[11px] text-main-text">
              <span className="font-semibold text-forest">Crafting:</span>{" "}
              {product.material}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-2 pt-2 border-t border-forest/10">
          <Link
            href={`/products/${product.slug}`}
            className="w-full sm:w-1/2 inline-flex items-center justify-center rounded-md border border-forest bg-transparent px-3 py-2 text-xs font-semibold text-forest hover:bg-forest hover:text-ivory transition-colors text-center"
          >
            View Details
          </Link>
          <div className="w-full sm:w-1/2">
            <WhatsAppButton
              productName={product.name}
              variant="compact"
              customText="WhatsApp"
              className="w-full text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
