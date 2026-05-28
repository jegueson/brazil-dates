import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";

const FeriadoBancario = () => {
  useSEO({
    title: "Feriado Bancário vs Feriado Nacional — Diferenças",
    description:
      "Entenda a diferença entre feriado nacional, feriado bancário e ponto facultativo no Brasil.",
    canonical: `${SITE_URL}/feriado-bancario-vs-feriado-nacional`,
  });

  return (
    <ArticleLayout
      title="Feriado bancário vs feriado nacional"
      subtitle="Quando bancos fecham e o que diz a lei"
      breadcrumbs={[{ title: "Comparativos" }]}
    >
      <section className="space-y-6 text-muted-foreground leading-relaxed">
        <p>
          No Brasil, todo feriado nacional é feriado bancário: agências do Banco Central e
          instituições financeiras não funcionam. Nem todo dia sem expediente bancário é
          feriado nacional (ex.: alguns pontos facultativos).
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border rounded-lg">
            <thead>
              <tr className="bg-muted">
                <th className="p-3 text-left">Tipo</th>
                <th className="p-3 text-left">Bancos</th>
                <th className="p-3 text-left">Comércio</th>
                <th className="p-3 text-left">Base legal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3 font-medium">Feriado nacional</td>
                <td className="p-3">Fechado</td>
                <td className="p-3">Geralmente fechado</td>
                <td className="p-3">Lei 662/1949 e outras</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-medium">Ponto facultativo</td>
                <td className="p-3">Pode fechar</td>
                <td className="p-3">Pode abrir</td>
                <td className="p-3">Decreto federal anual</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-medium">Feriado municipal</td>
                <td className="p-3">Varia</td>
                <td className="p-3">Varia</td>
                <td className="p-3">Lei municipal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default FeriadoBancario;
