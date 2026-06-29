import { CTAButton } from "./CTAButton";
export function CTASection({ title, text, whatsappHref, secondaryHref = "/contacto", secondaryLabel = "Solicitar asesoría tributaria" }: { title: string; text: string; whatsappHref: string; secondaryHref?: string; secondaryLabel?: string }) {
  return <div className="cta-band"><h2>{title}</h2><p>{text}</p><div className="hero-actions"><CTAButton href={whatsappHref} external>Revisar mi caso por WhatsApp</CTAButton><CTAButton href={secondaryHref} variant="outline">{secondaryLabel}</CTAButton></div><small>Revisamos tu caso antes de presentar una solicitud.</small></div>;
}
