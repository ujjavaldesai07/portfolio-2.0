import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Ujjaval Desai | Senior Full Stack Engineer",
  description:
    "Portfolio of Ujjaval Desai, a Senior Full Stack Engineer building cloud-native systems and polished product experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      data-theme="dark"
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
