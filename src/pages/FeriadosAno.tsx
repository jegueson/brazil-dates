import { Link, useParams } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SchemaScript } from "@/components/content/SchemaScript";
import {
  getFederalHolidaysForYear,
  formatDateBR,
  formatWeekdayBR,
  getBridgeOpportunities,
} from "@/lib/holiday-utils";
import { NATIONAL_HOLIDAY_GUIDES } from "@/data/national-holiday-guides";
import { getHolidayDateString } from "@/lib/holiday-dates";
import NotFound from "./NotFound";

const FeriadosAno = () => {
  const { year: yearParam } = useParams<{ year: string }>();
  const year = yearParam ? parseInt(yearParam, 10) : NaN;

  if (!yearParam || Number.isNaN(year) || year < 2020 || year > 2040) {
    return <NotFound />;
  }

  return <FeriadosAnoContent year={year} />;
};

const FeriadosAnoContent = ({ year }: { year: number }) => {
  const federal = getFederalHolidaysForYear(year);
  const bridges = getBridgeOpportunities(year);
  const canonical = `${SITE_URL}/feriados/${year}`;

  useSEO({
    title: `Feriados ${year} no Brasil — Calendário Completo Nacional`,
    description: `Lista completa dos feriados nacionais ${year} no Brasil. Datas, emendas possíveis e links para cada celebração.`,
    keywords: `feriados ${year}, calendario ${year}, feriados nacionais brasil ${year}`,
    canonical,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `Feriados nacionais ${year}`,
      numberOfItems: federal.length,
      itemListElement: federal.map((h, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: h.name,
        url: `${SITE_URL}/feriado/${h.id.split("-")[0]}`,
      })),
    },
  });

  const guideRows = NATIONAL_HOLIDAY_GUIDES.map((g) => ({
    guide: g,
    date: getHolidayDateString(g, year),
  })).sort((a, b) => a.date.localeCompare(b.date));

  return (
    <>
      <SchemaScript
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `Feriados ${year}`,
          itemListElement: guideRows.map((row, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: row.guide.name,
            url: `${SITE_URL}/feriado/${row.guide.slug}`,
          })),
        }}
      />
      <ArticleLayout
        title={`Feriados ${year} no Brasil`}
        subtitle="Calendário nacional completo com datas e dicas de emenda"
        breadcrumbs={[{ title: `Feriados ${year}` }]}
      >
        <p className="text-lg text-muted-foreground leading-relaxed">
          O calendário de feriados nacionais de {year} reúne todas as datas fixas e móveis
          previstas em lei federal. Use esta página para planejar viagens, folgas e eventos.
          Para feriados estaduais e municipais, consulte também nossa seção{" "}
          <Link to="/regionais" className="text-primary hover:underline">
            feriados regionais
          </Link>
          .
        </p>

        <section>
          <h2 className="text-2xl font-bold mb-4">Feriados nacionais em {year}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg">
              <thead>
                <tr className="bg-muted">
                  <th className="p-3 text-left">Data</th>
                  <th className="p-3 text-left">Feriado</th>
                  <th className="p-3 text-left">Dia</th>
                  <th className="p-3 text-left">Detalhes</th>
                </tr>
              </thead>
              <tbody>
                {guideRows.map(({ guide, date }) => (
                  <tr key={guide.slug} className="border-t border-border">
                    <td className="p-3 whitespace-nowrap">{formatDateBR(date)}</td>
                    <td className="p-3 font-medium">{guide.name}</td>
                    <td className="p-3">{formatWeekdayBR(date)}</td>
                    <td className="p-3">
                      <Link
                        to={`/feriado/${guide.slug}`}
                        className="text-primary hover:underline"
                      >
                        Ver guia completo
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {bridges.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Oportunidades de emenda em {year}</h2>
            <ul className="space-y-3">
              {bridges.map((b) => (
                <li
                  key={b.holiday.id}
                  className="p-4 rounded-lg border border-border bg-card/50"
                >
                  <strong>{b.holiday.name}</strong> — {b.tip}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              <Link
                to={`/emendas-de-feriado/${year}`}
                className="text-primary hover:underline"
              >
                Ver detector completo de pontes →
              </Link>
            </p>
          </section>
        )}

        <section>
          <h2 className="text-2xl font-bold mb-4">Feriados por mês</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "janeiro",
              "fevereiro",
              "marco",
              "abril",
              "maio",
              "junho",
              "julho",
              "agosto",
              "setembro",
              "outubro",
              "novembro",
              "dezembro",
            ].map((m) => (
              <Link
                key={m}
                to={`/feriados/${year}/${m}`}
                className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm hover:bg-primary/20"
              >
                {m.charAt(0).toUpperCase() + m.slice(1)}
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Outros anos</h2>
          <div className="flex gap-4">
            {[year - 1, year + 1, year + 2].map(
              (y) =>
                y >= 2025 &&
                y <= 2028 && (
                  <Link
                    key={y}
                    to={`/feriados/${y}`}
                    className="text-primary hover:underline"
                  >
                    Feriados {y}
                  </Link>
                )
            )}
          </div>
        </section>
      </ArticleLayout>
    </>
  );
};

export default FeriadosAno;
