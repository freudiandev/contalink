import { CheckCircle2 } from "lucide-react";
export function RequirementChecklist({ items }: { items: string[] }) {
  return <div className="requirement-list">{items.map((item) => <div key={item}><CheckCircle2 size={18} /><span>{item}</span></div>)}</div>;
}
