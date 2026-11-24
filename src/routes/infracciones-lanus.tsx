import { createFileRoute } from "@tanstack/react-router";
import SeoLandingPage, { buildSeoHead } from "@/components/SeoLandingPage";
import { seoPages } from "@/lib/seo-pages";

const page = seoPages["/infracciones-lanus"];

export const Route = createFileRoute("/infracciones-lanus")({
  staticData: { sitemap: true },
  head: () => buildSeoHead(page),
  component: () => <SeoLandingPage page={page} />,
});
