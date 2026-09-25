"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AlbumCard from "./AlbumCard";
import ProjectDetailScreen from "@/components/ui/ProjectDetailScreen";
import { PROJECTS } from "@/data/portfolio";

export default function ProjectCluster() {
  const [openId, setOpenId] = useState<string | null>(null);
  const visibleProjects = PROJECTS.filter((p) => !p.hidden);
  const activeProject = visibleProjects.find((p) => p.id === openId);

  return (
    <div className="relative pt-16 pb-24">
      {/*
        Mobile: a static 2-column grid (no scrolling) — a lone last card in
        an odd-length list spans both columns so it sits centered instead of
        stranded on the left.
        Desktop (md+): single row, never wraps — scrolls horizontally if it
        doesn't fit. overflow-x-auto forces overflow-y to auto too (CSS spec
        quirk), so generous vertical padding here keeps the hover lift/shadow
        from getting clipped at the scroll container's edges.
      */}
      <div className="md:overflow-x-auto py-8">
        <div className="grid grid-cols-2 justify-items-center gap-x-3 gap-y-10 px-6 max-w-5xl mx-auto md:flex md:flex-nowrap md:items-center md:justify-center md:gap-x-6 md:w-full">
          {visibleProjects.map((project, i) => {
            const isLastOdd = visibleProjects.length % 2 === 1 && i === visibleProjects.length - 1;
            return (
              <div key={project.id} className={isLastOdd ? "col-span-2" : undefined}>
                <AlbumCard project={project} index={i} onOpen={() => setOpenId(project.id)} />
              </div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectDetailScreen project={activeProject} onClose={() => setOpenId(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
