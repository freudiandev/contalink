import { site } from "@/data/site";
import type { FaqItem } from "@/data/faqs";

const organization = {
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/icon.svg`,
  image: `${site.url}/social-image`,
  description: site.description,
  founder: { "@type": "Person", name: site.founder },
  foundingDate: site.founded,
  email: site.email,
  telephone: `+${site.whatsapp}`,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: `+${site.whatsapp}`,
    email: site.email,
    areaServed: "EC",
    availableLanguage: "Spanish",
  },
  knowsAbout: site.keywords,
  sameAs: site.social,
};

export const baseSchema = {
  "@context": "https://schema.org",
  "@graph": [
    organization,
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "es-EC",
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${site.url}/#business`,
      name: site.name,
      url: site.url,
      image: `${site.url}/social-image`,
      description: site.description,
      priceRange: "$$",
      areaServed: { "@type": "Country", name: "Ecuador" },
      address: {
        "@type": "PostalAddress",
        addressLocality: site.city,
        addressRegion: site.region,
        addressCountry: site.country,
      },
      telephone: `+${site.whatsapp}`,
      email: site.email,
    },
  ],
};

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function graphSchema(...items: object[]) {
  return { "@context": "https://schema.org", "@graph": items };
}
