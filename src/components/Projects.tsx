"use client";

import { portfolioData } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";

export function Projects() {
  return (
    <section id="projects" className="border-y bg-muted/55 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Project shelf"
          description="Smaller builds and experiments that show the range: computer vision, voice systems, simulation, embedded programming, and ML baselines."
          layout="split"
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {portfolioData.projects.map((project, index) => (
            <FadeIn
              key={project.title}
              delay={index * 0.04}
              y={20}
              className="paper-card flex flex-col rounded-md border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40"
            >
              <h3 className="mb-3 font-display text-2xl font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="mb-5 flex-grow text-sm leading-6 text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag} variant="secondary">
                    {tag}
                  </Tag>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
