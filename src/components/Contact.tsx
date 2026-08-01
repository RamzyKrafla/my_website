"use client";

import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/FadeIn";
import { withBasePath } from "@/lib/paths";

export function Contact() {
  const { personal, contactBlurb } = portfolioData;

  return (
    <footer id="contact" className="border-t bg-card/80 px-6 py-16">
      <FadeIn
        y={20}
        className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Contact</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">Get in touch</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">{contactBlurb}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${personal.email}`}
            className="rounded-md border bg-background p-3 transition hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border bg-background p-3 transition hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border bg-background p-3 transition hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={withBasePath("/MY_CV.pdf")}
            className="rounded-md border bg-background p-3 transition hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label="CV"
          >
            <FileText className="h-5 w-5" />
          </a>
        </div>

        <div className="text-sm text-muted-foreground md:text-right">
          © {personal.copyrightYear} {personal.name}. All rights reserved.
        </div>
      </FadeIn>
    </footer>
  );
}
