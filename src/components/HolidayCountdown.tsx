import { useState, useEffect } from "react";
import { getNextHoliday } from "@/data/brazilian-holidays";
import { differenceInDays, differenceInHours, differenceInMinutes, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Clock, Calendar, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function HolidayCountdown() {
  const [nextHoliday, setNextHoliday] = useState(getNextHoliday());
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });

  useEffect(() => {
    if (!nextHoliday) return;

    const updateCountdown = () => {
      const now = new Date();
      const holidayDate = new Date(nextHoliday.date);

      const days = differenceInDays(holidayDate, now);
      const hours = differenceInHours(holidayDate, now) % 24;
      const minutes = differenceInMinutes(holidayDate, now) % 60;

      setTimeLeft({ days, hours, minutes });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [nextHoliday]);

  if (!nextHoliday) {
    return (
      <Card className="bg-gradient-to-br from-muted to-muted/50">
        <CardContent className="p-6 text-center">
          <Sparkles className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
          <p className="text-muted-foreground">
            Nenhum feriado próximo encontrado
          </p>
        </CardContent>
      </Card>
    );
  }

  const holidayTypeConfig = {
    federal: { icon: '🇧🇷', label: 'Federal', color: 'bg-holiday-federal' },
    religious: { icon: '⛪', label: 'Religioso', color: 'bg-holiday-religious' },
    cultural: { icon: '🎉', label: 'Cultural', color: 'bg-holiday-cultural' },
    commercial: { icon: '🛍️', label: 'Comercial', color: 'bg-holiday-commercial' }
  };

  const config = holidayTypeConfig[nextHoliday.type];

  return (
    <Card className="overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-holiday-cultural/5 border-primary/20 animate-fade-in">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl animate-bounce-in">
            {config.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-card-foreground mb-1">
              Próximo Feriado
            </h3>
            <Badge variant="outline" className="text-xs">
              {config.label}
            </Badge>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="text-2xl font-bold text-primary mb-2">
              {nextHoliday.name}
            </h4>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>
                {format(new Date(nextHoliday.date), "dd 'de' MMMM", { locale: ptBR })}
              </span>
            </div>
          </div>

          {timeLeft.days >= 0 && (
            <div className="bg-card/50 rounded-lg p-4 border border-primary/10">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Tempo restante</span>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-primary animate-pulse-glow">
                    {timeLeft.days}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {timeLeft.days === 1 ? 'dia' : 'dias'}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-accent">
                    {timeLeft.hours}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {timeLeft.hours === 1 ? 'hora' : 'horas'}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-holiday-cultural">
                    {timeLeft.minutes}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {timeLeft.minutes === 1 ? 'minuto' : 'minutos'}
                  </div>
                </div>
              </div>
            </div>
          )}

          <p className="text-sm text-muted-foreground line-clamp-2">
            {nextHoliday.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}