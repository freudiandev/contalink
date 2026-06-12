"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { FaqItem } from "@/data/faqs";
import { cn } from "@/lib/cn";

export function FAQ({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const active = open === index;
        return (
          <div className={cn("faq-item", active && "is-open")} key={item.question}>
            <button onClick={() => setOpen(active ? -1 : index)} aria-expanded={active}>
              <span>{item.question}</span><Plus size={20} />
            </button>
            <div className="faq-answer"><p>{item.answer}</p></div>
          </div>
        );
      })}
    </div>
  );
}
