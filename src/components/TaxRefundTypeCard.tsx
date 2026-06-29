"use client";
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export function TaxRefundTypeCard({ types }: { types: Array<{ title: string; items: string[] }> }) {
  const [open, setOpen] = useState(0);
  return <div className="refund-types">{types.map((type, index) => <article className={cn("refund-type", open === index && "is-open")} key={type.title}>
    <button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span>0{index + 1}</span><strong>Devolución de {type.title}</strong><ChevronDown /></button>
    <div className="refund-type-panel"><ul>{type.items.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul></div>
  </article>)}</div>;
}
