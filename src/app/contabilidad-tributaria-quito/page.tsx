import { AlertTriangle, ClipboardList, CircleDollarSign, Files, Landmark, Receipt, ShieldAlert, Waypoints, GraduationCap, Award, BadgeCheck } from "lucide-react";
import { Badge } from "@/components/Badge";
import { CTAButton } from "@/components/CTAButton";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { TestimonialCard } from "@/components/TestimonialCard";
import { JsonLd } from "@/components/JsonLd";
import { accountingFaqs } from "@/data/faqs";
import { accountingGroups } from "@/data/services";
import { pageMetadata } from "@/data/seo";
import { breadcrumbSchema, faqSchema, graphSchema } from "@/lib/schema";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata = pageMetadata({
  title: "Contabilidad y Asesoría Tributaria en Quito",
  description: "Servicios contables y tributarios para personas naturales, emprendedores y sociedades. SRI, nómina, RUC, RIMPE y estados financieros.",
  path: "/contabilidad-tributaria-quito",
});

const problems = [
  [ClipboardList, "No sé qué declarar ante el SRI"], [AlertTriangle, "Tengo declaraciones atrasadas"],
  [Files, "Necesito abrir RUC o revisar mi régimen"], [CircleDollarSign, "Mi negocio creció y necesito orden contable"],
  [Receipt, "Necesito roles de pago y manejo laboral"], [ShieldAlert, "Quiero evitar multas y sanciones"],
  [Landmark, "Necesito estados financieros claros"], [Waypoints, "Estoy constituyendo una empresa"],
] as const;

const certifications = ["Cierre Fiscal 2025", "Actualización Tributaria ISD 2025", "Agentes de retención 2025", "Devolución de Impuesto a la Renta 2025", "Devolución Renta e IVA 2024", "Actualización Contable y NIIF 2018", "Control contable y tributario 2013"];

