import { useState } from "react";
import { Calendar } from "@/components/Calendar";
import { HolidayModal } from "@/components/HolidayModal";
import { HolidayCountdown } from "@/components/HolidayCountdown";
import { SearchBar } from "@/components/SearchBar";
import { MobileNavigation } from "@/components/MobileNavigation";
import { BrazilianHoliday } from "@/data/brazilian-holidays";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Search, Menu, Flag } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO, seoConfigs } from "@/hooks/useSEO";

const Index = () => {
  const [selectedHoliday, setSelectedHoliday] = useState<BrazilianHoliday | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [calendarView, setCalendarView] = useState<'month' | 'list' | 'year'>('month');

  // SEO Configuration
  useSEO(seoConfigs.home);

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
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-bounce-in">
                <Flag className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-holiday-cultural bg-clip-text text-transparent">
                  Calendário Brasileiro 2025
                </h1>
                <p className="text-sm text-muted-foreground">
                  Feriados e datas comemorativas do Brasil
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="hidden sm:block">
                <SearchBar 
                  onHolidaySelect={handleHolidaySelect}
                  selectedHoliday={selectedHoliday}
                />
              </div>
              <MobileNavigation />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Search Bar */}
      <div className="sm:hidden bg-card/50 border-b border-border/30">
        <div className="container mx-auto px-4 py-3">
          <SearchBar 
            onHolidaySelect={handleHolidaySelect}
            selectedHoliday={selectedHoliday}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8">
          {/* Sidebar - Countdown and Cultural Info */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6 order-2 lg:order-1">
            <HolidayCountdown />
            
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

            {/* Quick Links */}
            <div className="bg-gradient-to-br from-primary/10 via-card to-accent/5 rounded-xl p-6 border border-primary/20 animate-fade-in">
              <h3 className="font-bold text-lg mb-3 text-primary">
                🔗 Links Úteis
              </h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre o Calendário</Link></li>
                <li><Link to="/historia" className="text-muted-foreground hover:text-primary transition-colors">História dos Feriados</Link></li>
                <li><Link to="/tradicoes" className="text-muted-foreground hover:text-primary transition-colors">Tradições Brasileiras</Link></li>
              </ul>
            </div>
          </div>

          {/* Main Calendar Area */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-6 order-1 lg:order-2">
            <Calendar
              selectedHoliday={selectedHoliday}
              onHolidaySelect={handleHolidaySelect}
              view={calendarView}
              onViewChange={setCalendarView}
            />
          </div>
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
              <h4 className="font-semibold mb-4">Páginas</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre</Link></li>
                <li><Link to="/historia" className="text-muted-foreground hover:text-primary transition-colors">História dos Feriados</Link></li>
                <li><Link to="/tradicoes" className="text-muted-foreground hover:text-primary transition-colors">Tradições</Link></li>
                <li><Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-6 mt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Calendário Brasileiro. Celebrando a cultura brasileira.</p>
            <div className="mt-3 space-x-4">
              <Link to="/privacidade" className="hover:text-primary transition-colors">Política de Privacidade</Link>
              <Link to="/termos" className="hover:text-primary transition-colors">Termos de Uso</Link>
            </div>
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
