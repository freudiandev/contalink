import { FileSignature, Landmark, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { JsonLd } from "@/components/JsonLd";
import { graphSchema } from "@/lib/schema";
import { pageMetadata } from "@/data/seo";
import { site } from "@/data/site";

export const metadata = pageMetadata({
  title: "ContaLink | Firma Electrónica y Contabilidad en Ecuador",
  description: "Firma electrónica Uanataca y asesoría contable y tributaria en Quito, con atención digital para todo Ecuador.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={graphSchema({
        "@type": "LocalBusiness",
        name: site.name,
        founder: site.founder,
        areaServed: "Ecuador",
        address: { "@type": "PostalAddress", addressLocality: "Quito", addressCountry: "EC" },
      })} />
      <section className="hero">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl pt-8 text-center">
            <p className="eyebrow">Quito · Ecuador · Desde 2018</p>
            <h1 className="mt-5 font-display text-[clamp(2.6rem,8vw,6.4rem)] font-medium leading-[.98] tracking-[-.055em]">
              Tu negocio en orden.<br /><span className="text-gradient">Tu futuro conectado.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[clamp(1rem,2vw,1.18rem)] leading-8 text-muted">
              ContaLink transforma tus números en soluciones contables inteligentes y tus trámites en procesos digitales seguros.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <Link href="/firma-electronica-ecuador" className="group premium-card flex min-h-[260px] flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="card-icon"><FileSignature /></div><span className="eyebrow">01 · Digital</span>
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl">Necesito firma electrónica</h2>
                <p className="mt-3 max-w-md text-sm leading-7 text-muted">Firma Uanataca en archivo P12 o token, con soporte desde los requisitos hasta la instalación.</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold-soft">Explorar firma electrónica <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} /></span>
              </div>
            </Link>
            <Link href="/contabilidad-tributaria-quito" className="group premium-card flex min-h-[260px] flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="card-icon"><Landmark /></div><span className="eyebrow">02 · Estrategia</span>
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl">Necesito asesoría contable</h2>
                <p className="mt-3 max-w-md text-sm leading-7 text-muted">Contabilidad, SRI, nómina, RUC, RIMPE y gestión empresarial con acompañamiento cercano.</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold-soft">Explorar asesoría contable <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} /></span>
              </div>
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted">
            <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-gold" /> Atención profesional</span>
            <span className="flex items-center gap-2"><MapPin size={16} className="text-gold" /> Quitumbe, Quito</span>
            <CTAButton href="/contacto" variant="text">Contacto directo</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
