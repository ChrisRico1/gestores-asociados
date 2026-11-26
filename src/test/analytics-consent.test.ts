import { beforeEach, describe, expect, it } from "vitest";
import { trackAnalyticsEvent, updateAnalyticsConsent } from "@/lib/analytics";

describe("consentimiento de analítica", () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.dataLayer = [];
  });

  it("no publica eventos sin consentimiento", () => {
    trackAnalyticsEvent("whatsapp_click", { page_path: "/" });
    expect(window.dataLayer).toEqual([]);
  });

  it("no publica eventos cuando se rechaza", () => {
    window.localStorage.setItem("ga4-consent", "denied");
    trackAnalyticsEvent("lead_chat_start", { lead_topic: "multas" });
    expect(window.dataLayer).toEqual([]);
  });

  it("publica eventos sin datos personales cuando se acepta", () => {
    window.localStorage.setItem("ga4-consent", "granted");
    trackAnalyticsEvent("whatsapp_click", { page_path: "/contacto" });
    expect(window.dataLayer).toEqual([{ event: "whatsapp_click", page_path: "/contacto" }]);
  });

  it("envía el comando de consentimiento con formato gtag", () => {
    updateAnalyticsConsent("denied");
    const command = window.dataLayer?.[0] as IArguments;
    expect(Array.from(command)).toEqual([
      "consent",
      "update",
      {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      },
    ]);
  });
});
