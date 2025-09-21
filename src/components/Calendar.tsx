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
  isToday
} from "date-fns";
import { ptBR } from "date-fns/locale";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HolidayCard } from "./HolidayCard";
import { BrazilianHoliday, getHolidaysByMonth } from "@/data/brazilian-holidays";
import { cn } from "@/lib/utils";

interface CalendarProps {
  selectedHoliday: BrazilianHoliday | null;
  onHolidaySelect: (holiday: BrazilianHoliday) => void;
  view: 'month' | 'list';
  onViewChange: (view: 'month' | 'list') => void;
}

export function Calendar({ selectedHoliday, onHolidaySelect, view, onViewChange }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [holidays, setHolidays] = useState<BrazilianHoliday[]>([]);

  useEffect(() => {
    const monthHolidays = getHolidaysByMonth(
      currentDate.getFullYear(), 
      currentDate.getMonth()
    );
    setHolidays(monthHolidays);
  }, [currentDate]);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const dateRange = eachDayOfInterval({ start: startDate, end: endDate });
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

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

  const goToToday = () => {
    setCurrentDate(new Date());
  };

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
      <div className="grid grid-cols-7 gap-1 bg-card rounded-xl p-4 shadow-lg border">
        {/* Week days header */}
        {weekDays.map(day => (
          <div 
            key={day}
            className="p-3 text-center text-sm font-semibold text-muted-foreground border-b border-border/50"
          >
            {day}
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
                "min-h-[120px] p-2 border-r border-b border-border/30 transition-all duration-200",
                !isCurrentMonth && "bg-muted/30 text-muted-foreground",
                isTodayDate && "bg-primary/10 border-primary/30",
                "hover:bg-muted/50"
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={cn(
                  "text-sm font-medium",
                  isTodayDate && "bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs"
                )}>
                  {format(date, 'd')}
                </span>
              </div>
              
              {holiday && (
                <HolidayCard
                  holiday={holiday}
                  onClick={() => onHolidaySelect(holiday)}
                  isSelected={selectedHoliday?.id === holiday.id}
                  view="calendar"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}