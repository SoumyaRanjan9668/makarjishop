"use client";

import { useState } from "react";
import { SafeImage } from "./SafeImage";

interface ProductDetailGalleryProps {
  mainImage: string;
  gallery: string[];
  productName: string;
}

export function ProductDetailGallery({
  mainImage,
  gallery,
  productName,
}: ProductDetailGalleryProps) {
  const images = gallery && gallery.length > 0 ? gallery : [mainImage];
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      {/* Large Featured Image */}
      <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden border border-forest/15 bg-forest-deep/5 shadow-md">
        <SafeImage
          src={activeImage}
          alt={productName}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          fallbackTitle={productName}
        />
        <div className="absolute bottom-3 left-3 rounded bg-forest-deep/80 backdrop-blur-sm px-3 py-1 text-xs text-ivory border border-sage/20 pointer-events-none">
          Hand-Forged Carbon Iron
        </div>
      </div>

      {/* Thumbnails (if multiple images) */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(img)}
              className={`relative h-20 w-24 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                activeImage === img
                  ? "border-terracotta shadow"
                  : "border-forest/20 opacity-70 hover:opacity-100"
              }`}
            >
              <SafeImage
                src={img}
                alt={`${productName} thumbnail ${i + 1}`}
                fill
                sizes="100px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
