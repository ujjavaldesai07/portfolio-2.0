"use client";

import { useEffect, useState } from "react";
import { Menu, MoveUpRight } from "lucide-react";

import type { NavItem } from "@/types/portfolio";

type NavigationProps = {
  items: NavItem[];
};

export function Navigation({ items }: NavigationProps) {
  const [activeHref, setActiveHref] = useState("#top");

  useEffect(() => {
    const observedSections = items
      .filter((item) => item.href !== "#top")
      .map((item) => ({
        href: item.href,
        element: document.querySelector<HTMLElement>(item.href),
      }))
      .filter(
        (section): section is { href: string; element: HTMLElement } =>
          section.element !== null,
      );

    if (observedSections.length === 0) {
      return;
    }

    const visibilityMap = new Map<string, number>();

    const updateActiveFromVisible = () => {
      if (window.scrollY < 120) {
        setActiveHref("#top");
        return;
      }

      let nextHref = "";
      let highestRatio = 0;

      for (const [href, ratio] of visibilityMap.entries()) {
        if (ratio > highestRatio) {
          highestRatio = ratio;
          nextHref = href;
        }
      }

      if (nextHref) {
        setActiveHref(nextHref);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const href = `#${entry.target.id}`;

          if (entry.isIntersecting) {
            visibilityMap.set(href, entry.intersectionRatio);
          } else {
            visibilityMap.delete(href);
          }
        });

        updateActiveFromVisible();
      },
      {
        rootMargin: "-18% 0px -48% 0px",
        threshold: [0.15, 0.3, 0.45, 0.6, 0.75],
      },
    );

    const onScrollNearTop = () => {
      if (window.scrollY < 120) {
        setActiveHref("#top");
      }
    };

    observedSections.forEach((section) => observer.observe(section.element));
    onScrollNearTop();
    window.addEventListener("scroll", onScrollNearTop, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScrollNearTop);
    };
  }, [items]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(6,8,18,0.72)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#top"
          className="brand-link text-base font-semibold uppercase tracking-[0.32em] text-cyan-300 transition hero-highlight"
        >
          Ujjaval Desai
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setActiveHref(item.href)}
              className={`nav-link text-base font-semibold transition ${activeHref === item.href ? "is-active" : ""}`}
            >
              <span className="nav-link-label transition duration-200">
                {item.label}
              </span>
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
              <Menu size={16} />
              Menu
            </summary>
            <div className="absolute right-0 mt-3 w-52 rounded-3xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl shadow-black/30">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setActiveHref(item.href)}
                  className={`nav-link flex items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold transition hover:bg-white/5 ${activeHref === item.href ? "is-active" : ""}`}
                >
                  <span className="nav-link-label">{item.label}</span>
                  <MoveUpRight size={14} />
                </a>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
