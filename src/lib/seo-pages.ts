export type SeoFaq = { question: string; answer: string };

export type SeoPageContent = {
  path: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
  faqs: SeoFaq[];
  related: string[];
  serviceName: string;
};

export const seoPages: Record<string, SeoPageContent> = {
  "/reduccion-de-multas": {
    path: "/reduccion-de-multas",
    title: "Reducción de Multas de Tránsito | Gestores Asociados",
    description: "Revisamos tus infracciones de tránsito y las alternativas de gestión disponibles según la jurisdicción y las características de cada caso.",
    h1: "Gestión y reducción de multas de tránsito",
    intro: "¿Tenés infracciones pendientes? En Gestores Asociados revisamos la información disponible, identificamos la jurisdicción y te explicamos qué alternativas de gestión pueden corresponder a tu situación.",
    serviceName: "Gestión de infracciones de tránsito",
    sections: [
      { heading: "Primero revisamos tu situación", body: "La posibilidad de gestionar una infracción depende de la autoridad que la emitió, el estado del acta, la documentación y las circunstancias del caso. Por eso no ofrecemos porcentajes de reducción ni resultados garantizados antes de analizar la información.", bullets: ["Identificación de jurisdicciones y actas informadas.", "Revisión inicial de la documentación disponible.", "Explicación de alternativas, costos y próximos pasos antes de avanzar."] },
      { heading: "Gestión clara, sin promesas automáticas", body: "Cuando corresponde, podemos gestionar alternativas administrativas y descargos. La decisión final depende del organismo competente y de las particularidades de cada infracción. La consulta inicial permite determinar si podemos tomar el caso." },
      { heading: "Qué necesitamos para empezar", body: "Enviá la patente y contanos qué trámite necesitás resolver. Revisaremos qué información hace falta y confirmaremos si la jurisdicción está dentro de nuestro alcance operativo." }
    ],
    faqs: [
      { question: "¿Se pueden reducir todas las multas?", answer: "No. Las alternativas dependen de la jurisdicción, el estado del acta y las circunstancias del caso. No se garantiza una reducción ni la eliminación de una infracción." },
      { question: "¿Trabajan con infracciones de cualquier municipio?", answer: "No necesariamente. Existen jurisdicciones excluidas y la cobertura se confirma caso por caso antes de aceptar la gestión." },
      { question: "¿Qué tengo que enviar para consultar?", answer: "Podés comenzar enviando la patente y la información que tengas sobre las infracciones. El equipo te indicará si necesita documentación adicional." }
    ],
    related: ["/descargos-de-fotomultas", "/infracciones-lanus", "/gestoria-automotor"],
  },
  "/descargos-de-fotomultas": {
    path: "/descargos-de-fotomultas",
    title: "Descargos de Fotomultas | Gestores Asociados",
    description: "Evaluamos infracciones y documentación para orientarte sobre la gestión de descargos de fotomultas según cada jurisdicción.",
    h1: "Gestión de descargos de fotomultas",
    intro: "Si recibiste una fotomulta, antes de pagar o iniciar una presentación conviene revisar el acta, la jurisdicción y la documentación disponible. Gestores Asociados analiza el caso y te informa si puede gestionar un descargo.",
    serviceName: "Gestión de descargos de fotomultas",
    sections: [
      { heading: "Qué revisamos", body: "Cada acta debe analizarse según la autoridad emisora, la información que contiene y el estado del procedimiento. No todas las infracciones admiten las mismas alternativas.", bullets: ["Datos del acta y jurisdicción que la emitió.", "Documentación e información aportada por el titular.", "Disponibilidad de una vía de gestión para ese caso."] },
      { heading: "Cómo es el proceso", body: "Nos enviás la información, revisamos si podemos tomar la gestión y te explicamos el alcance, los costos y los pasos siguientes. No se inicia ningún trámite sin que conozcas las condiciones." },
      { heading: "Alcance y resultado", body: "La resolución corresponde al organismo competente. La presentación de un descargo no implica que la infracción vaya a ser anulada o reducida." }
    ],
    faqs: [
      { question: "¿Pueden garantizar que anulen una fotomulta?", answer: "No. La decisión depende de la autoridad competente y de las circunstancias de cada acta." },
      { question: "¿Qué documentación envío?", answer: "Comenzá con la patente y una copia o imagen del acta. Luego te indicaremos qué documentación adicional puede ser necesaria." },
      { question: "¿Atienden cualquier jurisdicción?", answer: "No. Hay jurisdicciones excluidas; confirmamos la disponibilidad antes de aceptar el caso." }
    ],
    related: ["/reduccion-de-multas", "/infracciones-lanus", "/preguntas-frecuentes"],
  },
  "/gestoria-automotor": {
    path: "/gestoria-automotor",
    title: "Gestoría del Automotor | Gestores Asociados",
    description: "Asesoramiento y gestión de trámites del automotor: transferencias, informes, altas, bajas y consultas de infracciones.",
    h1: "Gestoría del automotor para particulares",
    intro: "En Gestores Asociados te acompañamos en trámites del automotor con revisión previa de la documentación, explicación de requisitos y seguimiento por WhatsApp.",
    serviceName: "Gestoría del automotor",
    sections: [
      { heading: "Trámites y consultas", body: "Centralizamos distintas gestiones para que puedas conocer qué documentación necesitás y cómo avanzar según tu vehículo y tu situación.", bullets: ["Transferencias y trámites registrales.", "Informes de dominio y consultas de deuda.", "Altas, bajas y otras gestiones administrativas.", "Revisión y gestión de infracciones, según jurisdicción."] },
      { heading: "Atención con información clara", body: "Antes de avanzar revisamos el pedido, explicamos el alcance de la gestión y comunicamos los costos y requisitos disponibles. Los plazos dependen del organismo y del tipo de trámite." },
      { heading: "Atención desde Lanús", body: "La oficina de Gestores Asociados está en Colón 3939, Lanús, Buenos Aires. La atención y la posibilidad de realizar cada gestión fuera de la zona se confirman según el trámite." }
    ],
    faqs: [
      { question: "¿Puedo iniciar una consulta por WhatsApp?", answer: "Sí. Podés escribir al equipo, indicar el trámite y enviar la documentación disponible para una revisión inicial." },
      { question: "¿Trabajan en toda la Provincia de Buenos Aires?", answer: "La cobertura no incluye todas las jurisdicciones. Confirmamos cada caso antes de aceptar la gestión." },
      { question: "¿Me informan los costos antes de empezar?", answer: "Sí. El alcance y los costos de la gestión se informan antes de avanzar." }
    ],
    related: ["/gestoria-automotor-lanus", "/transferencias-automotor", "/informes-de-dominio"],
  },
  "/gestoria-automotor-lanus": {
    path: "/gestoria-automotor-lanus",
    title: "Gestoría del Automotor en Lanús | Gestores Asociados",
    description: "Gestoría del automotor en Lanús. Consultá por transferencias, informes de dominio, infracciones y otros trámites.",
    h1: "Gestoría del automotor en Lanús",
    intro: "Gestores Asociados brinda asesoramiento y gestión de trámites del automotor desde su oficina de Colón 3939, Lanús, Buenos Aires. Podés iniciar tu consulta por WhatsApp y recibir orientación sobre los pasos y la documentación.",
    serviceName: "Gestoría del automotor en Lanús",
    sections: [
      { heading: "Servicios de gestoría", body: "Atendemos consultas de particulares sobre distintas gestiones vinculadas con vehículos.", bullets: ["Transferencias automotor.", "Informes de dominio.", "Consultas y gestión de infracciones, según jurisdicción.", "Altas, bajas y otras gestiones administrativas."] },
      { heading: "Ubicación y atención", body: "Nuestra dirección es Colón 3939, Lanús, Buenos Aires. Antes de acercarte, contactanos para confirmar la modalidad de atención y la documentación necesaria." },
      { heading: "Presupuesto y condiciones", body: "Cada trámite tiene requisitos y costos propios. Revisamos tu consulta y te explicamos el alcance antes de iniciar la gestión." }
    ],
    faqs: [
      { question: "¿Dónde están ubicados?", answer: "En Colón 3939, Lanús, Buenos Aires. Contactanos para coordinar la atención." },
      { question: "¿Puedo resolver todo de forma online?", answer: "Algunas consultas y etapas pueden coordinarse a distancia. La modalidad depende del trámite y de los requisitos del organismo." },
      { question: "¿Atienden fuera de Lanús?", answer: "La cobertura depende del tipo de trámite y la jurisdicción. Consultanos antes de iniciar." }
    ],
    related: ["/gestoria-automotor", "/infracciones-lanus", "/transferencias-automotor"],
  },
  "/infracciones-lanus": {
    path: "/infracciones-lanus",
    title: "Consulta y Gestión de Infracciones en Lanús | Gestores Asociados",
    description: "Consultá por infracciones de tránsito vinculadas con Lanús. Revisamos el caso y confirmamos las alternativas de gestión disponibles.",
    h1: "Gestión de infracciones de tránsito en Lanús",
    intro: "Si necesitás revisar infracciones vinculadas con Lanús, podemos analizar la información disponible y explicarte qué alternativas de gestión existen para tu caso.",
    serviceName: "Gestión de infracciones de tránsito en Lanús",
    sections: [
      { heading: "La jurisdicción importa", body: "La gestión depende de qué organismo emitió el acta y de si esa jurisdicción se encuentra dentro de nuestra cobertura. La ubicación del conductor o del domicilio no determina por sí sola dónde se tramita una infracción.", bullets: ["Identificamos el organismo emisor.", "Revisamos el estado y los datos del acta.", "Confirmamos si podemos tomar la gestión antes de presupuestar."] },
      { heading: "Alternativas según cada caso", body: "Cuando corresponde, podemos orientar o gestionar alternativas administrativas y descargos. No se garantiza la reducción ni la anulación de multas." },
      { heading: "Cómo consultar", body: "Escribinos con la patente y la información de la infracción. Te confirmaremos si podemos intervenir y cuáles serían los pasos siguientes." }
    ],
    faqs: [
      { question: "¿Todas las multas de Lanús se pueden gestionar?", answer: "No necesariamente. La cobertura depende del organismo emisor y del tipo y estado del acta." },
      { question: "¿Puedo consultar antes de pagar?", answer: "Sí. Podés enviarnos la información para revisar el caso y conocer las alternativas disponibles." },
      { question: "¿La gestión asegura que desaparezca la multa?", answer: "No. La resolución depende de la autoridad competente." }
    ],
    related: ["/reduccion-de-multas", "/descargos-de-fotomultas", "/gestoria-automotor-lanus"],
  },
  "/transferencias-automotor": {
    path: "/transferencias-automotor",
    title: "Transferencias del Automotor | Gestores Asociados",
    description: "Asesoramiento para transferencias de vehículos: revisión de documentación, requisitos y coordinación del trámite.",
    h1: "Asesoramiento y gestión de transferencias del automotor",
    intro: "Te ayudamos a ordenar la documentación y coordinar los pasos de una transferencia para que sepas qué necesitás antes de iniciar el trámite.",
    serviceName: "Transferencias del automotor",
    sections: [
      { heading: "Revisión previa de documentación", body: "La documentación necesaria depende de la situación registral y de las características de la operación. Revisamos lo que tenés disponible y te indicamos qué falta.", bullets: ["Datos de comprador y vendedor.", "Identificación del vehículo.", "Título y cédulas disponibles.", "Información adicional que requiera el Registro Seccional."] },
      { heading: "Coordinación del trámite", body: "Te orientamos sobre los pasos, turnos y requisitos aplicables. Los costos registrales y los plazos dependen del trámite y del organismo interviniente." },
      { heading: "Antes de avanzar", body: "Podés enviarnos tu consulta por WhatsApp. Revisamos el caso y te informamos el alcance y el presupuesto de la gestión." }
    ],
    faqs: [
      { question: "¿Qué documentación necesito?", answer: "Depende del vehículo y de la operación. Como punto de partida, prepará los datos de comprador y vendedor y la documentación registral disponible." },
      { question: "¿Pueden revisar si hay infracciones?", answer: "Sí, podés consultar por informes y revisión de infracciones. La cobertura de estas últimas depende de la jurisdicción." },
      { question: "¿Cuánto demora una transferencia?", answer: "El plazo depende del Registro Seccional, la documentación y las características del trámite. Se confirma al revisar el caso." }
    ],
    related: ["/gestoria-automotor", "/informes-de-dominio", "/reduccion-de-multas"],
  },
  "/informes-de-dominio": {
    path: "/informes-de-dominio",
    title: "Informes de Dominio Automotor | Gestores Asociados",
    description: "Solicitá un informe de dominio automotor y consultá qué datos necesitás para iniciar la gestión.",
    h1: "Informes de dominio automotor",
    intro: "El informe de dominio permite consultar información registral de un vehículo. En Gestores Asociados te orientamos para solicitarlo y revisar qué necesitás para iniciar la gestión.",
    serviceName: "Informes de dominio automotor",
    sections: [
      { heading: "Para qué sirve", body: "Es una herramienta de consulta registral que puede ayudar antes de una compra, venta o trámite. El contenido y alcance del informe dependen del tipo de solicitud emitida por el Registro." },
      { heading: "Qué necesitamos", body: "Como primer dato, enviá la patente del vehículo. Te indicaremos qué tipo de informe corresponde y cómo continuar." },
      { heading: "Información y entrega", body: "El tipo de informe, los costos y los tiempos disponibles se confirman antes de iniciar el pedido. No publicamos un plazo único porque puede variar según la modalidad y el organismo." }
    ],
    faqs: [
      { question: "¿Qué dato necesito para pedirlo?", answer: "La patente del vehículo es el dato inicial para orientar la solicitud." },
      { question: "¿El informe reemplaza una revisión mecánica?", answer: "No. Es una consulta registral y no sustituye una inspección mecánica ni otras verificaciones del vehículo." },
      { question: "¿Cuánto cuesta y cuánto demora?", answer: "El costo y el plazo dependen del tipo de informe y de la modalidad disponible. Se informan antes de iniciar." }
    ],
    related: ["/transferencias-automotor", "/gestoria-automotor", "/reduccion-de-multas"],
  },
  "/preguntas-frecuentes": {
    path: "/preguntas-frecuentes",
    title: "Preguntas Frecuentes sobre Multas y Gestoría | Gestores Asociados",
    description: "Respuestas sobre infracciones, descargos, transferencias, informes de dominio y trámites del automotor.",
    h1: "Preguntas frecuentes sobre multas y gestoría automotor",
    intro: "Reunimos respuestas iniciales para que conozcas cómo trabajamos, qué información preparar y qué aspectos dependen de cada jurisdicción.",
    serviceName: "Asesoramiento sobre trámites del automotor",
    sections: [
      { heading: "Consultas antes de contratar", body: "Podés escribirnos antes de iniciar una gestión. Revisamos la consulta, confirmamos si podemos tomar el caso y explicamos el alcance y los costos." },
      { heading: "Jurisdicciones y resultados", body: "No trabajamos todas las jurisdicciones. La cobertura se confirma según el organismo emisor y las características del trámite. Ninguna gestión de infracciones implica un resultado garantizado." },
      { heading: "Canales de atención", body: "La consulta inicial se puede realizar por WhatsApp. La documentación y modalidad de atención se coordinan de acuerdo con cada trámite." }
    ],
    faqs: [
      { question: "¿La consulta inicial tiene costo?", answer: "La consulta inicial para orientar el caso es gratuita. Si corresponde avanzar con una gestión, se informa el presupuesto antes de comenzar." },
      { question: "¿Pueden reducir cualquier multa?", answer: "No. Las alternativas dependen de la jurisdicción, el acta y las circunstancias del caso. No se garantizan resultados." },
      { question: "¿Qué información envío para consultar infracciones?", answer: "Como primer paso, enviá la patente y, si la tenés, la información o copia de las actas." },
      { question: "¿Qué trámites de automotor realizan?", answer: "Atendemos consultas sobre transferencias, informes de dominio, altas, bajas y otras gestiones administrativas. Confirmamos cada caso antes de aceptarlo." },
      { question: "¿Dónde están ubicados?", answer: "En Colón 3939, Lanús, Buenos Aires. Escribinos para coordinar la atención." }
    ],
    related: ["/reduccion-de-multas", "/gestoria-automotor", "/transferencias-automotor"],
  },
  "/gestoria-para-agencias": {
    path: "/gestoria-para-agencias",
    title: "Gestoría para Agencias de Autos | Gestores Asociados",
    description: "Soluciones de gestoría para agencias y concesionarias: coordinación de trámites, turnos prioritarios y seguimiento.",
    h1: "Gestoría automotor para agencias y concesionarias",
    intro: "Gestores Asociados ofrece un canal de atención para agencias y concesionarias que necesitan coordinar trámites del automotor y ordenar la documentación de sus operaciones.",
    serviceName: "Gestoría para agencias y concesionarias",
    sections: [
      { heading: "Un canal para las gestiones de tu agencia", body: "Podés centralizar consultas y coordinar trámites con nuestro equipo. El alcance se define según el tipo de operación, la documentación y la jurisdicción.", bullets: ["Coordinación de trámites del automotor.", "Revisión inicial de documentación.", "Consulta por turnos prioritarios, sujetos a disponibilidad.", "Seguimiento y comunicación del estado de cada gestión."] },
      { heading: "Cómo trabajamos con agencias", body: "Relevamos qué tipo de operaciones necesitás gestionar, acordamos el circuito de contacto y confirmamos qué gestiones podemos tomar. Los costos y condiciones se informan antes de avanzar." },
      { heading: "Empezá con una consulta", body: "Escribinos indicando el nombre de la agencia, el volumen y tipo de trámites habituales y las jurisdicciones involucradas. Esa información permite evaluar el alcance posible sin asumir coberturas que no correspondan." }
    ],
    faqs: [
      { question: "¿Trabajan con agencias y concesionarias?", answer: "Sí. Contamos con una propuesta de atención para agencias y concesionarias, sujeta a definir el tipo de operación y las gestiones requeridas." },
      { question: "¿Ofrecen turnos prioritarios?", answer: "Podemos coordinar consultas por turnos prioritarios, sujetos a disponibilidad y a los requisitos del organismo correspondiente." },
      { question: "¿Pueden gestionar trámites en cualquier jurisdicción?", answer: "No todas las jurisdicciones están incluidas. Se confirma la cobertura para cada gestión." }
    ],
    related: ["/servicios-para-mandatarios", "/transferencias-automotor", "/informes-de-dominio"],
  },
  "/servicios-para-mandatarios": {
    path: "/servicios-para-mandatarios",
    title: "Servicios y Herramientas para Mandatarios | Gestores Asociados",
    description: "Apoyo operativo para mandatarios del automotor: herramientas legales, coordinación de turnos y gestión más ágil de trámites.",
    h1: "Herramientas y apoyo operativo para mandatarios",
    intro: "Gestores Asociados ofrece soluciones de apoyo para mandatarios que buscan agilizar la organización y ejecución de trámites del automotor.",
    serviceName: "Servicios para mandatarios del automotor",
    sections: [
      { heading: "Apoyo para agilizar trámites", body: "La propuesta contempla herramientas legales de mandatarios para facilitar la preparación y gestión de trámites, junto con coordinación operativa.", bullets: ["Herramientas legales propias del trabajo de mandatarios.", "Coordinación de turnos prioritarios, sujetos a disponibilidad.", "Apoyo en la preparación y organización de gestiones.", "Canal de consulta para definir alcance y condiciones."] },
      { heading: "Alcance según cada gestión", body: "Las herramientas y el apoyo disponibles dependen del trámite, la jurisdicción y las facultades aplicables. No reemplazan los requisitos ni las validaciones del Registro u organismo competente." },
      { heading: "Coordinemos el trabajo", body: "Contactanos e indicá qué tipo de trámites realizás y qué apoyo necesitás. Te confirmaremos qué alternativas podemos ofrecer y bajo qué condiciones." }
    ],
    faqs: [
      { question: "¿Qué herramientas ofrecen a mandatarios?", answer: "Ofrecemos herramientas legales de mandatarios y apoyo operativo para organizar y agilizar trámites. El alcance se confirma según el caso." },
      { question: "¿Los turnos prioritarios están garantizados?", answer: "No. La coordinación está sujeta a disponibilidad y a las reglas del organismo correspondiente." },
      { question: "¿Puedo consultar por una jurisdicción específica?", answer: "Sí. Indicá el organismo y el trámite para confirmar si podemos brindar apoyo." }
    ],
    related: ["/gestoria-para-agencias", "/gestoria-automotor", "/transferencias-automotor"],
  },
};

export const seoPagePaths = Object.keys(seoPages);
