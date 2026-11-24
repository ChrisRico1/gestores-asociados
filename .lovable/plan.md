# Plan técnico SEO + CRO — Gestores Asociados

Sin publicar ni editar código hasta que lo apruebes. Cada fase se commitea por separado (se sincroniza a ChrisRico1/gestores-asociados, rama main) y se publica solo con tu OK.

## Diagnóstico actual (verificado en el código)

- SSR real con TanStack Start: el HTML llega completo a Google. Una sola página de contenido (`/`), más `/sitemap.xml`, `/mcp` y `/.well-known/...` (estas tres excluidas del sitemap).
- Sitemap dinámico ya armado: se arma solo según cada página marque `sitemap: true/false`. Sirve para crecer sin tocarlo.
- robots.txt permite todo y declara el sitemap. Correcto.
- Home: título "Gestores Asociados | Gestoría del Automotor en Lanús", un solo H1, H2 por sección, JSON-LD `AutomotiveBusiness`. Falta canonical y `og:url`; no hay `og:image`.
- JSON-LD con datos a revisar: `priceRange: "$$"` y coordenadas geo no salen del perfil que pasaste → quitar o confirmar.
- Página 404 y de error en inglés; algunos colores escritos a mano (`#cdf700`) fuera de los tokens.
- No hay GA4 ni ningún tag de analítica; tampoco eventos de clic a WhatsApp/teléfono/chat. Solo la analítica de Lovable.
- LeadChat: arma links `wa.me` en el navegador, no envía datos a ningún servidor.
- Tests: solo uno de ruteo (`/` no cae en 404).

Lectura del Search Console: posición 4,1 con CTR 1,3% y 228 impresiones móviles sin clics = el problema principal es el título/descripción en resultados y la falta de intención "multas". Por eso la Fase 1 (home) rinde más que crear 15 páginas.

## Fase 1 — Home (bajo riesgo, mayor impacto)

- Título: "Reducción de Multas y Gestoría Automotor | Gestores Asociados".
- H1: "Gestión y reducción de multas de tránsito en Buenos Aires" (se mantiene diseño, logo, WhatsApp y chat).
- Description: la tuya (falta que me la pegues, ver "Datos a confirmar").
- Agregar canonical `https://gestores-asociados.lovable.app/` y `og:url`; `og:image` solo con una imagen real 1200x630 (logo recortado o foto que mandes).
- JSON-LD: limpiar datos no verificados; sumar `WebSite` + `Organization` con `sameAs` (Instagram, Facebook, TikTok reales). Sin `aggregateRating` salvo que confirmes que querés mostrar el 5,0 (Google penaliza reseñas autoservidas en LocalBusiness, por eso recomiendo no marcarlas).
- Sección de servicios: cada tarjeta enlaza a su página nueva solo cuando esa página esté publicada.
- 404/error en español con links a WhatsApp y home.
- CRO móvil: botón flotante de WhatsApp visible sin tapar el chat, teléfono clickeable arriba, primer pantallazo con CTA "Consultá tu multa gratis por WhatsApp" (la consulta gratis ya está en tus FAQ).

## Fase 2 — Arquitectura de páginas (solo las que tengan contenido real)

Estructura común por página: título/description/canonical/OG propios, H1 único, explicación del trámite, qué documentación pedir (solo si es dato confirmado), FAQ propia, CTA WhatsApp con mensaje precargado por tema, links a 2–3 páginas hermanas, `BreadcrumbList` en JSON-LD.

Clasificación propuesta según lo que hoy está verificado:

| Ruta | Estado inicial | Motivo |
|---|---|---|
| /reduccion-de-multas | Indexable | Servicio principal confirmado (descargos, reducciones) |
| /gestoria-automotor | Indexable | Servicios confirmados: patentes, ARBA, verificación |
| /transferencias-automotor | Indexable | FAQ real sobre documentación |
| /informes-de-dominio | Indexable | Informes de dominio, 13i, RENAPER, InfoEx, DATEA confirmados |
| /preguntas-frecuentes | Indexable | 5 FAQ reales (se sacan de la home o se dejan resumidas para no duplicar) |
| /gestoria-automotor-lanus | Indexable | Oficina real en Colón 3939 |
| /infracciones-provincia-buenos-aires | noindex hasta completar | Necesita qué organismos/juzgados gestionan |
| /descargos-de-fotomultas | noindex hasta completar | Necesita confirmar que lo hacen y cómo |
| /libre-deuda-infracciones | noindex hasta completar | Servicio no listado explícitamente |
| /infracciones-lanus, /infracciones-lomas-de-zamora, /infracciones-avellaneda | noindex hasta completar | Sin datos locales propios serían páginas duplicadas (doorway) |
| /gestoria-para-agencias, /servicios-para-mandatarios | noindex hasta completar | Mencionan "grupo Nacional de Gestores" pero sin detalle de la oferta |
| /blog | Fuera del sitemap + noindex | Vacío hasta tener al menos 3 artículos reales |

