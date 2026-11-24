import { createFileRoute } from "@tanstack/react-router";
import SeoLandingPage, { buildSeoHead } from "@/components/SeoLandingPage";
import { seoPages } from "@/lib/seo-pages";

const page = seoPages["/informes-de-dominio"];

export const Route = createFileRoute("/informes-de-dominio")({
  staticData: { sitemap: true },
  head: () => buildSeoHead(page),
  component: () => <SeoLandingPage page={page} />,
});
