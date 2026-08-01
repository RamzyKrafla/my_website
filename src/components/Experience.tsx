"use client";

import { Calendar, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";

export function Experience() {
  return (
    <section id="experience" className="border-y bg-card/55 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Experience log"
          title="What I have been working on."
          description="The common thread is turning uncertain, messy technical work into something testable and useful."
        />

        <div className="relative space-y-5 before:absolute before:left-3 before:top-2 before:hidden before:h-full before:w-px before:bg-border md:pl-10 md:before:block">
          {portfolioData.experience.map((job, index) => (
            <FadeIn
              key={`${job.company}-${job.role}`}
              delay={index * 0.04}
              className="paper-card relative rounded-md border bg-background p-6 shadow-sm transition hover:border-primary/40"
            >
              <span className="absolute -left-[34px] top-7 hidden h-3 w-3 rounded-full border-2 border-background bg-primary md:block" />
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight">{job.role}</h3>
                  <p className="mt-1 text-base text-muted-foreground">{job.company}</p>
                </div>
                <div className="text-sm text-muted-foreground md:text-right">
                  <div className="mb-1 flex items-center gap-1.5 md:justify-end">
                    <Calendar className="h-4 w-4" />
                    <span>{job.period}</span>
                  </div>
                  {job.location ? (
                    <div className="flex items-center gap-1.5 md:justify-end">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                  ) : null}
                </div>
              </div>

              <ul className="mt-5 space-y-2 text-sm leading-6 text-muted-foreground md:max-w-4xl">
                {job.description.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {job.skills ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              ) : null}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
