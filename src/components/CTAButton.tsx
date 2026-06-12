import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "outline" | "text";
  className?: string;
  external?: boolean;
};

export function CTAButton({ href, children, variant = "gold", className, external }: Props) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn("button", `button-${variant}`, className)}
    >
      <span>{children}</span>
      <ArrowUpRight size={17} aria-hidden="true" />
    </Link>
  );
}
