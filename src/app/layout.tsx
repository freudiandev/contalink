import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { JsonLd } from "@/components/JsonLd";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { DeploymentUpdater } from "@/components/DeploymentUpdater";
import { baseSchema } from "@/lib/schema";
import { site } from "@/data/site";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const basePath = process.env.GITHUB_PAGES === "true" ? "/contalink" : "";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "ContaLink | Contabilidad y Firma Electrónica Ecuador", template: "%s | ContaLink" },
  description: site.description,
  keywords: site.keywords,
  applicationName: "ContaLink",
  authors: [{ name: site.founder, url: site.url }],
  creator: site.founder,
  publisher: site.name,
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  manifest: `${basePath}/manifest.webmanifest`,
  icons: { icon: `${basePath}/icon.svg`, apple: `${basePath}/icon.svg` },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#050505", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>
        <DeploymentUpdater
          basePath={basePath}
          buildId={process.env.NEXT_PUBLIC_BUILD_ID}
        />
        <AnimatedBackground />
        <a href="#contenido" className="skip-link">Saltar al contenido</a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <WhatsAppButton />
        <JsonLd data={baseSchema} />
      </body>
    </html>
  );
}
