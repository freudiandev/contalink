import { BlogCard } from "@/components/BlogCard";
import { CTAButton } from "@/components/CTAButton";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts } from "@/data/blog";
import { pageMetadata } from "@/data/seo";
import { breadcrumbSchema, graphSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Blog de Firma Electrónica, Contabilidad y SRI Ecuador",
  description: "Guías claras y actualizadas sobre firma electrónica, SRI, RIMPE y contabilidad para emprendedores en Ecuador.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd data={graphSchema(breadcrumbSchema([{ name: "Inicio", path: "/" }, { name: "Blog", path: "/blog" }]))} />
      <header className="article-hero">
        <div className="container">
          <p className="eyebrow">Centro de conocimiento · Actualizado 2026</p>
          <h1>Decisiones digitales y contables, explicadas con claridad</h1>
          <p>Respuestas prácticas para personas naturales, emprendedores y empresas que necesitan cumplir, ordenar y avanzar en Ecuador.</p>
          <div className="hero-actions"><CTAButton href="/firma-electronica-ecuador">Firma electrónica</CTAButton><CTAButton href="/contabilidad-tributaria-quito" variant="outline">Asesoría contable</CTAButton></div>
        </div>
      </header>
      <section className="section-shell">
        <div className="container">
          <div className="cards-grid cols-3">{blogPosts.map((post) => <BlogCard key={post.slug} post={post} />)}</div>
        </div>
      </section>
    </>
  );
}
