import { defineMcp } from "@lovable.dev/mcp-js";

import getBusinessInfoTool from "./tools/get_business_info";
import getWhatsappLinksTool from "./tools/get_whatsapp_links";
import listCoverageAreasTool from "./tools/list_coverage_areas";
import listFaqsTool from "./tools/list_faqs";
import listReviewsTool from "./tools/list_reviews";
import listServicesTool from "./tools/list_services";

export default defineMcp({
  name: "gestores-asociados",
  title: "Gestores Asociados",
  version: "0.1.0",
  instructions:
    "Herramientas públicas del sitio de Gestores Asociados, gestoría del automotor en Lanús, Argentina. Permiten consultar la información del negocio, sus servicios, reseñas de Google, zonas de cobertura, preguntas frecuentes y los enlaces de contacto por WhatsApp de los asesores. Son solo de lectura y trabajan con datos públicos del sitio.",
  tools: [
    getBusinessInfoTool,
    listServicesTool,
    listReviewsTool,
    listCoverageAreasTool,
    listFaqsTool,
    getWhatsappLinksTool,
  ],
});
