import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidad")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Política de privacidad | Gestores Asociados" },
      {
        name: "description",
        content: "Información sobre privacidad, uso de Google Analytics y preferencias de medición en Gestores Asociados.",
      },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const updateConsent = (value: "granted" | "denied" | null) => {
    try {
      if (value === null) window.localStorage.removeItem("ga4-consent");
      else window.localStorage.setItem("ga4-consent", value);
    } catch {
      // The preference applies for the current page session if storage is unavailable.
    }
    window.dispatchEvent(new CustomEvent("ga4-consent-change", { detail: value }));
    if (value === null) window.dispatchEvent(new Event("ga4-open-settings"));
  };

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-5 py-16 text-foreground">
      <h1 className="text-3xl font-bold">Política de privacidad</h1>
      <p className="mt-3 text-sm text-muted-foreground">Última actualización: 23 de noviembre de 2026</p>

      <section className="mt-8 space-y-4 text-sm leading-7">
        <h2 className="text-xl font-semibold">Datos de consultas</h2>
        <p>
          Cuando nos contactás por WhatsApp o por otros canales, los datos que compartís se utilizan para responder tu consulta, evaluar el trámite solicitado y coordinar la prestación del servicio. No ingreses información que no sea necesaria para tu consulta.
        </p>

        <h2 className="text-xl font-semibold">Medición del sitio</h2>
        <p>
          Gestores Asociados utiliza Google Analytics 4, un servicio de medición de Google, para conocer de forma estadística cómo se utiliza el sitio. La herramienta puede utilizar cookies o tecnologías similares y procesar datos técnicos de navegación, como páginas visitadas, tipo de dispositivo e interacciones generales.
        </p>
        <p>
          La medición de Google Analytics se activa únicamente si seleccionás “Aceptar analítica”. Si rechazás, la herramienta no se carga. Los eventos de medición no incluyen patentes, mensajes de WhatsApp, números telefónicos ni el contenido de los formularios o consultas.
        </p>

        <h2 className="text-xl font-semibold">Preferencias</h2>
        <p>
          Podés aceptar o rechazar la medición en cualquier momento desde esta página. La elección se guarda en el navegador utilizado. Si borrás los datos del navegador o utilizás otro dispositivo, tendrás que volver a indicar tu preferencia.
        </p>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={() => updateConsent("granted")} className="rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground">Aceptar analítica</button>
          <button type="button" onClick={() => updateConsent("denied")} className="rounded-md border border-border px-4 py-2 font-semibold">Rechazar analítica</button>
          <button type="button" onClick={() => updateConsent(null)} className="rounded-md border border-border px-4 py-2 font-semibold">Cambiar preferencia</button>
        </div>

        <h2 className="text-xl font-semibold">Contacto y derechos</h2>
        <p>
          Para consultas relacionadas con la privacidad o el tratamiento de los datos que nos compartiste, podés comunicarte con Gestores Asociados a través de los canales de contacto publicados en este sitio.
        </p>
        <p>
          Esta página describe el funcionamiento de la medición implementada en el sitio. Antes de su publicación definitiva, el responsable del servicio debe completar los datos de identificación y contacto que correspondan y verificar su adecuación a la normativa aplicable.
        </p>
      </section>
    </main>
  );
}
