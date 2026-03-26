"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { PROJECTS } from "@/data/portfolio";

const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <SectionWrapper id="projects">
      <p className="font-mono text-highlight text-xs tracking-[0.2em] uppercase mb-12">
        Projects
      </p>

      <div>
        {PROJECTS.map((project, i) => {
          const isOpen = openId === project.id;
          return (
            <div key={project.id} className="border-t border-border last:border-b">
              {/* Row header — clickable */}
              <button
                onClick={() => toggle(project.id)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-xs text-text-secondary w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className={`font-grotesk font-semibold text-lg transition-colors duration-200 ${
                      isOpen ? "text-highlight" : "text-text-primary group-hover:text-highlight"
                    }`}
                  >
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center gap-6 shrink-0 ml-4">
                  {/* Stack preview — hidden when open */}
                  <div className="hidden sm:flex gap-2">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span key={tech} className="font-mono text-xs text-text-secondary opacity-60">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="font-mono text-xs text-text-secondary opacity-40">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Chevron */}
                  <motion.svg
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"
                    className="text-text-secondary shrink-0"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </motion.svg>
                </div>
              </button>

              {/* Expandable content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-12 grid md:grid-cols-[1fr_auto] gap-8 items-start">
                      {/* Description + stack */}
                      <div>
                        <p className="font-inter text-text-secondary text-sm leading-relaxed mb-5">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="font-mono text-xs px-2 py-1 border border-border text-text-secondary bg-bg-secondary rounded-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex flex-row md:flex-col gap-4 shrink-0">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-text-primary transition-colors duration-200 border border-border hover:border-text-secondary px-3 py-2 rounded-sm"
                        >
                          <GithubIcon /> GitHub
                        </a>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-text-primary transition-colors duration-200 border border-border hover:border-text-secondary px-3 py-2 rounded-sm"
                        >
                          <ExternalIcon /> Devpost
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
