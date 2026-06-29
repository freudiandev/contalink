import { BriefcaseBusiness, Building2, Factory, HandHeart, PersonStanding, UserRound } from "lucide-react";

export const refundAudiences = [
  [UserRound, "Personas naturales", "Trabajadores, profesionales o contribuyentes con retenciones, gastos personales, saldo a favor o pagos superiores a lo que correspondía."],
  [BriefcaseBusiness, "Emprendedores y negocios", "Negocios que necesitan revisar declaraciones, retenciones, crédito tributario y cumplimiento ante el SRI."],
  [Building2, "Sociedades", "Empresas que requieren analizar pagos en exceso, retenciones, anexos, conciliaciones y documentación contable."],
  [PersonStanding, "Adultos mayores", "Personas de 65 años o más que pueden acceder a devolución de IVA por compras elegibles, según requisitos del SRI."],
  [HandHeart, "Personas con discapacidad", "Personas calificadas o sustitutos autorizados que pueden solicitar devolución de IVA según requisitos aplicables."],
  [Factory, "Exportadores", "Exportadores que podrían recuperar IVA pagado en adquisiciones relacionadas con su actividad, conforme a las reglas del SRI."],
] as const;

export const refundTypes = [
  { title: "Impuesto a la Renta", items: ["Pago indebido", "Pago en exceso", "Retenciones", "CREDITO TRIBUTARIO A FAVOR"] },
  { title: "IVA", items: ["Adultos mayores", "Personas con discapacidad", "Retenciones en la fuente de IVA", "Exportadores", "Pago indebido o pago en exceso de IVA"] },
  { title: "ISD", items: ["Revisión de pagos al exterior", "Crédito tributario", "Documentos probatorios", "Solicitudes con firma física o electrónica"] },
  { title: "Otros casos", items: ["Revisión de normativa aplicable", "Diagnóstico de viabilidad", "Organización documental"] },
];

export const refundSteps = [
  ["Diagnóstico inicial", "Revisamos tu tipo de contribuyente, declaraciones, retenciones, anexos y posible saldo a favor."],
  ["Validación de requisitos", "Verificamos clave SRI, declaraciones, cuenta bancaria, anexos, comprobantes y soportes."],
  ["Organización documental", "Ordenamos retenciones, declaraciones, anexos, comprobantes, libros mayores y documentos probatorios aplicables."],
  ["Preparación de la solicitud", "Preparamos la solicitud de devolución o reclamo de pago indebido o pago en exceso, según corresponda."],
  ["Presentación o acompañamiento", "Te orientamos para ingresar la solicitud por el canal habilitado para tu caso."],
  ["Seguimiento", "Te ayudamos a revisar notificaciones, estado del trámite y requerimientos adicionales."],
] as const;

export const refundRequirements = ["Cédula o RUC", "Clave de acceso a SRI en línea", "Declaración de Impuesto a la Renta presentada", "Declaraciones de IVA, si aplica", "Anexo de gastos personales, cuando corresponda", "Formulario 107, si aplica", "Comprobantes de retención", "Facturas electrónicas o físicas, según el caso", "Cuenta bancaria activa registrada en el SRI", "Nombramiento de representante legal, si aplica", "Libros mayores de retenciones o crédito tributario, si aplica", "Solicitud firmada electrónica o físicamente según el canal", "Documentos probatorios adicionales"];

export const refundMistakes = ["Creer que todo saldo a favor se devuelve automáticamente", "No tener la declaración presentada", "No registrar una cuenta bancaria activa en el SRI", "Omitir el anexo de gastos personales cuando corresponde", "Confundir pago indebido con pago en exceso", "No conservar comprobantes físicos", "Tener facturas a nombre de otra persona", "Presentar información incompleta", "Compartir la clave del SRI sin control", "No revisar el buzón tributario"];
