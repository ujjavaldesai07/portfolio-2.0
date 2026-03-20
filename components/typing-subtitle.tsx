"use client";

import { useEffect, useState } from "react";

const phrases = ["Enthusiast", "Innovator"];

export function TypingSubtitle() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let pauseTimeout: number | undefined;

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentPhrase.slice(0, displayedText.length + 1);
        setDisplayedText(nextText);

        if (nextText === currentPhrase) {
          pauseTimeout = window.setTimeout(() => setIsDeleting(true), 1400);
        }
      } else {
        const nextText = currentPhrase.slice(
          0,
          Math.max(displayedText.length - 1, 0),
        );
        setDisplayedText(nextText);

        if (nextText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((current) => (current + 1) % phrases.length);
        }
      }
    }, isDeleting ? 90 : 160);

    return () => {
      window.clearTimeout(timeout);
      if (pauseTimeout) {
        window.clearTimeout(pauseTimeout);
      }
    };
  }, [displayedText, isDeleting, phraseIndex]);

  return (
    <span className="typing-accent inline-flex items-center">
      <span className="text-white whitespace-pre">{"Tech "}</span>
      <span className="hero-highlight">{displayedText}</span>
      <span aria-hidden="true" className="typing-cursor" />
    </span>
  );
}
