"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  label: string;
}

export default function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      className="inline-flex items-center px-3 py-1.5 rounded-sm font-mono text-xs border border-border text-text-secondary bg-bg-elevated hover:border-text-secondary hover:text-text-primary transition-colors duration-200 cursor-default"
    >
      {label}
    </motion.span>
  );
}
