import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Navigation } from "@/components/navigation";

const items = [
  { label: "About", href: "#top" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

describe("Navigation", () => {
  it("renders the brand name and desktop navigation links", () => {
    render(<Navigation items={items} />);

    expect(
      screen.getByRole("link", { name: "Ujjaval Desai" }),
    ).toHaveAttribute("href", "#top");

    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute(
      "href",
      "#projects",
    );
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "#contact",
    );
  });

  it("opens the mobile menu and renders its links", () => {
    render(<Navigation items={items} />);

    const menuButton = screen.getByRole("button", {
      name: "Toggle navigation menu",
    });

    expect(menuButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(menuButton);

    expect(menuButton).toHaveAttribute("aria-expanded", "true");
    expect(screen.getAllByRole("link", { name: "Projects" })).toHaveLength(2);
    expect(screen.getAllByRole("link", { name: "Contact" })).toHaveLength(2);
  });
});
