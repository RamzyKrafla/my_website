import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  /** `split` places title and description side-by-side on md+ */
  layout?: "stack" | "split";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  layout = "stack",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12",
        layout === "split" && "grid gap-6 md:grid-cols-[0.75fr_1fr] md:items-end",
        layout === "stack" && description && "flex flex-col gap-3 md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div>
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">{eyebrow}</p>
        ) : null}
        <h2
          className={cn(
            "font-display text-4xl font-semibold tracking-tight md:text-5xl",
            eyebrow && "mt-3",
          )}
        >
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-2xl text-base leading-8 text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
