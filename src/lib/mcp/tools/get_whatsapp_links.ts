import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";

import { ADVISORS } from "../business";

export default defineTool({
  name: "get_whatsapp_links",
  title: "Enlaces de WhatsApp de los asesores",
  description: "Devuelve los enlaces públicos de WhatsApp de los asesores de Gestores Asociados para iniciar una consulta. No envía mensajes: solo entrega el enlace para que la persona lo abra.",
  inputSchema: {
    advisor: z
      .string()
      .optional()
      .describe("Nombre del asesor (Christian, Natalia o Florencia). Si se omite, devuelve los tres."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ advisor }) => {
    const matches = advisor
      ? ADVISORS.filter((item) => item.name.toLowerCase() === advisor.trim().toLowerCase())
      : ADVISORS;
    if (matches.length === 0) {
      throw new ToolError("Asesor desconocido. Opciones: Christian, Natalia o Florencia.");
    }
    return {
      content: [
        {
          type: "text",
          text: matches.map((item) => `${item.name} (${item.role}): ${item.whatsapp}`).join("\n"),
        },
      ],
      structuredContent: {
        advisors: matches.map(({ name, role, whatsapp }) => ({ name, role, whatsapp })),
      },
    };
  },
});
