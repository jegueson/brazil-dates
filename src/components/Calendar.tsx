import { useState, useEffect } from "react";
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
  subYears,
  startOfYear,
  endOfYear
} from "date-fns";
import { ptBR } from "date-fns/locale";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Grid3X3, List, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HolidayCard } from "./HolidayCard";
import { YearView } from "./YearView";
import { SocialShare } from "./SocialShare";
import { PrintCalendar } from "./PrintCalendar";
import { BrazilianHoliday, getHolidaysByMonth, getHolidaysByYear } from "@/data/brazilian-holidays";
import { cn } from "@/lib/utils";

interface CalendarProps {
  selectedHoliday: BrazilianHoliday | null;
  onHolidaySelect: (holiday: BrazilianHoliday) => void;
  view: 'month' | 'list' | 'year';
  onViewChange: (view: 'month' | 'list' | 'year') => void;
}

export function Calendar({ selectedHoliday, onHolidaySelect, view, onViewChange }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
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

  const getHolidayForDate = (date: Date): BrazilianHoliday | undefined => {
    return holidays.find(holiday => 
      isSameDay(new Date(holiday.date), date)
    );
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => 
      direction === 'prev' ? subMonths(prev, 1) : addMonths(prev, 1)
    );
  };

  const navigateYear = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => 
      direction === 'prev' ? subYears(prev, 1) : addYears(prev, 1)
    );
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  if (view === 'year') {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigateYear('prev')}
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
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={goToToday}>
              <CalendarIcon className="w-4 h-4 mr-2" />
              Hoje
            </Button>
            <SocialShare title={`Feriados Brasileiros - ${format(currentDate, 'yyyy')}`} />
            <PrintCalendar currentDate={currentDate} holidays={holidays} view="year" />
            <Button
              variant="outline"
              size="icon"
              onClick={() => onViewChange('month')}
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => onViewChange('list')}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <YearView 
          currentDate={currentDate}
          holidays={holidays}
          selectedHoliday={selectedHoliday}
          onHolidaySelect={onHolidaySelect}
        />
      </div>
    );
  }

  if (view === 'list') {
    return (
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigateMonth('prev')}
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
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={goToToday}>
              Hoje
            </Button>
            <SocialShare title={`Feriados - ${format(currentDate, 'MMMM yyyy', { locale: ptBR })}`} />
            <PrintCalendar currentDate={currentDate} holidays={holidays} view="month" />
            <Button
              variant="outline"
              size="icon"
              onClick={() => onViewChange('month')}
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
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
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigateMonth('prev')}
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
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={goToToday}>
            <CalendarIcon className="w-4 h-4 mr-2" />
            Hoje
          </Button>
          <SocialShare title={`Feriados - ${format(currentDate, 'MMMM yyyy', { locale: ptBR })}`} />
          <PrintCalendar currentDate={currentDate} holidays={holidays} view="month" />
          <Button
            variant="outline"
            size="icon"
            onClick={() => onViewChange('year')}
            title="Ver ano completo"
          >
            <CalendarDays className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => onViewChange('list')}
          >
            <List className="w-4 h-4" />
          </Button>
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