import { describe, it, expect } from "vitest";
import { NATIONAL_HOLIDAY_GUIDES } from "@/data/national-holiday-guides";
import { getHolidayDateString } from "@/lib/holiday-dates";
import { getAllHolidaysForYear, getAllHolidaysForMonth } from "@/lib/national-holidays";
import { getHolidaysByMonth, getHolidaysByYear } from "@/data/brazilian-holidays";

function guide(slug: string) {
  const g = NATIONAL_HOLIDAY_GUIDES.find((g) => g.slug === slug);
  if (!g) throw new Error(`Guide not found: ${slug}`);
  return g;
}

describe("2026 national holiday dates", () => {
  it.each([
    ["ano-novo", "2026-01-01"],
    ["carnaval", "2026-02-17"],
    ["sexta-santa", "2026-04-03"],
    ["tiradentes", "2026-04-21"],
    ["dia-do-trabalho", "2026-05-01"],
    ["corpus-christi", "2026-06-04"],
    ["independencia", "2026-09-07"],
    ["nossa-senhora-aparecida", "2026-10-12"],
    ["finados", "2026-11-02"],
    ["proclamacao-republica", "2026-11-15"],
    ["consciencia-negra", "2026-11-20"],
    ["natal", "2026-12-25"],
  ])("%s falls on %s", (slug, expected) => {
    expect(getHolidayDateString(guide(slug), 2026)).toBe(expected);
  });
});

describe("getAllHolidaysForYear", () => {
  it("includes all 12 national holidays for 2026", () => {
    const all = getAllHolidaysForYear(2026);
    for (const g of NATIONAL_HOLIDAY_GUIDES) {
      const date = getHolidayDateString(g, 2026);
      expect(
        all.some((h) => h.date === date),
        `${g.name} (${date}) missing from 2026`
      ).toBe(true);
    }
  });

  it("includes Corpus Christi on June 4, 2026", () => {
    const corpus = getAllHolidaysForYear(2026).find((h) => h.name === "Corpus Christi");
    expect(corpus?.date).toBe("2026-06-04");
    expect(corpus?.type).toBe("religious");
  });

  it("includes Sexta-feira Santa and Consciência Negra for 2026", () => {
    const all = getAllHolidaysForYear(2026);
    expect(all.some((h) => h.name === "Sexta-feira Santa" && h.date === "2026-04-03")).toBe(true);
    expect(all.some((h) => h.date === "2026-11-20")).toBe(true);
  });

  it("does not duplicate holidays present in the static dataset", () => {
    const all = getAllHolidaysForYear(2026);
    const natal = all.filter((h) => h.name === "Natal");
    expect(natal).toHaveLength(1);
  });

  it("is sorted by date", () => {
    const dates = getAllHolidaysForYear(2026).map((h) => h.date);
    expect(dates).toEqual([...dates].sort());
  });
});

describe("month getters (0-based month)", () => {
  it("returns Corpus Christi for June 2026", () => {
    const june = getAllHolidaysForMonth(2026, 5);
    expect(june.some((h) => h.name === "Corpus Christi")).toBe(true);
  });

  it("delegated data getters return the unified set", () => {
    expect(getHolidaysByYear(2026).some((h) => h.name === "Corpus Christi")).toBe(true);
    expect(getHolidaysByMonth(2026, 5).some((h) => h.name === "Corpus Christi")).toBe(true);
  });
});
