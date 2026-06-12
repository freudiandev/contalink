export const site = {
  name: "ContaLink",
  legalName: "Jeaneth Viviana Curay Becerra",
  founder: "Ing. Jeaneth Curay",
  founded: "2018",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Firma ecuatoriana de asesoría contable, tributaria y firmas electrónicas Uanataca, con atención digital en todo Ecuador.",
  keywords: [
    "firma electrónica Ecuador",
    "firma electrónica Uanataca",
    "firma electrónica SRI",
    "contabilidad Quito",
    "asesoría tributaria Ecuador",
    "servicios contables Quito",
    "RUC Ecuador",
    "RIMPE Ecuador",
  ],
  slogan: "Transformamos tus números en soluciones contables inteligentes.",
  whatsapp: "593969709230",
  whatsappDisplay: "096 970 9230",
  phone: "0987633725",
  email: "firmas.contalink@gmail.com",
  location: "Quitumbe, Quito, Ecuador",
  city: "Quito",
  region: "Pichincha",
  country: "EC",
  social: [] as string[],
};

export const navigation = [
  { href: "/firma-electronica-ecuador", label: "Firma electrónica" },
  { href: "/contabilidad-tributaria-quito", label: "Contabilidad" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];
