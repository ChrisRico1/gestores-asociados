import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BadgeCheck,
  Car,
  Clock,
  Facebook,
  FileCheck2,
  FileText,
  Instagram,
  MapPin,
  MessageCircle,
  Music2,
  Phone,
  ShieldCheck,
  Star,
  type LucideIcon,
} from "lucide-react";

const WA = "https://wa.me/5491133323229?text=Hola%20Gestores%20Asociados%2C%20quiero%20hacer%20una%20consulta";
const TEL = "tel:+541133323229";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Colon+3939+Lanus+Buenos+Aires";
const FACEBOOK = "https://www.facebook.com/profile.php?id=61573403949959";
const INSTAGRAM = "https://www.instagram.com/gestoresasociados/";
const TIKTOK = "https://www.tiktok.com/@gestores_asociados";
const GOOGLE_BUSINESS = "https://share.google/lDuSeHpey97KRjsLR";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gestores Asociados | Gestoría del Automotor en Lanús" },
      { name: "description", content: "Trámites del automotor, infracciones, verificación policial, altas y bajas de patente y sellado ARBA en Lanús. Asesoramiento gratis. Abierto 24 hs." },
      { property: "og:title", content: "Gestores Asociados | Gestoría del Automotor en Lanús" },
      { property: "og:description", content: "Resolvemos tus trámites del automotor rápido y seguro. Asesoramiento gratuito. 5,0 ★ en Google." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Service = {
  t: string;
  d: string;
  icon: LucideIcon;
};

const services: Service[] = [
  { t: "Infracciones de tránsito", d: "Analizamos tu caso, gestionamos descargos y reducciones de multas.", icon: FileText },
  { t: "Verificación policial", d: "Coordinamos la verificación de tu vehículo sin vueltas.", icon: ShieldCheck },
  { t: "Alta y baja de patente", d: "Radicaciones, altas y bajas ante el Registro Automotor.", icon: Car },
  { t: "Sellado de ARBA", d: "Liquidación y pago de sellos para tus operaciones.", icon: BadgeCheck },
  { t: "Informes al instante", d: "Informes de dominio, 13i, RENAPER, InfoEx y DATEA en minutos.", icon: FileCheck2 },
  { t: "Seguros para motos", d: "Coberturas para aplicaciones, remis y transporte comercial.", icon: Clock },
];

const reviews = [
  { n: "Stefania Orsini", r: "Me tuvieron toda la paciencia para explicarme y me solucionaron todo 😎🙌" },
  { n: "Fabian Vera", r: "Excelente servicio, rápidos y eficaces." },
  { n: "Lautaro Martinez", r: "Buen servicio, muchas gracias!" },
];

const stats = [
  ["5,0", "Calificación en Google"],
  ["24 hs", "Atención activa"],
  ["537+", "Vistas mensuales"],
  ["Gratis", "Primer asesoramiento"],
];

const steps = [
  { t: "Nos escribís", d: "Contanos qué trámite necesitás resolver y mandanos la documentación disponible." },
  { t: "Revisamos tu caso", d: "Analizamos la situación y te explicamos opciones, tiempos y próximos pasos." },
  { t: "Gestionamos", d: "Avanzamos con el trámite y te mantenemos al tanto por el canal más cómodo." },
  { t: "Lo resolvés", d: "Cerramos la gestión con claridad, comprobantes y asesoramiento hasta el final." },
];

function Index() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-3 font-bold text-lg text-foreground" style={{ fontFamily: "Sora" }}>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent),var(--cyan))] p-0.5 shadow-[0_0_24px_rgba(194,255,31,0.22)]">
              <img src="/gestores-logo.jpg" alt="Gestores Asociados" className="h-full w-full rounded-full border border-black/50 object-cover" />
            </span>
            <span>Gestores<span className="text-accent">.</span>Asociados</span>
          </a>
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            <a href="#servicios" className="hover:text-foreground">Servicios</a>
            <a href="#opiniones" className="hover:text-foreground">Opiniones</a>
            <a href="#contacto" className="hover:text-foreground">Contacto</a>
          </nav>
          <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-whatsapp-foreground shadow-[0_0_28px_rgba(61,230,147,0.28)]">
            <MessageCircle className="h-4 w-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </header>

      <main>
        <section className="relative border-b border-border/70">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_15%,rgba(194,255,31,0.20),transparent_30%),radial-gradient(circle_at_88%_22%,rgba(36,219,224,0.22),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_42%)]" />
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
            <div className="self-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                <Star className="h-3.5 w-3.5 fill-current" />
                5,0 en Google · Abierto 24 hs
              </span>
              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                Gestión automotor clara, rápida y sin vueltas.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted-foreground">
                Resolvemos trámites, infracciones e informes con asesoramiento gratuito y atención directa por WhatsApp.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-whatsapp-foreground shadow-[0_0_34px_rgba(61,230,147,0.30)]">
                  <MessageCircle className="h-5 w-5" />
                  Consultar gratis
                </a>
                <a href={TEL} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-semibold text-foreground hover:border-accent/60">
                  <Phone className="h-5 w-5" />
                  011 3332-3229
                </a>
              </div>
            </div>

            <div className="relative self-center">
              <div className="absolute inset-8 -z-10 rounded-full bg-cyan-400/15 blur-3xl" />
              <div className="mx-auto max-w-sm rounded-lg border border-white/12 bg-card/80 p-5 shadow-2xl shadow-black/40 backdrop-blur">
                <div className="rounded-full bg-[linear-gradient(135deg,var(--accent),var(--cyan))] p-1.5 shadow-[0_0_50px_rgba(36,219,224,0.20)]">
                  <img src="/gestores-logo.jpg" alt="Logo de Gestores Asociados" className="aspect-square w-full rounded-full border border-black/60 object-cover" />
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {stats.map(([a, b]) => (
                    <div key={b} className="rounded-lg border border-border bg-secondary/55 p-4">
                      <div className="text-2xl font-bold text-accent" style={{ fontFamily: "Sora" }}>{a}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{b}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-muted/65">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="text-sm font-semibold text-accent">Cómo trabajamos</span>
                <h2 className="mt-2 text-3xl font-bold md:text-4xl">Simple, directo y por WhatsApp</h2>
              </div>
              <p className="max-w-md text-muted-foreground">
                Te guiamos paso a paso para que sepas qué presentar, cuánto demora y cómo avanza cada gestión.
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {steps.map((step, i) => (
                <article key={step.t} className="relative rounded-lg border border-border bg-card p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                    {i + 1}
                  </div>
                  <h3 className="mt-5 font-semibold">{step.t}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="servicios" className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-semibold text-accent">Servicios</span>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Todo para tu vehículo en un solo lugar</h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Un equipo para ordenar papeles, resolver gestiones y darte una respuesta concreta desde el primer mensaje.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <article key={s.t} className="group rounded-lg border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-accent/45 hover:bg-secondary">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground ring-1 ring-white/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{s.d}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="opiniones" className="border-y border-border bg-muted">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="text-sm font-semibold text-accent">Opiniones</span>
                <h2 className="mt-2 text-3xl font-bold md:text-4xl">Clientes que ya resolvieron</h2>
              </div>
              <div className="flex items-center gap-2 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.n} className="rounded-lg border border-border bg-card p-6">
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 leading-7 text-foreground">"{r.r}"</blockquote>
                  <figcaption className="mt-5 text-sm font-semibold text-muted-foreground">{r.n}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-border bg-card p-6 md:p-8">
            <span className="text-sm font-semibold text-accent">Contacto</span>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Escribinos y arrancamos</h2>
            <ul className="mt-8 space-y-5">
              <li className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <div className="text-sm text-muted-foreground">Dirección</div>
                  <a href={GOOGLE_BUSINESS} target="_blank" rel="noreferrer" className="font-semibold hover:text-accent">Colón 3939, B1824 Lanús, Buenos Aires</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <div className="text-sm text-muted-foreground">Teléfono</div>
                  <a href={TEL} className="font-semibold hover:text-accent">011 3332-3229</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <div className="text-sm text-muted-foreground">Horario</div>
                  <div className="font-semibold">Abierto las 24 horas</div>
                </div>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WA} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 font-semibold text-whatsapp-foreground">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-secondary hover:border-accent/60" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={FACEBOOK} target="_blank" rel="noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-secondary hover:border-accent/60" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={TIKTOK} target="_blank" rel="noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-secondary hover:border-accent/60" aria-label="TikTok">
                <Music2 className="h-5 w-5" />
              </a>
              <a href={GOOGLE_BUSINESS} target="_blank" rel="noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-secondary hover:border-accent/60" aria-label="Google Business">
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="min-h-80 overflow-hidden rounded-lg border border-border bg-card">
            <iframe
              title="Mapa Gestores Asociados"
              className="h-full min-h-80 w-full grayscale invert-[0.88] hue-rotate-180"
              loading="lazy"
              src="https://www.google.com/maps?q=Colon+3939,+Lanus,+Buenos+Aires&output=embed"
            />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-20">
          <div className="flex flex-col items-start justify-between gap-5 rounded-lg border border-accent/30 bg-[linear-gradient(135deg,rgba(194,255,31,0.16),rgba(36,219,224,0.12))] p-6 md:flex-row md:items-center md:p-8">
            <div>
              <h2 className="text-2xl font-bold">¿Tenés una gestión pendiente?</h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">Mandanos tu consulta y te decimos qué documentación necesitás y cuál es el camino más conveniente.</p>
            </div>
            <a href={WA} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-6 py-3 font-semibold text-background">
              Empezar ahora
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © 2026 Gestores Asociados · Gestoría del Automotor en Lanús
      </footer>

      <a
        href={WA}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-[0_0_34px_rgba(61,230,147,0.38)] transition hover:-translate-y-1 md:h-auto md:w-auto md:gap-2 md:px-5 md:py-3"
        aria-label="Consultar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden font-semibold md:inline">Consultar</span>
      </a>
    </div>
  );
}
