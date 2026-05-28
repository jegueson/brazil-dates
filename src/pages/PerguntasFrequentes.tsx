import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { FAQSection } from "@/components/content/FAQSection";
import { SchemaScript } from "@/components/content/SchemaScript";
import { FAQ_ENTRIES } from "@/data/faq-data";

const PerguntasFrequentes = () => {
  const canonical = `${SITE_URL}/perguntas-frequentes`;
  const faqItems = FAQ_ENTRIES.map((e) => ({
    question: e.question,
    answer: e.answer,
  }));

  useSEO({
    title: "Perguntas Frequentes sobre Feriados no Brasil — FAQ",
    description:
      "Respostas sobre feriados nacionais, regionais, bancários, Carnaval, datas móveis e planejamento de férias no Brasil.",
    canonical,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  });

  const categories = [...new Set(FAQ_ENTRIES.map((e) => e.category))];

  return (
    <>
      <SchemaScript
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }}
      />
      <ArticleLayout
        title="Perguntas Frequentes"
        subtitle="Tudo sobre feriados brasileiros em um só lugar"
        breadcrumbs={[{ title: "FAQ" }]}
      >
        <p className="text-muted-foreground leading-relaxed">
          Reunimos as dúvidas mais comuns sobre feriados nacionais, estaduais, trabalho,
          legislação e uso do Calendário Brasileiro. Conteúdo revisado pela nossa equipe
          editorial com base em fontes oficiais.
        </p>

        {categories.map((cat) => (
          <section key={cat}>
            <h2 className="text-xl font-bold mb-4 text-primary">{cat}</h2>
            <FAQSection
              items={FAQ_ENTRIES.filter((e) => e.category === cat).map((e) => ({
                question: e.question,
                answer: e.answer,
              }))}
              title=""
            />
          </section>
        ))}
      </ArticleLayout>
    </>
  );
};

export default PerguntasFrequentes;
