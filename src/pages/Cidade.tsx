import { Link, useParams } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SchemaScript } from "@/components/content/SchemaScript";
import { getCityBySlug } from "@/data/brazil-cities";
import { getRegionalHolidaysByState } from "@/data/regional-holidays";
import NotFound from "./NotFound";

const Cidade = () => {
  const { slug } = useParams<{ slug: string }>();
  const city = slug ? getCityBySlug(slug) : undefined;

  if (!city) return <NotFound />;

  const stateHolidays = getRegionalHolidaysByState(city.state);
  const canonical = `${SITE_URL}/cidade/${city.slug}`;

  useSEO({
    title: `Feriados em ${city.name} — Calendário e Datas Municipais`,
    description: `${city.description} Feriados municipais, estaduais e cultura local em ${city.name}.`,
    keywords: `feriados ${city.name.toLowerCase()}, calendario ${city.name.toLowerCase()}, feriados municipais`,
    canonical,
  });

  return (
    <>
      <SchemaScript
        data={{
          "@context": "https://schema.org",
          "@type": "Place",
          name: city.name,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: city.state,
          },
          description: city.culturalContent,
          url: canonical,
        }}
      />
      <ArticleLayout
        title={`Feriados em ${city.name}`}
        subtitle={`${city.state} · ${city.population} habitantes`}
        breadcrumbs={[
          { title: "Cidades", href: "/regionais" },
          { title: city.name },
        ]}
      >
        <p className="text-muted-foreground leading-relaxed">{city.description}</p>
        <p className="text-muted-foreground leading-relaxed">{city.culturalContent}</p>

        <section className="grid sm:grid-cols-2 gap-4 not-prose">
          <div className="p-4 rounded-lg border">
            <h3 className="font-semibold">Fundação</h3>
            <p className="text-muted-foreground">{city.foundationDate}</p>
          </div>
          {city.patronSaint && (
            <div className="p-4 rounded-lg border">
              <h3 className="font-semibold">Padroeiro(a)</h3>
              <p className="text-muted-foreground">{city.patronSaint}</p>
            </div>
          )}
        </section>

        {city.municipalHolidays.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Feriados municipais</h2>
            <ul className="space-y-3">
              {city.municipalHolidays.map((h) => (
                <li key={h.name} className="p-4 border rounded-lg">
                  <strong>{h.name}</strong> — {h.date}
                  <p className="text-muted-foreground text-sm mt-1">{h.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section>
          <h2 className="text-2xl font-bold mb-4">Feriados do estado ({city.state})</h2>
          <ul className="space-y-2 text-muted-foreground">
            {stateHolidays.slice(0, 8).map((h) => (
              <li key={h.id}>
                {h.name} — {h.date}
              </li>
            ))}
          </ul>
          <Link
            to={`/regional/${city.stateSlug}`}
            className="text-primary hover:underline mt-4 inline-block"
          >
            Ver todos os feriados de {city.state} →
          </Link>
        </section>
      </ArticleLayout>
    </>
  );
};

export default Cidade;
