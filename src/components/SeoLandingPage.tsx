import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, MessageCircle } from "lucide-react";
import type { SeoPageContent } from "@/lib/seo-pages";

const SITE_URL = "https://gestores-asociados.lovable.app";

const pageLabels: Record<string, string> = {
  "/reduccion-de-multas": "Reducción de multas",
  "/descargos-de-fotomultas": "Descargos de fotomultas",
  "/gestoria-automotor": "Gestoría automotor",
  "/gestoria-automotor-lanus": "Gestoría en Lanús",
  "/infracciones-lanus": "Infracciones en Lanús",
  "/transferencias-automotor": "Transferencias",
  "/informes-de-dominio": "Informes de dominio",
  "/preguntas-frecuentes": "Preguntas frecuentes",
  "/gestoria-para-agencias": "Gestoría para agencias",
  "/servicios-para-mandatarios": "Servicios para mandatarios",
};

export function buildSeoHead(page: SeoPageContent) {
  const canonical = `${SITE_URL}${page.path}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: page.title,
        description: page.description,
        inLanguage: "es-AR",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${canonical}#breadcrumb` },
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: page.serviceName,
        description: page.description,
        provider: { "@type": "Organization", name: "Gestores Asociados", url: SITE_URL },
        areaServed: { "@type": "AdministrativeArea", name: "Lanús y jurisdicciones a confirmar según cada gestión" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: page.h1, item: canonical },
        ],
      },
    ],
  };

  return {
    meta: [
      { title: page.title },
      { name: "description", content: page.description },
      { name: "robots", content: "index,follow,max-image-preview:large" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Gestores Asociados" },
      { property: "og:title", content: page.title },
      { property: "og:description", content: page.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: `${SITE_URL}/gestores-logo.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: page.title },
      { name: "twitter:description", content: page.description },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(structuredData) }],
  };
}

export default function SeoLandingPage({ page }: { page: SeoPageContent }) {
  const whatsapp = "https://wa.me/5491133323229?text=" + encodeURIComponent(
    `Hola, vengo de la web de Gestores Asociados. Quiero consultar por: ${page.serviceName}.`,
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/70 bg-background/90">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-4">
          <Link to="/" className="flex items-center gap-2 font-bold tracking-tight" style={{ fontFamily: "Sora" }}>
            <img src="/gestores-logo.jpg" alt="Logo de Gestores Asociados" width="38" height="38" className="h-9 w-9 rounded-full object-cover" />
            <span>Gestores<span className="text-accent">.</span>Asociados</span>
          </Link>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-whatsapp-foreground">
            <MessageCircle className="h-4 w-4" /> Consultar
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 pb-20 pt-8 sm:pt-12">
        <nav aria-label="Migas de pan" className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-accent">Inicio</Link>
          <span className="mx-2">/</span>
          <span aria-current="page" className="text-foreground">{page.h1}</span>
        </nav>

        <section className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-black/20 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#cdf700]">Gestores Asociados · Lanús, Buenos Aires</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">{page.h1}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">{page.intro}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-whatsapp-foreground shadow-[0_0_28px_rgba(61,230,147,0.2)]">
              <MessageCircle className="h-5 w-5" /> Consultar por WhatsApp
            </a>
            <Link to="/" className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 font-semibold hover:border-accent/60">
              <ArrowLeft className="h-4 w-4" /> Volver al inicio
            </Link>
          </div>
        </section>

        <div className="mt-8 grid gap-5">
          {page.sections.map((section) => (
            <section key={section.heading} className="rounded-2xl border border-border bg-card/70 p-6 sm:p-8">
              <h2 className="text-xl font-bold sm:text-2xl">{section.heading}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{section.body}</p>
              {section.bullets && (
                <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-muted-foreground marker:text-accent">
                  {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              )}
            </section>
          ))}
        </div>

        <section className="mt-10">
          <h2 className="text-2xl font-bold sm:text-3xl">Preguntas frecuentes</h2>
          <div className="mt-5 space-y-3">
            {page.faqs.map((faq) => (
              <details key={faq.question} className="group rounded-xl border border-border bg-card p-5">
                <summary className="cursor-pointer list-none font-semibold marker:hidden">
                  <span className="flex items-center justify-between gap-4">{faq.question}<span className="text-xl text-accent transition group-open:rotate-45">+</span></span>
                </summary>
                <p className="mt-3 leading-7 text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-accent/30 bg-[linear-gradient(135deg,rgba(194,255,31,0.12),rgba(36,219,224,0.08))] p-6 sm:p-8">
          <h2 className="text-2xl font-bold">Consultá tu caso antes de avanzar</h2>
          <p className="mt-2 leading-7 text-muted-foreground">Revisamos la información disponible y te confirmamos el alcance, las condiciones y los costos de la gestión. La cobertura y los resultados dependen de cada trámite y jurisdicción.</p>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-whatsapp-foreground">
            <MessageCircle className="h-5 w-5" /> Hablar con un asesor <ArrowUpRight className="h-4 w-4" />
          </a>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">También puede interesarte</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {page.related.map((path) => (
              <Link key={path} to={path as never} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-accent/60 hover:text-accent">
                {pageLabels[path] ?? path}
              </Link>
            ))}
          </div>
        </section>

        <footer className="mt-12 border-t border-border pt-6 text-sm leading-6 text-muted-foreground">
          <p><strong className="text-foreground">Gestores Asociados</strong> · Colón 3939, Lanús, Buenos Aires.</p>
          <p>Las gestiones están sujetas a revisión, disponibilidad y requisitos del organismo competente. No se garantizan reducciones, anulaciones ni plazos ajenos al equipo.</p>
        </footer>
      </div>
    </main>
  );
}
