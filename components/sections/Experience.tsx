"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { EXPERIENCE } from "@/data/portfolio";
import type { ExperienceItem } from "@/types";

interface CompanyGroup {
  company: string;
  location: string;
  roles: ExperienceItem[];
}

// Groups consecutive EXPERIENCE entries that share a company into one
// LinkedIn-style block — company/location shown once, with each position
// stacked underneath it instead of repeating the company and drawing a
// separator between what's really just one job with multiple roles.
function groupByCompany(items: ExperienceItem[]): CompanyGroup[] {
  const groups: CompanyGroup[] = [];
  for (const item of items) {
    const last = groups[groups.length - 1];
    if (last && last.company === item.company) {
      last.roles.push(item);
    } else {
      groups.push({ company: item.company, location: item.location, roles: [item] });
    }
  }
  return groups;
}

export default function Experience() {
  const groups = groupByCompany(EXPERIENCE);

  return (
    <SectionWrapper id="experience">
      <SectionLabel index="01" label="Experience" />

      <div className="flex flex-col">
        {groups.map((group, i) => (
          <motion.div
            key={group.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ x: 4 }}
            className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 border-t border-border last:border-b transition-colors duration-200 group"
          >
            {/* Left col — company meta, shown once even if there are multiple positions */}
            <div className="flex flex-col gap-1.5">
              <span className="font-inter text-sm text-text-primary font-medium">
                {group.company}
              </span>
              <span className="font-inter text-xs text-text-secondary opacity-60">
                {group.location}
              </span>
            </div>

            {/* Right col — one block per position, no divider between them */}
            <div className="flex flex-col gap-9">
              {group.roles.map((exp, j) => (
                <div key={j}>
                  <h3
                    className="font-grotesk font-semibold text-text-primary transition-colors duration-200"
                    style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)" }}
                  >
                    {exp.role}
                  </h3>
                  <span className="font-mono text-xs text-text-secondary tracking-wide block whitespace-pre-line mt-1.5 mb-5">
                    {exp.period}
                  </span>
                  <ul className="flex flex-col gap-4">
                    {exp.bullets.map((bullet, k) => (
                      <li key={k} className="flex gap-4 font-inter text-sm text-text-secondary leading-relaxed">
                        <span className="text-highlight opacity-60 mt-0.5 flex-shrink-0 font-mono text-xs">
                          {String(k + 1).padStart(2, "0")}
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
