import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    ["", 1, "weekly"],
    ["/firma-electronica-ecuador", .95, "weekly"],
    ["/contabilidad-tributaria-quito", .95, "weekly"],
    ["/devolucion-impuestos-sri-ecuador", .95, "weekly"],
    ["/blog", .8, "weekly"],
    ["/contacto", .7, "monthly"],
    ["/politica-de-privacidad", .2, "yearly"],
    ["/terminos", .2, "yearly"],
    ["/uso-de-datos", .2, "yearly"],
  ] as const;

  return [
    ...staticRoutes.map(([path, priority, changeFrequency]) => ({
      url: `${site.url}${path}`,
      lastModified: new Date("2026-06-11"),
      changeFrequency,
      priority,
    })),
    ...blogPosts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: new Date("2026-06-11"),
      changeFrequency: "monthly" as const,
      priority: .75,
    })),
  ];
}
