import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// --- National holidays (mirrors NATIONAL_HOLIDAY_GUIDES + the Easter computus
// in src/lib/holiday-utils.ts, so movable dates are never missing) ---

function getEasterSunday(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

function offsetFromEaster(year, days) {
  const date = getEasterSunday(year);
  date.setDate(date.getDate() + days);
  return date;
}

function toIso(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

const NATIONAL_HOLIDAYS = [
  { prefix: "ano-novo", name: "Ano Novo", type: "federal", month: 1, day: 1 },
  { prefix: "carnaval", name: "Carnaval", type: "cultural", easterOffset: -47 },
  { prefix: "sexta-feira-santa", name: "Sexta-feira Santa", type: "religious", easterOffset: -2 },
  { prefix: "tiradentes", name: "Tiradentes", type: "federal", month: 4, day: 21 },
  { prefix: "dia-trabalho", name: "Dia do Trabalho", type: "federal", month: 5, day: 1 },
  { prefix: "corpus-christi", name: "Corpus Christi", type: "religious", easterOffset: 60 },
  { prefix: "independencia", name: "Independência do Brasil", type: "federal", month: 9, day: 7 },
  { prefix: "nossa-senhora", name: "Nossa Senhora Aparecida", type: "religious", month: 10, day: 12 },
  { prefix: "finados", name: "Finados", type: "religious", month: 11, day: 2 },
  { prefix: "proclamacao-republica", name: "Proclamação da República", type: "federal", month: 11, day: 15 },
  { prefix: "consciencia-negra", name: "Dia da Consciência Negra", type: "federal", month: 11, day: 20 },
  { prefix: "natal", name: "Natal", type: "religious", month: 12, day: 25 },
];

function nationalDate(holiday, year) {
  if (typeof holiday.easterOffset === "number") {
    return toIso(offsetFromEaster(year, holiday.easterOffset));
  }
  return `${year}-${String(holiday.month).padStart(2, "0")}-${String(holiday.day).padStart(2, "0")}`;
}

// --- Extra commemorative dates parsed from the static TS dataset ---

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
  const nationals = NATIONAL_HOLIDAYS.map((h) => {
    const id = `${h.prefix}-${year}`;
    const date = nationalDate(h, year);
    const staticEntry = entries.find((e) => e.id === id);
    return staticEntry
      ? { ...staticEntry, date }
      : { id, date, name: h.name, type: h.type };
  });

  const nationalIds = new Set(nationals.map((h) => h.id));
  const extras = entries.filter(
    (e) => e.date.startsWith(String(year)) && !nationalIds.has(e.id)
  );

  const yearHolidays = [...nationals, ...extras].sort((a, b) =>
    a.date.localeCompare(b.date)
  );
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
