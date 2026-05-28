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
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? getHolidayGuideBySlug(slug) : undefined;

  if (!guide) return <NotFound />;

  let nextDate = getHolidayDateForYear(guide, CURRENT_YEAR);
  if (nextDate < new Date()) {
    nextDate = getHolidayDateForYear(guide, CURRENT_YEAR + 1);
  }
  const remaining = daysUntil(nextDate);
  const canonical = `${SITE_URL}/quantos-dias-faltam/${guide.slug}`;

  useSEO({
    title: `Quantos dias faltam para ${guide.name}? Contagem regressiva`,
    description: `Faltam ${remaining} dias para ${guide.name}. Data: ${formatDateBR(nextDate)}.`,
    canonical,
  });

  return (
    <ArticleLayout
      title={`Quantos dias faltam para ${guide.name}?`}
      subtitle="Contagem regressiva em tempo real"
      breadcrumbs={[
        { title: guide.name, href: `/feriado/${guide.slug}` },
        { title: "Contagem" },
      ]}
    >
      <div className="text-center py-12 rounded-xl border-2 border-primary/30 bg-primary/5 not-prose">
        <p className="text-6xl font-bold text-primary">{remaining > 0 ? remaining : 0}</p>
        <p className="text-xl mt-2 text-muted-foreground">
          {remaining === 1 ? "dia restante" : "dias restantes"}
        </p>
        <p className="mt-4 text-lg">
          Próximo {guide.name}: <strong>{formatDateBR(nextDate)}</strong> (
          {formatWeekdayBR(nextDate)})
        </p>
      </div>

      <p className="text-muted-foreground leading-relaxed">
        Use esta contagem para planejar viagens, folgas ou celebrações. O {guide.name} é
        uma das datas mais buscadas no calendário brasileiro. Saiba mais no{" "}
        <Link to={`/feriado/${guide.slug}`} className="text-primary hover:underline">
          guia completo
        </Link>
        .
      </p>
    </ArticleLayout>
  );
};

export default QuantosDias;
