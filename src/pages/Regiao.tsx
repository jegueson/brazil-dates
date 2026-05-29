import { Link, useParams } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { getRegionBySlug } from "@/data/brazil-regions";
import { BRAZIL_STATES } from "@/data/brazil-states";
import { getRegionalHolidaysByRegion } from "@/data/regional-holidays";
import NotFound from "./NotFound";

const Regiao = () => {
  const { slug } = useParams<{ slug: string }>();
  const region = slug ? getRegionBySlug(slug) : undefined;

  if (!region) return <NotFound />;

  return <RegiaoContent region={region} />;
};

const RegiaoContent = ({
  region,
}: {
  region: NonNullable<ReturnType<typeof getRegionBySlug>>;
}) => {
  const states = BRAZIL_STATES.filter((s) => region.states.includes(s.name));
  const holidays = getRegionalHolidaysByRegion(region.name);
  const canonical = `${SITE_URL}/regiao/${region.slug}`;

  useSEO({
    title: `Feriados na Região ${region.name} — Calendário Completo`,
    description: `${region.description} Consulte feriados estaduais e municipais dos estados do ${region.name}.`,
    canonical,
  });

  return (
    <ArticleLayout
      title={`Feriados na região ${region.name}`}
      subtitle={`${states.length} estados · calendário regional`}
      breadcrumbs={[{ title: "Regionais", href: "/regionais" }, { title: region.name }]}
    >
      <p className="text-lg text-muted-foreground leading-relaxed">{region.culturalContent}</p>

      <h2>Estados do {region.name}</h2>
      <ul className="grid sm:grid-cols-2 gap-3 not-prose">
        {states.map((s) => (
          <li key={s.slug}>
            <Link
              to={`/regional/${s.slug}`}
              className="block p-4 border rounded-lg hover:border-primary transition-colors"
            >
              <span className="text-2xl mr-2">{s.flag}</span>
              <strong>{s.name}</strong>
              <span className="block text-sm text-muted-foreground">Capital: {s.capital}</span>
            </Link>
          </li>
        ))}
      </ul>

      {holidays.length > 0 && (
        <>
          <h2>Feriados e celebrações regionais</h2>
          <ul className="space-y-3">
            {holidays.map((h) => (
              <li key={h.id}>
                <Link to={`/feriado-regional/${h.id}`} className="text-primary hover:underline font-medium">
                  {h.name}
                </Link>
                <span className="text-muted-foreground"> — {h.state}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      <p className="mt-8">
        <Link to="/feriados/2026" className="text-primary hover:underline">
          Calendário nacional 2026 →
        </Link>
      </p>
    </ArticleLayout>
  );
};

export default Regiao;
