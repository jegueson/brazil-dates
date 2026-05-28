/**
 * Prebuild: generates sitemap, API JSON, and prerender route list.
 * Run via: npx tsx scripts/generate-pages.ts
 */
import { execSync } from "child_process";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

console.log("Running generate-sitemap.mjs...");
execSync("node scripts/generate-sitemap.mjs", { cwd: root, stdio: "inherit" });

console.log("Running generate-api.mjs...");
execSync("node scripts/generate-api.mjs", { cwd: root, stdio: "inherit" });

console.log("generate-pages complete.");
