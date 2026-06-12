import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const runtime = "edge";

const trim = (value: string | null, fallback: string, max: number) =>
  (value?.trim() || fallback).slice(0, max);

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = trim(searchParams.get("title"), site.name, 100);
  const description = trim(searchParams.get("description"), site.description, 180);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 68,
        background: "radial-gradient(circle at 82% 18%, #4b3d12 0%, #111 34%, #050505 72%)",
        color: "white",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ width: 68, height: 68, border: "2px solid #F5D76E", borderRadius: 34, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 34, color: "#F5D76E" }}>C</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 28, letterSpacing: 7 }}>CONTALINK</span>
          <span style={{ marginTop: 5, fontSize: 17, color: "#B8B8B8" }}>Quito · Atención en todo Ecuador</span>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 1040 }}>
        <div style={{ fontSize: title.length > 65 ? 48 : 58, lineHeight: 1.08, fontWeight: 650 }}>{title}</div>
        <div style={{ marginTop: 24, fontSize: 23, lineHeight: 1.35, color: "#D0D0D0" }}>{description}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, color: "#F5D76E" }}>
        <span>Firma electrónica · Contabilidad · Tributación</span>
        <span>ecuadorfirma.me</span>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      headers: { "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800" },
    },
  );
}
