import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const basePath = process.env.GITHUB_PAGES === "true" ? "/contalink" : "";

  return {
    name: "ContaLink",
    short_name: "ContaLink",
    description: "Contabilidad, tributación y firma electrónica en Ecuador.",
    start_url: `${basePath}/`,
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    lang: "es-EC",
    icons: [{ src: `${basePath}/icon.png`, sizes: "any", type: "image/png" }],
  };
}
