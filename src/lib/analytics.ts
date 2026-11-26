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

/**
 * GTM Consent Mode utiliza el comando gtag (objeto IArguments) en dataLayer.
 * No se registran valores personales: solo cambia el permiso de medición.
 * Los tags configurados dentro de GTM también deben respetar este consentimiento.
 */
export function updateAnalyticsConsent(consent: "granted" | "denied") {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer?.push(arguments);
  }

  gtag("consent", "update", {
    analytics_storage: consent,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}
