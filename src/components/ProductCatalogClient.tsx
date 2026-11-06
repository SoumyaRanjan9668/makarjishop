"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCategory } from "@/types/product";
import { PRODUCTS, CATEGORIES, searchProducts } from "@/data/products";
import { CategoryFilter } from "@/components/CategoryFilter";
import { SearchBar } from "@/components/SearchBar";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { Hammer } from "lucide-react";

export function ProductCatalogClient() {
  const searchParams = useSearchParams();
  const paramCategory = searchParams.get("category");
  const urlCategory: ProductCategory | "All" =
    paramCategory && (CATEGORIES as readonly string[]).includes(paramCategory)
      ? (paramCategory as ProductCategory)
      : "All";

  // State tracks user interaction or falls back to URL category
  const [userSelectedCategory, setUserSelectedCategory] = useState<ProductCategory | "All" | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const selectedCategory = userSelectedCategory ?? urlCategory;

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: PRODUCTS.length,
    };
    CATEGORIES.forEach((cat) => {
      counts[cat] = PRODUCTS.filter((p) => p.category === cat).length;
    });
    return counts;
  }, []);

  // Filter products by category and search query
  const filteredProducts = useMemo(() => {
    return searchProducts(searchQuery, selectedCategory);
  }, [searchQuery, selectedCategory]);

  const handleClearFilters = () => {
    setUserSelectedCategory("All");
    setSearchQuery("");
  };

  return (
    <div className="py-12 sm:py-20 bg-ivory min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Intro */}
        <div className="mb-12">
          <SectionHeading
            badge="Forged Iron Catalogue"
            title="Our Handcrafted Tools"
            description="Explore traditional village blacksmith iron tools. Hand-beaten over open coal fires and shaped for decades of reliable use."
            align="left"
          />
        </div>

        {/* Filter & Search Bar Controls */}
        <div className="mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 bg-ivory-light p-5 rounded-lg border border-forest/15 shadow-sm">
          {/* Category Tabs */}
          <div className="w-full md:w-auto">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={(cat) => setUserSelectedCategory(cat)}
              productCounts={categoryCounts}
            />
          </div>

          {/* Search Box */}
          <div className="w-full md:w-80">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search by name, use, or craft..."
            />
          </div>
        </div>

        {/* Result Counter & Active Filters Summary */}
        <div className="mb-6 flex items-center justify-between text-xs text-secondary-text">
          <div className="flex items-center gap-2">
            <Hammer className="h-3.5 w-3.5 text-terracotta" />
            <span>
              Showing <strong className="text-forest">{filteredProducts.length}</strong> of{" "}
              {PRODUCTS.length} tools
            </span>
            {selectedCategory !== "All" && (
              <span className="font-medium text-forest">
                in category: &ldquo;{selectedCategory}&rdquo;
              </span>
            )}
            {searchQuery && (
              <span className="font-medium text-forest">
                matching: &ldquo;{searchQuery}&rdquo;
              </span>
            )}
          </div>

          {(selectedCategory !== "All" || searchQuery) && (
            <button
              onClick={handleClearFilters}
              className="text-xs font-semibold text-terracotta hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Product Grid */}
        <ProductGrid
          products={filteredProducts}
          onClearFilters={handleClearFilters}
          emptyMessage="No tools match your current filter or search criteria. Try a different category or search term."
        />

        {/* Bottom Wholesale Banner */}
        <div className="mt-16 rounded-xl border border-terracotta/40 bg-forest-deep p-8 text-ivory flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-xl font-bold text-white">
              Do You Need Bulk Supply For Your Hardware Store?
            </h3>
            <p className="text-xs sm:text-sm text-sage/80">
              We dispatch 20 to 500+ unit consignments directly from the workshop to agricultural hardware stockists.
            </p>
          </div>

          <a
            href="https://wa.me/919876543210?text=Namaste%20MAKAR%20JI!%20I%20am%20interested%20in%20bulk%20wholesale%20supply%20of%20handmade%20iron%20tools."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-terracotta px-6 py-3 text-sm font-semibold text-white hover:bg-terracotta-hover transition-colors shadow"
          >
            Enquire For Wholesale Slabs
          </a>
        </div>
      </div>
    </div>
  );
}
