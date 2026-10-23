// Datos públicos del negocio, los mismos que muestra la landing en src/routes/index.tsx.
// Fuente única para el servidor MCP (src/lib/mcp) y las herramientas del navegador.

export const BUSINESS = {
  name: "Gestores Asociados",
  activity: "Gestoría del automotor",
  address: "Colón 3939, B1824 Lanús, Buenos Aires, Argentina",
  phone: "+54 11 3332-3229",
  hours: "Abierto las 24 horas, todos los días",
  rating: "5,0 en Google",
  website: "https://gestores-asociados.lovable.app",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Colon+3939+Lanus+Buenos+Aires",
  googleBusinessUrl: "https://share.google/lDuSeHpey97KRjsLR",
  socials: {
    instagram: "https://www.instagram.com/gestoresasociados/",
    facebook: "https://www.facebook.com/profile.php?id=61573403949959",
    tiktok: "https://www.tiktok.com/@gestores_asociados",
  },
} as const;

export const SERVICES = [
  { name: "Infracciones de tránsito", description: "Analizamos tu caso, gestionamos descargos y reducciones de multas." },
  { name: "Verificación policial", description: "Coordinamos la verificación de tu vehículo sin vueltas." },
  { name: "Alta y baja de patente", description: "Radicaciones, altas y bajas ante el Registro Automotor." },
  { name: "Sellado de ARBA", description: "Liquidación y pago de sellos para tus operaciones." },
  { name: "Informes al instante", description: "Informes de dominio, 13i, RENAPER, InfoEx y DATEA en minutos." },
  { name: "Seguros para motos", description: "Coberturas para aplicaciones, remis y transporte comercial." },
] as const;

// Reseñas textuales de Google, tal como las publican los clientes.
export const REVIEWS = [
  { author: "Stefania Orsini", review: "Me tuvieron toda la paciencia para explicarme y me solucionaron todo 😎🙌", topic: "Transferencia automotor" },
  { author: "Maximiliano Delia", review: "Súper recomendables, todo fue excelente y en tiempo récord.", topic: "Informe de dominio e infracciones" },
  { author: "Fabian Vera", review: "Excelente servicio, rápidos y muy eficaces. Súper confiables.", topic: "Verificación policial" },
  { author: "Romitucci82", review: "Son excelentes y muy recomendables en confianza. ¡Muchas gracias!", topic: "Gestión de patentes" },
  { author: "Lautaro Martinez", review: "Buen servicio y atención constante por WhatsApp, muchas gracias!", topic: "Asesoramiento general" },
] as const;

export const COVERAGE_AREAS = [
  { title: "Lanús Este & Oeste", description: "Oficina central y atención presencial/coordinada inmediata." },
  { title: "Avellaneda", description: "Gestiones rápidas ante Registros Automotores de la zona." },
  { title: "Lomas de Zamora", description: "Trámites de transferencia, informes y verificación." },
  { title: "Quilmes", description: "Asesoramiento integral para particulares y flotas." },
  { title: "CABA", description: "Cobertura en registros e instituciones de Capital Federal." },
  { title: "Zona Sur GBA", description: "Atención a partidos aledaños con logística ágil." },
] as const;

export const FAQS = [
  {
    question: "¿Qué documentación necesito para iniciar una transferencia?",
    answer: "Lo fundamental es contar con el Título de propiedad (físico o digital), la Cédula de identificación del vehículo, DNI de comprador y vendedor, y el formulario 08 (firmado o para firmar). Nosotros revisamos toda la documentación para que no tengas demoras.",
  },
  {
    question: "¿Puedo consultar o descontar infracciones antes de vender o comprar?",
    answer: "¡Sí! Hacemos un informe exhaustivo de multas y deudas de patentes a nivel municipal y provincial (ARBA/CABA), gestionamos los descargos correspondientes y te asesoramos para que resuelvas la deuda de la forma más económica posible.",
  },
  {
    question: "¿Cuánto tarda un Informe de Dominio?",
    answer: "Los informes de dominio urgente o en el acto se obtienen en el día (muchas veces en minutos), mientras que los comunes tardan entre 24 y 48 horas hábiles. Te avisamos inmediatamente apenas lo tenemos en mano.",
  },
  {
    question: "¿Atienden únicamente en Lanús o en toda Zona Sur y CABA?",
    answer: "Si bien nuestra oficina central está ubicada en Lanús (Colón 3939), realizamos radicaciones, transferencias y trámites en registros automotores de toda Zona Sur (Avellaneda, Lomas de Zamora, Quilmes) y CABA.",
  },
  {
    question: "¿Tienen costo las consultas iniciales por WhatsApp?",
    answer: "No, la consulta previa y el asesoramiento inicial para saber qué papeles necesitás o cómo proceder son totalmente gratuitos y sin compromiso.",
  },
] as const;

// Asesores y sus WhatsApp públicos (los mismos que muestra la página).
export const ADVISORS = [
  {
    name: "Christian",
    role: "Especialista en reducción de infracciones",
    whatsapp: "https://wa.me/5491133323229?text=" + encodeURIComponent("¡Hola Christian! Vengo de la página web de Gestores Asociados y necesito asesoramiento sobre un trámite."),
  },
  {
    name: "Natalia",
    role: "Atención al Cliente",
    whatsapp: "https://wa.me/5491166900550?text=" + encodeURIComponent("¡Hola Natalia! Vengo de la página web de Gestores Asociados y necesito asesoramiento sobre un trámite."),
  },
  {
    name: "Florencia",
    role: "Mandataria Nacional Matriculada D.N.R.P.A.",
    whatsapp: "https://wa.me/5491127273404?text=" + encodeURIComponent("¡Hola Florencia! Vengo de la página web de Gestores Asociados y necesito asesoramiento sobre un trámite."),
  },
] as const;
