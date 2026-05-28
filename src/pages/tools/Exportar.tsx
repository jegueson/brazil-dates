import { useState } from "react";
import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BRAZIL_STATES } from "@/data/brazil-states";
import { getFederalHolidaysForYear } from "@/lib/holiday-utils";
import { getRegionalHolidaysByState } from "@/data/regional-holidays";
import { downloadIcs, generateIcs, holidaysToIcsEvents } from "@/lib/ical-export";

const Exportar = () => {
  const [year, setYear] = useState("2026");
  const [stateSlug, setStateSlug] = useState("");

  useSEO({
    title: "Exportar Feriados — iCal para Google Calendar e Outlook",
    description:
      "Baixe feriados brasileiros em formato .ics para Google Calendar, Apple Calendar ou Outlook.",
    canonical: `${SITE_URL}/exportar`,
  });

  const handleExport = () => {
    const y = parseInt(year, 10);
    const national = getFederalHolidaysForYear(y);
    const stateName = stateSlug
      ? BRAZIL_STATES.find((s) => s.slug === stateSlug)?.name
      : undefined;
    const regional = stateName ? getRegionalHolidaysByState(stateName) : [];
    const events = holidaysToIcsEvents(national, regional);
    const ics = generateIcs(
      events,
      `Feriados Brasil ${y}${stateName ? ` - ${stateName}` : ""}`
    );
    downloadIcs(ics, `feriados-brasil-${y}${stateSlug ? `-${stateSlug}` : ""}.ics`);
  };

  return (
    <ArticleLayout
      title="Exportar calendário"
      subtitle="Google Calendar, Outlook e Apple Calendar"
      breadcrumbs={[{ title: "Ferramentas" }, { title: "Exportar" }]}
      showUpdatedAt={false}
    >
      <div className="not-prose space-y-4 max-w-md">
        <div>
          <Label>Ano</Label>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {["2025", "2026", "2027", "2028"].map((y) => (
                <SelectItem key={y} value={y}>
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Estado (opcional)</Label>
          <Select value={stateSlug || "none"} onValueChange={(v) => setStateSlug(v === "none" ? "" : v)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">Somente nacionais</SelectItem>
              {BRAZIL_STATES.map((s) => (
                <SelectItem key={s.slug} value={s.slug}>
                  {s.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button onClick={handleExport}>Baixar arquivo .ics</Button>
      </div>
      <p className="text-sm text-muted-foreground mt-8">
        API JSON disponível em{" "}
        <a href={`/api/feriados/${year}.json`} className="text-primary hover:underline">
          /api/feriados/{year}.json
        </a>
      </p>
    </ArticleLayout>
  );
};

export default Exportar;
