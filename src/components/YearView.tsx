import { format, startOfYear, endOfYear, eachMonthOfInterval, isSameMonth } from "date-fns";
import { ptBR } from "date-fns/locale";
import { BrazilianHoliday } from "@/data/brazilian-holidays";
import { HolidayCard } from "./HolidayCard";
import { Badge } from "@/components/ui/badge";

interface YearViewProps {
  currentDate: Date;
  holidays: BrazilianHoliday[];
  selectedHoliday: BrazilianHoliday | null;
  onHolidaySelect: (holiday: BrazilianHoliday) => void;
}

export function YearView({ currentDate, holidays, selectedHoliday, onHolidaySelect }: YearViewProps) {
  const yearStart = startOfYear(currentDate);
  const yearEnd = endOfYear(currentDate);
  const months = eachMonthOfInterval({ start: yearStart, end: yearEnd });

  const getHolidaysForMonth = (month: Date) => {
    return holidays.filter(holiday => {
      const holidayDate = new Date(holiday.date);
      return isSameMonth(holidayDate, month);
    });
  };

  const totalHolidays = holidays.length;
  const federalHolidays = holidays.filter(h => h.type === 'federal').length;
  const religiousHolidays = holidays.filter(h => h.type === 'religious').length;
  const culturalHolidays = holidays.filter(h => h.type === 'cultural').length;

  return (
    <div className="space-y-8">
      {/* Year Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 border border-primary/20">
          <div className="text-2xl font-bold text-primary">{totalHolidays}</div>
          <div className="text-sm text-muted-foreground">Total de Feriados</div>
        </div>
        <div className="bg-gradient-to-br from-holiday-federal/10 to-holiday-federal/5 rounded-xl p-4 border border-holiday-federal/20">
          <div className="text-2xl font-bold text-holiday-federal">{federalHolidays}</div>
          <div className="text-sm text-muted-foreground">Feriados Federais</div>
        </div>
        <div className="bg-gradient-to-br from-holiday-religious/10 to-holiday-religious/5 rounded-xl p-4 border border-holiday-religious/20">
          <div className="text-2xl font-bold text-holiday-religious">{religiousHolidays}</div>
          <div className="text-sm text-muted-foreground">Feriados Religiosos</div>
        </div>
        <div className="bg-gradient-to-br from-holiday-cultural/10 to-holiday-cultural/5 rounded-xl p-4 border border-holiday-cultural/20">
          <div className="text-2xl font-bold text-holiday-cultural">{culturalHolidays}</div>
          <div className="text-sm text-muted-foreground">Festas Culturais</div>
        </div>
      </div>

      {/* Months Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {months.map(month => {
          const monthHolidays = getHolidaysForMonth(month);
          
          return (
            <div key={month.toISOString()} className="bg-card rounded-xl border shadow-sm p-4 hover:shadow-md transition-shadow">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold capitalize bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {format(month, 'MMMM', { locale: ptBR })}
                </h3>
                {monthHolidays.length > 0 && (
                  <Badge variant="secondary" className="mt-1 text-xs">
                    {monthHolidays.length} feriado{monthHolidays.length !== 1 ? 's' : ''}
                  </Badge>
                )}
              </div>
              
              <div className="space-y-2">
                {monthHolidays.length > 0 ? (
                  monthHolidays.map(holiday => (
                    <HolidayCard
                      key={holiday.id}
                      holiday={holiday}
                      onClick={() => onHolidaySelect(holiday)}
                      isSelected={selectedHoliday?.id === holiday.id}
                      view="year"
                    />
                  ))
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <div className="text-xs opacity-60">Nenhum feriado</div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Analysis Section */}
      <div className="bg-gradient-to-br from-card via-muted/20 to-card rounded-xl p-6 border">
        <h3 className="text-xl font-bold mb-4 text-primary">
          📊 Análise do Ano {currentDate.getFullYear()}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Distribuição de Feriados</h4>
            <ul className="space-y-1">
              <li>• Feriados Federais: {federalHolidays} feriados</li>
              <li>• Feriados Religiosos: {religiousHolidays} feriados</li>
              <li>• Festas Culturais: {culturalHolidays} feriados</li>
              <li>• Datas Comerciais: {holidays.filter(h => h.type === 'commercial').length} feriados</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">Dicas de Planejamento</h4>
            <ul className="space-y-1">
              <li>• Planeje suas férias com antecedência</li>
              <li>• Considere feriados prolongados para viagens</li>
              <li>• Verifique feriados regionais da sua cidade</li>
              <li>• Use feriados para celebrar tradições brasileiras</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}