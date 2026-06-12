import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-3", className)} aria-label="ContaLink, inicio">
      <span className="logo-mark" aria-hidden="true">
        <span>C</span>
      </span>
      {!compact && (
        <span className="leading-none">
          <strong className="block font-display text-lg tracking-[0.16em] text-white">CONTALINK</strong>
          <span className="mt-1 block text-[9px] uppercase tracking-[0.24em] text-gold">Contabilidad inteligente</span>
        </span>
      )}
    </Link>
  );
}
