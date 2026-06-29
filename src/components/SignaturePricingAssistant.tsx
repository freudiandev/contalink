"use client";

import { useState } from "react";
import { ArrowLeft, CheckCircle2, MessageCircle, HelpCircle, ChevronRight, FileSignature, HardDrive } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { pricingData, assistantOptions, ProductData } from "@/data/prices";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

type ViewState = "selector" | "assistant" | "recommendation" | "pricing-p12" | "pricing-token";

export function SignaturePricingAssistant() {
  const [view, setView] = useState<ViewState>("selector");
  const [recommendation, setRecommendation] = useState<"p12" | "token" | null>(null);

  const handleAssistantChoice = (result: "p12" | "token" | "whatsapp") => {
    if (result === "whatsapp") {
      window.open(whatsappUrl("signature_help"), "_blank");
      return;
    }
    setRecommendation(result);
    setView("recommendation");
  };

  const renderProductSelector = (product: ProductData) => (
    <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-black/40 p-6 shadow-2xl transition-all hover:border-gold/30 lg:p-8">
      <div>
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
            {product.id === "p12" ? <FileSignature size={24} /> : <HardDrive size={24} />}
          </div>
          <div>
            <h3 className="font-display text-xl text-white md:text-2xl">{product.name}</h3>
            <span className="text-sm font-medium text-gold-light">{product.shortDesc}</span>
          </div>
        </div>
        <p className="mb-6 text-sm leading-7 text-muted">{product.description}</p>
        <ul className="mb-8 space-y-3 text-sm text-muted">
          <li className="flex items-start gap-2"><CheckCircle2 size={18} className="shrink-0 text-gold" /> <strong>Ideal para:</strong> {product.bestFor}</li>
          <li className="flex items-start gap-2"><CheckCircle2 size={18} className="shrink-0 text-gold" /> <strong>Desde:</strong> {product.priceFrom}</li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <button 
          onClick={() => setView(`pricing-${product.id}` as ViewState)}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-display text-sm font-bold text-black transition-transform hover:scale-[1.02]"
        >
          Ver precios <ChevronRight size={18} />
        </button>
        <button 
          onClick={() => setView("assistant")}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm text-muted transition-colors hover:bg-white/5 hover:text-white"
        >
          No sé si esta me sirve <HelpCircle size={16} />
        </button>
      </div>
    </div>
  );

  const renderPrices = (productId: "p12" | "token") => {
    const product = pricingData[productId];
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="mb-8 flex flex-col-reverse items-center gap-6 sm:flex-row sm:justify-between">
          <button onClick={() => setView("selector")} className="flex items-center gap-2 text-sm text-gold transition-colors hover:text-white">
            <ArrowLeft size={16} /> Volver a explicación
          </button>
          
          <div className="flex w-full items-center rounded-full border border-white/10 bg-black/60 p-1.5 shadow-lg sm:w-auto">
            <button 
              onClick={() => setView("pricing-p12")}
              className={cn("flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition-all sm:px-6", productId === "p12" ? "bg-gold text-black shadow-md" : "text-muted hover:text-white")}
            >
              <FileSignature size={16} /> P12 / Nube
            </button>
            <button 
              onClick={() => setView("pricing-token")}
              className={cn("flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition-all sm:px-6", productId === "token" ? "bg-gold text-black shadow-md" : "text-muted hover:text-white")}
            >
              <HardDrive size={16} /> Token
            </button>
          </div>
        </div>
        
        <div className="mb-10 text-center">
          <h3 className="font-display text-3xl md:text-4xl">{product.name}</h3>
          <p className="mt-3 text-muted">{product.shortDesc}</p>
          <div className="mt-4 flex justify-center gap-4 text-xs">
            <span className="rounded-full bg-white/5 px-3 py-1">Persona natural</span>
            <span className="rounded-full bg-white/5 px-3 py-1">Representante legal</span>
            <span className="rounded-full bg-white/5 px-3 py-1">Empresa</span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {product.prices.map((tier) => (
            <div key={tier.duration} className={cn("relative flex flex-col items-center rounded-2xl border p-6 text-center transition-transform hover:-translate-y-1", tier.featured ? "border-gold/50 bg-gradient-to-b from-gold/10 to-transparent shadow-[0_10px_30px_-10px_rgba(212,175,55,0.2)]" : "border-white/10 bg-black/40")}>
              {tier.featured && <span className="absolute -top-3 rounded-full bg-gold px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black">Más popular</span>}
              <span className="mb-2 text-sm font-medium text-muted">Vigencia</span>
              <strong className="mb-4 font-display text-3xl text-white">{tier.duration}</strong>
              <span className="mb-6 text-2xl font-light text-gold-light">{tier.price}</span>
              
              {tier.label ? (
                <p className="mb-6 min-h-[40px] text-xs text-muted">{tier.label}</p>
              ) : (
                <div className="mb-6 min-h-[40px]" />
              )}

              <CTAButton 
                href={`https://wa.me/593969709230?text=${encodeURIComponent(`Hola ContaLink, quiero información sobre la firma electrónica ${product.id === 'p12' ? 'P12/Nube' : 'Token'} de ${tier.duration}.`)}`} 
                external 
                className="mt-auto w-full text-xs"
              >
                Solicitar por WhatsApp
              </CTAButton>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl bg-gold/5 p-6 text-center text-sm text-muted">
          <p>Los precios mostrados son para el público general. Los requisitos y el proceso de emisión pueden variar ligeramente según el tipo de suscriptor (persona natural o jurídica).</p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      {view === "selector" && (
        <div className="animate-in fade-in duration-500">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {renderProductSelector(pricingData.p12)}
            {renderProductSelector(pricingData.token)}
          </div>
          <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-[#0a0a0a] p-8 text-center">
            <h4 className="font-display text-xl text-white">¿Todavía no sabes cuál firma necesitas?</h4>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted">Envíanos un mensaje por WhatsApp y te ayudamos a elegir la opción correcta según tu trámite, sin compromiso.</p>
            <CTAButton href={whatsappUrl("signature_help")} external variant="outline" className="mt-6">
              Hablar con un asesor <MessageCircle size={16} className="ml-2 inline" />
            </CTAButton>
          </div>
        </div>
      )}

      {view === "assistant" && (
        <div className="mx-auto max-w-2xl animate-in slide-in-from-right-8 duration-500">
          <button onClick={() => setView("selector")} className="mb-8 flex items-center gap-2 text-sm text-gold hover:text-white">
            <ArrowLeft size={16} /> Volver
          </button>
          <div className="rounded-3xl border border-white/10 bg-black/40 p-8 text-center shadow-2xl">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold">
              <HelpCircle size={32} />
            </div>
            <h3 className="mb-8 font-display text-2xl md:text-3xl">¿Para qué necesitas la firma principalmente?</h3>
            <div className="flex flex-col gap-3">
              {assistantOptions.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAssistantChoice(opt.recommendation)}
                  className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-left transition-all hover:border-gold/50 hover:bg-gold/10 hover:pl-8 hover:text-gold-light"
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {view === "recommendation" && recommendation && (
        <div className="mx-auto max-w-2xl animate-in slide-in-from-right-8 duration-500">
          <div className="mb-8 flex items-center justify-between">
            <button onClick={() => setView("assistant")} className="flex items-center gap-2 text-sm text-gold hover:text-white">
              <ArrowLeft size={16} /> Cambiar respuesta
            </button>
            <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">Recomendación personalizada</span>
          </div>
          {renderProductSelector(pricingData[recommendation])}
        </div>
      )}

      {(view === "pricing-p12" || view === "pricing-token") && renderPrices(view === "pricing-p12" ? "p12" : "token")}
    </div>
  );
}
