import { defineTool } from "@lovable.dev/mcp-js";

import { COVERAGE_AREAS } from "../business";

export default defineTool({
  name: "list_coverage_areas",
  title: "Listar zonas de cobertura",
  description: "Lista las zonas donde Gestores Asociados realiza trámites: Lanús, Avellaneda, Lomas de Zamora, Quilmes, CABA y Zona Sur del Gran Buenos Aires.",
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: COVERAGE_AREAS.map((zone) => `${zone.title}: ${zone.description}`).join("\n"),
      },
    ],
    structuredContent: {
      areas: COVERAGE_AREAS.map(({ title, description }) => ({ title, description })),
    },
  }),
});
