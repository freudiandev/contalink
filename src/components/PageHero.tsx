import { Badge } from "./Badge";
import { CTAButton } from "./CTAButton";
import { FileCheck2, FileText, Landmark, ScanLine } from "lucide-react";

type Props = { whatsappHref: string };

export function PageHero({ whatsappHref }: Props) {
  const badges = ["Impuesto a la Renta", "IVA", "Pago indebido", "Pago en exceso", "Retenciones", "Adultos mayores", "Discapacidad", "Exportadores"];
  return <section className="hero tax-refund-hero">
    <div className="container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">Asesoría tributaria · Ecuador</p>
        <h1>Convierte tus impuestos en <span className="text-gradient">oportunidades financieras</span></h1>
        <p>Somos especialistas en procesos tributarios; te ayudamos a recuperar capital, fortalecer tu liquidez y presentar solicitudes de devolución ante el SRI con sustento documental.</p>
        <div className="hero-actions"><CTAButton href={whatsappHref} external>Revisar mi caso por WhatsApp</CTAButton><CTAButton href="#tipos" variant="outline">Ver tipos de devolución</CTAButton></div>
        <p className="tax-microcopy">Diagnóstico tributario personalizado. La aprobación final depende del SRI.</p>
        <div className="hero-badges">{badges.map((badge) => <Badge key={badge}>{badge}</Badge>)}</div>
      </div>
      <div className="tax-refund-visual" aria-hidden="true">
        <div className="tax-document tax-document-back"><FileText /><span>DECLARACIÓN</span><i /></div>
        <div className="tax-document tax-document-front"><Landmark /><span>SOLICITUD SRI</span><b>Saldo a favor</b><i /><i /><i /></div>
        <div className="tax-validation"><FileCheck2 /><strong>CASO EN REVISIÓN</strong><span>Documentación · requisitos · sustento</span></div>
        <ScanLine className="tax-scan" />
      </div>
    </div>
  </section>;
}
