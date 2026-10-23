import { defineTool } from "@lovable.dev/mcp-js";

import { BUSINESS } from "../business";

export default defineTool({
  name: "get_business_info",
  title: "Información del negocio",
  description: "Devuelve la información pública de Gestores Asociados: nombre, dirección, teléfono, horario, calificación en Google, sitio web y redes sociales.",
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: [
          `${BUSINESS.name} — ${BUSINESS.activity} en Lanús, Argentina`,
          `Dirección: ${BUSINESS.address}`,
          `Teléfono: ${BUSINESS.phone}`,
          `Horario: ${BUSINESS.hours}`,
          `Calificación: ${BUSINESS.rating}`,
          `Sitio web: ${BUSINESS.website}`,
          `Instagram: ${BUSINESS.socials.instagram}`,
          `Facebook: ${BUSINESS.socials.facebook}`,
          `TikTok: ${BUSINESS.socials.tiktok}`,
        ].join("\n"),
      },
    ],
    structuredContent: {
      business: {
        name: BUSINESS.name,
        activity: BUSINESS.activity,
        address: BUSINESS.address,
        phone: BUSINESS.phone,
        hours: BUSINESS.hours,
        rating: BUSINESS.rating,
        website: BUSINESS.website,
        mapsUrl: BUSINESS.mapsUrl,
        googleBusinessUrl: BUSINESS.googleBusinessUrl,
        socials: {
          instagram: BUSINESS.socials.instagram,
          facebook: BUSINESS.socials.facebook,
          tiktok: BUSINESS.socials.tiktok,
        },
      },
    },
  }),
});
