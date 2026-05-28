import { Link, useParams } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { getHolidayGuideBySlug } from "@/data/national-holiday-guides";
import { getOccurrenceTable } from "@/lib/holiday-dates";
import { formatDateBR, formatWeekdayBR } from "@/lib/holiday-utils";
import NotFound from "./NotFound";

const CURRENT_YEAR = new Date().getFullYear();

const QuandoE = () => {
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? getHolidayGuideBySlug(slug) : undefined;

  if (!guide) return <NotFound />;

  const occurrences = getOccurrenceTable(guide, CURRENT_YEAR, 2, 8);
  const canonical = `${SITE_URL}/quando-e/${guide.slug}`;

  useSEO({
    title: `Quando é ${guide.name} em ${CURRENT_YEAR}? Datas e Calendário`,
    description: `Descubra quando cai ${guide.name} em ${CURRENT_YEAR} e nos próximos anos. Tabela completa de datas.`,
    canonical,
  });

  return (
    <ArticleLayout
      title={`Quando é ${guide.name}?`}
      subtitle={`Datas de ${guide.name} em ${CURRENT_YEAR} e próximos anos`}
      breadcrumbs={[
        { title: guide.name, href: `/feriado/${guide.slug}` },
        { title: "Quando é" },
      ]}
    >
      <p className="text-lg text-muted-foreground">
        {guide.name} em {CURRENT_YEAR} e anos seguintes — consulte a tabela abaixo. Para
        história, tradições e FAQ, veja o{" "}
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
                <td className="p-3 font-medium">{row.year}</td>
                <td className="p-3">{formatDateBR(row.date)}</td>
                <td className="p-3">{formatWeekdayBR(row.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6">
        <Link
          to={`/quantos-dias-faltam/${guide.slug}`}
          className="text-primary hover:underline"
        >
          Quantos dias faltam para {guide.name}? →
        </Link>
      </p>
    </ArticleLayout>
  );
};

export default QuandoE;
