import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "ContaLink, contabilidad y firma electrónica en Ecuador";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "radial-gradient(circle at 75% 25%, #392e0d 0%, #0b0b0b 32%, #050505 70%)", color: "white" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
        <div style={{ width: 72, height: 72, border: "2px solid #F5D76E", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, color: "#F5D76E" }}>C</div>
        <div style={{ fontSize: 32, letterSpacing: 8 }}>CONTALINK</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 68, lineHeight: 1.05, maxWidth: 970, fontWeight: 600 }}>
          <span>Contabilidad inteligente.</span>
          <span style={{ color: "#F5D76E" }}>Identidad digital segura.</span>
        </div>
        <div style={{ marginTop: 28, fontSize: 24, color: "#B8B8B8" }}>Quito, Ecuador · Atención digital en todo el país</div>
      </div>
    </div>,
    size,
  );
}
