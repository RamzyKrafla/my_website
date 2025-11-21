"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Calendar, MapPin } from "lucide-react";

export function Experience() {
    return (
        <section className="py-20 px-4 bg-muted/20">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center"
                >
                    Experience
                </motion.h2>

                <div className="space-y-8">
                    {portfolioData.experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative border-l-2 border-muted pl-8 pb-2"
                        >
                            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary" />
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                                <div>
                                    <h3 className="text-xl font-semibold">{job.role}</h3>
                                    <p className="text-lg text-muted-foreground">{job.company}</p>
                                </div>
                                <div className="text-sm text-muted-foreground sm:text-right mt-1 sm:mt-0">
                                    <div className="flex items-center gap-1 mb-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>{job.period}</span>
                                    </div>
                                    {job.location && (
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            <span>{job.location}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <p className="text-muted-foreground mb-3">{job.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
