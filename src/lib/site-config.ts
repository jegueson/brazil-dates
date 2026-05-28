/** Site-wide configuration for SEO, E-E-A-T, and legal disclosures. */
export const SITE_URL =
  import.meta.env.VITE_SITE_URL ?? "https://calendario-feriados.com.br";

export const SITE_NAME = "Calendário Brasileiro";

export const LEGAL_ENTITY = {
  name: "Calendário Brasileiro",
  responsible: "Gabriel Candido da Silva",
  email: "contato@calendario-feriados.com.br",
  country: "Brasil",
};

export const EDITORIAL = {
  authorName: "Gabriel Candido da Silva",
  authorRole: "Editor e pesquisador de cultura brasileira",
  lastReviewed: "2026-05-28",
};

export const OG_DEFAULT = `${SITE_URL}/og-image.jpg`;

export const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "";
