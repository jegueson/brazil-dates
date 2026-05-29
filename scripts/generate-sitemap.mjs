import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { getAllRoutes } from "./routes-config.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const siteUrl = process.env.VITE_SITE_URL || "https://calendario-feriados.com.br";

const routes = getAllRoutes();
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

const blogSlugs = routes
  .filter((r) => r.startsWith("/blog/") && r !== "/blog")
  .map((r) => r.replace("/blog/", ""));

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
writeFileSync(join(root, "scripts", "prerender-routes.json"), JSON.stringify(routes, null, 2));

console.log(`Generated sitemap with ${routes.length} URLs`);
