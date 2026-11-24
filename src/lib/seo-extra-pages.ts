import type { SeoPageContent } from "./seo-pages";

export const seoExtraPages: Record<string, SeoPageContent> = {
  "/infracciones-provincia-buenos-aires": {
    path: "/infracciones-provincia-buenos-aires",
    title: "Infracciones en Provincia de Buenos Aires | Gestores Asociados",
    description: "Consultá por infracciones de tránsito en la Provincia de Buenos Aires. Revisamos jurisdicción, actas y alternativas de gestión disponibles.",
    h1: "Consulta y gestión de infracciones en la Provincia de Buenos Aires",
    intro: "La Provincia de Buenos Aires reúne distintos organismos y juzgados con competencias propias. Antes de presupuestar una gestión, identificamos quién emitió el acta y verificamos si esa jurisdicción está dentro de nuestra cobertura operativa.",
    serviceName: "Consulta de infracciones en Provincia de Buenos Aires",
    sections: [
      { heading: "La jurisdicción define el trámite", body: "No todas las infracciones provinciales y municipales se gestionan del mismo modo. La autoridad emisora, el estado del acta y la documentación disponible determinan qué alternativas pueden evaluarse.", bullets: ["Identificación del organismo emisor y jurisdicción.", "Revisión de actas y estado informado.", "Confirmación previa de cobertura, alcance y presupuesto."] },
      { heading: "Qué enviar para una primera revisión", body: "Podés iniciar la consulta con la patente y la información o documentación de las infracciones. Si hace falta algún dato adicional, te lo indicaremos antes de avanzar." },
      { heading: "Alcance y condiciones", body: "No trabajamos todas las jurisdicciones. La posibilidad de presentar un descargo o gestionar una alternativa se analiza caso por caso y la resolución corresponde al organismo competente." }
    ],
    faqs: [
      { question: "¿Gestionan todas las multas de la Provincia?", answer: "No. La cobertura depende del organismo y de la jurisdicción concreta. La confirmamos antes de aceptar el trabajo." },
      { question: "¿Pueden asegurar una reducción?", answer: "No. No se garantizan reducciones ni anulaciones. Las alternativas dependen del acta y de la decisión de la autoridad competente." },
      { question: "¿Qué información envío?", answer: "Como primer paso, la patente y una copia o detalle de las actas disponibles." }
    ],
    related: ["/reduccion-de-multas", "/descargos-de-infracciones", "/infracciones-lanus"]
  },
  "/descargos-de-infracciones": {
    path: "/descargos-de-infracciones",
    title: "Descargos de Infracciones de Tránsito | Gestores Asociados",
    description: "Evaluación y gestión de descargos de infracciones. Revisamos actas, documentación y jurisdicción antes de confirmar si es posible intervenir.",
    h1: "Descargos de infracciones de tránsito",
    intro: "Un descargo requiere revisar el acta concreta, la autoridad que la emitió y los antecedentes disponibles. En Gestores Asociados analizamos esa información y te explicamos si existe una alternativa de gestión para tu caso.",
    serviceName: "Evaluación y gestión de descargos de infracciones",
    sections: [
      { heading: "Qué se analiza", body: "La revisión puede incluir los datos del acta, la jurisdicción, el estado del procedimiento y la documentación que aporte el titular. No todas las infracciones admiten una presentación ni todas las jurisdicciones están cubiertas.", bullets: ["Datos identificatorios del acta.", "Organismo emisor y estado de la infracción.", "Documentación y antecedentes aportados."] },
      { heading: "Cómo trabajamos", body: "Recibimos la consulta, revisamos la información, confirmamos si podemos tomar el caso y comunicamos alcance y costos. La gestión comienza únicamente después de que conozcas las condiciones." },
      { heading: "Resultado del trámite", body: "La presentación no garantiza que una multa sea anulada, reducida o modificada. La resolución depende exclusivamente de la autoridad competente." }
    ],
    faqs: [
      { question: "¿Un descargo elimina automáticamente la multa?", answer: "No. La autoridad competente evalúa la presentación y decide. No podemos garantizar un resultado." },
      { question: "¿Qué documentación necesito?", answer: "Para iniciar, enviá la patente y una copia o imagen legible del acta. Luego indicaremos si se necesita documentación adicional." },
      { question: "¿Puedo presentar un descargo en cualquier jurisdicción?", answer: "La cobertura se confirma según el organismo emisor y el tipo de infracción." }
    ],
    related: ["/reduccion-de-multas", "/infracciones-provincia-buenos-aires", "/infracciones-lanus"]
  },
  "/infracciones-lomas-de-zamora": {
    path: "/infracciones-lomas-de-zamora",
    title: "Infracciones de Tránsito en Lomas de Zamora | Gestores Asociados",
    description: "Consultá por multas vinculadas con Lomas de Zamora. Revisamos actas, organismo emisor y opciones de gestión según el caso.",
    h1: "Consulta de infracciones de tránsito en Lomas de Zamora",
    intro: "Si necesitás revisar infracciones vinculadas con Lomas de Zamora, podemos analizar los datos disponibles y confirmar si el organismo emisor y el estado del acta permiten tomar una gestión.",
    serviceName: "Consulta de infracciones en Lomas de Zamora",
    sections: [
      { heading: "Revisión de cada acta", body: "La localidad por sí sola no alcanza para determinar cómo se tramita una infracción. Identificamos la autoridad emisora, el estado informado y la documentación antes de ofrecer una alternativa.", bullets: ["Patente y datos del acta.", "Organismo que registra la infracción.", "Cobertura y vía de gestión disponible."] },
      { heading: "Presupuesto antes de avanzar", body: "Te explicamos qué gestión puede realizarse, qué documentación hace falta y cuáles son los costos antes de iniciar el trabajo." },
      { heading: "Sin resultados garantizados", body: "No todas las actas admiten descargos ni se garantiza una reducción o anulación. La decisión final corresponde al organismo competente." }
    ],
    faqs: [
      { question: "¿Pueden revisar multas de Lomas de Zamora?", answer: "Sí, podés enviar la información para una evaluación inicial. La posibilidad de tomar el caso se confirma según el organismo emisor." },
      { question: "¿Qué envío por WhatsApp?", answer: "La patente y una imagen o detalle de las infracciones que necesitás revisar." },
      { question: "¿La gestión asegura que pueda renovar la licencia?", answer: "No podemos garantizar resultados ni decisiones de terceros. Primero revisamos el estado y las alternativas aplicables." }
    ],
    related: ["/reduccion-de-multas", "/descargos-de-infracciones", "/infracciones-lanus"]
  },
  "/infracciones-avellaneda": {
    path: "/infracciones-avellaneda",
    title: "Infracciones de Tránsito en Avellaneda | Gestores Asociados",
    description: "Revisión de infracciones vinculadas con Avellaneda. Consultá por jurisdicción, documentación y alternativas de gestión.",
    h1: "Gestión y consulta de infracciones en Avellaneda",
    intro: "Para evaluar una infracción vinculada con Avellaneda necesitamos identificar el organismo que la emitió y revisar el estado del acta. Con esos datos podemos confirmar si existe una alternativa de gestión dentro de nuestra cobertura.",
    serviceName: "Consulta de infracciones en Avellaneda",
    sections: [
      { heading: "Identificamos quién emitió el acta", body: "Las competencias pueden variar entre organismos. Por eso revisamos la información concreta y no asumimos que toda infracción asociada a una localidad se tramita ante la misma autoridad.", bullets: ["Patente y datos de la infracción.", "Organismo y jurisdicción emisora.", "Estado del acta y documentación disponible."] },
      { heading: "Información clara antes de contratar", body: "Si podemos intervenir, te informamos el alcance, la documentación, los costos y los pasos previstos antes de comenzar." },
      { heading: "Evaluación caso por caso", body: "La cobertura puede tener exclusiones y la decisión final corresponde al organismo competente. No se prometen reducciones ni anulaciones." }
    ],
    faqs: [
      { question: "¿Atienden infracciones de Avellaneda?", answer: "Podés enviarnos la información para verificar el organismo emisor y confirmar si podemos tomar el caso." },
      { question: "¿Necesito acercarme a una oficina?", answer: "La consulta inicial puede comenzar por WhatsApp. La modalidad posterior depende de la documentación y del trámite." },
      { question: "¿Pueden garantizar que desaparezca la infracción?", answer: "No. El resultado depende de la autoridad competente y de las circunstancias del caso." }
    ],
    related: ["/reduccion-de-multas", "/descargos-de-infracciones", "/infracciones-lanus"]
  },
  "/verificacion-policial": {
    path: "/verificacion-policial",
    title: "Verificación Policial del Automotor | Gestores Asociados",
    description: "Asesoramiento y coordinación para la verificación policial del automotor. Consultá requisitos y disponibilidad según tu vehículo y jurisdicción.",
    h1: "Verificación policial del automotor",
    intro: "La verificación policial puede ser un requisito para determinadas operaciones registrales. Te orientamos sobre cómo coordinarla y qué información preparar según el vehículo y el trámite que necesitás realizar.",
    serviceName: "Asesoramiento y coordinación de verificación policial",
    sections: [
      { heading: "Antes de coordinar", body: "Los requisitos y la modalidad dependen del tipo de vehículo, la operación y las disposiciones vigentes. Revisamos tu situación para indicarte los pasos aplicables.", bullets: ["Dominio y datos del vehículo.", "Tipo de trámite registral que vas a realizar.", "Disponibilidad y requisitos del lugar de verificación."] },
      { heading: "Cómo iniciar la consulta", body: "Escribinos con la patente y contanos si se trata de una transferencia u otra gestión. Te indicaremos qué documentación y coordinación corresponden." },
      { heading: "Disponibilidad y costos", body: "La disponibilidad de turnos, los aranceles y los requisitos pueden variar. Se confirman antes de contratar." }
    ],
    faqs: [
      { question: "¿Qué necesito para consultar?", answer: "La patente y el motivo de la verificación. Con esos datos podemos orientarte sobre los próximos pasos." },
      { question: "¿La verificación siempre es obligatoria?", answer: "Depende de la operación y de las reglas registrales aplicables. Revisamos tu caso antes de indicarte el requisito." },
      { question: "¿Pueden garantizar un turno inmediato?", answer: "No. Los turnos y la disponibilidad dependen del sistema y de los centros habilitados." }
    ],
    related: ["/transferencias-automotor", "/informes-de-dominio", "/gestoria-automotor"]
  },
  "/alta-baja-patentes": {
    path: "/alta-baja-patentes",
    title: "Alta y Baja de Patentes del Automotor | Gestores Asociados",
    description: "Asesoramiento para altas, bajas y gestiones de patentes. Revisamos jurisdicción, documentación y requisitos del organismo correspondiente.",
    h1: "Altas y bajas de patentes del automotor",
    intro: "Las altas y bajas de patentes dependen de la radicación del vehículo, el motivo de la gestión y los requisitos del organismo recaudador. Te ayudamos a identificar los pasos y la documentación necesaria.",
    serviceName: "Gestión de altas y bajas de patentes",
    sections: [
      { heading: "Qué información necesitamos", body: "Para orientar la gestión revisamos la patente, la jurisdicción actual y el motivo del alta o la baja. Según el caso puede ser necesaria documentación registral o impositiva.", bullets: ["Dominio del vehículo.", "Jurisdicción de radicación.", "Motivo y fecha de la gestión.", "Documentación registral disponible."] },
      { heading: "Revisión y coordinación", body: "Verificamos qué organismo interviene y te informamos requisitos, costos y pasos antes de avanzar. Los plazos dependen de la administración correspondiente." },
      { heading: "Alcance de la gestión", body: "La aceptación del trámite depende de la jurisdicción y de la documentación. No se garantizan plazos de organismos externos." }
    ],
    faqs: [
      { question: "¿Qué documentación necesito para una baja?", answer: "Depende del motivo y de la jurisdicción. Comenzá con la patente y la documentación del vehículo para revisar el caso." },
      { question: "¿Pueden hacer altas y bajas en cualquier provincia?", answer: "La cobertura se confirma según el organismo y el trámite específico." },
      { question: "¿Cuánto demora?", answer: "Los tiempos dependen del organismo y de que la documentación esté completa." }
    ],
    related: ["/transferencias-automotor", "/sellado-arba", "/informes-de-dominio"]
  },
  "/sellado-arba": {
    path: "/sellado-arba",
    title: "Sellado ARBA para Transferencias | Gestores Asociados",
    description: "Orientación y gestión del sellado ARBA relacionado con operaciones automotoras. Consultá requisitos y liquidación según tu operación.",
    h1: "Sellado ARBA para operaciones del automotor",
    intro: "En determinadas operaciones puede corresponder el impuesto de sellos provincial. Te orientamos sobre la información necesaria para revisar la liquidación y los pasos vinculados con ARBA.",
    serviceName: "Asesoramiento y gestión de sellado ARBA",
    sections: [
      { heading: "Revisión de la operación", body: "La liquidación depende de las características de la operación, los datos declarados y las reglas vigentes. Revisamos la información disponible antes de indicar cómo continuar.", bullets: ["Datos de la operación y fecha.", "Identificación del vehículo.", "Información de comprador y vendedor cuando corresponda."] },
      { heading: "Liquidación y pasos", body: "Te informamos qué datos faltan, qué organismo interviene y cuáles son los costos y pasos aplicables. Los importes deben confirmarse según la operación concreta." },
      { heading: "Condiciones", body: "La determinación del impuesto y su tratamiento corresponden a la normativa y al organismo recaudador. No publicamos importes genéricos como si fueran aplicables a todos los casos." }
    ],
    faqs: [
      { question: "¿Todas las transferencias pagan el mismo sellado?", answer: "No necesariamente. El tratamiento depende de la operación y de las reglas aplicables." },
      { question: "¿Qué datos envío para consultar?", answer: "La patente y los datos básicos de la operación. Te indicaremos qué documentación adicional hace falta." },
      { question: "¿Pueden confirmar el importe antes de iniciar?", answer: "Revisamos los datos disponibles y confirmamos la liquidación y los costos aplicables antes de avanzar." }
    ],
    related: ["/transferencias-automotor", "/alta-baja-patentes", "/informes-de-dominio"]
  },
  "/asesores": {
    path: "/asesores",
    title: "Asesores de Gestores Asociados | Atención por WhatsApp",
    description: "Conocé los canales de atención de Gestores Asociados y contactá al equipo para consultar por trámites del automotor e infracciones.",
    h1: "Contactá al equipo de Gestores Asociados",
    intro: "Podés iniciar tu consulta con el equipo y recibir orientación sobre infracciones, trámites registrales y gestiones administrativas. La derivación depende del tema de tu consulta.",
    serviceName: "Asesoramiento de Gestores Asociados",
    sections: [
      { heading: "Christian", body: "Consultas sobre infracciones de tránsito, revisión inicial de actas y alternativas de gestión." },
      { heading: "Natalia", body: "Atención al cliente y orientación inicial para consultas y seguimiento." },
      { heading: "Florencia", body: "Consultas vinculadas con trámites del automotor y gestión registral." },
      { heading: "Cómo preparar tu consulta", body: "Indicá qué trámite necesitás, la jurisdicción y la información disponible. Evitá enviar datos personales que no sean necesarios para la evaluación inicial." }
    ],
    faqs: [
      { question: "¿Puedo elegir con quién hablar?", answer: "Podés escribir al equipo e indicar el motivo de tu consulta para orientar la atención." },
      { question: "¿La consulta inicial tiene costo?", answer: "La consulta inicial de orientación se realiza sin compromiso. Cualquier gestión arancelada se informa antes de avanzar." },
      { question: "¿Dónde atienden?", answer: "La oficina está en Colón 3939, Lanús, Buenos Aires. Coordiná previamente la modalidad de atención." }
    ],
    related: ["/contacto", "/reduccion-de-multas", "/transferencias-automotor"]
  },
  "/blog": {
    path: "/blog",
    title: "Consejos sobre Multas y Trámites del Automotor | Gestores Asociados",
    description: "Guías prácticas sobre infracciones, transferencias, informes de dominio y trámites del automotor en Argentina.",
    h1: "Guías sobre infracciones y trámites del automotor",
    intro: "Información práctica para entender documentación, jurisdicciones y pasos habituales antes de iniciar una gestión. Cada caso puede tener requisitos distintos, por eso conviene verificar la información concreta antes de actuar.",
    serviceName: "Guías informativas de Gestores Asociados",
    sections: [
      { heading: "Cómo revisar una infracción antes de pagar", body: "Identificá el organismo emisor, verificá los datos del acta y comprobá su estado en el sistema oficial correspondiente. Guardá la documentación y consultá qué alternativas existen para esa jurisdicción antes de tomar una decisión." },
      { heading: "Qué revisar antes de comprar un vehículo usado", body: "Además de inspeccionar el vehículo, es conveniente conocer su situación registral. Un informe de dominio permite consultar información relevante del registro; también pueden corresponder verificaciones y consultas adicionales según la operación." },
      { heading: "Documentación para una transferencia", body: "Reuní los datos de comprador y vendedor, la identificación del vehículo y la documentación registral disponible. Los requisitos concretos dependen de la situación del dominio y de las reglas vigentes." },
      { heading: "Información y alcance", body: "Este espacio brinda orientación general y no reemplaza la consulta del organismo competente ni el análisis de la documentación de cada trámite." }
    ],
    faqs: [
      { question: "¿La información reemplaza una consulta oficial?", answer: "No. Los requisitos y estados deben confirmarse ante el organismo competente." },
      { question: "¿Puedo consultar mi caso particular?", answer: "Sí. Podés escribirnos con el tipo de trámite y la información disponible para una revisión inicial." },
      { question: "¿Publican novedades normativas?", answer: "Las novedades deben verificarse con fuentes oficiales antes de aplicarlas a un trámite concreto." }
    ],
    related: ["/reduccion-de-multas", "/transferencias-automotor", "/informes-de-dominio"]
  },
  "/contacto": {
    path: "/contacto",
    title: "Contacto y Ubicación | Gestores Asociados en Lanús",
    description: "Contactá a Gestores Asociados por WhatsApp. Oficina en Colón 3939, Lanús, Buenos Aires. Consultas sobre infracciones y trámites del automotor.",
    h1: "Contactá a Gestores Asociados",
    intro: "Contanos qué necesitás resolver. Revisamos tu consulta y te indicamos si podemos tomar la gestión, qué documentación hace falta y cuáles son los costos antes de avanzar.",
    serviceName: "Contacto con Gestores Asociados",
    sections: [
      { heading: "Atención por WhatsApp", body: "Podés iniciar una consulta por WhatsApp indicando el trámite, la patente cuando corresponda y la jurisdicción. No envíes claves ni información que no sea necesaria." },
      { heading: "Ubicación", body: "Nuestra oficina está en Colón 3939, Lanús, Buenos Aires. Contactanos antes de acercarte para coordinar la modalidad de atención." },
      { heading: "Qué incluir en tu consulta", body: "Describí brevemente el trámite, indicá si existe una fecha límite y adjuntá únicamente la documentación necesaria para la revisión inicial." }
    ],
    faqs: [
      { question: "¿Cómo solicito un presupuesto?", answer: "Escribinos con el trámite y la información disponible. Te informaremos el alcance y los costos antes de iniciar." },
      { question: "¿Puedo hacer la consulta a distancia?", answer: "La consulta inicial puede comenzar por WhatsApp. La modalidad de cada gestión depende de sus requisitos." },
      { question: "¿Dónde están ubicados?", answer: "En Colón 3939, Lanús, Buenos Aires." }
    ],
    related: ["/asesores", "/reduccion-de-multas", "/transferencias-automotor"]
  }
};
