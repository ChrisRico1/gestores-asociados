import { describe, expect, it } from "vitest";
import { buildSeoHead } from "@/components/SeoLandingPage";
import { seoPages } from "@/lib/seo-pages";
import { seoExtraPages } from "@/lib/seo-extra-pages";

describe("SEO de páginas temáticas", () => {
  const pages = [...Object.values(seoPages), ...Object.values(seoExtraPages)];
  it("mantiene 20 rutas distintas con títulos y descripciones", () => {
    expect(pages).toHaveLength(20);
    expect(new Set(pages.map((page) => page.path)).size).toBe(pages.length);
    for (const page of pages) {
      expect(page.title.length).toBeGreaterThan(10);
      expect(page.description.length).toBeGreaterThan(40);
    }
  });
  it("genera canonical propio en cada página", () => {
    for (const page of pages) {
      const head = buildSeoHead(page);
      expect(head.links).toEqual([{ rel: "canonical", href: `https://gestores-asociados.lovable.app${page.path}` }]);
      expect(head.meta.filter((item) => "name" in item && item.name === "robots")).toHaveLength(1);
    }
  });
  it("permite desindexar la página de blog sin alterar las otras", () => {
    const blog = buildSeoHead(seoExtraPages["/blog"], { indexable: false });
    const info = blog.meta.find((item) => "name" in item && item.name === "robots");
    expect(info).toEqual({ name: "robots", content: "noindex,follow" });
    const service = buildSeoHead(seoPages["/reduccion-de-multas"]);
    expect(service.meta.some((item) => "name" in item && item.name === "robots" && item.content.startsWith("index"))).toBe(true);
  });
});