export default function AccountingPage() {
  const schema = graphSchema(
    { "@type": ["ProfessionalService", "AccountingService"], name: "ContaLink asesoría contable y tributaria", areaServed: "Ecuador", founder: { "@type": "Person", name: "Jeaneth Curay" } },
    { "@type": "Person", name: "Jeaneth Curay", jobTitle: "Ingeniera en Contabilidad y Auditoría", worksFor: { "@type": "Organization", name: "ContaLink" } },
    faqSchema(accountingFaqs),
    breadcrumbSchema([{ name: "Inicio", path: "/" }, { name: "Contabilidad y tributación Quito", path: "/contabilidad-tributaria-quito" }]),
  );

  return (
    <>
      <JsonLd data={schema} />
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Transformamos tus números en soluciones inteligentes</p>
            <h1>Contabilidad y asesoría tributaria para crecer <span className="text-gradient">con tranquilidad</span></h1>
            <p>Soluciones contables, tributarias, laborales y financieras para personas naturales, emprendedores, PYMES y sociedades.</p>
            <div className="hero-actions">
              <CTAButton href={whatsappUrl("accounting")} external>Solicitar asesoría contable</CTAButton>
              <CTAButton href="#servicios" variant="outline">Ver servicios</CTAButton>
            </div>
            <div className="hero-badges">{["Desde 2018", "Quito · Ecuador", "Personas y sociedades", "Asesoría financiera"].map((b) => <Badge key={b}>{b}</Badge>)}</div>
          </div>
          <div className="signature-visual">
            <div className="absolute inset-[8%] rounded-t-[12rem] border border-gold/20 bg-[radial-gradient(circle_at_50%_25%,rgba(212,175,55,.18),transparent_34%),linear-gradient(180deg,#171717,#080808)]" />
            <div className="relative z-10 mx-auto flex aspect-[4/5] w-[72%] max-w-[330px] flex-col justify-end overflow-hidden rounded-t-[10rem] border border-white/10 bg-gradient-to-b from-transparent to-black p-7">
              <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(212,175,55,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,.07)_1px,transparent_1px)] [background-size:28px_28px]" />
              <div className="relative"><p className="eyebrow">Dirección profesional</p><strong className="mt-2 block font-display text-2xl">Ing. Jeaneth Curay</strong><span className="mt-2 block text-xs text-muted">Contabilidad · Auditoría · Tributación</span></div>
            </div>
          </div>
        </div>
      </section>

      <Section className="!pt-8">
        <div className="answer-block">
          <div><p className="eyebrow">Respuesta directa</p><h2>¿Dónde encontrar asesoría contable y tributaria en Quito?</h2><p>ContaLink, dirigida por la Ing. Jeaneth Curay, brinda asesoría contable y tributaria desde Quitumbe, Quito. Atiende personas naturales, emprendedores y sociedades con servicios de SRI, RUC, RIMPE, nómina, estados financieros y constitución empresarial, además de atención digital en Ecuador.</p></div>
          <div className="answer-meta"><div><span>Firma</span><strong>ContaLink</strong></div><div><span>Profesional</span><strong>Jeaneth Curay</strong></div><div><span>Base</span><strong>Quito</strong></div><div><span>Desde</span><strong>2018</strong></div></div>
        </div>
      </Section>

      <Section eyebrow="Autoridad profesional" title="Ing. Jeaneth Curay" description="Contabilidad, auditoría y asesoría tributaria para empresas y emprendedores.">
        <div className="grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
          <article className="premium-card">
            <div className="card-icon"><GraduationCap /></div>
            <h3 className="!text-xl">Ingeniería en Contabilidad y Auditoría</h3>
            <p>Experiencia con ContaLink desde 2018, bajo un enfoque preventivo, claro y cercano para ordenar obligaciones y respaldar decisiones.</p>
            <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5"><Award className="text-gold" /><div><strong className="block font-display">Actualización continua</strong><span className="text-xs text-muted">Contabilidad, NIIF y normativa tributaria</span></div></div>
          </article>
          <div className="grid gap-3 sm:grid-cols-2">
            {certifications.map((cert) => <div key={cert} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[.025] p-4 text-sm text-[#d2d2d2]"><BadgeCheck size={18} className="shrink-0 text-gold" />{cert}</div>)}
          </div>
        </div>
      </Section>

      <Section eyebrow="Diagnóstico" title="Problemas que resolvemos contigo" description="No necesitas llegar con el problema explicado en términos contables. Empezamos por entender tu situación.">
        <div className="cards-grid cols-4">{problems.map(([Icon, title]) => <article className="premium-card" key={title}><div className="card-icon"><Icon /></div><h3>{title}</h3><p>Revisamos el caso y definimos el siguiente paso con claridad.</p></article>)}</div>
      </Section>

      <Section id="servicios" eyebrow="Servicios integrales" title="Contabilidad que conecta cumplimiento y estrategia" description="Centraliza tus procesos contables, tributarios, laborales y digitales con acompañamiento profesional.">
        <div className="cards-grid cols-3">{accountingGroups.map((group) => <ServiceCard key={group.title} title={group.title} items={group.items} />)}</div>
      </Section>

      <Section eyebrow="Para cada etapa" title="Atención adaptada a tu tipo de organización">
        <div className="cards-grid cols-4">{["Personas naturales", "Emprendedores", "Profesionales independientes", "PYMES", "Sociedades", "Grandes empresas", "Instituciones", "Organizaciones sin fines de lucro"].map((segment) => <article className="premium-card" key={segment}><h3>{segment}</h3><p>Alcance definido según actividad, obligaciones y volumen de operación.</p></article>)}</div>
      </Section>

      <Section eyebrow="Método de trabajo" title="Una contabilidad clara, preventiva y cercana" align="center">
        <div className="steps">{[
          ["Diagnóstico", "Revisamos situación tributaria, RUC, obligaciones y necesidades."],
          ["Organización", "Ordenamos documentos, declaraciones, procesos y fechas clave."],
          ["Cumplimiento", "Presentamos obligaciones y gestionamos trámites acordados."],
          ["Acompañamiento", "Convertimos la información en mejores decisiones para tu negocio."],
        ].map(([title, text]) => <article className="step-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </Section>

      <Section eyebrow="Resultados posibles" title="Casos de acompañamiento" description="Escenarios frecuentes atendidos por ContaLink, sin exponer información privada de clientes.">
        <div className="cards-grid cols-4">{[
          ["Regularización tributaria", "Diagnóstico de periodos pendientes y plan ordenado de cumplimiento."],
          ["Firma electrónica", "Emisión, instalación y orientación para trámites digitales."],
          ["Procesos contables", "Organización de registros, conciliaciones y reportes financieros."],
          ["Nuevos negocios", "Acompañamiento desde constitución y RUC hasta operación periódica."],
        ].map(([title, description]) => <ServiceCard key={title} title={title} description={description} />)}</div>
      </Section>

      <Section eyebrow="Experiencias" title="Tranquilidad que se construye con orden">
        <div className="cards-grid cols-3">
          <TestimonialCard>Gracias a ContaLink logramos mantener nuestras obligaciones tributarias al día y optimizar nuestros procesos contables.</TestimonialCard>
          <TestimonialCard>La asesoría recibida nos permitió obtener nuestra firma electrónica de manera rápida y sin complicaciones.</TestimonialCard>
          <TestimonialCard>Su acompañamiento permanente nos brinda tranquilidad y confianza.</TestimonialCard>
        </div>
      </Section>

      <Section eyebrow="Preguntas frecuentes" title="Respuestas para tomar el siguiente paso">
        <FAQ items={accountingFaqs} />
      </Section>

      <Section id="contacto" eyebrow="Revisión inicial" title="Cuéntanos qué necesitas ordenar">
        <ContactForm type="accounting" />
      </Section>

      <Section className="!pt-0">
        <div className="cta-band"><p className="eyebrow">Cumple a tiempo</p><h2>Evita sanciones y toma mejores decisiones con una contabilidad clara</h2><p>Empecemos con una conversación breve sobre tu situación actual.</p><div className="hero-actions"><CTAButton href={whatsappUrl("accounting")} external>Solicitar asesoría por WhatsApp</CTAButton><CTAButton href="/contacto" variant="outline">Hablar con ContaLink</CTAButton></div></div>
      </Section>
    </>
  );
}
