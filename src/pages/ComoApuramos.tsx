import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SourcesBlock } from "@/components/content/SourcesBlock";

const ComoApuramos = () => {
  useSEO({
    title: "Como Apuramos as Datas dos Feriados — Metodologia",
    description:
      "Metodologia do Calendário Brasileiro: fontes legais, cálculo de datas móveis e revisão editorial.",
    canonical: `${SITE_URL}/como-apuramos-as-datas`,
  });

  return (
    <ArticleLayout
      title="Como Apuramos as Datas"
      subtitle="Metodologia e fontes oficiais"
      breadcrumbs={[{ title: "Como apuramos as datas" }]}
    >
      <section className="space-y-6 text-muted-foreground leading-relaxed">
        <p>
          Cada data publicada no Calendário Brasileiro passa por verificação cruzada entre
          legislação federal, calendários oficiais e algoritmos para feriados móveis.
        </p>
        <h2 className="text-xl font-bold text-foreground">Feriados fixos</h2>
        <p>
          Datas como 7 de setembro (Independência) e 25 de dezembro (Natal) seguem a Lei nº
          662/1949 e leis complementares. Consultamos o site do Planalto e publicamos a
          referência legal em cada guia.
        </p>
        <h2 className="text-xl font-bold text-foreground">Feriados móveis</h2>
        <p>
          Sexta-feira Santa, Corpus Christi e Carnaval dependem da data da Páscoa. Usamos o
          algoritmo computus (calendário gregoriano) para calcular a Páscoa e derivar as
          demais datas. Os resultados são conferidos com calendários do CNBB e órgãos
          oficiais.
        </p>
        <h2 className="text-xl font-bold text-foreground">Feriados regionais</h2>
        <p>
          Feriados estaduais e municipais são levantados por legislação local, sites de
          governos estaduais e prefeituras. Quando há divergência, priorizamos a lei
          estadual ou municipal mais recente.
        </p>
        <h2 className="text-xl font-bold text-foreground">Revisão</h2>
        <p>
          Conteúdo editorial é revisado por humanos antes da publicação. A data de última
          revisão aparece no topo de cada artigo.
        </p>
      </section>
      <SourcesBlock
        sources={[
          {
            title: "Lei nº 662/1949 — Feriados nacionais",
            url: "https://www.planalto.gov.br/ccivil_03/leis/l662.htm",
          },
          { title: "IBGE", url: "https://www.ibge.gov.br" },
          { title: "CNBB — Calendário litúrgico", url: "https://www.cnbb.org.br" },
        ]}
      />
    </ArticleLayout>
  );
};

export default ComoApuramos;
