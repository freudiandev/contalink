import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { navigation, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
            Soluciones contables, tributarias y firmas electrónicas con atención clara, preventiva y personalizada.
          </p>
          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-gold">Atención digital para todo Ecuador</p>
        </div>
        <div>
          <h3 className="footer-title">Servicios</h3>
          <div className="footer-links">
            {navigation.slice(0, 2).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <Link href="/contabilidad-tributaria-quito#servicios">Nómina y SRI</Link>
            <Link href="/firma-electronica-ecuador#productos">Archivo P12 y token</Link>
          </div>
        </div>
        <div>
          <h3 className="footer-title">Cobertura</h3>
          <div className="footer-links">
            <span>Quito y Quitumbe</span><span>Guayaquil</span><span>Cuenca</span><span>Todo Ecuador</span>
          </div>
        </div>
        <div>
          <h3 className="footer-title">Contacto</h3>
          <div className="footer-links">
            <a href={`tel:+${site.whatsapp}`}><Phone size={15} /> {site.whatsappDisplay}</a>
            <a href={`tel:${site.phone}`}><Phone size={15} /> {site.phone}</a>
            <a href={`mailto:${site.email}`}><Mail size={15} /> {site.email}</a>
            <span><MapPin size={15} /> {site.location}</span>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} ContaLink. Todos los derechos reservados.</span>
        <div><Link href="/politica-de-privacidad">Privacidad</Link><Link href="/terminos">Términos</Link><Link href="/uso-de-datos">Uso de datos</Link></div>
      </div>
    </footer>
  );
}
