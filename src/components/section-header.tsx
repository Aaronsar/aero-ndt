interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {label && (
        <span className={`section-label ${light ? "text-sky-300" : ""}`}>{label}</span>
      )}
      <h2
        className={`section-title mt-3 ${light ? "text-white" : ""}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-blue-100" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
