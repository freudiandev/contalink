"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { whatsappUrl, type WhatsAppContext } from "@/lib/whatsapp";

type FormType = "signature" | "accounting" | "general";

const configs = {
  signature: {
    title: "Cuéntanos qué firma necesitas",
    selectLabel: "Tipo de firma",
    options: ["Archivo P12", "Token USB", "No sé, necesito asesoría"],
    secondLabel: "Uso principal",
    secondOptions: ["SRI", "Documentos", "Facturación electrónica", "Empresa", "Otro"],
  },
  accounting: {
    title: "Solicita una revisión inicial",
    selectLabel: "Tipo de cliente",
    options: ["Persona natural", "Emprendedor", "Sociedad", "Empresa"],
    secondLabel: "Servicio requerido",
    secondOptions: ["Declaraciones SRI", "Contabilidad", "Nómina e IESS", "RUC o RIMPE", "Constitución de compañía", "Otro"],
  },
  general: {
    title: "Conversemos sobre lo que necesitas",
    selectLabel: "Servicio",
    options: ["Firma electrónica", "Asesoría contable", "Asesoría tributaria", "Otro"],
    secondLabel: "Prioridad",
    secondOptions: ["Quiero información", "Necesito una cotización", "Es urgente"],
  },
};

export function ContactForm({ type = "general" }: { type?: FormType }) {
  const config = configs[type];
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hola ContaLink, deseo solicitar información.",
      `Nombre: ${data.get("nombre")}`,
      `WhatsApp: ${data.get("whatsapp")}`,
      `Correo: ${data.get("correo")}`,
      `${config.selectLabel}: ${data.get("tipo")}`,
      `${config.secondLabel}: ${data.get("servicio")}`,
      `Ciudad: ${data.get("ciudad")}`,
      `Mensaje: ${data.get("mensaje") || "Sin mensaje adicional"}`,
    ].join("\n");
    setSent(true);
    window.open(whatsappUrl(type as WhatsAppContext, message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div>
        <p className="eyebrow">Atención personalizada</p>
        <h3>{config.title}</h3>
        <p>Completa los datos y abriremos WhatsApp con tu solicitud lista para enviar.</p>
      </div>
      <div className="form-grid">
        <label>Nombre<input name="nombre" required autoComplete="name" /></label>
        <label>WhatsApp<input name="whatsapp" required inputMode="tel" autoComplete="tel" /></label>
        <label>Correo<input name="correo" required type="email" autoComplete="email" /></label>
        <label>Ciudad<input name="ciudad" required autoComplete="address-level2" /></label>
        <label>{config.selectLabel}<select name="tipo" required defaultValue=""><option value="" disabled>Selecciona una opción</option>{config.options.map((o) => <option key={o}>{o}</option>)}</select></label>
        <label>{config.secondLabel}<select name="servicio" required defaultValue=""><option value="" disabled>Selecciona una opción</option>{config.secondOptions.map((o) => <option key={o}>{o}</option>)}</select></label>
        <label className="md:col-span-2">Mensaje<textarea name="mensaje" rows={4} /></label>
      </div>
      <button className="button button-gold w-full sm:w-fit" type="submit"><span>{sent ? "Abrir WhatsApp nuevamente" : "Continuar por WhatsApp"}</span><Send size={17} /></button>
      <small>No almacenamos tus datos en este sitio.</small>
    </form>
  );
}
