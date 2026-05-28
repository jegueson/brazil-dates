import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { getBridgeOpportunities } from "@/lib/holiday-utils";

const FeriadosProlongados = () => {
  const year = 2026;
  const bridges = getBridgeOpportunities(year);

  useSEO({
    title: `Feriados Prolongados ${year} — Emendas e Pontes no Brasil`,
    description: `Lista de feriados ${year} que permitem emenda para folga prolongada. Planeje viagens.`,
    canonical: `${SITE_URL}/feriados-prolongados-2026`,
  });

  return (
    <ArticleLayout
      title={`Feriados prolongados ${year}`}
      subtitle="Melhores oportunidades de emenda"
      breadcrumbs={[{ title: `Feriados ${year}`, href: `/feriados/${year}` }, { title: "Prolongados" }]}
    >
      <p className="text-muted-foreground">
        Quando o feriado cai na terça ou quinta, emendar um dia útil adjacente cria um
        feriado de 4 dias. Confira as melhores oportunidades em {year}.
      </p>
      <ul className="space-y-4">
        {bridges.map((b) => (
          <li key={b.holiday.id} className="p-4 border rounded-lg">
            <h3 className="font-bold">{b.holiday.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{b.tip}</p>
            <p className="text-sm mt-2">Emendar: {b.bridgeDays.join(", ")}</p>
          </li>
        ))}
      </ul>
      <p className="mt-6">
        <Link to={`/emendas-de-feriado/${year}`} className="text-primary hover:underline">
          Detector completo de emendas →
        </Link>
      </p>
    </ArticleLayout>
  );
};

export default FeriadosProlongados;
