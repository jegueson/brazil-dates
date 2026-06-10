import { useEffect, useState } from "react";
import { 
  format, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval, 
  isSameMonth, 
  isSameDay,
  addMonths,
  subMonths,
  isToday,
  addYears,
  subYears
} from "date-fns";
import { ptBR } from "date-fns/locale";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HolidayCard } from "./HolidayCard";
import { YearView } from "./YearView";
import { SocialShare } from "./SocialShare";
import { PrintCalendar } from "./PrintCalendar";
import { BrazilianHoliday, getHolidaysByMonth, getHolidaysByYear } from "@/data/brazilian-holidays";
import { cn } from "@/lib/utils";

export type CalendarView = 'month' | 'list' | 'year';

interface CalendarProps {
  selectedHoliday: BrazilianHoliday | null;
  onHolidaySelect: (holiday: BrazilianHoliday) => void;
  view: CalendarView;
  onViewChange: (view: CalendarView) => void;
  currentDate?: Date;
  onDateChange?: (date: Date) => void;
}

const VIEW_OPTIONS: Array<{ value: CalendarView; label: string }> = [
  { value: 'year', label: 'Ano completo' },
  { value: 'month', label: 'Mês a mês' },
  { value: 'list', label: 'Lista' },
];

function ViewToggle({ view, onViewChange }: { view: CalendarView; onViewChange: (view: CalendarView) => void }) {
  return (
    <div role="group" aria-label="Modo de visualização" className="inline-flex rounded-lg border bg-card p-1 gap-1">
      {VIEW_OPTIONS.map((option) => (
        <Button
          key={option.value}
          size="sm"
          variant={view === option.value ? 'default' : 'ghost'}
          aria-pressed={view === option.value}
          onClick={() => onViewChange(option.value)}
          className="text-xs sm:text-sm"
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}

export function Calendar({
  selectedHoliday,
  onHolidaySelect,
  view,
  onViewChange,
  currentDate: controlledDate,
  onDateChange,
}: CalendarProps) {
  const [internalDate, setInternalDate] = useState(new Date());
  const currentDate = controlledDate ?? internalDate;
  const setCurrentDate = (date: Date) => {
    setInternalDate(date);
    onDateChange?.(date);
  };

  const [holidays, setHolidays] = useState<BrazilianHoliday[]>([]);

  useEffect(() => {
    if (view === 'year') {
      const yearHolidays = getHolidaysByYear(currentDate.getFullYear());
      setHolidays(yearHolidays);
    } else {
      const monthHolidays = getHolidaysByMonth(
        currentDate.getFullYear(), 
        currentDate.getMonth()
      );
      setHolidays(monthHolidays);
    }
  }, [currentDate, view]);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const dateRange = eachDayOfInterval({ start: startDate, end: endDate });
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  
  const holidayTypeConfig = {
    federal: {
      color: 'holiday-federal',
      icon: '🇧🇷',
      label: 'Federal'
    },
    religious: {
      color: 'holiday-religious', 
      icon: '⛪',
      label: 'Religioso'
    },
    cultural: {
      color: 'holiday-cultural',
      icon: '🎉',
      label: 'Cultural'
    },
    commercial: {
      color: 'holiday-commercial',
      icon: '🛍️',
      label: 'Comercial'
    }
  };

  // Parse as local time so the day doesn't shift in negative-UTC timezones (Brazil).
  const getHolidayForDate = (date: Date): BrazilianHoliday | undefined => {
    return holidays.find(holiday => 
      isSameDay(new Date(holiday.date + 'T00:00:00'), date)
    );
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(direction === 'prev' ? subMonths(currentDate, 1) : addMonths(currentDate, 1));
  };

  const navigateYear = (direction: 'prev' | 'next') => {
    setCurrentDate(direction === 'prev' ? subYears(currentDate, 1) : addYears(currentDate, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const handleMonthSelect = (month: Date) => {
    setCurrentDate(month);
    onViewChange('month');
  };

  if (view === 'year') {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigateYear('prev')}
              aria-label="Ano anterior"
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-holiday-cultural bg-clip-text text-transparent">
              {format(currentDate, 'yyyy', { locale: ptBR })}
            </h2>
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigateYear('next')}
              aria-label="Próximo ano"
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            <ViewToggle view={view} onViewChange={onViewChange} />
            <Button variant="outline" size="sm" onClick={goToToday}>
              <CalendarIcon className="w-4 h-4 mr-2" />
              Hoje
            </Button>
            <SocialShare title={`Feriados Brasileiros - ${format(currentDate, 'yyyy')}`} />
            <PrintCalendar currentDate={currentDate} holidays={holidays} view="year" />
          </div>
        </div>

        <YearView 
          currentDate={currentDate}
          holidays={holidays}
          selectedHoliday={selectedHoliday}
          onHolidaySelect={onHolidaySelect}
          onMonthSelect={handleMonthSelect}
        />
      </div>
    );
  }

  if (view === 'list') {
    return (
      <div className="space-y-4">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigateMonth('prev')}
              aria-label="Mês anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <h2 className="text-2xl font-bold capitalize">
              {format(currentDate, 'MMMM yyyy', { locale: ptBR })}
            </h2>
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigateMonth('next')}
              aria-label="Próximo mês"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            <ViewToggle view={view} onViewChange={onViewChange} />
            <Button variant="outline" size="sm" onClick={goToToday}>
              Hoje
            </Button>
            <SocialShare title={`Feriados - ${format(currentDate, 'MMMM yyyy', { locale: ptBR })}`} />
            <PrintCalendar currentDate={currentDate} holidays={holidays} view="month" />
          </div>
        </div>

        {/* Holidays List */}
        <div className="space-y-4">
          {holidays.length > 0 ? (
            holidays.map(holiday => (
              <HolidayCard
                key={holiday.id}
                holiday={holiday}
                onClick={() => onHolidaySelect(holiday)}
                isSelected={selectedHoliday?.id === holiday.id}
                view="list"
              />
            ))
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <CalendarIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Nenhum feriado neste mês</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigateMonth('prev')}
            aria-label="Mês anterior"
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <h2 className="text-3xl font-bold capitalize bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {format(currentDate, 'MMMM yyyy', { locale: ptBR })}
          </h2>
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigateMonth('next')}
            aria-label="Próximo mês"
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="flex flex-wrap items-center gap-2">
          <ViewToggle view={view} onViewChange={onViewChange} />
          <Button variant="outline" size="sm" onClick={goToToday}>
            <CalendarIcon className="w-4 h-4 mr-2" />
            Hoje
          </Button>
          <SocialShare title={`Feriados - ${format(currentDate, 'MMMM yyyy', { locale: ptBR })}`} />
          <PrintCalendar currentDate={currentDate} holidays={holidays} view="month" />
        </div>
      </div>

      {/* Month Stats */}
      {holidays.length > 0 && (
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-sm">
            {holidays.length} feriado{holidays.length !== 1 ? 's' : ''} neste mês
          </Badge>
        </div>
      )}

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-px sm:gap-1 bg-card rounded-xl p-2 sm:p-4 shadow-lg border overflow-hidden">
        {/* Week days header */}
        {weekDays.map(day => (
          <div 
            key={day}
            className="p-1 sm:p-3 text-center text-xs sm:text-sm font-semibold text-muted-foreground border-b border-border/50"
          >
            <span className="hidden sm:inline">{day}</span>
            <span className="sm:hidden">{day.charAt(0)}</span>
          </div>
        ))}
        
        {/* Calendar days */}
        {dateRange.map(date => {
          const holiday = getHolidayForDate(date);
          const isCurrentMonth = isSameMonth(date, currentDate);
          const isTodayDate = isToday(date);
          
          return (
            <div
              key={date.toISOString()}
              className={cn(
                "min-h-[80px] sm:min-h-[120px] p-1 sm:p-2 border-r border-b border-border/20 transition-all duration-200 relative",
                !isCurrentMonth && "bg-muted/30 text-muted-foreground",
                isTodayDate && "bg-primary/10 border-primary/30",
                "hover:bg-muted/50"
              )}
            >
              <div className="flex items-center justify-between mb-1 sm:mb-2">
                <span className={cn(
                  "text-xs sm:text-sm font-medium",
                  isTodayDate && "bg-primary text-primary-foreground w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs"
                )}>
                  {format(date, 'd')}
                </span>
              </div>
              
              {holiday && (
                <div className="absolute inset-1 sm:inset-2 top-6 sm:top-8">
                  <div
                    onClick={() => onHolidaySelect(holiday)}
                    className={cn(
                      "group cursor-pointer p-1 sm:p-2 rounded text-xs sm:text-sm border transition-all duration-200 hover:shadow-md animate-fade-in",
                      `hover:border-${holidayTypeConfig[holiday.type].color}`,
                      selectedHoliday?.id === holiday.id && `border-${holidayTypeConfig[holiday.type].color} shadow-lg`,
                      "bg-gradient-to-br from-card to-card/80 h-full overflow-hidden"
                    )}
                  >
                    <div className="flex items-start gap-1">
                      <span className="text-xs sm:text-sm flex-shrink-0">{holidayTypeConfig[holiday.type].icon}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-xs sm:text-sm leading-tight text-card-foreground group-hover:text-primary transition-colors line-clamp-2 sm:line-clamp-3">
                          {holiday.name}
                        </h3>
                        <div className="hidden sm:block mt-1">
                          <div 
                            className={cn(
                              "text-xs px-1 py-0.5 rounded border inline-block",
                              `border-${holidayTypeConfig[holiday.type].color}/20 text-${holidayTypeConfig[holiday.type].color}`
                            )}
                          >
                            {holidayTypeConfig[holiday.type].label}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
