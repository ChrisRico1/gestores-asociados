import { createFileRoute } from "@tanstack/react-router";
import SeoLandingPage, { buildSeoHead } from "@/components/SeoLandingPage";
import { seoExtraPages } from "@/lib/seo-extra-pages";

const page = seoExtraPages["/asesores"];

export const Route = createFileRoute("/asesores")({
  staticData: { sitemap: true },
  head: () => buildSeoHead(page),
  component: () => <SeoLandingPage page={page} />,
});
