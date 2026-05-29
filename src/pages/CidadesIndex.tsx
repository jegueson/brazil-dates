import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { BRAZIL_CITIES } from "@/data/brazil-cities";
import { BRAZIL_STATES } from "@/data/brazil-states";

const CidadesIndex = () => {
  useSEO({
    title: "Feriados por Cidade — 100 Maiores Cidades do Brasil",
    description:
      "Calendário de feriados municipais, aniversários de cidades e padroeiros nas 100 maiores cidades brasileiras.",
    canonical: `${SITE_URL}/cidades`,
  });

  const byState = BRAZIL_STATES.map((state) => ({
    state,
    cities: BRAZIL_CITIES.filter((c) => c.state === state.name),
  })).filter((g) => g.cities.length > 0);

  return (
    <ArticleLayout
      title="Feriados por cidade"
      subtitle={`${BRAZIL_CITIES.length} cidades com calendário local`}
      breadcrumbs={[{ title: "Cidades" }]}
    >
      <p className="text-lg text-muted-foreground leading-relaxed">
        Além dos feriados nacionais, cada município pode ter aniversário da cidade, dia do padroeiro e
        pontos facultativos locais. Selecione sua cidade para ver datas, tradições e feriados
        estaduais aplicáveis.
      </p>

      <div className="space-y-10 not-prose">
        {byState.map(({ state, cities }) => (
          <section key={state.slug}>
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              <span>{state.flag}</span>
              <Link to={`/regional/${state.slug}`} className="hover:text-primary">
                {state.name}
              </Link>
            </h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link to={`/cidade/${city.slug}`} className="text-primary hover:underline">
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </ArticleLayout>
  );
};

export default CidadesIndex;
