import { useState } from "react";
import { Calendar } from "@/components/Calendar";
import { HolidayModal } from "@/components/HolidayModal";
import { HolidayCountdown } from "@/components/HolidayCountdown";
import { SearchBar } from "@/components/SearchBar";
import { AdZone } from "@/components/AdZone";
import { BrazilianHoliday } from "@/data/brazilian-holidays";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Search, Menu, Flag } from "lucide-react";

const Index = () => {
  const [selectedHoliday, setSelectedHoliday] = useState<BrazilianHoliday | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [calendarView, setCalendarView] = useState<'month' | 'list'>('month');

  const handleHolidaySelect = (holiday: BrazilianHoliday) => {
    setSelectedHoliday(holiday);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedHoliday(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          {/* Top Ad Banner */}
          <div className="mb-4 flex justify-center">
            <AdZone size="leaderboard" className="hidden md:flex" />
            <AdZone size="mobile-banner" className="flex md:hidden" />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-bounce-in">
                <Flag className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-holiday-cultural bg-clip-text text-transparent">
                  Calendário Brasileiro
                </h1>
                <p className="text-sm text-muted-foreground">
                  Feriados e datas comemorativas do Brasil
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <SearchBar 
                onHolidaySelect={handleHolidaySelect}
                selectedHoliday={selectedHoliday}
              />
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Countdown and Ads */}
          <div className="lg:col-span-1 space-y-6">
            <HolidayCountdown />
            
            <AdZone size="rectangle" id="sidebar-ad-1" />
            
            {/* Cultural Tip Card */}
            <div className="bg-gradient-to-br from-holiday-cultural/10 via-card to-holiday-cultural/5 rounded-xl p-6 border border-holiday-cultural/20 animate-fade-in">
              <h3 className="font-bold text-lg mb-3 text-holiday-cultural">
                💡 Dica Cultural
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                O Brasil possui uma das calendários mais ricos em festividades do mundo, 
                misturando tradições indígenas, africanas e europeias em celebrações únicas.
              </p>
            </div>

            <AdZone size="rectangle" id="sidebar-ad-2" />
          </div>

          {/* Main Calendar Area */}
          <div className="lg:col-span-3 space-y-6">
            <Calendar
              selectedHoliday={selectedHoliday}
              onHolidaySelect={handleHolidaySelect}
              view={calendarView}
              onViewChange={setCalendarView}
            />
          </div>
        </div>

        {/* Bottom Ad */}
        <div className="mt-12 flex justify-center">
          <AdZone size="leaderboard" id="bottom-ad" />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-primary">Calendário Brasileiro</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Seu guia completo para os feriados e datas comemorativas do Brasil. 
                Planeje suas celebrações com antecedência e conheça nossas tradições.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Categorias</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>🇧🇷 Feriados Federais</li>
                <li>⛪ Feriados Religiosos</li>
                <li>🎉 Festas Culturais</li>
                <li>🛍️ Datas Comerciais</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>📅 Calendário Interativo</li>
                <li>🔍 Busca de Feriados</li>
                <li>⏰ Contagem Regressiva</li>
                <li>📱 Design Responsivo</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-6 mt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Calendário Brasileiro. Celebrando a cultura brasileira.</p>
          </div>
        </div>
      </footer>

      {/* Holiday Detail Modal */}
      <HolidayModal
        holiday={selectedHoliday}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Index;
