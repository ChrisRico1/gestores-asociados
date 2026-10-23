import { defineTool } from "@lovable.dev/mcp-js";

import { SERVICES } from "../business";

export default defineTool({
  name: "list_services",
  title: "Listar servicios",
  description: "Lista los servicios de gestoría del automotor que ofrece Gestores Asociados (infracciones, verificación policial, altas y bajas de patente, sellado de ARBA, informes y seguros para motos).",
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: SERVICES.map((service) => `${service.name}: ${service.description}`).join("\n"),
      },
    ],
    structuredContent: {
      services: SERVICES.map(({ name, description }) => ({ name, description })),
    },
  }),
});
