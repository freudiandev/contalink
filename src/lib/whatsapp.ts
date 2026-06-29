import { site } from "@/data/site";

export type WhatsAppContext = "signature" | "signature_help" | "accounting" | "tax_refund" | "general";

const messages: Record<WhatsAppContext, string> = {
  signature: "Hola ContaLink, deseo información sobre firmas electrónicas.",
  signature_help: "Hola ContaLink, no estoy seguro qué firma electrónica elegir. ¿Me pueden ayudar?",
  accounting: "Hola ContaLink, deseo asesoría contable o tributaria.",
  tax_refund: "Hola ContaLink, deseo revisar si puedo solicitar una devolución de impuestos ante el SRI. ¿Me pueden ayudar con un diagnóstico?",
  general: "Hola ContaLink, deseo información sobre sus servicios.",
};

export function whatsappUrl(
  context: WhatsAppContext = "general",
  customMessage?: string,
) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(customMessage ?? messages[context])}`;
}
