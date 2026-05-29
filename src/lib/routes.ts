import { NATIONAL_HOLIDAY_GUIDES } from "@/data/national-holiday-guides";
import { BRAZIL_STATES } from "@/data/brazil-states";
import { BRAZIL_CITIES } from "@/data/brazil-cities";
import { BRAZIL_REGIONS } from "@/data/brazil-regions";
import { getAllRegionalHolidays } from "@/data/regional-holidays";
import { BLOG_POSTS } from "@/data/blog-posts";
import { MONTH_SLUGS } from "@/lib/holiday-utils";

const CALENDAR_YEARS = [2025, 2026, 2027, 2028];
const WHEN_YEARS = [2025, 2026, 2027, 2028];
const COMPARE_YEARS = [2025, 2026, 2027, 2028];

/** All static routes for prerender, sitemap, and RSS. Keep in sync with scripts/routes-config.mjs */
export function getAllPrerenderRoutes(): string[] {
  const staticPages = [
    "/",
    "/sobre",
    "/historia",
    "/tradicoes",
    "/contato",
    "/privacidade",
    "/termos",
    "/regionais",
    "/cidades",
    "/equipe",
    "/linha-editorial",
    "/como-apuramos-as-datas",
    "/perguntas-frequentes",
    "/qual-estado-tem-mais-feriados",
    "/feriado-bancario-vs-feriado-nacional",
    "/calculadora-dias-uteis",
    "/calculadora-prazos",
    "/planejador-de-ferias",
    "/exportar",
    "/widget",
    "/widget-embed",
    "/imprimir",
    "/blog",
    ...CALENDAR_YEARS.map((y) => `/feriados/${y}`),
    ...COMPARE_YEARS.map((y) => `/feriados-prolongados-${y}`),
    ...COMPARE_YEARS.map((y) => `/pontos-facultativos-${y}`),
    ...COMPARE_YEARS.map((y) => `/feriado-cai-em-fim-de-semana-${y}`),
    ...[2025, 2026, 2027, 2028].map((y) => `/emendas-de-feriado/${y}`),
  ];

  const holidayRoutes = NATIONAL_HOLIDAY_GUIDES.map((g) => `/feriado/${g.slug}`);
  const quandoRoutes = NATIONAL_HOLIDAY_GUIDES.map((g) => `/quando-e/${g.slug}`);
  const quandoYearRoutes = NATIONAL_HOLIDAY_GUIDES.flatMap((g) =>
    WHEN_YEARS.map((y) => `/quando-e/${g.slug}/${y}`)
  );
  const countdownRoutes = NATIONAL_HOLIDAY_GUIDES.map((g) => `/quantos-dias-faltam/${g.slug}`);
  const countdownYearRoutes = NATIONAL_HOLIDAY_GUIDES.flatMap((g) =>
    WHEN_YEARS.map((y) => `/quantos-dias-faltam/${g.slug}/${y}`)
  );
  const stateRoutes = BRAZIL_STATES.map((s) => `/regional/${s.slug}`);
  const regionRoutes = BRAZIL_REGIONS.map((r) => `/regiao/${r.slug}`);
  const cityRoutes = BRAZIL_CITIES.map((c) => `/cidade/${c.slug}`);
  const regionalHolidayRoutes = getAllRegionalHolidays().map((h) => `/feriado-regional/${h.id}`);
  const monthRoutes = [2025, 2026, 2027, 2028].flatMap((y) =>
    MONTH_SLUGS.map((m) => `/feriados/${y}/${m}`)
  );
  const stateCityHubRoutes = BRAZIL_STATES.map((s) => `/regional/${s.slug}/cidades`);
  const blogRoutes = BLOG_POSTS.map((p) => `/blog/${p.slug}`);

  return [
    ...staticPages,
    ...holidayRoutes,
    ...quandoRoutes,
    ...quandoYearRoutes,
    ...countdownRoutes,
    ...countdownYearRoutes,
    ...stateRoutes,
    ...regionRoutes,
    ...cityRoutes,
    ...regionalHolidayRoutes,
    ...monthRoutes,
    ...stateCityHubRoutes,
    ...blogRoutes,
  ];
}
