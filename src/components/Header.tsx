import { Flag } from "lucide-react";
import { Link } from "react-router-dom";
import { MobileNavigation } from "./MobileNavigation";
import { SearchBar } from "./SearchBar";
import { BrazilianHoliday } from "@/data/brazilian-holidays";

interface HeaderProps {
  onHolidaySelect?: (holiday: BrazilianHoliday) => void;
  selectedHoliday?: BrazilianHoliday | null;
  showSearch?: boolean;
}

export const Header = ({ onHolidaySelect, selectedHoliday, showSearch = true }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-40 bg-card/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
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
          </Link>
          
          <div className="flex items-center gap-3">
            {showSearch && onHolidaySelect && (
              <div className="hidden sm:block">
                <SearchBar 
                  onHolidaySelect={onHolidaySelect}
                  selectedHoliday={selectedHoliday}
                />
              </div>
            )}
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
};
