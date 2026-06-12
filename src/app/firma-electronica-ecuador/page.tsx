import { FileCheck2, ReceiptText, ScrollText, Building2, Ship, Scale, GraduationCap, BriefcaseBusiness, ShieldCheck } from "lucide-react";
import { HeroSignatureReveal } from "@/components/HeroSignatureReveal";
import { Badge } from "@/components/Badge";
import { CTAButton } from "@/components/CTAButton";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { ComparisonTable } from "@/components/ComparisonTable";
import { RequirementsTabs } from "@/components/RequirementsTabs";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { signatureFaqs } from "@/data/faqs";
import { signatureProducts } from "@/data/services";
import { signaturePrices } from "@/data/prices";
import { pageMetadata } from "@/data/seo";
import { breadcrumbSchema, faqSchema, graphSchema } from "@/lib/schema";
import { whatsappUrl } from "@/lib/whatsapp";
import type { ComponentProps } from "react";

export const metadata = pageMetadata({
  title: "Firma Electrónica Ecuador | Uanataca en Archivo y Token",
  description: "Obtén tu firma electrónica Uanataca en Ecuador con ContaLink. Archivo P12 o token, soporte personalizado y asesoría para SRI, empresas y profesionales.",
  path: "/firma-electronica-ecuador",
});

const uses = [
  [FileCheck2, "Firma para SRI"], [ReceiptText, "Facturación electrónica"], [ScrollText, "Contratos digitales"],
  [Building2, "Trámites empresariales"], [Ship, "Importadores y exportadores"], [Scale, "Contadores y abogados"],
  [GraduationCap, "Estudiantes universitarios"], [BriefcaseBusiness, "Emprendedores con RUC"],
] as const;

