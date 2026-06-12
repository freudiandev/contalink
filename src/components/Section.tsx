import { cn } from "@/lib/cn";

type Props = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
};

export function Section({ id, eyebrow, title, description, children, className, align = "left" }: Props) {
  return (
    <section id={id} className={cn("section-shell", className)}>
      <div className="container">
        {(eyebrow || title || description) && (
          <header className={cn("section-heading", align === "center" && "mx-auto text-center")}>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2>{title}</h2>}
            {description && <p>{description}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
