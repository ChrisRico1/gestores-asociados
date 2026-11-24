import { createFileRoute } from "@tanstack/react-router";
import SeoLandingPage, { buildSeoHead } from "@/components/SeoLandingPage";
import { seoPages } from "@/lib/seo-pages";

const page = seoPages["/gestoria-automotor-lanus"];

export const Route = createFileRoute("/gestoria-automotor-lanus")({
  staticData: { sitemap: true },
  head: () => buildSeoHead(page),
  component: () => <SeoLandingPage page={page} />,
});
