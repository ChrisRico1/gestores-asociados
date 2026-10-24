import { useState } from "react";
import { ArrowLeft, MessageCircle, Send, X } from "lucide-react";

type Topic =
  | "multas"
  | "registro"
  | "altas-bajas"
  | "prendas"
  | "transferencias"
  | "informes";

type Flow = {
  label: string;
  prompt: string;
  kind: "patente" | "documentacion";
  advisor: "Christian" | "Natalia" | "Florencia";
  phone: string;
  message: (value?: string) => string;
};

const FLOWS: Record<Topic, Flow> = {
  multas: {
    label: "Multas e infracciones",
    prompt: "Para cotizar la gestión de infracciones en Provincia de Buenos Aires y CABA, ingresá la patente del vehículo.",
    kind: "patente",
    advisor: "Christian",
    phone: "5491133323229",
    message: (patente) =>
      `Hola Christian, vengo desde la web de Gestores Asociados. Quiero consultar y cotizar infracciones en PBA y CABA para la patente ${patente}.`,
  },
  registro: {
    label: "Renovación de registro",
    prompt: "Te orientamos con la renovación del registro. Enviá la documentación por WhatsApp para que podamos revisar tu caso.",
    kind: "documentacion",
    advisor: "Natalia",
    phone: "5491166900550",
    message: () => "Hola Natalia, vengo desde la web de Gestores Asociados y necesito ayuda con la renovación del registro. Quiero enviar la documentación.",
  },
  "altas-bajas": {
    label: "Altas y bajas de patente o por seguro",
    prompt: "Podemos orientarte con el alta o la baja que necesitás. Contactanos por WhatsApp para enviar la documentación y revisar tu caso.",
    kind: "documentacion",
    advisor: "Florencia",
    phone: "5491127273404",
    message: () => "Hola Florencia, vengo desde la web de Gestores Asociados. Necesito consultar por un alta o baja de patente / baja por seguro y enviar la documentación.",
  },
  prendas: {
    label: "Prendas",
    prompt: "Para revisar tu consulta sobre prendas, escribinos por WhatsApp y enviá la documentación del vehículo y del trámite.",
    kind: "documentacion",
    advisor: "Florencia",
    phone: "5491127273404",
    message: () => "Hola Florencia, vengo desde la web de Gestores Asociados y necesito asesoramiento por un trámite de prenda. Quiero enviar la documentación.",
  },
  transferencias: {
    label: "Transferencias y trámites",
    prompt: "Te ayudamos a orientar el trámite. Escribinos por WhatsApp y enviá la documentación disponible para revisar cómo avanzar.",
    kind: "documentacion",
    advisor: "Florencia",
    phone: "5491127273404",
    message: () => "Hola Florencia, vengo desde la web de Gestores Asociados y necesito asesoramiento por una transferencia u otro trámite del automotor.",
  },

  informes: {
    label: "Informes de dominio / deuda de patente / deuda de infracciones",
    prompt: "Ingresá la patente para solicitar un informe de dominio o consultar deuda de patente o infracciones.",
    kind: "patente",
    advisor: "Christian",
    phone: "5491133323229",
    message: (patente) =>
      `Hola Christian, vengo desde la web de Gestores Asociados. Quiero consultar por un informe de dominio o deuda de patente o infracciones para el vehículo con patente ${patente}.`,
  },
};

const TOPICS: Topic[] = [
  "multas",
  "registro",
  "altas-bajas",
  "prendas",
  "transferencias",
  "informes",
];