export default function SignaturePage() {
  const schema = graphSchema(
    {
      "@type": ["Service", "Product"],
      name: "Firma electrónica Uanataca en Ecuador",
      serviceType: "Emisión y soporte de firma electrónica",
      areaServed: "Ecuador",
      brand: { "@type": "Brand", name: "Uanataca" },
      provider: { "@type": "Organization", name: "ContaLink" },
      offers: { "@type": "AggregateOffer", offerCount: signaturePrices.length, priceCurrency: "USD", availability: "https://schema.org/InStock" },
    },
    faqSchema(signatureFaqs),
    breadcrumbSchema([{ name: "Inicio", path: "/" }, { name: "Firma electrónica Ecuador", path: "/firma-electronica-ecuador" }]),
  );

  return (
    <>
      <JsonLd data={schema} />
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Tu firma digital, segura y lista para trabajar</p>
            <h1>Firma electrónica Uanataca en Ecuador, <span className="text-gradient">rápida y con soporte</span></h1>
            <p>Gestionamos tu firma electrónica en archivo P12 o token para firmar documentos, facturar electrónicamente y realizar trámites digitales con validez legal.</p>
            <div className="hero-actions">
              <CTAButton href={whatsappUrl("signature")} external>Solicitar mi firma electrónica</CTAButton>
              <CTAButton href="#requisitos" variant="outline">Ver requisitos</CTAButton>
            </div>
            <div className="hero-badges">
              {["Distribuidor Uanataca", "Archivo P12 y Token", "Atención en Ecuador", "Soporte por WhatsApp"].map((badge) => <Badge key={badge}>{badge}</Badge>)}
            </div>
          </div>
          <HeroSignatureReveal />
        </div>
      </section>

      <Section className="!pt-8">
        <div className="answer-block">
          <div>
            <p className="eyebrow">Respuesta directa</p>
            <h2>¿Qué es una firma electrónica y para qué sirve en Ecuador?</h2>
            <p>Una firma electrónica permite identificar de forma segura a una persona al firmar documentos digitales. En Ecuador se utiliza para trámites ante SRI, IESS, Superintendencias, facturación electrónica, contratos y gestiones empresariales.</p>
            <CTAButton href="#contacto" variant="text" className="mt-4">Recibir orientación</CTAButton>
          </div>
          <div className="answer-meta">
            <div><span>Entidad</span><strong>ContaLink</strong></div><div><span>Servicio</span><strong>Firma Uanataca</strong></div>
            <div><span>Ubicación</span><strong>Ecuador</strong></div><div><span>Modalidad</span><strong>P12 o Token</strong></div>
          </div>
        </div>
      </Section>

      <Section id="productos" eyebrow="Soluciones digitales" title="Elige la modalidad que encaja con tu forma de trabajar" description="Te explicamos las diferencias antes de emitir para que tomes una decisión informada.">
        <div className="cards-grid cols-4">
          {signatureProducts.map((product) => <ServiceCard key={product.title} {...product} icon={product.icon as ComponentProps<typeof ServiceCard>["icon"]} />)}
        </div>
      </Section>

      <Section eyebrow="Comparativa clara" title="Archivo P12 vs. token USB" description="Ambas opciones permiten firmar digitalmente. La diferencia está en el almacenamiento, la movilidad y el control de acceso.">
        <ComparisonTable />
      </Section>

      <Section id="requisitos" eyebrow="Documentación" title="Requisitos para solicitar tu firma" description="Selecciona tu perfil. Antes de iniciar validamos contigo que la documentación esté completa y vigente.">
        <RequirementsTabs />
      </Section>

      <Section eyebrow="Proceso simple" title="Obtén tu firma electrónica sin complicarte" align="center">
        <div className="steps">
          {[
            ["Solicita tu firma", "Indícanos tu perfil, modalidad y si la usarás para SRI, documentos o facturación."],
            ["Envía documentos", "Comparte cédula, selfie y autorizaciones correspondientes de forma legible."],
            ["Validación", "Revisamos la información y te guiamos durante el proceso de emisión."],
            ["Recibe soporte", "Te acompañamos en la instalación y uso inicial de tu firma."],
          ].map(([title, text]) => <article className="step-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </Section>

      <Section id="precios" eyebrow="Vigencias disponibles" title="Una firma para cada etapa" description="Consulta el valor vigente según modalidad, perfil y duración del certificado.">
        <div className="price-grid">
          {signaturePrices.map((price) => <article className={`price-card ${price.featured ? "featured" : ""}`} key={price.duration}><span>Vigencia</span><h3>{price.duration}</h3><p>{price.file ?? "Consultar"}</p></article>)}
        </div>
        <p className="mt-5 text-sm leading-7 text-muted">Los valores pueden variar según tipo de firma, vigencia y modalidad. Escríbenos para confirmar el precio actualizado.</p>
      </Section>

      <Section eyebrow="Aplicaciones" title="Una identidad digital para tus trámites" description="ContaLink atiende personas naturales, profesionales, emprendedores y empresas en Ecuador.">
        <div className="cards-grid cols-4">
          {uses.map(([Icon, title]) => <article className="premium-card" key={title}><div className="card-icon"><Icon /></div><h3>{title}</h3></article>)}
        </div>
      </Section>

      <Section eyebrow="Confianza digital" title="Firma con respaldo y criterio">
        <div className="answer-block">
          <ShieldCheck size={56} className="text-gold" />
          <div><p className="text-lg text-white">La firma electrónica cuenta con reconocimiento legal en Ecuador y permite firmar documentos electrónicos con validez jurídica, siempre que se utilice conforme a la normativa aplicable.</p><p className="mt-3 text-sm">Te orientamos sobre su uso técnico sin reemplazar la asesoría legal que requiera un caso particular.</p></div>
        </div>
      </Section>

      <Section eyebrow="Preguntas frecuentes" title="Respuestas antes de solicitar tu firma">
        <FAQ items={signatureFaqs} />
      </Section>

      <Section id="contacto" eyebrow="Empecemos" title="Digitaliza tus trámites con una firma electrónica segura">
        <ContactForm type="signature" />
      </Section>

      <Section className="!pt-0">
        <div className="cta-band">
          <p className="eyebrow">Atención digital en Ecuador</p>
          <h2>Tu firma lista para trabajar, con soporte de principio a fin</h2>
          <p>Te guiamos paso a paso para que puedas continuar tus trámites con tranquilidad.</p>
          <div className="hero-actions"><CTAButton href={whatsappUrl("signature")} external>Solicitar por WhatsApp</CTAButton><CTAButton href="#requisitos" variant="outline">Ver requisitos</CTAButton></div>
        </div>
      </Section>
    </>
  );
}
