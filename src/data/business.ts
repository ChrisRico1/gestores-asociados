import {
  BadgeCheck,
  Car,
  Clock,
  FileCheck2,
  FileText,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

// Enlaces e información general
export const MAPS = "https://www.google.com/maps/search/?api=1&query=Colon+3939+Lanus+Buenos+Aires";
export const FACEBOOK = "https://www.facebook.com/profile.php?id=61573403949959";
export const INSTAGRAM = "https://www.instagram.com/gestoresasociados/";
export const TIKTOK = "https://www.tiktok.com/@gestores_asociados";
export const GOOGLE_BUSINESS = "https://share.google/lDuSeHpey97KRjsLR";

// Asesores de Gestores Asociados con roles oficiales
export const advisors = [
  {
    name: "Christian",
    role: "Especialista en reducción de infracciones",
    phone: "5491133323229",
    initial: "C",
    msg: encodeURIComponent("¡Hola Christian! Vengo de la página web de Gestores Asociados y necesito asesoramiento sobre un trámite."),
  },
  {
    name: "Natalia",
    role: "Atención al Cliente",
    phone: "5491166900550",
    initial: "N",
    msg: encodeURIComponent("¡Hola Natalia! Vengo de la página web de Gestores Asociados y necesito asesoramiento sobre un trámite."),
  },
  {
    name: "Florencia",
    role: "Mandataria Nacional Matriculada D.N.R.P.A.",
    phone: "5491127273404",
    initial: "F",
    msg: encodeURIComponent("¡Hola Florencia! Vengo de la página web de Gestores Asociados y necesito asesoramiento sobre un trámite."),
  },
];

// Zonas de Cobertura
export const coverageAreas = [
  { title: "Lanús Este & Oeste", desc: "Oficina central y atención presencial/coordinada inmediata." },
  { title: "Avellaneda", desc: "Gestiones rápidas ante Registros Automotores de la zona." },
  { title: "Lomas de Zamora", desc: "Trámites de transferencia, informes y verificación." },
  { title: "Quilmes", desc: "Asesoramiento integral para particulares y flotas." },
  { title: "CABA", desc: "Cobertura en registros e instituciones de Capital Federal." },
  { title: "Zona Sur GBA", desc: "Atención a partidos aledaños con logística ágil." },
];

// Preguntas Frecuentes
export const faqs = [
  {
    q: "¿Qué documentación necesito para iniciar una transferencia?",
    a: "Lo fundamental es contar con el Título de propiedad (físico o digital), la Cédula de identificación del vehículo, DNI de comprador y vendedor, y el formulario 08 (firmado o para firmar). Nosotros revisamos toda la documentación para que no tengas demoras.",
  },
  {
    q: "¿Puedo consultar o descontar infracciones antes de vender o comprar?",
    a: "¡Sí! Hacemos un informe exhaustivo de multas y deudas de patentes a nivel municipal y provincial (ARBA/CABA), gestionamos los descargos correspondientes y te asesoramos para que resuelvas la deuda de la forma más económica posible.",
  },
  {
    q: "¿Cuánto tarda un Informe de Dominio?",
    a: "Los informes de dominio urgente o en el acto se obtienen en el día (muchas veces en minutos), mientras que los comunes tardan entre 24 y 48 horas hábiles. Te avisamos inmediatamente apenas lo tenemos en mano.",
  },
  {
    q: "¿Atienden únicamente en Lanús o en toda Zona Sur y CABA?",
    a: "Si bien nuestra oficina central está ubicada en Lanús (Colón 3939), realizamos radicaciones, transferencias y trámites en registros automotores de toda Zona Sur (Avellaneda, Lomas de Zamora, Quilmes) y CABA.",
  },
  {
    q: "¿Tienen costo las consultas iniciales por WhatsApp?",
    a: "No, la consulta previa y el asesoramiento inicial para saber qué papeles necesitás o cómo proceder son totalmente gratuitos y sin compromiso.",
  },
];

type Service = {
  t: string;
  d: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  { t: "Infracciones de tránsito", d: "Analizamos tu caso, gestionamos descargos y reducciones de multas.", icon: FileText },
  { t: "Verificación policial", d: "Coordinamos la verificación de tu vehículo sin vueltas.", icon: ShieldCheck },
  { t: "Alta y baja de patente", d: "Radicaciones, altas y bajas ante el Registro Automotor.", icon: Car },
  { t: "Sellado de ARBA", d: "Liquidación y pago de sellos para tus operaciones.", icon: BadgeCheck },
  { t: "Informes al instante", d: "Informes de dominio, 13i, RENAPER, InfoEx y DATEA en minutos.", icon: FileCheck2 },
  { t: "Seguros para motos", d: "Coberturas para aplicaciones, remis y transporte comercial.", icon: Clock },
];

export const reviews = [
  {
    n: "Stefania Orsini",
    r: "Me tuvieron toda la paciencia para explicarme y me solucionaron todo 😎🙌",
    tag: "Transferencia automotor",
  },
  {
    n: "Maximiliano Delia",
    r: "Súper recomendables, todo fue excelente y en tiempo récord.",
    tag: "Informe de dominio e infracciones",
  },
  {
    n: "Fabian Vera",
    r: "Excelente servicio, rápidos y muy eficaces. Súper confiables.",
    tag: "Verificación policial",
  },
  {
    n: "Romitucci82",
    r: "Son excelentes y muy recomendables en confianza. ¡Muchas gracias!",
    tag: "Gestión de patentes",
  },
  {
    n: "Lautaro Martinez",
    r: "Buen servicio y atención constante por WhatsApp, muchas gracias!",
    tag: "Asesoramiento general",
  },
];

export const steps = [
  { t: "Nos escribís", d: "Contanos qué trámite necesitás resolver y mandanos la documentación disponible." },
  { t: "Revisamos tu caso", d: "Analizamos la situación y te explicamos opciones, tiempos y próximos pasos." },
  { t: "Gestionamos", d: "Avanzamos con el trámite y te mantenemos al tanto por el canal más cómodo." },
  { t: "Lo resolvés", d: "Cerramos la gestión con claridad, comprobantes y asesoramiento hasta el final." },
];
