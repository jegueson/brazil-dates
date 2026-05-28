import { useMemo, useState } from "react";
import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getBridgeOpportunities } from "@/lib/holiday-utils";
import { getFederalHolidaysForYear } from "@/lib/holiday-utils";
import { parseISO } from "date-fns";

const YEAR = 2026;

const PlanejadorFerias = () => {
  const [vacationDays, setVacationDays] = useState("10");

  useSEO({
    title: "Planejador de Férias 2026 — Melhores Períodos para Emendar",
    description:
      "Descubra os melhores períodos para usar seus dias de férias emendando feriados nacionais em 2026.",
    canonical: `${SITE_URL}/planejador-de-ferias`,
  });

  const suggestions = useMemo(() => {
    const bridges = getBridgeOpportunities(YEAR);
    const federal = getFederalHolidaysForYear(YEAR);
    const n = parseInt(vacationDays, 10) || 10;
    return bridges.slice(0, 5).map((b) => {
      const d = parseISO(b.holiday.date);
      return {
        name: b.holiday.name,
        tip: b.tip,
        estimatedDaysOff: 4,
        vacationNeeded: Math.max(1, 4 - n),
      };
    });
  }, [vacationDays]);

  return (
    <ArticleLayout
      title="Planejador de férias"
      subtitle={`Maximize folgas em ${YEAR} emendando feriados`}
      breadcrumbs={[{ title: "Ferramentas" }, { title: "Planejador" }]}
      showUpdatedAt={false}
    >
      <div className="not-prose mb-8 max-w-md">
        <Label>Dias de férias disponíveis</Label>
        <Input
          type="number"
          min={1}
          max={30}
          value={vacationDays}
          onChange={(e) => setVacationDays(e.target.value)}
          className="mt-2"
        />
      </div>
      <p className="text-muted-foreground mb-6">
        Sugestões com base em feriados que permitem emenda (terça ou quinta):
      </p>
      <ul className="space-y-4">
        {suggestions.map((s) => (
          <li key={s.name} className="p-4 border rounded-lg">
            <h3 className="font-bold">{s.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{s.tip}</p>
            <p className="text-sm mt-2">
              Aproximadamente {s.estimatedDaysOff} dias de folga usando poucos dias de férias.
            </p>
          </li>
        ))}
      </ul>
      <p className="text-sm text-muted-foreground mt-6">
        {getFederalHolidaysForYear(YEAR).length} feriados nacionais em {YEAR}. Veja{" "}
        <a href={`/feriados/${YEAR}`} className="text-primary hover:underline">
          calendário completo
        </a>
        .
      </p>
    </ArticleLayout>
  );
};

export default PlanejadorFerias;
