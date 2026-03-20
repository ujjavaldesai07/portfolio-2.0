"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Github, Play, X } from "lucide-react";

import type { ProjectItem } from "@/types/portfolio";

type ProjectShowcaseProps = {
  projects: ProjectItem[];
};

function getYouTubeEmbedUrl(url?: string) {
  if (!url) return undefined;

  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed/${parsed.pathname.replace("/", "")}?mute=1`;
    }

    if (parsed.hostname.includes("youtube.com")) {
      const videoId = parsed.searchParams.get("v");
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?mute=1`;
      }
    }
  } catch {
    return undefined;
  }

  return undefined;
}

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
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/78 via-slate-950/28 to-slate-950/10" />
                </>
              ) : null}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.5),transparent_35%)]" />
              <div className="absolute inset-x-6 top-6 flex items-center justify-between">
                <span className="rounded-full border border-white/20 bg-slate-950/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full border border-white/25 bg-slate-950/25 p-3 text-white backdrop-blur">
                  {project.mediaType === "youtube" ? <Play size={18} /> : <ArrowUpRight size={18} />}
                </span>
              </div>
              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
                  {project.mediaType === "youtube" ? "Video walkthrough" : "Project overview"}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/88 p-4 backdrop-blur-md">
          <div className="relative max-h-[92vh] w-full max-w-5xl overflow-auto rounded-[2rem] border border-white/10 bg-[#0b1020] shadow-2xl shadow-black/60">
            <button
              type="button"
              aria-label="Close project details"
              onClick={() => setActiveProject(null)}
              className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="flex items-center justify-start overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]">
                {activeProject.mediaType === "youtube" && getYouTubeEmbedUrl(activeProject.videoUrl) ? (
                  <div className="aspect-video w-full">
                    <iframe
                      className="h-full w-full"
                      src={getYouTubeEmbedUrl(activeProject.videoUrl)}
                      title={`${activeProject.title} video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : activeProject.mediaType === "image" && activeProject.mediaUrl ? (
                  <Image
                    src={activeProject.mediaUrl}
                    alt={`${activeProject.title} preview`}
                    width={1600}
                    height={900}
                    unoptimized
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div
                    className={`flex aspect-video items-end bg-gradient-to-br ${activeProject.accent} p-8`}
                  >
                    <div className="rounded-[1.5rem] border border-black/10 bg-white/25 px-5 py-4 backdrop-blur">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-950/70">
                        Portfolio placeholder
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-slate-950">{activeProject.title}</h3>
                      <p className="mt-2 max-w-md text-sm leading-6 text-slate-950/80">
                        Media-ready card with a designed fallback for projects whose old site assets were not directly recoverable.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                    Project details
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold text-white">{activeProject.title}</h3>
                  <p className="mt-4 text-base leading-7 text-white/70">{activeProject.description}</p>
                </div>

                <div className="mt-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/45">
                    Technology used
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {activeProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/75"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {activeProject.githubUrl ? (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#070312] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_26px_rgba(109,40,217,0.28)] ring-1 ring-violet-500/20 transition hover:-translate-y-0.5 hover:bg-[#0d061b]"
                    >
                      <Github size={16} />
                      View source
                    </a>
                  ) : null}
                  {activeProject.videoUrl ? (
                    <a
                      href={activeProject.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#070312] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_26px_rgba(109,40,217,0.28)] ring-1 ring-violet-500/20 transition hover:-translate-y-0.5 hover:bg-[#0d061b]"
                    >
                      <Play size={16} />
                      Open video
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
