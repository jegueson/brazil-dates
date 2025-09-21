import { BrazilianHoliday } from "@/data/brazilian-holidays";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Heart } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";

interface HolidayCardProps {
  holiday: BrazilianHoliday;
  onClick?: () => void;
  isSelected?: boolean;
  view?: 'calendar' | 'list' | 'year';
}

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

export function HolidayCard({ holiday, onClick, isSelected, view = 'calendar' }: HolidayCardProps) {
  const config = holidayTypeConfig[holiday.type];
  const holidayDate = new Date(holiday.date);
  
  if (view === 'year') {
    return (
      <div
        onClick={onClick}
        className={cn(
          "p-2 rounded-lg border text-xs cursor-pointer transition-all duration-200",
          "hover:shadow-md hover:scale-105",
          isSelected ? "bg-primary text-primary-foreground border-primary" : "bg-card hover:bg-muted/50",
          `hover:border-${config.color}`
        )}
      >
        <div className="flex items-center justify-between">
          <span className="font-medium truncate">{holiday.name}</span>
          <span className="text-xs opacity-70 ml-1">
            {format(new Date(holiday.date), 'd')}
          </span>
        </div>
        <div className="flex items-center mt-1">
          <Badge variant="outline" className={cn("text-xs px-1 py-0", `text-${config.color}`)}>
            {config.icon}
          </Badge>
        </div>
      </div>
    );
  }

  if (view === 'calendar') {
    return (
      <div
        onClick={onClick}
        className={cn(
          "group cursor-pointer p-2 rounded-lg border transition-all duration-200 hover:shadow-md animate-fade-in",
          `hover:border-${config.color}`,
          isSelected && `border-${config.color} shadow-lg`,
          "bg-gradient-to-br from-card to-card/80"
        )}
      >
        <div className="flex items-start gap-2">
          <span className="text-lg">{config.icon}</span>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm leading-tight text-card-foreground group-hover:text-primary transition-colors">
              {holiday.name}
            </h3>
            <Badge 
              variant="outline" 
              className={cn(
                "mt-1 text-xs border",
                `border-${config.color}/20 text-${config.color}`
              )}
            >
              {config.label}
            </Badge>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={cn(
        "group cursor-pointer p-4 rounded-xl border transition-all duration-300 hover:shadow-lg animate-slide-up",
        `hover:border-${config.color}`,
        isSelected && `border-${config.color} shadow-xl`,
        "bg-gradient-to-br from-card to-card/80 backdrop-blur-sm"
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl">
            {config.icon}
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-bold text-lg text-card-foreground group-hover:text-primary transition-colors">
              {holiday.name}
            </h3>
            <Badge 
              variant="outline" 
              className={cn(
                "border",
                `border-${config.color}/20 text-${config.color}`
              )}
            >
              {config.label}
            </Badge>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {format(holidayDate, "dd 'de' MMMM", { locale: ptBR })}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {format(holidayDate, "EEEE", { locale: ptBR })}
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {holiday.description}
          </p>
          
          {holiday.traditions.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {holiday.traditions.slice(0, 3).map((tradition, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
                >
                  <Heart className="w-3 h-3" />
                  {tradition}
                </span>
              ))}
              {holiday.traditions.length > 3 && (
                <span className="text-xs text-muted-foreground px-2 py-1">
                  +{holiday.traditions.length - 3} mais
                </span>
              )}
            </div>
          )}
          
          {holiday.regionalVariations && (
            <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3" />
              <span>Variações regionais disponíveis</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}