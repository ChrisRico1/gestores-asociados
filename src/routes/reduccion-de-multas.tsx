import { createFileRoute } from "@tanstack/react-router";
import SeoLandingPage, { buildSeoHead } from "@/components/SeoLandingPage";
import { seoPages } from "@/lib/seo-pages";

const page = seoPages["/reduccion-de-multas"];

export const Route = createFileRoute("/reduccion-de-multas")({
  staticData: { sitemap: true },
  head: () => buildSeoHead(page),
  component: () => <SeoLandingPage page={page} />,
});
