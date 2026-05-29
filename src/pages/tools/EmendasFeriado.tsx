import { useParams, Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { getBridgeOpportunities } from "@/lib/holiday-utils";
import NotFound from "../NotFound";

const EmendasFeriado = () => {
  const { year: yearParam } = useParams<{ year: string }>();
  const year = yearParam ? parseInt(yearParam, 10) : 2026;

  if (Number.isNaN(year) || year < 2020 || year > 2040) return <NotFound />;

  return <EmendasFeriadoContent year={year} />;
};

const EmendasFeriadoContent = ({ year }: { year: number }) => {
  const bridges = getBridgeOpportunities(year);

  useSEO({
    title: `Emendas de Feriado ${year} — Detector de Pontes`,
    description: `Veja quando emendar feriados em ${year} para folgas prolongadas no Brasil.`,
    canonical: `${SITE_URL}/emendas-de-feriado/${year}`,
  });

  return (
    <ArticleLayout
      title={`Emendas de feriado ${year}`}
      subtitle="Detector de pontes e folgas prolongadas"
      breadcrumbs={[
        { title: `Feriados ${year}`, href: `/feriados/${year}` },
        { title: "Emendas" },
      ]}
      showUpdatedAt={false}
    >
      {bridges.length === 0 ? (
        <p className="text-muted-foreground">Nenhuma emenda clássica detectada para feriados federais em {year}.</p>
      ) : (
        <ul className="space-y-4">
          {bridges.map((b) => (
            <li key={b.holiday.id} className="p-4 border rounded-lg bg-card">
              <h3 className="font-bold text-lg">{b.holiday.name}</h3>
              <p className="text-muted-foreground mt-2">{b.tip}</p>
              <p className="text-sm mt-2">
                Emendar: <strong>{b.bridgeDays.join(", ")}</strong>
              </p>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-8">
        <Link to={`/feriados-prolongados-${year}`} className="text-primary hover:underline">
          Ver página de feriados prolongados →
        </Link>
      </p>
    </ArticleLayout>
  );
};

export default EmendasFeriado;
