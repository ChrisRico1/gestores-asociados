export const GTM_CONTAINER_ID = "GTM-554Z7LXN";
export const GA_MEASUREMENT_ID = "G-BG6KDDYZ24";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | IArguments | unknown[]>;
  }
}

export function trackAnalyticsEvent(
  eventName: string,
  parameters: Record<string, string | number | boolean> = {},
) {
  if (typeof window === "undefined") return;
  try {
    if (window.localStorage.getItem("ga4-consent") !== "granted") return;
  } catch {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...parameters });
}