Las rutas en noindex quedan con `sitemap: false` y no se enlazan desde el menú. Pasan a indexables cuando me des los datos.

## Fase 3 — Medición (GA4 + eventos)

- Un solo tag GA4 cargado desde la raíz del sitio, nunca por página (evita duplicados), con ID que vos me pases.
- Eventos: `click_whatsapp` (con asesor y página), `click_phone`, `open_chat`, `chat_whatsapp_sent`, `click_maps`. Marcarlos como conversión en GA4 y, si querés, importarlos a Google Ads.
- Sin banner de cookies obligatorio en Argentina, pero lo confirmo con vos.

## Fase 4 — Calidad técnica y verificación

- Core Web Vitals: logo con ancho/alto fijo, mapa de Google cargado solo al acercarse (hoy es lo más pesado), fuentes con preconnect a fonts.gstatic.com, revisar animaciones del contador.
- Alt descriptivos en imágenes; mantener `lang="es-AR"`.
- Códigos de estado: rutas inexistentes devuelven 404 real; verificar con curl cada página nueva (200, canonical propio, un H1, noindex donde corresponde).
- Tests nuevos: cada página indexable tiene título y canonical propios y distintos; las noindex no aparecen en el sitemap; sitemap contiene exactamente las indexables.
- Tras publicar: enviar sitemap de nuevo e inspeccionar URLs en Search Console.

## Archivos a tocar

- `src/routes/index.tsx` (head, H1, JSON-LD, links a servicios, CTA)
- `src/routes/__root.tsx` (404/error en español, GA4, preconnect)
- Nuevos: `src/routes/reduccion-de-multas.tsx` y uno por cada ruta de la tabla
- Nuevos: `src/lib/seo.ts` (armado de head/canonical/breadcrumb compartido), `src/components/ServicePage.tsx` (plantilla), `src/lib/analytics.ts` (eventos)
- `src/lib/mcp/business.ts` (fuente única de datos del negocio, la usan home y páginas)
- `src/components/LeadChat.tsx` (eventos de analítica)
- `src/test/seo-routes.test.ts` (nuevo)
- Sin cambios: `src/lib/sitemap.ts`, `src/routes/sitemap[.]xml.ts`, `public/robots.txt`

## Riesgos

- Cambiar título/H1 de la única página indexada puede mover la posición unas semanas; se mitiga manteniendo "Gestoría Automotor" y Lanús en el contenido.
- Páginas locales sin datos propios = riesgo de penalización por contenido duplicado; por eso quedan en noindex.
- "Buenos Aires" en el H1 amplía la intención, pero la cobertura confirmada es Lanús, Zona Sur y CABA; el texto no debe prometer toda la provincia sin tu confirmación.
- Sacar las FAQ de la home a su página puede restar contenido a la home; propongo dejar 3 resumidas con link.
- El chat y WhatsApp no cambian de comportamiento; solo se les suma medición.

## Datos que necesito que confirmes

1. La description exacta para la home (mencionás que la diste, pero no llegó en el mensaje).
2. ¿Gestionan multas de toda la Provincia de Buenos Aires? ¿También CABA y nacionales (ANSV)?
3. ¿Hacen descargos de fotomultas? ¿Libre deuda de infracciones?
4. Qué ofrecen exactamente a agencias y a mandatarios (para habilitar esas dos páginas).
5. Algún dato local real de Lomas de Zamora y Avellaneda (registros donde operan, casos típicos) o las dejamos en noindex.
6. ¿Mostrar el 5,0 de Google y cuántas reseñas? (hoy el perfil marca 12; en otro lado aparece 58).
7. ID de GA4 (formato G-XXXXXXX) o si querés que lo creemos.
8. Una foto real (local o equipo) para la imagen al compartir.
9. ¿El número 11 4185 7656 de seguros para motos es de ustedes? Hoy no está en el sitio.
10. Temas reales para los primeros artículos del blog, o lo dejamos oculto.
