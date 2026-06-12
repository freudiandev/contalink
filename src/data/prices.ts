export type SignaturePrice = {
  duration: string;
  file?: string;
  token?: string;
  featured?: boolean;
};

// Edita estos valores cuando se confirme la lista comercial vigente.
// Si un valor queda vacío, la interfaz muestra "Consultar".
export const signaturePrices: SignaturePrice[] = [
  { duration: "7 días" },
  { duration: "30 días" },
  { duration: "1 año", featured: true },
  { duration: "2 años" },
  { duration: "3 años" },
  { duration: "4 años" },
  { duration: "5 años" },
];
