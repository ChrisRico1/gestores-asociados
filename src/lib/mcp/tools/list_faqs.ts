import { defineTool } from "@lovable.dev/mcp-js";

import { FAQS } from "../business";

export default defineTool({
  name: "list_faqs",
  title: "Preguntas frecuentes",
  description: "Devuelve las preguntas frecuentes de Gestores Asociados con sus respuestas (documentación para transferencias, infracciones, informes de dominio, zonas de atención y costo de las consultas).",
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: FAQS.map((faq) => `P: ${faq.question}\nR: ${faq.answer}`).join("\n\n"),
      },
    ],
    structuredContent: {
      faqs: FAQS.map(({ question, answer }) => ({ question, answer })),
    },
  }),
});
