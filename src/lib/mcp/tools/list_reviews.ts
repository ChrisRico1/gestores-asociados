import { defineTool } from "@lovable.dev/mcp-js";

import { REVIEWS } from "../business";

export default defineTool({
  name: "list_reviews",
  title: "Listar reseñas",
  description: "Devuelve las reseñas textuales reales de Google que los clientes dejaron a Gestores Asociados, con autor y trámite asociado.",
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: REVIEWS.map((review) => `${review.author} (${review.topic}): "${review.review}"`).join("\n"),
      },
    ],
    structuredContent: {
      reviews: REVIEWS.map(({ author, review, topic }) => ({ author, review, topic })),
    },
  }),
});
