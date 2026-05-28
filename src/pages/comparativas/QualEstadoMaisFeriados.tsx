import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { BRAZIL_STATES } from "@/data/brazil-states";
import { getRegionalHolidaysByState } from "@/data/regional-holidays";
import { getFederalHolidaysForYear } from "@/lib/holiday-utils";

const YEAR = 2026;

const QualEstadoMaisFeriados = () => {
  useSEO({
    title: "Qual Estado Tem Mais Feriados no Brasil? Ranking 2026",
    description:
      "Ranking dos 27 estados brasileiros por quantidade de feriados regionais + nacionais. Compare e planeje.",
    canonical: `${SITE_URL}/qual-estado-tem-mais-feriados`,
  });

  const nationalCount = getFederalHolidaysForYear(YEAR).length;
  const ranking = BRAZIL_STATES.map((s) => ({
    state: s,
    regional: getRegionalHolidaysByState(s.name).length,
    total: nationalCount + getRegionalHolidaysByState(s.name).length,
  })).sort((a, b) => b.total - a.total);

  return (
    <ArticleLayout
      title="Qual estado tem mais feriados?"
      subtitle={`Ranking ${YEAR} — nacionais + regionais no nosso calendário`}
      breadcrumbs={[{ title: "Comparativos" }, { title: "Ranking estados" }]}
    >
      <p className="text-muted-foreground leading-relaxed">
        Todos os estados compartilham os {nationalCount} feriados nacionais de {YEAR}. A
        diferença está nos feriados estaduais e municipais cadastrados. Este ranking usa
        nossa base de feriados regionais documentados.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border rounded-lg">
          <thead>
            <tr className="bg-muted">
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Estado</th>
              <th className="p-3 text-left">Regionais</th>
              <th className="p-3 text-left">Total aprox.</th>
            </tr>
          </thead>
          <tbody>
            {ranking.map((row, i) => (
              <tr key={row.state.slug} className="border-t">
                <td className="p-3">{i + 1}</td>
                <td className="p-3">
                  <Link
                    to={`/regional/${row.state.slug}`}
                    className="text-primary hover:underline"
                  >
                    {row.state.name}
                  </Link>
                </td>
                <td className="p-3">{row.regional}</td>
                <td className="p-3 font-medium">{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ArticleLayout>
  );
};

export default QualEstadoMaisFeriados;
