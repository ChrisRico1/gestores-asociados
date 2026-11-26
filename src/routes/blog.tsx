import { createFileRoute } from "@tanstack/react-router";
import SeoLandingPage, { buildSeoHead } from "@/components/SeoLandingPage";
import { seoExtraPages } from "@/lib/seo-extra-pages";

const page = seoExtraPages["/blog"];

export const Route = createFileRoute("/blog")({
  // Todavía no existe una colección editorial de artículos terminados.
  staticData: { sitemap: false },
  head: () => buildSeoHead(page, { indexable: false }),
  component: () => <SeoLandingPage page={page} />,
});
