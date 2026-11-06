import { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCatalogClient } from "@/components/ProductCatalogClient";

export const metadata: Metadata = {
  title: "Handmade Iron Tools Catalogue | MAKAR JI",
  description:
    "Explore our complete catalogue of traditional village-forged iron tools including Paniki, Korana, Kuradi, Katuri, Daab, Kodal, Churi, Kulhadi, Hasua, Khurpi, Shovel, and Gaiti.",
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <Suspense
          fallback={
            <div className="py-24 text-center text-secondary-text">
              Loading artisan tools catalogue...
            </div>
          }
        >
          <ProductCatalogClient />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
