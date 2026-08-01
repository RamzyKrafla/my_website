"use client";

import { portfolioData } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader
        title="Skill map"
        description="Grouped by how I actually use them: research, product systems, foundations, and delivery."
        layout="split"
      />

      <div className="grid gap-4 md:grid-cols-2">
        {portfolioData.skills.map((group, index) => (
          <FadeIn
            key={group.group}
            as="div"
            delay={index * 0.04}
            y={8}
            className="paper-card rounded-md border bg-card p-5 shadow-sm"
            aria-label={group.group}
          >
            <h3 className="font-display text-2xl font-semibold tracking-tight">{group.group}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <Tag key={skill} variant="outline">
                  {skill}
                </Tag>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
