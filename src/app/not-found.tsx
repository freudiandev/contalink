import { CTAButton } from "@/components/CTAButton";

export default function NotFound() {
  return (
    <div className="container flex min-h-[80svh] flex-col items-center justify-center text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-4 font-display text-5xl">Esta página no está disponible</h1>
      <p className="mt-4 text-muted">Vuelve al inicio para elegir el servicio que necesitas.</p>
      <CTAButton href="/" className="mt-7">Ir al inicio</CTAButton>
    </div>
  );
}
