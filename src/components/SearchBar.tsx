import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = "Search handmade tools by name, use, or craft...",
  className = "",
}: SearchBarProps) {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-secondary-text">
        <Search className="h-4 w-4" />
      </div>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md border border-forest/20 bg-ivory-light py-2.5 pl-10 pr-10 text-sm text-main-text placeholder-secondary-text/70 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest transition-colors"
      />

      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-secondary-text hover:text-forest transition-colors cursor-pointer"
          aria-label="Clear search query"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
