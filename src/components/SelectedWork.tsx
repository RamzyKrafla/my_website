"use client";

import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";

export function SelectedWork() {
  return (
    <section id="selected-work" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Selected work"
          title="Research rigor, product instincts."
          description="A few threads that connect the research, startup, and client-delivery sides of my work."
          layout="split"
        />

                <div className="grid gap-4 md:grid-cols-2">
          {portfolioData.selectedWork.map((work, index) => (
            <FadeIn
              key={work.title}
              as="article"
              delay={index * 0.06}
              y={18}
              className="paper-card group flex min-h-[360px] flex-col rounded-md border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {work.type}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight">
                    {work.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{work.context}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-primary" />
              </div>

              <p className="mt-6 flex-1 text-sm leading-7 text-muted-foreground">{work.description}</p>

              <div className="mt-6 rounded-md border bg-background/70 p-3">
                <p className="text-xs uppercase tracking-[0.18em] text-primary">Signal</p>
                <p className="mt-2 text-sm font-medium text-foreground">{work.signal}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {work.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
