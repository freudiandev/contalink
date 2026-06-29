import Link from "next/link";
import { BadgeCheck, FileSearch, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { TaxRefundTypeCard } from "@/components/TaxRefundTypeCard";
import { TaxRefundTimeline } from "@/components/TaxRefundTimeline";
import { RequirementChecklist } from "@/components/RequirementChecklist";
import { CommonMistakes } from "@/components/CommonMistakes";
import { SourceCards } from "@/components/SourceCards";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/data/seo";
import { refundAudiences, refundMistakes, refundRequirements, refundSteps, refundTypes } from "@/data/taxRefundPage";
import { taxRefundFaqs } from "@/data/taxRefundFaqs";
import { taxRefundSources } from "@/data/taxRefundSources";
import { breadcrumbSchema, faqSchema, graphSchema } from "@/lib/schema";
import { whatsappUrl } from "@/lib/whatsapp";
import { site } from "@/data/site";

const path = "/devolucion-impuestos-sri-ecuador";
const description = "ContaLink te ayuda a revisar, preparar y presentar solicitudes de devolución de impuestos ante el SRI en Ecuador: Impuesto a la Renta, IVA, retenciones, adultos mayores, discapacidad, exportadores e ISD.";

export const metadata = pageMetadata({
  title: "Devolución de Impuestos SRI Ecuador | Impuesto a la Renta e IVA",
  description,
  path,
  section: "Asesoría tributaria",
  keywords: ["devolución de impuestos SRI Ecuador", "devolución impuesto a la renta Ecuador", "devolución IVA Ecuador", "devolución IVA adultos mayores Ecuador", "devolución IVA personas con discapacidad Ecuador", "devolución IVA retenciones en la fuente", "devolución IVA exportadores Ecuador", "devolución ISD Ecuador", "pago indebido SRI", "pago en exceso SRI", "saldo a favor SRI", "asesoría tributaria Ecuador", "asesoría tributaria Quito", "ContaLink devolución de impuestos"],
});

const answers = [
  ["¿Qué es la devolución de impuestos en Ecuador?", "La devolución de impuestos es un derecho del contribuyente cuando existe un saldo a favor, pago indebido, pago en exceso o un beneficio tributario aplicable. En Ecuador, el SRI permite solicitar devoluciones de Impuesto a la Renta, IVA, ISD y otros tributos según el caso y los requisitos establecidos."],
  ["¿Cuándo puedo pedir devolución de Impuesto a la Renta?", "Puedes solicitar devolución de Impuesto a la Renta cuando existe pago indebido, pago en exceso o saldo a favor sustentado en la declaración, retenciones, anexos y documentación correspondiente."],
  ["¿Qué es pago indebido?", "El pago indebido ocurre cuando el contribuyente paga una obligación tributaria que no le correspondía cumplir."],
  ["¿Qué es pago en exceso?", "El pago en exceso ocurre cuando el contribuyente paga más de lo que realmente correspondía según su declaración o situación tributaria."],
  ["¿Cómo ayuda ContaLink?", "ContaLink revisa tu situación tributaria, valida declaraciones y anexos, organiza documentos de soporte, prepara la solicitud y te acompaña en el seguimiento del trámite ante el SRI."],
  ["¿ContaLink garantiza que el SRI apruebe la devolución?", "No. La aprobación depende del SRI y del cumplimiento de requisitos del contribuyente. ContaLink brinda asesoría, revisión técnica y acompañamiento para presentar un caso ordenado y sustentado."],
] as const;

export default function TaxRefundPage() {
  const pageUrl = `${site.url}${path}`;
  const whatsappHref = whatsappUrl("tax_refund");
  const schema = graphSchema(
    { "@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: "Devolución de Impuestos SRI Ecuador", description, inLanguage: "es-EC", isPartOf: { "@id": `${site.url}/#website` }, about: { "@id": `${pageUrl}#service` } },
    { "@type": "Service", "@id": `${pageUrl}#service`, name: "Asesoría para devolución de impuestos ante el SRI", serviceType: "Asesoría tributaria", areaServed: { "@type": "Country", name: "Ecuador" }, provider: { "@id": `${site.url}/#organization` } },
    { "@type": "ProfessionalService", "@id": `${pageUrl}#professional-service`, name: "ContaLink", url: site.url, telephone: "+593969709230", email: "firmas.contalink@gmail.com", areaServed: "Ecuador", address: { "@type": "PostalAddress", addressLocality: "Quito", addressCountry: "EC" }, founder: { "@id": `${pageUrl}#jeaneth-curay` } },
    { "@type": "Person", "@id": `${pageUrl}#jeaneth-curay`, name: "Jeaneth Curay", jobTitle: "Ingeniera en Contabilidad y Auditoría", worksFor: { "@id": `${site.url}/#organization` } },
    { "@type": "Organization", "@id": `${site.url}/#organization`, name: "ContaLink", founder: { "@id": `${pageUrl}#jeaneth-curay` }, areaServed: "Ecuador", telephone: "+593969709230", email: "firmas.contalink@gmail.com", address: { "@type": "PostalAddress", addressLocality: "Quito", addressCountry: "EC" } },
    faqSchema(taxRefundFaqs),
    breadcrumbSchema([{ name: "Inicio", path: "/" }, { name: "Devolución de impuestos SRI Ecuador", path }]),
  );

  return <>
    <JsonLd data={schema} />
    <PageHero whatsappHref={whatsappHref} />

    <Section className="!pt-8" eyebrow="Respuesta directa" title="¿Qué es la devolución de impuestos en Ecuador?">
      <div className="answer-block"><div><p>La devolución de impuestos es un procedimiento mediante el cual un contribuyente puede solicitar al SRI la restitución de valores cuando existe saldo a favor, pago indebido, pago en exceso o un beneficio tributario aplicable. Puede relacionarse con Impuesto a la Renta, IVA, ISD u otros impuestos, según el tipo de contribuyente y la documentación disponible.</p></div><div className="answer-meta"><div><span>Autoridad</span><strong>SRI</strong></div><div><span>Evaluación</span><strong>Individual</strong></div><div><span>Soporte</span><strong>Documental</strong></div><div><span>Cobertura</span><strong>Ecuador</strong></div></div></div>
    </Section>

    <Section eyebrow="Perfiles" title="¿Quiénes pueden necesitar este servicio?" description="Cada contribuyente requiere una revisión propia de declaraciones, soportes y requisitos.">
      <div className="cards-grid cols-3">{refundAudiences.map(([Icon, title, text]) => <article className="premium-card" key={title}><div className="card-icon"><Icon /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
    </Section>

    <Section id="tipos" eyebrow="Casos tributarios" title="Tipos de devolución que podemos revisar" description="Identificamos la figura aplicable antes de preparar una solicitud."><TaxRefundTypeCard types={refundTypes} /></Section>

    <Section eyebrow="Acompañamiento" title="¿Cómo te ayuda ContaLink paso a paso?" description="Una solicitud bien preparada reduce errores, evita reprocesos y permite responder mejor ante requerimientos del SRI."><TaxRefundTimeline steps={refundSteps} /></Section>

    <Section eyebrow="Lista inicial" title="Documentos que podrían requerirse" description="Reunir información completa permite evaluar el caso con mayor claridad."><RequirementChecklist items={refundRequirements} /><p className="legal-note">Los requisitos pueden variar según el tipo de devolución y la situación del contribuyente.</p></Section>

    <Section eyebrow="Antes de presentar" title="Errores comunes que conviene evitar"><CommonMistakes items={refundMistakes} /></Section>

    <Section><CTASection title="¿No sabes si tienes derecho a devolución?" text="En ContaLink podemos revisar tu caso y orientarte antes de iniciar una solicitud ante el SRI." whatsappHref={whatsappHref} secondaryHref="/contacto" secondaryLabel="Solicitar diagnóstico tributario" /></Section>

    <Section eyebrow="Respuestas citables" title="Lo esencial, explicado con claridad" description="Respuestas breves para comprender el trámite antes de tomar una decisión.">
      <div className="answer-cards">{answers.map(([question, answer]) => <article key={question}><FileSearch size={20} /><h3>{question}</h3><p>{answer}</p></article>)}</div>
    </Section>

    <Section eyebrow="Respaldo profesional" title="Asesoría tributaria con experiencia en Quito y Ecuador">
      <div className="authority-grid"><article className="premium-card"><div className="card-icon"><ShieldCheck /></div><h3>ContaLink · Ing. Jeaneth Curay</h3><p>Firma contable y tributaria en Quito que brinda soluciones contables, tributarias, laborales y financieras para personas naturales, emprendedores y sociedades.</p><p className="legal-note">ContaLink brinda asesoría y acompañamiento tributario. La aprobación de una devolución depende exclusivamente del SRI y del cumplimiento de los requisitos del contribuyente.</p></article><ul>{["Contabilidad para personas naturales y sociedades", "Declaraciones de impuestos ante el SRI", "IVA, Impuesto a la Renta y retenciones", "Devolución y planificación tributaria", "Atención de requerimientos del SRI", "Firma y facturación electrónica", "Acompañamiento personalizado"].map((item) => <li key={item}><BadgeCheck size={18} />{item}</li>)}</ul></div>
      <nav className="internal-links" aria-label="Servicios relacionados"><Link href="/firma-electronica-ecuador">Firma electrónica en Ecuador</Link><Link href="/contabilidad-tributaria-quito">Contabilidad y asesoría tributaria</Link><Link href="/contacto">Contactar a ContaLink</Link></nav>
    </Section>

    <Section eyebrow="Preguntas frecuentes" title="Respuestas sobre devoluciones ante el SRI"><FAQ items={taxRefundFaqs} /></Section>

    <Section eyebrow="Consulta y verificación" title="Información basada en fuentes oficiales del SRI" description="Consulta las fichas oficiales y confirma la normativa y los requisitos vigentes antes de presentar una solicitud."><SourceCards sources={taxRefundSources} /><p className="legal-note">La información tributaria puede cambiar. Recomendamos revisar cada caso con asesoría profesional y fuentes oficiales vigentes.</p></Section>

    <Section><CTASection title="Recuperar valores ante el SRI empieza con una revisión correcta" text="Antes de ingresar una solicitud, revisa si cumples los requisitos, si existe sustento documental y cuál es el canal adecuado para tu caso. ContaLink te acompaña con asesoría tributaria clara y personalizada." whatsappHref={whatsappHref} /></Section>
  </>;
}
