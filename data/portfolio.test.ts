import { describe, expect, it } from "vitest";

import { portfolioData } from "@/data/portfolio";

describe("portfolioData", () => {
  it("keeps navigation hrefs unique", () => {
    const hrefs = portfolioData.nav.map((item) => item.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });

  it("ensures project entries have valid media configuration", () => {
    portfolioData.projects.forEach((project) => {
      expect(project.title.length).toBeGreaterThan(0);
      expect(project.techStack.length).toBeGreaterThan(0);

      if (project.mediaType === "youtube") {
        expect(project.videoUrl).toBeTruthy();
      }

      if (project.thumbnailUrl) {
        expect(project.thumbnailUrl.startsWith("/")).toBe(true);
      }
    });
  });

  it("keeps contact links usable", () => {
    portfolioData.contact.forEach((item) => {
      expect(item.href.length).toBeGreaterThan(0);
    });
  });
});
