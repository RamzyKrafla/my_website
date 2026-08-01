"use client";

import { motion } from "framer-motion";

type FadeInTag = "div" | "article" | "section" | "blockquote" | "h2";

type FadeInProps = {
  as?: FadeInTag;
  delay?: number;
  y?: number;
  className?: string;
  children: React.ReactNode;
  "aria-label"?: string;
};

export function FadeIn({
  as = "div",
  delay = 0,
  y = 16,
  className,
  children,
  "aria-label": ariaLabel,
}: FadeInProps) {
  const motionProps = {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true as const },
    transition: { delay, duration: 0.4 },
    className,
    "aria-label": ariaLabel,
    children,
  };

  switch (as) {
    case "article":
      return <motion.article {...motionProps} />;
    case "section":
      return <motion.section {...motionProps} />;
    case "blockquote":
      return <motion.blockquote {...motionProps} />;
    case "h2":
      return <motion.h2 {...motionProps} />;
    default:
      return <motion.div {...motionProps} />;
  }
}
