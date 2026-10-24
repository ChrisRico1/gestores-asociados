import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BadgeCheck,
  Car,
  ChevronDown,
  Clock,
  Facebook,
  FileCheck2,
  FileText,
  HelpCircle,
  Instagram,
  MapPin,
  MessageCircle,
  Music2,
  ShieldCheck,
  Star,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import LeadChat from "../components/LeadChat";

// Enlaces e información general
const MAPS = "https://www.google.com/maps/search/?api=1&query=Colon+3939+Lanus+Buenos+Aires";
const FACEBOOK = "https://www.facebook.com/profile.php?id=61573403949959";
const INSTAGRAM = "https://www.instagram.com/gestoresasociados/";
const TIKTOK = "https://www.tiktok.com/@gestores_asociados";
const GOOGLE_BUSINESS = "https://share.google/lDuSeHpey97KRjsLR";

// Asesores de Gestores Asociados con roles oficiales
const advisors = [
  {
    name: "Christian",
    role: "Especialista en reducción de infracciones",
    phone: "5491133323229",
    initial: "C",
    msg: encodeURIComponent("¡Hola Christian! Vengo de la página web de Gestores Asociados y necesito asesoramiento sobre un trámite."),
  },
  {
    name: "Natalia",
    role: "Atención al Cliente",
    phone: "5491166900550",
    initial: "N",
    msg: encodeURIComponent("¡Hola Natalia! Vengo de la página web de Gestores Asociados y necesito asesoramiento sobre un trámite."),
  },
  {
    name: "Florencia",
    role: "Mandataria Nacional Matriculada D.N.R.P.A.",
    phone: "5491127273404",
    initial: "F",
    msg: encodeURIComponent("¡Hola Florencia! Vengo de la página web de Gestores Asociados y necesito asesoramiento sobre un trámite."),
  },
];

// Zonas de Cobertura
const coverageAreas = [
  { title: "Lanús Este & Oeste", desc: "Oficina central y atención presencial/coordinada inmediata." },
  { title: "Avellaneda", desc: "Gestiones rápidas ante Registros Automotores de la zona." },
  { title: "Lomas de Zamora", desc: "Trámites de transferencia, informes y verificación." },
  { title: "Quilmes", desc: "Asesoramiento integral para particulares y flotas." },
  { title: "CABA", desc: "Cobertura en registros e instituciones de Capital Federal." },
  { title: "Zona Sur GBA", desc: "Atención a partidos aledaños con logística ágil." },
];

// Preguntas Frecuentes
const faqs = [
  {
    q: "¿Qué documentación necesito para iniciar una transferencia?",
    a: "Lo fundamental es contar con el Título de propiedad (físico o digital), la Cédula de identificación del vehículo, DNI de comprador y vendedor, y el formulario 08 (firmado o para firmar). Nosotros revisamos toda la documentación para que no tengas demoras.",
  },
  {
    q: "¿Puedo consultar o descontar infracciones antes de vender o comprar?",
    a: "¡Sí! Hacemos un informe exhaustivo de multas y deudas de patentes a nivel municipal y provincial (ARBA/CABA), gestionamos los descargos correspondientes y te asesoramos para que resuelvas la deuda de la forma más económica posible.",
  },
  {
    q: "¿Cuánto tarda un Informe de Dominio?",
    a: "Los informes de dominio urgente o en el acto se obtienen en el día (muchas veces en minutos), mientras que los comunes tardan entre 24 y 48 horas hábiles. Te avisamos inmediatamente apenas lo tenemos en mano.",
  },
  {
    q: "¿Atienden únicamente en Lanús o en toda Zona Sur y CABA?",
    a: "Si bien nuestra oficina central está ubicada en Lanús (Colón 3939), realizamos radicaciones, transferencias y trámites en registros automotores de toda Zona Sur (Avellaneda, Lomas de Zamora, Quilmes) y CABA.",
  },
  {
    q: "¿Tienen costo las consultas iniciales por WhatsApp?",
    a: "No, la consulta previa y el asesoramiento inicial para saber qué papeles necesitás o cómo proceder son totalmente gratuitos y sin compromiso.",
  },
];

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Gestores Asociados | Gestoría del Automotor en Lanús" },
      { name: "description", content: "Trámites del automotor, infracciones, verificación policial, altas y bajas de patente y sellado ARBA en Lanús. Asesoramiento gratis. Abierto 24 hs." },
      { property: "og:title", content: "Gestores Asociados | Gestoría del Automotor en Lanús" },
      { property: "og:description", content: "Resolvemos tus trámites del automotor rápido y seguro. Asesoramiento gratuito. 5,0 ★ en Google." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutomotiveBusiness",
          "name": "Gestores Asociados",
          "image": "https://gestores-asociados.lovable.app/gestores-logo.jpg",
          "@id": "https://gestores-asociados.lovable.app/",
          "url": "https://gestores-asociados.lovable.app/",
          "telephone": "+541133323229",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Colón 3939",
            "addressLocality": "Lanús",
            "addressRegion": "Buenos Aires",
            "postalCode": "B1824",
            "addressCountry": "AR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -34.7075,
            "longitude": -58.3816
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          },
          "sameAs": [
            "https://www.facebook.com/profile.php?id=61573403949959",
            "https://www.instagram.com/gestoresasociados/",
            "https://www.tiktok.com/@gestores_asociados"
          ]
        }),
      },
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
  {
    n: "Stefania Orsini",
    r: "Me tuvieron toda la paciencia para explicarme y me solucionaron todo 😎🙌",
    tag: "Transferencia automotor",
  },
  {
    n: "Maximiliano Delia",
    r: "Súper recomendables, todo fue excelente y en tiempo récord.",
    tag: "Informe de dominio e infracciones",
  },
  {
    n: "Fabian Vera",
    r: "Excelente servicio, rápidos y muy eficaces. Súper confiables.",
    tag: "Verificación policial",
  },
  {
    n: "Romitucci82",
    r: "Son excelentes y muy recomendables en confianza. ¡Muchas gracias!",
    tag: "Gestión de patentes",
  },
  {
    n: "Lautaro Martinez",
    r: "Buen servicio y atención constante por WhatsApp, muchas gracias!",
    tag: "Asesoramiento general",
  },
];

