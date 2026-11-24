export const GA_MEASUREMENT_ID = "G-BG6KDDYZ24";

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: Gtag;
    gtagConfigured?: boolean;
  }
}

export function trackAnalyticsEvent(
  eventName: string,
  parameters: Record<string, string | number | boolean> = {},
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  try {
    if (window.localStorage.getItem("ga4-consent") !== "granted") return;
  } catch {
    return;
  }
  window.gtag("event", eventName, parameters);
}
