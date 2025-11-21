"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function Skills() {
    return (
        <section className="py-20 px-4 max-w-4xl mx-auto text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12"
            >
                Skills & Technologies
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-4">
                {portfolioData.skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="px-6 py-3 bg-muted rounded-full text-lg font-medium"
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
