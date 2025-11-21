"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center p-4 relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 max-w-3xl"
            >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    Hi, I&apos;m <span className="text-primary">{portfolioData.personal.name}</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-muted-foreground">
                    {portfolioData.personal.role}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    {portfolioData.personal.about}
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10"
            >
                <ArrowDown className="w-6 h-6 animate-bounce text-muted-foreground" />
            </motion.div>
        </section>
    );
}
