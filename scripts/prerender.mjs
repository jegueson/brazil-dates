import { execSync, spawn } from "child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { chromium } from "playwright";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const distDir = join(root, "dist");
const routesPath = join(__dirname, "prerender-routes.json");

const PORT = 4173;
const BASE = `http://127.0.0.1:${PORT}`;

async function waitForServer(url, timeoutMs = 90000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      /* retry */
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("Preview server did not start in time");
}

function ensureChromium() {
  let executablePath;
  try {
    executablePath = chromium.executablePath();
  } catch {
    executablePath = null;
  }
  if (executablePath && existsSync(executablePath)) return;

  console.log("Playwright Chromium not found — installing for prerender...");
  execSync("npx playwright install chromium", { cwd: root, stdio: "inherit" });
}

async function main() {
  if (!readFileSync(join(root, "package.json"), "utf8")) {
    throw new Error("Invalid project root");
  }

  ensureChromium();

  let routes;
  try {
    routes = JSON.parse(readFileSync(routesPath, "utf8"));
  } catch {
    console.warn("prerender-routes.json missing — run prebuild first. Skipping prerender.");
    return;
  }

  const preview = spawn(
    "npx",
    ["vite", "preview", "--port", String(PORT), "--host", "127.0.0.1"],
    { cwd: root, stdio: "pipe", shell: true }
  );

  try {
    await waitForServer(BASE);
    const browser = await chromium.launch({
      args: process.env.VERCEL
        ? ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"]
        : [],
    });
    const page = await browser.newPage();

    for (const route of routes) {
      const url = route === "/" ? BASE : `${BASE}${route}`;
      const outPath =
        route === "/" ? join(distDir, "index.html") : join(distDir, route, "index.html");

      await page.goto(url, { waitUntil: "networkidle", timeout: 90000 });
      await page.waitForTimeout(800);
      const html = await page.content();

      mkdirSync(dirname(outPath), { recursive: true });
      writeFileSync(outPath, html);
      console.log(`Prerendered ${route}`);
    }

    await browser.close();
    console.log(`Prerender complete: ${routes.length} routes`);
  } finally {
    preview.kill("SIGTERM");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
