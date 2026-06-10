import { lazy, Suspense, useEffect, useState } from "react";
import { HolidayModal } from "@/components/HolidayModal";
import { HolidayCountdown } from "@/components/HolidayCountdown";
import { SearchBar } from "@/components/SearchBar";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Footer } from "@/components/Footer";
import { BrazilianHoliday } from "@/data/brazilian-holidays";
import { Flag } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useSEO, seoConfigs } from "@/hooks/useSEO";
import { NATIONAL_HOLIDAY_GUIDES } from "@/data/national-holiday-guides";

const Calendar = lazy(() =>
  import("@/components/Calendar").then((m) => ({ default: m.Calendar }))
);

const CURRENT_YEAR = new Date().getFullYear();

type CalendarView = "month" | "list" | "year";

function parseViewParam(value: string | null): CalendarView {
  return value === "year" || value === "list" || value === "month" ? value : "year";
}

function parseDateParams(params: URLSearchParams): Date {
  const month = params.get("m");
  if (month && /^\d{4}-\d{2}$/.test(month)) {
    const parsed = new Date(Number(month.slice(0, 4)), Number(month.slice(5, 7)) - 1, 1);
    if (!Number.isNaN(parsed.getTime())) return parsed;
  }
  const year = params.get("y");
  if (year && /^\d{4}$/.test(year)) {
    return new Date(Number(year), 0, 1);
  }
  return new Date();
}

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedHoliday, setSelectedHoliday] = useState<BrazilianHoliday | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [calendarView, setCalendarView] = useState<CalendarView>(() =>
    parseViewParam(searchParams.get("view"))
  );
  const [currentDate, setCurrentDate] = useState<Date>(() => parseDateParams(searchParams));

  // Keep view and date shareable via URL (e.g. /?view=year&y=2026).
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const now = new Date();
    const isDefault =
      calendarView === "year" &&
      currentDate.getFullYear() === now.getFullYear();

    if (isDefault) {
      params.delete("view");
      params.delete("y");
      params.delete("m");
    } else {
      params.set("view", calendarView);
      if (calendarView === "year") {
        params.set("y", String(currentDate.getFullYear()));
        params.delete("m");
      } else {
        params.set(
          "m",
          `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}`
        );
        params.delete("y");
      }
    }
    if (params.toString() !== searchParams.toString()) {
      setSearchParams(params, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calendarView, currentDate]);

  useSEO({
    ...seoConfigs.home,
    title: `Calendário Brasileiro ${CURRENT_YEAR} - Feriados e Datas Comemorativas`,
    description: `Calendário completo dos feriados brasileiros ${CURRENT_YEAR}-2028. Guias editoriais, feriados por estado, calculadoras e exportação iCal.`,
  });

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
      <header className="sticky top-0 z-40 bg-card/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-bounce-in">
                <Flag className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-holiday-cultural bg-clip-text text-transparent">
                  Calendário Brasileiro {CURRENT_YEAR}
                </h1>
                <p className="text-sm text-muted-foreground">
                  Feriados nacionais, regionais e ferramentas de planejamento
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

      <div className="sm:hidden bg-card/50 border-b border-border/30">
        <div className="container mx-auto px-4 py-3">
          <SearchBar
            onHolidaySelect={handleHolidaySelect}
            selectedHoliday={selectedHoliday}
          />
        </div>
      </div>

      <main className="container mx-auto px-4 py-4 sm:py-8">
        <section className="mb-8 max-w-3xl text-muted-foreground leading-relaxed">
          <p>
            Bem-vindo ao <strong className="text-foreground">Calendário Brasileiro</strong> —
            referência em feriados nacionais e estaduais, com guias sobre história, tradições e
            planejamento. Consulte o calendário interativo abaixo ou acesse{" "}
            <Link to={`/feriados/${CURRENT_YEAR}`} className="text-primary hover:underline">
              todos os feriados de {CURRENT_YEAR}
            </Link>
            .
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8">
          <div className="lg:col-span-1 space-y-4 sm:space-y-6 order-2 lg:order-1">
            <HolidayCountdown />

            <div className="bg-gradient-to-br from-holiday-cultural/10 via-card to-holiday-cultural/5 rounded-xl p-6 border border-holiday-cultural/20">
              <h2 className="font-bold text-lg mb-3 text-holiday-cultural">Guias de feriados</h2>
              <ul className="space-y-2 text-sm">
                {NATIONAL_HOLIDAY_GUIDES.slice(0, 6).map((g) => (
                  <li key={g.slug}>
                    <Link
                      to={`/feriado/${g.slug}`}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {g.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/10 via-card to-accent/5 rounded-xl p-6 border border-primary/20">
              <h2 className="font-bold text-lg mb-3 text-primary">Links úteis</h2>
              <ul className="space-y-2 text-sm">
                <li><Link to="/regionais" className="text-muted-foreground hover:text-primary">Feriados regionais</Link></li>
                <li><Link to="/calculadora-dias-uteis" className="text-muted-foreground hover:text-primary">Dias úteis</Link></li>
                <li><Link to="/perguntas-frequentes" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
                <li><Link to="/equipe" className="text-muted-foreground hover:text-primary">Equipe editorial</Link></li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4 sm:space-y-6 order-1 lg:order-2">
            <Suspense
              fallback={
                <div className="h-96 flex items-center justify-center text-muted-foreground">
                  Carregando calendário…
                </div>
              }
            >
              <Calendar
                selectedHoliday={selectedHoliday}
                onHolidaySelect={handleHolidaySelect}
                view={calendarView}
                onViewChange={setCalendarView}
                currentDate={currentDate}
                onDateChange={setCurrentDate}
              />
            </Suspense>
          </div>
        </div>
      </main>

      <Footer />

      <HolidayModal holiday={selectedHoliday} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Index;
