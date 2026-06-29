import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({ compact = false, className }: { compact?: boolean; className?: string }) {
  const basePath = process.env.GITHUB_PAGES === "true" ? "/contalink" : "";
  
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-3", className)} aria-label="ContaLink, inicio">
      <div className="relative h-10 w-10 overflow-hidden rounded-full border border-gold/30 p-1 bg-black/50">
        <Image
          src={`${basePath}/assets/logo.png`}
          alt="ContaLink Logo"
          fill
          className="object-contain"
          sizes="40px"
        />
      </div>
      {!compact && (
        <span className="leading-none">
          <strong className="block font-display text-lg tracking-[0.16em] text-white">CONTALINK</strong>
          <span className="mt-1 block text-[9px] uppercase tracking-[0.24em] text-gold">Contabilidad inteligente</span>
        </span>
      )}
    </Link>
  );
}
