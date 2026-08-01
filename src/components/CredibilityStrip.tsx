"use client";

import { portfolioData } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/FadeIn";

export function CredibilityStrip() {
  return (
    <section id="credibility" aria-label="Credibility" className="px-6 pb-10">
      <FadeIn className="mx-auto grid max-w-6xl overflow-hidden rounded-md border bg-card/85 shadow-sm md:grid-cols-4">
        {portfolioData.credibility.map((item, index) => (
          <div
            key={item.value}
            className="border-b p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {item.label}
            </p>
            <p className="mt-2 font-display text-2xl font-semibold tracking-tight">{item.value}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.detail}</p>
            <span className="mt-4 block text-xs text-muted-foreground">0{index + 1}</span>
          </div>
        ))}
      </FadeIn>
    </section>
  );
}
