import {
  getCarnivalDate,
  getCorpusChristiDate,
  getGoodFridayDate,
  getEasterSunday,
} from "./holiday-utils";
import type { HolidayGuide } from "@/data/national-holiday-guides";

export function getHolidayDateForYear(guide: HolidayGuide, year: number): Date {
  if (guide.movable === "carnival") return getCarnivalDate(year);
  if (guide.movable === "good-friday") return getGoodFridayDate(year);
  if (guide.movable === "corpus-christi") return getCorpusChristiDate(year);
  if (guide.movable === "easter") return getEasterSunday(year);
  if (guide.fixedMonth && guide.fixedDay) {
    return new Date(year, guide.fixedMonth - 1, guide.fixedDay);
  }
  return new Date(year, 0, 1);
}

export function getHolidayDateString(guide: HolidayGuide, year: number): string {
  const d = getHolidayDateForYear(guide, year);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function getOccurrenceTable(
  guide: HolidayGuide,
  centerYear: number,
  past = 5,
  future = 5
): Array<{ year: number; date: string }> {
  const rows: Array<{ year: number; date: string }> = [];
  for (let y = centerYear - past; y <= centerYear + future; y++) {
    rows.push({ year: y, date: getHolidayDateString(guide, y) });
  }
  return rows;
}
