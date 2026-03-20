import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SectionHeading } from "@/components/section-heading";

describe("SectionHeading", () => {
  it("renders eyebrow, title, and description when provided", () => {
    render(
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="A set of recent builds."
      />,
    );

    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Selected work", level: 2 }),
    ).toBeInTheDocument();
    expect(screen.getByText("A set of recent builds.")).toBeInTheDocument();
  });

  it("uses an h2 for the main section title", () => {
    render(
      <SectionHeading
        eyebrow="Contact"
        title="Let's connect"
        description="Reach out anytime."
      />,
    );

    expect(
      screen.getByRole("heading", { name: "Let's connect", level: 2 }),
    ).toBeInTheDocument();
  });
});
