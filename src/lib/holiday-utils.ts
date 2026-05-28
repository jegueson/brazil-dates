import { brazilianHolidays, BrazilianHoliday } from "@/data/brazilian-holidays";
import { differenceInCalendarDays, format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

/** Computes Easter Sunday (Gregorian) for a given year — used for movable holidays. */
export function getEasterSunday(year: number): Date {
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

export function getCarnivalDate(year: number): Date {
  const easter = getEasterSunday(year);
  const carnival = new Date(easter);
  carnival.setDate(easter.getDate() - 47);
  return carnival;
}

export function getCorpusChristiDate(year: number): Date {
  const easter = getEasterSunday(year);
  const corpus = new Date(easter);
  corpus.setDate(easter.getDate() + 60);
  return corpus;
}

export function getGoodFridayDate(year: number): Date {
  const easter = getEasterSunday(year);
  const friday = new Date(easter);
  friday.setDate(easter.getDate() - 2);
  return friday;
}

export function formatDateBR(date: Date | string): string {
  const d = typeof date === "string" ? parseISO(date) : date;
  return format(d, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
}

export function formatWeekdayBR(date: Date | string): string {
  const d = typeof date === "string" ? parseISO(date) : date;
  return format(d, "EEEE", { locale: ptBR });
}

export function daysUntil(date: Date | string): number {
  const d = typeof date === "string" ? parseISO(date) : date;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(d);
  target.setHours(0, 0, 0, 0);
  return differenceInCalendarDays(target, today);
}

export function getHolidaysForYear(year: number): BrazilianHoliday[] {
  return brazilianHolidays.filter((h) => h.date.startsWith(String(year)));
}

export function getFederalHolidaysForYear(year: number): BrazilianHoliday[] {
  return getHolidaysForYear(year).filter((h) => h.type === "federal");
}

export function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6;
}

export function getBridgeOpportunities(
  year: number
): Array<{ holiday: BrazilianHoliday; bridgeDays: string[]; tip: string }> {
  const federal = getFederalHolidaysForYear(year);
  const results: Array<{
    holiday: BrazilianHoliday;
    bridgeDays: string[];
    tip: string;
  }> = [];

  for (const h of federal) {
    const d = parseISO(h.date);
    const dow = d.getDay();
    if (dow === 2) {
      results.push({
        holiday: h,
        bridgeDays: ["Segunda-feira anterior"],
        tip: `Emendar a segunda anterior ao ${h.name} para um feriado prolongado de 4 dias.`,
      });
    } else if (dow === 4) {
      results.push({
        holiday: h,
        bridgeDays: ["Sexta-feira seguinte"],
        tip: `Emendar a sexta seguinte ao ${h.name} para um feriado prolongado de 4 dias.`,
      });
    }
  }
  return results;
}

export const MONTH_SLUGS = [
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
] as const;

export const MONTH_NAMES: Record<(typeof MONTH_SLUGS)[number], string> = {
  janeiro: "Janeiro",
  fevereiro: "Fevereiro",
  marco: "Março",
  abril: "Abril",
  maio: "Maio",
  junho: "Junho",
  julho: "Julho",
  agosto: "Agosto",
  setembro: "Setembro",
  outubro: "Outubro",
  novembro: "Novembro",
  dezembro: "Dezembro",
};

export function monthSlugToNumber(slug: string): number | null {
  const idx = MONTH_SLUGS.indexOf(slug as (typeof MONTH_SLUGS)[number]);
  return idx >= 0 ? idx + 1 : null;
}
