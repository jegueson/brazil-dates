import { useSEO } from "@/hooks/useSEO";
import { SITE_URL, EDITORIAL, LEGAL_ENTITY } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";

const Equipe = () => {
  useSEO({
    title: "Nossa Equipe — Calendário Brasileiro",
    description:
      "Conheça quem pesquisa, escreve e mantém o Calendário Brasileiro. Transparência editorial para você confiar nas datas.",
    canonical: `${SITE_URL}/equipe`,
  });

  return (
    <ArticleLayout
      title="Nossa Equipe"
      subtitle="Quem faz o Calendário Brasileiro"
      breadcrumbs={[{ title: "Equipe" }]}
    >
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-6 items-start p-6 rounded-xl border border-border bg-card">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl text-white font-bold shrink-0">
            GC
          </div>
          <div>
            <h2 className="text-xl font-bold">{EDITORIAL.authorName}</h2>
            <p className="text-primary font-medium">{EDITORIAL.authorRole}</p>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              Responsável pela pesquisa de feriados nacionais e regionais, revisão de
              conteúdo cultural e manutenção do calendário. O projeto nasceu da necessidade
              de reunir em um só lugar informações confiáveis sobre as celebrações
              brasileiras, com fontes citadas e atualização periódica.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Contato:{" "}
              <a
                href={`mailto:${LEGAL_ENTITY.email}`}
                className="text-primary hover:underline"
              >
                {LEGAL_ENTITY.email}
              </a>
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold">Compromisso editorial</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Priorizamos fontes oficiais (Planalto, IBGE, CNBB quando aplicável).</li>
          <li>Revisamos páginas pelo menos uma vez por ano ou quando há mudança legal.</li>
          <li>Não publicamos conteúdo gerado automaticamente sem revisão humana.</li>
          <li>Correções podem ser solicitadas via página de Contato.</li>
        </ul>

        <p>
          Leia também nossa{" "}
          <a href="/linha-editorial" className="text-primary hover:underline">
            linha editorial
          </a>{" "}
          e{" "}
          <a href="/como-apuramos-as-datas" className="text-primary hover:underline">
            como apuramos as datas
          </a>
          .
        </p>
      </section>
    </ArticleLayout>
  );
};

export default Equipe;
