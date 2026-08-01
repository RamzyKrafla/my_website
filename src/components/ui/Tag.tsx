import { cn } from "@/lib/utils";

const variants = {
  accent: "bg-accent text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  outline: "border bg-background/70 text-muted-foreground",
} as const;

type TagProps = {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

export function Tag({ children, variant = "accent", className }: TagProps) {
  return (
    <span
      className={cn(
        "rounded-sm px-2.5 py-1 text-xs font-medium",
        variant === "outline" && "px-3 py-2 text-sm",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
