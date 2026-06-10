import { startOfYear, endOfYear, eachMonthOfInterval, isSameMonth } from "date-fns";
import { BrazilianHoliday } from "@/data/brazilian-holidays";
import { MonthMiniGrid } from "./MonthMiniGrid";
import { cn } from "@/lib/utils";

interface YearCalendarGridProps {
  currentDate: Date;
  holidays: BrazilianHoliday[];
  selectedHoliday: BrazilianHoliday | null;
  onHolidaySelect: (holiday: BrazilianHoliday) => void;
  onMonthSelect?: (month: Date) => void;
}

const LEGEND: Array<{ label: string; dotClass: string }> = [
  { label: "Federal", dotClass: "bg-holiday-federal" },
  { label: "Religioso", dotClass: "bg-holiday-religious" },
  { label: "Cultural", dotClass: "bg-holiday-cultural" },
  { label: "Comercial", dotClass: "bg-holiday-commercial" },
];

export function YearCalendarGrid({
  currentDate,
  holidays,
  selectedHoliday,
  onHolidaySelect,
  onMonthSelect,
}: YearCalendarGridProps) {
  const months = eachMonthOfInterval({
    start: startOfYear(currentDate),
    end: endOfYear(currentDate),
  });

  return (
    <div className="space-y-4">
      <div
        className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"
        aria-label="Legenda dos tipos de feriado"
      >
        {LEGEND.map((item) => (
          <span key={item.label} className="flex items-center gap-1.5">
            <span className={cn("w-2.5 h-2.5 rounded-full", item.dotClass)} aria-hidden="true" />
            {item.label}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 year-print-grid">
        {months.map((month) => (
          <MonthMiniGrid
            key={month.toISOString()}
            month={month}
            holidays={holidays.filter((h) =>
              isSameMonth(new Date(h.date + "T00:00:00"), month)
            )}
            selectedHoliday={selectedHoliday}
            onHolidaySelect={onHolidaySelect}
            onMonthSelect={onMonthSelect}
          />
        ))}
      </div>
    </div>
  );
}
