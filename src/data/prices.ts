export type PricingTier = {
  duration: string;
  price: string;
  label?: string;
  featured?: boolean;
};

export type ProductData = {
  id: "p12" | "token";
  name: string;
  shortDesc: string;
  description: string;
  bestFor: string;
  priceFrom: string;
  prices: PricingTier[];
};

export const pricingData: Record<"p12" | "token", ProductData> = {
  p12: {
    id: "p12",
    name: "Firma Electrónica P12 / Nube",
    shortDesc: "Opción práctica y económica",
    description: "Es una firma electrónica digital, práctica y económica. Ideal para trámites rápidos, uso personal, declaraciones, documentos digitales y personas que quieren firmar sin usar un dispositivo físico.",
    bestFor: "Trámites rápidos, SRI, uso personal",
    priceFrom: "$12,75",
    prices: [
      { duration: "7 días", price: "$12,75", label: "Para trámites puntuales" },
      { duration: "30 días", price: "$14,75", label: "Para uso temporal" },
      { duration: "1 año", price: "$21,00", label: "Más elegido para uso personal", featured: true },
      { duration: "2 años", price: "$32,00" },
      { duration: "3 años", price: "$43,00" },
      { duration: "4 años", price: "$53,00" },
      { duration: "5 años", price: "$62,00", label: "Mejor relación a largo plazo" }
    ]
  },
  token: {
    id: "token",
    name: "Firma Electrónica Token",
    shortDesc: "Opción profesional y segura",
    description: "Es una firma electrónica con mayor enfoque en seguridad y uso profesional. Es ideal para representantes legales, empresas o personas que necesitan un soporte más robusto para firmar documentos importantes.",
    bestFor: "Representantes legales, empresas",
    priceFrom: "$33,00",
    prices: [
      { duration: "1 año", price: "$33,00" },
      { duration: "2 años", price: "$49,00" },
      { duration: "3 años", price: "$58,00", featured: true },
      { duration: "4 años", price: "$67,00" },
      { duration: "5 años", price: "$75,00", label: "Ideal para uso profesional continuo" }
    ]
  }
};

export const assistantOptions = [
  { text: "Trámite personal", recommendation: "p12" },
  { text: "Declaraciones o SRI", recommendation: "p12" },
  { text: "Empresa o representación legal", recommendation: "token" },
  { text: "Firmar documentos importantes", recommendation: "token" },
  { text: "Solo la necesito por pocos días", recommendation: "p12" },
  { text: "No estoy seguro, necesito ayuda", recommendation: "whatsapp" }
] as const;

export const comparisonRows = [
  ["Precio", "Más económico", "Mayor inversión"],
  ["Uso", "Digital y práctico", "Profesional y robusto"],
  ["Ideal para", "Trámites rápidos", "Empresas y representantes"],
  ["Duración", "Desde 7 días hasta 5 años", "De 1 a 5 años"],
  ["Facilidad", "Rápida de adquirir", "Más enfocada en seguridad"],
  ["Recomendación", "Usuarios generales", "Usuarios empresariales"],
];

// Compatibilidad temporal para evitar romper otros archivos si aún usan signaturePrices directamente
export const signaturePrices = pricingData.p12.prices;