const steps = [
  { t: "Nos escribís", d: "Contanos qué trámite necesitás resolver y mandanos la documentación disponible." },
  { t: "Revisamos tu caso", d: "Analizamos la situación y te explicamos opciones, tiempos y próximos pasos." },
  { t: "Gestionamos", d: "Avanzamos con el trámite y te mantenemos al tanto por el canal más cómodo." },
  { t: "Lo resolvés", d: "Cerramos la gestión con claridad, comprobantes y asesoramiento hasta el final." },
];

// Componente para contador animado
function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1500;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-3 sm:gap-4 sm:px-5 sm:py-4">
          <a href="#" className="flex min-w-0 items-center gap-2 font-bold text-sm text-foreground sm:gap-3 sm:text-lg" style={{ fontFamily: "Sora" }}>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent),var(--cyan))] p-0.5 shadow-[0_0_24px_rgba(194,255,31,0.22)] sm:h-11 sm:w-11">
              <img src="/gestores-logo.jpg" alt="Gestores Asociados" className="h-full w-full rounded-full border border-black/50 object-cover" />
            </span>
            <span className="truncate whitespace-nowrap tracking-tight">Gestores<span className="text-accent">.</span>Asociados</span>
          </a>
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            <a href="#servicios" className="hover:text-foreground transition-colors">Servicios</a>
            <a href="#asesores" className="hover:text-foreground transition-colors">Asesores</a>
            <a href="#cobertura" className="hover:text-foreground transition-colors">Cobertura</a>
            <a href="#opiniones" className="hover:text-foreground transition-colors">Opiniones</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
            <a href="#contacto" className="hover:text-foreground transition-colors">Contacto</a>
          </nav>
          <a href="#asesores" className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-whatsapp px-3 py-2 text-xs font-semibold text-whatsapp-foreground shadow-[0_0_28px_rgba(61,230,147,0.28)] transition sm:gap-2 sm:px-4 sm:text-sm">
            <MessageCircle className="h-4 w-4" />
            <span>Asesores</span>
          </a>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="relative border-b border-border/70">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_15%,rgba(194,255,31,0.20),transparent_30%),radial-gradient(circle_at_88%_22%,rgba(36,219,224,0.22),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_42%)]" />
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:gap-12 sm:px-5 sm:py-12 md:grid-cols-[1.15fr_0.85fr] md:py-24">
            <div className="self-center">
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-[11px] font-semibold text-accent shadow-[0_0_15px_rgba(194,255,31,0.15)] sm:px-3.5 sm:text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                5,0 en Google · En línea 24 hs
              </div>
              <h1 className="mt-4 max-w-3xl text-[2.15rem] font-bold leading-[1.12] tracking-tight sm:mt-6 sm:text-4xl sm:leading-tight md:text-6xl">
                Gestión automotor clara, rápida y sin vueltas en Lanús.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
                Resolvemos trámites, infracciones e informes con asesoramiento gratuito y atención directa por WhatsApp en toda Zona Sur y CABA.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <a href="#asesores" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 font-semibold text-whatsapp-foreground shadow-[0_0_34px_rgba(61,230,147,0.30)] transition sm:w-auto sm:px-6">
                  <MessageCircle className="h-5 w-5" />
                  Consultar un asesor
                </a>
              </div>
            </div>

            <div className="relative self-center">
              <div className="absolute inset-8 -z-10 rounded-full bg-cyan-400/15 blur-3xl" />
              <div className="mx-auto max-w-sm rounded-2xl border border-white/12 bg-card/80 p-4 shadow-2xl shadow-black/40 backdrop-blur sm:p-6">
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#cdf700]">Resultados que generan confianza</p>
                  <h2 className="mt-1 text-xl font-bold tracking-tight sm:text-2xl">Tu trámite, en buenas manos</h2>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div className="rounded-xl border border-border bg-secondary/55 p-3 text-center sm:p-4">
                    <div className="text-2xl font-bold text-accent sm:text-3xl" style={{ fontFamily: "Sora" }}>5,0 ★</div>
                    <div className="mt-1 text-xs text-muted-foreground">Calificación en Google</div>
                  </div>
                  <div className="rounded-xl border border-border bg-secondary/55 p-3 text-center sm:p-4">
                    <div className="text-2xl font-bold text-accent sm:text-3xl" style={{ fontFamily: "Sora" }}>5 ★</div>
                    <div className="mt-1 text-xs text-muted-foreground">Calificación en Facebook</div>
                  </div>
                  <div className="rounded-xl border border-border bg-secondary/55 p-3 text-center sm:p-4">
                    <div className="text-2xl font-bold text-accent sm:text-3xl" style={{ fontFamily: "Sora" }}>
                      <AnimatedCounter end={537} suffix="+" />
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">Visitas mensuales</div>
                  </div>
                  <div className="rounded-xl border border-border bg-secondary/55 p-3 text-center sm:p-4">
                    <div className="text-2xl font-bold text-accent sm:text-3xl" style={{ fontFamily: "Sora" }}>
                      <AnimatedCounter end={250} suffix="+" />
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">Trámites resueltos</div>
                  </div>
                  <div className="rounded-xl border border-border bg-secondary/55 p-3 text-center sm:p-4">
                    <div className="text-2xl font-bold text-accent sm:text-3xl" style={{ fontFamily: "Sora" }}>24 hs</div>
                    <div className="mt-1 text-xs text-muted-foreground">Atención activa</div>
                  </div>
                  <div className="rounded-xl border border-border bg-secondary/55 p-3 text-center sm:p-4">
                    <div className="text-2xl font-bold text-accent sm:text-3xl" style={{ fontFamily: "Sora" }}>Gratis</div>
                    <div className="mt-1 text-xs text-muted-foreground">Primera consulta</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN ASESORES DIRECTOS */}
        <section id="asesores" className="border-b border-border/70 bg-card/40 py-16 scroll-mt-16">
          <div className="mx-auto max-w-6xl px-5">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1 text-xs font-semibold text-accent">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Atención Inmediata
              </span>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Hablá directamente con nuestro equipo</h2>
              <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
                Elegí con quién querés comunicarte para recibir respuesta personalizada en el acto.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {advisors.map((advisor) => (
                <div key={advisor.name} className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-[0_10px_30px_rgba(194,255,31,0.12)]">
                  <div>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-accent font-bold text-2xl border border-accent/40 shadow-[0_0_20px_rgba(194,255,31,0.15)] mb-4 group-hover:scale-110 transition-transform">
                      {advisor.initial}
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{advisor.name}</h3>
                    <p className="text-xs font-medium text-accent mt-1 mb-6 px-2 min-h-[32px] flex items-center justify-center">
                      {advisor.role}
                    </p>
                  </div>
                  
                  <a
                    href={`https://wa.me/${advisor.phone}?text=${advisor.msg}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-3 font-semibold text-whatsapp-foreground transition hover:scale-[1.02] shadow-[0_0_20px_rgba(61,230,147,0.25)]"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Escribir a {advisor.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CÓMO TRABAJAMOS */}
        <section className="border-b border-border bg-muted/65 py-16">
          <div className="mx-auto max-w-6xl px-5">
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
                <article key={step.t} className="relative rounded-xl border border-border bg-card p-5 transition hover:border-accent/40">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground shadow-md">
                    {i + 1}
                  </div>
                  <h3 className="mt-5 font-semibold text-foreground">{step.t}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
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
                <article key={s.t} className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-secondary/60 hover:shadow-lg">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground ring-1 ring-white/10 group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{s.t}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{s.d}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* ZONA DE COBERTURA (SEO LOCAL) */}
        <section id="cobertura" className="border-y border-border bg-muted/40 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1 text-xs font-semibold text-accent">
                <MapPin className="h-4 w-4" /> Zona de Influencia
              </span>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">¿Dónde operamos?</h2>
              <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
                Oficina central en Lanús y cobertura ágil en registros automotores de toda la región metropolitana y Zona Sur.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {coverageAreas.map((zone) => (
                <div key={zone.title} className="rounded-2xl border border-border bg-card p-6 transition hover:border-accent/40 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{zone.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{zone.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OPINIONES / TESTIMONIOS */}
        <section id="opiniones" className="border-b border-border bg-gradient-to-b from-muted/50 to-muted py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1 text-xs font-semibold text-accent">
                  <BadgeCheck className="h-4 w-4" /> Reseñas 100% Reales de Google
                </span>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">Clientes que ya gestionaron con tranquilidad</h2>
                <p className="mt-2 text-muted-foreground">
                  La experiencia de quienes confían en nosotros día a día para resolver sus trámites en Lanús y Zona Sur.
                </p>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-sm">
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-foreground" style={{ fontFamily: "Sora" }}>5,0</div>
                  <div className="flex text-accent mt-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="h-10 w-[1px] bg-border" />
                <a
                  href={GOOGLE_BUSINESS}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-muted-foreground hover:text-accent transition-colors"
                >
                  Ver Perfil Oficial en <br />
                  <span className="font-semibold text-foreground underline decoration-accent decoration-2">Google Maps ↗</span>
                </a>
              </div>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure
                  key={r.n}
                  className="relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex text-accent">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold text-accent">
                        Google Review
                      </span>
                    </div>
                    <blockquote className="mt-4 text-base leading-relaxed text-foreground italic">
                      "{r.r}"
                    </blockquote>
                  </div>

                  <figcaption className="mt-6 border-t border-border/60 pt-4 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-foreground text-sm">{r.n}</div>
                      <div className="text-xs text-muted-foreground">{r.tag}</div>
                    </div>
                    <BadgeCheck className="h-5 w-5 text-accent" />
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href={GOOGLE_BUSINESS}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-semibold text-foreground transition hover:border-accent hover:bg-secondary"
              >
                <Star className="h-4 w-4 text-accent fill-current" />
                Ver todas las opiniones en Google
              </a>
            </div>
          </div>
        </section>

        {/* SECCIÓN PREGUNTAS FRECUENTES (FAQ) */}
        <section id="faq" className="mx-auto max-w-4xl px-5 py-20">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1 text-xs font-semibold text-accent">
              <HelpCircle className="h-4 w-4" /> Respuestas Rápidas
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Preguntas Frecuentes</h2>
            <p className="mt-2 text-muted-foreground">
              Despejá tus dudas principales antes de iniciar cualquier gestión del automotor.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-border bg-card overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left font-semibold text-lg text-foreground hover:text-accent transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-accent transition-transform duration-300 shrink-0 ml-4 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed border-t border-border/40 pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* CONTACTO Y MAPA */}
        <section id="contacto" className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <span className="text-sm font-semibold text-accent">Contacto</span>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Escribinos y arrancamos</h2>
            <ul className="mt-8 space-y-5">
              <li className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <div className="text-sm text-muted-foreground">Dirección</div>
                  <a href={GOOGLE_BUSINESS} target="_blank" rel="noreferrer" className="font-semibold hover:text-accent transition-colors">Colón 3939, B1824 Lanús, Buenos Aires</a>
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
            <div className="mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <a href="#asesores" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 font-semibold text-whatsapp-foreground hover:scale-105 transition-transform">
                <MessageCircle className="h-5 w-5" />
                Escribir a un Asesor
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-secondary hover:border-accent/60 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={FACEBOOK} target="_blank" rel="noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-secondary hover:border-accent/60 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={TIKTOK} target="_blank" rel="noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-secondary hover:border-accent/60 transition-colors" aria-label="TikTok">
                <Music2 className="h-5 w-5" />
              </a>
              <a href={GOOGLE_BUSINESS} target="_blank" rel="noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-secondary hover:border-accent/60 transition-colors" aria-label="Google Business">
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="min-h-80 overflow-hidden rounded-2xl border border-border bg-card">
            <iframe
              title="Mapa Gestores Asociados"
              className="h-full min-h-80 w-full grayscale invert-[0.88] hue-rotate-180"
              loading="lazy"
              src="https://www.google.com/maps?q=Colon+3939,+Lanus,+Buenos+Aires&output=embed"
            />
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="mx-auto max-w-6xl px-5 pb-20">
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-accent/30 bg-[linear-gradient(135deg,rgba(194,255,31,0.16),rgba(36,219,224,0.12))] p-6 md:flex-row md:items-center md:p-8">
            <div>
              <h2 className="text-2xl font-bold">¿Tenés una gestión pendiente?</h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">Mandanos tu consulta y te decimos qué documentación necesitás y cuál es el camino más conveniente.</p>
            </div>
            <a href="#asesores" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-6 py-3 font-semibold text-background hover:scale-105 transition-transform">
              Elegir Asesor
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © 2026 Gestores Asociados · Gestoría del Automotor en Lanús
      </footer>

      <LeadChat />
    </div>
  );
}