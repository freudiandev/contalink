import type { FaqItem } from "./faqs";

export type BlogSection = { id: string; title: string; paragraphs: string[]; bullets?: string[] };
export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: "Firma electrónica" | "Contabilidad y SRI";
  directAnswer: string;
  sections: BlogSection[];
  faqs: FaqItem[];
  cta: "signature" | "accounting";
};

export const blogPosts: BlogPost[] = [
  {
    slug: "que-es-firma-electronica-ecuador",
    title: "¿Qué es una firma electrónica en Ecuador?",
    description: "Conoce cómo funciona, para qué sirve y cuándo necesitas una firma electrónica en Ecuador.",
    category: "Firma electrónica",
    directAnswer: "Una firma electrónica es un conjunto de datos digitales que identifica al firmante y permite suscribir documentos electrónicos. En Ecuador se usa en trámites del SRI, facturación electrónica, contratos, procesos empresariales y gestiones ante instituciones públicas o privadas. Puede emitirse en archivo P12 o almacenarse en un token USB. Para elegir la modalidad adecuada conviene considerar el nivel de seguridad, los sistemas donde se utilizará y el perfil del titular.",
    sections: [
      { id: "como-funciona", title: "Cómo funciona una firma electrónica", paragraphs: ["El certificado vincula la identidad validada del titular con mecanismos criptográficos. Al firmar, permite comprobar quién suscribió el documento y detectar cambios posteriores."], bullets: ["Identifica al titular", "Protege la integridad del documento", "Facilita trámites remotos", "Reduce impresión y traslados"] },
      { id: "usos", title: "Usos frecuentes en Ecuador", paragraphs: ["Profesionales, emprendedores, representantes legales y empresas la utilizan para operar con mayor agilidad."], bullets: ["Declaraciones y trámites ante el SRI", "Facturación electrónica", "Contratos y documentos digitales", "Gestiones empresariales y societarias"] },
      { id: "modalidades", title: "Archivo P12 o token", paragraphs: ["El archivo P12 es práctico para uso habitual en equipos controlados. El token conserva el certificado en un dispositivo físico y suele preferirse cuando se requiere mayor control de acceso."] },
    ],
    faqs: [
      { question: "¿Una firma escaneada es una firma electrónica?", answer: "No necesariamente. Una imagen de firma no ofrece por sí sola las validaciones de identidad e integridad de un certificado digital." },
      { question: "¿La firma electrónica sirve para el SRI?", answer: "Sí, se utiliza en procesos compatibles del SRI y en facturación electrónica." },
      { question: "¿ContaLink atiende fuera de Quito?", answer: "Sí, ofrece atención digital para clientes en todo Ecuador." },
    ],
    cta: "signature",
  },
  {
    slug: "firma-electronica-archivo-vs-token",
    title: "Firma electrónica en archivo vs token: diferencias",
    description: "Compara seguridad, movilidad, instalación y perfil ideal antes de elegir tu firma electrónica.",
    category: "Firma electrónica",
    directAnswer: "La firma electrónica en archivo P12 se entrega como un archivo digital protegido por clave, mientras que la firma en token se almacena en un dispositivo USB. El archivo suele ser más cómodo y accesible para profesionales y emprendedores; el token añade control físico y puede convenir a empresas o representantes legales. Ambas modalidades pueden tener validez y funcionar con el SRI cuando el certificado y el sistema utilizado son compatibles.",
    sections: [
      { id: "archivo", title: "Cuándo elegir archivo P12", paragraphs: ["Es una opción práctica para personas que trabajan desde uno o pocos equipos y necesitan instalar su certificado en aplicaciones compatibles."], bullets: ["Instalación ágil", "Costo relativo menor", "Adecuada para uso frecuente", "Requiere respaldos protegidos"] },
      { id: "token", title: "Cuándo elegir token USB", paragraphs: ["El token es útil cuando se busca mantener el certificado bajo control físico o trasladarlo entre equipos compatibles."], bullets: ["Control físico del certificado", "Perfil corporativo", "Requiere portar el dispositivo", "Puede necesitar controladores"] },
      { id: "decision", title: "Cómo tomar la decisión", paragraphs: ["Considera quién firmará, desde cuántos equipos, qué sistemas utilizará y qué nivel de control necesita. ContaLink puede revisar tu caso antes de emitir."] },
    ],
    faqs: [
      { question: "¿El token siempre es mejor?", answer: "No. Es más adecuado para ciertos perfiles, pero un archivo P12 bien protegido puede ser la opción más práctica para otros." },
      { question: "¿Puedo usar ambas modalidades en el SRI?", answer: "Sí, si son compatibles con el sistema y el certificado está vigente." },
      { question: "¿Qué modalidad es más económica?", answer: "El archivo suele tener un costo relativo menor porque no incluye dispositivo físico." },
    ],
    cta: "signature",
  },
  {
    slug: "requisitos-firma-electronica-sri",
    title: "Requisitos para obtener firma electrónica para SRI",
    description: "Documentos habituales para personas naturales y representantes legales que necesitan operar con el SRI.",
    category: "Firma electrónica",
    directAnswer: "Para solicitar una firma electrónica destinada a trámites del SRI, una persona natural suele presentar cédula vigente, selfie de validación, correo, celular, dirección, RUC cuando corresponda y autorización. Un representante legal normalmente añade RUC actualizado y nombramiento vigente. Los requisitos finales dependen del tipo de solicitante, la modalidad del certificado y las validaciones del emisor.",
    sections: [
      { id: "natural", title: "Requisitos para persona natural", paragraphs: ["Prepara documentos legibles y datos de contacto activos para evitar retrasos."], bullets: ["Cédula por ambos lados", "Selfie sosteniendo la cédula", "Correo y celular", "Dirección y RUC", "Autorización correspondiente"] },
      { id: "juridica", title: "Requisitos para representante legal", paragraphs: ["Además de validar la identidad, debe demostrarse la representación vigente de la organización."], bullets: ["RUC actualizado", "Nombramiento vigente", "Cédula y selfie", "Correo y número de contacto"] },
      { id: "antes", title: "Qué revisar antes de enviar", paragraphs: ["Comprueba que las imágenes sean claras, que el nombramiento esté vigente y que el correo pueda recibir notificaciones."] },
    ],
    faqs: [
      { question: "¿Necesito RUC para obtener una firma?", answer: "Depende del uso y perfil. Para trámites tributarios normalmente se solicita o verifica el RUC." },
      { question: "¿Puedo enviar fotos de los documentos?", answer: "Sí, siempre que sean completas, legibles y cumplan las indicaciones de validación." },
      { question: "¿Puedo hacer el proceso a distancia?", answer: "Sí. ContaLink atiende digitalmente en Ecuador." },
    ],
    cta: "signature",
  },
  {
    slug: "contabilidad-para-emprendedores-ecuador",
    title: "Contabilidad para emprendedores en Ecuador",
    description: "Una guía clara para ordenar obligaciones, documentos y decisiones financieras desde el inicio.",
    category: "Contabilidad y SRI",
    directAnswer: "La contabilidad para emprendedores en Ecuador organiza ingresos, gastos, comprobantes, obligaciones del SRI y resultados del negocio. No se limita a declarar impuestos: ayuda a conocer la rentabilidad, anticipar pagos, evitar atrasos y tomar decisiones con información confiable. El punto de partida es revisar el RUC, el régimen aplicable, las fechas de declaración y el sistema de facturación que corresponde a la actividad.",
    sections: [
      { id: "inicio", title: "Qué ordenar desde el inicio", paragraphs: ["Separar las finanzas personales del negocio y conservar comprobantes facilita el cumplimiento y el análisis."], bullets: ["RUC y actividad económica", "Cuenta y registro del negocio", "Comprobantes de ingresos y gastos", "Calendario tributario"] },
      { id: "control", title: "Contabilidad para decidir mejor", paragraphs: ["Los registros permiten estimar márgenes, flujo de caja y necesidades de financiamiento. Una revisión periódica evita descubrir problemas cuando ya venció una obligación."] },
      { id: "apoyo", title: "Cuándo buscar asesoría", paragraphs: ["Busca apoyo si no conoces tu régimen, tienes declaraciones atrasadas, vas a contratar personal o el volumen de operaciones ya no es fácil de controlar."] },
    ],
    faqs: [
      { question: "¿Un emprendedor siempre debe llevar contabilidad?", answer: "La obligación formal depende de su situación, pero todo negocio necesita registros ordenados para controlar y sustentar sus operaciones." },
      { question: "¿ContaLink revisa el RUC?", answer: "Sí, puede revisar actividad, régimen y obligaciones registradas." },
      { question: "¿Atienden negocios pequeños?", answer: "Sí, desde personas naturales y emprendedores hasta sociedades." },
    ],
    cta: "accounting",
  },
  {
    slug: "declaraciones-sri-personas-naturales",
    title: "Declaraciones SRI para personas naturales",
    description: "Qué revisar para presentar obligaciones tributarias a tiempo y corregir atrasos.",
    category: "Contabilidad y SRI",
    directAnswer: "Las declaraciones que una persona natural presenta ante el SRI dependen de su RUC, actividad económica, régimen, ingresos y obligaciones registradas. Pueden incluir IVA, Impuesto a la Renta, retenciones o anexos. Antes de declarar conviene revisar comprobantes, ingresos, gastos sustentados y fechas de vencimiento. Si existen atrasos, es recomendable diagnosticar primero todos los periodos pendientes para regularizar de forma ordenada.",
    sections: [
      { id: "obligaciones", title: "Cómo saber qué debes declarar", paragraphs: ["La fuente inicial es el RUC y el estado tributario, pero también deben revisarse cambios de actividad y operaciones realizadas."], bullets: ["Régimen tributario", "Obligaciones registradas", "Noveno dígito del RUC", "Periodos pendientes"] },
      { id: "documentos", title: "Documentos que debes organizar", paragraphs: ["Mantén disponibles comprobantes de venta, compras, retenciones y soportes bancarios del periodo."], bullets: ["Facturas emitidas y recibidas", "Notas de crédito", "Retenciones", "Registros de ingresos y gastos"] },
      { id: "atrasos", title: "Qué hacer si tienes atrasos", paragraphs: ["Evita presentar información improvisada. Primero identifica periodos, valores y documentación para definir el orden de regularización."] },
    ],
    faqs: [
      { question: "¿Todas las personas naturales declaran IVA?", answer: "No. Depende de la actividad, el régimen y las obligaciones registradas." },
      { question: "¿Puedo corregir una declaración?", answer: "En determinados casos existen declaraciones sustitutivas; debe revisarse la situación concreta." },
      { question: "¿ContaLink ayuda con atrasos?", answer: "Sí, realiza diagnóstico y regularización de obligaciones pendientes." },
    ],
    cta: "accounting",
  },
  {
    slug: "rimpe-ecuador-guia-emprendedores",
    title: "RIMPE Ecuador: guía para emprendedores",
    description: "Conceptos clave para entender el régimen, revisar tu RUC y cumplir tus obligaciones.",
    category: "Contabilidad y SRI",
    directAnswer: "El RIMPE es un régimen tributario ecuatoriano aplicable a determinados negocios populares y emprendedores que cumplen las condiciones definidas por la normativa vigente. Estar registrado implica obligaciones de facturación, declaraciones y conservación de documentos que varían según la categoría y el periodo fiscal. Como las reglas pueden actualizarse, cada contribuyente debe verificar su RUC y las disposiciones vigentes del SRI antes de declarar.",
    sections: [
      { id: "quienes", title: "Quiénes pueden estar en RIMPE", paragraphs: ["La clasificación depende de ingresos, actividad y exclusiones normativas. No debe asumirse el régimen solo por el tamaño aparente del negocio."] },
      { id: "obligaciones", title: "Obligaciones que debes revisar", paragraphs: ["Revisa comprobantes, declaraciones, registros y actualizaciones del RUC."], bullets: ["Tipo de comprobante", "Declaración de Impuesto a la Renta", "IVA cuando corresponda", "Deberes formales y conservación de soportes"] },
      { id: "revision", title: "Por qué revisar tu situación cada año", paragraphs: ["Los ingresos o la normativa pueden cambiar tu clasificación. Una revisión preventiva reduce errores y atrasos."] },
    ],
    faqs: [
      { question: "¿RIMPE significa que no debo declarar?", answer: "No. El régimen mantiene obligaciones que dependen de la categoría y situación del contribuyente." },
      { question: "¿Cómo confirmo si estoy en RIMPE?", answer: "Revisa tu RUC y la información oficial del SRI, o solicita un diagnóstico tributario." },
      { question: "¿ContaLink atiende emprendedores RIMPE?", answer: "Sí, revisa obligaciones, declaraciones y organización contable." },
    ],
    cta: "accounting",
  },
];

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
