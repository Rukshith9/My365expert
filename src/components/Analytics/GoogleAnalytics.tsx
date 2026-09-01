"use client";

import Script from "next/script";

const GA_ID = "G-FZ6PGV3HNZ";

export function trackEvent(name: string, params?: Record<string, string>) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
}

export default function GoogleAnalytics() {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_ID}', { anonymize_ip: true });`}
      </Script>
    </>
  );
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (command: string, eventName: string, params?: Record<string, string>) => void;
  }
}
