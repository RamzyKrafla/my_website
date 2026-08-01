"use client";

import { FileText } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Publications() {
  if (portfolioData.publications.length === 0) return null;

  return (
    <section id="publications" className="border-y bg-card/55 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Publications & thesis"
          title="Written work."
          description="Thesis and research writing connected to the medical-imaging thread."
        />

        <div className="space-y-4">
          {portfolioData.publications.map((pub, index) => (
            <FadeIn
              key={pub.title}
              delay={index * 0.05}
              className="paper-card flex gap-4 rounded-md border bg-background p-6 shadow-sm"
            >
              <FileText className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight">{pub.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {pub.context} · {pub.year}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
