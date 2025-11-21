"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useEffect, useState } from "react";

interface StarProps {
    x: number;
    y: number;
    size: number;
    opacity: number;
    speed: number;
    scrollY: MotionValue<number>;
}

function Star({ x, y, size, opacity, speed, scrollY }: StarProps) {
    const yPos = useTransform(scrollY, [0, 1000], [0, speed * -500]);

    return (
        <motion.div
            style={{
                position: "absolute",
                left: `${x}%`,
                top: `${y}%`,
                width: size,
                height: size,
                opacity: opacity,
                y: yPos,
            }}
            className="bg-white rounded-full"
            animate={{
                opacity: [opacity, opacity * 1.5, opacity],
            }}
            transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    );
}

export function Background() {
    const [stars, setStars] = useState<Omit<StarProps, "scrollY">[]>([]);
    const { scrollY } = useScroll();

    useEffect(() => {
        // Generate random stars only on client side to avoid hydration mismatch
        const newStars = Array.from({ length: 100 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1, // Slightly larger
            opacity: Math.random() * 0.7 + 0.3, // Brighter
            speed: Math.random() * 0.5 + 0.1,
        }));
        setStars(newStars);
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-background pointer-events-none">
            {stars.map((star: any) => (
                <Star key={star.id} {...star} scrollY={scrollY} />
            ))}
        </div>
    );
}
