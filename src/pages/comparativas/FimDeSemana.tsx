import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { NATIONAL_HOLIDAY_GUIDES } from "@/data/national-holiday-guides";
import { getHolidayDateString } from "@/lib/holiday-dates";
import { formatWeekdayBR } from "@/lib/holiday-utils";

type FimDeSemanaProps = {
  year?: number;
};

const FimDeSemana = ({ year = 2026 }: FimDeSemanaProps) => {
  useSEO({
    title: `Feriados que Caem no Fim de Semana em ${year}`,
    description: `Lista de feriados nacionais ${year} que coincidem com sábado ou domingo e dicas de planejamento.`,
    canonical: `${SITE_URL}/feriado-cai-em-fim-de-semana-${year}`,
  });

  const onWeekend = NATIONAL_HOLIDAY_GUIDES.map((g) => {
    const date = getHolidayDateString(g, year);
    const d = new Date(date + "T12:00:00");
    const dow = d.getDay();
    return { guide: g, date, dow, isWeekend: dow === 0 || dow === 6 };
  }).filter((x) => x.isWeekend);

  return (
    <ArticleLayout
      title={`Feriados no fim de semana em ${year}`}
      subtitle="Quando a data coincide com sábado ou domingo"
      breadcrumbs={[{ title: `Feriados ${year}`, href: `/feriados/${year}` }]}
    >
      <p className="text-muted-foreground">
        Quando o feriado cai no sábado ou domingo, muitos trabalhadores não ganham folga
        extra na semana — a não ser que a convenção coletiva preveja compensação. Em {year}:
      </p>
      {onWeekend.length === 0 ? (
        <p className="text-muted-foreground">Nenhum feriado nacional principal cai no fim de semana em {year}.</p>
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
