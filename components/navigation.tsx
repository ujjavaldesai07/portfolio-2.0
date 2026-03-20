"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, Moon, MoveUpRight, Sun } from "lucide-react";

import type { NavItem } from "@/types/portfolio";

type NavigationProps = {
  items: NavItem[];
};

export function Navigation({ items }: NavigationProps) {
  const [activeHref, setActiveHref] = useState("#top");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "light") {
      window.requestAnimationFrame(() => {
        setTheme("light");
      });
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

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

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;

      if (mobileMenuRef.current && target && !mobileMenuRef.current.contains(target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(6,8,18,0.72)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-10">
        <a
          href="#top"
          className="brand-link text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300 transition hero-highlight sm:text-base sm:tracking-[0.32em]"
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
          <button
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            onClick={toggleTheme}
            className="theme-toggle inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            <span>{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
        </nav>
        <div ref={mobileMenuRef} className="relative md:hidden">
          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="mobile-menu-trigger flex cursor-pointer list-none items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-white/80"
          >
            <Menu size={16} />
            Menu
          </button>
          {mobileMenuOpen ? (
            <div className="mobile-menu-panel absolute right-0 mt-3 w-[min(18rem,calc(100vw-2.5rem))] rounded-3xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl shadow-black/30">
              <button
                type="button"
                onClick={toggleTheme}
                className="theme-toggle mb-2 flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-sm font-semibold transition"
              >
                <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
                {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
              </button>
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setActiveHref(item.href);
                    setMobileMenuOpen(false);
                  }}
                  className={`nav-link flex items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold transition hover:bg-white/5 ${activeHref === item.href ? "is-active" : ""}`}
                >
                  <span className="nav-link-label">{item.label}</span>
                  <MoveUpRight size={14} />
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
