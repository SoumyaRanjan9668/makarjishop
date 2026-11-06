export type ProductCategory =
  | "Cutting & Slicing Tools"
  | "Woodworking & Axes"
  | "Agricultural & Field Tools"
  | "Household & Processing Tools";

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  hindiName?: string;
  category: ProductCategory;
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  specifications: ProductSpecification[];
  featured: boolean;
  craftNotes?: string;
  availabilityNote?: string;
  material?: string;
  forgingTechnique?: string;
  intendedUse?: string;
}

export interface CategoryOption {
  id: string;
  name: ProductCategory;
  description: string;
  count?: number;
}
