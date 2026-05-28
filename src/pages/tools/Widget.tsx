import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { brazilianHolidays } from "@/data/brazilian-holidays";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

const Widget = () => {
  useSEO({
    title: "Widget de Feriados — Incorpore no Seu Site",
    description:
      "Widget gratuito com os próximos feriados brasileiros. Copie o código iframe para seu blog ou site.",
    canonical: `${SITE_URL}/widget`,
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const upcoming = brazilianHolidays
    .filter((h) => {
      const d = parseISO(h.date);
      return d >= today && (h.type === "federal" || h.type === "religious");
    })
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 3);

  const embedCode = `<iframe src="${SITE_URL}/widget-embed" title="Próximos feriados brasileiros" width="320" height="200" frameborder="0" loading="lazy"></iframe>`;

  return (
    <ArticleLayout
      title="Widget de feriados"
      subtitle="Mostre os próximos feriados no seu site"
      breadcrumbs={[{ title: "Ferramentas" }, { title: "Widget" }]}
      showUpdatedAt={false}
    >
      <section className="not-prose p-4 border rounded-xl bg-card max-w-sm">
        <p className="text-sm font-semibold mb-3">Próximos feriados</p>
        <ul className="space-y-2 text-sm">
          {upcoming.map((h) => (
            <li key={h.id}>
              <strong>{format(parseISO(h.date), "dd/MM", { locale: ptBR })}</strong> — {h.name}
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted-foreground mt-3">
          <a href={SITE_URL} className="text-primary">
            calendario-feriados.com.br
          </a>
        </p>
      </section>
      <div className="mt-8">
        <h2 className="text-lg font-bold mb-2">Código para incorporar</h2>
        <pre className="p-4 bg-muted rounded-lg text-xs overflow-x-auto">{embedCode}</pre>
        <button
          type="button"
          className="mt-2 text-sm text-primary hover:underline"
          onClick={() => navigator.clipboard.writeText(embedCode)}
        >
          Copiar código
        </button>
      </div>
    </ArticleLayout>
  );
};

export default Widget;
