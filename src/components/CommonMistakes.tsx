import { AlertTriangle } from "lucide-react";
export function CommonMistakes({ items }: { items: string[] }) {
  return <div className="mistake-grid">{items.map((item, index) => <article key={item}><AlertTriangle size={19} /><span>{String(index + 1).padStart(2, "0")}</span><p>{item}.</p></article>)}</div>;
}