function whatsappUrl(phone: string, message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export default function LeadChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [topic, setTopic] = useState<Topic | null>(null);
  const [patente, setPatente] = useState("");

  const flow = topic ? FLOWS[topic] : null;
  const normalizedPatente = patente.trim().toUpperCase().replace(/\s+/g, "");
  const validPatente = /^[A-Z]{2,3}[0-9]{3}[A-Z]{0,2}$/.test(normalizedPatente);
  const whatsappHref =
    flow && (flow.kind === "documentacion" || validPatente)
      ? whatsappUrl(flow.phone, flow.message(normalizedPatente))
      : undefined;

  const reset = () => {
    setTopic(null);
    setPatente("");
  };

  return (
    <div className="fixed inset-x-3 bottom-12 z-40 flex flex-col items-start gap-3 sm:inset-x-auto sm:bottom-5 sm:right-5 sm:items-end">
      {isOpen && (
        <section
          aria-label="Asistente de Gestores Asociados"
          className="flex max-h-[min(680px,calc(100dvh-5rem))] w-full max-w-[370px] flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-2xl shadow-black/25 sm:max-h-[min(680px,calc(100dvh-7rem))]"
        >
          <header className="flex items-center justify-between gap-3 bg-[linear-gradient(135deg,var(--accent),var(--cyan))] px-4 py-4 text-slate-950">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <p className="font-bold">Gestores Asociados</p>
                <p className="text-xs opacity-80">Asistente de consultas</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar chat"
              className="rounded-full p-2 transition hover:bg-black/10"
            >
              <X className="h-5 w-5" />
            </button>
          </header>

          <div className="space-y-4 overflow-y-auto p-4">
            <div className="max-w-[95%] rounded-2xl rounded-tl-sm bg-secondary p-3 text-sm leading-relaxed">
              ¡Hola! Soy el asistente de Gestores Asociados. ¿Con qué trámite necesitás ayuda?
            </div>

            {!flow && (
              <div className="space-y-2">
                {TOPICS.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setTopic(item)}
                    className="flex w-full items-center justify-between gap-3 rounded-xl border border-border bg-background px-3 py-3 text-left text-sm font-medium transition hover:border-accent/70 hover:bg-secondary"
                  >
                    <span>{FLOWS[item].label}</span>
                    <span aria-hidden="true" className="text-lg text-accent">›</span>
                  </button>
                ))}
              </div>
            )}

            {flow && (
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition hover:text-foreground"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Elegir otro trámite
                </button>

                <div className="rounded-2xl rounded-tl-sm bg-secondary p-3 text-sm leading-relaxed">
                  {flow.prompt}
                </div>

                {flow.kind === "patente" && (
                  <form
                    onSubmit={(event) => event.preventDefault()}
                    className="space-y-2"
                  >
                    <label htmlFor="lead-chat-patente" className="text-xs font-semibold text-muted-foreground">
                      Patente del vehículo
                    </label>
                    <input
                      id="lead-chat-patente"
                      value={patente}
                      onChange={(event) => setPatente(event.target.value.toUpperCase())}
                      placeholder="Ej.: AB123CD"
                      autoComplete="off"
                      maxLength={8}
                      className="w-full rounded-xl border border-input bg-background px-3 py-3 text-sm uppercase outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                    <p className="text-xs text-muted-foreground">
                      No consultamos bases de datos desde este chat. El equipo revisará la información cuando nos escribas.
                    </p>
                    {patente.trim() && !validPatente && (
                      <p role="status" className="text-xs text-destructive">
                        Revisá la patente. Podés ingresar formatos como AB123CD o ABC123.
                      </p>
                    )}
                  </form>
                )}

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-disabled={!whatsappHref}
                  onClick={(event) => {
                    if (!whatsappHref) event.preventDefault();
                  }}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-center text-sm font-semibold transition ${
                    whatsappHref
                      ? "bg-whatsapp text-whatsapp-foreground hover:brightness-95"
                      : "pointer-events-none cursor-not-allowed bg-muted text-muted-foreground opacity-60"
                  }`}
                >
                  <Send className="h-4 w-4" />
                  {flow.kind === "patente"
                    ? "Continuar por WhatsApp"
                    : "Enviar documentación por WhatsApp"}
                </a>
                <p className="text-center text-[11px] leading-relaxed text-muted-foreground">
                  El mensaje se prepara en WhatsApp. No se envía hasta que lo confirmes allí.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Cerrar asistente" : "Abrir asistente de consultas"}
        aria-expanded={isOpen}
        className="inline-flex h-12 max-w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-4 text-sm text-whatsapp-foreground shadow-[0_0_34px_rgba(61,230,147,0.38)] transition sm:h-14 sm:px-5 sm:text-base"
      >
        {isOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        <span className="font-semibold">{isOpen ? "Cerrar" : "¿En qué te ayudamos?"}</span>
      </button>
    </div>
  );
}
