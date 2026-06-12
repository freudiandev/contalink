import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FAQ } from "@/components/FAQ";
import { CTAButton } from "@/components/CTAButton";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts, getPost } from "@/data/blog";
import { site } from "@/data/site";
import { pageMetadata } from "@/data/seo";
import { breadcrumbSchema, faqSchema, graphSchema } from "@/lib/schema";
import { whatsappUrl } from "@/lib/whatsapp";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({ title: post.title, description: post.description, path: `/blog/${post.slug}` });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const landing = post.cta === "signature" ? "/firma-electronica-ecuador" : "/contabilidad-tributaria-quito";
  const landingLabel = post.cta === "signature" ? "firma electrónica Uanataca" : "asesoría contable y tributaria";

  const schema = graphSchema(
    {
      "@type": "Article",
      headline: post.title,
      description: post.description,
      datePublished: "2026-01-15",
      dateModified: "2026-06-11",
      inLanguage: "es-EC",
      mainEntityOfPage: `${site.url}/blog/${post.slug}`,
      author: { "@type": "Person", name: "Ing. Jeaneth Curay" },
      publisher: { "@type": "Organization", name: "ContaLink" },
    },
    faqSchema(post.faqs),
    breadcrumbSchema([{ name: "Inicio", path: "/" }, { name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }]),
  );

  return (
    <>
      <JsonLd data={schema} />
      <header className="article-hero">
        <div className="container">
          <p className="eyebrow">{post.category} · Actualizado 2026</p>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-muted"><span>Por Ing. Jeaneth Curay</span><span>·</span><span>Lectura: 5 minutos</span></div>
        </div>
      </header>
      <div className="container article-layout">
        <aside className="toc">
          <strong>En esta guía</strong>
          <a href="#respuesta">Respuesta directa</a>
          {post.sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}
          <a href="#preguntas">Preguntas frecuentes</a>
        </aside>
        <article className="article-content">
          <div id="respuesta" className="direct-answer"><strong>Respuesta directa</strong><p>{post.directAnswer}</p></div>
          {post.sections.map((section) => (
            <section id={section.id} key={section.id}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
            </section>
          ))}
          <section>
            <h2>Orientación de ContaLink</h2>
            <p>La situación de cada persona o empresa puede variar. Revisa tu caso con información actualizada antes de realizar un trámite o presentar una obligación.</p>
            <p className="mt-4">Conoce nuestro servicio de <Link href={landing} className="font-bold text-gold-soft">{landingLabel}</Link> en Quito y para todo Ecuador.</p>
          </section>
          <section id="preguntas"><h2>Preguntas frecuentes</h2><FAQ items={post.faqs} /></section>
          <div className="cta-band mt-10">
            <p className="eyebrow">Te guiamos paso a paso</p>
            <h2>{post.cta === "signature" ? "Solicita tu firma electrónica con soporte" : "Ordena tus obligaciones con asesoría profesional"}</h2>
            <p>Habla directamente con ContaLink y recibe orientación según tu caso.</p>
            <div className="hero-actions"><CTAButton href={whatsappUrl(post.cta)} external>Consultar por WhatsApp</CTAButton><CTAButton href={landing} variant="outline">Ver el servicio</CTAButton></div>
          </div>
          <p className="article-note">Contenido informativo actualizado en 2026. No sustituye asesoría legal o tributaria individualizada.</p>
        </article>
      </div>
    </>
  );
}
