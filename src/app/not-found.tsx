import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hammer, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="py-24 sm:py-32 bg-ivory flex-1 flex items-center justify-center text-center px-4">
        <div className="max-w-md mx-auto space-y-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forest text-terracotta mx-auto shadow-md">
            <Hammer className="h-8 w-8" />
          </div>

          <span className="text-xs font-semibold tracking-wider uppercase text-terracotta">
            404 Error
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
            Tool Not Found
          </h1>

          <p className="text-sm text-secondary-text leading-relaxed">
            The page or handcrafted tool you are looking for does not exist or may have been relocated in our catalogue.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-md bg-forest px-5 py-2.5 text-sm font-semibold text-ivory hover:bg-forest-deep transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-md bg-terracotta px-5 py-2.5 text-sm font-semibold text-white hover:bg-terracotta-hover transition-colors"
            >
              <span>Explore Products</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
