"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Calendar, MapPin } from "lucide-react";

export function Experience() {
    return (
        <section className="py-20 px-4 max-w-4xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12 text-center"
            >
                Experience
            </motion.h2>

            <div className="space-y-12">
                {portfolioData.experience.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative border-l-2 border-muted pl-8 pb-2"
                    >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                            <h3 className="text-xl font-semibold">{job.role}</h3>
                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                                <Calendar className="w-3 h-3" /> {job.period}
                            </span>
                        </div>
                        <div className="text-lg font-medium text-muted-foreground mb-2">
                            {job.company}
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {job.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
