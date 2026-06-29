import type { LucideIcon } from "lucide-react";

type IconBadgeProps = {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "dark";
  className?: string;
};

const sizes = {
  sm: { box: "h-10 w-10", icon: "h-[18px] w-[18px]", rounded: "rounded-xl" },
  md: { box: "h-16 w-16", icon: "h-7 w-7", rounded: "rounded-2xl" },
  lg: { box: "h-20 w-20", icon: "h-9 w-9", rounded: "rounded-2xl" },
} as const;

export function IconBadge({
  icon: Icon,
  size = "md",
  variant = "default",
  className = "",
}: IconBadgeProps) {
  const s = sizes[size];

  return (
    <div
      className={`icon-badge ${s.box} ${s.rounded} flex shrink-0 items-center justify-center ${
        variant === "dark" ? "icon-badge-dark" : ""
      } ${className}`}
    >
      <Icon className={`${s.icon} ${variant === "dark" ? "text-sky-300" : "text-primary"}`} strokeWidth={1.5} />
    </div>
  );
}
