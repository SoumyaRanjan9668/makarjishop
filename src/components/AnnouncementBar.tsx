import Link from "next/link";
import { ArrowRight, Hammer } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-forest-deep text-ivory text-xs py-2 px-4 border-b border-forest tracking-wide">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
        <div className="flex items-center gap-2 justify-center">
          <span className="inline-flex items-center justify-center p-1 rounded bg-terracotta/20 text-terracotta">
            <Hammer className="h-3 w-3" />
          </span>
          <span className="font-medium text-sage">
            Direct From Village Forge: Traditional Hand-Beaten Iron Tools
          </span>
          <span className="hidden md:inline-block text-terracotta">•</span>
          <span className="hidden md:inline-block text-sage/80">
            Wholesale & Retail Direct Dispatch
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 font-semibold text-terracotta hover:text-terracotta-light transition-colors"
          >
            Bulk Orders & Enquiries
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
