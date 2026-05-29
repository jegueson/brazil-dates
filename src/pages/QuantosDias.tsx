import { Link, useParams } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { getHolidayGuideBySlug } from "@/data/national-holiday-guides";
import { getHolidayDateForYear } from "@/lib/holiday-dates";
import { daysUntil, formatDateBR, formatWeekdayBR } from "@/lib/holiday-utils";
import NotFound from "./NotFound";

const CURRENT_YEAR = new Date().getFullYear();

const QuantosDias = () => {
  const { slug, year: yearParam } = useParams<{ slug: string; year?: string }>();
  const guide = slug ? getHolidayGuideBySlug(slug) : undefined;

  if (!guide) return <NotFound />;

  const focusYear = yearParam ? parseInt(yearParam, 10) : CURRENT_YEAR;
  if (Number.isNaN(focusYear) || focusYear < 2020 || focusYear > 2035) return <NotFound />;

  return (
    <QuantosDiasContent guide={guide} focusYear={focusYear} yearParam={yearParam} />
  );
};

const QuantosDiasContent = ({
  guide,
  focusYear,
  yearParam,
}: {
  guide: NonNullable<ReturnType<typeof getHolidayGuideBySlug>>;
  focusYear: number;
  yearParam?: string;
}) => {
  const targetDate = getHolidayDateForYear(guide, focusYear);
  const remaining = daysUntil(targetDate);
  const canonical = yearParam
    ? `${SITE_URL}/quantos-dias-faltam/${guide.slug}/${focusYear}`
    : `${SITE_URL}/quantos-dias-faltam/${guide.slug}`;

  useSEO({
    title: yearParam
      ? `Quantos dias faltam para ${guide.name} em ${focusYear}?`
      : `Quantos dias faltam para ${guide.name}? Contagem regressiva`,
    description: `Faltam ${remaining > 0 ? remaining : 0} dias para ${guide.name}${yearParam ? ` em ${focusYear}` : ""}. Data: ${formatDateBR(targetDate)}.`,
    canonical,
  });

  return (
    <ArticleLayout
      title={
        yearParam
          ? `Quantos dias faltam para ${guide.name} em ${focusYear}?`
          : `Quantos dias faltam para ${guide.name}?`
      }
      subtitle="Contagem regressiva"
      breadcrumbs={[
        { title: guide.name, href: `/feriado/${guide.slug}` },
        { title: "Contagem", href: `/quantos-dias-faltam/${guide.slug}` },
        ...(yearParam ? [{ title: String(focusYear) }] : []),
      ]}
    >
      <div className="text-center py-12 rounded-xl border-2 border-primary/30 bg-primary/5 not-prose">
        <p className="text-6xl font-bold text-primary">{remaining > 0 ? remaining : 0}</p>
        <p className="text-xl mt-2 text-muted-foreground">
          {remaining === 1 ? "dia restante" : "dias restantes"}
        </p>
        <p className="mt-4 text-lg">
          {guide.name} em {focusYear}: <strong>{formatDateBR(targetDate)}</strong> (
          {formatWeekdayBR(targetDate)})
        </p>
      </div>

      <p className="text-muted-foreground leading-relaxed">
        Use esta contagem para planejar viagens, folgas ou celebrações. Saiba mais no{" "}
        <Link to={`/feriado/${guide.slug}`} className="text-primary hover:underline">
          guia completo
        </Link>{" "}
        ou em{" "}
        <Link to={`/quando-e/${guide.slug}/${focusYear}`} className="text-primary hover:underline">
          quando é {guide.name} em {focusYear}
        </Link>
        .
      </p>
    </ArticleLayout>
  );
};

export default QuantosDias;
