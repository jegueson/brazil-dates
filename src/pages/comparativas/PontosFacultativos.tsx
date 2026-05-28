import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";

const PontosFacultativos = () => {
  useSEO({
    title: "Pontos Facultativos 2026 — O Que São e Quando Ocorrem",
    description:
      "Entenda pontos facultativos no Brasil: Carnaval, Véspera de Natal e decretos federais em 2026.",
    canonical: `${SITE_URL}/pontos-facultativos-2026`,
  });

  return (
    <ArticleLayout
      title="Pontos facultativos 2026"
      subtitle="Datas em que o trabalho pode ser suspenso sem feriado nacional"
      breadcrumbs={[{ title: "Pontos facultativos" }]}
    >
      <section className="space-y-6 text-muted-foreground leading-relaxed">
        <p>
          Ponto facultativo é a dispensa de expediente em órgãos públicos federais e, por
          extensão, adotada por muitas empresas — sem ser feriado nacional obrigatório para
          todo o comércio.
        </p>
        <h2 className="text-xl font-bold text-foreground">Exemplos comuns em 2026</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Carnaval:</strong> segunda e terça de Carnaval costumam ser ponto
            facultativo federal; municípios podem ampliar.
          </li>
          <li>
            <strong>Véspera de Natal (24/12):</strong> frequentemente ponto facultativo à
            tarde ou dia inteiro.
          </li>
          <li>
            <strong>Véspera de Ano Novo (31/12):</strong> idem.
          </li>
          <li>
            <strong>Corpus Christi:</strong> em alguns estados e municípios, além do
            feriado nacional.
          </li>
        </ul>
        <p>
          Consulte sempre o decreto do ano e a convenção coletiva da sua categoria
          profissional.
        </p>
      </section>
    </ArticleLayout>
  );
};

export default PontosFacultativos;
