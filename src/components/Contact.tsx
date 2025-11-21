"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
    return (
        <footer className="py-20 px-4 text-center bg-muted/20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                <h2 className="text-3xl font-bold">Get in Touch</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>

                <div className="flex justify-center gap-8">
                    <a
                        href={`mailto:${portfolioData.personal.email}`}
                        className="p-3 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors border"
                        aria-label="Email"
                    >
                        <Mail className="w-6 h-6" />
                    </a>
                    <a
                        href={portfolioData.personal.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors border"
                        aria-label="GitHub"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                    <a
                        href={portfolioData.personal.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors border"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                </div>

                <div className="pt-10 text-sm text-muted-foreground">
                    © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
                </div>
            </motion.div>
        </footer>
    );
}
