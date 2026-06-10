import { BrazilianHoliday } from "@/data/brazilian-holidays";
import { YearCalendarGrid } from "./YearCalendarGrid";

interface YearViewProps {
  currentDate: Date;
  holidays: BrazilianHoliday[];
  selectedHoliday: BrazilianHoliday | null;
  onHolidaySelect: (holiday: BrazilianHoliday) => void;
  onMonthSelect?: (month: Date) => void;
}

export function YearView({
  currentDate,
  holidays,
  selectedHoliday,
  onHolidaySelect,
  onMonthSelect,
}: YearViewProps) {
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

      {/* Full year calendar grid */}
      <YearCalendarGrid
        currentDate={currentDate}
        holidays={holidays}
        selectedHoliday={selectedHoliday}
        onHolidaySelect={onHolidaySelect}
        onMonthSelect={onMonthSelect}
      />

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
