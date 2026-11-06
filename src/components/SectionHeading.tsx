interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  lightTheme?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  lightTheme = false,
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 mb-3 text-xs tracking-widest uppercase font-semibold ${
            lightTheme ? "text-terracotta-light" : "text-terracotta"
          }`}
        >
          <span className="h-px w-6 bg-terracotta" />
          <span>{badge}</span>
          <span className="h-px w-6 bg-terracotta" />
        </div>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
          lightTheme ? "text-white" : "text-forest"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            lightTheme ? "text-sage/85" : "text-secondary-text"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
