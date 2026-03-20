import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Navigation } from "@/components/navigation";

const items = [
  { label: "About", href: "#top" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

describe("Navigation", () => {
  it("renders the brand name and navigation links", () => {
    render(<Navigation items={items} brandName="Ujjaval Desai" />);

    expect(
      screen.getByRole("link", { name: "Ujjaval Desai" }),
    ).toHaveAttribute("href", "#top");

    const projectLinks = screen.getAllByRole("link", { name: "Projects" });
    const contactLinks = screen.getAllByRole("link", { name: "Contact" });

    expect(projectLinks).toHaveLength(2);
    projectLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "#projects");
    });

    expect(contactLinks).toHaveLength(2);
    contactLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "#contact");
    });
  });

  it("renders the mobile menu trigger", () => {
    render(<Navigation items={items} brandName="Ujjaval Desai" />);

    expect(screen.getAllByText("Menu").length).toBeGreaterThan(0);
  });
});
