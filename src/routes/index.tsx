import { createFileRoute } from "@tanstack/react-router";

const WA = "https://wa.me/5491133323229?text=Hola%20Gestores%20Asociados%2C%20quiero%20hacer%20una%20consulta";
const TEL = "tel:+541133323229";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Colon+3939+Lanus+Buenos+Aires";

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

const services = [
  { t: "Infracciones de tránsito", d: "Analizamos tu caso, gestionamos descargos y reducciones de multas." },
  { t: "Verificación policial", d: "Coordinamos la verificación de tu vehículo sin vueltas." },
  { t: "Alta y baja de patente", d: "Radicaciones, altas y bajas ante el Registro Automotor." },
  { t: "Sellado de ARBA", d: "Liquidación y pago de sellos para tus operaciones." },
  { t: "Informes al instante", d: "Informes de dominio, 13i, RENAPER, InfoEx y DATEA en minutos." },
  { t: "Seguros para motos", d: "Coberturas para aplicaciones, remis y transporte comercial." },
];

const reviews = [
  { n: "Stefania Orsini", r: "Me tuvieron toda la paciencia para explicarme y me solucionaron todo 😎🙌" },
  { n: "Fabian Vera", r: "Excelente servicio, rápidos y eficaces." },
  { n: "Lautaro Martinez", r: "Buen servicio, muchas gracias!" },
];

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="font-bold text-lg text-primary" style={{ fontFamily: "Sora" }}>
            Gestores<span className="text-accent">.</span>Asociados
          </a>
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            <a href="#servicios" className="hover:text-foreground">Servicios</a>
            <a href="#opiniones" className="hover:text-foreground">Opiniones</a>
            <a href="#contacto" className="hover:text-foreground">Contacto</a>
          </nav>
          <a href={WA} target="_blank" rel="noreferrer" className="rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-whatsapp-foreground">
            WhatsApp
          </a>
        </div>
      </header>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
          <div>
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              ★ 5,0 en Google · Abierto 24 hs
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              Tus trámites del automotor, resueltos sin vueltas.
            </h1>
            <p className="mt-5 max-w-xl text-lg opacity-85">
              Analizamos tu caso y te asesoramos <strong>gratis</strong> para encontrar la alternativa más conveniente. Rápidos, claros y seguros.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WA} target="_blank" rel="noreferrer" className="rounded-full bg-whatsapp px-6 py-3 font-semibold text-whatsapp-foreground">
                Consultar gratis por WhatsApp
              </a>
              <a href={TEL} className="rounded-full border border-primary-foreground/40 px-6 py-3 font-semibold">
                011 3332-3229
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 self-center">
            {[["5,0★", "Calificación"], ["24 hs", "Atención"], ["537+", "Vistas al mes"], ["Gratis", "Asesoramiento"]].map(([a, b]) => (
              <div key={b} className="rounded-2xl bg-primary-foreground/10 p-5">
                <div className="text-3xl font-bold text-accent" style={{ fontFamily: "Sora" }}>{a}</div>
                <div className="mt-1 text-sm opacity-80">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-3xl font-bold md:text-4xl">Servicios</h2>
        <p className="mt-2 text-muted-foreground">Todo lo que tu vehículo necesita, en un solo lugar.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.t} className="rounded-2xl border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary font-bold text-secondary-foreground">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="opiniones" className="bg-muted">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl font-bold md:text-4xl">Lo que dicen nuestros clientes</h2>
          <p className="mt-2 text-muted-foreground">★★★★★ 5,0 en Google</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.n} className="rounded-2xl bg-card p-6 shadow-sm">
                <div className="text-accent">★★★★★</div>
                <blockquote className="mt-3">"{r.r}"</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-muted-foreground">— {r.n}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">Visitanos o escribinos</h2>
          <ul className="mt-8 space-y-5">
            <li><div className="text-sm text-muted-foreground">Dirección</div><a href={MAPS} target="_blank" rel="noreferrer" className="font-semibold hover:text-primary">Colón 3939, B1824 Lanús, Buenos Aires</a></li>
            <li><div className="text-sm text-muted-foreground">Teléfono</div><a href={TEL} className="font-semibold hover:text-primary">011 3332-3229</a></li>
            <li><div className="text-sm text-muted-foreground">Horario</div><div className="font-semibold">Abierto las 24 horas</div></li>
            <li><div className="text-sm text-muted-foreground">Redes</div>
              <div className="flex gap-4 font-semibold">
                <a href="https://instagram.com/gestoresasociados" target="_blank" rel="noreferrer" className="hover:text-primary">Instagram</a>
                <a href="https://facebook.com/search/top?q=Gestores%20Asociados" target="_blank" rel="noreferrer" className="hover:text-primary">Facebook</a>
              </div>
            </li>
          </ul>
          <a href={WA} target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-full bg-whatsapp px-6 py-3 font-semibold text-whatsapp-foreground">
            Escribinos por WhatsApp
          </a>
        </div>
        <iframe
          title="Mapa Gestores Asociados"
          className="h-80 w-full rounded-2xl border md:h-full"
          loading="lazy"
          src="https://www.google.com/maps?q=Colon+3939,+Lanus,+Buenos+Aires&output=embed"
        />
      </section>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © 2026 Gestores Asociados · Gestoría del Automotor en Lanús
      </footer>
    </div>
  );
}
