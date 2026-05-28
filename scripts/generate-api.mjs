import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// Parse federal holidays from TS source (simple regex extraction for build script)
const holidaysPath = join(root, "src/data/brazilian-holidays.ts");
const source = readFileSync(holidaysPath, "utf8");

const entries = [];
const blockRegex =
  /id:\s*'([^']+)',\s*date:\s*'(\d{4}-\d{2}-\d{2})',\s*name:\s*'([^']+)',\s*type:\s*'([^']+)'/g;
let m;
while ((m = blockRegex.exec(source)) !== null) {
  entries.push({
    id: m[1],
    date: m[2],
    name: m[3],
    type: m[4],
  });
}

for (const year of [2025, 2026, 2027, 2028]) {
  const yearHolidays = entries.filter((e) => e.date.startsWith(String(year)));
  const federal = yearHolidays.filter((e) => e.type === "federal");
  const payload = {
    year,
    generatedAt: new Date().toISOString(),
    source: "https://calendario-feriados.com.br",
    license: "CC BY 4.0 — attribution required",
    federal,
    all: yearHolidays,
  };
  const dir = join(root, "public", "api", "feriados");
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, `${year}.json`), JSON.stringify(payload, null, 2));
  console.log(`Wrote api/feriados/${year}.json (${yearHolidays.length} holidays)`);
}
