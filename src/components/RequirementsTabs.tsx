"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/cn";

const groups = [
  {
    label: "Persona natural",
    items: ["Cédula vigente, anverso y reverso", "Selfie sosteniendo la cédula", "Correo electrónico", "Número celular", "Dirección", "RUC si se usará para trámites tributarios", "Firma de autorización"],
  },
  {
    label: "Representante legal / persona jurídica",
    items: ["RUC actualizado", "Nombramiento vigente del representante legal", "Cédula del representante legal", "Selfie del representante legal", "Correo electrónico", "Número de contacto"],
  },
];

export function RequirementsTabs() {
  const [active, setActive] = useState(0);
  return (
    <div className="tabs">
      <div className="tab-buttons" role="tablist">
        {groups.map((group, index) => (
          <button key={group.label} role="tab" aria-selected={active === index} onClick={() => setActive(index)} className={cn(active === index && "active")}>{group.label}</button>
        ))}
      </div>
      <div className="tab-panel" role="tabpanel">
        <ul>{groups[active].items.map((item) => <li key={item}><CheckCircle2 size={18} />{item}</li>)}</ul>
        <p>Te confirmamos los requisitos aplicables antes de iniciar el proceso.</p>
      </div>
    </div>
  );
}
