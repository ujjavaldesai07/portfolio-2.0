import type { Metadata } from "next";

import { GoogleAnalytics } from "@/components/google-analytics";

import "./globals.css";

export const metadata: Metadata = {
  title: "Ujjaval Desai | Senior Full Stack Engineer",
  description:
    "Portfolio of Ujjaval Desai, a Senior Full Stack Engineer building cloud-native systems and polished product experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="en"
      className="scroll-smooth"
      data-theme="dark"
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <body>
        {children}
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
