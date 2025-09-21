import { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { searchHolidays, BrazilianHoliday } from "@/data/brazilian-holidays";
import { HolidayCard } from "./HolidayCard";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  onHolidaySelect: (holiday: BrazilianHoliday) => void;
  selectedHoliday: BrazilianHoliday | null;
}

export function SearchBar({ onHolidaySelect, selectedHoliday }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<BrazilianHoliday[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    
    if (searchQuery.trim().length > 0) {
      const searchResults = searchHolidays(searchQuery);
      setResults(searchResults);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  const handleSelectHoliday = (holiday: BrazilianHoliday) => {
    onHolidaySelect(holiday);
    setIsOpen(false);
    setQuery("");
    setResults([]);
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          type="text"
          placeholder="Buscar feriados brasileiros..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 pr-10 bg-background/80 backdrop-blur-sm border-border/50 focus:border-primary focus:ring-primary"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            onClick={clearSearch}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto animate-fade-in">
          {results.length > 0 ? (
            <div className="p-2 space-y-2">
              <div className="px-3 py-2 text-sm text-muted-foreground border-b border-border">
                {results.length} resultado{results.length !== 1 ? 's' : ''} encontrado{results.length !== 1 ? 's' : ''}
              </div>
              {results.map(holiday => (
                <div key={holiday.id} className="cursor-pointer">
                  <HolidayCard
                    holiday={holiday}
                    onClick={() => handleSelectHoliday(holiday)}
                    isSelected={selectedHoliday?.id === holiday.id}
                    view="list"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-muted-foreground">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>Nenhum feriado encontrado para "{query}"</p>
              <p className="text-xs mt-1">
                Tente buscar por "Carnaval", "Natal", "João" ou outros termos
              </p>
            </div>
          )}
        </div>
      )}

      {/* Overlay to close dropdown */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}