"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { PERSONAL_INFO, BIO } from "@/data/portfolio";

export default function About() {
  return (
    <SectionWrapper id="about">
      {/* Section label + rule */}
      <div className="flex items-center gap-4 mb-16">
        <p className="font-mono text-highlight text-xs tracking-[0.2em] uppercase shrink-0">
          About
        </p>
        <div className="flex-1 h-px" style={{ background: "var(--border-color)" }} />
      </div>

      <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">

        {/* Left — meta card */}
        <div>
          {/* Profile image */}
          <div className="relative w-28 h-28 rounded-full overflow-hidden mb-10">
            <Image
              src="/assets/profile.png"
              alt="Krish Kaushik"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col gap-3 border-t border-border pt-6">
            {[
              PERSONAL_INFO.degree,
              `Minor - ${PERSONAL_INFO.minor}`,
              PERSONAL_INFO.university,
              `Class of ${PERSONAL_INFO.gradYear}`,
            ].map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="font-inter text-text-secondary text-sm leading-relaxed"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Right — bio */}
        <div>
          <h2
            className="font-grotesk font-bold text-text-primary leading-tight mb-8"
            style={{ fontSize: "clamp(1.8rem, 3.8vw, 2.6rem)", letterSpacing: "-0.02em" }}
          >
            Not just a student.
          </h2>
          <div className="flex flex-col gap-5">
            {BIO.split("\n\n").map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-inter text-text-secondary leading-[1.8] text-base"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
