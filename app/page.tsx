import {
  ArrowUpRight,
  BriefcaseBusiness,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MoveRight,
  Sparkles,
} from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";

import { Navigation } from "@/components/navigation";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { portfolioData } from "@/data/portfolio";

const ProjectShowcase = dynamic(
  () =>
    import("@/components/project-showcase").then(
      (module) => module.ProjectShowcase,
    ),
  {
    loading: () => (
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
          >
            <div className="aspect-[1.15] animate-pulse bg-white/[0.05]" />
            <div className="space-y-4 p-6">
              <div className="h-6 w-2/3 animate-pulse rounded-full bg-white/[0.06]" />
              <div className="h-16 animate-pulse rounded-[1rem] bg-white/[0.04]" />
            </div>
          </div>
        ))}
      </div>
    ),
  },
);

const TypingSubtitle = dynamic(
  () =>
    import("@/components/typing-subtitle").then(
      (module) => module.TypingSubtitle,
    ),
  {
    loading: () => (
      <span className="typing-accent inline-flex items-center">
        <span className="whitespace-pre text-white">{"Tech "}</span>
        <span className="hero-highlight">Enthusiast</span>
      </span>
    ),
  },
);

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[#050816] text-white">
      <div className="page-glow" />
      <div className="hero-grid" />
      <Navigation items={portfolioData.nav} />

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-12 pt-8 sm:px-6 sm:pb-14 sm:pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-10 lg:pb-20 lg:pt-12">
        <ScrollReveal direction="left" className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2.5 text-xs font-medium text-violet-200 shadow-[0_0_24px_rgba(139,92,246,0.28)] sm:px-5 sm:py-3 sm:text-base">
            <Sparkles size={16} />
            {portfolioData.title}
          </div>

          <div className="mt-8 sm:mt-10">
            <p className="font-[family:var(--font-display)] text-[2.9rem] font-semibold leading-[0.98] tracking-tight text-slate-100 sm:text-7xl lg:text-[3.5rem]">
              Senior Full Stack
            </p>
            <p className="hero-highlight pb-2 font-[family:var(--font-display)] text-[2.9rem] font-semibold leading-[0.98] tracking-tight sm:text-7xl lg:text-[3.5rem]">
              Engineer
            </p>
          </div>

          <p className="mt-6 min-h-[2.1rem] max-w-3xl text-lg font-semibold leading-tight text-white sm:min-h-[3rem] sm:text-2xl lg:min-h-[3.25rem] lg:text-[1.55rem]">
            <TypingSubtitle />
          </p>
          <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-white/60 sm:text-lg lg:text-[1.1rem] lg:leading-8">
            {portfolioData.heroBlurb}
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5 sm:gap-3">
            {["React", "TypeScript", "Spring Boot", "AWS"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-xs text-white/80 shadow-[0_0_20px_rgba(15,23,42,0.18)] backdrop-blur sm:px-5 sm:py-3 sm:text-base"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#070312] px-6 py-3.5 text-base font-semibold text-white shadow-[0_0_26px_rgba(109,40,217,0.28)] ring-1 ring-violet-500/20 transition hover:-translate-y-0.5 hover:bg-[#0d061b] sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
            >
              Projects
              <MoveRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#070312] px-6 py-3.5 text-base font-semibold text-white shadow-[0_0_26px_rgba(109,40,217,0.28)] ring-1 ring-violet-500/20 transition hover:-translate-y-0.5 hover:bg-[#0d061b] sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
            >
              Contact
              <Mail size={16} />
            </a>
          </div>

          <div className="mt-7 flex items-center gap-3 sm:mt-8 sm:gap-4">
            <a
              href="https://github.com/ujjavaldesai07"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-500/20 bg-[#0b0f1b] text-white/80 shadow-[0_0_28px_rgba(109,40,217,0.24)] transition hover:-translate-y-0.5 hover:text-white sm:h-16 sm:w-16"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ujjavaldesai"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-500/20 bg-[#0b0f1b] text-white/80 shadow-[0_0_28px_rgba(109,40,217,0.24)] transition hover:-translate-y-0.5 hover:text-white sm:h-16 sm:w-16"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delayMs={120} className="hero-panel">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_32px_rgba(109,40,217,0.16)]">
            <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/40">
              <Image
                src="/profile.jpg"
                alt="Portrait of Ujjaval Desai"
                width={1600}
                height={1200}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
              At a glance
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {portfolioData.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5"
                >
                  <p className="text-3xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section
        id="experience"
        className="deferred-section mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-20"
      >
        <ScrollReveal direction="left" className="mb-10 max-w-3xl">
          <p className="mb-3 text-lg font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Experience
          </p>
        </ScrollReveal>
        <div className="space-y-5">
          {portfolioData.experiences.map((experience, index) => (
            <ScrollReveal
              key={`${experience.company}-${experience.role}`}
              direction={index % 2 === 0 ? "left" : "right"}
              delayMs={80}
            >
              <article className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6 lg:p-8">
                <div className="grid gap-6 lg:grid-cols-[0.65fr_1.35fr]">
                  <div>
                    <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] p-3 text-cyan-300">
                      <BriefcaseBusiness size={18} />
                    </div>
                    <p className="mt-4 text-[0.92rem] font-medium uppercase tracking-[0.12em] text-white/45">
                      {experience.duration}
                    </p>
                    <h3 className="mt-3 text-[1.4rem] font-semibold tracking-tight text-white sm:text-[1.6rem] lg:text-[1.5rem]">
                      {experience.role}
                    </h3>
                    <p className="mt-2 text-base font-medium text-white/78 sm:text-[1.05rem] lg:text-[1.15rem]">
                      {experience.company}
                    </p>
                    <p className="mt-1 text-sm text-white/50 sm:text-base">
                      {experience.location}
                    </p>
                    {experience.website ? (
                      <a
                        href={experience.website}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
                      >
                        Company site
                        <ArrowUpRight size={15} />
                      </a>
                    ) : null}
                  </div>
                  <ul className="space-y-3">
                    {experience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="rounded-[1.25rem] border border-white/8 bg-slate-950/35 px-4 py-3.5 text-[0.95rem] leading-7 text-white/74 sm:px-5 sm:py-4 lg:text-[1.05rem]"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="deferred-section mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-20"
      >
        <ScrollReveal direction="right" className="mb-10 max-w-3xl">
          <p className="mb-3 text-lg font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Projects
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delayMs={80}>
          <ProjectShowcase projects={portfolioData.projects} />
        </ScrollReveal>
      </section>

      <section
        id="skills"
        className="deferred-section mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-20"
      >
        <ScrollReveal direction="left" className="mb-10 max-w-3xl">
          <p className="mb-3 text-lg font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Skills
          </p>
        </ScrollReveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {portfolioData.skills.map((group, index) => (
            <ScrollReveal
              key={group.title}
              direction={index % 2 === 0 ? "left" : "right"}
              delayMs={index * 70}
              className="h-full"
            >
              <div className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-xl font-semibold text-white">
                  {group.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2 content-start">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70 sm:text-base"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section
        id="certifications"
        className="deferred-section mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-20"
      >
        <ScrollReveal direction="left" className="mb-10 max-w-3xl">
          <p className="mb-3 text-lg font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Certifications
          </p>
        </ScrollReveal>
        <div className="space-y-4">
          {portfolioData.certifications.map((item, index) => (
            <ScrollReveal
              key={item.title}
              direction={index % 2 === 0 ? "right" : "left"}
              delayMs={index * 70}
            >
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/35 p-6">
                <p className="mt-4 text-[0.92rem] font-medium uppercase tracking-[0.12em] text-white/45">
                  {item.date}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-lg text-white/45">{item.issuer}</p>
                <p className="mt-4 text-base leading-7 text-white/65">
                  {item.summary}
                </p>
                {item.credentialUrl ? (
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-300 transition hover:text-cyan-200"
                  >
                    View credential
                    <ArrowUpRight size={15} />
                  </a>
                ) : null}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section
        id="education"
        className="deferred-section mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-20"
      >
        <ScrollReveal direction="right" className="mb-10 max-w-3xl">
          <p className="mb-3 text-lg font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Education
          </p>
        </ScrollReveal>
        {portfolioData.education.map((item) => (
          <ScrollReveal key={item.institution} direction="left">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/35 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] p-3 text-cyan-300">
                    <GraduationCap size={18} />
                  </div>
                  <p className="mt-4 text-[0.92rem] font-medium uppercase tracking-[0.12em] text-white/45">
                    {item.duration}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">
                    {item.institution}
                  </h3>
                  <p className="mt-2 text-white/70">{item.degree}</p>
                  <p className="mt-3 text-base text-white/60">{item.detail}</p>
                </div>
              </div>
              {item.website ? (
                <a
                  href={item.website}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-300 transition hover:text-cyan-200"
                >
                  Visit institution
                  <ArrowUpRight size={15} />
                </a>
              ) : null}
            </div>
          </ScrollReveal>
        ))}
      </section>

      <section
        id="contact"
        className="deferred-section mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-20"
      >
        <ScrollReveal direction="up">
          <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-cyan-400/12 via-white/[0.03] to-white/[0.01] p-8 lg:p-10">
            <SectionHeading
              eyebrow="Contact"
              title="Let’s build something useful."
              description="If you’re hiring, collaborating, or exploring a product idea, I’d be glad to connect."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {portfolioData.contact.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={
                    item.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    item.href.startsWith("mailto:") ? undefined : "noreferrer"
                  }
                  className="rounded-[1.6rem] border border-white/10 bg-slate-950/40 p-6 transition hover:border-white/20 hover:bg-slate-950/55"
                >
                  <p className="text-sm uppercase tracking-[0.26em] text-cyan-300">
                    {item.label}
                  </p>
                  <p className="mt-4 text-base text-white/75">{item.value}</p>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <footer className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 text-sm text-white/40 lg:px-10">
        <p>&copy; 2026 Ujjaval | Portfolio. All rights reserved.</p>
        <a href="#top" className="transition hover:text-white/70">
          Back to top
        </a>
      </footer>
    </main>
  );
}
