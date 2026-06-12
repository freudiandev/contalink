import type { Metadata } from "next";
import { site } from "./site";

export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
  publishedTime,
  modifiedTime,
  section,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
}): Metadata {
  const url = `${site.url}${path}`;
  const imageUrl = new URL("/social-image", site.url);
  imageUrl.searchParams.set("title", title);
  imageUrl.searchParams.set("description", description);

  const images = [{
    url: imageUrl.toString(),
    secureUrl: imageUrl.toString(),
    width: 1200,
    height: 630,
    alt: `${title} - ${site.name}`,
    type: "image/png",
  }];

  return {
    title,
    description,
    keywords: [...new Set([...keywords, ...site.keywords])],
    metadataBase: new URL(site.url),
    alternates: {
      canonical: url,
      languages: { "es-EC": url, "x-default": url },
    },
    authors: [{ name: site.founder, url: site.url }],
    creator: site.founder,
    publisher: site.name,
    category: section,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "es_EC",
      type,
      images,
      ...(type === "article" ? {
        publishedTime,
        modifiedTime,
        authors: [site.founder],
        section,
        tags: keywords,
      } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images.map(({ url, alt }) => ({ url, alt })),
    },
    other: {
      "geo.region": "EC-P",
      "geo.placename": site.city,
      "geo.position": "-0.285;-78.543",
      ICBM: "-0.285, -78.543",
    },
  };
}
