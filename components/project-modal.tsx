"use client";

import Image from "next/image";
import { Github, Play, X } from "lucide-react";

import type { ProjectItem } from "@/types/portfolio";

type ProjectModalProps = {
  project: ProjectItem;
  onClose: () => void;
};

function getYouTubeEmbedUrl(url?: string) {
  if (!url) return undefined;

  const query = "mute=1&playsinline=1&rel=0&modestbranding=1";

  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed/${parsed.pathname.replace("/", "")}?${query}`;
    }

    if (parsed.hostname.includes("youtube.com")) {
      const videoId = parsed.searchParams.get("v");
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?${query}`;
      }
    }
  } catch {
    return undefined;
  }

  return undefined;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Close project details"
        onClick={onClose}
        className="absolute inset-0 h-full w-full bg-slate-950/88 backdrop-blur-md"
      />
      <div
        className="relative z-10 flex min-h-full items-center justify-center overflow-y-auto p-4 sm:p-6 lg:p-8"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-6xl rounded-[1.6rem] border border-white/10 bg-[#0b1020] shadow-2xl shadow-black/60 sm:max-h-[92vh] sm:overflow-auto sm:rounded-[2rem]"
          onClick={(event) => event.stopPropagation()}
        >
        <button
          type="button"
          aria-label="Close project details"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-slate-950/70 p-2 text-white/80 transition hover:bg-slate-900 hover:text-white"
        >
          <X size={18} />
        </button>

          <div className="grid items-start gap-6 p-4 pt-14 sm:p-6 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:p-8 lg:pt-8">
            <div className="relative z-10 flex items-start justify-start overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]">
            {project.mediaType === "youtube" && getYouTubeEmbedUrl(project.videoUrl) ? (
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={getYouTubeEmbedUrl(project.videoUrl)}
                  title={`${project.title} video`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : project.mediaType === "image" && project.mediaUrl ? (
              <Image
                src={project.mediaUrl}
                alt={`${project.title} preview`}
                width={1600}
                height={900}
                quality={72}
                sizes="(max-width: 640px) 100vw, (max-width: 1200px) 70vw, 55vw"
                className="h-full w-full object-cover"
              />
            ) : (
              <div
                className={`flex aspect-video items-end bg-gradient-to-br ${project.accent} p-8`}
              >
                <div className="rounded-[1.5rem] border border-black/10 bg-white/25 px-5 py-4 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-950/70">
                    Portfolio placeholder
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-950/80">
                    Media-ready card with a designed fallback for projects whose
                    old site assets were not directly recoverable.
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
                <h3 className="mt-3 pr-12 text-2xl font-semibold text-white sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-white/70">
                  {project.description}
                </p>
              </div>

              <div className="mt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/45">
                  Technology used
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/75"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#070312] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_26px_rgba(109,40,217,0.28)] ring-1 ring-violet-500/20 transition hover:-translate-y-0.5 hover:bg-[#0d061b] sm:w-auto"
                  >
                    <Github size={16} />
                    View source
                  </a>
                ) : null}
                {project.videoUrl ? (
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#070312] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_26px_rgba(109,40,217,0.28)] ring-1 ring-violet-500/20 transition hover:-translate-y-0.5 hover:bg-[#0d061b] sm:w-auto"
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
    </div>
  );
}
