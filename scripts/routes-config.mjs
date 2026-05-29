import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const HOLIDAY_SLUGS = [
  "ano-novo",
  "carnaval",
  "sexta-santa",
  "tiradentes",
  "dia-do-trabalho",
  "corpus-christi",
  "independencia",
  "nossa-senhora-aparecida",
  "finados",
  "proclamacao-republica",
  "consciencia-negra",
  "natal",
];

const STATE_SLUGS = [
  "acre",
  "alagoas",
  "amapa",
  "amazonas",
  "bahia",
  "ceara",
  "distrito-federal",
  "espirito-santo",
  "goias",
  "maranhao",
  "mato-grosso",
  "mato-grosso-do-sul",
  "minas-gerais",
  "para",
  "paraiba",
  "parana",
  "pernambuco",
  "piaui",
  "rio-de-janeiro",
  "rio-grande-do-norte",
  "rio-grande-do-sul",
  "rondonia",
  "roraima",
  "santa-catarina",
  "sao-paulo",
  "sergipe",
  "tocantins",
];

const REGION_SLUGS = ["norte", "nordeste", "centro-oeste", "sudeste", "sul"];

const MONTH_SLUGS = [
  "janeiro",
  "fevereiro",
  "marco",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

const CALENDAR_YEARS = [2025, 2026, 2027, 2028];
const WHEN_YEARS = [2025, 2026, 2027, 2028];
const COMPARE_YEARS = [2025, 2026, 2027, 2028];

function extractFromFile(relativePath, pattern) {
  const content = readFileSync(join(root, relativePath), "utf8");
  return [...content.matchAll(pattern)].map((m) => m[1]);
}

function extractCitySlugs() {
  return extractFromFile("src/data/brazil-cities.ts", /slug: "([^"]+)"/g);
}

function extractRegionalHolidayIds() {
  const main = extractFromFile("src/data/regional-holidays.ts", /id: '([^']+)'/g);
  const extra = extractFromFile("src/data/regional-holidays-extra.ts", /id: '([^']+)'/g);
  return [...main, ...extra];
}

function extractBlogSlugs() {
  return extractFromFile("src/data/blog-posts.ts", /slug: "([^"]+)"/g);
}

/** All static routes for sitemap, RSS, and prerender. */
export function getAllRoutes() {
  const citySlugs = extractCitySlugs();
  const regionalIds = extractRegionalHolidayIds();
  const blogSlugs = extractBlogSlugs();

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

  const holidayRoutes = HOLIDAY_SLUGS.map((s) => `/feriado/${s}`);
  const quandoRoutes = HOLIDAY_SLUGS.map((s) => `/quando-e/${s}`);
  const quandoYearRoutes = HOLIDAY_SLUGS.flatMap((s) =>
    WHEN_YEARS.map((y) => `/quando-e/${s}/${y}`)
  );
  const countdownRoutes = HOLIDAY_SLUGS.map((s) => `/quantos-dias-faltam/${s}`);
  const countdownYearRoutes = HOLIDAY_SLUGS.flatMap((s) =>
    WHEN_YEARS.map((y) => `/quantos-dias-faltam/${s}/${y}`)
  );
  const stateRoutes = STATE_SLUGS.map((s) => `/regional/${s}`);
  const regionRoutes = REGION_SLUGS.map((s) => `/regiao/${s}`);
  const cityRoutes = citySlugs.map((s) => `/cidade/${s}`);
  const regionalHolidayRoutes = regionalIds.map((id) => `/feriado-regional/${id}`);
  const monthRoutes = [2025, 2026, 2027, 2028].flatMap((y) =>
    MONTH_SLUGS.map((m) => `/feriados/${y}/${m}`)
  );
  const stateCityHubRoutes = STATE_SLUGS.map((s) => `/regional/${s}/cidades`);
  const blogRoutes = blogSlugs.map((s) => `/blog/${s}`);

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
