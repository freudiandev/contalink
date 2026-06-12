import { site } from "@/data/site";

export type WhatsAppContext = "signature" | "accounting" | "general";

const messages: Record<WhatsAppContext, string> = {
  signature: "Hola ContaLink, deseo información sobre firmas electrónicas.",
  accounting: "Hola ContaLink, deseo asesoría contable o tributaria.",
  general: "Hola ContaLink, deseo información sobre sus servicios.",
};

export function whatsappUrl(
  context: WhatsAppContext = "general",
  customMessage?: string,
) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(customMessage ?? messages[context])}`;
}
