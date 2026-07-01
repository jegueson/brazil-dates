import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { getAllRoutes } from "./routes-config.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const siteUrl = process.env.VITE_SITE_URL || "https://calendario-feriados.com.br";

const today = new Date().toISOString().slice(0, 10);
const routes = getAllRoutes();

// Categorize routes for better sitemap organization
function categorizeRoutes(allRoutes) {
  const categories = {
    holidays: [],
    states: [],
    cities: [],
    blog: [],
    tools: [],
    months: [],
    regional: [],
    static: []
  };

  allRoutes.forEach(path => {
    if (path.startsWith("/feriado/") || path.startsWith("/quando-e/") || path.startsWith("/quantos-dias-faltam/")) {
      categories.holidays.push(path);
    } else if (path.startsWith("/regional/") && !path.includes("/cidades")) {
      categories.states.push(path);
    } else if (path.startsWith("/cidade/")) {
      categories.cities.push(path);
    } else if (path.startsWith("/blog/")) {
      categories.blog.push(path);
    } else if (path.includes("calculadora") || path.includes("planejador") || path.includes("widget") || path.includes("exportar") || path.includes("imprimir")) {
      categories.tools.push(path);
    } else if (/\/feriados\/\d{4}\/(janeiro|fevereiro|marco|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/.test(path)) {
      categories.months.push(path);
    } else if (path.startsWith("/feriado-regional/") || path.startsWith("/regiao/") || path.startsWith("/regional/") && path.includes("/cidades")) {
      categories.regional.push(path);
    } else {
      categories.static.push(path);
    }
  });

  return categories;
}

// Get priority based on path and current month for seasonal relevance
function getPriority(path) {
  const currentMonth = new Date().getMonth() + 1; // 1-12
  
  if (path === "/") return "1.0";
  
  // High priority for current seasonal content
  if (path.includes("/carnaval") && currentMonth >= 1 && currentMonth <= 3) return "1.0";
  if (path.includes("/festa-junina") && currentMonth >= 5 && currentMonth <= 6) return "1.0";
  if (path.includes("/natal") && currentMonth >= 11 && currentMonth <= 12) return "1.0";
  
  // Holiday pages
  if (path.startsWith("/feriado/") && !path.match(/\/\d{4}$/)) return "0.9";
  
  // Year-specific holiday pages
  if (path.startsWith("/feriado/") || path.startsWith("/quando-e/") || path.startsWith("/quantos-dias-faltam/")) {
    return "0.8";
  }
  
  // Regional and city pages
  if (path.startsWith("/regional/") || path.startsWith("/cidade/") || path.startsWith("/feriado-regional/")) {
    return "0.8";
  }
  
  // Tools and calculators
  if (path.includes("calculadora") || path.includes("planejador")) return "0.8";
  
  // Blog posts
  if (path.startsWith("/blog/") && path !== "/blog") return "0.7";
  
  // Monthly views
  if (path.match(/\/feriados\/\d{4}\//)) return "0.9";
  
  // Year pages
  if (path.match(/\/feriados\/\d{4}$/)) return "0.9";
  
  return "0.7";
}

// Get change frequency based on content type
function getChangeFreq(path) {
  if (path === "/" || path.startsWith("/feriado/") || path.startsWith("/regional/")) {
    return "weekly";
  }
  if (path.startsWith("/blog/")) {
    return "monthly";
  }
  return "weekly";
}

// Generate a single sitemap
function generateSitemap(routes, filename) {
  const urls = routes
    .map(
      (path) => `  <url>
    <loc>${siteUrl}${path === "/" ? "" : path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangeFreq(path)}</changefreq>
    <priority>${getPriority(path)}</priority>
  </url>`
    )
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;

  writeFileSync(join(root, "public", filename), sitemap);
  console.log(`Generated ${filename} with ${routes.length} URLs`);
}

// Generate sitemap index
function generateSitemapIndex(sitemaps) {
  const sitemapEntries = sitemaps
    .map(
      (filename) => `  <sitemap>
    <loc>${siteUrl}/${filename}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`
    )
    .join("\n");

  const index = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</sitemapindex>`;

  writeFileSync(join(root, "public", "sitemap.xml"), index);
  console.log(`Generated sitemap index with ${sitemaps.length} sitemaps`);
}

// Main execution
mkdirSync(join(root, "public"), { recursive: true });

const categorized = categorizeRoutes(routes);
const sitemapFiles = [];

// Generate category-specific sitemaps
if (categorized.holidays.length > 0) {
  generateSitemap(categorized.holidays, "sitemap-holidays.xml");
  sitemapFiles.push("sitemap-holidays.xml");
}

if (categorized.states.length > 0) {
  generateSitemap(categorized.states, "sitemap-states.xml");
  sitemapFiles.push("sitemap-states.xml");
}

if (categorized.cities.length > 0) {
  generateSitemap(categorized.cities, "sitemap-cities.xml");
  sitemapFiles.push("sitemap-cities.xml");
}

if (categorized.blog.length > 0) {
  generateSitemap(categorized.blog, "sitemap-blog.xml");
  sitemapFiles.push("sitemap-blog.xml");
}

if (categorized.tools.length > 0) {
  generateSitemap(categorized.tools, "sitemap-tools.xml");
  sitemapFiles.push("sitemap-tools.xml");
}

if (categorized.months.length > 0) {
  generateSitemap(categorized.months, "sitemap-months.xml");
  sitemapFiles.push("sitemap-months.xml");
}

if (categorized.regional.length > 0) {
  generateSitemap(categorized.regional, "sitemap-regional.xml");
  sitemapFiles.push("sitemap-regional.xml");
}

if (categorized.static.length > 0) {
  generateSitemap(categorized.static, "sitemap-static.xml");
  sitemapFiles.push("sitemap-static.xml");
}

// Generate sitemap index
generateSitemapIndex(sitemapFiles);

// Generate RSS feed (enhanced)
const blogSlugs = categorized.blog.map(r => r.replace("/blog/", ""));

const rssItems = blogSlugs
  .map(
    (slug) => `    <item>
      <title>${slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}</title>
      <link>${siteUrl}/blog/${slug}</link>
      <guid>${siteUrl}/blog/${slug}</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <description>Artigo sobre ${slug.replace(/-/g, " ")}</description>
    </item>`
  )
  .join("\n");

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Calendário Brasileiro — Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Feriados e cultura brasileira</description>
    <language>pt-BR</language>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
${rssItems}
  </channel>
</rss>`;

writeFileSync(join(root, "public", "feed.xml"), rss);
writeFileSync(join(root, "scripts", "prerender-routes.json"), JSON.stringify(routes, null, 2));

console.log(`\nTotal URLs: ${routes.length}`);
console.log(`Generated ${sitemapFiles.length} category-specific sitemaps`);
