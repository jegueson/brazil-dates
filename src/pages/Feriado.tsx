import { Link, useParams } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { getHolidayGuideBySlug } from "@/data/national-holiday-guides";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { FAQSection } from "@/components/content/FAQSection";
import { SourcesBlock } from "@/components/content/SourcesBlock";
import { SchemaScript } from "@/components/content/SchemaScript";
import {
  daysUntil,
  formatDateBR,
  formatWeekdayBR,
} from "@/lib/holiday-utils";
import {
  getHolidayDateForYear,
  getOccurrenceTable,
} from "@/lib/holiday-dates";
import NotFound from "./NotFound";

const CURRENT_YEAR = new Date().getFullYear();

const Feriado = () => {
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? getHolidayGuideBySlug(slug) : undefined;

  if (!guide) return <NotFound />;

  return <FeriadoContent guide={guide} />;
};

const FeriadoContent = ({
  guide,
}: {
  guide: NonNullable<ReturnType<typeof getHolidayGuideBySlug>>;
}) => {
  const nextDate = getHolidayDateForYear(guide, CURRENT_YEAR);
  let displayDate = nextDate;
  if (displayDate < new Date()) {
    displayDate = getHolidayDateForYear(guide, CURRENT_YEAR + 1);
  }
  const dateStr = displayDate.toISOString().slice(0, 10);
  const remaining = daysUntil(displayDate);
  const occurrences = getOccurrenceTable(guide, CURRENT_YEAR);

  const canonical = `${SITE_URL}/feriado/${guide.slug}`;

  useSEO({
    title: `${guide.name} ${CURRENT_YEAR} — Data, História e Tradições | Calendário Brasileiro`,
    description: `${guide.summary[0]} Confira datas, origem, tradições regionais e FAQ sobre ${guide.name}.`,
    keywords: `${guide.name.toLowerCase()}, feriado ${guide.name.toLowerCase()} ${CURRENT_YEAR}, data ${guide.name.toLowerCase()}, tradições brasileiras`,
    canonical,
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Event",
          name: guide.name,
          startDate: dateStr,
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            "@type": "Country",
            name: "Brasil",
          },
          description: guide.summary.join(" "),
          url: canonical,
        },
        {
          "@type": "FAQPage",
          mainEntity: guide.faq.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        },
      ],
    },
  });

  return (
    <>
      <SchemaScript
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Event",
            name: guide.name,
            startDate: dateStr,
            location: { "@type": "Country", name: "Brasil" },
            url: canonical,
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: guide.faq.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          },
        ]}
      />
      <ArticleLayout
        title={`${guide.name} ${CURRENT_YEAR}`}
        subtitle="História, tradições e calendário completo"
        breadcrumbs={[
          { title: "Feriados", href: `/feriados/${CURRENT_YEAR}` },
          { title: guide.name },
        ]}
      >
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 not-prose">
          <p className="text-lg font-semibold text-primary">Próxima ocorrência</p>
          <p className="text-2xl font-bold mt-1">
            {formatDateBR(displayDate)} — {formatWeekdayBR(displayDate)}
          </p>
          <p className="text-muted-foreground mt-2">
            {remaining > 0
              ? `Faltam ${remaining} dias para ${guide.name}.`
              : remaining === 0
                ? "É hoje!"
                : `A próxima data já passou; consulte a tabela abaixo.`}
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link
              to={`/quando-e/${guide.slug}`}
              className="text-sm text-primary hover:underline"
            >
              Quando é {guide.name}?
            </Link>
            <Link
              to={`/quantos-dias-faltam/${guide.slug}`}
              className="text-sm text-primary hover:underline"
            >
              Contagem regressiva
            </Link>
          </div>
        </div>

        {guide.summary.map((p, i) => (
          <p key={i} className="text-muted-foreground leading-relaxed text-lg">
            {p}
          </p>
        ))}

        <section>
          <h2 className="text-2xl font-bold mb-4">Origem histórica</h2>
          <p className="text-muted-foreground leading-relaxed">{guide.historicalOrigin}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Significado cultural e religioso</h2>
          <p className="text-muted-foreground leading-relaxed">{guide.culturalSignificance}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Como é celebrado em cada região</h2>
          <div className="space-y-4">
            {Object.entries(guide.regionalCelebration).map(([region, text]) => (
              <div
                key={region}
                className="p-4 rounded-lg border border-border bg-card/50"
              >
                <h3 className="font-semibold text-primary">{region}</h3>
                <p className="text-muted-foreground mt-2 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {guide.foods.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Comidas típicas</h2>
            <ul className="space-y-3">
              {guide.foods.map((food, i) => (
                <li key={i} className="border-l-4 border-accent pl-4">
                  <strong>{food.name}</strong>
                  <p className="text-muted-foreground">{food.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section>
          <h2 className="text-2xl font-bold mb-4">Músicas, danças e símbolos</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            {guide.musicAndSymbols.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Datas em anos anteriores e futuros</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg">
              <thead>
                <tr className="bg-muted">
                  <th className="p-3 text-left">Ano</th>
                  <th className="p-3 text-left">Data</th>
                  <th className="p-3 text-left">Dia da semana</th>
                </tr>
              </thead>
              <tbody>
                {occurrences.map((row) => (
                  <tr key={row.year} className="border-t border-border">
                    <td className="p-3 font-medium">{row.year}</td>
                    <td className="p-3">{formatDateBR(row.date)}</td>
                    <td className="p-3">{formatWeekdayBR(row.date)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Status legal: bancos, comércio e escolas</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <strong>Feriado nacional:</strong>{" "}
              {guide.legalStatus.national ? "Sim" : "Não (varia por município)"}
            </li>
            <li>
              <strong>Bancos:</strong> {guide.legalStatus.banks}
            </li>
            <li>
              <strong>Comércio:</strong> {guide.legalStatus.commerce}
            </li>
            <li>
              <strong>Escolas:</strong> {guide.legalStatus.schools}
            </li>
          </ul>
        </section>

        <FAQSection items={guide.faq} />

        <section>
          <h2 className="text-2xl font-bold mb-4">Leia também</h2>
          <ul className="grid sm:grid-cols-2 gap-2">
            {guide.relatedSlugs.map((related) => {
              const relatedGuide = getHolidayGuideBySlug(related);
              if (!relatedGuide) return null;
              return (
                <li key={related}>
                  <Link
                    to={`/feriado/${related}`}
                    className="text-primary hover:underline"
                  >
                    {relatedGuide.name}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link to={`/feriados/${CURRENT_YEAR}`} className="text-primary hover:underline">
                Todos os feriados de {CURRENT_YEAR}
              </Link>
            </li>
            <li>
              <Link to="/regionais" className="text-primary hover:underline">
                Feriados regionais por estado
              </Link>
            </li>
          </ul>
        </section>

        <SourcesBlock sources={guide.sources} />
      </ArticleLayout>
    </>
  );
};

export default Feriado;
