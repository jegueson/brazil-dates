import { Link, useParams } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { getHolidayGuideBySlug } from "@/data/national-holiday-guides";
import { getHolidayDateForYear, getOccurrenceTable } from "@/lib/holiday-dates";
import { formatDateBR, formatWeekdayBR } from "@/lib/holiday-utils";
import NotFound from "./NotFound";

const CURRENT_YEAR = new Date().getFullYear();

const QuandoE = () => {
  const { slug, year: yearParam } = useParams<{ slug: string; year?: string }>();
  const guide = slug ? getHolidayGuideBySlug(slug) : undefined;

  if (!guide) return <NotFound />;

  const focusYear = yearParam ? parseInt(yearParam, 10) : CURRENT_YEAR;
  if (Number.isNaN(focusYear) || focusYear < 2020 || focusYear > 2035) return <NotFound />;

  return (
    <QuandoEContent guide={guide} focusYear={focusYear} yearParam={yearParam} />
  );
};

const QuandoEContent = ({
  guide,
  focusYear,
  yearParam,
}: {
  guide: NonNullable<ReturnType<typeof getHolidayGuideBySlug>>;
  focusYear: number;
  yearParam?: string;
}) => {
  const focusDate = getHolidayDateForYear(guide, focusYear);
  const occurrences = getOccurrenceTable(guide, focusYear, 2, 8);
  const canonical = yearParam
    ? `${SITE_URL}/quando-e/${guide.slug}/${focusYear}`
    : `${SITE_URL}/quando-e/${guide.slug}`;

  useSEO({
    title: yearParam
      ? `Quando é ${guide.name} em ${focusYear}? Data e dia da semana`
      : `Quando é ${guide.name} em ${CURRENT_YEAR}? Datas e Calendário`,
    description: yearParam
      ? `${guide.name} em ${focusYear} cai em ${formatDateBR(focusDate)} (${formatWeekdayBR(focusDate)}). Tabela de datas em outros anos.`
      : `Descubra quando cai ${guide.name} em ${CURRENT_YEAR} e nos próximos anos. Tabela completa de datas.`,
    canonical,
  });

  return (
    <ArticleLayout
      title={yearParam ? `Quando é ${guide.name} em ${focusYear}?` : `Quando é ${guide.name}?`}
      subtitle={
        yearParam
          ? `${formatDateBR(focusDate)} — ${formatWeekdayBR(focusDate)}`
          : `Datas de ${guide.name} em ${CURRENT_YEAR} e próximos anos`
      }
      breadcrumbs={[
        { title: guide.name, href: `/feriado/${guide.slug}` },
        { title: "Quando é", href: `/quando-e/${guide.slug}` },
        ...(yearParam ? [{ title: String(focusYear) }] : []),
      ]}
    >
      {yearParam && (
        <p className="text-lg font-medium">
          Em {focusYear}, <strong>{guide.name}</strong> é em{" "}
          <strong>{formatDateBR(focusDate)}</strong> ({formatWeekdayBR(focusDate)}).
        </p>
      )}

      <p className="text-lg text-muted-foreground">
        {guide.name} — consulte a tabela abaixo. Para história, tradições e FAQ, veja o{" "}
        <Link to={`/feriado/${guide.slug}`} className="text-primary hover:underline">
          guia completo de {guide.name}
        </Link>
        .
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead>
            <tr className="bg-muted">
              <th className="p-3 text-left">Ano</th>
              <th className="p-3 text-left">Data</th>
              <th className="p-3 text-left">Dia da semana</th>
            </tr>
          </thead>
          <tbody>
            {occurrences.map((row) => (
              <tr key={row.year} className="border-t border-border">
                <td className="p-3 font-medium">
                  <Link to={`/quando-e/${guide.slug}/${row.year}`} className="text-primary hover:underline">
                    {row.year}
                  </Link>
                </td>
                <td className="p-3">{formatDateBR(row.date)}</td>
                <td className="p-3">{formatWeekdayBR(row.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 flex flex-wrap gap-4">
        <Link
          to={`/quantos-dias-faltam/${guide.slug}${yearParam ? `/${focusYear}` : ""}`}
          className="text-primary hover:underline"
        >
          Quantos dias faltam para {guide.name}? →
        </Link>
        {!yearParam && (
          <Link to={`/quando-e/${guide.slug}/${CURRENT_YEAR + 1}`} className="text-primary hover:underline">
            Ver {guide.name} em {CURRENT_YEAR + 1} →
          </Link>
        )}
      </p>
    </ArticleLayout>
  );
};

export default QuandoE;
