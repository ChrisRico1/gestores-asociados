import { createFileRoute } from "@tanstack/react-router";
import SeoLandingPage, { buildSeoHead } from "@/components/SeoLandingPage";
import { seoExtraPages } from "@/lib/seo-extra-pages";

const page = seoExtraPages["/descargos-de-infracciones"];

export const Route = createFileRoute("/descargos-de-infracciones")({
  staticData: { sitemap: true },
  head: () => buildSeoHead(page),
  component: () => <SeoLandingPage page={page} />,
});
