"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { EXPERIENCE } from "@/data/portfolio";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <p className="font-mono text-highlight text-xs tracking-[0.2em] uppercase mb-12">
        Experience
      </p>

      <div className="flex flex-col gap-6">
        {EXPERIENCE.map((exp, i) => (
          <motion.div
            key={i}
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
            className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-8 border-t border-border"
          >
            {/* Left col — meta */}
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-text-secondary">
                {exp.period}
              </span>
              <span className="font-inter text-sm text-text-secondary mt-2">
                {exp.company}
              </span>
              <span className="font-inter text-xs text-text-secondary opacity-60">
                {exp.location}
              </span>
            </div>

            {/* Right col — content */}
            <div>
              <h3 className="font-grotesk font-semibold text-text-primary text-base mb-4">
                {exp.role}
              </h3>
              <ul className="flex flex-col gap-3">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-4 font-inter text-sm text-text-secondary leading-relaxed">
                    <span className="text-text-secondary opacity-40 mt-0.5 flex-shrink-0 font-mono text-xs">
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}

        {/* Bottom border */}
        <div className="border-t border-border" />
      </div>
    </SectionWrapper>
  );
}
