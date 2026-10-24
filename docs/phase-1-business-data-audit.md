# Fase 1: integridad de datos comerciales

## Alcance

- Mantener intactos el diseño y el contenido visible de la web durante el primer paso.
- No implementar ni integrar MCP.
- No modificar la arquitectura del asistente de IA.
- Trabajar en la rama `phase-1/business-data-audit`, separada de `main`.

## Inventario inicial del código

Los siguientes datos aparecen actualmente en `src/routes/index.tsx`. Este inventario describe el código; no confirma que los datos comerciales sigan vigentes.

- Dirección: Colón 3939, B1824 Lanús, Buenos Aires.
- Teléfono principal usado en datos estructurados: +54 11 3332-3229.
- WhatsApp de asesores:
  - Christian: 5491133323229.
  - Natalia: 5491166900550.
  - Florencia: 5491127273404.
- Perfiles: Google Business, Facebook, Instagram y TikTok.
- Cobertura declarada: Lanús Este/Oeste, Avellaneda, Lomas de Zamora, Quilmes, CABA y Zona Sur del Gran Buenos Aires.
- Servicios declarados: infracciones de tránsito, verificación policial, alta/baja de patente, sellado ARBA, informes y seguros para motos.
- La página muestra una calificación de Google de 5,0 y un contador fijo de 537+ vistas mensuales.
- La página declara atención o apertura durante las 24 horas en varios lugares.
- Hay cinco testimonios escritos en el código como reseñas de Google.

## Verificaciones necesarias antes de cambiar contenido

- [ ] Confirmar dirección y código postal.
- [ ] Confirmar que los tres números de WhatsApp son correctos y que los roles publicados siguen vigentes.
- [ ] Confirmar enlaces oficiales de redes y perfil de Google.
- [ ] Confirmar la calificación actual y la cantidad de reseñas de Google.
- [ ] Confirmar que los testimonios publicados corresponden a reseñas reales y que su publicación está autorizada.
- [ ] Definir la fuente y el período de las visitas mensuales. No presentar un valor fijo como una métrica en tiempo real.
- [ ] Aclarar si “24 hs” significa atención humana, recepción de mensajes o respuesta automatizada.
- [ ] Validar servicios, cobertura y plazos informados en preguntas frecuentes.

## Siguiente cambio de código

Una vez verificados los datos, centralizar los datos comerciales en un módulo compartido y hacer que los componentes de la página los consuman desde ese módulo. La primera refactorización debe conservar los mismos textos, estilos, secciones y enlaces visibles, salvo correcciones expresamente aprobadas.

## Validación técnica pendiente

No se han ejecutado todavía `npm run lint`, `npm test` ni `npm run build`. Deben ejecutarse en un entorno con las dependencias instaladas antes de considerar validada la fase.
