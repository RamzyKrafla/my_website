"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  Brain,
  Database,
  FileText,
  Github,
  Linkedin,
  Mail,
  Microscope,
  Network,
  type LucideIcon,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { withBasePath } from "@/lib/paths";

const iconMap: Record<(typeof portfolioData.hero.focusAreas)[number]["icon"], LucideIcon> = {
  microscope: Microscope,
  database: Database,
  brain: Brain,
  network: Network,
};

export function Hero() {
  const { personal, hero } = portfolioData;

  return (
    <section id="top" className="relative overflow-hidden px-6 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-primary">
            {hero.eyebrow}
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
            {personal.name}
          </h1>
          <h2 className="mt-5 max-w-2xl text-xl leading-8 text-foreground/80 md:text-2xl">
            {hero.headline}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            {personal.about}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
            <a
              href={withBasePath("/MY_CV.pdf")}
              className="inline-flex items-center gap-2 rounded-md border bg-card px-4 py-2.5 text-sm font-medium transition hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <FileText className="h-4 w-4" />
              CV
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border bg-card px-4 py-2.5 text-sm font-medium transition hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border bg-card px-4 py-2.5 text-sm font-medium transition hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 text-sm text-muted-foreground sm:grid-cols-4">
            {hero.domains.map((item) => (
              <div key={item} className="notebook-label rounded-md border bg-card/70 px-3 py-2">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[480px] w-full max-w-[520px] justify-self-center sm:min-h-[560px] lg:justify-self-end">
          <motion.div
            initial={{ opacity: 0, rotate: -4, y: 16 }}
            animate={{ opacity: 1, rotate: -5, y: 0 }}
            transition={{ delay: 0.12, duration: 0.45 }}
            className="paper-sheet absolute left-3 top-8 h-[360px] w-[78%] rounded-md border bg-secondary/70"
          />
          <motion.div
            initial={{ opacity: 0, rotate: 4, y: 16 }}
            animate={{ opacity: 1, rotate: 3, y: 0 }}
            transition={{ delay: 0.2, duration: 0.45 }}
            className="paper-sheet absolute right-0 top-20 h-[370px] w-[74%] rounded-md border bg-card"
          />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.45 }}
            className="paper-sheet relative z-10 ml-auto w-[82%] rounded-md border bg-card p-4 shadow-sm"
          >
            <div className="flex items-center justify-between border-b pb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span>Field note</span>
              <span>{personal.location.split(",")[0]}</span>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-[0.78fr_1fr]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm border bg-background">
                <Image
                  src={withBasePath("/profile.jpg")}
                  alt={personal.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 12rem, 14rem"
                />
              </div>
              <div className="flex flex-col justify-between gap-5">
                <div>
                  <p className="font-display text-2xl font-semibold leading-tight">
                    {hero.fieldNoteTitle}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {hero.fieldNoteBody}
                  </p>
                </div>
                <div className="rounded-md border bg-background/70 p-3 text-sm">
                  <p className="text-xs uppercase tracking-[0.18em] text-primary">
                    {hero.currentThreadLabel}
                  </p>
                  <p className="mt-2 text-muted-foreground">{hero.currentThread}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="absolute bottom-0 left-0 z-20 grid w-full gap-3 sm:grid-cols-2">
            {hero.focusAreas.map((chip, index) => {
              const Icon = iconMap[chip.icon];
              return (
                <motion.div
                  key={chip.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.36 + index * 0.06, duration: 0.35 }}
                  className="group relative rounded-md border bg-card/95 p-3 shadow-sm transition hover:-translate-y-1 hover:border-primary/40"
                >
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Icon className="h-4 w-4 text-primary" />
                    <span>{chip.label}</span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground transition group-hover:text-foreground">
                    {chip.note}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
