import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";

const LinhaEditorial = () => {
  useSEO({
    title: "Linha Editorial — Calendário Brasileiro",
    description:
      "Critérios de publicação, fontes e independência editorial do Calendário Brasileiro.",
    canonical: `${SITE_URL}/linha-editorial`,
  });

  return (
    <ArticleLayout
      title="Linha Editorial"
      subtitle="Como produzimos e revisamos conteúdo"
      breadcrumbs={[{ title: "Linha editorial" }]}
    >
      <section className="space-y-6 text-muted-foreground leading-relaxed">
        <p>
          O Calendário Brasileiro é um projeto editorial independente focado em feriados,
          datas comemorativas e cultura brasileira. Nosso objetivo é oferecer informação
          precisa, útil e culturalmente relevante — não apenas listas de datas.
        </p>
        <h2 className="text-xl font-bold text-foreground">O que publicamos</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Guias completos sobre feriados nacionais (história, tradições, FAQ).</li>
          <li>Calendários por ano, mês, estado e cidade.</li>
          <li>Ferramentas práticas (dias úteis, exportação iCal, planejador de férias).</li>
          <li>Artigos de blog sobre celebrações sazonais.</li>
        </ul>
        <h2 className="text-xl font-bold text-foreground">O que não fazemos</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Não copiamos conteúdo de outros sites sem atribuição.</li>
          <li>Não prometemos assessoria jurídica ou trabalhista — consulte um profissional.</li>
          <li>Não aceitamos pagamento por alterar datas oficiais ou informações legais.</li>
        </ul>
        <h2 className="text-xl font-bold text-foreground">Atualização</h2>
        <p>
          Páginas de feriados e calendários anuais são revisadas no mínimo uma vez por ano,
          antes do início do ano civil. Mudanças legislativas geram atualização imediata.
        </p>
      </section>
    </ArticleLayout>
  );
};

export default LinhaEditorial;
