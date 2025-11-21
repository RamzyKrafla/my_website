"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, MapPin } from "lucide-react";

export function Education() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center"
                >
                    Education
                </motion.h2>

                <div className="space-y-6">
                    {portfolioData.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card rounded-lg p-6 border"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-semibold mb-1">{edu.school}</h3>
                                    <p className="text-lg text-muted-foreground mb-2">{edu.degree}</p>
                                </div>
                                <div className="text-sm text-muted-foreground md:text-right">
                                    <div className="flex items-center gap-1 mb-1">
                                        <GraduationCap className="w-4 h-4" />
                                        <span>{edu.period}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        <span>{edu.location}</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-muted-foreground mb-4">{edu.description}</p>

                            {edu.highlights && (
                                <div className="space-y-2">
                                    {edu.highlights.map((highlight, hIndex) => (
                                        <div key={hIndex} className="flex items-start gap-2">
                                            <span className="text-primary mt-1">•</span>
                                            <span className="text-sm">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
