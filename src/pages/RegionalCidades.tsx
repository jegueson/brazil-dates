import { Link, useParams } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { getStateBySlug } from "@/data/brazil-states";
import { BRAZIL_CITIES } from "@/data/brazil-cities";
import NotFound from "./NotFound";

const RegionalCidades = () => {
  const { state: stateSlug } = useParams<{ state: string }>();
  const state = stateSlug ? getStateBySlug(stateSlug) : undefined;

  if (!state) return <NotFound />;

  return <RegionalCidadesContent state={state} />;
};

const RegionalCidadesContent = ({
  state,
}: {
  state: NonNullable<ReturnType<typeof getStateBySlug>>;
}) => {
  const cities = BRAZIL_CITIES.filter((c) => c.state === state.name);
  const canonical = `${SITE_URL}/regional/${state.slug}/cidades`;

  useSEO({
    title: `Feriados nas Cidades de ${state.name} — Calendário Municipal`,
    description: `Lista de cidades de ${state.name} com feriados municipais, aniversários e padroeiros no calendário brasileiro.`,
    canonical,
  });

  return (
    <ArticleLayout
      title={`Cidades de ${state.name}`}
      subtitle={`${cities.length} cidades no calendário`}
      breadcrumbs={[
        { title: "Regionais", href: "/regionais" },
        { title: state.name, href: `/regional/${state.slug}` },
        { title: "Cidades" },
      ]}
    >
      <p className="text-muted-foreground leading-relaxed">
        Consulte feriados municipais e datas locais das principais cidades de {state.name}.
        Cada página reúne aniversário da cidade, padroeiro e feriados estaduais aplicáveis.
      </p>

      {cities.length === 0 ? (
        <p className="text-muted-foreground">
          Em breve adicionaremos mais cidades de {state.name}. Veja o{" "}
          <Link to={`/regional/${state.slug}`} className="text-primary hover:underline">
            calendário estadual
          </Link>
          .
        </p>
      ) : (
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 not-prose">
          {cities.map((city) => (
            <li key={city.slug}>
              <Link
                to={`/cidade/${city.slug}`}
                className="block p-4 border rounded-lg hover:border-primary transition-colors"
              >
                <strong>{city.name}</strong>
                <span className="block text-sm text-muted-foreground">{city.population} hab.</span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-8">
        <Link to="/cidades" className="text-primary hover:underline">
          Ver todas as 100 cidades →
        </Link>
      </p>
    </ArticleLayout>
  );
};

export default RegionalCidades;
