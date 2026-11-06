import { ProductCategory } from "@/types/product";
import { CATEGORIES } from "@/data/products";

interface CategoryFilterProps {
  selectedCategory: ProductCategory | "All";
  onSelectCategory: (category: ProductCategory | "All") => void;
  productCounts?: Record<string, number>;
}

export function CategoryFilter({
  selectedCategory,
  onSelectCategory,
  productCounts,
}: CategoryFilterProps) {
  const allCategories: Array<ProductCategory | "All"> = ["All", ...CATEGORIES];

  return (
    <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {allCategories.map((cat) => {
        const isSelected = selectedCategory === cat;
        const count = productCounts ? productCounts[cat] : undefined;

        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none cursor-pointer ${
              isSelected
                ? "bg-forest text-ivory shadow-sm"
                : "bg-ivory-light text-main-text border border-forest/15 hover:border-forest hover:bg-sage/40"
            }`}
          >
            <span>{cat}</span>
            {typeof count === "number" && (
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isSelected
                    ? "bg-terracotta text-white"
                    : "bg-sage text-main-text"
                }`}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
