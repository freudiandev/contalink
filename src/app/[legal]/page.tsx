import { notFound } from "next/navigation";
import { pageMetadata } from "@/data/seo";

const pages = {
  "politica-de-privacidad": {
    title: "Política de privacidad",
    text: "ContaLink utiliza los datos que compartes voluntariamente para responder solicitudes de información y prestar los servicios acordados. El formulario del sitio abre WhatsApp y no almacena la información en una base de datos propia.",
  },
  terminos: {
    title: "Términos de uso",
    text: "El contenido de este sitio es informativo. Los alcances, requisitos, plazos y valores de cada servicio se confirman directamente con ContaLink antes de iniciar una gestión.",
  },
  "uso-de-datos": {
    title: "Uso de datos",
    text: "Los datos de contacto y documentos enviados durante una solicitud se tratan únicamente para validar requisitos, brindar soporte y ejecutar el servicio contratado, conforme a los acuerdos aplicables.",
  },
};

export function generateStaticParams() {
  return Object.keys(pages).map((legal) => ({ legal }));
}

export async function generateMetadata({ params }: { params: Promise<{ legal: string }> }) {
  const { legal } = await params;
  const page = pages[legal as keyof typeof pages];
  if (!page) return {};
  return pageMetadata({ title: page.title, description: page.text, path: `/${legal}` });
}

export default async function LegalPage({ params }: { params: Promise<{ legal: string }> }) {
  const { legal } = await params;
  const page = pages[legal as keyof typeof pages];
  if (!page) notFound();
  return (
    <div className="container py-40">
      <p className="eyebrow">Información legal</p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl">{page.title}</h1>
      <p className="mt-8 max-w-3xl leading-8 text-muted">{page.text}</p>
      <p className="mt-5 max-w-3xl leading-8 text-muted">Para consultas sobre privacidad o tratamiento de información, escribe a firmas.contalink@gmail.com.</p>
      <p className="mt-8 text-xs text-[#777]">Última actualización: junio de 2026.</p>
    </div>
  );
}
