import { NATIONAL_HOLIDAY_GUIDES } from "@/data/national-holiday-guides";
import { BRAZIL_STATES } from "@/data/brazil-states";
import { BRAZIL_CITIES } from "@/data/brazil-cities";
import { MONTH_SLUGS } from "@/lib/holiday-utils";

/** All static routes for prerender, sitemap, and RSS. */
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
    "/equipe",
    "/linha-editorial",
    "/como-apuramos-as-datas",
    "/perguntas-frequentes",
    "/feriados/2026",
    "/feriados/2027",
    "/feriados/2028",
    "/qual-estado-tem-mais-feriados",
    "/feriados-prolongados-2026",
    "/pontos-facultativos-2026",
    "/feriado-bancario-vs-feriado-nacional",
    "/feriado-cai-em-fim-de-semana-2026",
    "/calculadora-dias-uteis",
    "/calculadora-prazos",
    "/planejador-de-ferias",
    "/emendas-de-feriado/2026",
    "/emendas-de-feriado/2027",
    "/exportar",
    "/widget",
    "/imprimir",
    "/blog",
  ];

  const holidayRoutes = NATIONAL_HOLIDAY_GUIDES.map((g) => `/feriado/${g.slug}`);
  const quandoRoutes = NATIONAL_HOLIDAY_GUIDES.map((g) => `/quando-e/${g.slug}`);
  const countdownRoutes = NATIONAL_HOLIDAY_GUIDES.map(
    (g) => `/quantos-dias-faltam/${g.slug}`
  );
  const stateRoutes = BRAZIL_STATES.map((s) => `/regional/${s.slug}`);
  const cityRoutes = BRAZIL_CITIES.map((c) => `/cidade/${c.slug}`);

  const monthRoutes: string[] = [];
  for (const year of [2026, 2027]) {
    for (const month of MONTH_SLUGS) {
      monthRoutes.push(`/feriados/${year}/${month}`);
    }
  }

  const blogSlugs = [
    "carnaval-2026-datas-blocos",
    "festa-junina-2026-tradicoes",
    "corpus-christi-feriado-nacional",
    "sete-de-setembro-historia",
    "consciencia-negra-2026",
    "reveillon-2026-2027",
    "natal-brasil-tradicoes",
    "aniversario-estado-feriados",
    "calendario-escolar-2026",
    "feriados-religiosos-vs-civis",
  ];
  const blogRoutes = blogSlugs.map((s) => `/blog/${s}`);

  return [
    ...staticPages,
    ...holidayRoutes,
    ...quandoRoutes,
    ...countdownRoutes,
    ...stateRoutes,
    ...cityRoutes,
    ...monthRoutes,
    ...blogRoutes,
  ];
}
