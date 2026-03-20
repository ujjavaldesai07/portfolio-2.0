import { act, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { TypingSubtitle } from "@/components/typing-subtitle";

describe("TypingSubtitle", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it("renders the fixed Tech prefix", () => {
    const { container } = render(<TypingSubtitle />);

    expect(container.textContent).toContain("Tech");
  });

  it("starts typing the rotating phrase after the timer advances", async () => {
    const { container } = render(<TypingSubtitle />);

    await act(async () => {
      await vi.advanceTimersByTimeAsync(200);
    });

    expect(container.textContent).toContain("Tech E");
  });
});
