"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";

import type { ProjectItem } from "@/types/portfolio";

type ProjectShowcaseProps = {
  projects: ProjectItem[];
};

const ProjectModal = dynamic(
  () =>
    import("@/components/project-modal").then((module) => module.ProjectModal),
  {
    loading: () => (
      <div className="fixed inset-0 z-50 bg-slate-950/88 sm:backdrop-blur-md" />
    ),
  },
);

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (!activeProject) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeProject]);

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <button
            key={project.title}
            type="button"
            onClick={() => setActiveProject(project)}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] text-left transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
          >
            <div
              className={`relative flex aspect-[1.15] items-end overflow-hidden bg-gradient-to-br ${project.accent} p-6`}
            >
              {project.thumbnailUrl ? (
                <>
                  <Image
                    src={project.thumbnailUrl}
                    alt={`${project.title} thumbnail`}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    quality={68}
                    className={`object-cover transition duration-500 group-hover:scale-[1.02] ${project.thumbnailClassName ?? "object-top"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/58 via-slate-950/18 to-transparent" />
                </>
              ) : null}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.18),transparent_30%)]" />
              <div className="absolute inset-x-6 top-6 flex items-center justify-between">
                <span className="project-card-badge rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] backdrop-blur">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="project-card-action rounded-full border p-3 backdrop-blur">
                  {project.mediaType === "youtube" ? <Play size={18} /> : <ArrowUpRight size={18} />}
                </span>
              </div>
              <div className="project-card-title relative z-10 rounded-[1.25rem] px-4 py-3 backdrop-blur-sm">
                <p className="project-card-kicker text-xs font-semibold uppercase tracking-[0.28em]">
                  {project.mediaType === "youtube" ? "Video walkthrough" : "Project overview"}
                </p>
                <h3 className="project-card-heading mt-2 text-2xl font-semibold">{project.title}</h3>
              </div>
            </div>
            <div className="space-y-4 p-6">
              <p className="text-base leading-7 text-white/70">{project.summary}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/65"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      {activeProject ? (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      ) : null}
    </>
  );
}
