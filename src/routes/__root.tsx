import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useRouterState,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { trackAnalyticsEvent } from "../lib/analytics";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscás no existe o cambió de dirección.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          No pudimos cargar esta página
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ocurrió un error. Podés volver a intentar o regresar al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Reintentar
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  staticData: { sitemap: false },
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "hkrt7PHbEaEIV_g4uGD7EVXwGAB-5cZQ9t-EgVJH5lE" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Sora:wght@600;700&display=swap" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es-AR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}


function AnalyticsTracker() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [consent, setConsent] = useState<"granted" | "denied" | null>(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("ga4-consent");
      if (saved === "granted" || saved === "denied") setConsent(saved);
    } catch {
      setConsent("denied");
    }

    const handleConsentChange = (event: Event) => {
      const next = (event as CustomEvent<"granted" | "denied" | null>).detail;
      setConsent(next);
    };
    const handleOpenSettings = () => setConsent(null);
    window.addEventListener("ga4-consent-change", handleConsentChange);
    window.addEventListener("ga4-open-settings", handleOpenSettings);
    return () => {
      window.removeEventListener("ga4-consent-change", handleConsentChange);
      window.removeEventListener("ga4-open-settings", handleOpenSettings);
    };
  }, []);

  useEffect(() => {
    if (consent === "denied") {
      // Revoke analytics consent if the visitor changes their preference later.
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(["consent", "update", { analytics_storage: "denied" }]);
      return;
    }
    if (consent !== "granted") return;

    window.dataLayer = window.dataLayer || [];
    if (!document.querySelector('script[data-gtm-id="GTM-554Z7LXN"]')) {
      window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-554Z7LXN";
      script.dataset.gtmId = "GTM-554Z7LXN";
      document.head.appendChild(script);
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      const advisor = anchor.getAttribute("data-analytics-advisor");
      const service = anchor.getAttribute("data-analytics-service");

      if (/^https?:\/\/wa\.me\//i.test(href)) {
        trackAnalyticsEvent("whatsapp_click", {
          page_path: window.location.pathname,
          ...(advisor ? { advisor_selected: advisor } : {}),
        });
        if (advisor) {
          trackAnalyticsEvent("advisor_selected", {
            advisor_name: advisor,
            page_path: window.location.pathname,
          });
        }
      } else if (service) {
        trackAnalyticsEvent("service_consult_click", {
          service_name: service,
          page_path: window.location.pathname,
        });
      } else if (href.startsWith("#asesores") || href.startsWith("#contacto") || href.startsWith("tel:")) {
        trackAnalyticsEvent("contact_click", {
          contact_type: href.startsWith("tel:") ? "phone" : "section",
          page_path: window.location.pathname,
        });
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [consent]);

  useEffect(() => {
    if (consent !== "granted") return;
    trackAnalyticsEvent("page_view", {
      page_path: pathname,
      page_title: document.title,
    });
  }, [pathname, consent]);

  const chooseConsent = (value: "granted" | "denied") => {
    try {
      window.localStorage.setItem("ga4-consent", value);
    } catch {
      // If storage is unavailable, keep the choice only for this page session.
    }
    setConsent(value);
  };

  return consent === null ? (
    <aside
      aria-label="Preferencias de privacidad"
      className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-3xl rounded-xl border border-border bg-card p-4 text-card-foreground shadow-2xl"
    >
      <p className="text-sm font-semibold">Preferencias de privacidad</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Usamos Google Analytics para medir el uso del sitio y mejorar nuestros servicios. La medición solo se activa si aceptás. No enviamos patentes ni mensajes de WhatsApp a Analytics.
        <Link to="/privacidad" className="ml-1 underline underline-offset-2">Más información</Link>.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" onClick={() => chooseConsent("granted")} className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Aceptar analítica</button>
        <button type="button" onClick={() => chooseConsent("denied")} className="rounded-md border border-border px-4 py-2 text-sm font-semibold">Rechazar</button>
      </div>
    </aside>
  ) : null;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <AnalyticsTracker />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
