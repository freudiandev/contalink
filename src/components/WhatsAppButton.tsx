"use client";

import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { whatsappUrl, type WhatsAppContext } from "@/lib/whatsapp";

export function WhatsAppButton() {
  const pathname = usePathname();
  let context: WhatsAppContext = "general";
  if (pathname.includes("firma-electronica")) context = "signature";
  if (pathname.includes("contabilidad") || pathname.includes("rimpe") || pathname.includes("declaraciones")) context = "accounting";

  return (
    <a
      href={whatsappUrl(context)}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label={context === "signature" ? "Consultar firma electrónica por WhatsApp" : "Contactar a ContaLink por WhatsApp"}
    >
      <MessageCircle size={24} aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}
