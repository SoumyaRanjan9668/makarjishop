import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductDetailGallery } from "@/components/ProductDetailGallery";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CallButton } from "@/components/CallButton";
import { ProductCard } from "@/components/ProductCard";
import {
  getAllProducts,
  getProductBySlug,
  getRelatedProducts,
} from "@/data/products";
import {
  ArrowLeft,
  Hammer,
  Flame,
  ShieldCheck,
  Truck,
  CheckCircle,
  HelpCircle,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Tool Not Found | MAKAR JI",
      description: "The requested handcrafted tool is not listed.",
    };
  }

  return {
    title: `${product.name} | MAKAR JI Handmade Tools`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} - Traditional Village Forged Tool`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.slug, 3);

  return (
    <>
      <Header />

      <main className="py-10 sm:py-16 bg-ivory min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-xs sm:text-sm text-secondary-text">
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 font-medium hover:text-forest transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to All Products</span>
            </Link>
            <span>/</span>
            <span className="text-forest">{product.category}</span>
            <span>/</span>
            <span className="text-main-text font-semibold truncate max-w-xs">
              {product.name}
            </span>
          </nav>

          {/* Product Overview Layout: 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Gallery */}
            <div className="lg:col-span-6 sticky top-28">
              <ProductDetailGallery
                mainImage={product.image}
                gallery={product.gallery}
                productName={product.name}
              />

              {/* Craft Certificate Callout */}
              <div className="mt-6 rounded-lg border border-forest/15 bg-ivory-light p-4 text-xs text-secondary-text space-y-2">
                <div className="flex items-center gap-2 font-semibold text-forest">
                  <ShieldCheck className="h-4 w-4 text-terracotta" />
                  <span>Genuine Village Blacksmith Guarantee</span>
                </div>
                <p>
                  No die-casting, no sheet-metal stamping. Forged from dense high-carbon
                  iron and tempered to withstand heavy rural manual labour.
                </p>
              </div>
            </div>

            {/* Right Column: Information & Enquiries */}
            <div className="lg:col-span-6 space-y-6">
              {/* Category & Origin Badge */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-forest px-3 py-1 text-xs font-semibold text-ivory">
                  {product.category}
                </span>
                <span className="rounded-full bg-terracotta/15 border border-terracotta/30 px-3 py-1 text-xs font-semibold text-terracotta">
                  Handmade Village Forge
                </span>
              </div>

              {/* Title & Hindi Title */}
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest tracking-tight leading-tight">
                  {product.name}
                </h1>
                {product.hindiName && (
                  <p className="font-serif text-lg text-secondary-text mt-1">
                    {product.hindiName}
                  </p>
                )}
              </div>

              {/* Price Banner: "Contact for Price" */}
              <div className="rounded-lg border border-terracotta/30 bg-ivory-light p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs uppercase tracking-wider text-secondary-text font-semibold">
                    Pricing & Availability
                  </span>
                  <div className="font-serif text-2xl font-bold text-forest">
                    Contact for Price
                  </div>
                  <p className="text-xs text-secondary-text mt-0.5">
                    Direct manufacturer pricing for retail & bulk orders
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-forest bg-sage/60 px-3 py-1.5 rounded">
                  <CheckCircle className="h-3.5 w-3.5 text-terracotta" />
                  <span>Direct From Workshop</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3 text-sm sm:text-base text-main-text leading-relaxed">
                <p>{product.description}</p>
                {product.craftNotes && (
                  <div className="rounded-md border-l-4 border-terracotta bg-ivory-light p-3 text-xs text-secondary-text italic">
                    {product.craftNotes}
                  </div>
                )}
              </div>

              {/* Action Buttons: WhatsApp & Call */}
              <div className="space-y-3 pt-2">
                <WhatsAppButton
                  productName={product.name}
                  variant="primary"
                  className="w-full py-3.5 text-base justify-center"
                  customText={`Enquire on WhatsApp for ${product.name}`}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <CallButton
                    variant="outline"
                    className="w-full justify-center py-2.5"
                    customText="Call Workshop"
                  />
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-forest/20 bg-ivory-light px-4 py-2.5 text-sm font-medium text-forest hover:bg-sage/50 transition-colors"
                  >
                    <HelpCircle className="h-4 w-4 text-terracotta" />
                    <span>Ask A Question</span>
                  </Link>
                </div>
              </div>

              {/* Key Highlights Grid */}
              {(product.forgingTechnique || product.material) && (
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-forest/15">
                  {product.forgingTechnique && (
                    <div className="flex items-start gap-2.5">
                      <Flame className="h-4 w-4 text-terracotta shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-forest">Forging Technique</h4>
                        <p className="text-xs text-secondary-text mt-0.5">{product.forgingTechnique}</p>
                      </div>
                    </div>
                  )}

                  {product.material && (
                    <div className="flex items-start gap-2.5">
                      <Hammer className="h-4 w-4 text-terracotta shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-forest">Crafting Material</h4>
                        <p className="text-xs text-secondary-text mt-0.5">{product.material}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Specifications Table */}
              <div className="pt-4 border-t border-forest/15">
                <h3 className="font-serif text-lg font-bold text-forest mb-3">
                  Tool Specifications
                </h3>
                <div className="overflow-hidden rounded-lg border border-forest/15 bg-ivory-light">
                  <table className="min-w-full divide-y divide-forest/10 text-xs sm:text-sm">
                    <tbody className="divide-y divide-forest/10">
                      {product.specifications.map((spec, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-ivory-light" : "bg-ivory/60"}>
                          <td className="py-2.5 px-4 font-semibold text-forest w-1/3">
                            {spec.label}
                          </td>
                          <td className="py-2.5 px-4 text-secondary-text">{spec.value}</td>
                        </tr>
                      ))}
                      {product.intendedUse && (
                        <tr>
                          <td className="py-2.5 px-4 font-semibold text-forest">Intended Use</td>
                          <td className="py-2.5 px-4 text-secondary-text">{product.intendedUse}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                <p className="mt-2 text-[11px] text-secondary-text">
                  *Note: Because each piece is hand-beaten on the anvil, slight variations in weight and dimensions are natural characteristics of authentic blacksmithing.
                </p>
              </div>

              {/* Bulk Orders Note */}
              <div className="rounded-lg bg-sage/40 border border-sage p-4 flex items-start gap-3">
                <Truck className="h-5 w-5 text-terracotta shrink-0 mt-0.5" />
                <div className="text-xs text-main-text">
                  <strong className="text-forest">Wholesale Supply Available:</strong>{" "}
                  Available in batch quantities for retail hardware stockists, farming cooperatives, and contractors.
                  Contact via WhatsApp for current wholesale price slabs and regional dispatch schedules.
                </div>
              </div>
            </div>
          </div>

          {/* Related Tools Section */}
          {relatedProducts.length > 0 && (
            <div className="mt-24 pt-16 border-t border-forest/15">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-terracotta">
                    More Traditional Tools
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
                    Related Handcrafted Tools
                  </h2>
                </div>
                <Link
                  href="/products"
                  className="text-xs sm:text-sm font-semibold text-forest hover:text-terracotta transition-colors"
                >
                  View All Tools →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
