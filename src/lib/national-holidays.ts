import { brazilianHolidays, BrazilianHoliday } from "@/data/brazilian-holidays";
import { NATIONAL_HOLIDAY_GUIDES } from "@/data/national-holiday-guides";
import { getHolidayDateString } from "./holiday-dates";

/**
 * Unified holiday resolver.
 *
 * The 12 national holidays are always derived from NATIONAL_HOLIDAY_GUIDES with
 * dates computed via the Easter algorithm (holiday-dates.ts), so movable dates
 * like Corpus Christi are never missing. Rich metadata (descriptions, traditions)
 * is merged in from the static brazilianHolidays dataset when available.
 */

/** Maps guide slugs to the id prefixes used in the static brazilian-holidays dataset. */
const GUIDE_STATIC_PREFIX: Record<string, string> = {
  "ano-novo": "ano-novo",
  carnaval: "carnaval",
  "sexta-santa": "sexta-feira-santa",
  tiradentes: "tiradentes",
  "dia-do-trabalho": "dia-trabalho",
  "corpus-christi": "corpus-christi",
  independencia: "independencia",
  "nossa-senhora-aparecida": "nossa-senhora",
  finados: "finados",
  "proclamacao-republica": "proclamacao-republica",
  "consciencia-negra": "consciencia-negra",
  natal: "natal",
};

const yearCache = new Map<number, BrazilianHoliday[]>();

/**
 * All holidays for a year: the 12 computed national holidays plus the
 * commemorative/cultural extras present in the static dataset, sorted by date.
 */
export function getAllHolidaysForYear(year: number): BrazilianHoliday[] {
  const cached = yearCache.get(year);
  if (cached) return cached;

  const nationals: BrazilianHoliday[] = NATIONAL_HOLIDAY_GUIDES.map((guide) => {
    const prefix = GUIDE_STATIC_PREFIX[guide.slug] ?? guide.slug;
    const date = getHolidayDateString(guide, year);

    const exact = brazilianHolidays.find((h) => h.id === `${prefix}-${year}`);
    if (exact) {
      // Computed date wins over the static one (fixes wrong movable dates).
      return exact.date === date ? exact : { ...exact, date };
    }

    // Year entry missing in the static dataset: reuse the metadata of the same
    // holiday from another year, if any.
    const template = brazilianHolidays.find((h) => h.id.startsWith(`${prefix}-`));
    if (template) {
      return { ...template, id: `${prefix}-${year}`, date };
    }

    // No static metadata at all (e.g. Corpus Christi): build from the guide.
    return {
      id: `${prefix}-${year}`,
      date,
      name: guide.name,
      type: guide.type,
      description: guide.summary[0] ?? guide.name,
      traditions: guide.musicAndSymbols,
      significance: guide.culturalSignificance,
    };
  });

  const nationalIds = new Set(nationals.map((h) => h.id));
  const extras = brazilianHolidays.filter(
    (h) => h.date.startsWith(`${year}-`) && !nationalIds.has(h.id)
  );

  const result = [...nationals, ...extras].sort((a, b) =>
    a.date.localeCompare(b.date)
  );
  yearCache.set(year, result);
  return result;
}

/** All holidays for a month (0-based, matching Date.getMonth()). */
export function getAllHolidaysForMonth(year: number, month: number): BrazilianHoliday[] {
  const monthStr = String(month + 1).padStart(2, "0");
  return getAllHolidaysForYear(year).filter((h) =>
    h.date.startsWith(`${year}-${monthStr}-`)
  );
}
