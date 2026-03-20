"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type GoogleAnalyticsProps = {
  gaId: string;
};

export function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.gtag) {
      return;
    }

    const search = window.location.search;
    const pagePath = search ? `${pathname}?${search}` : pathname;

    window.gtag("config", gaId, {
      page_path: pagePath,
    });
  }, [gaId, pathname]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
