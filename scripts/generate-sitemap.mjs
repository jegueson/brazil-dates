import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const siteUrl = process.env.VITE_SITE_URL || "https://calendario-feriados.com.br";

// Routes mirrored from src/lib/routes.ts (keep in sync)
const staticRoutes = [
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
  "/widget-embed",
  "/imprimir",
  "/blog",
];

const holidaySlugs = [
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

const stateSlugs = [
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

const citySlugs = [
  "sao-paulo",
  "rio-de-janeiro",
  "brasilia",
  "salvador",
  "fortaleza",
  "belo-horizonte",
  "manaus",
  "curitiba",
  "recife",
  "goiania",
  "belem",
  "porto-alegre",
  "guarulhos",
  "campinas",
  "sao-luis",
  "sao-goncalo",
  "maceio",
  "duque-de-caxias",
  "natal",
  "teresina",
  "campo-grande",
  "sao-bernardo-do-campo",
  "nova-iguacu",
  "joao-pessoa",
  "santo-andre",
  "osasco",
  "jaboatao-dos-guararapes",
  "sao-jose-dos-campos",
  "ribeirao-preto",
  "uberlandia",
  "sorocaba",
  "contagem",
  "aracaju",
  "feira-de-santana",
  "cuiaba",
  "joinville",
  "aparecida-de-goiania",
  "londrina",
  "juiz-de-fora",
  "ananindeua",
  "porto-velho",
  "serra",
  "niteroi",
  "campos-dos-goytacazes",
  "florianopolis",
  "santos",
  "vitoria",
  "blumenau",
];

const months = [
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

const routes = [
  ...staticRoutes,
  ...holidaySlugs.map((s) => `/feriado/${s}`),
  ...holidaySlugs.map((s) => `/quando-e/${s}`),
  ...holidaySlugs.map((s) => `/quantos-dias-faltam/${s}`),
  ...stateSlugs.map((s) => `/regional/${s}`),
  ...citySlugs.map((s) => `/cidade/${s}`),
  ...[2026, 2027].flatMap((y) => months.map((m) => `/feriados/${y}/${m}`)),
  ...blogSlugs.map((s) => `/blog/${s}`),
];

const today = new Date().toISOString().slice(0, 10);
const urls = routes
  .map(
    (path) => `  <url>
    <loc>${siteUrl}${path === "/" ? "" : path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === "/" ? "1.0" : path.startsWith("/feriado") ? "0.9" : "0.7"}</priority>
  </url>`
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

mkdirSync(join(root, "public"), { recursive: true });
writeFileSync(join(root, "public", "sitemap.xml"), sitemap);

// RSS feed
const rssItems = blogSlugs
  .map(
    (slug) => `    <item>
      <title>${slug}</title>
      <link>${siteUrl}/blog/${slug}</link>
      <guid>${siteUrl}/blog/${slug}</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>`
  )
  .join("\n");

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Calendário Brasileiro — Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Feriados e cultura brasileira</description>
    <language>pt-BR</language>
${rssItems}
  </channel>
</rss>`;

writeFileSync(join(root, "public", "feed.xml"), rss);

// routes list for prerender
writeFileSync(join(root, "scripts", "prerender-routes.json"), JSON.stringify(routes, null, 2));

console.log(`Generated sitemap with ${routes.length} URLs`);
