import { describe, expect, it } from "vitest";
import { ADVISORS, BUSINESS, COVERAGE_AREAS, FAQS, REVIEWS, SERVICES } from "@/lib/mcp/business";
import { ADVISOR_PHONES } from "@/lib/contact";

describe("fuente pública de negocio", () => {
  it("mantiene un enlace válido por cada asesor", () => {
    expect(ADVISORS).toHaveLength(3);
    for (const advisor of ADVISORS) {
      const phone = ADVISOR_PHONES[advisor.name];
      expect(new URL(advisor.whatsapp).pathname).toBe(`/${phone}`);
    }
  });
  it("mantiene catálogos consistentes para home y MCP", () => {
    expect(SERVICES.length).toBeGreaterThan(0);
    expect(COVERAGE_AREAS.length).toBeGreaterThan(0);
    expect(REVIEWS.length).toBeGreaterThan(0);
    expect(FAQS.length).toBeGreaterThan(0);
    expect(BUSINESS.socials.instagram.startsWith("https://")).toBe(true);
  });
  it("no promete reducciones garantizadas en respuestas de infracciones", () => {
    const faq = FAQS.find(({ question }) => question.includes("infracciones"));
    expect(faq?.answer).toContain("no se garantizan reducciones");
  });
});
