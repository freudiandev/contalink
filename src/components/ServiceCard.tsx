import { Building2, FileKey, Headphones, RefreshCw, Usb, CheckCircle2 } from "lucide-react";

const icons = { FileKey, Headphones, RefreshCw, Usb, Building2 };

export function ServiceCard({
  icon = "Building2",
  title,
  description,
  detail,
  items,
}: {
  icon?: keyof typeof icons;
  title: string;
  description?: string;
  detail?: string;
  items?: string[];
}) {
  const Icon = icons[icon];
  return (
    <article className="premium-card">
      <div className="card-icon"><Icon size={23} /></div>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {detail && <p className="mt-4 border-t border-white/8 pt-4 text-sm text-gold-soft">{detail}</p>}
      {items && (
        <ul className="feature-list">
          {items.map((item) => <li key={item}><CheckCircle2 size={15} />{item}</li>)}
        </ul>
      )}
    </article>
  );
}
