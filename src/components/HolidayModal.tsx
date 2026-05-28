import { BrazilianHoliday } from "@/data/brazilian-holidays";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Heart, 
  Share2, 
  Bookmark,
  ChefHat,
  Info,
  ExternalLink
} from "lucide-react";
import { NATIONAL_HOLIDAY_GUIDES } from "@/data/national-holiday-guides";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";

interface HolidayModalProps {
  holiday: BrazilianHoliday | null;
  isOpen: boolean;
  onClose: () => void;
}

const holidayTypeConfig = {
  federal: {
    color: 'holiday-federal',
    icon: '🇧🇷',
    label: 'Feriado Federal',
    bg: 'bg-holiday-federal/10'
  },
  religious: {
    color: 'holiday-religious', 
    icon: '⛪',
    label: 'Feriado Religioso',
    bg: 'bg-holiday-religious/10'
  },
  cultural: {
    color: 'holiday-cultural',
    icon: '🎉',
    label: 'Festa Cultural',
    bg: 'bg-holiday-cultural/10'
  },
  commercial: {
    color: 'holiday-commercial',
    icon: '🛍️',
    label: 'Data Comercial',
    bg: 'bg-holiday-commercial/10'
  }
};

export function HolidayModal({ holiday, isOpen, onClose }: HolidayModalProps) {
  if (!holiday) return null;

  const config = holidayTypeConfig[holiday.type];
  const holidayDate = new Date(holiday.date);
  const guideSlug = NATIONAL_HOLIDAY_GUIDES.find(
    (g) => holiday.id.includes(g.slug) || holiday.name.includes(g.name)
  )?.slug;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: holiday.name,
        text: holiday.description,
        url: window.location.href
      });
    } else {
      // Fallback para navegadores que não suportam Web Share API
      navigator.clipboard.writeText(`${holiday.name} - ${holiday.description} - ${window.location.href}`);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="flex items-center gap-3">
            <div className={cn("w-16 h-16 rounded-full flex items-center justify-center text-2xl", config.bg)}>
              {config.icon}
            </div>
            <div className="flex-1">
              <DialogTitle className="text-2xl font-bold text-card-foreground mb-2">
                {holiday.name}
              </DialogTitle>
              <Badge 
                variant="outline" 
                className={cn(
                  "border text-sm px-3 py-1",
                  `border-${config.color}/20 text-${config.color}`
                )}
              >
                {config.label}
              </Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={handleShare}>
                <Share2 className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Bookmark className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Data e Informações Básicas */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="font-medium">
                {format(holidayDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{format(holidayDate, "EEEE", { locale: ptBR })}</span>
            </div>
          </div>

          <Separator />

          {/* Descrição */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Info className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Sobre este feriado</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {holiday.description}
            </p>
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-sm text-primary font-medium">
                <strong>Significado:</strong> {holiday.significance}
              </p>
            </div>
          </div>

          <Separator />

          {/* Tradições */}
          {holiday.traditions.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-semibold">Tradições</h3>
              </div>
              <div className="grid gap-2">
                {holiday.traditions.map((tradition, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg border border-accent/10"
                  >
                    <ChefHat className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm">{tradition}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Variações Regionais */}
          {holiday.regionalVariations && holiday.regionalVariations.length > 0 && (
            <>
              <Separator />
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-holiday-cultural" />
                  <h3 className="text-lg font-semibold">Variações Regionais</h3>
                </div>
                <div className="grid gap-3">
                  {holiday.regionalVariations.map((variation, index) => (
                    <div 
                      key={index}
                      className="p-3 bg-holiday-cultural/5 rounded-lg border border-holiday-cultural/10"
                    >
                      <span className="text-sm">{variation}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Preparação */}
          {holiday.preparation && holiday.preparation.length > 0 && (
            <>
              <Separator />
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-secondary-foreground" />
                  <h3 className="text-lg font-semibold">Como se preparar</h3>
                </div>
                <div className="grid gap-2">
                  {holiday.preparation.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-sm flex-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {guideSlug && (
            <div className="pt-2">
              <Link
                to={`/feriado/${guideSlug}`}
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
              >
                Ver guia completo de {holiday.name}
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}