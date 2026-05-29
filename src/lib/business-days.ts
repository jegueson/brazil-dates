import { parseISO, isWeekend, eachDayOfInterval, format } from "date-fns";
import { getFederalHolidaysForYear } from "./holiday-utils";
import { regionalHolidays } from "@/data/regional-holidays";

export interface BusinessDaysOptions {
  start: Date;
  end: Date;
  state?: string;
  excludeNational?: boolean;
  excludeRegional?: boolean;
}

export function getHolidayDatesInRange(
  start: Date,
  end: Date,
  state?: string
): Set<string> {
  const dates = new Set<string>();
  const startYear = start.getFullYear();
  const endYear = end.getFullYear();

  for (let y = startYear; y <= endYear; y++) {
    for (const h of getFederalHolidaysForYear(y)) {
      const d = parseISO(h.date);
      if (d >= start && d <= end) {
        dates.add(format(d, "yyyy-MM-dd"));
      }
    }
  }

  if (state) {
    for (const h of regionalHolidays) {
      if (h.state !== state) continue;
      const d = parseISO(h.date);
      if (d >= start && d <= end) {
        dates.add(format(d, "yyyy-MM-dd"));
      }
    }
  }

  return dates;
}

export function countBusinessDays(options: BusinessDaysOptions): number {
  const { start, end, state, excludeNational = true, excludeRegional = true } =
    options;
  if (end < start) return 0;

  const holidaySet =
    excludeNational || excludeRegional
      ? getHolidayDatesInRange(
          start,
          end,
          excludeRegional ? state : undefined
        )
      : new Set<string>();

  const days = eachDayOfInterval({ start, end });
  return days.filter((d) => {
    if (isWeekend(d)) return false;
    const key = format(d, "yyyy-MM-dd");
    if (excludeNational && holidaySet.has(key)) return false;
    return true;
  }).length;
}

export function countCalendarDays(start: Date, end: Date): number {
  if (end < start) return 0;
  return eachDayOfInterval({ start, end }).length;
}

export function addBusinessDays(
  start: Date,
  businessDaysToAdd: number,
  state?: string
): Date {
  const current = new Date(start);
  let added = 0;
  const maxIterations = businessDaysToAdd * 3 + 365;

  for (let i = 0; i < maxIterations && added < businessDaysToAdd; i++) {
    current.setDate(current.getDate() + 1);
    if (isWeekend(current)) continue;
    const key = format(current, "yyyy-MM-dd");
    const holidays = getHolidayDatesInRange(current, current, state);
    if (holidays.has(key)) continue;
    added++;
  }
  return current;
}
