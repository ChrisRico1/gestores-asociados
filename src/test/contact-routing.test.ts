import { describe, expect, it } from "vitest";
import { advisorForPage, whatsappLink } from "@/lib/contact";

describe("derivación comercial", () => {
  it("deriva multas e informes a Christian", () => {
    expect(advisorForPage("/reduccion-de-multas")).toBe("Christian");
    expect(advisorForPage("/informes-de-dominio")).toBe("Christian");
  });
  it("deriva los trámites registrales y agencias a Florencia", () => {
    expect(advisorForPage("/transferencias-automotor")).toBe("Florencia");
    expect(advisorForPage("/sellado-arba")).toBe("Florencia");
    expect(advisorForPage("/gestoria-para-agencias")).toBe("Florencia");
  });
  it("deriva contacto general a Natalia", () => {
    expect(advisorForPage("/contacto")).toBe("Natalia");
  });
  it("genera enlaces con mensaje codificado sin enviarlo", () => {
    const url = new URL(whatsappLink("Florencia", "Consulta de transferencia y documentación"));
    expect(url.host).toBe("wa.me");
    expect(url.pathname).toBe("/5491127273404");
    expect(url.searchParams.get("text")).toBe("Consulta de transferencia y documentación");
  });
});
