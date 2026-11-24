import { createFileRoute } from "@tanstack/react-router";
import SeoLandingPage, { buildSeoHead } from "@/components/SeoLandingPage";
import { seoPages } from "@/lib/seo-pages";

const page = seoPages["/servicios-para-mandatarios"];

export const Route = createFileRoute("/servicios-para-mandatarios")({
  staticData: { sitemap: true },
  head: () => buildSeoHead(page),
  component: () => <SeoLandingPage page={page} />,
});
