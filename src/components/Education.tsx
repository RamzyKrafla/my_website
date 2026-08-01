"use client";

import { GraduationCap, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";

export function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn as="div" className="mb-12">
          <SectionHeader title="Education" className="mb-0" />
        </FadeIn>

        <div className="space-y-6">
          {portfolioData.education.map((edu, index) => (
            <FadeIn
              key={edu.school}
              delay={index * 0.06}
              y={20}
              className="paper-card rounded-md border bg-card p-6 shadow-sm"
            >
              <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="mb-1 font-display text-2xl font-semibold tracking-tight">
                    {edu.school}
                  </h3>
                  <p className="mb-2 text-lg text-muted-foreground">{edu.degree}</p>
                </div>
                <div className="text-sm text-muted-foreground md:text-right">
                  <div className="mb-1 flex items-center gap-1.5 md:justify-end">
                    <GraduationCap className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 md:justify-end">
                    <MapPin className="h-4 w-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <p className="mb-4 leading-7 text-muted-foreground">{edu.description}</p>

              {(edu.gpa || edu.highlights) && (
                <div className="flex flex-wrap gap-2">
                  {edu.gpa ? <Tag>Grade: {edu.gpa}</Tag> : null}
                  {edu.highlights?.map((highlight) => (
                    <Tag key={highlight}>{highlight}</Tag>
                  ))}
                </div>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
