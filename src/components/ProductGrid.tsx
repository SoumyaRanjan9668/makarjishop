import { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";
import { Hammer } from "lucide-react";

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
  onClearFilters?: () => void;
}

export function ProductGrid({
  products,
  emptyMessage = "No handcrafted iron tools found matching your selection.",
  onClearFilters,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-forest/20 bg-ivory-light py-16 px-6 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage text-forest mb-4">
          <Hammer className="h-6 w-6 text-terracotta" />
        </div>
        <h3 className="font-serif text-lg font-bold text-forest">
          No Tools Found
        </h3>
        <p className="mt-2 text-sm text-secondary-text max-w-md">
          {emptyMessage}
        </p>
        {onClearFilters && (
          <button
            onClick={onClearFilters}
            className="mt-5 rounded-md bg-forest px-4 py-2 text-xs font-semibold text-ivory hover:bg-forest-deep transition-colors cursor-pointer"
          >
            Clear Filters & View All Tools
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {products.map((product, idx) => (
        <ProductCard
          key={product.id}
          product={product}
          priority={idx < 3}
        />
      ))}
    </div>
  );
}
