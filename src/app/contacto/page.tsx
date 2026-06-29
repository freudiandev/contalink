import { Mail, MapPin, Phone, Clock3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { CTAButton } from "@/components/CTAButton";
import { JsonLd } from "@/components/JsonLd";
import { ZoomableImage } from "@/components/ZoomableImage";
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
          <div className="flex flex-col gap-6">
            <div className="grid content-start gap-3">
              {contactMethods.map(([Icon, label, value, href]) => (
                <div className="premium-card" key={String(label)}>
                  <div className="card-icon"><Icon /></div><p className="eyebrow">{String(label)}</p>
                  {href ? <a href={String(href)} className="mt-2 block font-display text-sm text-white">{String(value)}</a> : <strong className="mt-2 block font-display text-sm">{String(value)}</strong>}
                </div>
              ))}
              <CTAButton href={whatsappUrl()} external className="mt-2">Escribir ahora</CTAButton>
            </div>
            
            <div className="mt-6 rounded-2xl border border-white/5 bg-black/40 p-6 shadow-xl">
              <p className="eyebrow mb-4">Tarjeta de presentación</p>
              <ZoomableImage src="/assets/1.jpeg" alt="Tarjeta de presentación ContaLink - Ing. Jeaneth Curay" className="aspect-[2.8/1] w-full" />
              <div className="sr-only">
                <strong>ContaLink - Asesoría Contable y Tributaria</strong>
                <p>Ing. Jeaneth Curay, Contadora Pública Autorizada.</p>
                <p>Teléfonos: 096 970 9230 / 098 763 3725</p>
                <p>Correo: gerente.contalink@gmail.com</p>
                <p>Ubicación: Quito - Ecuador</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/5 bg-black/40 p-6 shadow-xl">
              <p className="eyebrow mb-4">Escanear para chatear</p>
              <ZoomableImage src="/assets/2.jpeg" alt="Código QR de WhatsApp de ContaLink" className="aspect-[9/16] max-h-[300px] w-full" />
              <p className="mt-4 text-center text-sm text-muted">Abre la cámara de tu celular y escanea este código QR para iniciar un chat de WhatsApp con la cuenta de empresa de ContaLink.</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
