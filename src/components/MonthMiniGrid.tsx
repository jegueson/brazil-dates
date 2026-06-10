import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
} from "date-fns";
import { ptBR } from "date-fns/locale";
import { BrazilianHoliday } from "@/data/brazilian-holidays";
import { cn } from "@/lib/utils";

interface MonthMiniGridProps {
  month: Date;
  holidays: BrazilianHoliday[];
  selectedHoliday: BrazilianHoliday | null;
  onHolidaySelect: (holiday: BrazilianHoliday) => void;
  onMonthSelect?: (month: Date) => void;
}

const WEEK_DAYS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

// Static class strings so Tailwind doesn't purge them.
const TYPE_DAY_CLASSES: Record<BrazilianHoliday["type"], string> = {
  federal: "bg-holiday-federal/15 text-holiday-federal font-semibold",
  religious: "bg-holiday-religious/15 text-holiday-religious font-semibold",
  cultural: "bg-holiday-cultural/15 text-holiday-cultural font-semibold",
  commercial: "bg-holiday-commercial/15 text-holiday-commercial font-semibold",
};

const TYPE_DOT_CLASSES: Record<BrazilianHoliday["type"], string> = {
  federal: "bg-holiday-federal",
  religious: "bg-holiday-religious",
  cultural: "bg-holiday-cultural",
  commercial: "bg-holiday-commercial",
};

export function MonthMiniGrid({
  month,
  holidays,
  selectedHoliday,
  onHolidaySelect,
  onMonthSelect,
}: MonthMiniGridProps) {
  const monthStart = startOfMonth(month);
  const monthEnd = endOfMonth(monthStart);
  const days = eachDayOfInterval({
    start: startOfWeek(monthStart, { weekStartsOn: 0 }),
    end: endOfWeek(monthEnd, { weekStartsOn: 0 }),
  });

  // Parse as local time so the day doesn't shift in negative-UTC timezones (Brazil).
  const getHolidayForDate = (date: Date): BrazilianHoliday | undefined =>
    holidays.find((holiday) => isSameDay(new Date(holiday.date + "T00:00:00"), date));

  return (
    <div className="bg-card rounded-xl border shadow-sm p-3 sm:p-4 hover:shadow-md transition-shadow flex flex-col">
      <button
        type="button"
        onClick={() => onMonthSelect?.(monthStart)}
        className="text-base font-semibold capitalize text-center mb-2 rounded-md py-1 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        aria-label={`Ver ${format(month, "MMMM yyyy", { locale: ptBR })} em detalhe`}
      >
        {format(month, "MMMM", { locale: ptBR })}
      </button>

      <div className="grid grid-cols-7 text-center">
        {WEEK_DAYS.map((day) => (
          <div
            key={day}
            className="text-[10px] font-semibold text-muted-foreground pb-1"
            aria-hidden="true"
          >
            {day.charAt(0)}
          </div>
        ))}

        {days.map((date) => {
          const holiday = getHolidayForDate(date);
          const inMonth = isSameMonth(date, monthStart);
          const today = isToday(date);

          if (holiday && inMonth) {
            return (
              <button
                key={date.toISOString()}
                type="button"
                onClick={() => onHolidaySelect(holiday)}
                title={`${format(date, "d 'de' MMMM", { locale: ptBR })} — ${holiday.name}`}
                aria-label={`${format(date, "d 'de' MMMM", { locale: ptBR })}: ${holiday.name}`}
                className={cn(
                  "aspect-square min-h-7 flex items-center justify-center text-xs rounded-md transition-colors cursor-pointer hover:ring-1 hover:ring-primary/50",
                  TYPE_DAY_CLASSES[holiday.type],
                  today && "ring-2 ring-primary",
                  selectedHoliday?.id === holiday.id && "ring-2 ring-primary"
                )}
              >
                {format(date, "d")}
              </button>
            );
          }

          return (
            <div
              key={date.toISOString()}
              className={cn(
                "aspect-square min-h-7 flex items-center justify-center text-xs rounded-md",
                !inMonth && "text-muted-foreground/40",
                inMonth && date.getDay() === 0 && "text-destructive/70",
                today && "ring-2 ring-primary font-bold text-primary"
              )}
            >
              {format(date, "d")}
            </div>
          );
        })}
      </div>

      {holidays.length > 0 && (
        <ul className="mt-2 pt-2 border-t border-border/50 space-y-1">
          {holidays.map((holiday) => (
            <li key={holiday.id}>
              <button
                type="button"
                onClick={() => onHolidaySelect(holiday)}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors text-left w-full"
              >
                <span
                  className={cn(
                    "w-2 h-2 rounded-full flex-shrink-0",
                    TYPE_DOT_CLASSES[holiday.type]
                  )}
                  aria-hidden="true"
                />
                <span className="font-medium tabular-nums">
                  {format(new Date(holiday.date + "T00:00:00"), "d")}
                </span>
                <span className="truncate">{holiday.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
