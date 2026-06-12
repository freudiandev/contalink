import { Mail, MapPin, Phone, Clock3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { CTAButton } from "@/components/CTAButton";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/data/seo";
import { site } from "@/data/site";
import { breadcrumbSchema, graphSchema } from "@/lib/schema";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata = pageMetadata({
  title: "Contacto | ContaLink Quito Ecuador",
  description: "Contacta a ContaLink para firma electrónica Uanataca, contabilidad, tributación, nómina y trámites empresariales.",
  path: "/contacto",
  keywords: ["contacto ContaLink", "WhatsApp firma electrónica Ecuador", "contactar contador Quito"],
  section: "Contacto",
});

export default function ContactPage() {
  const contactMethods: Array<[LucideIcon, string, string, string?]> = [
    [Phone, "WhatsApp", site.whatsappDisplay, whatsappUrl()],
    [Mail, "Correo", site.email, `mailto:${site.email}`],
    [MapPin, "Ubicación", site.location],
    [Clock3, "Cobertura", "Atención digital en Ecuador"],
  ];

  return (
    <>
      <JsonLd data={graphSchema(breadcrumbSchema([{ name: "Inicio", path: "/" }, { name: "Contacto", path: "/contacto" }]))} />
      <header className="article-hero">
        <div className="container">
          <p className="eyebrow">Contacto directo</p>
          <h1>Cuéntanos qué necesitas resolver</h1>
          <p>Firma electrónica, obligaciones del SRI o contabilidad de tu negocio. Te respondemos con claridad y el siguiente paso concreto.</p>
        </div>
      </header>
      <section className="section-shell">
        <div className="container grid gap-6 lg:grid-cols-[.65fr_1.35fr]">
          <div className="grid content-start gap-3">
            {contactMethods.map(([Icon, label, value, href]) => (
              <div className="premium-card" key={String(label)}>
                <div className="card-icon"><Icon /></div><p className="eyebrow">{String(label)}</p>
                {href ? <a href={String(href)} className="mt-2 block font-display text-sm text-white">{String(value)}</a> : <strong className="mt-2 block font-display text-sm">{String(value)}</strong>}
              </div>
            ))}
            <CTAButton href={whatsappUrl()} external className="mt-2">Escribir ahora</CTAButton>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
