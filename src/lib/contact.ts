/**
 * Derivación comercial compartida por el chat y las páginas de servicios.
 * Los teléfonos corresponden a los contactos publicados por Gestores Asociados.
 * Se valida la cobertura de cada gestión antes de presupuestar.
 */
export const ADVISOR_PHONES = {
  Christian: "5491133323229",
  Natalia: "5491166900550",
  Florencia: "5491127273404",
} as const;

export type AdvisorName = keyof typeof ADVISOR_PHONES;

const FLORENCIA_PAGES = new Set([
  "/gestoria-automotor",
  "/gestoria-automotor-lanus",
  "/transferencias-automotor",
  "/verificacion-policial",
  "/alta-baja-patentes",
  "/sellado-arba",
  "/gestoria-para-agencias",
  "/servicios-para-mandatarios",
]);

const NATALIA_PAGES = new Set(["/asesores", "/contacto"]);

export function advisorForPage(path: string): AdvisorName {
  if (FLORENCIA_PAGES.has(path)) return "Florencia";
  if (NATALIA_PAGES.has(path)) return "Natalia";
  return "Christian";
}

export function whatsappLink(advisor: AdvisorName, message: string): string {
  return `https://wa.me/${ADVISOR_PHONES[advisor]}?text=${encodeURIComponent(message)}`;
}
