import { Link, useParams } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { MONTH_NAMES, monthSlugToNumber } from "@/lib/holiday-utils";
import { NATIONAL_HOLIDAY_GUIDES } from "@/data/national-holiday-guides";
import { getHolidayDateString } from "@/lib/holiday-dates";
import { formatDateBR } from "@/lib/holiday-utils";
import { brazilianHolidays } from "@/data/brazilian-holidays";
import NotFound from "./NotFound";

const FeriadosMes = () => {
  const { year: yearParam, month: monthParam } = useParams<{
    year: string;
    month: string;
  }>();
  const year = yearParam ? parseInt(yearParam, 10) : NaN;
  const monthNum = monthParam ? monthSlugToNumber(monthParam) : null;

  if (
    !yearParam ||
    !monthParam ||
    Number.isNaN(year) ||
    monthNum === null ||
    year < 2020 ||
    year > 2040
  ) {
    return <NotFound />;
  }

  return (
    <FeriadosMesContent year={year} monthNum={monthNum} monthParam={monthParam} />
  );
};

const FeriadosMesContent = ({
  year,
  monthNum,
  monthParam,
}: {
  year: number;
  monthNum: number;
  monthParam: string;
}) => {
  const monthName = MONTH_NAMES[monthParam as keyof typeof MONTH_NAMES];
  const canonical = `${SITE_URL}/feriados/${year}/${monthParam}`;

  const nationalInMonth = NATIONAL_HOLIDAY_GUIDES.filter((g) => {
    const d = getHolidayDateString(g, year);
    return parseInt(d.slice(5, 7), 10) === monthNum;
  }).map((g) => ({
    guide: g,
    date: getHolidayDateString(g, year),
  }));

  const otherInMonth = brazilianHolidays.filter((h) => {
    if (!h.date.startsWith(String(year))) return false;
    return parseInt(h.date.slice(5, 7), 10) === monthNum;
  });

  useSEO({
    title: `Feriados de ${monthName} ${year} — Calendário Brasileiro`,
    description: `Todos os feriados e datas comemorativas de ${monthName} de ${year} no Brasil.`,
    keywords: `feriados ${monthName.toLowerCase()} ${year}, calendario ${monthName} ${year}`,
    canonical,
  });

  return (
    <ArticleLayout
      title={`Feriados de ${monthName} ${year}`}
      subtitle="Datas nacionais e comemorativas do mês"
      breadcrumbs={[
        { title: `Feriados ${year}`, href: `/feriados/${year}` },
        { title: monthName },
      ]}
    >
      <p className="text-muted-foreground leading-relaxed">
        Em {monthName} de {year}, o Brasil celebra feriados nacionais e diversas datas
        comemorativas. Confira abaixo o calendário do mês e acesse guias completos sobre
        cada data.
      </p>

      {nationalInMonth.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4">Feriados nacionais</h2>
          <ul className="space-y-3">
            {nationalInMonth.map(({ guide, date }) => (
              <li
                key={guide.slug}
                className="flex flex-wrap justify-between gap-2 p-4 border rounded-lg"
              >
                <span>
                  <strong>{formatDateBR(date)}</strong> — {guide.name}
                </span>
                <Link
                  to={`/feriado/${guide.slug}`}
                  className="text-primary hover:underline text-sm"
                >
                  Guia completo
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {otherInMonth.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-4">Outras datas comemorativas</h2>
          <ul className="space-y-2 text-muted-foreground">
            {otherInMonth.slice(0, 20).map((h) => (
              <li key={h.id}>
                {formatDateBR(h.date)} — {h.name}
              </li>
            ))}
          </ul>
        </section>
      )}

      <p>
        <Link to={`/feriados/${year}`} className="text-primary hover:underline">
          ← Voltar ao calendário de {year}
        </Link>
      </p>
    </ArticleLayout>
  );
};

export default FeriadosMes;
