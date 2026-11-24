import { createFileRoute } from "@tanstack/react-router";
import SeoLandingPage, { buildSeoHead } from "@/components/SeoLandingPage";
import { seoExtraPages } from "@/lib/seo-extra-pages";

const page = seoExtraPages["/infracciones-lomas-de-zamora"];

export const Route = createFileRoute("/infracciones-lomas-de-zamora")({
  staticData: { sitemap: true },
  head: () => buildSeoHead(page),
  component: () => <SeoLandingPage page={page} />,
});
