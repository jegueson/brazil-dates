/** Brazilian macro-regions for programmatic SEO hubs. */

export interface BrazilRegionInfo {
  name: string;
  slug: string;
  states: string[];
  description: string;
  culturalContent: string;
}

export const BRAZIL_REGIONS: BrazilRegionInfo[] = [
  {
    name: "Norte",
    slug: "norte",
    states: ["Acre", "Amapá", "Amazonas", "Pará", "Rondônia", "Roraima", "Tocantins"],
    description: "Amazônia, Círio de Nazaré e festas ribeirinhas.",
    culturalContent:
      "A região Norte concentra a maior biodiversidade do planeta e calendários marcados por procissões como o Círio de Nazaré, o Boi-Bumbá de Parintins e festas juninas amazônicas. Feriados estaduais e municipais refletem a história da borracha, da mineração e dos povos originários.",
  },
  {
    name: "Nordeste",
    slug: "nordeste",
    states: [
      "Alagoas",
      "Bahia",
      "Ceará",
      "Maranhão",
      "Paraíba",
      "Pernambuco",
      "Piauí",
      "Rio Grande do Norte",
      "Sergipe",
    ],
    description: "Carnaval, festas juninas e forte tradição religiosa.",
    culturalContent:
      "O Nordeste é o coração das festas juninas, do frevo, do maracatu e do Carnaval de rua. Cada capital tem feriados municipais ligados a padroeiros, fundações coloniais e manifestações culturais afro-indígenas que complementam o calendário nacional.",
  },
  {
    name: "Centro-Oeste",
    slug: "centro-oeste",
    states: ["Distrito Federal", "Goiás", "Mato Grosso", "Mato Grosso do Sul"],
    description: "Pantanal, cerrado e capital federal.",
    culturalContent:
      "O Centro-Oeste combina agronegócio, ecoturismo no Pantanal e a simbologia de Brasília. Romarias como a de Trindade (GO), festas do peão e feriados de criação dos estados estruturam o calendário regional além dos feriados nacionais.",
  },
  {
    name: "Sudeste",
    slug: "sudeste",
    states: ["Espírito Santo", "Minas Gerais", "Rio de Janeiro", "São Paulo"],
    description: "Maior PIB do país e calendário mais denso de feriados locais.",
    culturalContent:
      "O Sudeste concentra metrópoles, indústria e feriados estaduais como a Revolução Constitucionalista (SP) e a Adesão do Espírito Santo à Independência. Carnaval, festas religiosas e aniversários municipais geram alto volume de buscas por datas locais.",
  },
  {
    name: "Sul",
    slug: "sul",
    states: ["Paraná", "Rio Grande do Sul", "Santa Catarina"],
    description: "Colonização europeia, Oktoberfest e tradições gaúchas.",
    culturalContent:
      "O Sul destaca-se pela Semana Farroupilha, Oktoberfest em Blumenau, festas de colonização italiana e alemã, e feriados estaduais como a Proclamação da República no RS. O clima temperado influencia festas de inverno e eventos gastronômicos.",
  },
];

export function getRegionBySlug(slug: string): BrazilRegionInfo | undefined {
  return BRAZIL_REGIONS.find((r) => r.slug === slug);
}
