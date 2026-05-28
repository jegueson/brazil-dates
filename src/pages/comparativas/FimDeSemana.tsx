import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { NATIONAL_HOLIDAY_GUIDES } from "@/data/national-holiday-guides";
import { getHolidayDateString } from "@/lib/holiday-dates";
import { formatWeekdayBR } from "@/lib/holiday-utils";

const YEAR = 2026;

const FimDeSemana = () => {
  useSEO({
    title: `Feriados que Caem no Fim de Semana em ${YEAR}`,
    description: `Lista de feriados nacionais ${YEAR} que coincidem com sábado ou domingo e dicas de planejamento.`,
    canonical: `${SITE_URL}/feriado-cai-em-fim-de-semana-2026`,
  });

  const onWeekend = NATIONAL_HOLIDAY_GUIDES.map((g) => {
    const date = getHolidayDateString(g, YEAR);
    const d = new Date(date + "T12:00:00");
    const dow = d.getDay();
    return { guide: g, date, dow, isWeekend: dow === 0 || dow === 6 };
  }).filter((x) => x.isWeekend);

  return (
    <ArticleLayout
      title={`Feriados no fim de semana em ${YEAR}`}
      subtitle="Quando a data coincide com sábado ou domingo"
      breadcrumbs={[{ title: `Feriados ${YEAR}`, href: `/feriados/${YEAR}` }]}
    >
      <p className="text-muted-foreground">
        Quando o feriado cai no sábado ou domingo, muitos trabalhadores não ganham folga
        extra na semana — a não ser que a convenção coletiva preveja compensação. Em {YEAR}:
      </p>
      {onWeekend.length === 0 ? (
        <p className="text-muted-foreground">Nenhum feriado nacional principal cai no fim de semana em {YEAR}.</p>
      ) : (
        <ul className="space-y-3">
          {onWeekend.map(({ guide, date, dow }) => (
            <li key={guide.slug} className="p-4 border rounded-lg">
              <strong>{guide.name}</strong> — {formatWeekdayBR(date)} (
              {dow === 0 ? "domingo" : "sábado"})
            </li>
          ))}
        </ul>
      )}
    </ArticleLayout>
  );
};

export default FimDeSemana;
