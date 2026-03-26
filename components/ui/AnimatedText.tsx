"use client";

import { motion, type Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  el?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
}

const container: Variants = {
  hidden: {},
  visible: (delay: number = 0) => ({
    transition: {
      staggerChildren: 0.07,
      delayChildren: delay,
    },
  }),
};

const wordVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function AnimatedText({
  text,
  el: Element = "p",
  className = "",
  delay = 0,
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      custom={delay}
      className={`flex flex-wrap gap-x-[0.25em] ${className}`}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariant}
          className="inline-block"
          aria-hidden
        >
          <Element className="inline">{word}</Element>
        </motion.span>
      ))}
    </motion.div>
  );
}
