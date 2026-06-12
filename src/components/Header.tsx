"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { navigation } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={cn("site-header", scrolled && "site-header-scrolled")}>
      <div className="container flex h-[76px] items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">{item.label}</Link>
          ))}
          <Link href={whatsappUrl()} target="_blank" rel="noreferrer" className="header-cta">
            Escríbenos por WhatsApp
          </Link>
        </nav>
        <button
          className="menu-button lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <Menu size={24} />
        </button>
      </div>
      <div className={cn("drawer-backdrop", open && "is-open")} onClick={() => setOpen(false)} />
      <aside className={cn("mobile-drawer", open && "is-open")} aria-hidden={!open}>
        <div className="flex items-center justify-between">
          <Logo />
          <button className="menu-button" onClick={() => setOpen(false)} aria-label="Cerrar menú"><X /></button>
        </div>
        <nav className="mt-12 flex flex-col" aria-label="Navegación móvil">
          {navigation.map((item, index) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="drawer-link">
              <span>0{index + 1}</span>{item.label}
            </Link>
          ))}
        </nav>
        <Link href={whatsappUrl()} target="_blank" className="button button-gold mt-auto">Hablar por WhatsApp</Link>
        <p className="mt-5 text-xs text-muted">Atención digital para todo Ecuador</p>
      </aside>
    </header>
  );
}
