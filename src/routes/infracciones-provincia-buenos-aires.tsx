import { createFileRoute } from "@tanstack/react-router";
import SeoLandingPage, { buildSeoHead } from "@/components/SeoLandingPage";
import { seoExtraPages } from "@/lib/seo-extra-pages";

const page = seoExtraPages["/infracciones-provincia-buenos-aires"];

export const Route = createFileRoute("/infracciones-provincia-buenos-aires")({
  staticData: { sitemap: true },
  head: () => buildSeoHead(page),
  component: () => <SeoLandingPage page={page} />,
});
