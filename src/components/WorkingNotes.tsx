"use client";

import { NotebookPen } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function WorkingNotes() {
  return (
    <section id="notes" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Working notes"
            title="How I tend to build."
            className="mb-0"
          />
          <NotebookPen className="hidden h-10 w-10 shrink-0 text-primary/70 md:block" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {portfolioData.workingNotes.map((note, index) => (
            <FadeIn
              key={note}
              as="blockquote"
              delay={index * 0.05}
              className="paper-card rounded-md border bg-card p-6 shadow-sm"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Note 0{index + 1}
              </span>
              <p className="mt-4 font-display text-2xl leading-9 text-foreground">{note}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
