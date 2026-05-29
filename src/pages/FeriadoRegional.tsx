import { Link, useParams } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SchemaScript } from "@/components/content/SchemaScript";
import { getRegionalHolidayById } from "@/data/regional-holidays";
import { stateNameToSlug } from "@/data/brazil-states";
import { BRAZIL_REGIONS } from "@/data/brazil-regions";
import { formatDateBR } from "@/lib/holiday-utils";
import NotFound from "./NotFound";

const FeriadoRegional = () => {
  const { id } = useParams<{ id: string }>();
  const holiday = id ? getRegionalHolidayById(id) : undefined;

  if (!holiday) return <NotFound />;

  return <FeriadoRegionalContent holiday={holiday} />;
};

const FeriadoRegionalContent = ({
  holiday,
}: {
  holiday: NonNullable<ReturnType<typeof getRegionalHolidayById>>;
}) => {
  const stateSlug = stateNameToSlug(holiday.state);
  const regionSlug =
    BRAZIL_REGIONS.find((r) => r.name === holiday.region)?.slug ??
    holiday.region.toLowerCase();
  const canonical = `${SITE_URL}/feriado-regional/${holiday.id}`;
  const dateLabel = formatDateBR(holiday.date);

  useSEO({
    title: `${holiday.name} — Feriado em ${holiday.state}`,
    description: `${holiday.description} Data: ${dateLabel}. Tradições e significado no calendário de ${holiday.state}.`,
    canonical,
  });

  return (
    <>
      <SchemaScript
        data={{
          "@context": "https://schema.org",
          "@type": "Event",
          name: holiday.name,
          description: holiday.description,
          startDate: holiday.date,
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            "@type": "Place",
            name: holiday.city ?? holiday.state,
            address: { "@type": "PostalAddress", addressRegion: holiday.state, addressCountry: "BR" },
          },
        }}
      />
      <ArticleLayout
        title={holiday.name}
        subtitle={`${holiday.type === "estadual" ? "Feriado estadual" : holiday.type === "municipal" ? "Feriado municipal" : "Celebração regional"} · ${holiday.state}`}
        breadcrumbs={[
          { title: "Regionais", href: "/regionais" },
          { title: holiday.state, href: `/regional/${stateSlug}` },
          { title: holiday.name },
        ]}
      >
        <p className="text-lg text-muted-foreground">
          Em <strong>{dateLabel}</strong>, {holiday.state}
          {holiday.city ? ` (${holiday.city})` : ""} celebra <strong>{holiday.name}</strong>.
        </p>

        <p className="leading-relaxed">{holiday.description}</p>

        <h2>Significado</h2>
        <p className="leading-relaxed">{holiday.significance}</p>

        {holiday.traditions.length > 0 && (
          <>
            <h2>Tradições</h2>
            <ul className="list-disc pl-6 space-y-2">
              {holiday.traditions.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </>
        )}

        {holiday.preparation && holiday.preparation.length > 0 && (
          <>
            <h2>Como participar</h2>
            <ul className="list-disc pl-6 space-y-2">
              {holiday.preparation.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </>
        )}

        <p className="mt-8 text-muted-foreground">
          Veja todos os feriados de{" "}
          <Link to={`/regional/${stateSlug}`} className="text-primary hover:underline">
            {holiday.state}
          </Link>{" "}
          ou o{" "}
          <Link to={`/regiao/${regionSlug}`} className="text-primary hover:underline">
            calendário da região {holiday.region}
          </Link>
          .
        </p>
      </ArticleLayout>
    </>
  );
};

export default FeriadoRegional;
